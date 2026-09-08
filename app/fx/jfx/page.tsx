import { notFound } from 'next/navigation';
import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

const provider = FX_PROVIDERS.jfx;

export const metadata = {
  title: `${provider.name}の取引コスト・最低取引単位`,
  description: provider.summary,
};

export default function Page() {
  if (!provider) notFound();
  return <FxProviderFactSheet provider={provider} relatedArticles={[
    { href: '/articles/jfx-lot-trade-unit', title: 'JFXの1Lotと通貨数の例外', description: '基本1,000通貨と6通貨ペアの1万通貨を分け、損益とスプレッド相当額を計算します。' },
    { href: '/articles/jfx-losscut-margin-shortage', title: 'JFXのロスカットと不足金', description: '有効証拠金と必要証拠金の基準、判定間隔、急変時に不足金が残る場合を整理します。' },
    { href: '/articles/jfx-scalping-spread-cost', title: 'JFXの時間帯別スプレッドを計算', description: '米ドル/円0.2銭と早朝5.9銭を、取引数量と回数から円コストへ換算します。' },
    { href: '/articles/fx-spread-cost', title: 'スプレッドを円に直す方法', description: '銭・pips表示を実際の取引数量に応じた円の負担へ直します。' },
    { href: '/articles/fx-spread-time', title: 'スプレッドが広がりやすい時間帯', description: '早朝、経済指標、急変時に広告表示から外れる理由を整理します。' },
  ]} />;
}
