import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FX pips損益計算機｜1pipsはいくら？',
  description: 'FXの取引数量、決済通貨、円換算レート、値幅から、1pipsあたりと指定pipsの損益を円換算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
