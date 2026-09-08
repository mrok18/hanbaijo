import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '松井証券 米国株往復コスト計算機｜手数料・為替25銭',
  description: '松井証券の米国株現物取引について、株数、買値、売値、米ドル円から売買手数料、円貨決済の為替コスト、値幅損益を円換算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
