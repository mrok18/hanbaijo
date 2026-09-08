import type { Metadata } from 'next';
export const metadata: Metadata = { title: '米国株の円換算損益計算機｜株価・為替・手数料を分離', description: '米国株の買値、売値、株数、購入時・売却時のドル円、売買手数料、為替コストから、円換算の取得額、売却額、損益を計算します。' };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
