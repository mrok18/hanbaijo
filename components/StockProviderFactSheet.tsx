import Link from 'next/link';
import type { StockProvider } from '@/lib/stock-providers';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import type { AffiliateOffer } from '@/lib/affiliates';

type RelatedResource = {
  href: string;
  title: string;
  description: string;
  tag?: string;
  linkLabel?: string;
};

type StockProviderFactSheetProps = {
  provider: StockProvider;
  relatedArticles?: RelatedResource[];
  affiliateOffer?: AffiliateOffer;
  heading?: string;
  keyNumbersHeading?: string;
};

export default function StockProviderFactSheet({ provider, relatedArticles = [], affiliateOffer, heading, keyNumbersHeading }: StockProviderFactSheetProps) {
  const pageHeading = heading ?? `${provider.name}の国内株手数料と取引コスト`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pageHeading,
    description: provider.summary,
    dateModified: provider.reviewedAt,
    mainEntityOfPage: `https://hanbaijo.com/stocks/${provider.slug}`,
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };
  const faqJsonLd = provider.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: provider.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <div className="provider-page stock-provider-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
        />
      )}
      <section className="provider-hero provider-compact-hero stock-provider-hero">
        <div>
          <p className="page-kicker">STOCK COST FACT SHEET</p>
          <h1>{pageHeading}</h1>
          <p className="provider-headline">{provider.headline}</p>
          <p className="lede">{provider.summary}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/stocks/domestic-fee-comparison">4社比較で確認</Link>
            <Link className="button secondary" href="/tools/cost-calculator">金額を試算</Link>
          </div>
        </div>
        <aside className="provider-stamp">
          <span>PUBLISHED DATA</span>
          <strong>公式情報を {provider.reviewedAt} 確認</strong>
          <dl>
            <div><dt>料金体系</dt><dd>{provider.feeModel}</dd></div>
            <div><dt>広告リンク</dt><dd>{affiliateOffer ? '掲載あり・PR明示' : '掲載なし'}</dd></div>
            <div><dt>比較順位</dt><dd>報酬の影響なし</dd></div>
          </dl>
        </aside>
      </section>

      <section className="provider-section">
        <p className="section-index">01 / KEY NUMBERS</p>
        <h2>{keyNumbersHeading ?? '最初に確認する公称値'}</h2>
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

      {provider.faqs && provider.faqs.length > 0 && (
        <section className="provider-section" aria-labelledby={`${provider.slug}-faq`}>
          <p className="section-index">FAQ / COST CHECK</p>
          <h2 id={`${provider.slug}-faq`}>{provider.name}の手数料でよくある確認</h2>
          <div className="provider-faq-list">
            {provider.faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {affiliateOffer ? (
        <section className="article-affiliate" aria-label="関連する広告">
          <AffiliateOfferCard offer={affiliateOffer} />
          <p className="affiliate-disclosure">広告リンク経由で申込みが成立した場合、当サイトが報酬を受け取ることがあります。比較内容や公称値の評価とは分離しています。</p>
        </section>
      ) : (
        <section className="provider-no-ad">
          <div><span>AD STATUS</span><h2>このページに広告リンクはありません。</h2></div>
          <p>将来広告を掲載する場合も、公称値・試算値・実測値の評価とは分離し、広告であることを明示します。</p>
        </section>
      )}

      {relatedArticles.length > 0 && (
        <section className="provider-section" aria-labelledby={`${provider.slug}-related-guides`}>
          <p className="section-index">RELATED GUIDES</p>
          <h2 id={`${provider.slug}-related-guides`}>このサービスを検討する前に読む</h2>
          <div className="provider-directory">
            {relatedArticles.map((article) => (
              <Link href={article.href} key={article.href}><span>{article.tag ?? 'GUIDE'}</span><h3>{article.title}</h3><p>{article.description}</p><b>{article.linkLabel ?? '記事を読む →'}</b></Link>
            ))}
          </div>
        </section>
      )}

      <p className="provider-back"><Link href="/stocks">株式コスト比較へ戻る →</Link></p>
    </div>
  );
}
