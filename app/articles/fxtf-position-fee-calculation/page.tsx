import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fxtf-position-fee-calculation' },
  title: 'FXTFの建玉連動手数料とは？保有中の数量を含めて計算',
  description: 'FXTFの建玉連動手数料を、新規注文、同一銘柄・同一売買方向の保有数量、手数料ランク、1万通貨あたり金額に分けて計算します。',
};

export default function Page() {
  return <article><p className="page-kicker">FXTF / POSITION-LINKED FEE</p><h1>FXTFの建玉連動手数料<br />新規注文量だけでは決まらない</h1><p className="lede">手数料ランクは、銘柄と売買方向ごとに、保有中の建玉数量と新規発注数量の合計で決まります。適用単価を掛ける対象は新規注文数量です。決済時の追加手数料はありません。</p>

    <h2>計算は3段階</h2><ol><li><strong>銘柄と売買方向を分ける：</strong>USD/JPYの買いと売りは別に集計します。</li><li><strong>保有建玉＋新規注文を合計：</strong>同一銘柄・同一方向へ積み増す場合の合計数量でランクを決めます。</li><li><strong>新規注文数量へ単価を掛ける：</strong>ランクの1万通貨あたり手数料を、新たに約定する数量へ適用します。</li></ol><div className="formula-box"><code>ランク判定数量 ＝ 同一銘柄・同一方向の保有数量 ＋ 新規注文数量</code><code>手数料 ＝ 新規注文数量 ÷ 10,000通貨 × 適用単価</code><small>端数処理、銘柄別単価、最新ランクは公式手数料表を確認してください。</small></div>

    <h2>公式掲載の2例</h2><div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>USD/JPY</th><th>同方向の保有</th><th>新規注文</th><th>判定</th><th>手数料</th></tr></thead><tbody><tr><td className="ex-name">買いを新規</td><td>0通貨</td><td>1万通貨</td><td>ランク1</td><td>0円</td></tr><tr><td className="ex-name">売りを積み増し</td><td>5万通貨</td><td>8万通貨</td><td>合計13万・ランク2</td><td>320円</td></tr></tbody></table></div><p className="panel-note">2例目は公式ページの例。8万通貨÷1万×40円＝320円。手数料表は変更される場合があります。</p></div>

    <h2>GX・MT4とMT5で残高反映が違う</h2><p>GXとMT4では、新規取引の片道分が新規約定時に有効証拠金から差し引かれ、ポジション決済時に残高へ反映されます。MT5では、新規取引時に残高から差し引かれます。どのシステムでも決済取引そのものへの建玉連動手数料は発生しません。</p><div className="callout"><strong>「決済無料」を往復コスト0円と読まない</strong><p>新規時の建玉連動手数料に加え、売値と買値のスプレッド、保有期間のスワップ、スリッページを含めて往復損益を確認します。</p></div>

    <h2>短期売買は回数で積み上げる</h2><div className="formula-box"><code>期間手数料 ＝ 各新規約定の建玉連動手数料の合計</code><code>総取引コスト ＝ 建玉連動手数料 ＋ スプレッド負担 ＋ 支払スワップ ＋ 約定差</code><small>受取スワップは別に加算。公式手数料表を保存せず、取引履歴の実額で検証します。</small></div>

    <section className="article-affiliate" aria-label="FXTFの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。手数料ランクや金額は市場動向で変更されるため、発注前に公式表を確認してください。</p></section>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li><li><a href="https://www.fxtrade.co.jp/2026-02-21/" target="_blank" rel="noopener noreferrer">FXTF「2026年3月2日 建玉連動手数料変更」</a></li><li><a href="https://www.fxtrade.co.jp/gx-intro/" target="_blank" rel="noopener noreferrer">FXTF「GX-FX取引概要」</a></li></ul><p>計算方法と公式例は2026年9月8日に確認しました。料金表の最新単価を優先してください。</p></section>
    <p><Link href="/articles/fx-zero-spread-total-cost">0.0銭表示と総コストの関係を見る →</Link></p><p><Link href="/articles/fxtf-minimum-unit-margin">1,000通貨の必要証拠金を計算する →</Link></p><p><Link href="/fx/fxtf">FXTFの公式条件一覧へ →</Link></p>
  </article>;
}
