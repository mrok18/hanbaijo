import Link from 'next/link';
import { measureAll } from '@/lib/exchanges.mjs';
import { recent } from '@/lib/history';
import { jpy, pct, jst } from '@/lib/format';
import SpreadChart, { type Series } from './SpreadChart';

export const revalidate = 60;

const DEALER_COLOR = 'var(--series-dealer)';
const EXCHANGE_COLOR = 'var(--series-exchange)';

export default async function Home() {
  const snap = await measureAll();
  const live = snap.rows.filter((r) => !r.error);
  const dealers = live.filter((r) => r.venue === 'dealer');
  const exchanges = live.filter((r) => r.venue === 'exchange');
  const worstDealer = dealers.reduce((a, b) => (a && a.spreadPct! > b.spreadPct! ? a : b), dealers[0]);
  const bestExchange = exchanges[0];
  // 100万円分を買うときの実質コスト（片道）
  const costOn = (pctVal: number) => (1_000_000 * pctVal) / 100 / 2;
  const yen = (v: number) => (v < 1 ? '1円未満' : jpy(v) + '円');
  const gap =
    worstDealer && bestExchange ? costOn(worstDealer.spreadPct!) - costOn(bestExchange.spreadPct!) : null;
  const maxPct = Math.max(...live.map((r) => r.spreadPct!), 0.0001);

  const points = await recent(7);
  const series: Series[] = [
    {
      key: 'dealer',
      label: '販売所',
      color: DEALER_COLOR,
      points: points
        .map((p) => {
          const v = p.s['bitflyer-dealer'];
          return v ? ([p.t, ((v[1] - v[0]) / ((v[0] + v[1]) / 2)) * 100] as [number, number]) : null;
        })
        .filter(Boolean) as [number, number][],
    },
    {
      key: 'exchange',
      label: '取引所（最狭）',
      color: EXCHANGE_COLOR,
      points: points
        .map((p) => {
          const vals = Object.entries(p.s)
            .filter(([id]) => !id.endsWith('-dealer'))
            .map(([, v]) => ((v[1] - v[0]) / ((v[0] + v[1]) / 2)) * 100)
            .filter((v) => v > 0);
          return vals.length ? ([p.t, Math.min(...vals)] as [number, number]) : null;
        })
        .filter(Boolean) as [number, number][],
    },
  ];

  return (
    <>
      <h1>販売所と取引所で、ビットコインの売買コストはどれだけ違うのか</h1>
      <p className="lede">
        国内の暗号資産取引所について、スプレッド（買値と売値の差＝実質的な売買コスト）を各社の公開APIから
        <strong>30分ごとに自動計測</strong>し、加工せずそのまま掲載しています。記事の手動集計ではないため、
        「いま現在」の数字が表示されます。
      </p>

      {worstDealer && bestExchange && (
        <div className="hero">
          <div className="hero-row">
            <div>
              <div className="hero-label">販売所（{worstDealer.name.replace(' かんたん販売所', '')}）</div>
              <div className="hero-num dealer">{pct(worstDealer.spreadPct!)}</div>
              <div className="hero-sub">100万円の購入で約 {yen(costOn(worstDealer.spreadPct!))} の負担</div>
            </div>
            <div>
              <div className="hero-label">取引所（最も狭い {bestExchange.name}）</div>
              <div className="hero-num exchange">{pct(bestExchange.spreadPct!)}</div>
              <div className="hero-sub">100万円の購入で約 {yen(costOn(bestExchange.spreadPct!))} の負担</div>
            </div>
            {gap !== null && gap > 100 && (
              <div>
                <div className="hero-label">100万円あたりの差額</div>
                <div className="hero-num">{jpy(gap)}円</div>
                <div className="hero-sub">同じ銘柄・同じ瞬間の比較</div>
              </div>
            )}
          </div>
          <p className="hero-note">
            最終計測: {jst(snap.measuredAt)}　／　銘柄: ビットコイン（BTC/JPY）　／　
            負担額は「買ってすぐ売った場合の往復コストの半分」を片道分として算出しています。
          </p>
        </div>
      )}

      <h2>全社のスプレッド一覧</h2>
      <div className="legend">
        <span><i style={{ background: EXCHANGE_COLOR }} />取引所（板・利用者どうしの売買）</span>
        <span><i style={{ background: DEALER_COLOR }} />販売所（業者が提示するレート）</span>
      </div>
      <div className="card table-scroll">
        <table className="rates">
          <thead>
            <tr>
              <th>取引所</th>
              <th>形式</th>
              <th className="num">買値（ask）</th>
              <th className="num">売値（bid）</th>
              <th className="num">スプレッド</th>
              <th className="num">率</th>
              <th className="bar-cell">　</th>
            </tr>
          </thead>
          <tbody>
            {snap.rows.map((r) => (
              <tr key={r.id}>
                <td className="ex-name">{r.name}</td>
                <td>
                  <span className={`venue-tag ${r.venue}`}>{r.venue === 'dealer' ? '販売所' : '取引所'}</span>
                </td>
                {r.error ? (
                  <td colSpan={5} className="err">取得できませんでした（{r.error}）</td>
                ) : (
                  <>
                    <td className="num">{jpy(r.ask!)}</td>
                    <td className="num">{jpy(r.bid!)}</td>
                    <td className="num">{jpy(r.spread!)}</td>
                    <td className="num"><strong>{pct(r.spreadPct!)}</strong></td>
                    <td className="bar-cell">
                      <div className={`bar ${r.venue}`} style={{ width: `${Math.max((r.spreadPct! / maxPct) * 100, 1.2)}%` }} />
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted" style={{ marginTop: 10 }}>
        スプレッドの狭い順に並べています。掲載順は実測値のみで機械的に決まり、広告の有無とは無関係です。
        棒の長さは行間で比較するためのもので、対数ではなく実数の比です。
      </p>

      <h2>直近7日間の推移</h2>
      <SpreadChart series={series} />

      <h2>なぜこれだけ差がつくのか</h2>
      <div className="callout">
        <p style={{ margin: 0 }}>
          <strong>販売所</strong>は、取引所の会社が提示する価格で売買する仕組みです。手数料は「無料」と表示されることが多いのですが、
          買値と売値の差（スプレッド）が会社の収益になっているため、そこに実質的なコストが含まれています。
        </p>
        <p style={{ margin: '10px 0 0' }}>
          <strong>取引所</strong>は、利用者どうしが板で売買する仕組みです。売買手数料は別途かかりますが（多くの社で 0.01〜0.15% 程度）、
          スプレッド自体は数円まで縮むことがあります。上の表の差は、この構造の違いから生まれています。
        </p>
      </div>
      <p style={{ marginTop: 14 }}>
        詳しくは <Link href="/articles/hanbaijo-torihikijo">販売所と取引所は何が違うのか</Link> と{' '}
        <Link href="/method">計測方法</Link> をご覧ください。
      </p>

      <h2>各社の公式サイト</h2>
      <ul className="cta-list">
        {[...exchanges, ...dealers]
          .filter((r, i, a) => a.findIndex((x) => x.name.split(' ')[0] === r.name.split(' ')[0]) === i)
          .map((r) => (
            <li key={r.id}>
              <a href={r.url} target="_blank" rel="nofollow sponsored noopener">
                <span>{r.name.replace(' かんたん販売所', '')}</span>
                <span className="go">公式サイトを見る →</span>
              </a>
            </li>
          ))}
      </ul>
      <p className="muted" style={{ marginTop: 10 }}>
        上記リンクには広告が含まれる場合があります。口座開設の可否・手数料・取扱銘柄などの条件は各社の公式サイトで必ずご確認ください。
      </p>
    </>
  );
}
