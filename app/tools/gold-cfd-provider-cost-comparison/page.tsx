import GoldCfdProviderCostCalculator from './GoldCfdProviderCostCalculator';

export const metadata = {
  alternates: { canonical: '/tools/gold-cfd-provider-cost-comparison' },
  title: '金CFD 2社比較計算機｜FXTF MT5・DMM CFDの総コスト',
  description: '金CFD 1Lotの価格・ドル円・スプレッド・手数料・保有費を手入力し、FXTF MT5とDMM CFDの必要証拠金と総コストを同じ条件で比較します。',
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '金CFD 2社比較計算機',
    url: 'https://hanbaijo.com/tools/gold-cfd-provider-cost-comparison',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    description: metadata.description,
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <GoldCfdProviderCostCalculator />
  </>;
}
