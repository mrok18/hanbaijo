import { put, list } from '@vercel/blob';
import { measureAll } from '@/lib/exchanges.mjs';
import { nowPost } from '@/lib/postText.mjs';
import { postTweet } from '@/lib/xClient.mjs';

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
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get('authorization');
  const isCron = req.headers.get('x-vercel-cron') !== null;
  if (secret ? auth !== `Bearer ${secret}` : !isCron) return new Response('forbidden', { status: 403 });

  const snap = await measureAll();
  const text = nowPost(snap);
  if (!text) return Response.json({ ok: true, skipped: '投稿に値する差がありません' });

  const state = await readState();
  if (state.lastText === text) return Response.json({ ok: true, skipped: '前回と同じ内容のため見送り' });

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
