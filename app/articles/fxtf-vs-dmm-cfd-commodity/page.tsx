import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTF MT5とDMM CFDの商品CFDを比較｜金・銀・原油・天然ガス',
  description: 'FXTF MT5とDMM CFDの商品CFDを、共通4銘柄の1Lot、証拠金、スプレッド、手数料、スワップ・調整額、取扱銘柄数で比較します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">COMMODITY CFD / FXTF MT5 VS DMM CFD</p>
    <h1>商品CFDの2社比較<br />共通4銘柄は1Lotも同じ</h1>
    <p className="lede">FXTF MT5とDMM CFDは、金・銀・原油・天然ガスの4商品を共通して扱い、1Lotの取引単位も一致します。一方、取扱銘柄数、新規手数料、持越し時の費用構造は異なります。Lot数だけでなく、予定する売買回数と保有期間をそろえて比較します。</p>

    <h2>共通4商品の1Lotは両社で一致</h2>
    <p>4商品はいずれも米ドル建て価格です。想定元本は「商品価格 × 1Lotの単位 × 米ドル円 × Lot数」で円換算できます。個人の商品CFDは両社ともレバレッジ20倍で、想定元本の5％を証拠金の下限目安として比較できます。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>商品</th><th>FXTF MT5の1Lot</th><th>DMM CFDの1Lot</th><th>価格が1ドル動いた時の損益</th></tr></thead><tbody>
      <tr><td className="ex-name">金</td><td>1トロイオンス</td><td>1トロイオンス</td><td>1米ドル × Lot数</td></tr>
      <tr><td className="ex-name">銀</td><td>10トロイオンス</td><td>10トロイオンス</td><td>10米ドル × Lot数</td></tr>
      <tr><td className="ex-name">原油</td><td>10バレル</td><td>10バレル</td><td>10米ドル × Lot数</td></tr>
      <tr><td className="ex-name">天然ガス</td><td>100mmBtu</td><td>100MMBtu</td><td>100米ドル × Lot数</td></tr>
    </tbody></table></div></div>
    <div className="formula-box"><code>証拠金5％目安＝価格 × 取引単位 × 米ドル円 × Lot数 × 5％</code><small>実際の必要額は注文方向のレートや各社の計算・丸め処理で異なるため、発注画面で確認します。</small></div>

    <h2>取扱商品はFXTF 4銘柄、DMM CFD 14銘柄</h2>
    <p>FXTF MT5の商品CFDは、金・銀・原油・天然ガスの4銘柄です。DMM CFD-Commodityはこの4銘柄に加え、コーン、大豆、小麦、生牛、赤身豚肉、綿花、砂糖、コーヒー、ココア、オレンジジュースを扱い、合計14銘柄です。</p>
    <p>主要な貴金属・エネルギーだけを比較するなら4商品で足ります。農産物や畜産物まで一つの口座で検討したい場合は、取扱範囲の差が選択条件になります。</p>

    <h2>短期売買ではFXTFの新規手数料を加える</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>費用</th><th>FXTF MT5</th><th>DMM CFD</th></tr></thead><tbody>
      <tr><td className="ex-name">取引手数料</td><td>新規時に建玉連動手数料</td><td>無料</td></tr>
      <tr><td className="ex-name">スプレッド</td><td>あり。天然ガスは原則固定・例外ありの0スプレッド対象</td><td>あり。相場状況で拡大する場合あり</td></tr>
      <tr><td className="ex-name">金・銀の持越し</td><td>スワップ</td><td>金利調整額</td></tr>
      <tr><td className="ex-name">原油・天然ガスの持越し</td><td>スワップ</td><td>価格調整額</td></tr>
    </tbody></table></div></div>
    <p>FXTFの建玉連動手数料は、同一銘柄・同一売買方向の既存建玉と新規注文の合計数量でランクが決まります。DMM CFDは取引手数料無料ですが、どちらもスプレッドが総コストに含まれます。</p>
    <div className="callout"><strong>天然ガスの0スプレッドだけで決めない</strong><p>FXTFの天然ガスは24時間0スプレッドの対象ですが、原則固定・例外ありです。建玉連動手数料、約定差、持越し時のスワップまで加えて判断します。</p></div>

    <h2>持越し費用は仕組みが違う</h2>
    <p>FXTF MT5は4商品とも、NY時間17時をまたいで保有したポジションに1Lot単位のスワップを付与します。金・銀はリースレートと通貨の金利差など、原油・天然ガスは限月間の価格差などを基準にFXTFが決定します。</p>
    <p>DMM CFDは、スポットを参照する金・銀に金利調整額が原則毎営業日発生します。先物を参照する原油・天然ガスには価格調整額が発生し、銘柄ごとに概ね1〜3カ月に一度、参照限月を切り替える際に受け払いされます。</p>
    <p>そのため原油・天然ガスでは、FXTFのスワップを単純に「1日分 × 日数」とし、DMMの価格調整額と比較することはできません。同じ保有期間に実際に発生する支払総額を各社の画面・カレンダーから確認します。</p>

    <h2>比較する順番</h2>
    <ol>
      <li>取引する商品とLot数をそろえる</li>
      <li>両社の同時点のBid・Askからスプレッドを確認する</li>
      <li>FXTFは既存建玉を含めた新規手数料を加える</li>
      <li>同じ保有期間中のスワップまたは調整額を確認する</li>
      <li>スプレッド・手数料・支払調整額を円へ換算して合計する</li>
    </ol>
    <p><Link href="/tools/commodity-cfd-provider-cost-comparison">4商品対応の2社比較計算機を使う →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD レバレッジ・取引単位」</a></li>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/spread/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD スプレッド・スワップ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD「商品CFD サービス概要」</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/lineup/cfd-commodity/" target="_blank" rel="noopener noreferrer">DMM CFD「商品CFD 取扱銘柄」</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/swapcalendar/" target="_blank" rel="noopener noreferrer">DMM CFD「金利調整額・価格調整額」</a></li>
    </ul><p>条件は2026年9月9日に公式情報で再確認しました。取扱銘柄、手数料、スプレッド、スワップ、調整額は変更される場合があります。取引前に最新の公式資料と取引画面を確認してください。</p></section>

    <section className="article-affiliate" aria-label="FXTFとDMM CFDの広告"><div className="affiliate-grid">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
    </div><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は比較軸・計算式・評価には影響しません。商品CFDは元本および利益が保証されず、証拠金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/fxtf-vs-dmm-cfd-gold">両社の金CFDだけを詳しく比較 →</Link></p>
    <p><Link href="/articles/dmm-cfd-commodity-lot-list">DMM CFD 14商品の1Lot一覧 →</Link></p>
    <p><Link href="/articles/fxtf-mt5-oil-natural-gas-margin">FXTFの原油・天然ガスを計算 →</Link></p>
    <p><Link href="/cfd">CFDコストガイドへ →</Link></p>
  </article>;
}
