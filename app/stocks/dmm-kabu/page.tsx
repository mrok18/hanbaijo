import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';

export const metadata = { title: 'DMM 株の国内株手数料・コスト', description: 'DMM 株の国内株現物における1注文ごとの手数料と、信用・米国株で異なる条件を公式情報から整理します。' };
export default function Page() { return <StockProviderFactSheet provider={STOCK_PROVIDERS['dmm-kabu']} />; }
