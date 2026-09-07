import Link from 'next/link';
import type { FxProvider } from '@/lib/fx-providers';

export default function FxProviderFactSheet({ provider }: { provider: FxProvider }) {
  return (
    <div className="provider-page fx-provider-page">
      <section className="provider-hero provider-compact-hero fx-provider-hero">
        <div>
          <p className="page-kicker">FX COST FACT SHEET</p>
          <h1>{provider.name}</h1>
          <p className="provider-headline">{provider.headline}</p>
          <p className="lede">{provider.summary}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/tools/cost-calculator">取引数量で試算</Link>
            <Link className="button secondary" href="/fx">FX比較へ戻る</Link>
          </div>
        </div>
        <aside className="provider-stamp">
          <span>PUBLISHED DATA</span>
          <strong>公式情報を 2026-09-07 確認</strong>
          <dl>
            <div><dt>最低数量</dt><dd>{provider.minTrade}</dd></div>
            <div><dt>比較の焦点</dt><dd>{provider.costFocus}</dd></div>
            <div><dt>広告リンク</dt><dd>掲載なし</dd></div>
          </dl>
        </aside>
      </section>

      <section className="provider-section">
        <p className="section-index">01 / KEY NUMBERS</p>
        <h2>取引前に確認する公称値</h2>
        <div className="provider-fact-grid">
          {provider.facts.map((fact, index) => (
            <article key={fact.label}><b>{String(index + 1).padStart(2, '0')}</b><h3>{fact.label}</h3><strong className="provider-fact-value">{fact.value}</strong><p>{fact.note}</p></article>
          ))}
        </div>
      </section>

      <section className="provider-section provider-split">
        <div>
          <p className="section-index">02 / COST STRUCTURE</p>
          <h2>「手数料0円」の外側を見る</h2>
          <p>{provider.costFocus}</p>
          <div className="callout"><strong>このサービス固有の注意</strong><p>{provider.caution}</p></div>
        </div>
        <div className="provider-checklist">
          <h3>公式情報で再確認する項目</h3>
          <ul>{provider.checks.map((check) => <li key={check}>{check}</li>)}</ul>
          <p>スプレッドとスワップは変動します。注文直前の取引画面と契約締結前交付書面を優先してください。</p>
        </div>
      </section>

      <section className="provider-source" aria-label="公式情報へのリンク">
        <div><span>PRIMARY SOURCES</span><strong>{provider.name} 公式情報</strong></div>
        <div className="provider-source-links">{provider.sources.map((source) => <a href={source.href} target="_blank" rel="noopener noreferrer" key={source.href}>{source.label} ↗</a>)}</div>
      </section>

      <section className="provider-no-ad">
        <div><span>DATA PERMISSION</span><h2>自動計測は、利用条件の確認後に開始します。</h2></div>
        <p>公開ページを機械取得して保存・再掲載することはせず、提供元から商用利用条件を確認できたデータだけを実測値として掲載します。</p>
      </section>

      <p className="provider-back"><Link href="/fx">FXコスト比較へ戻る →</Link></p>
    </div>
  );
}
