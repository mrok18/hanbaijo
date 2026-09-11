import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '暗号資産担保ローンLTV計算機｜担保余力を試算',
  description: '担保評価額、借入額、価格下落率から暗号資産担保ローンのLTVと担保余力を概算する無料計算機です。',
  alternates: { canonical: '/tools/crypto-collateral-ltv-calculator' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
