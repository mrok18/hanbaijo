import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/matsui-fx-spread-calculator' },
  title: 'MATSUI FX スプレッド計算機｜0.1銭を円換算',
  description: 'MATSUI FXの取引通貨数、スプレッド、往復回数、値幅から、スプレッド相当額、値幅損益、コスト差引後損益を円換算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
