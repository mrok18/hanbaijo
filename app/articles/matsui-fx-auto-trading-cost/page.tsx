import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-fx-auto-trading-cost' },
  title: 'MATSUI FX自動売買は100円から？必要資金とロスカットを計算',
  description: 'MATSUI FXのリピート系自動売買について、1通貨・100円からの意味、複数注文の必要証拠金、評価損への備え、コストを解説します。',
};

const FUND_EXAMPLES = [
  { quantity: '各1通貨', total: '3通貨', margin: '17.76円', loss: '3円', subtotal: '20.76円' },
  { quantity: '各10通貨', total: '30通貨', margin: '177.60円', loss: '30円', subtotal: '207.60円' },
  { quantity: '各100通貨', total: '300通貨', margin: '1,776円', loss: '300円', subtotal: '2,076円' },
] as const;

export default function Page() {
  return (
    <article>
      <ArticleStructuredData slug="matsui-fx-auto-trading-cost" publishedAt="2026-09-07" />
      <p className="page-kicker">MATSUI FX AUTO TRADING</p>
      <h1>MATSUI FX自動売買は100円から？<br />必要資金とロスカットを計算</h1>
      <p className="lede">MATSUI FXの自動売買は1通貨単位から設定できます。ただし、リピート注文はレンジ内へ複数の注文を置くため、「1注文を出せる金額」と「設定全体を運用できる資金」は別です。</p>

      <div className="callout"><strong>必要資金は2つに分ける</strong><p>全注文・建玉に必要な証拠金に、相場が反対方向へ進んだときの評価損へ耐える資金を加えます。スプレッドや支払スワップも余裕資金を減らします。</p></div>

      <h2>自動売買は、相場を予測するAIではない</h2>
      <p>松井証券の自動売買は、注文レンジ、注文値幅、益出し幅などをあらかじめ設定し、そのルールに沿って新規注文と決済注文を繰り返す仕組みです。人が画面を見続けなくても注文は動きますが、利益を保証したり、相場に合わせて自動的に最適化したりするものではありません。</p>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>注文レンジ</h3><p>新規注文を並べる上限と下限。広いほど注文数と想定資金が増えやすくなります。</p></article>
        <article><b>02</b><h3>注文値幅</h3><p>新規注文を置く間隔。狭くすると同じレンジ内の注文数が増えます。</p></article>
        <article><b>03</b><h3>益出し幅</h3><p>建玉からどれだけ有利に動いたら決済するかを設定します。</p></article>
        <article><b>04</b><h3>運用停止ライン</h3><p>損失を確定して運用を停止する価格。設定の有無と位置を確認します。</p></article>
      </div>

      <h2>必要資金の基本式</h2>
      <div className="formula-box">
        <code>自動売買の必要資金 ＝ 全建玉・注文の必要証拠金 ＋ 評価損に備える資金</code>
        <code>必要証拠金 ＝ 為替レート × 取引数量 × 証拠金率</code>
        <small>さらにスプレッド、支払スワップ、急変時の価格差を考慮して余裕を持たせる</small>
      </div>
      <p>通常の1回注文と違い、自動売買では相場がレンジ内を進むにつれて複数の建玉を同時に持つ場合があります。各注文が小さくても、合計数量と評価損は積み上がります。</p>

      <h2>3本の買い注文を持つ簡易例</h2>
      <p>米ドル/円を150円、149円、148円でそれぞれ買い、現在値が148円になったと仮定します。レバレッジ25倍コースの証拠金率4％を使うと、数量による違いは次のとおりです。</p>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>1注文の数量</th><th className="num">合計数量</th><th className="num">必要証拠金</th><th className="num">評価損</th><th className="num">単純合計</th></tr></thead>
          <tbody>{FUND_EXAMPLES.map((example) => (
            <tr key={example.quantity}>
              <td className="ex-name">{example.quantity}</td>
              <td className="num">{example.total}</td>
              <td className="num">{example.margin}</td>
              <td className="num">{example.loss}</td>
              <td className="num"><strong>{example.subtotal}</strong></td>
            </tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">現在値148円で全建玉の必要証拠金を再計算した単純例。実際は注文状況、端数処理、スプレッド、スワップ、ロスカット基準等で異なります。</p></div>

      <h2>「100円から」と「100円で運用できる」は違う</h2>
      <p>公式サイトの100円は、1通貨単位から自動売買を始められることを示す案内です。注文レンジを広げる、値幅を狭くする、1注文の数量を増やすほど、発注される注文数と保有数量が増えやすくなります。100円だけを上限損失や推奨入金額とは考えません。</p>
      <ul>
        <li>レンジ内で最大何本の新規注文が出るか</li>
        <li>すべて約定したときの合計数量はいくつか</li>
        <li>運用停止ラインまで進んだ場合の評価損はいくらか</li>
        <li>支払スワップとスプレッドを含めて余力が残るか</li>
      </ul>

      <h2>手数料無料でも、取引コストはゼロではない</h2>
      <p>松井証券は自動売買の取引手数料と利用料を無料と案内しています。一方、売値と買値の差であるスプレッドは発生し、建玉を翌取引日へ持ち越すとスワップポイントの受払いもあります。注文回数が多い仕組みほど、1回あたりの小さな差も合計で確認します。</p>
      <div className="formula-box"><code>自動売買の取引コスト ＝ スプレッド × 約定数量 × 売買回数 ＋ 支払スワップ等</code><small>受取スワップは一定ではなく、受取から支払へ転じる場合もある</small></div>

      <h2>開始前に確認する5項目</h2>
      <ol>
        <li><strong>最大注文数：</strong>レンジと値幅から、新規注文が最大何本並ぶか確認する</li>
        <li><strong>合計数量：</strong>1注文の数量ではなく、全注文が約定した場合で計算する</li>
        <li><strong>想定評価損：</strong>レンジ下限や運用停止ラインでの含み損を試算する</li>
        <li><strong>維持率：</strong>必要証拠金ぴったりではなく、ロスカットまでの余力を残す</li>
        <li><strong>停止後の建玉：</strong>運用停止時に未決済建玉を残すか、一括決済するか確認する</li>
      </ol>

      <section className="article-affiliate" aria-label="MATSUI FXの広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。資金計算・注意点・掲載順とは分けて掲載しています。</p>
      </section>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.matsui.co.jp/fx/auto-trading/deposit/" target="_blank" rel="noopener noreferrer">松井証券「自動売買に必要な資金」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/auto-trading/about/" target="_blank" rel="noopener noreferrer">松井証券「自動売買とは？」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/auto-trading/cost/" target="_blank" rel="noopener noreferrer">松井証券「自動売買のコスト」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX 取引ルール」</a></li>
        </ul>
        <p>取引条件は2026年9月7日に確認しました。運用開始前に公式画面で最新条件と証拠金シミュレーションを確認してください。</p>
      </section>

      <p><Link href="/articles/matsui-fx-one-currency">1通貨取引の必要証拠金と損益を見る →</Link></p>
      <p><Link href="/fx/matsui">MATSUI FXのコストシートを見る →</Link></p>
      <p><Link href="/fx/losscut-comparison">FX各社のロスカット基準を比較する →</Link></p>
    </article>
  );
}
