import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/risk-reward-calculator' },
  title: '回収率 計算｜FX・株の損益比と損益分岐勝率を試算',
  description: '回収率（利益÷損失）を計算し、FX・株・先物の利確幅・損切り幅・往復コストを反映した損益比、損益分岐勝率、期待値を試算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
