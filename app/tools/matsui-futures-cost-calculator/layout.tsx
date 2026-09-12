import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/matsui-futures-cost-calculator' },
  title: '松井証券 日経225先物コスト計算機｜ラージ・mini・マイクロ',
  description: '日経225先物、mini、マイクロの値幅、枚数、通常・一日先物から、値幅損益、往復手数料、差引後損益、損益分岐ティックを計算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
