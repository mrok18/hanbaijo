import Link from 'next/link';
import { measureAll } from '@/lib/exchanges.mjs';
import { recent } from '@/lib/history';
import { jpy, pct, jst } from '@/lib/format';
import { MARKET_CATALOG } from '@/lib/market-data/catalog';
import { estimateOneWaySpreadCost } from '@/lib/market-data/cost';
import SpreadChart, { type Series } from './SpreadChart';

export const revalidate = 60;

const DEALER_COLOR = 'var(--series-dealer)';
const EXCHANGE_COLOR = 'var(--series-exchange)';

export default async function Home() {
  const snap = await measureAll();
  const live = snap.rows.filter((row) => !row.error);
  const dealers = live.filter((row) => row.venue === 'dealer');
  const exchanges = live.filter((row) => row.venue === 'exchange');
  const widestDealer = dealers.reduce(
    (current, row) => (current && current.spreadPct! > row.spreadPct! ? current : row),
    dealers[0],
  );
  const narrowestExchange = exchanges[0];
  const yen = (value: number) => (value < 1 ? '1円未満' : `${jpy(value)}円`);
  const gap =
    widestDealer && narrowestExchange
      ? estimateOneWaySpreadCost(1_000_000, widestDealer.spreadPct!) -
        estimateOneWaySpreadCost(1_000_000, narrowestExchange.spreadPct!)
      : null;
  const maxPct = Math.max(...live.map((row) => row.spreadPct!), 0.0001);

  const points = await recent(7);
  const series: Series[] = [
    {
      key: 'dealer',
      label: '販売所',
      color: DEALER_COLOR,
      points: points
        .map((point) => {
          const value = point.s['bitflyer-dealer'];
          return value
            ? ([point.t, ((value[1] - value[0]) / ((value[0] + value[1]) / 2)) * 100] as [number, number])
            : null;
        })
        .filter(Boolean) as [number, number][],
    },
    {
      key: 'exchange',
      label: '取引所（最狭）',
      color: EXCHANGE_COLOR,
      points: points
        .map((point) => {
          const values = Object.entries(point.s)
            .filter(([id]) => !id.endsWith('-dealer'))
            .map(([, value]) => ((value[1] - value[0]) / ((value[0] + value[1]) / 2)) * 100)
            .filter((value) => value > 0);
          return values.length ? ([point.t, Math.min(...values)] as [number, number]) : null;
        })
        .filter(Boolean) as [number, number][],
    },
  ];

  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> FX / CFD / STOCKS / CRYPTO</p>
          <h1>投資の利益を削るコストを、<br /><em>同じ条件で比べる。</em></h1>
          <p className="hero-lede">
            FXを起点に、CFD、株式、先物、暗号資産まで。スプレッド、手数料、金利、為替コストを、
            公称値・実測値・試算値に分けて可視化します。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/fx">FXコスト比較を見る</Link>
            <Link className="button secondary" href="/tools/cost-calculator">コストを試算</Link>
          </div>
          <p className="hero-proof">
            <span>FX比較ページ公開</span><span>広告と順位を分離</span><span>BTC実測は継続稼働</span>
          </p>
        </div>

        <aside className="live-console" aria-label="最新のBTCスプレッド計測サマリー">
          <div className="console-head">
            <span><i /> LIVE MEASUREMENT</span>
            <strong>BTC / JPY</strong>
          </div>
          {widestDealer && narrowestExchange ? (
            <>
              <div className="console-compare">
                <div>
                  <span className="console-label">販売所</span>
                  <strong className="dealer-value">{pct(widestDealer.spreadPct!)}</strong>
                  <small>{widestDealer.name.replace(' かんたん販売所', '')}</small>
                </div>
                <span className="compare-arrow" aria-hidden="true">→</span>
                <div>
                  <span className="console-label">取引所 最狭</span>
                  <strong className="exchange-value">{pct(narrowestExchange.spreadPct!)}</strong>
                  <small>{narrowestExchange.name}</small>
                </div>
              </div>
              <div className="console-impact">
                <span>100万円購入時の推定差額</span>
                <strong>{gap !== null && gap > 0 ? `${jpy(gap)}円` : '—'}</strong>
              </div>
            </>
          ) : (
            <p className="console-unavailable">現在、一部のデータ取得に時間がかかっています。</p>
          )}
          <div className="console-foot">
            <span>取得成功 {live.length} / {snap.rows.length}</span>
            <time dateTime={snap.measuredAt}>{jst(snap.measuredAt)}</time>
          </div>
        </aside>
      </section>

      <section className="market-radar" aria-labelledby="market-radar-title">
        <div className="section-heading compact">
          <div>
            <p className="section-index">COVERAGE</p>
            <h2 id="market-radar-title">計測対象を、金融商品全体へ</h2>
          </div>
          <Link href="/markets">対象と整備状況を見る →</Link>
        </div>
        <div className="market-grid">
          {MARKET_CATALOG.map((market) => market.href ? (
            <Link className={`market-card ${market.stage}`} href={market.href} key={market.code}>
              <div className="market-card-top">
                <span>{market.code}</span>
                <b>{market.stageLabel}</b>
              </div>
              <strong>{market.name}</strong>
              <p>{market.shortNote}</p>
            </Link>
          ) : (
            <div className={`market-card ${market.stage}`} key={market.code}>
              <div className="market-card-top"><span>{market.code}</span><b>{market.stageLabel}</b></div>
              <strong>{market.name}</strong><p>{market.shortNote}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fx-launch" aria-labelledby="fx-launch-title">
        <div className="fx-launch-copy">
          <p className="section-index inverse">COMPARE / FX</p>
          <h2 id="fx-launch-title">FXは「0.2銭」だけでは比べない。</h2>
          <p>
            公称スプレッドを円換算し、約定・スワップ・時間帯による変化まで分けて比較します。
            10社の公称条件を比較し、実測レートは利用許諾を確認できた提供元から追加します。
          </p>
          <Link href="/fx">FXコスト比較ページへ →</Link>
        </div>
        <div className="fx-launch-grid">
          <article><span>SPREAD</span><strong>円換算</strong><p>銭・pipsを取引数量ごとの負担へ</p></article>
          <article><span>EXECUTION</span><strong>約定品質</strong><p>表示価格と約定価格を分けて評価</p></article>
          <article><span>HOLDING</span><strong>スワップ</strong><p>受取と支払を保有日数で比較</p></article>
          <article><span>DATA</span><strong>許諾確認中</strong><p>確認できた提供元だけ自動計測</p></article>
        </div>
      </section>

      <section className="tool-promo" aria-labelledby="tool-promo-title">
        <div>
          <p className="section-index inverse">FREE TOOL / ESTIMATED DATA</p>
          <h2 id="tool-promo-title">違う商品のコストを、<br />同じものさしで。</h2>
          <p>取引金額と保有期間をそろえ、スプレッド・手数料・金利・為替コストを円換算します。</p>
          <Link href="/tools/cost-calculator">取引コスト計算機を使う →</Link>
        </div>
        <dl>
          <div><dt>暗号資産</dt><dd>スプレッド・売買手数料</dd></div>
          <div><dt>FX / CFD</dt><dd>スプレッド・保有金利</dd></div>
          <div><dt>株式</dt><dd>売買・為替・信用コスト</dd></div>
        </dl>
      </section>

      <section className="section-block" id="live-data">
        <div className="section-heading">
          <div>
            <p className="section-index">DATA LAB / LIVE</p>
            <h2>BTC/JPY スプレッド実測</h2>
            <p>データ計測基盤の稼働例として、同じ銘柄・同じ時刻の気配値を各社の公開APIから取得しています。</p>
          </div>
          <div className="measure-stamp">
            <span>最終計測</span>
            <strong>{jst(snap.measuredAt)}</strong>
          </div>
        </div>

        <div className="insight-grid">
          {widestDealer && (
            <div className="insight-card warm">
              <span className="insight-kicker">販売所スプレッド</span>
              <strong>{pct(widestDealer.spreadPct!)}</strong>
              <p>100万円の購入で約 {yen(estimateOneWaySpreadCost(1_000_000, widestDealer.spreadPct!))}</p>
            </div>
          )}
          {narrowestExchange && (
            <div className="insight-card cool">
              <span className="insight-kicker">取引所 最狭スプレッド</span>
              <strong>{pct(narrowestExchange.spreadPct!)}</strong>
              <p>100万円の購入で約 {yen(estimateOneWaySpreadCost(1_000_000, narrowestExchange.spreadPct!))}</p>
            </div>
          )}
          <div className="insight-card neutral">
            <span className="insight-kicker">データ品質</span>
            <strong>{Math.round((live.length / Math.max(snap.rows.length, 1)) * 100)}%</strong>
            <p>{live.length}件取得成功・失敗値は補完しません</p>
          </div>
        </div>

        <div className="data-panel">
          <div className="data-panel-head">
            <div>
              <h3>全社比較</h3>
              <p>スプレッドが狭い順。掲載順位は実測値だけで決まります。</p>
            </div>
            <div className="legend">
              <span><i style={{ background: EXCHANGE_COLOR }} />取引所</span>
              <span><i style={{ background: DEALER_COLOR }} />販売所</span>
            </div>
          </div>
          <div className="table-scroll">
            <table className="rates">
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>形式</th>
                  <th className="num">買値（ask）</th>
                  <th className="num">売値（bid）</th>
                  <th className="num">値幅</th>
                  <th className="num">スプレッド率</th>
                  <th className="bar-cell">比較</th>
                </tr>
              </thead>
              <tbody>
                {snap.rows.map((row) => (
                  <tr key={row.id}>
                    <td className="ex-name">{row.name}</td>
                    <td>
                      <span className={`venue-tag ${row.venue}`}>
                        {row.venue === 'dealer' ? '販売所' : '取引所'}
                      </span>
                    </td>
                    {row.error ? (
                      <td colSpan={5} className="err">取得できませんでした（{row.error}）</td>
                    ) : (
                      <>
                        <td className="num">{jpy(row.ask!)}</td>
                        <td className="num">{jpy(row.bid!)}</td>
                        <td className="num">{jpy(row.spread!)}</td>
                        <td className="num"><strong>{pct(row.spreadPct!)}</strong></td>
                        <td className="bar-cell">
                          <div
                            className={`bar ${row.venue}`}
                            style={{ width: `${Math.max((row.spreadPct! / maxPct) * 100, 1.2)}%` }}
                          />
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="panel-note">
            金額換算は、買ってすぐ売った場合の往復スプレッドの半分を「片道分」として試算しています。
            実際の約定価格や別途手数料とは異なる場合があります。
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="section-index">02 / HISTORY</p>
            <h2>瞬間値ではなく、時間で見る</h2>
            <p>狭い時間、広がる時間、データが取れない時間。そのすべてを履歴に残します。</p>
          </div>
          <span className="chart-period">直近7日間</span>
        </div>
        <SpreadChart series={series} />
      </section>

      <section className="method-band">
        <div>
          <p className="section-index inverse">03 / OUR STANDARD</p>
          <h2>比べる前に、数字の種類を分ける。</h2>
          <p>
            APIから取得した「実測値」、各社資料に記載された「公称値」、条件を置いて計算した「試算値」。
            出どころの違う数字を混ぜないことが、比較の出発点です。
          </p>
          <Link className="text-link-light" href="/method">計測・算出ルールを読む →</Link>
        </div>
        <ol className="standard-list">
          <li><b>01</b><span><strong>実測値</strong>取得時刻と取得元を表示</span></li>
          <li><b>02</b><span><strong>公称値</strong>公式情報と確認日を記載</span></li>
          <li><b>03</b><span><strong>試算値</strong>前提条件と計算式を公開</span></li>
        </ol>
      </section>

      <section className="section-block learn-section">
        <div className="section-heading compact">
          <div>
            <p className="section-index">04 / LEARN</p>
            <h2>数字を、自分で判断できる知識へ</h2>
          </div>
          <Link href="/articles">すべての記事を見る →</Link>
        </div>
        <div className="feature-articles">
          <Link href="/articles/fx-spread-cost" className="feature-article main-feature">
            <span>FX · 計算方法</span>
            <h3>FXの0.2銭は、<br />実際に何円なのか</h3>
            <p>銭・pipsの表示を、取引数量ごとの円額へ換算します。</p>
            <b>読む →</b>
          </Link>
          <div className="feature-stack">
            <Link href="/articles/fx-spread-time" className="feature-article">
              <span>FX · 時間帯</span>
              <h3>FXのスプレッドが広がりやすい時間帯</h3>
              <b>読む →</b>
            </Link>
            <Link href="/articles/cfd-price-adjustment" className="feature-article">
              <span>CFD · 保有コスト</span>
              <h3>価格調整額の仕組みと計算方法</h3>
              <b>読む →</b>
            </Link>
          </div>
        </div>
      </section>

      <section className="official-section">
        <div className="section-heading compact">
          <div>
            <p className="section-index">SOURCE LINKS</p>
            <h2>計測対象の公式サイト</h2>
          </div>
        </div>
        <ul className="official-grid">
          {[...exchanges, ...dealers]
            .filter((row, index, all) => all.findIndex((item) => item.name.split(' ')[0] === row.name.split(' ')[0]) === index)
            .map((row) => (
              <li key={row.id}>
                <a href={row.url} target="_blank" rel="nofollow sponsored noopener">
                  <span>{row.name.replace(' かんたん販売所', '')}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
        </ul>
        <p className="ad-disclosure">
          広告を含む場合があります。申込条件・手数料・取扱商品は、リンク先の公式サイトで必ず確認してください。
        </p>
      </section>
    </>
  );
}
