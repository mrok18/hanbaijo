import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JFX短期売買コスト計算機｜スプレッド・約定差を円換算',
  description: 'JFXの米ドル円を対象に、時間帯別スプレッド、取引数量、往復回数、想定スリッページから短期売買の累積コストを円換算します。',
  alternates: { canonical: '/tools/jfx-scalping-cost-calculator' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
