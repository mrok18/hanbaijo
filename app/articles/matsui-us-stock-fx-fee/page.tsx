import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '松井証券の米国株は為替手数料0円？円貨決済25銭との違い',
  description: '松井証券の米国株における米ドル・日本円の事前両替0円と、円貨決済時の1ドル25銭の違いを取引金額別に計算します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">MATSUI / US STOCK FX COST</p>
    <h1>松井証券の米国株は為替手数料0円？<br />円貨決済25銭との違い</h1>
    <p className="lede">「米ドルと日本円の両替は0円」と「円貨決済では1ドル25銭」は、対象となる取引方法が違います。米国株の注文前に米ドルへ両替する場合と、円のまま注文する場合を分けて確認します。</p>

    <h2>結論：無料なのは事前両替</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>方法</th><th>為替コスト</th><th>処理</th></tr></thead><tbody>
      <tr><td className="ex-name">事前に米ドルへ両替</td><td>0銭</td><td>外貨決済で注文</td></tr>
      <tr><td className="ex-name">円貨決済で米国株を注文</td><td>25銭／米ドル</td><td>約定に伴い円とドルを交換</td></tr>
    </tbody></table></div></div>
    <p>公式料金ページでは、日本円と米ドルを両替する際のスプレッドを無料と案内する一方、取引通貨を「円」にした注文には25銭／米ドルが発生すると記載しています。</p>

    <h2>取引金額ごとの片道コスト</h2>
    <div className="fx-metric-grid">
      <article><b>$1,000</b><h3>250円</h3><p>0.25円 × 1,000ドル</p></article>
      <article><b>$5,000</b><h3>1,250円</h3><p>0.25円 × 5,000ドル</p></article>
      <article><b>$10,000</b><h3>2,500円</h3><p>0.25円 × 10,000ドル</p></article>
      <article><b>ROUND TRIP</b><h3>売却時も確認</h3><p>円貨で受け取る場合は売却側の交換も確認</p></article>
    </div>
    <div className="formula-box"><code>円貨決済の概算 ＝ 約定代金（米ドル）× 0.25円</code><small>為替レートの変動による損益とは別の取引コストです。</small></div>

    <h2>NISAでも為替コストは別</h2>
    <p>NISA口座の米国株売買手数料は0円ですが、取引通貨「円」による注文では為替手数料が別途発生します。売買手数料無料と通貨交換無料を同じ意味として扱わないことが重要です。</p>
    <div className="callout"><strong>比較は注文方法まで揃える</strong><p>証券会社ごとのコストを比べるときは、円貨決済同士、または事前両替を使う外貨決済同士で比較します。表示上の「0円」だけでは往復負担を判断できません。</p></div>

    <h2>取引前の確認項目</h2>
    <ul><li>注文画面の取引通貨が「円」か「米ドル」か</li><li>事前両替が完了し、米ドル買付余力へ反映されているか</li><li>NISA・特定・一般口座のどれで発注するか</li><li>株式売買手数料と為替コストを別々に計算したか</li></ul>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/us-stock/domestic/fee/" target="_blank" rel="noopener noreferrer">松井証券「米国株現物取引 手数料」</a></li>
      <li><a href="https://www.matsui.co.jp/nisa/about/" target="_blank" rel="noopener noreferrer">松井証券「新NISA 概要・魅力」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/35810" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「米国株の手数料はどのように計算しますか」</a></li>
    </ul><p>取引条件は2026年9月8日に確認しました。条件変更時は公式情報を優先してください。</p></section>

    <p><Link href="/articles/us-stock-fx-cost">為替コストの一般的な計算方法を見る →</Link></p>
    <p><Link href="/stocks/matsui">松井証券の株式コストシートへ →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section>
  </article>;
}
