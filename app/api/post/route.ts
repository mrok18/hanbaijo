import { put, list } from '@vercel/blob';
import { measureAll } from '@/lib/exchanges.mjs';
import { nowPost } from '@/lib/postText.mjs';
import { postTweet, whoAmI } from '@/lib/xClient.mjs';

// X への自動投稿。Vercel Cron から1日数回呼ばれる。
// 直近の投稿記録を Blob に残し、同じ内容を続けて出さないようにする。
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const STATE = 'x-post-state.json';

async function readState(): Promise<{ lastText?: string; lastAt?: string }> {
  try {
    const found = await list({ prefix: STATE, limit: 1 });
    const url = found.blobs.find((b) => b.pathname === STATE)?.url;
    if (!url) return {};
    const res = await fetch(url, { cache: 'no-store' });
    return res.ok ? await res.json() : {};
  } catch {
    return {};
  }
}

export async function GET(req: Request) {
  // 投稿は公開される副作用があるため、収集より厳しく守る。
  // ①呼び出し元が Vercel Cron であること ②前回投稿から3時間以上あいていること の両方。
  const ua = req.headers.get('user-agent') ?? '';
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get('authorization');
  const fromCron = /vercel-cron/i.test(ua) || req.headers.get('x-vercel-cron') !== null;
  const okSecret = secret ? auth === `Bearer ${secret}` : false;
  if (!fromCron && !okSecret) {
    console.log('[post] 拒否 ua=%s', ua);
    return new Response('forbidden', { status: 403 });
  }

  const state0 = await readState();
  if (state0.lastAt && Date.now() - Date.parse(state0.lastAt) < 3 * 60 * 60 * 1000) {
    return Response.json({ ok: true, skipped: '前回投稿から3時間未満' });
  }

  // 投稿先が意図したアカウントであることを毎回確かめる。
  // 別アカウントのトークンが入っている場合はここで止まる（誤投稿の防止）。
  const expected = (process.env.X_EXPECTED_USERNAME ?? 'hanbaijyo18').toLowerCase();
  let me;
  try {
    me = await whoAmI();
  } catch (e) {
    return Response.json({ ok: false, error: `投稿先の確認に失敗: ${(e as Error).message}` }, { status: 502 });
  }
  if (me.username.toLowerCase() !== expected) {
    console.log('[post] 投稿先が違うため中止 expected=@%s actual=@%s', expected, me.username);
    return Response.json({
      ok: false,
      blocked: `投稿先が @${expected} ではなく @${me.username} のため中止しました`,
    }, { status: 409 });
  }

  const snap = await measureAll();
  const text = nowPost(snap);
  if (!text) return Response.json({ ok: true, skipped: '投稿に値する差がありません' });

  if (state0.lastText === text) return Response.json({ ok: true, skipped: '前回と同じ内容のため見送り' });

  try {
    const posted = await postTweet(text);
    await put(STATE, JSON.stringify({ lastText: text, lastAt: new Date().toISOString(), lastId: posted.id }), {
      access: 'public', contentType: 'application/json', addRandomSuffix: false, allowOverwrite: true,
    });
    return Response.json({ ok: true, id: posted.id, text });
  } catch (e) {
    return Response.json({ ok: false, error: String((e as Error).message) }, { status: 502 });
  }
}
