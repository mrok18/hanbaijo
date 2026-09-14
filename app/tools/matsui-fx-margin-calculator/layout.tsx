import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/matsui-fx-margin-calculator' },
  title: '松井証券 FX証拠金シミュレーション｜必要証拠金・維持率を計算',
  description: '松井証券 MATSUI FXの証拠金シミュレーション。レート・取引数量・レバレッジ・口座資産・評価損益から必要証拠金、維持率、追証100％・ロスカット余力を試算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
