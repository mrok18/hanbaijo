import Link from 'next/link';
import { STOCK_PROVIDER_LIST } from '@/lib/stock-providers';

export const metadata = {
  title: '株式の取引コスト比較｜国内株・米国株の手数料と為替を読む',
  description: '国内株と米国株のコストを、売買手数料、板の価格差、為替コスト、信用金利に分けて比較します。',
};

export default function StocksPage() {
  return (
    <div className="fx-page stocks-page">
      <section className="fx-hero">
        <div>
          <p className="page-kicker">STOCK COST GUIDE</p>
          <h1>「手数料無料」でも、<br /><em>差が出る場所がある。</em></h1>
          <p className="lede">
            株式の負担は、売買手数料だけでは決まりません。板の売値と買値、米国株の為替、
            信用取引の金利まで分け、同じ売買金額で比べます。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/tools/cost-calculator">株式コストを試算</Link>
            <Link className="button secondary" href="/articles/stock-round-trip-cost">計算方法を読む</Link>
          </div>
        </div>
        <aside className="fx-status-panel stocks-status-panel">
          <span>DATA STATUS</span>
          <strong>比較方法を公開中</strong>
          <p>
            現在は公式制度と計算方法を先行公開しています。証券会社ごとの料金は更新日と適用条件を確認し、
            比較表に必要な項目がそろった段階で追加します。
          </p>
          <dl>
            <div><dt>国内株</dt><dd>4社比較を公開</dd></div>
            <div><dt>米国株</dt><dd>手数料・為替を公開</dd></div>
            <div><dt>会社別</dt><dd>4社のシートを公開</dd></div>
          </dl>
        </aside>
      </section>

      <section className="fx-section">
        <div className="section-heading"><div>
          <p className="section-index">01 / WHAT TO COMPARE</p>
          <h2>株式は、4つのコストで比べる</h2>
          <p>現物・信用、国内・海外を混ぜず、該当する費用だけを合計します。</p>
        </div></div>
        <div className="fx-metric-grid">
          <article><b>01</b><h3>売買手数料</h3><p>1注文、1日定額など料金体系を分け、買付と売却の両方を数えます。</p></article>
          <article><b>02</b><h3>板の価格差</h3><p>最良売り気配と最良買い気配の差を、株数に掛けて円換算します。</p></article>
          <article><b>03</b><h3>為替コスト</h3><p>米国株などでは、円から外貨、外貨から円への交換条件を確認します。</p></article>
          <article><b>04</b><h3>保有コスト</h3><p>信用金利、貸株料、その他の管理費用は保有日数をそろえて比べます。</p></article>
        </div>
      </section>

      <section className="fx-example stocks-example">
        <div>
          <p className="section-index inverse">02 / QUICK MATH</p>
          <h2>1円の価格差なら、100株で100円。</h2>
          <p>
            1,000円の買い気配と1,001円の売り気配が出ているとき、価格差は1株あたり1円です。
            100株をすぐ反対売買した場合、単純計算の価格差は100円になります。
          </p>
        </div>
        <div className="fx-formula">
          <span>MARKET SPREAD</span>
          <strong>（1,001円 − 1,000円）× 100株</strong>
          <b>= 100円</b>
          <small>手数料・価格変動・税金を含まない仮定例</small>
        </div>
      </section>

      <section className="fx-section">
        <div className="section-heading"><div>
          <p className="section-index">03 / DOMESTIC &amp; US</p>
          <h2>国内株と米国株で、追加項目が変わる</h2>
        </div></div>
        <div className="data-panel"><div className="table-scroll">
          <table className="rates fx-target-table">
            <thead><tr><th>対象</th><th>共通して確認</th><th>追加で確認</th></tr></thead>
            <tbody>
              <tr><td className="ex-name">国内株・現物</td><td>売買手数料・板の価格差</td><td>単元株数・注文条件</td></tr>
              <tr><td className="ex-name">国内株・信用</td><td>売買手数料・板の価格差</td><td>信用金利・貸株料・管理費</td></tr>
              <tr><td className="ex-name">米国株</td><td>売買手数料・市場の価格差</td><td>為替・現地費用・決済方法</td></tr>
            </tbody>
          </table>
        </div><p className="panel-note">税金は口座区分や個別事情で異なるため、取引コストとは分けて確認してください。</p></div>
      </section>

      <section className="fx-section">
        <div className="section-heading"><div>
          <p className="section-index">04 / LEARN</p>
          <h2>比較表と計算方法を使い分ける</h2>
        </div></div>
        <div className="affiliate-grid">
          <article className="affiliate-card"><div className="affiliate-card-head"><span>COMPARE</span><b>2026-09-07確認</b></div><p className="affiliate-category">DOMESTIC STOCK FEES</p><h3>国内株4社の手数料</h3><p>GMOクリック証券、楽天証券、松井証券、DMM 株を同じ売買例で比較します。</p><Link href="/stocks/domestic-fee-comparison">比較表を見る →</Link></article>
          <article className="affiliate-card"><div className="affiliate-card-head"><span>GUIDE</span><b>国内株</b></div><p className="affiliate-category">ROUND-TRIP COST</p><h3>往復コストの計算</h3><p>買付と売却の手数料、板の価格差を1つの式で整理します。</p><Link href="/articles/stock-round-trip-cost">記事を読む →</Link></article>
          <article className="affiliate-card"><div className="affiliate-card-head"><span>GUIDE</span><b>米国株</b></div><p className="affiliate-category">FX CONVERSION</p><h3>為替コストの計算</h3><p>1ドルあたりの為替コストを、購入金額全体の円負担へ直します。</p><Link href="/articles/us-stock-fx-cost">記事を読む →</Link></article>
          <article className="affiliate-card"><div className="affiliate-card-head"><span>GUIDE</span><b>松井証券</b></div><p className="affiliate-category">ACCOUNT TYPES</p><h3>FX専用口座と総合口座</h3><p>FXだけ使う場合と、株・NISA・先物へ広げる場合の入口を整理します。</p><Link href="/articles/matsui-account-types">記事を読む →</Link></article>
          <article className="affiliate-card"><div className="affiliate-card-head"><span>GUIDE</span><b>DMM 株</b></div><p className="affiliate-category">DOMESTIC ROUND TRIP</p><h3>国内株の往復手数料</h3><p>1注文ごとの料金表から、買付と売却の合計額を計算します。</p><Link href="/articles/dmm-kabu-domestic-round-trip-fee">記事を読む →</Link></article>
          <article className="affiliate-card"><div className="affiliate-card-head"><span>GUIDE</span><b>DMM 株</b></div><p className="affiliate-category">US STOCK TOTAL COST</p><h3>米国株の手数料と為替</h3><p>0.495％の手数料と片道25銭の為替コストを分けて計算します。</p><Link href="/articles/dmm-kabu-us-stock-fee">記事を読む →</Link></article>
          <article className="affiliate-card"><div className="affiliate-card-head"><span>START</span><b>DMM 株</b></div><p className="affiliate-category">ACCOUNT OPENING</p><h3>本人確認と必要書類</h3><p>マイナンバーカード1点で進む方法と、画像提出・郵送で必要な組合せを整理します。</p><Link href="/articles/dmm-kabu-account-opening-documents">記事を読む →</Link></article>
          <article className="affiliate-card"><div className="affiliate-card-head"><span>NISA</span><b>DMM 株</b></div><p className="affiliate-category">ACCOUNT APPLICATION</p><h3>NISA口座の申込方法</h3><p>新規同時申込、既存利用者の追加、他社からの金融機関変更を分けて確認します。</p><Link href="/articles/dmm-kabu-nisa-account-opening">記事を読む →</Link></article>
          <article className="affiliate-card"><div className="affiliate-card-head"><span>NISA</span><b>DMM 株</b></div><p className="affiliate-category">FEES &amp; PRODUCTS</p><h3>無料範囲と残るコスト</h3><p>国内株・米国株の売買手数料と、為替・配当など別に残る負担を整理します。</p><Link href="/articles/dmm-kabu-nisa-fees-products">記事を読む →</Link></article>
        </div>
      </section>

      <section className="article-sources" aria-labelledby="stock-sources">
        <h2 id="stock-sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.jpx.co.jp/equities/trading/domestic/03.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「売買単位」</a></li>
          <li><a href="https://www.jpx.co.jp/equities/trading/domestic/07.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「呼値の単位」</a></li>
        </ul>
        <p>制度・用語は2026年9月7日に確認。個別会社の最新条件は各社公式サイトを確認してください。</p>
      </section>

      <section className="fx-section" aria-labelledby="stock-provider-directory">
        <div className="section-heading"><div>
          <p className="section-index">05 / COST FACT SHEETS</p>
          <h2 id="stock-provider-directory">証券会社別に、無料条件まで確認する</h2>
          <p>比較表の数字を、対象外取引や追加費用まで会社別に掘り下げます。広告リンクの有無は各ページで明示します。</p>
        </div></div>
        <div className="provider-directory">
          {STOCK_PROVIDER_LIST.map((provider) => (
            <Link href={`/stocks/${provider.slug}`} key={provider.slug}>
              <span>2026-09-07 確認</span><h3>{provider.shortName}</h3><p>{provider.feeModel}</p><b>コストシートを見る →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="fx-next">
        <div><span>NEXT</span><h2>4社の料金体系を比べる。</h2></div>
        <p>同日売買と日をまたぐ売買で結果が変わる理由まで確認できます。</p>
        <Link className="button primary" href="/stocks/domestic-fee-comparison">国内株比較を見る</Link>
      </section>
    </div>
  );
}
