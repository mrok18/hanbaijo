// 履歴は Vercel Blob に蓄積している（収集は /api/collect を Vercel Cron が30分ごとに叩く）。
import { list } from '@vercel/blob';

export interface Point { t: number; s: Record<string, [number, number]> }

async function month(ym: string): Promise<Point[]> {
  const key = `history/${ym}.json`;
  try {
    const found = await list({ prefix: key, limit: 1 });
    const url = found.blobs.find((b) => b.pathname === key)?.url;
    if (!url) return [];
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    return (await res.json()) as Point[];
  } catch {
    return [];
  }
}

/** 直近 days 日分の計測点を古い順に返す。月をまたぐ場合は2ファイルを結合する。 */
export async function recent(days = 7): Promise<Point[]> {
  const now = new Date();
  const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const ym = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  const [a, b] = await Promise.all([month(ym(prev)), month(ym(now))]);
  const since = Math.floor(Date.now() / 1000) - days * 86400;
  return [...a, ...b].filter((p) => p.t >= since).sort((x, y) => x.t - y.t);
}
