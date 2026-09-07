import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';

export const metadata = { title: '楽天証券の国内株手数料・ゼロコース条件', description: '楽天証券ゼロコースの国内株現物・信用手数料と、SOR・Rクロスの利用条件を公式情報から整理します。' };
export default function Page() { return <StockProviderFactSheet provider={STOCK_PROVIDERS.rakuten} />; }
