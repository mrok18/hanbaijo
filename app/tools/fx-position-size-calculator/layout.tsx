import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/fx-position-size-calculator' },
  title: 'FX計算｜損益・損切り幅から取引数量を逆算',
  description: 'FX計算で確認したい損失許容額と取引数量を、口座資金、許容リスク率、損切り幅、スプレッドから試算。pips損益や必要証拠金との違いも整理します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
