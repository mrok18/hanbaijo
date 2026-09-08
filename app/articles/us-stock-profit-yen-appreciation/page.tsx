import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '米国株が上がったのに円換算で損？円高と損益分岐ドル円',
  description: '米国株の株価が上昇しても円換算で損失になる条件を、購入・売却時のドル円、売買手数料、為替コストから計算します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">US STOCK / YEN PROFIT</p>
    <h1>米国株が上がったのに円換算で損？<br />円高と損益分岐ドル円</h1>
    <p className="lede">米国株のドル建て価格が上昇しても、買付時より円高になれば円換算の利益は減ります。どのドル円レートを下回ると損になるのか、売買コストを含めて確認します。</p>

    <h2>結論：株価上昇率より円高の影響が大きいと損になり得る</h2>
    <p>円で投資成果を見る場合、株価だけでなく「株数」「購入時のドル円」「売却時のドル円」を同時に計算します。まず手数料を除いた基本式は次のとおりです。</p>
    <div className="formula-box">
      <code>購入額（円）＝ 買値（ドル）× 株数 × 購入時ドル円</code>
      <code>売却額（円）＝ 売値（ドル）× 株数 × 売却時ドル円</code>
      <small>配当、税金、売買手数料、為替コストを除く単純計算です。</small>
    </div>

    <h2>株価が10％上昇しても円換算では1,500円の損</h2>
    <p>1株100ドルで10株を、1ドル150円のときに購入したとします。株価が110ドルへ10％上昇した一方、売却時に1ドル135円まで円高になるケースです。</p>
    <div className="fx-metric-grid">
      <article><b>BUY</b><h3>150,000円</h3><p>100ドル × 10株 × 150円</p></article>
      <article><b>SELL</b><h3>148,500円</h3><p>110ドル × 10株 × 135円</p></article>
      <article><b>STOCK</b><h3>＋10％</h3><p>100ドル → 110ドル</p></article>
      <article><b>YEN PROFIT</b><h3>−1,500円</h3><p>コストを除く円換算損益</p></article>
    </div>

    <h2>損益分岐となる売却時ドル円</h2>
    <p>買値と売値が決まっている場合、円換算で購入額と売却額が同額になる為替レートを逆算できます。</p>
    <div className="formula-box">
      <code>損益分岐ドル円 ＝ 購入時ドル円 × 買値 ÷ 売値</code>
      <small>例：150円 × 100ドル ÷ 110ドル ＝ 約136.36円</small>
    </div>
    <p>この例では、売却時のドル円が約136.36円を下回ると、株価が10％上がっていてもコスト控除前の円換算損益はマイナスです。</p>

    <h2>売却時ドル円ごとの円換算損益</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>売却時ドル円</th><th>売却額</th><th>円換算損益</th></tr></thead><tbody>
      <tr><td className="ex-name">150円</td><td>165,000円</td><td>＋15,000円</td></tr>
      <tr><td className="ex-name">145円</td><td>159,500円</td><td>＋9,500円</td></tr>
      <tr><td className="ex-name">140円</td><td>154,000円</td><td>＋4,000円</td></tr>
      <tr><td className="ex-name">約136.36円</td><td>約150,000円</td><td>ほぼ0円</td></tr>
      <tr><td className="ex-name">135円</td><td>148,500円</td><td>−1,500円</td></tr>
    </tbody></table></div></div>

    <h2>売買手数料と為替コストを入れると境界は上がる</h2>
    <p>実際には、購入側と売却側の株式手数料、円とドルを交換する際の為替コストが差し引かれます。そのため、コストなしで求めた約136.36円より円安の水準でも損益がマイナスになることがあります。</p>
    <ul>
      <li>株式手数料は取引金額に対する料率だけでなく、最低額・上限額も確認する</li>
      <li>為替コストは1ドルあたりの円額を、購入側と売却側のドル総額へ掛ける</li>
      <li>売却側のドル総額は株価変動により購入側と同額とは限らない</li>
      <li>現地費用、税金、配当は目的に応じて別途計算する</li>
    </ul>
    <p><Link href="/tools/us-stock-fx-profit-calculator">米国株・為替込み損益計算機で自分の条件を試す →</Link></p>

    <h2>円貨決済と外貨決済で為替が確定する時点が違う</h2>
    <p>円貨決済では、証券会社が定めるタイミングとルールで円とドルが交換されます。外貨決済では米ドルのまま売買できますが、最終的に円へ戻すなら、その両替時点のドル円が円換算損益に影響します。表示中の評価額と、実際に円へ戻した確定額を分けて考えます。</p>
    <div className="callout"><strong>株価チャートだけでは円の損益は分かりません</strong><p>購入時と売却時の為替レート、取引数量、往復コストまで同じ単位の円へ換算して比較してください。計算結果は概算であり、実際の約定額や利益を保証するものではありません。</p></div>

    <p><Link href="/articles/us-stock-fx-cost">米国株の為替コスト計算を見る →</Link></p>
    <p><Link href="/articles/matsui-us-stock-fx-fee">松井証券の米国株為替コストを見る →</Link></p>
    <p><Link href="/articles/dmm-kabu-us-stock-fee">DMM 株の米国株手数料を見る →</Link></p>
    <p><Link href="/stocks">株式コスト比較へ戻る →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section>
  </article>;
}
