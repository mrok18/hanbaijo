import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM CFDの取引コストは？手数料・証拠金・調整額を確認',
  description: 'DMM CFDの取引手数料、株価指数・商品CFDの証拠金率、1Lotの単位、価格調整額などを公式情報から整理します。',
};

export default function DmmCfdPage() {
  return (
    <div className="provider-page">
      <section className="provider-hero provider-hero-cfd">
        <div>
          <p className="page-kicker">PROVIDER FACT SHEET / CFD</p>
          <h1>DMM CFDの負担を、<br />手数料0円の先まで確認。</h1>
          <p className="lede">取引手数料が無料でも、スプレッドと保有中の調整額は残ります。株価指数と商品で異なる証拠金率・取引単位も分けて整理します。</p>
          <div className="hero-actions">
            <Link className="button primary" href="/articles/dmm-cfd-total-cost">総コストを確認</Link>
            <Link className="button secondary" href="/articles/dmm-cfd-margin-leverage">必要証拠金を計算</Link>
            <Link className="button secondary" href="/cfd">CFD比較へ戻る</Link>
          </div>
        </div>
        <aside className="provider-stamp">
          <span>OFFICIAL FACTS</span>
          <strong>2026.09.07 確認</strong>
          <dl>
            <div><dt>売買手数料</dt><dd>無料</dd></div>
            <div><dt>指数証拠金</dt><dd>取引額の10％以上</dd></div>
            <div><dt>商品証拠金</dt><dd>取引額の5％以上</dd></div>
            <div><dt>データ</dt><dd>再掲載許諾を照会中</dd></div>
          </dl>
        </aside>
      </section>

      <section className="provider-section">
        <p className="section-index">01 / COST MAP</p>
        <h2>DMM CFDで確認する4つの負担</h2>
        <div className="provider-fact-grid">
          <article><b>TRADE FEE</b><h3>取引手数料</h3><p>公式案内では無料です。ただし、無料なのは売買手数料であり、取引の総コストが0円という意味ではありません。</p></article>
          <article><b>SPREAD</b><h3>スプレッド</h3><p>AskとBidの差が実質的な売買コストになります。祝日、取引終了前後、経済指標発表時などに広がる場合があります。</p></article>
          <article><b>ADJUSTMENT</b><h3>各種調整額</h3><p>先物参照銘柄の価格調整額、現物参照銘柄の金利調整額など、銘柄と保有期間に応じた受け払いがあります。</p></article>
          <article><b>EXECUTION</b><h3>スリッページ</h3><p>即時注文や逆指値では、画面の表示価格と実際の約定価格に差が生じる可能性があります。</p></article>
        </div>
      </section>

      <section className="provider-section provider-split">
        <div>
          <p className="section-index">02 / MARGIN</p>
          <h2>指数は10倍、商品は20倍</h2>
          <p>必要証拠金は、現在レートとLot数、銘柄ごとの取引単位を使って計算します。外貨建て銘柄は円換算が必要です。</p>
          <div className="formula-box">
            <code>指数CFD：現在レート × Lot数 × 取引単位 ÷ 10</code>
            <code>商品CFD：現在レート × Lot数 × 取引単位 ÷ 20</code>
            <small>DMM CFD公式FAQの計算式。実際の必要額は取引画面で確認してください。</small>
          </div>
        </div>
        <div className="provider-checklist">
          <h3>1Lotの例</h3>
          <ul>
            <li>日本225：10単位</li>
            <li>米国ナスダック100：1単位</li>
            <li>原油：10バレル</li>
            <li>金スポット：1トロイオンス</li>
          </ul>
          <p>銘柄ごとに取引単位が大きく異なるため、Lot数だけでリスクを比較しないことが重要です。</p>
        </div>
      </section>

      <section className="provider-section">
        <p className="section-index">03 / PRACTICAL GUIDES</p>
        <h2>DMM CFDの計算ガイド</h2>
        <div className="provider-fact-grid">
          <article><b>MARGIN</b><h3><Link href="/articles/dmm-cfd-margin-leverage">必要証拠金を銘柄別に計算</Link></h3><p>日本225・米国ナスダック100・金・原油を同じ1Lotで比べ、取引単位と円換算の違いを確認します。</p></article>
          <article><b>TOTAL COST</b><h3><Link href="/articles/dmm-cfd-total-cost">手数料0円の先を確認</Link></h3><p>スプレッド、金利調整額、価格調整額、約定差を取引期間ごとに分けます。</p></article>
          <article><b>MARGIN SAFETY</b><h3><Link href="/articles/dmm-cfd-margin-call-losscut">追証とロスカットを区別</Link></h3><p>証拠金維持率100％の追加証拠金と、50％のロスカットを判定時点から整理します。</p></article>
          <article><b>CFD VS FUTURES</b><h3><Link href="/articles/cfd-vs-futures-nikkei225">日本225と先物を比較</Link></h3><p>店頭・取引所、期限、取引単位、証拠金、コストの違いを確認します。</p></article>
          <article><b>ADJUSTMENT</b><h3><Link href="/articles/cfd-price-adjustment">価格調整額の仕組み</Link></h3><p>参照限月の切替と受払いを、計算式と公式例から整理します。</p></article>
        </div>
      </section>

      <section className="provider-source">
        <div><span>SOURCES</span><strong>DMM CFD公式情報</strong></div>
        <div className="provider-source-links">
          <a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">商品CFD概要 ↗</a>
          <a href="https://fx.dmm.com/policy/regulation/overview_cfd.pdf" target="_blank" rel="noopener noreferrer">取引説明書 ↗</a>
        </div>
      </section>

      <section className="provider-offer" aria-label="DMM CFDの広告">
        <div>
          <p className="section-index">04 / OFFICIAL SITE</p>
          <h2>対象銘柄と最新条件を確認</h2>
          <p>以下はA8.netの提携広告です。掲載報酬は、事実確認や将来の実測順位に影響しません。</p>
        </div>
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
      </section>
      <p className="affiliate-disclosure">CFDは元本および利益が保証されず、預けた証拠金を上回る損失が生じる場合があります。契約締結前交付書面を確認してください。</p>
    </div>
  );
}
