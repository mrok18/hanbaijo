import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/fx-position-size-calculator' },
  title: 'FXシミュレーション｜損失許容額から取引数量を計算',
  description: 'FXシミュレーションで、口座資金・許容リスク率・損切り幅・スプレッドから最大取引数量を試算。FX計算の式と必要証拠金との違いも整理します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
