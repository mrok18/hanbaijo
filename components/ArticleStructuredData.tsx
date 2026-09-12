import { POSTS } from '@/app/articles/posts';

interface ArticleStructuredDataProps {
  slug: string;
  publishedAt?: string;
  modifiedAt?: string;
  includeArticle?: boolean;
  includeBreadcrumb?: boolean;
}

export default function ArticleStructuredData({
  slug,
  publishedAt,
  modifiedAt,
  includeArticle = true,
  includeBreadcrumb = true,
}: ArticleStructuredDataProps) {
  const post = POSTS.find((item) => item.slug === slug);
  if (!post) return null;

  const url = `https://hanbaijo.com/articles/${slug}`;
  const article = {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.desc,
    ...(publishedAt ? { datePublished: publishedAt, dateModified: modifiedAt ?? publishedAt } : {}),
    inLanguage: 'ja-JP',
    articleSection: post.category,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@id': 'https://hanbaijo.com/articles/#collection' },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    author: { '@type': 'Organization', name: '金融コストウォッチ', url: 'https://hanbaijo.com/about' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ', url: 'https://hanbaijo.com/' },
  };
  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '金融コストウォッチ', item: 'https://hanbaijo.com/' },
      { '@type': 'ListItem', position: 2, name: '解説記事', item: 'https://hanbaijo.com/articles' },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ...(includeArticle ? [article] : []),
      ...(includeBreadcrumb ? [breadcrumb] : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
    />
  );
}
