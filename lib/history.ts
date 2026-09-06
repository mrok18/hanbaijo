// 履歴は GitHub 上の data/history/*.json を実行時に読む。
// 収集コミットでサイトを再ビルドしなくて済むよう、あえてリポジトリから直接取得している。
const REPO = process.env.NEXT_PUBLIC_REPO_SLUG ?? '';
const BRANCH = process.env.NEXT_PUBLIC_REPO_BRANCH ?? 'main';

export interface Point { t: number; s: Record<string, [number, number]> }

async function month(ym: string): Promise<Point[]> {
  if (!REPO) return [];
  const url = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/data/history/${ym}.json`;
  try {
    const res = await fetch(url, { next: { revalidate: 900 } });
    if (!res.ok) return [];
    return (await res.json()) as Point[];
  } catch {
    return [];
  }
}

/** 直近 days 日分の計測点を古い順に返す。月をまたぐ場合は 2 ファイルを結合する。 */
export async function recent(days = 7): Promise<Point[]> {
  const now = new Date();
  const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const ym = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  const [a, b] = await Promise.all([month(ym(prev)), month(ym(now))]);
  const since = Math.floor(Date.now() / 1000) - days * 86400;
  return [...a, ...b].filter((p) => p.t >= since).sort((x, y) => x.t - y.t);
}
