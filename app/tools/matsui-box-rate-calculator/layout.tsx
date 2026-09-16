import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/matsui-box-rate-calculator' },
  title: 'ボックスレート 計算｜松井証券の1日株式手数料を試算',
  description: 'ボックスレート（1日の約定代金合算）を計算し、松井証券の現物買付・売却・信用取引を合算した国内株手数料を年齢条件付きで試算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
