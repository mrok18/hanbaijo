import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/matsui-box-rate-calculator' },
  title: '松井証券 ボックスレート計算機｜1日の株式手数料',
  description: '松井証券の国内株について、現物買付、現物売却、信用取引の1日約定代金を合算し、年齢条件を含むボックスレート手数料を計算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
