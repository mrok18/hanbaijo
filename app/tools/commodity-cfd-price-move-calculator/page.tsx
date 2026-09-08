import CommodityCfdPriceMoveCalculator from './CommodityCfdPriceMoveCalculator';

export const metadata = {
  title: '商品CFD値動き損益計算機｜金・銀・原油・天然ガス',
  description: '金・銀・原油・天然ガスについて、新規価格、決済価格、売買方向、Lot数、ドル円、総コストから円換算損益と損益分岐値幅を計算します。',
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '商品CFD値動き損益計算機',
    url: 'https://hanbaijo.com/tools/commodity-cfd-price-move-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    description: metadata.description,
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <CommodityCfdPriceMoveCalculator />
  </>;
}
