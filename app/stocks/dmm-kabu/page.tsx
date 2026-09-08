import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = { title: 'DMM 株の国内株手数料・コスト', description: 'DMM 株の国内株現物における1注文ごとの手数料と、信用・米国株で異なる条件を公式情報から整理します。' };
export default function Page() {
  return <StockProviderFactSheet provider={STOCK_PROVIDERS['dmm-kabu']} affiliateOffer={AFFILIATE_OFFERS['dmm-kabu']} relatedArticles={[
    { href: '/articles/dmm-kabu-domestic-round-trip-fee', title: '国内株の往復手数料を計算', description: '買付と売却をそれぞれ1注文として、約定代金別の総額を計算します。' },
    { href: '/articles/dmm-kabu-us-stock-fee', title: '米国株の手数料と為替コスト', description: '0ドルになる条件、上限22ドル、片道25銭の為替コストを分けて試算します。' },
    { href: '/stocks/domestic-fee-comparison', title: '国内株4社の手数料比較', description: '50万円の買付・売却を同じ条件にそろえ、料金体系の違いを比較します。' },
  ]} />;
}
