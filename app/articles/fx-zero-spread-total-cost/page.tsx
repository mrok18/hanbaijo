import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXの0.0銭は本当に無料？別手数料まで総額で確認',
  description: 'FXのゼロスプレッドと取引コスト0円の違いを、建玉連動手数料、数量条件、適用時間、約定差に分けて解説します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FX TOTAL COST</p>
      <h1>FXの0.0銭は、本当に無料なのか</h1>
      <p className="lede">スプレッドが0.0銭でも、取引全体のコストが常に0円とは限りません。対象時間、数量別の手数料、実際の約定、保有コストを別々に確認します。</p>

      <h2>0.0銭が示すのは、売値と買値の差</h2>
      <p>スプレッドは同時点のBidとAskの差です。0.0銭という表示は、その条件下で両者の差がないことを示しますが、別名目の取引手数料やスワップポイントまで無料という意味ではありません。</p>
      <div className="formula-box"><code>総コスト ＝ スプレッド換算額 ＋ 取引手数料 ＋ 約定差 ＋ 保有コスト</code><small>入出金費用などがある場合は別途加算</small></div>

      <h2>FXTFは数量が増えると手数料区分が変わる</h2>
      <p>FXTFはFXの対象時間にゼロスプレッドを公表しています。一方、米ドル/円の建玉連動手数料は、同一売買種別の保有建玉と新規発注の合計が1万通貨までは0円、1万通貨超から25万通貨までは新規注文1万通貨あたり40円です。</p>
      <p>したがって、新規1万通貨だけなら公称スプレッドと建玉連動手数料はいずれも0円ですが、同方向へ積み増すと手数料が変わります。0.0銭だけを見て数量条件を省略すると、総額を誤認します。</p>

      <h2>原則固定の対象時間外と例外を確認する</h2>
      <p>FXTFのゼロスプレッドは各営業日9時から翌3時までの原則固定・例外ありです。市場急変、流動性低下、重要指標の前後などには拡大する場合があり、対象時間外の米ドル/円は公表上3.8銭です。</p>
      <ul>
        <li>取引する通貨ペアが対象か</li>
        <li>注文時刻が対象時間内か</li>
        <li>保有建玉と新規発注の合計数量はいくらか</li>
        <li>表示価格と実際の約定価格に差がないか</li>
      </ul>

      <div className="callout"><strong>当サイトでは「ゼロコスト」と表現しません</strong><p>スプレッド、手数料、約定、保有費を分離し、確認できた公称条件だけを掲載します。FXTFの取引レートは同社回答に従い、自動取得・継続保存・統計加工・再掲載を行いません。</p></div>

      <section className="article-affiliate" aria-label="FXTFの広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。ゼロスプレッドの検証や注意点とは分けて掲載しています。</p>
      </section>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.fxtrade.co.jp/zerospread/" target="_blank" rel="noopener noreferrer">FXTF「ゼロスプレッドの全貌」</a></li>
          <li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li>
        </ul>
        <p>内容・条件は2026年9月7日に確認しました。</p>
      </section>

      <p><Link href="/fx/usdjpy-spread-comparison">米ドル円スプレッド10社比較を見る →</Link></p>
      <p><Link href="/fx/fxtf">FXTFのコストシートを見る →</Link></p>
      <p><Link href="/tools/cost-calculator">取引数量から円額を試算する →</Link></p>
    </article>
  );
}
