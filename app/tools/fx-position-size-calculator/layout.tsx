import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/fx-position-size-calculator' },
  title: 'FXシミュレーション｜損失許容額から取引数量を計算',
  description: 'FXシミュレーション（FXシュミレーション）で、口座資金・許容リスク率・損切り幅・スプレッドから最大取引数量を試算。具体例と公式資料で計算条件を確認できます。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
