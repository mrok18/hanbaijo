import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/risk-reward-calculator' },
  title: '回収率計算｜FX・株の損益比と損益分岐勝率を確認',
  description: '回収率を利益と損失の比率から計算し、FX・株・先物の利確幅・損切り幅・往復コストを反映した損益分岐勝率と期待値を試算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
