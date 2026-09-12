import DmmCfd22ProductsCalculator from './DmmCfd22ProductsCalculator';

export const metadata = {
  alternates: { canonical: '/tools/dmm-cfd-22-products-calculator' },
  title: 'DMM CFD 22銘柄 証拠金・1ティック計算機',
  description: 'DMM CFD-Index 8銘柄とCommodity 14銘柄について、価格、Lot数、円換算レートから必要証拠金、1ポイント・1ティック損益、資金使用率を計算します。',
};

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'DMM CFD 22銘柄 証拠金・1ティック計算機', url: 'https://hanbaijo.com/tools/dmm-cfd-22-products-calculator', applicationCategory: 'FinanceApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' }, description: metadata.description };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} /><DmmCfd22ProductsCalculator /></>;
}
