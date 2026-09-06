import { put, list } from '@vercel/blob';
import { measureAll } from '@/lib/exchanges.mjs';

// Vercel Cron から30分ごとに呼ばれる収集エンドポイント。
// 結果を Blob の history/YYYY-MM.json に追記する。
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const path = (ym: string) => `history/${ym}.json`;

export async function GET(req: Request) {
  // Vercel Cron 以外からの書き込みを拒否する（CRON_SECRET 未設定時はヘッダで判定）
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get('authorization');
  const isCron = req.headers.get('x-vercel-cron') !== null;
  if (secret ? auth !== `Bearer ${secret}` : !isCron) {
    return new Response('forbidden', { status: 403 });
  }

  const snap = await measureAll();
  const ok = snap.rows.filter((r) => !r.error);
  if (ok.length === 0) {
    return Response.json({ ok: false, reason: '全社の取得に失敗したため書き込みを中止' }, { status: 502 });
  }

  const ym = snap.measuredAt.slice(0, 7);
  const key = path(ym);

  // 既存の月ファイルを読む（無ければ空から始める）
  let hist: unknown[] = [];
  try {
    const found = await list({ prefix: key, limit: 1 });
    const url = found.blobs.find((b) => b.pathname === key)?.url;
    if (url) {
      const res = await fetch(url, { cache: 'no-store' });
      if (res.ok) hist = await res.json();
    }
  } catch {
    // 読めない場合も収集は続ける（この回の1点だけになる）
  }

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
