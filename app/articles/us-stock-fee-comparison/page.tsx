import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/us-stock-fee-comparison' },
  title: '米国株の手数料を3社比較｜DMM 株・松井証券・楽天証券',
  description: '米国株現物の手数料をDMM 株・松井証券・楽天証券で比較。0.495％・上限22ドルの売買手数料と、円貨決済・事前両替の為替コストを整理します。',
};

const ROUND_TRIP_EXAMPLES = [
  { amount: '1,000ドル', commission: '9.90ドル', commissionYen: '1,485円', yenSettlement: '500円', total: '1,985円' },
  { amount: '5,000ドル', commission: '44ドル（上限×2）', commissionYen: '6,600円', yenSettlement: '2,500円', total: '9,100円' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">US STOCK / FEE COMPARISON</p>
      <h1>米国株の手数料を3社比較<br />為替まで含めると差はどこに出る？</h1>
      <p className="lede">DMM 株・松井証券・楽天証券の米国株現物を、通常口座のインターネット取引で比較します。3社とも基本の売買手数料は同じです。差が出るのは、円貨決済か、先に米ドルへ両替して外貨決済するかという部分です。</p>

      <div className="callout"><strong>結論：売買手数料は横並び、事前両替に違い</strong><p>3社とも約定代金の0.495％、上限22ドルです。円貨決済は3社とも片道25銭／米ドル。事前両替では、松井証券は手数料0円、楽天証券のリアルタイム為替取引は手数料0銭、DMM 株は片道25銭です。</p></div>

      <h2>米国株現物の手数料比較表</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>証券会社</th><th>通常の売買手数料</th><th>最低・上限</th><th>円貨決済</th><th>事前両替</th><th>NISAの売買手数料</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">DMM 株</td><td>約定代金×0.495％</td><td>2.22ドル以下0ドル<br />上限22ドル</td><td><strong>25銭／米ドル</strong></td><td>25銭／米ドル</td><td>無料</td></tr>
            <tr><td className="ex-name">松井証券</td><td>約定代金×0.495％</td><td>2.22ドル以下0ドル<br />上限22ドル</td><td><strong>25銭／米ドル</strong></td><td>無料</td><td>無料</td></tr>
            <tr><td className="ex-name">楽天証券</td><td>約定代金×0.495％</td><td>2.22ドル以下0ドル<br />上限22ドル</td><td><strong>25銭／米ドル</strong></td><td>リアルタイム0銭<br />定時25銭</td><td>無料</td></tr>
          </tbody>
        </table>
      </div><p className="panel-note">2026年9月12日確認。税込。米国株現物・インターネット取引の一般的な条件です。指定銘柄、キャンペーン、IFA経由などは除きます。楽天証券のリアルタイム為替は手数料0銭ですが、提示される買レートと売レートには差があります。</p></div>

      <h2>売買手数料の計算式は3社共通</h2>
      <div className="formula-box">
        <code>片道の売買手数料 ＝ 約定代金 × 0.495％</code>
        <small>約定代金2.22ドル以下は0ドル。4,444.45ドル以上は上限22ドル。</small>
      </div>
      <p>1,000ドルの取引なら片道4.95ドル、買付と売却の往復で9.90ドルです。5,000ドルでは片道22ドルの上限が適用され、往復44ドルになります。「最低0ドル」は全取引無料という意味ではなく、2.22ドル以下の小さな約定だけが対象です。</p>

      <h2>円貨決済なら3社とも片道25銭</h2>
      <p>日本円のまま米国株を注文する円貨決済では、3社とも1米ドルあたり片道25銭の為替コストがかかります。1,000ドル分を買うと250円、同額で売って円へ戻すと250円で、往復500円です。</p>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th className="num">買付・売却額</th><th className="num">往復売買手数料</th><th className="num">1ドル＝150円で換算</th><th className="num">往復為替コスト</th><th className="num">概算合計</th></tr></thead>
          <tbody>{ROUND_TRIP_EXAMPLES.map((example) => (
            <tr key={example.amount}><td className="num ex-name">各{example.amount}</td><td className="num">{example.commission}</td><td className="num">{example.commissionYen}</td><td className="num">{example.yenSettlement}</td><td className="num"><strong>{example.total}</strong></td></tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">株価・為替レートが変わらない単純例。税金、市場の売値と買値の差、約定差、現地費用、端数処理は含みません。</p></div>

      <h2>事前両替なら為替コストに差が出る</h2>
      <div className="fx-metric-grid">
        <article><b>DMM 株</b><h3>片道25銭</h3><p>円貨決済でも、事前に行う為替取引でも1ドルあたり片道25銭です。</p></article>
        <article><b>松井証券</b><h3>両替手数料0円</h3><p>日本円から米ドル、米ドルから日本円への事前両替は無料です。</p></article>
        <article><b>楽天証券</b><h3>リアルタイム0銭</h3><p>リアルタイム為替取引は手数料0銭。買レートと売レートの差は残ります。</p></article>
        <article><b>COMMON</b><h3>外貨決済を選ぶ</h3><p>先に両替した米ドルを使うには、株の注文時に外貨決済を選びます。</p></article>
      </div>
      <p>1,000ドルを買って将来円へ戻す単純比較なら、DMM 株は往復500円、松井証券は両替手数料0円です。楽天証券はリアルタイム為替取引の手数料表示は往復0銭ですが、実際の交換レートには買値と売値の差があるため、完全な無コストとは限りません。</p>

      <h2>NISAは3社とも米国株の売買手数料無料</h2>
      <p>3社ともNISA口座内の米国株現物は売買手数料無料です。ただし、円貨決済の為替コストまで自動的に無料になるわけではありません。NISAでも、決済方法と両替条件を分けて確認します。</p>

      <h2>比較するときに残してはいけない費用</h2>
      <ul>
        <li>米国株の売却時に発生する場合があるSEC Feeなどの現地費用</li>
        <li>市場での売値と買値の差、注文価格と約定価格の差</li>
        <li>ADRで発生する場合がある管理費用や現地課税</li>
        <li>配当・売却益への税金と、円換算時の為替差損益</li>
      </ul>
      <p>売買手数料だけなら3社は同条件です。日本円から始める場合は「円貨決済を使うか」「先に両替するか」を決め、同じ決済方法で比較すると総コストを読み違えにくくなります。</p>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://kabu.dmm.com/us/stock/outline/" target="_blank" rel="noopener noreferrer">DMM 株「米国株式の商品概要・取引ルール」</a></li>
          <li><a href="https://kabu.dmm.com/_pdf/history/ls_brokerage_account_260405.pdf" target="_blank" rel="noopener noreferrer">DMM 株「上場有価証券等取引の契約締結前交付書面」</a></li>
          <li><a href="https://www.matsui.co.jp/us-stock/domestic/fee/" target="_blank" rel="noopener noreferrer">松井証券「米国株現物取引 手数料」</a></li>
          <li><a href="https://www.matsui.co.jp/us-stock/domestic/rule/" target="_blank" rel="noopener noreferrer">松井証券「米国株現物取引 取引ルール」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/us/stock/commission.html" target="_blank" rel="noopener noreferrer">楽天証券「米国株式 手数料」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/currency/forex/commission.html" target="_blank" rel="noopener noreferrer">楽天証券「外国為替の手数料」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/nisa/commission/" target="_blank" rel="noopener noreferrer">楽天証券「日米株式の取引手数料が無料」</a></li>
        </ul>
        <p>料金・条件は2026年9月12日に確認しました。取引前に各社の最新料金表と注文画面を確認してください。</p>
      </section>

      <p><Link href="/articles/dmm-kabu-us-stock-fee">DMM 株の米国株手数料を詳しく見る →</Link></p>
      <p><Link href="/articles/matsui-us-stock-fx-fee">松井証券の事前両替と円貨決済の違いを見る →</Link></p>
      <p><Link href="/articles/us-stock-fx-cost">米国株の為替コスト計算を確認する →</Link></p>
      <p><Link href="/articles/foreign-stock-trading-fees">外国株式の手数料を米国・中国・ASEAN市場で比較する →</Link></p>
      <p><Link href="/stocks">国内株・米国株の株式手数料ガイドへ →</Link></p>
    </article>
  );
}
