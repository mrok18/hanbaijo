import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株の米国株手数料はいくら？為替25銭まで計算',
  description: 'DMM 株の米国株現物について、取引手数料0.495％、最低0ドル、上限22ドル、円貨決済の為替コスト1ドルあたり25銭を計算します。',
};

const EXAMPLES = [
  { amount: '1,000ドル', commission: '4.95ドル', roundCommission: '9.90ドル', fx: '500円', total: '約1,985円' },
  { amount: '2,000ドル', commission: '9.90ドル', roundCommission: '19.80ドル', fx: '1,000円', total: '約3,970円' },
  { amount: '5,000ドル', commission: '22ドル（上限）', roundCommission: '44ドル', fx: '2,500円', total: '約9,100円' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DMM KABU / US STOCK</p>
      <h1>DMM 株の米国株手数料はいくら？<br />為替25銭まで計算</h1>
      <p className="lede">米国株現物の取引手数料は約定代金の0.495％で、上限は22ドルです。「0ドル～」はすべての取引が無料という意味ではありません。円貨決済では、さらに1ドルあたり片道25銭の為替コストを確認します。</p>

      <div className="callout"><strong>総額は2段階で計算</strong><p>米国株の売買手数料と、円からドル・ドルから円の為替コストを分けます。往復する場合は買付と売却の両方を数えます。</p></div>

      <h2>米国株現物の取引手数料</h2>
      <div className="formula-box">
        <code>取引手数料 ＝ ドルベースの約定代金 × 0.495％（税込）</code>
        <small>約定代金2.22ドル以下は0ドル。4,444.45ドル以上は上限22ドル。</small>
      </div>
      <p>円貨決済でも、まず外貨決済と同じ方法でドル建ての手数料を計算し、適用為替レートで円換算します。株価が同じでも為替レートが変われば、円で見た手数料と売買代金は変わります。</p>

      <h2>円貨決済は1ドルあたり片道25銭</h2>
      <p>円貨決済による米国株の売買では、取引手数料とは別に1ドルあたり25銭の為替コストがかかります。1,000ドル分を買うと約250円、同じ1,000ドル分を売って円に戻すと約250円で、単純な往復は約500円です。</p>
      <div className="formula-box">
        <code>為替コスト ＝ 決済するドル金額 × 0.25円</code>
        <code>1,000ドルの往復 ＝ 250円（買付）＋ 250円（売却）＝ 500円</code>
      </div>

      <h2>株価が変わらない場合の往復試算</h2>
      <p>買付額と売却額が同じ、為替レートが1ドル＝150円で変わらないと仮定し、税金や市場の価格差を除いて計算します。</p>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th className="num">買付・売却額</th><th className="num">片道手数料</th><th className="num">往復手数料</th><th className="num">往復為替コスト</th><th className="num">円換算した概算合計</th></tr></thead>
          <tbody>{EXAMPLES.map((example) => (
            <tr key={example.amount}><td className="num ex-name">各{example.amount}</td><td className="num">{example.commission}</td><td className="num">{example.roundCommission}</td><td className="num">{example.fx}</td><td className="num"><strong>{example.total}</strong></td></tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">手数料のドル額を150円で円換算し、円貨決済の為替コストを加えた単純例。実際は売買価格、為替レート、端数処理等で変わります。</p></div>

      <h2>外貨決済なら売買のたびの為替コストは発生しない</h2>
      <p>米ドルを口座内に用意して外貨決済を選ぶ場合、米国株の売買時に為替コストは発生しません。ただし、日本円から米ドルへ交換する為替取引では1ドルあたり25銭がかかり、将来米ドルを円へ戻す際にも片道25銭がかかります。</p>
      <div className="fx-metric-grid">
        <article><b>円貨決済</b><h3>売買ごとに円換算</h3><p>円のまま注文しやすい一方、買付・売却の各決済で為替コストを確認します。</p></article>
        <article><b>外貨決済</b><h3>米ドルを再利用</h3><p>売却代金を米ドルのまま保有し、次の米国株買付へ使えます。</p></article>
        <article><b>為替取引</b><h3>約定は1日2回</h3><p>公式案内の受付時間と約定時刻を確認し、注文時の参考レートと実際の約定レートを区別します。</p></article>
        <article><b>為替変動</b><h3>円換算価値が動く</h3><p>米ドル預り金も為替変動の影響を受け、円換算では元本割れする場合があります。</p></article>
      </div>

      <h2>0ドルになるのは、ごく小さい約定</h2>
      <p>取引手数料が0ドルになるのは約定代金2.22ドル以下です。通常の米国株取引では0.495％を基本に計算し、4,444.45ドル以上では22ドルの上限を適用します。「0ドル～」という表示だけで総費用を判断せず、約定代金を当てはめます。</p>

      <h2>売買以外に発生し得る費用</h2>
      <ul>
        <li>配当や売却益に対する国内外の税金</li>
        <li>ADRで発生する場合がある預託証券の管理費用</li>
        <li>市場の売値と買値の差、注文価格と約定価格の差</li>
        <li>外貨預り金を円換算したときの為替差損益</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://kabu.dmm.com/us/stock/outline/" target="_blank" rel="noopener noreferrer">DMM 株「米国株式の商品概要・取引ルール」</a></li>
          <li><a href="https://kabu.dmm.com/us/exchange_trading/" target="_blank" rel="noopener noreferrer">DMM 株「為替取引」</a></li>
          <li><a href="https://kabu.dmm.com/support/faqs/article/00165/" target="_blank" rel="noopener noreferrer">DMM 株「米国株式（現物取引）の売買手数料」</a></li>
          <li><a href="https://kabu.dmm.com/support/faqs/article/00166/" target="_blank" rel="noopener noreferrer">DMM 株「米国株式（現物取引）で発生する費用」</a></li>
        </ul>
        <p>料金は2026年9月7日に確認しました。取引前に公式料金表と適用為替レートを確認してください。</p>
      </section>

      <section className="article-affiliate" aria-label="DMM 株の広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} />
        <p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は料金表、計算式、比較内容には影響しません。米国株は株価と為替の変動により損失が生じる可能性があります。</p>
      </section>

      <p><Link href="/stocks/dmm-kabu">DMM 株のコストシートを見る →</Link></p>
      <p><Link href="/articles/dmm-kabu-domestic-round-trip-fee">DMM 株の国内株往復手数料を見る →</Link></p>
      <p><Link href="/articles/us-stock-fx-cost">米国株の為替コスト計算を詳しく見る →</Link></p>
    </article>
  );
}
