import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '松井証券の先物手数料｜通常と一日先物を往復比較',
  description: '松井証券の日経225先物、mini、マイクロについて、通常先物と一日先物の片道・往復手数料を1ティック損益と比較します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">MATSUI / FUTURES FEE</p>
    <h1>松井証券の先物手数料<br />通常と一日先物を往復比較</h1>
    <p className="lede">一日先物は通常の先物より安い料金が設定されていますが、日経225マイクロは同額です。片道表示だけでなく、新規と返済を合計した往復手数料で比較します。</p>

    <h2>片道・往復手数料</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>商品</th><th>通常・片道</th><th>通常・往復</th><th>一日・片道</th><th>一日・往復</th><th>往復差</th></tr></thead><tbody>
      <tr><td className="ex-name">日経225先物</td><td>220円</td><td>440円</td><td>165円</td><td>330円</td><td>110円</td></tr>
      <tr><td className="ex-name">日経225mini</td><td>38.5円</td><td>77円</td><td>27.5円</td><td>55円</td><td>22円</td></tr>
      <tr><td className="ex-name">日経225マイクロ</td><td>11円</td><td>22円</td><td>11円</td><td>22円</td><td>0円</td></tr>
    </tbody></table></div><p className="panel-note">税込・1枚・インターネット取引。往復は同じ料金で新規と返済が約定すると仮定した当サイトの試算です。</p></div>

    <h2>1ティックに対する往復負担</h2>
    <div className="fx-metric-grid">
      <article><b>LARGE</b><h3>通常 4.4％</h3><p>440円 ÷ 1ティック10,000円</p></article>
      <article><b>MINI</b><h3>通常 15.4％</h3><p>77円 ÷ 1ティック500円</p></article>
      <article><b>MICRO</b><h3>通常 44％</h3><p>22円 ÷ 1ティック50円</p></article>
      <article><b>DAY MINI</b><h3>一日 11％</h3><p>55円 ÷ 1ティック500円</p></article>
    </div>
    <p>絶対額はマイクロが最小ですが、最小値動きに対する手数料比率は最大です。商品の大きさが小さくなるほど、往復手数料をティック単位でも確認する意味が増します。</p>

    <h2>一日先物を選ぶ前の注意</h2>
    <ul><li>通常先物とは別の商品区分・取引ルールである</li><li>日経225マイクロは通常と一日で手数料が同額</li><li>通常より高いレバレッジ設定のため値動きに対する余力を確認する</li><li>当日中に返済できない場合の任意決済ルールを確認する</li><li>SQ決済や電話注文など別条件を料金表で確認する</li></ul>
    <div className="callout"><strong>安い手数料だけで選ばない</strong><p>一日先物はデイトレード向けの仕組みです。保有期間、証拠金、ロスカット、返済期限が取引目的に合うかを先に確認してください。</p></div>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/fee/" target="_blank" rel="noopener noreferrer">松井証券「手数料」</a></li>
      <li><a href="https://www.matsui.co.jp/fop/futures/list/" target="_blank" rel="noopener noreferrer">松井証券「先物取引 取引情報」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/408" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「一日先物取引の手数料」</a></li>
      <li><a href="https://www.matsui.co.jp/fop/d-futures/rule/" target="_blank" rel="noopener noreferrer">松井証券「一日先物取引 取引ルール」</a></li>
    </ul><p>手数料と制度は2026年9月8日に確認しました。</p></section>

    <p><Link href="/tools/matsui-futures-cost-calculator">値幅・枚数から損益と手数料を計算する →</Link></p>
    <p><Link href="/articles/futures-tick-value">日経225先物の1ティック損益を見る →</Link></p>
    <p><Link href="/futures/nikkei225-fee-comparison">証券会社別の標準手数料を比較する →</Link></p>
    <p><Link href="/futures">先物コストガイドへ戻る →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section>
  </article>;
}
