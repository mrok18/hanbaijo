import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株の国内株手数料｜買って売る往復コストを計算',
  description: 'DMM 株の国内株現物手数料を、買付と売却を合わせた往復コストで計算。5万円、10万円、20万円、50万円、100万円、300万円の例を整理します。',
};

const EXAMPLES = [
  { value: '5万円', oneWay: '55円', roundTrip: '110円', rate: '0.11％' },
  { value: '10万円', oneWay: '88円', roundTrip: '176円', rate: '0.088％' },
  { value: '20万円', oneWay: '106円', roundTrip: '212円', rate: '0.053％' },
  { value: '50万円', oneWay: '198円', roundTrip: '396円', rate: '0.0396％' },
  { value: '100万円', oneWay: '374円', roundTrip: '748円', rate: '0.0374％' },
  { value: '300万円', oneWay: '660円', roundTrip: '1,320円', rate: '0.022％' },
  { value: '500万円', oneWay: '880円', roundTrip: '1,760円', rate: '0.0176％' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DMM KABU / DOMESTIC STOCK</p>
      <h1>DMM 株の国内株手数料<br />買って売る往復コストを計算</h1>
      <p className="lede">DMM 株の国内株現物手数料は、1日の合計額ではなく「1回の約定代金」で決まります。株を買う注文と売る注文にはそれぞれ手数料がかかるため、最終的な負担は往復で確認します。</p>

      <div className="callout"><strong>先に結論</strong><p>同じ金額で買って売る単純例では、50万円の往復は396円、100万円の往復は748円です。買付と売却の約定代金が異なれば、それぞれ別の料金区分で計算します。</p></div>

      <h2>国内株現物の手数料表</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th className="num">1注文の約定代金</th><th className="num">手数料（税込）</th></tr></thead>
          <tbody>
            <tr><td className="num">5万円以下</td><td className="num"><strong>55円</strong></td></tr>
            <tr><td className="num">10万円以下</td><td className="num"><strong>88円</strong></td></tr>
            <tr><td className="num">20万円以下</td><td className="num"><strong>106円</strong></td></tr>
            <tr><td className="num">50万円以下</td><td className="num"><strong>198円</strong></td></tr>
            <tr><td className="num">100万円以下</td><td className="num"><strong>374円</strong></td></tr>
            <tr><td className="num">150万円以下</td><td className="num"><strong>440円</strong></td></tr>
            <tr><td className="num">300万円以下</td><td className="num"><strong>660円</strong></td></tr>
            <tr><td className="num">300万円超</td><td className="num"><strong>880円</strong></td></tr>
          </tbody>
        </table>
      </div><p className="panel-note">インターネット経由の国内株式現物取引。NISA、信用取引、電話注文などは適用条件が異なります。</p></div>

      <h2>同じ金額で買って売る場合</h2>
      <div className="formula-box">
        <code>往復手数料 ＝ 買付時の手数料 ＋ 売却時の手数料</code>
        <small>50万円で買い、50万円で売る例：198円 ＋ 198円 ＝ 396円</small>
      </div>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th className="num">買付・売却額</th><th className="num">片道</th><th className="num">往復</th><th className="num">売買代金合計に対する割合</th></tr></thead>
          <tbody>{EXAMPLES.map((example) => (
            <tr key={example.value}><td className="num ex-name">各{example.value}</td><td className="num">{example.oneWay}</td><td className="num"><strong>{example.roundTrip}</strong></td><td className="num">{example.rate}</td></tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">同額で買付・売却した単純例。割合は往復手数料÷（買付代金＋売却代金）で計算しています。</p></div>

      <h2>値上がりすると、売却時の料金区分が変わる場合がある</h2>
      <p>料金は注文ごとの約定代金で決まるため、買付時と売却時で同じとは限りません。例えば50万円で買った株を50万5,000円で売る場合、買付は50万円以下の198円、売却は50万円を超えるため100万円以下の374円です。</p>
      <div className="formula-box"><code>198円（買付）＋ 374円（売却）＝ 572円</code><small>区分の境界では、わずかな値動きでも売却側の手数料が変わります。</small></div>

      <h2>同日売買でも、別の日でも計算方法は同じ</h2>
      <p>DMM 株の現物手数料は1約定ごとの段階制です。1日定額制のように同日の約定代金を合計して料金区分を決める仕組みではないため、同日中に往復しても別の日に売っても、各注文の約定代金が同じなら手数料は同じです。</p>

      <h2>手数料以外に確認する費用</h2>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>売値と買値</h3><p>市場の板にある価格差や注文数量により、想定価格で全株約定しない場合があります。</p></article>
        <article><b>02</b><h3>単元未満株</h3><p>通常の単元株と売買方法やコスト条件が異なるため、別のルールを確認します。</p></article>
        <article><b>03</b><h3>信用取引</h3><p>売買手数料だけでなく、買方金利、貸株料、管理費などを保有日数で確認します。</p></article>
        <article><b>04</b><h3>税金</h3><p>利益や配当には税金がかかります。手数料と分けて手取りを確認します。</p></article>
      </div>

      <h2>株ポイントは手数料と分けて記録する</h2>
      <p>公式サイトでは、国内株式現物の取引手数料に対して1％のDMM 株ポイントを付与すると案内しています。比較時は、支払う手数料そのものと、後から付与されるポイントを分けます。キャンペーンやポイント条件は変更される可能性があるため、注文前に最新条件を確認します。</p>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://kabu.dmm.com/commission/" target="_blank" rel="noopener noreferrer">DMM 株「株式取引の手数料」</a></li>
          <li><a href="https://kabu.dmm.com/support/faqs/article/00147/" target="_blank" rel="noopener noreferrer">DMM 株「現物取引の売買手数料はいくらですか？」</a></li>
          <li><a href="https://kabu.dmm.com/jp/stock/outline/" target="_blank" rel="noopener noreferrer">DMM 株「商品概要・取引ルール」</a></li>
        </ul>
        <p>料金は2026年9月7日に確認しました。注文前に公式料金表と契約締結前交付書面を確認してください。</p>
      </section>

      <section className="article-affiliate" aria-label="DMM 株の広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} />
        <p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は料金表、計算式、比較内容には影響しません。投資には価格変動等による損失の可能性があります。</p>
      </section>

      <p><Link href="/stocks/dmm-kabu">DMM 株のコストシートを見る →</Link></p>
      <p><Link href="/articles/dmm-kabu-us-stock-fee">DMM 株の米国株コストを見る →</Link></p>
      <p><Link href="/stocks/domestic-fee-comparison">国内株4社の手数料を比較する →</Link></p>
    </article>
  );
}
