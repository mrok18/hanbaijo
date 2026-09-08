import DmmCfdTickValueCalculator from './DmmCfdTickValueCalculator';

export const metadata = {
  title: 'DMM CFD 1ティック損益計算機｜商品14銘柄対応',
  description: 'DMM CFDの商品14銘柄について、新規・決済価格、売買方向、Lot数、米ドル円から、1ティック価値、円換算損益、コスト差引後を計算します。',
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'DMM CFD 1ティック損益計算機',
    url: 'https://hanbaijo.com/tools/dmm-cfd-tick-value-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    description: metadata.description,
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <DmmCfdTickValueCalculator />
  </>;
}
