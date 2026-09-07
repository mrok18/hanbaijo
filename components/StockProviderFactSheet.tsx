import Link from 'next/link';
import type { StockProvider } from '@/lib/stock-providers';

export default function StockProviderFactSheet({ provider }: { provider: StockProvider }) {
  return (
    <div className="provider-page stock-provider-page">
      <section className="provider-hero provider-compact-hero stock-provider-hero">
        <div>
          <p className="page-kicker">STOCK COST FACT SHEET</p>
          <h1>{provider.name}</h1>
          <p className="provider-headline">{provider.headline}</p>
          <p className="lede">{provider.summary}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/stocks/domestic-fee-comparison">4社比較で確認</Link>
            <Link className="button secondary" href="/tools/cost-calculator">金額を試算</Link>
          </div>
        </div>
        <aside className="provider-stamp">
          <span>PUBLISHED DATA</span>
          <strong>公式情報を 2026-09-07 確認</strong>
          <dl>
            <div><dt>料金体系</dt><dd>{provider.feeModel}</dd></div>
            <div><dt>広告リンク</dt><dd>掲載なし</dd></div>
            <div><dt>比較順位</dt><dd>報酬の影響なし</dd></div>
          </dl>
        </aside>
      </section>

      <section className="provider-section">
        <p className="section-index">01 / KEY NUMBERS</p>
        <h2>最初に確認する公称値</h2>
        <div className="provider-fact-grid">
          {provider.facts.map((fact, index) => (
            <article key={fact.label}><b>{String(index + 1).padStart(2, '0')}</b><h3>{fact.label}</h3><strong className="provider-fact-value">{fact.value}</strong><p>{fact.note}</p></article>
          ))}
        </div>
      </section>

      <section className="provider-section provider-split">
        <div>
          <p className="section-index">02 / FIT</p>
          <h2>料金体系が合いやすい取引</h2>
          <p>{provider.bestFor}</p>
          <div className="callout"><strong>比較時の注意</strong><p>{provider.caution}</p></div>
        </div>
        <div className="provider-checklist">
          <h3>申込み・取引前の確認</h3>
          <ul>{provider.checks.map((check) => <li key={check}>{check}</li>)}</ul>
          <p>条件は変更される場合があります。最新の契約締結前交付書面と公式料金表を優先してください。</p>
        </div>
      </section>

      <section className="provider-source" aria-label="公式情報へのリンク">
        <div><span>PRIMARY SOURCES</span><strong>{provider.name} 公式情報</strong></div>
        <div className="provider-source-links">
          {provider.sources.map((source) => <a href={source.href} target="_blank" rel="noopener noreferrer" key={source.href}>{source.label} ↗</a>)}
        </div>
      </section>

      <section className="provider-no-ad">
        <div><span>AD STATUS</span><h2>このページに広告リンクはありません。</h2></div>
        <p>将来広告を掲載する場合も、公称値・試算値・実測値の評価とは分離し、広告であることを明示します。</p>
      </section>

      <p className="provider-back"><Link href="/stocks">株式コスト比較へ戻る →</Link></p>
    </div>
  );
}
