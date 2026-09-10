import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';

export const metadata = { title: 'GMOクリック証券の国内株手数料・コスト', description: 'GMOクリック証券の国内株現物・信用手数料と、無料対象外、信用金利・貸株料を公式情報から整理します。' };
export default function Page() { return <StockProviderFactSheet provider={STOCK_PROVIDERS['gmo-click']} relatedArticles={[
  { href: '/articles/gmo-click-stock-fees', title: '現物・信用の手数料', description: '無料対象と、金利・貸株料・単元未満株などの対象外を確認します。' },
  { href: '/articles/gmo-click-stock-funding', title: '株式の入出金と名義', description: '証券取引口座の残高、受渡日、出金名義を確認します。' },
  { href: '/articles/gmo-click-stock-rights', title: '配当・株主優待の権利日', description: '権利付最終売買日と現物保有の条件を整理します。' },
  { href: '/articles/stock-round-trip-cost', title: '株式の往復コスト', description: '売買手数料以外も含めて実質コストを試算します。' },
]} />; }
