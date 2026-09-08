import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTF MT5の銀CFDは1Lotいくら？必要証拠金・手数料・スワップ',
  description: 'FXTF MT5の銀CFD（XAG/USD）について、1Lot＝10トロイオンスの取引単位、必要証拠金、建玉連動手数料、スプレッド、スワップを計算します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">FXTF MT5 / SILVER CFD COST</p>
    <h1>銀CFD 1Lotの必要資金<br />10トロイオンスで計算する</h1>
    <p className="lede">FXTF MT5の銀CFD（XAG/USD）は、1Lot＝10トロイオンスです。金と同じ米ドル建て・個人証拠金率5％ですが、1Lotの数量と建玉連動手数料が異なります。価格、米ドル円、Lot数を掛けて円の負担へ直します。</p>

    <h2>公式の仮定例では1Lotの必要証拠金は4,800円</h2>
    <p>FXTF公式は、銀価格60ドル、米ドル円160円、1Lot＝10トロイオンスという条件を例示しています。想定元本は9万6,000円、個人口座の必要証拠金はその5％の4,800円です。</p>
    <div className="formula-box"><code>60ドル × 160円 × 10トロイオンス × 5％ ＝ 4,800円</code><small>60ドルと160円は公式の計算例であり、現在価格ではありません。</small></div>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>銀CFD 1Lot</th></tr></thead><tbody>
      <tr><td className="ex-name">取引単位</td><td>10トロイオンス</td></tr>
      <tr><td className="ex-name">公式例の銀価格</td><td>60ドル</td></tr>
      <tr><td className="ex-name">公式例の米ドル円</td><td>160円</td></tr>
      <tr><td className="ex-name">想定元本</td><td>96,000円</td></tr>
      <tr><td className="ex-name">個人証拠金率</td><td>5％（レバレッジ20倍）</td></tr>
      <tr><td className="ex-name">必要証拠金</td><td>4,800円</td></tr>
    </tbody></table></div></div>

    <h2>銀価格が1ドル動くと1Lotで10ドルの損益</h2>
    <p>1Lotは10トロイオンスなので、銀価格が1ドル動くと損益は10ドルです。米ドル円160円なら約1,600円に相当します。0.01ドルの値動きなら約16円です。</p>
    <div className="formula-box"><code>値幅（ドル）× 10トロイオンス × 米ドル円 × Lot数</code><small>銀価格だけでなく、円換算時の米ドル円も円ベースの損益と証拠金へ影響します。</small></div>

    <h2>現在のランク1手数料は1Lotあたり32円</h2>
    <p>2026年3月2日取引開始時からの公式手数料表では、XAG/USDは同一売買方向の建玉数量と発注数量の合計が0〜200Lotならランク1です。新規注文1Lotあたり32円の建玉連動手数料が掛かります。</p>
    <p>金CFDは同じ表で合計0〜1Lotのランク1が1Lotあたり0円ですが、銀は最小の数量帯でも32円です。「貴金属CFDは同じ手数料」と考えず、銘柄別に確認します。</p>

    <h2>スプレッドの公式例は1Lotで約38円</h2>
    <p>FXTFの証拠金解説では、銀の売値60.000ドル、買値60.024ドル、米ドル円160円を仮定し、0.024ドルのスプレッドによる新規時の評価損を1Lotあたり約38円と例示しています。</p>
    <div className="formula-box"><code>0.024ドル × 160円 × 10トロイオンス ＝ 約38円</code><small>スプレッド値は計算方法を示す公式例です。実際のBid・Askは発注時に確認してください。</small></div>
    <div className="callout"><strong>1Lotの新規コストは手数料だけではない</strong><p>公式例へ現在表のランク1手数料を単純に加えると、建玉連動手数料32円とスプレッド評価損約38円です。ただし、スプレッドは変動し、スリッページも起こり得るため、約70円を固定コストとは扱いません。</p></div>

    <h2>持ち越すとスワップが発生する</h2>
    <p>銀のスワップは1Lotあたりで表示され、銀のリースレートと通貨の金利差などを基準にFXTFが決定します。NY時間17時、日本時間では通常午前7時・夏時間は午前6時をまたいで保有する建玉が対象です。</p>
    <p>必要証拠金は新規建玉後、取引終了時間まで固定されます。営業日をまたいで保有すると、取引終了後のメンテナンス時間に値洗いされます。スワップだけでなく、翌営業日の証拠金変化にも余力を持たせます。</p>

    <h2>発注前の確認順</h2>
    <ol>
      <li>売りはBid、買いはAskのXAG/USD価格を確認する</li>
      <li>米ドル円の円換算レートを確認する</li>
      <li>価格 × 米ドル円 × 10 × Lot数 × 5％を計算する</li>
      <li>既存の同方向建玉を含め、最新の手数料ランクを確認する</li>
      <li>スプレッド・約定差・スワップと値動き余力を加える</li>
    </ol>
    <p><Link href="/tools/fxtf-mt5-margin-calculator">FXTF MT5証拠金計算機で銀を試算する →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD レバレッジ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/spread/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD スプレッド・スワップ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li>
      <li><a href="https://www.fxtrade.co.jp/pdf/commodity_positionfee.pdf" target="_blank" rel="noopener noreferrer">FXTF「商品CFD 建玉連動手数料表」PDF</a></li>
      <li><a href="https://www.fxtrade.co.jp/risk/" target="_blank" rel="noopener noreferrer">FXTF「手数料等およびリスク」</a></li>
    </ul><p>条件は2026年9月8日に公式情報で確認しました。例示価格は現在レートではありません。発注前にMT5画面と最新資料を確認してください。</p></section>

    <section className="article-affiliate" aria-label="FXTFの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} /><p className="affiliate-disclosure">A8.netの提携広告です。広告報酬は計算や評価には影響しません。商品CFDは元本や利益が保証されず、相場急変時には証拠金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/fxtf-mt5-gold-cfd-margin">FXTF MT5の金CFDと比較する →</Link></p>
    <p><Link href="/articles/fxtf-mt5-commodity-vs-crypto-cfd">商品CFDと暗号資産CFDの全体比較 →</Link></p>
    <p><Link href="/fx/fxtf">FXTFの取引条件一覧へ →</Link></p>
  </article>;
}
