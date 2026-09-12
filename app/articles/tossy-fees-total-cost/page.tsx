import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/tossy-fees-total-cost' },
  title: 'TOSSYの手数料は無料？スプレッド・調整額まで計算',
  description: 'TOSSYの口座管理費・取引手数料無料と、スプレッド、スワップ、金利・権利・価格調整、スリッページを区別して総コストを整理します。',
};

export default function Page() {
  return <article><p className="page-kicker">TOSSY / TOTAL COST</p><h1>TOSSYの手数料は無料？<br />売買と保有のコストを分ける</h1><p className="lede">TOSSYは口座管理費と取引手数料が無料です。しかし、売値と買値の差、保有に伴う調整額、意図した価格との差は別に残ります。短期売買と持ち越しで見る項目を分けます。</p>

    <h2>「無料」と「発生する可能性」を一覧にする</h2><div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>扱い</th><th>確認する場面</th></tr></thead><tbody><tr><td className="ex-name">口座管理費</td><td>無料</td><td>登録・維持</td></tr><tr><td className="ex-name">取引手数料</td><td>無料</td><td>新規・決済</td></tr><tr><td className="ex-name">スプレッド</td><td>実質的な取引コスト</td><td>発注前のBid・Ask</td></tr><tr><td className="ex-name">スワップポイント</td><td>受取・支払の場合</td><td>FXの持ち越し</td></tr><tr><td className="ex-name">金利・権利調整額</td><td>受取・支払の場合</td><td>対象CFDの持ち越し</td></tr><tr><td className="ex-name">価格調整額</td><td>受取・支払の場合</td><td>限月切替の対象銘柄</td></tr><tr><td className="ex-name">スリッページ</td><td>約定価格の差</td><td>急変・流動性低下時</td></tr></tbody></table></div></div>

    <h2>短期売買は往復スプレッドを回数で計算</h2><p>スプレッドは新規注文時だけ別途請求される料金ではなく、同時点の売値と買値の差です。同じ条件で売買を繰り返すほど影響が積み上がります。</p><div className="formula-box"><code>概算スプレッド負担 ＝ 価格差 × 取引数量 × 往復回数</code><small>実際のスプレッドは固定保証ではなく、相場急変や流動性で拡大する場合があります。</small></div>

    <h2>持ち越しは商品区分ごとの調整額を見る</h2><p>FXではスワップポイント、証券・商品・暗号資産CFDでは商品に応じた金利調整額、権利調整額、価格調整額などが発生する場合があります。受取りだけでなく支払いとなる場合や、金利環境により受払方向が変わる場合もあります。</p><div className="callout"><strong>保有日数だけでなく付与日を確認</strong><p>営業日、休日、権利落ち、限月切替によって付与のタイミングや日数が変わります。長期保有では、取引画面に反映された累計調整額を記録します。</p></div>

    <h2>比較用の総コスト式</h2><div className="formula-box"><code>総コスト ＝ スプレッド負担 ＋ 支払調整額 ＋ 約定差</code><code>実質損益 ＝ 売買損益 ＋ 受取調整額 − 総コスト</code><small>税金、通信費、端末費用は別途。約定差は事前確定できないため、取引記録から検証します。</small></div><p>銘柄比較では「取引手数料無料」だけで順位を付けず、同じ取引時間、数量、保有日数でスプレッドと調整額をそろえて比較します。</p>

    <section className="article-affiliate" aria-label="TOSSYの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.tossy} /><p className="affiliate-disclosure">広告リンクから登録と所定条件の達成が確認された場合、当サイトが報酬を受け取ることがあります。手数料と総コストは分け、受取りとなる調整額も利益保証として扱いません。</p></section>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://securities.dmm.com/service_policy/" target="_blank" rel="noopener noreferrer">DMM.com証券「お客様本位の業務運営に関する方針」</a></li><li><a href="https://securities.dmm.com/notice/" target="_blank" rel="noopener noreferrer">DMM.com証券「金融商品取引法及び商品先物取引法に基づく表示」</a></li><li><a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/rules.pdf" target="_blank" rel="noopener noreferrer">DMM.com証券「約款（TOSSY）」</a></li></ul><p>手数料とリスク表示は2026年9月8日に確認しました。個別銘柄のスプレッド・調整額は取引画面の最新表示を優先してください。</p></section>
    <p><Link href="/articles/tossy-margin-by-asset">6資産の必要証拠金を比較する →</Link></p><p><Link href="/articles/tossy-margin-call-losscut">保有中の追証・ロスカットを確認する →</Link></p><p><Link href="/cfd/tossy">TOSSYの公式条件一覧へ →</Link></p>
  </article>;
}
