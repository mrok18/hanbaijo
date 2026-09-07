import type { MetadataRoute } from 'next';
import { POSTS } from './articles/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hanbaijo.com';
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'hourly', priority: 1 },
    ...['fx', 'markets', 'tools/cost-calculator', 'articles', 'method', 'about', 'disclaimer', 'contact'].map((p) => ({
      url: `${base}/${p}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6,
    })),
    ...POSTS.map((p) => ({
      url: `${base}/articles/${p.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7,
    })),
  ];
}
