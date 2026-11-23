import { readFile, readdir, mkdir, open, writeFile, unlink } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash, randomUUID } from 'node:crypto';

const HOST = 'hanbaijo.com';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const KEY_URL = `https://${HOST}/indexnow-key.txt`;
const KEY_FILE = new URL('../public/indexnow-key.txt', import.meta.url);
const jst = () => new Date(Date.now() + 9 * 3600000).toISOString().replace('Z', '+09:00');
const hash = value => createHash('sha256').update(value).digest('hex');

export function validateManifest(manifest) {
  if (!Array.isArray(manifest.entries) || manifest.entries.length < 1 || manifest.entries.length > 3) {
    throw new Error('Provide 1–3 explicitly reviewed changed URLs');
  }
  const seen = new Set();
  for (const entry of manifest.entries) {
    const u = new URL(entry.url);
    if (u.protocol !== 'https:' || u.hostname !== HOST || u.port || u.username || u.password ||
        u.search || u.hash || u.href !== entry.url || seen.has(entry.url)) {
      throw new Error('URL must be unique, canonical HTTPS on hanbaijo.com, without query/fragment');
    }
    if (!/^[a-f0-9]{40}$/.test(entry.contentCommit ?? '') || !entry.changeReason?.trim()) {
      throw new Error('A fixed content commit and change reason are required');
    }
    seen.add(entry.url);
  }
  return manifest.entries;
}

export function checkCanonical(html, expected) {
  const canonical = [];
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    const attrs = Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs)]
      .map(m => [m[1].toLowerCase(), m[3]]));
    if (attrs.rel?.toLowerCase().split(/\s+/).includes('canonical')) canonical.push(attrs.href);
  }
  if (canonical.length !== 1 || canonical[0] !== expected) throw new Error('Canonical missing, ambiguous or mismatched');
}

// Manual only. Dry-run makes no network requests. Receipts prevent uncertain retries.
export async function submitBatch({ manifest, receiptsDir, submit = false, fetchImpl = globalThis.fetch }) {
  const entries = validateManifest(manifest);
  const key = await readFile(KEY_FILE, 'utf8');
  if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) throw new Error('Invalid local public verification file');
  if (!submit) return { status: 'dry_run', endpoint: ENDPOINT, entries, networkRequests: 0 };
  if (!receiptsDir) throw new Error('An existing receipt history location is required');
  await mkdir(receiptsDir, { recursive: true });
  const lockPath = resolve(receiptsDir, 'submission.lock');
  const lock = await open(lockPath, 'wx');
  let receipt, receiptPath;
  const save = () => writeFile(receiptPath, JSON.stringify(receipt, null, 2) + '\n', 'utf8');
  try {
    const prior = [];
    for (const name of await readdir(receiptsDir)) {
      if (name.endsWith('.receipt.json')) prior.push(JSON.parse(await readFile(resolve(receiptsDir, name), 'utf8')));
    }
    const remaining = entries.filter(entry => {
      const matching = prior.filter(r => r.postAttempted && r.entries?.some(e => e.url === entry.url && e.contentCommit === entry.contentCommit));
      if (matching.some(r => ![200, 202].includes(r.httpStatus))) throw new Error('Earlier rejected/unknown attempt: stop for review, do not resend');
      return !matching.some(r => [200, 202].includes(r.httpStatus));
    });
    if (!remaining.length) return { status: 'already_received', entries: [], postAttempted: false };
    receiptPath = resolve(receiptsDir, `${new Date().toISOString().replace(/[:.]/g, '-')}-${randomUUID()}.receipt.json`);
    receipt = { startedAtJst: jst(), endpoint: ENDPOINT, keyLocation: KEY_URL, keyFileSha256: hash(key),
      entries: remaining, skippedAlreadyReceived: entries.length - remaining.length, preflight: [],
      status: 'preflight', postAttempted: false, httpStatus: null, responseBody: null,
      acceptedMeaning: 'Endpoint receipt only; not indexing, per-engine acceptance, traffic or revenue' };
    await save();
    const get = async url => {
      const response = await fetchImpl(url, { method: 'GET', redirect: 'manual', signal: AbortSignal.timeout(15000) });
      if (response.status !== 200) throw new Error(`Preflight GET status ${response.status}`);
      const body = await response.text();
      if (Buffer.byteLength(body) > 4 * 1024 * 1024) throw new Error('Preflight response too large');
      return { response, body };
    };
    const verification = await get(KEY_URL);
    if (verification.body !== key) throw new Error('Public verification file body differs from local file');
    receipt.preflight.push({ url: KEY_URL, httpStatus: 200, exactBodyMatch: true, sha256: hash(verification.body) });
    for (const entry of remaining) {
      const { response, body } = await get(entry.url);
      if (!(response.headers.get('content-type') ?? '').toLowerCase().includes('text/html')) throw new Error('Page is not HTML');
      if (/noindex/i.test(response.headers.get('x-robots-tag') ?? '') || /<meta\b[^>]*\bnoindex\b/i.test(body)) throw new Error('Page has noindex');
      checkCanonical(body, entry.url);
      receipt.preflight.push({ url: entry.url, httpStatus: 200, canonical: entry.url, sha256: hash(body) });
    }
    const payload = JSON.stringify({ host: HOST, key, keyLocation: KEY_URL, urlList: remaining.map(e => e.url) });
    receipt.payloadSha256 = hash(payload);
    receipt.status = 'request_outcome_unknown';
    receipt.postAttempted = true; // Persist before POST; crash or timeout must never invite a retry.
    receipt.postStartedAtJst = jst();
    await save();
    const response = await fetchImpl(ENDPOINT, { method: 'POST', redirect: 'manual',
      headers: { 'content-type': 'application/json; charset=utf-8' }, body: payload, signal: AbortSignal.timeout(15000) });
    receipt.httpStatus = response.status;
    receipt.status = response.status === 200 ? 'received' : response.status === 202 ? 'received_key_verification_pending' : 'rejected';
    receipt.responseHeaders = Object.fromEntries(['date', 'content-type', 'retry-after'].map(name => [name, response.headers.get(name)]));
    try { receipt.responseBody = (await response.text()).slice(0, 16000); }
    catch { receipt.responseBodyReadError = true; }
    receipt.completedAtJst = jst();
    await save();
    return { ...receipt, receiptPath };
  } catch (error) {
    if (receipt) {
      receipt.status = receipt.postAttempted ? 'request_outcome_unknown' : 'preflight_failed';
      receipt.error = String(error.message);
      receipt.completedAtJst = jst();
      await save();
    }
    throw error;
  } finally {
    await lock.close();
    await unlink(lockPath);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    const submit = args.includes('--submit');
    const positional = args.filter(a => a !== '--submit');
    if (positional.length !== 2 || args.filter(a => a === '--submit').length > 1) {
      throw new Error('Usage: node scripts/submit-indexnow.mjs manifest.json receipts-directory [--submit]');
    }
    const result = await submitBatch({ manifest: JSON.parse(await readFile(positional[0], 'utf8')),
      receiptsDir: resolve(positional[1]), submit });
    console.log(JSON.stringify(result, null, 2));
    if (result.postAttempted && ![200, 202].includes(result.httpStatus)) process.exitCode = 1;
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
