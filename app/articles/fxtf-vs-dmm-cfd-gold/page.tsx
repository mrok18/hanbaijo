import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fxtf-vs-dmm-cfd-gold' },
  title: 'FXTF MT5とDMM CFDの金CFDを比較｜1Lot・証拠金・総コスト',
  description: 'FXTF MT5とDMM CFDの金CFDを、1Lotの取引単位、証拠金率、スプレッド、新規手数料、保有中の調整額、取引ツールで比較します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">GOLD CFD / FXTF MT5 VS DMM CFD</p>
    <h1>金CFDを同じ1Lotで比較<br />違いは手数料と保有費</h1>
    <p className="lede">FXTF MT5のXAU/USDとDMM CFDの金スポットは、どちらも1Lot＝1トロイオンスです。個人の商品CFDはレバレッジ20倍で、証拠金率はFXTFが5％、DMM CFDが5％以上です。取引サイズをそろえ、手数料と保有費の違いを確認します。</p>

    <h2>1Lotと必要証拠金の計算式は共通</h2>
    <p>両社とも金CFD 1Lotは1トロイオンスです。個人の商品CFDはレバレッジ20倍なので、想定元本の5％を共通の下限目安として比較できます。実際の必要額は各社の取引画面で確認します。</p>
    <div className="formula-box"><code>金価格（USD/oz）× 米ドル円 × Lot数 × 5％</code><small>金価格4,000ドル、米ドル円160円、1Lotなら32,000円。価格と為替は例示であり、現在値ではありません。</small></div>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較項目</th><th>FXTF MT5</th><th>DMM CFD</th></tr></thead><tbody>
      <tr><td className="ex-name">銘柄</td><td>XAU/USD</td><td>金スポット</td></tr>
      <tr><td className="ex-name">1Lot</td><td>1トロイオンス</td><td>1トロイオンス</td></tr>
      <tr><td className="ex-name">個人の証拠金率</td><td>5％（レバレッジ20倍）</td><td>5％以上（レバレッジ20倍）</td></tr>
      <tr><td className="ex-name">売買手数料</td><td>新規時に建玉連動手数料</td><td>取引手数料0円</td></tr>
      <tr><td className="ex-name">保有中の調整</td><td>スワップ</td><td>金利調整額</td></tr>
      <tr><td className="ex-name">取引環境</td><td>MT5</td><td>DMM CFDのPC・スマホツール</td></tr>
      <tr><td className="ex-name">商品CFDの範囲</td><td>4銘柄</td><td>14銘柄</td></tr>
    </tbody></table></div></div>

    <h2>FXTFは新規時の建玉連動手数料を加える</h2>
    <p>FXTF MT5は、スプレッドとは別に新規注文時の建玉連動手数料があります。金の現行手数料表では、同じ銘柄・同じ売買方向の既存建玉と新規注文の合計が0〜1Lotならランク1で0円、2〜200Lotならランク2で新規1Lotあたり24円です。</p>
    <p>今回の注文数量だけでランクを決めない点が重要です。手数料は変更される場合があるため、注文時点の公式表で既存建玉を含む合計数量と金額を確認します。</p>

    <h2>DMM CFDは取引手数料0円でも総コストは残る</h2>
    <p>DMM CFDは取引手数料と口座管理費を無料と案内しています。ただし、買値と売値の差であるスプレッドは残ります。金スポットを営業日クローズをまたいで保有すると金利調整額も発生し、原則として毎営業日に受け払いされます。</p>
    <div className="callout"><strong>「手数料0円」と「総コスト0円」は別</strong><p>短期売買ではスプレッドと約定差、持越しでは調整額が比較を左右します。広告見出しではなく、同じLot数・同じ保有日数にそろえて円換算します。</p></div>

    <h2>保有費は名称だけで比較しない</h2>
    <p>FXTFではNY時間17時をまたぐ建玉に1Lot単位でスワップが付与され、金・銀はリースレートと通貨の金利差などを基準に決定されます。DMM CFDでは金スポットに金利調整額が適用され、ロールオーバーした建玉へ原則毎営業日発生します。</p>
    <p>どちらも受取とは限らず、売買方向や日付で支払になる場合があります。比較時は「本日の金額」だけでなく、予定保有期間の日数を掛けて負担を見積もります。</p>

    <h2>短期売買と保有で選び方が変わる</h2>
    <ol>
      <li><strong>当日決済：</strong>両社の取引画面で同時刻のスプレッドを確認し、FXTFは新規手数料を加える</li>
      <li><strong>数日保有：</strong>スプレッドと新規手数料に、スワップまたは金利調整額を加える</li>
      <li><strong>取引環境：</strong>MT5を使うか、DMM CFDの専用ツールを使うかを確認する</li>
      <li><strong>他商品も取引：</strong>商品CFDの銘柄数と、調整額の種類を商品ごとに確認する</li>
    </ol>
    <p><Link href="/tools/gold-cfd-provider-cost-comparison">金CFD 2社比較計算機で同じ条件を試す →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD レバレッジ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/spread/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD スプレッド・スワップ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li>
      <li><a href="https://www.fxtrade.co.jp/pdf/commodity_positionfee.pdf" target="_blank" rel="noopener noreferrer">FXTF「商品CFD 建玉連動手数料表」PDF</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD「商品CFD 取引概要」</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/margin/" target="_blank" rel="noopener noreferrer">DMM CFD「証拠金」</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/swapcalendar/" target="_blank" rel="noopener noreferrer">DMM CFD「調整額カレンダー」</a></li>
    </ul><p>条件は2026年9月8日に公式情報で確認しました。スプレッド、手数料、調整額、対象銘柄は変更される場合があります。発注前に各社の取引画面と最新資料を確認してください。</p></section>

    <section className="article-affiliate" aria-label="FXTFとDMM CFDの広告"><div className="affiliate-grid">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
    </div><p className="affiliate-disclosure">上記はA8.netまたはアクセストレードの提携広告です。広告報酬は計算式や比較内容には影響しません。CFDは元本および利益が保証されず、証拠金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/fxtf-vs-dmm-cfd-commodity">金・銀・原油・天然ガスの2社比較 →</Link></p>
    <p><Link href="/tools/commodity-cfd-provider-cost-comparison">4商品対応の2社比較計算機 →</Link></p>
    <p><Link href="/articles/fxtf-mt5-gold-cfd-margin">FXTF MT5の金1Lotを詳しく計算 →</Link></p>
    <p><Link href="/articles/dmm-cfd-gold-vs-silver">DMM CFDの金と銀を比較 →</Link></p>
    <p><Link href="/cfd">CFDコストガイドへ →</Link></p>
  </article>;
}
