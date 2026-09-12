import FxtfMt5MarginCalculator from './FxtfMt5MarginCalculator';

export const metadata = {
  alternates: { canonical: '/tools/fxtf-mt5-margin-calculator' },
  title: 'FXTF MT5証拠金計算機｜金・銀・原油・天然ガス・BTC',
  description: 'FXTF MT5の商品CFDとBTC/JPY・BTC/USDについて、取引画面の価格、Lot数、円換算レートから想定元本と個人の必要証拠金を計算します。',
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'FXTF MT5証拠金計算機',
    url: 'https://hanbaijo.com/tools/fxtf-mt5-margin-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    description: metadata.description,
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <FxtfMt5MarginCalculator />
  </>;
}
