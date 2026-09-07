import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';

export const metadata = { title: 'GMOクリック証券の国内株手数料・コスト', description: 'GMOクリック証券の国内株現物・信用手数料と、無料対象外、信用金利・貸株料を公式情報から整理します。' };
export default function Page() { return <StockProviderFactSheet provider={STOCK_PROVIDERS['gmo-click']} />; }
