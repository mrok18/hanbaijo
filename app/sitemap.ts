import type { MetadataRoute } from 'next';
import { POSTS } from './articles/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hanbaijo.com';
  const now = new Date();
  const detailRoutes = ['fx/fxtf', 'fx/systre-select-365', 'cfd/dmm-cfd'];
  return [
    { url: base, lastModified: now, changeFrequency: 'hourly', priority: 1 },
    ...['fx', 'cfd', 'markets', 'tools/cost-calculator', 'articles', 'method', 'about', 'disclaimer', 'contact'].map((p) => ({
      url: `${base}/${p}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6,
    })),
    ...POSTS.map((p) => ({
      url: `${base}/articles/${p.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7,
    })),
    ...detailRoutes.map((p) => ({
      url: `${base}/${p}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8,
    })),
  ];
}
