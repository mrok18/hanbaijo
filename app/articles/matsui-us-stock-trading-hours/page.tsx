import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-us-stock-trading-hours' },
  title: '松井証券の米国株取引時間｜プレマーケットと23時間化予定',
  description: '松井証券の米国株について、夏時間・冬時間のプレマーケットと通常取引時間、2026年12月予定の23時間取引を整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">MATSUI / US STOCK HOURS</p>
    <h1>松井証券の米国株取引時間<br />プレマーケットと23時間化予定</h1>
    <p className="lede">松井証券では通常取引の前にプレマーケットを利用できます。米国の夏時間と冬時間で日本時間が1時間変わること、2026年12月には取引時間の拡大が予定されていることを分けて整理します。</p>

    <h2>現在の取引時間</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>夏時間</th><th>冬時間</th></tr></thead><tbody>
      <tr><td className="ex-name">プレマーケット</td><td>17:00〜22:30</td><td>18:00〜23:30</td></tr>
      <tr><td className="ex-name">通常取引</td><td>22:30〜翌5:00</td><td>23:30〜翌6:00</td></tr>
      <tr><td className="ex-name">合計</td><td>17:00〜翌5:00</td><td>18:00〜翌6:00</td></tr>
    </tbody></table></div></div>
    <p>プレマーケットは通常取引開始前の時間外取引です。日本の夕方から取引できますが、通常時間と同じ流動性や価格形成になるとは限りません。</p>

    <h2>プレマーケットで確認したいこと</h2>
    <div className="fx-metric-grid">
      <article><b>LIQUIDITY</b><h3>出来高</h3><p>通常時間より参加者が少なく、注文が成立しにくい場合があります。</p></article>
      <article><b>SPREAD</b><h3>売買価格差</h3><p>気配の差が広いと、約定直後の評価損が大きくなります。</p></article>
      <article><b>ORDER</b><h3>注文条件</h3><p>利用できる注文方法や訂正・取消の扱いを取引画面で確認します。</p></article>
      <article><b>NEWS</b><h3>材料発表</h3><p>決算や経済指標の直後は価格が大きく飛ぶ可能性があります。</p></article>
    </div>
    <div className="callout"><strong>開始直前1分の訂正・取消に注意</strong><p>プレマーケット前にSOR経由でNYSE Arcaへ発注された注文は、開始前の1分間に訂正・取消が有効とならず「取消訂正中」になる場合があります。発注前に公式ルールを確認してください。</p></div>

    <h2>2026年12月から23時間取引を予定</h2>
    <p>松井証券は、2026年12月6日（日）の対応後、12月7日（月）午前11:00から米国株の取引時間を現行12時間から23時間へ拡大する予定と発表しています。この記事の確認日である2026年9月8日時点では開始前です。</p>
    <div className="formula-box"><code>現行：1日12時間 → 予定：1日23時間</code><small>開始日や対象銘柄、メンテナンス時間などは実施時の公式案内を優先してください。</small></div>

    <h2>取引前チェック</h2>
    <ul><li>米国が夏時間か冬時間か</li><li>注文がプレマーケット・通常取引のどちらに出るか</li><li>現在の気配値、売買価格差、出来高</li><li>注文の有効期間と市場をまたぐ際の扱い</li><li>祝日や臨時休場による短縮取引の有無</li></ul>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/us-stock/domestic/rule/" target="_blank" rel="noopener noreferrer">松井証券「米国株現物取引 取引ルール」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/52049" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「米国株のプレマーケットとはなんですか」</a></li>
      <li><a href="https://www.matsui.co.jp/news/2026/detail_0728_01.html" target="_blank" rel="noopener noreferrer">松井証券「米国株の取引時間を23時間に拡大します」</a></li>
    </ul><p>取引時間と今後の予定は2026年9月8日に確認しました。</p></section>

    <p><Link href="/tools/matsui-us-stock-cost-calculator">米国株の往復コストを計算する →</Link></p>
    <p><Link href="/articles/matsui-us-stock-fx-fee">松井証券の米国株為替コストを見る →</Link></p>
    <p><Link href="/stocks/matsui">松井証券の株式コストシートへ →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section>
  </article>;
}
