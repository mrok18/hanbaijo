import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/matsui-fx-margin-calculator' },
  title: 'MATSUI FX 証拠金維持率計算機｜追証・ロスカット余力',
  description: 'MATSUI FXのレート、取引数量、レバレッジコース、口座資産、評価損益から必要証拠金、維持率、追証・ロスカット水準までの余力を概算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
