// GitHub Actions から定期実行される収集スクリプト。
// data/latest.json（最新スナップショット）と data/history/YYYY-MM.json（追記型の履歴）を更新する。
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { measureAll } from '../lib/exchanges.mjs';

const snap = await measureAll();

const ok = snap.rows.filter((r) => !r.error).length;
if (ok === 0) {
  console.error('全社の取得に失敗したため書き込みを中止します。');
  process.exit(1);
}

await mkdir('data/history', { recursive: true });
await writeFile('data/latest.json', JSON.stringify(snap, null, 1));

// 履歴は月ごとのファイルに追記。1 行 = 1 回の計測。
const month = snap.measuredAt.slice(0, 7);
const path = `data/history/${month}.json`;
let hist = [];
try {
  hist = JSON.parse(await readFile(path, 'utf8'));
} catch {}
hist.push({
  t: Math.floor(new Date(snap.measuredAt).getTime() / 1000),
  s: Object.fromEntries(
    snap.rows.filter((r) => !r.error).map((r) => [r.id, [Math.round(r.bid), Math.round(r.ask)]])
  ),
});
await writeFile(path, JSON.stringify(hist));

console.log(`${snap.measuredAt} 取得成功 ${ok}/${snap.rows.length} 社 / 履歴 ${hist.length} 件`);
for (const r of snap.rows) {
  console.log(r.error ? `  NG ${r.name}: ${r.error}` : `  OK ${r.name}: ${r.spreadPct.toFixed(4)}%`);
}
