import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/matsui-us-stock-cost-calculator' },
  title: '松井証券 米国株の手数料計算機｜売買・為替コストを比較',
  description: '松井証券の米国株手数料を、株数・買値・売値・円貨または外貨決済から計算。売買手数料、円貨決済25銭、NISA無料を往復コストで比較します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
