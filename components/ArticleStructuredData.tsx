import { POSTS } from '@/app/articles/posts';

interface ArticleStructuredDataProps {
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
}

export default function ArticleStructuredData({ slug, publishedAt, modifiedAt }: ArticleStructuredDataProps) {
  const post = POSTS.find((item) => item.slug === slug);
  if (!post) return null;

  const url = `https://hanbaijo.com/articles/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.desc,
        datePublished: publishedAt,
        dateModified: modifiedAt ?? publishedAt,
        inLanguage: 'ja-JP',
        articleSection: post.category,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        isPartOf: { '@id': 'https://hanbaijo.com/articles/#collection' },
        author: { '@type': 'Organization', name: '金融コストウォッチ', url: 'https://hanbaijo.com/about' },
        publisher: { '@type': 'Organization', name: '金融コストウォッチ', url: 'https://hanbaijo.com/' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '金融コストウォッチ', item: 'https://hanbaijo.com/' },
          { '@type': 'ListItem', position: 2, name: '解説記事', item: 'https://hanbaijo.com/articles' },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
    />
  );
}
