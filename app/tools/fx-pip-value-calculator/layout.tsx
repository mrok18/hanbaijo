import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/fx-pip-value-calculator' },
  title: 'FX pips計算ツール｜1pipsの損益とスプレッドを円換算',
  description: 'FX pips計算ツールで、取引数量・決済通貨・円換算レートから1pipsの損益を無料計算。指定pipsの値幅とスプレッドコストも円で確認できます。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
