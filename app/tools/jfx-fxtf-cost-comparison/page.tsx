import JfxFxtfCostCalculator from './JfxFxtfCostCalculator';

export const metadata = {
  title: 'JFX・FXTFコスト比較計算機｜スプレッドと建玉連動手数料',
  description: '取引数量と往復回数をそろえ、JFXのスプレッドとFXTFのスプレッド・建玉連動手数料・想定約定差を円換算して比較します。',
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'JFX・FXTFコスト比較計算機',
    url: 'https://hanbaijo.com/tools/jfx-fxtf-cost-comparison',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    description: metadata.description,
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <JfxFxtfCostCalculator />
  </>;
}
