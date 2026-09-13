import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/risk-reward-calculator' },
  title: 'マーチンゲール法の計算とリスクリワード計算機｜連敗リスクを確認',
  description: 'マーチンゲール法の取引額・連敗時の累積額を計算式で確認し、利確幅・損切り幅・往復コストから損益分岐勝率と期待値を試算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
