import { put, list } from '@vercel/blob';
import { measureAll } from '@/lib/exchanges.mjs';
import { requireCronAuthorization } from '@/lib/cronAuth';

// Vercel Cron から30分ごとに呼ばれる収集エンドポイント。
// 結果を Blob の history/YYYY-MM.json に追記する。
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const path = (ym: string) => `history/${ym}.json`;

/** 月ファイルを読む。無ければ空配列。 */
async function readHistory(key: string): Promise<unknown[]> {
  try {
    const found = await list({ prefix: key, limit: 1 });
    const url = found.blobs.find((b) => b.pathname === key)?.url;
    if (!url) return [];
    const res = await fetch(url, { cache: 'no-store' });
    return res.ok ? await res.json() : [];
  } catch {
    return [];
  }
}

export async function GET(req: Request) {
  const unauthorized = requireCronAuthorization(req);
  if (unauthorized) return unauthorized;

  const ym0 = new Date().toISOString().slice(0, 7);
  const prior = await readHistory(path(ym0));
  const last = prior.length ? (prior[prior.length - 1] as { t: number }).t : 0;
  const ageSec = Math.floor(Date.now() / 1000) - last;
  if (last && ageSec < 20 * 60) {
    return Response.json({ ok: true, skipped: `直近 ${Math.floor(ageSec / 60)} 分前に計測済み`, points: prior.length });
  }

  const snap = await measureAll();
  const ok = snap.rows.filter((r) => !r.error);
  if (ok.length === 0) {
    return Response.json({ ok: false, reason: '全社の取得に失敗したため書き込みを中止' }, { status: 502 });
  }

  const ym = snap.measuredAt.slice(0, 7);
  const key = path(ym);
  const hist: unknown[] = ym === ym0 ? prior : await readHistory(key);

  hist.push({
    t: Math.floor(new Date(snap.measuredAt).getTime() / 1000),
    s: Object.fromEntries(ok.map((r) => [r.id, [Math.round(r.bid!), Math.round(r.ask!)]])),
  });

  await put(key, JSON.stringify(hist), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 300,
  });
  await put('latest.json', JSON.stringify(snap), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
  });

  return Response.json({ ok: true, measuredAt: snap.measuredAt, sources: ok.length, points: hist.length });
}
