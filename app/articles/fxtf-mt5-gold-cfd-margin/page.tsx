import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTF MT5の金CFDは1Lotいくら？必要証拠金・手数料・スワップ',
  description: 'FXTF MT5の金CFD（XAU/USD）について、1Lotの取引単位、必要証拠金、建玉連動手数料、スプレッド、スワップを公式例から計算します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">FXTF MT5 / GOLD CFD COST</p>
    <h1>金CFD 1Lotの必要資金<br />価格とドル円から計算する</h1>
    <p className="lede">FXTF MT5の金CFD（XAU/USD）は、1Lot＝1トロイオンスです。個人口座の証拠金率5％だけでなく、米ドル建て価格の円換算、建玉連動手数料、スプレッド、持越し時のスワップまで分けて確認します。</p>

    <h2>公式の仮定例では1Lotの必要証拠金は3万2,000円</h2>
    <p>FXTF公式は、金価格4,000ドル、米ドル円160円、1Lotを取引するケースを掲載しています。想定元本は64万円、個人口座の必要証拠金はその5％の3万2,000円です。</p>
    <div className="formula-box"><code>4,000ドル × 160円 × 1トロイオンス × 5％ ＝ 32,000円</code><small>4,000ドルと160円は計算方法を示す公式の仮定値で、現在価格ではありません。</small></div>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>公式例の1Lot</th></tr></thead><tbody>
      <tr><td className="ex-name">取引単位</td><td>1トロイオンス</td></tr>
      <tr><td className="ex-name">金価格</td><td>4,000ドル（仮定）</td></tr>
      <tr><td className="ex-name">円換算</td><td>1ドル＝160円（仮定）</td></tr>
      <tr><td className="ex-name">想定元本</td><td>640,000円</td></tr>
      <tr><td className="ex-name">個人証拠金率</td><td>5％（レバレッジ20倍）</td></tr>
      <tr><td className="ex-name">必要証拠金</td><td>32,000円</td></tr>
    </tbody></table></div></div>

    <h2>金価格と米ドル円の両方で円の損益が変わる</h2>
    <p>金1Lotは1トロイオンスなので、金価格が1ドル動くとドル建て損益は1ドルです。米ドル円を160円とすれば約160円に相当します。必要証拠金も「金価格 × 円換算レート」で計算するため、金価格が同じでも円安なら円換算の想定元本と証拠金は大きくなります。</p>
    <div className="formula-box"><code>値幅（ドル）× 米ドル円 × 1トロイオンス × Lot数</code><small>実際の円換算や約定は取引画面の表示を確認してください。</small></div>

    <h2>現在のランク1は0〜1Lotで建玉連動手数料0円</h2>
    <p>2026年3月2日取引開始時からの公式手数料表では、XAU/USDは同一売買方向の建玉数量と発注数量の合計が0〜1Lotならランク1で、1Lotあたり0円です。合計2〜200Lotのランク2は、新規注文1Lotあたり24円です。</p>
    <p>手数料ランクは今回の注文だけでなく、同じ銘柄・同じ売買方向の既存建玉を含めて決まります。また、建玉連動手数料は変更される場合があるため、0円を恒久条件として扱わず、発注前に最新表を確認します。</p>

    <h2>手数料0円でも総コストは0円ではない</h2>
    <ol>
      <li><strong>スプレッド：</strong>BidとAskの差。金はゼロスプレッド対象外です。</li>
      <li><strong>スリッページ：</strong>注文価格と約定価格がずれる可能性があります。</li>
      <li><strong>スワップ：</strong>NY時間17時をまたいだ建玉に、1Lot単位で付与されます。</li>
      <li><strong>円換算：</strong>金価格に加えて米ドル円の水準が円ベースの金額へ影響します。</li>
    </ol>
    <p>金・銀のスワップは、対象銘柄のリースレートと通貨の金利差などを基準にFXTFが決定すると案内しています。受取とは限らず、売買方向と日付により支払になる場合があります。</p>

    <h2>営業日をまたぐと必要証拠金が値洗いされる</h2>
    <p>新規建玉後の必要証拠金は取引終了時間まで固定され、ポジションを保有したまま営業日をまたぐと、取引終了後のメンテナンス時間に値洗いされます。公式例では金価格が4,000ドルから4,010ドルへ上がった場合、1Lot・米ドル円160円の必要証拠金は3万2,000円から3万2,080円へ変わります。</p>
    <div className="callout"><strong>必要証拠金は最低限の発注基準</strong><p>証拠金3万2,000円という公式例は、安全に保有できる入金額を示すものではありません。スプレッドの評価損、スワップ、相場逆行、円換算の変化に耐える余力を別に考えます。</p></div>

    <h2>発注前の計算手順</h2>
    <ol>
      <li>売りはBid、買いはAskのXAU/USD価格を確認する</li>
      <li>FXTFの証拠金計算に使う米ドル円の仲値を確認する</li>
      <li>価格 × 米ドル円 × Lot数 × 5％を計算する</li>
      <li>同方向の既存建玉を含め、最新の手数料ランクを確認する</li>
      <li>スプレッド・約定差・スワップと値動き余力を加える</li>
    </ol>
    <p><Link href="/tools/fxtf-mt5-margin-calculator">FXTF MT5証拠金計算機で金を試算する →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD レバレッジ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/spread/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD スプレッド・スワップ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li>
      <li><a href="https://www.fxtrade.co.jp/pdf/commodity_positionfee.pdf" target="_blank" rel="noopener noreferrer">FXTF「商品CFD 建玉連動手数料表」PDF</a></li>
      <li><a href="https://www.fxtrade.co.jp/risk/" target="_blank" rel="noopener noreferrer">FXTF「手数料等およびリスク」</a></li>
    </ul><p>条件は2026年9月8日に公式情報で確認しました。価格例は現在レートではありません。取引条件は変更される場合があるため、発注前にMT5画面と最新資料を確認してください。</p></section>

    <section className="article-affiliate" aria-label="FXTFの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} /><p className="affiliate-disclosure">A8.netの提携広告です。広告報酬は計算や評価には影響しません。商品CFDは元本や利益が保証されず、相場急変時には証拠金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/fxtf-vs-dmm-cfd-gold">DMM CFDの金1Lotと比較する →</Link></p>
    <p><Link href="/tools/gold-cfd-provider-cost-comparison">FXTF・DMMの金CFD総コストを計算 →</Link></p>
    <p><Link href="/articles/fxtf-mt5-silver-cfd-margin">銀CFD 1Lotの必要証拠金を見る →</Link></p>
    <p><Link href="/articles/fxtf-mt5-oil-natural-gas-margin">原油・天然ガスCFDの証拠金比較 →</Link></p>
    <p><Link href="/articles/fxtf-mt5-commodity-vs-crypto-cfd">FXTF MT5の商品・暗号資産CFD比較 →</Link></p>
    <p><Link href="/fx/fxtf">FXTFの取引条件一覧へ →</Link></p>
  </article>;
}
