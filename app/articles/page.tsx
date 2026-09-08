import Link from 'next/link';
import type { Metadata } from 'next';
import { POSTS } from './posts';

export const metadata: Metadata = {
  title: '金融コストの解説記事一覧',
  description: 'FX・CFD・株式・先物・暗号資産の手数料、スプレッド、証拠金、ロスカットを公式情報と計算例で整理した記事一覧です。',
  alternates: { canonical: '/articles' },
  openGraph: {
    title: '金融コストの解説記事一覧｜金融コストウォッチ',
    description: '金融商品の見えにくいコストを、公式情報と計算例で読み解く記事一覧です。',
    url: '/articles',
  },
};

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://hanbaijo.com/articles/#collection',
      url: 'https://hanbaijo.com/articles',
      name: '金融コストの解説記事一覧',
      description: 'FX・CFD・株式・先物・暗号資産の取引コストを読み解く記事一覧です。',
      inLanguage: 'ja-JP',
      isPartOf: { '@id': 'https://hanbaijo.com/#website' },
      breadcrumb: { '@id': 'https://hanbaijo.com/articles/#breadcrumb' },
      mainEntity: { '@id': 'https://hanbaijo.com/articles/#itemlist' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://hanbaijo.com/articles/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '金融コストウォッチ', item: 'https://hanbaijo.com/' },
        { '@type': 'ListItem', position: 2, name: '解説記事', item: 'https://hanbaijo.com/articles' },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://hanbaijo.com/articles/#itemlist',
      numberOfItems: POSTS.length,
      itemListElement: POSTS.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://hanbaijo.com/articles/${post.slug}`,
        name: post.title,
      })),
    },
  ],
};

export default function Articles() {
  return (
    <div className="content-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd).replace(/</g, '\\u003c') }}
      />
      <p className="page-kicker">LEARN</p>
      <h1>知る・読み解く</h1>
      <p className="lede">実測値を自分で判断するために、数字の背景にある仕組みを短く、具体的に説明します。</p>
      <ul className="post-list article-index">
        {POSTS.map((p) => (
          <li key={p.slug}>
            <span>{p.category}</span>
            <div>
              <Link href={`/articles/${p.slug}`}>{p.title}</Link>
              <p>{p.desc}</p>
            </div>
            <b aria-hidden="true">→</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
