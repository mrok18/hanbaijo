import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'リスクリワード・損益分岐勝率計算機｜取引コスト対応',
  description: '利確幅、損切り幅、1ポイント損益、往復コスト、想定勝率から、リスクリワード比、損益分岐勝率、1回・複数回の期待値を計算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
