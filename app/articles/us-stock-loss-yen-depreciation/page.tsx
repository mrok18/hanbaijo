import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/us-stock-loss-yen-depreciation' },
  title: '米国株が下がっても円換算で利益？円安と損益分岐ドル円',
  description: '米国株が値下がりしても円安で円換算益になる条件を、購入・売却時のドル円、売買手数料、為替コストから計算します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">US STOCK / YEN PROFIT</p>
    <h1>米国株が下がっても円換算で利益？<br />円安と損益分岐ドル円</h1>
    <p className="lede">ドル建ての株価が下落しても、購入時より円安になれば円換算額が増え、利益になることがあります。株価の損失を為替差益が上回る境界を計算します。</p>

    <h2>結論：為替差益が株価下落を上回れば円換算益になる</h2>
    <p>円で投資成果を見る場合は、ドル建ての騰落率だけでは判断できません。購入時と売却時を、それぞれのドル円で円換算します。</p>
    <div className="formula-box">
      <code>購入額（円）＝ 買値（ドル）× 株数 × 購入時ドル円</code>
      <code>売却額（円）＝ 売値（ドル）× 株数 × 売却時ドル円</code>
      <small>配当、税金、売買手数料、為替コストを除く単純計算です。</small>
    </div>

    <h2>株価が10％下落しても円換算では4,000円の利益</h2>
    <p>1株100ドルで10株を、1ドル140円のときに購入したとします。株価が90ドルへ10％下落した一方、売却時に1ドル160円まで円安になるケースです。</p>
    <div className="fx-metric-grid">
      <article><b>BUY</b><h3>140,000円</h3><p>100ドル × 10株 × 140円</p></article>
      <article><b>SELL</b><h3>144,000円</h3><p>90ドル × 10株 × 160円</p></article>
      <article><b>STOCK</b><h3>−10％</h3><p>100ドル → 90ドル</p></article>
      <article><b>YEN PROFIT</b><h3>＋4,000円</h3><p>コストを除く円換算損益</p></article>
    </div>

    <h2>損益分岐となる売却時ドル円</h2>
    <p>買値と売値が決まっている場合、円換算で購入額を回収できる売却時の為替レートを逆算できます。</p>
    <div className="formula-box">
      <code>損益分岐ドル円 ＝ 購入時ドル円 × 買値 ÷ 売値</code>
      <small>例：140円 × 100ドル ÷ 90ドル ＝ 約155.56円</small>
    </div>
    <p>この例では、売却時のドル円が約155.56円を上回ると、10％の株価下落を為替差益が補い、コスト控除前の円換算損益がプラスになります。</p>

    <h2>売却時ドル円ごとの円換算損益</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>売却時ドル円</th><th>売却額</th><th>円換算損益</th></tr></thead><tbody>
      <tr><td className="ex-name">150円</td><td>135,000円</td><td>−5,000円</td></tr>
      <tr><td className="ex-name">155円</td><td>139,500円</td><td>−500円</td></tr>
      <tr><td className="ex-name">約155.56円</td><td>約140,000円</td><td>ほぼ0円</td></tr>
      <tr><td className="ex-name">160円</td><td>144,000円</td><td>＋4,000円</td></tr>
      <tr><td className="ex-name">165円</td><td>148,500円</td><td>＋8,500円</td></tr>
    </tbody></table></div></div>

    <h2>売買コストを含めると、さらに円安が必要</h2>
    <p>実際には購入と売却の株式手数料、円とドルの為替コストが差し引かれます。コストなしの損益分岐が約155.56円でも、手取りで利益を残すにはそれより円安のレートが必要です。</p>
    <ul>
      <li>購入時の株式手数料と為替コストを取得原価に加える</li>
      <li>売却時の株式手数料と為替コストを受取額から差し引く</li>
      <li>最低手数料、上限手数料、現地費用の有無も確認する</li>
      <li>税金、配当、為替差損益の税務上の扱いは個別に確認する</li>
    </ul>
    <p><Link href="/tools/us-stock-fx-profit-calculator">米国株・為替込み損益計算機で境界を試す →</Link></p>

    <h2>含み益と円に戻した利益は分けて考える</h2>
    <p>外貨決済で売却代金を米ドルのまま保有する場合、円へ交換するまで円換算額は為替で動き続けます。画面上の参考円換算額、ドルで確定した株式損益、実際に円へ戻した金額は同じではありません。</p>
    <div className="callout"><strong>円安が株価下落を帳消しにするとは限りません</strong><p>必要な円安幅は株価下落率とコストで変わります。将来の株価や為替を前提にせず、複数のレートで損益を試算してください。計算結果は概算であり、実際の約定額や利益を保証するものではありません。</p></div>

    <p><Link href="/articles/us-stock-profit-yen-appreciation">反対に、株高でも円高で損になる条件を見る →</Link></p>
    <p><Link href="/articles/us-stock-yen-sensitivity">ドル円が1円動いた場合の損益早見表を見る →</Link></p>
    <p><Link href="/articles/us-stock-fx-cost">米国株の為替コスト計算を見る →</Link></p>
    <p><Link href="/articles/matsui-us-stock-fx-fee">松井証券の米国株為替コストを見る →</Link></p>
    <p><Link href="/articles/dmm-kabu-us-stock-fee">DMM 株の米国株手数料を見る →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section>
  </article>;
}
