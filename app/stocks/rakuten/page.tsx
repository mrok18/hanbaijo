import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';

export const metadata = {
  title: '楽天証券の日本株手数料｜ゼロコース・いちにち定額・信用コスト',
  description: '楽天証券の日本株（国内株）手数料を、ゼロコースの0円条件、SOR・Rクロスの利用同意、いちにち定額、信用取引の金利・貸株料まで公式情報から整理します。',
  alternates: { canonical: '/stocks/rakuten' },
};

export default function Page() {
  return <StockProviderFactSheet
    provider={STOCK_PROVIDERS.rakuten}
    heading="楽天証券の日本株手数料｜ゼロコースと信用取引コスト"
    keyNumbersHeading="楽天証券の信用取引手数料と別コスト"
    relatedArticles={[
    {
      href: '/articles/rakuten-securities-domestic-stock-fees',
      title: '手数料コースと約定後の実額を確認',
      description: '注文前の概算、取引履歴、取引報告書を使い分け、信用取引の別費用まで確認します。',
      tag: 'FEE CHECK',
      linkLabel: '確認方法を見る →',
    },
    {
      href: '/stocks/domestic-fee-comparison',
      title: '国内株4社の手数料を同条件で比較',
      description: '楽天証券を含む4社を、50万円の買付・売却で比較します。',
      tag: 'COMPARE',
      linkLabel: '4社比較を見る →',
    },
    {
      href: '/articles/foreign-stock-trading-fees',
      title: '外国株式の市場別手数料を比較',
      description: '楽天証券の米国株、中国株、ASEAN株を、料率、最低・上限、為替・現地費用で比べます。',
      tag: 'FOREIGN STOCKS',
      linkLabel: '市場別比較を見る →',
    },
    {
      href: '/tools/cost-calculator',
      title: '株式の往復コストを金額で試算',
      description: '買付と売却の手数料、価格差を自分の取引条件で計算します。',
      tag: 'CALCULATOR',
      linkLabel: '計算機を使う →',
    },
    {
      href: '/articles/stock-round-trip-cost',
      title: '株式の往復コストの計算方法',
      description: '手数料0円の外にある価格差や信用コストを分けて確認します。',
      tag: 'GUIDE',
      linkLabel: '計算方法を読む →',
    },
  ]} />;
}
