import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';

export const metadata = { title: '松井証券の国内株手数料・ボックスレート', description: '松井証券の国内株ボックスレートを、1日の約定代金合計と年齢条件に分けて公式情報から整理します。' };
export default function Page() { return <StockProviderFactSheet provider={STOCK_PROVIDERS.matsui} />; }
