// X への自動投稿文をつくる。数字だけを述べ、勧誘表現は入れない（JVCEA 自主規制対応）。
// 断定や推奨（「買うべき」「今がチャンス」など）は絶対に書かない。

const pct = (v) => (v >= 1 ? v.toFixed(2) : v >= 0.01 ? v.toFixed(3) : v.toFixed(5)) + '%';
const yen = (v) => Math.round(v).toLocaleString('ja-JP');
const jst = (iso, opts) =>
  new Intl.DateTimeFormat('ja-JP', { timeZone: 'Asia/Tokyo', ...opts }).format(new Date(iso));

/** 現在値の定期投稿。販売所と取引所の差を数字だけで示す。 */
export function nowPost(snap) {
  const live = snap.rows.filter((r) => !r.error);
  const dealers = live.filter((r) => r.venue === 'dealer');
  const exchanges = live.filter((r) => r.venue === 'exchange');
  if (!dealers.length || !exchanges.length) return null;

  const d = dealers.reduce((a, b) => (a.spreadPct > b.spreadPct ? a : b));
  const e = exchanges.reduce((a, b) => (a.spreadPct < b.spreadPct ? a : b));
  const cost = (p) => (1_000_000 * p) / 100 / 2;
  const gap = cost(d.spreadPct) - cost(e.spreadPct);
  if (gap < 100) return null; // 差が小さいときは投稿しない

  const t = jst(snap.measuredAt, { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  return [
    `【${t} 実測】ビットコインのスプレッド`,
    ``,
    `販売所（${d.name.replace(' かんたん販売所', '')}）${pct(d.spreadPct)}`,
    `取引所（${e.name}）${pct(e.spreadPct)}`,
    ``,
    `100万円を買うとき、負担の差は約 ${yen(gap)} 円。`,
    `30分ごとに自動計測しています。`,
    `https://hanbaijo.com`,
  ].join('\n');
}

/** スプレッドが普段より大きく開いたときの速報。thresholdPct を超えた販売所を伝える。 */
export function alertPost(snap, baselinePct, thresholdRatio = 1.5) {
  const d = snap.rows.filter((r) => !r.error && r.venue === 'dealer');
  if (!d.length || !baselinePct) return null;
  const worst = d.reduce((a, b) => (a.spreadPct > b.spreadPct ? a : b));
  if (worst.spreadPct < baselinePct * thresholdRatio) return null;

  const t = jst(snap.measuredAt, { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  return [
    `【${t}】販売所のスプレッドが平常より拡大しています`,
    ``,
    `${worst.name.replace(' かんたん販売所', '')}: ${pct(worst.spreadPct)}`,
    `直近の平常値: ${pct(baselinePct)}`,
    ``,
    `スプレッドは相場状況により変動します。実測値はこちら。`,
    `https://hanbaijo.com`,
  ].join('\n');
}

/** 前日ぶんの集計投稿（毎朝）。最大・最小と、最も狭かった時間帯を出す。 */
export function dailyPost(points, dealerId = 'bitflyer-dealer') {
  const rate = (v) => ((v[1] - v[0]) / ((v[0] + v[1]) / 2)) * 100;
  const rows = points
    .map((p) => (p.s[dealerId] ? { t: p.t, v: rate(p.s[dealerId]) } : null))
    .filter(Boolean);
  if (rows.length < 12) return null;

  const max = rows.reduce((a, b) => (a.v > b.v ? a : b));
  const min = rows.reduce((a, b) => (a.v < b.v ? a : b));
  const avg = rows.reduce((s, r) => s + r.v, 0) / rows.length;
  const hm = (t) => jst(new Date(t * 1000).toISOString(), { hour: '2-digit', minute: '2-digit' });
  const day = jst(new Date(rows[0].t * 1000).toISOString(), { month: 'numeric', day: 'numeric' });

  return [
    `【${day} の記録】販売所スプレッドの一日`,
    ``,
    `最大 ${pct(max.v)}（${hm(max.t)}）`,
    `最小 ${pct(min.v)}（${hm(min.t)}）`,
    `平均 ${pct(avg)}`,
    ``,
    `同じ日でもこれだけ動きます。30分ごとに自動計測。`,
    `https://hanbaijo.com`,
  ].join('\n');
}
