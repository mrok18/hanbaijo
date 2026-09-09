import type { MetadataRoute } from 'next';
import { POSTS } from './articles/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hanbaijo.com';
  const detailRoutes = [
    'tools/dmm-cfd-22-products-calculator',
    'tools/dmm-cfd-tick-value-calculator',
    'fx/fxtf',
    'fx/systre-select-365',
    'fx/ablenet-vps',
    'fx/dmm-fx',
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
    'cfd/tossy',
    'stocks/domestic-fee-comparison',
    'stocks/gmo-click',
    'stocks/rakuten',
    'stocks/matsui',
    'stocks/dmm-kabu',
    'futures/nikkei225-fee-comparison',
  ];
  return [
    { url: base, changeFrequency: 'hourly', priority: 1 },
    ...['fx', 'cfd', 'stocks', 'futures', 'markets', 'tools', 'tools/cost-calculator', 'tools/fx-spread-annual-cost-calculator', 'tools/commodity-cfd-price-move-calculator', 'tools/commodity-cfd-provider-cost-comparison', 'tools/gold-cfd-provider-cost-comparison', 'tools/jfx-scalping-cost-calculator', 'tools/jfx-fxtf-cost-comparison', 'tools/fxtf-mt5-margin-calculator', 'tools/fx-vps-cost-calculator', 'tools/nikkei225-margin-buffer-calculator', 'tools/nikkei225-position-size-calculator', 'tools/trading-break-even-calculator', 'tools/fx-swap-break-even-calculator', 'tools/cfd-margin-calculator', 'tools/fx-position-size-calculator', 'tools/fx-pip-value-calculator', 'tools/risk-reward-calculator', 'tools/us-stock-fx-profit-calculator', 'tools/matsui-fx-spread-calculator', 'tools/matsui-fx-margin-calculator', 'tools/matsui-us-stock-cost-calculator', 'tools/matsui-futures-cost-calculator', 'tools/matsui-box-rate-calculator', 'articles', 'method', 'about', 'disclaimer', 'contact'].map((p) => ({
      url: `${base}/${p}`, changeFrequency: 'monthly' as const, priority: 0.6,
    })),
    ...POSTS.map((p) => ({
      url: `${base}/articles/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.7,
    })),
    ...detailRoutes.map((p) => ({
      url: `${base}/${p}`, changeFrequency: 'monthly' as const, priority: 0.8,
    })),
  ];
}
