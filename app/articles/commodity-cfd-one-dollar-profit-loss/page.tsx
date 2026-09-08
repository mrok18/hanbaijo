import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '商品CFDは1ドル動くといくら？金・銀・原油・天然ガスの損益',
  description: '商品CFDの価格が1ドル動いた場合の1Lotの損益を、金・銀・原油・天然ガスの取引単位と米ドル円から計算します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">COMMODITY CFD / PRICE MOVE</p>
    <h1>商品CFDが1ドル動くと<br />1Lotでいくらの損益？</h1>
    <p className="lede">商品CFDは、画面上の価格差だけでは円の損益が分かりません。「価格差 × 1Lotの取引単位 × Lot数 × 米ドル円」に分解し、金・銀・原油・天然ガスを同じ値幅で比較します。</p>

    <h2>1ドルの値動きは160円から1万6,000円</h2>
    <p>米ドル円を160円と仮定すると、1Lotで価格が1ドル動いた時の円換算損益は次の通りです。銀と原油は価格差を10倍、天然ガスは100倍する点が重要です。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>商品</th><th>1Lotの取引単位</th><th>1ドル動いた時</th><th>0.1ドル動いた時</th></tr></thead><tbody>
      <tr><td className="ex-name">金</td><td>1トロイオンス</td><td>160円</td><td>16円</td></tr>
      <tr><td className="ex-name">銀</td><td>10トロイオンス</td><td>1,600円</td><td>160円</td></tr>
      <tr><td className="ex-name">原油</td><td>10バレル</td><td>1,600円</td><td>160円</td></tr>
      <tr><td className="ex-name">天然ガス</td><td>100mmBtu</td><td>16,000円</td><td>1,600円</td></tr>
    </tbody></table></div></div>
    <p>160円は計算方法を示す仮定値で、現在の米ドル円ではありません。実際の試算では取引時点の円換算レートを使います。</p>

    <h2>買いと売りで値動きの符号を反転する</h2>
    <div className="formula-box"><code>買いの損益＝（決済価格－新規価格）× 取引単位 × Lot数 × 米ドル円</code><small>価格上昇でプラス、下落でマイナス。</small></div>
    <div className="formula-box"><code>売りの損益＝（新規価格－決済価格）× 取引単位 × Lot数 × 米ドル円</code><small>価格下落でプラス、上昇でマイナス。</small></div>
    <p>たとえば銀を2Lot買い、価格が0.5ドル上昇し、米ドル円が160円なら、概算損益は「0.5ドル × 10トロイオンス × 2Lot × 160円＝1,600円」です。</p>

    <h2>必要証拠金が小さくても値動き損益は小さくならない</h2>
    <p>FXTF MT5とDMM CFDで共通する4商品は、個人口座のレバレッジが20倍です。証拠金5％目安は、想定元本を20分の1にした発注基準であって、損失上限ではありません。</p>
    <div className="formula-box"><code>証拠金5％目安＝新規価格 × 取引単位 × Lot数 × 米ドル円 × 5％</code><small>実際の必要額は各社の取引画面で確認してください。</small></div>
    <p>天然ガスの価格が0.1ドル動くと、1Lotの概算損益は米ドル円160円なら1,600円です。必要証拠金だけを見てLot数を増やすと、口座資金に対する損益変動が大きくなります。</p>

    <h2>総コストを差し引いて損益分岐を確認</h2>
    <p>値動きが利益方向でも、スプレッド、取引手数料、スワップや調整額を回収するまでは差引損益がプラスになりません。必要な価格差は、総コストを1ドルの値動き損益で割って逆算できます。</p>
    <div className="formula-box"><code>損益分岐の値幅＝総コスト ÷（取引単位 × Lot数 × 米ドル円）</code><small>総コストは同じ取引・保有期間に対応する円の支払合計を使います。</small></div>
    <div className="callout"><strong>受取調整額を利益前提にしない</strong><p>スワップや調整額は売買方向・日付で変わり、受取と支払が逆転する場合があります。計算時は、取引画面で確認した支払額を総コストへ加えます。</p></div>

    <h2>計算前の確認項目</h2>
    <ol>
      <li>商品の1Lot単位を確認する</li>
      <li>買い・売りの方向と新規価格、想定決済価格を入力する</li>
      <li>Lot数と米ドル円を掛けて円換算する</li>
      <li>スプレッド・手数料・保有費の合計を差し引く</li>
      <li>差引損益を口座資金に対する割合でも確認する</li>
    </ol>
    <p><Link href="/tools/commodity-cfd-price-move-calculator">商品CFD値動き損益計算機を使う →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD レバレッジ・取引単位」</a></li>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/spread/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD スプレッド・スワップ」</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD「商品CFD サービス概要・取引単位」</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/swapcalendar/" target="_blank" rel="noopener noreferrer">DMM CFD「金利調整額・価格調整額」</a></li>
    </ul><p>取引単位と証拠金条件は2026年9月9日に公式情報で確認しました。計算例の価格・為替は仮定値です。取引前に最新条件を確認してください。</p></section>

    <section className="article-affiliate" aria-label="商品CFDを扱うサービスの広告"><div className="affiliate-grid">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
    </div><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は計算式や比較内容には影響しません。商品CFDは元本および利益が保証されず、証拠金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/fxtf-vs-dmm-cfd-commodity">FXTFとDMM CFDの共通4商品を比較 →</Link></p>
    <p><Link href="/tools/commodity-cfd-provider-cost-comparison">商品CFD 2社の総コストを比較 →</Link></p>
    <p><Link href="/cfd">CFDコストガイドへ →</Link></p>
  </article>;
}
