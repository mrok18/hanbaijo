import CommodityCfdProviderCostCalculator from './CommodityCfdProviderCostCalculator';

export const metadata = {
  alternates: { canonical: '/tools/commodity-cfd-provider-cost-comparison' },
  title: '商品CFD 2社比較計算機｜FXTF MT5・DMM CFDの総コスト',
  description: '金・銀・原油・天然ガスについて、価格、Lot、ドル円、スプレッド、手数料、保有費を手入力し、FXTF MT5とDMM CFDの総コストを比較します。',
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '商品CFD 2社比較計算機',
    url: 'https://hanbaijo.com/tools/commodity-cfd-provider-cost-comparison',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    description: metadata.description,
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <CommodityCfdProviderCostCalculator />
  </>;
}
