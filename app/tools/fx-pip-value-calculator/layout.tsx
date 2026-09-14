import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/fx-pip-value-calculator' },
  title: 'FX pips計算機｜1pipsの損益とスプレッドを円換算',
  description: 'FXのpipsを、取引数量・決済通貨・円換算レートから計算。1pipsあたりの損益、指定pipsの値幅、スプレッドコストを円で確認できます。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
