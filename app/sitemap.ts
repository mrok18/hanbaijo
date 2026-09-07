import type { MetadataRoute } from 'next';
import { POSTS } from './articles/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hanbaijo.com';
  const now = new Date();
  const detailRoutes = [
    'fx/fxtf',
    'fx/systre-select-365',
    'fx/matsui',
    'fx/gmo-click',
    'fx/lightfx',
    'fx/lion-fx',
    'fx/minimum-trade-unit-comparison',
    'fx/losscut-comparison',
    'fx/usdjpy-spread-comparison',
    'fx/swap-calendar-comparison',
    'fx/jfx',
    'fx/minna-fx',
    'fx/au-kabucom-fx',
    'fx/saxo',
    'cfd/dmm-cfd',
    'stocks/domestic-fee-comparison',
    'stocks/gmo-click',
    'stocks/rakuten',
    'stocks/matsui',
    'stocks/dmm-kabu',
    'futures/nikkei225-fee-comparison',
  ];
  return [
    { url: base, lastModified: now, changeFrequency: 'hourly', priority: 1 },
    ...['fx', 'cfd', 'stocks', 'futures', 'markets', 'tools/cost-calculator', 'articles', 'method', 'about', 'disclaimer', 'contact'].map((p) => ({
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
