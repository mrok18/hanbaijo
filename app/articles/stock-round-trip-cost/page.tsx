import Link from 'next/link';

export const metadata = {
  title: '株の往復コストはいくら？売買手数料と板の差を計算',
  description: '国内株を買って売るまでのコストを、買付手数料、売却手数料、売値と買値の差に分けて計算します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DOMESTIC STOCK COST</p>
      <h1>株の往復コストはいくら？<br />売買手数料と板の差を計算</h1>
      <p className="lede">
        売買手数料が0円でも、買える価格と売れる価格には差がある場合があります。
        株の短期売買コストは、手数料と板の価格差を分けると見通しやすくなります。
      </p>

      <h2>往復コストの基本式</h2>
      <div className="formula-box">
        <code>往復コスト ＝ 買付手数料 ＋ 売却手数料 ＋（最良売り気配 − 最良買い気配）× 株数</code>
        <small>同時点の気配ですぐ反対売買できたと仮定する単純計算。実際の値動きや約定差は別です。</small>
      </div>

      <h2>100株を売買する例</h2>
      <p>
        最良買い気配が1,000円、最良売り気配が1,001円なら、価格差は1株あたり1円です。
        売買単位が100株なら、価格差による負担は100円。買付・売却手数料が各55円なら、往復の概算は210円です。
      </p>
      <ul>
        <li>板の価格差：1円 × 100株 ＝ 100円</li>
        <li>売買手数料：55円 × 2回 ＝ 110円</li>
        <li>往復コスト：100円 ＋ 110円 ＝ 210円</li>
      </ul>

      <h2>呼値の単位とスプレッドは同じではない</h2>
      <p>
        呼値は注文できる価格の刻みです。実際の最良売り気配と最良買い気配が、常に1呼値だけ離れているとは限りません。
        流動性が低い銘柄や相場が急変している場面では、複数の呼値にまたがることがあります。
      </p>

      <h2>売買金額に対する割合へ直す</h2>
      <div className="formula-box">
        <code>往復コスト率（%）＝ 往復コスト ÷ 約定代金 × 100</code>
        <small>約定代金は、比較時のルールを決めて買付代金などに統一します。</small>
      </div>
      <p>買付代金が100,100円、往復コストが210円なら、単純な往復コスト率は約0.21%です。</p>

      <div className="callout">
        <strong>信用取引は保有日数も必要です</strong>
        <p>信用金利、貸株料、管理費などが加わるため、現物取引と同じ式だけでは比較できません。</p>
      </div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.jpx.co.jp/equities/trading/domestic/03.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「売買単位」</a></li>
          <li><a href="https://www.jpx.co.jp/equities/trading/domestic/07.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「呼値の単位」</a></li>
        </ul>
        <p>制度は2026年9月7日に確認。手数料の数字は計算説明用の仮定です。</p>
      </section>

      <p><Link href="/tools/cost-calculator">取引コスト計算機で試す →</Link></p>
      <p><Link href="/stocks/domestic-fee-comparison">国内株4社の手数料を比較する →</Link></p>
      <p><Link href="/articles/dmm-kabu-domestic-round-trip-fee">DMM 株の往復手数料を具体例で見る →</Link></p>
      <p><Link href="/stocks">株式コスト比較へ戻る →</Link></p>
    </article>
  );
}
