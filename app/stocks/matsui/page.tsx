import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = { title: '松井証券の国内株手数料・ボックスレート', description: '松井証券の国内株ボックスレートを、1日の約定代金合計と年齢条件に分けて公式情報から整理します。' };
export default function Page() { return <StockProviderFactSheet provider={STOCK_PROVIDERS.matsui} affiliateOffer={AFFILIATE_OFFERS['matsui-fx']} relatedArticles={[
  { href: '/articles/matsui-us-stock-fx-fee', title: '米国株の為替手数料0円と25銭の違い', description: '事前両替と円貨決済で異なる為替コストを整理します。' },
  { href: '/articles/matsui-nisa-fees', title: '松井証券NISAの手数料', description: '日本株・米国株・投資信託で無料になる費用と残る費用を確認します。' },
  { href: '/articles/matsui-one-day-margin-cost', title: '一日信用の総コスト', description: '無料条件と翌日持越し・プレミアム空売りの費用を分けます。' },
]} />; }
