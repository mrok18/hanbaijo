import Link from 'next/link';
import type { ReactNode } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import type { AffiliateOffer } from '@/lib/affiliates';
import type { FxProvider } from '@/lib/fx-providers';

type RelatedArticle = {
  href: string;
  title: string;
  description: string;
};

type RelatedSection = {
  id: string;
  label: string;
  title: string;
  description: string;
  articles: RelatedArticle[];
};

export default function FxProviderFactSheet({ provider, affiliateOffer, relatedArticles = [], relatedSections = [], pageTitle, details, reviewedAt = '2026-09-07' }: {
  provider: FxProvider;
  affiliateOffer?: AffiliateOffer;
  relatedArticles?: RelatedArticle[];
  relatedSections?: RelatedSection[];
  pageTitle?: ReactNode;
  details?: ReactNode;
  reviewedAt?: string;
}) {
  return (
    <div className="provider-page fx-provider-page">
      <section className="provider-hero provider-compact-hero fx-provider-hero">
        <div>
          <p className="page-kicker">FX COST FACT SHEET</p>
          <h1>{pageTitle ?? provider.name}</h1>
          <p className="provider-headline">{provider.headline}</p>
          <p className="lede">{provider.summary}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/tools/cost-calculator">取引数量で試算</Link>
            <Link className="button secondary" href="/fx/minimum-trade-unit-comparison">最低取引単位を比較</Link>
          </div>
        </div>
        <aside className="provider-stamp">
          <span>PUBLISHED DATA</span>
          <strong>公式情報を {reviewedAt} 確認</strong>
          <dl>
            <div><dt>最低数量</dt><dd>{provider.minTrade}</dd></div>
            <div><dt>比較の焦点</dt><dd>{provider.costFocus}</dd></div>
            <div><dt>広告リンク</dt><dd>{affiliateOffer ? '掲載あり' : '掲載なし'}</dd></div>
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

      {details}

      <section className="provider-source" aria-label="公式情報へのリンク">
        <div><span>PRIMARY SOURCES</span><strong>{provider.name} 公式情報</strong></div>
        <div className="provider-source-links">{provider.sources.map((source) => <a href={source.href} target="_blank" rel="noopener noreferrer" key={source.href}>{source.label} ↗</a>)}</div>
      </section>

      <section className="provider-no-ad">
        <div><span>DATA PERMISSION</span><h2>自動計測は、利用条件の確認後に開始します。</h2></div>
        <p>公開ページを機械取得して保存・再掲載することはせず、提供元から商用利用条件を確認できたデータだけを実測値として掲載します。</p>
      </section>

      {affiliateOffer && (
        <>
          <section className="provider-offer" aria-label={`${provider.name}の広告`}>
            <div className="section-heading">
              <div><p className="section-index">ADVERTISEMENT</p><h2>最新の取引条件を公式サイトで確認する</h2></div>
              <p>以下はA8.netの提携広告です。掲載報酬は、公称値・試算値・将来の実測順位に影響しません。</p>
            </div>
            <AffiliateOfferCard offer={affiliateOffer} />
          </section>
          <p className="affiliate-disclosure">FXは元本および利益が保証されず、預けた証拠金を上回る損失が生じる場合があります。契約締結前交付書面を確認してください。</p>
        </>
      )}

      {relatedArticles.length > 0 && (
        <section className="provider-section" aria-labelledby={`${provider.slug}-related-guides`}>
          <p className="section-index">RELATED GUIDES</p>
          <h2 id={`${provider.slug}-related-guides`}>このサービスを検討する前に読む</h2>
          <div className="provider-directory">
            {relatedArticles.map((article) => (
              <Link href={article.href} key={article.href}><span>GUIDE</span><h3>{article.title}</h3><p>{article.description}</p><b>記事を読む →</b></Link>
            ))}
          </div>
        </section>
      )}

      {relatedSections.length > 0 && (
        <section className="provider-section" aria-labelledby={`${provider.slug}-guide-hub`}>
          <p className="section-index">GUIDE DIRECTORY</p>
          <div className="section-heading provider-guide-intro">
            <div><h2 id={`${provider.slug}-guide-hub`}>目的からJFXの情報を探す</h2></div>
            <p>口座開設前の比較から、必要資金、取引コスト、操作方法まで、いま確認したいテーマから選べます。</p>
          </div>
          <div className="provider-guide-groups">
            {relatedSections.map((section, sectionIndex) => (
              <section className="provider-guide-group" aria-labelledby={`${provider.slug}-${section.id}`} key={section.id}>
                <div className="provider-guide-group-head">
                  <div>
                    <span>{String(sectionIndex + 1).padStart(2, '0')} / {section.label}</span>
                    <h3 id={`${provider.slug}-${section.id}`}>{section.title}</h3>
                  </div>
                  <p>{section.description}</p>
                </div>
                <div className="provider-directory">
                  {section.articles.map((article) => (
                    <Link href={article.href} key={article.href}><span>GUIDE</span><h3>{article.title}</h3><p>{article.description}</p><b>記事を読む →</b></Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      )}

      <p className="provider-back"><Link href="/fx">FXコスト比較へ戻る →</Link></p>
    </div>
  );
}
