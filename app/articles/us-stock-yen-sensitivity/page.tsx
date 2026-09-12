import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/us-stock-yen-sensitivity' },
  title: '米国株はドル円が1円動くといくら変わる？為替感応度早見表',
  description: '保有する米国株のドル評価額から、ドル円が1円・5円・10円動いた場合の円換算額の変化を早見表と計算式で解説します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">US STOCK / FX SENSITIVITY</p>
    <h1>米国株はドル円が1円動くと<br />いくら変わる？為替感応度早見表</h1>
    <p className="lede">米国株の円換算額は、保有株のドル評価額に比例して為替の影響を受けます。まず「ドル円が1円動いたときの金額」を計算すると、円高・円安リスクを把握しやすくなります。</p>

    <h2>結論：ドル評価額に1円を掛ける</h2>
    <div className="formula-box">
      <code>円換算額の変化 ＝ 保有株のドル評価額 × ドル円の変化幅</code>
      <small>ドル円が1円動く場合は、1,000ドル保有なら約1,000円、10,000ドル保有なら約10,000円変化します。</small>
    </div>
    <p>円安方向なら円換算額は増え、円高方向なら同額だけ減ります。これは株価と保有株数が変わらない前提の為替影響です。</p>

    <h2>1円・5円・10円動いた場合の早見表</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>ドル評価額</th><th>1円変動</th><th>5円変動</th><th>10円変動</th></tr></thead><tbody>
      <tr><td className="ex-name">1,000ドル</td><td>1,000円</td><td>5,000円</td><td>10,000円</td></tr>
      <tr><td className="ex-name">3,000ドル</td><td>3,000円</td><td>15,000円</td><td>30,000円</td></tr>
      <tr><td className="ex-name">5,000ドル</td><td>5,000円</td><td>25,000円</td><td>50,000円</td></tr>
      <tr><td className="ex-name">10,000ドル</td><td>10,000円</td><td>50,000円</td><td>100,000円</td></tr>
      <tr><td className="ex-name">20,000ドル</td><td>20,000円</td><td>100,000円</td><td>200,000円</td></tr>
    </tbody></table></div></div>
    <p>たとえば5,000ドル分の米国株を保有しているとき、ドル円が150円から145円へ5円の円高になると、株価が同じでも円換算額は約25,000円減ります。</p>

    <h2>株価変動と為替変動は別々に計算する</h2>
    <p>実際の投資損益では株価も動きます。購入時と売却時のドル評価額が異なるため、単純な「保有額 × 為替変化」だけで最終損益を出すのではなく、両時点を円換算して差し引きます。</p>
    <div className="formula-box">
      <code>円換算損益 ＝（売値 × 株数 × 売却時ドル円）−（買値 × 株数 × 購入時ドル円）</code>
      <small>売買手数料と為替コストを含める場合は、購入額へ加算し、売却額から控除します。</small>
    </div>
    <p><Link href="/tools/us-stock-fx-profit-calculator">株価と為替を同時に米国株損益計算機で試す →</Link></p>

    <h2>10円の円高を株価上昇で補うには</h2>
    <p>1ドル150円で買い、売却時に140円になった場合、為替だけでは約6.67％の下落です。ただし必要な株価上昇率は「10円 ÷ 150円」では正確に求まりません。円換算額を維持する売値は次の式で逆算します。</p>
    <div className="formula-box">
      <code>損益分岐売値 ＝ 買値 × 購入時ドル円 ÷ 売却時ドル円</code>
      <small>100ドル × 150円 ÷ 140円 ＝ 約107.14ドル。コストなしでも約7.14％の株価上昇が必要です。</small>
    </div>

    <h2>為替コストとは分けて見る</h2>
    <p>ドル円が何円動いたかによる評価額の変化は「為替変動」です。一方、証券会社の適用レートに含まれるスプレッドや1ドルあたりの手数料は「取引コスト」です。為替手数料が0円でも為替変動リスクは残ります。</p>
    <ul>
      <li>為替変動：市場のドル円が動くことによる損益</li>
      <li>為替コスト：円とドルを交換する際の負担</li>
      <li>株式コスト：売買手数料、最低額、上限額、現地費用など</li>
      <li>税金・配当：目的に応じて別途確認する項目</li>
    </ul>
    <div className="callout"><strong>評価額の基準時点を揃える</strong><p>米ドルのまま保有している場合、円換算額は参考値として動き続けます。実際に円へ交換した金額と、画面上の参考円換算額を混同しないようにします。</p></div>

    <p><Link href="/articles/us-stock-profit-yen-appreciation">株高でも円高で損になる条件を見る →</Link></p>
    <p><Link href="/articles/us-stock-loss-yen-depreciation">株安でも円安で利益になる条件を見る →</Link></p>
    <p><Link href="/articles/us-stock-fx-cost">米国株の為替コスト計算を見る →</Link></p>
    <p><Link href="/articles/matsui-us-stock-fx-fee">松井証券の米国株為替コストを見る →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section>
  </article>;
}
