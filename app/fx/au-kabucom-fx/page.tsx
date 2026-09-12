import { notFound } from 'next/navigation';
import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

const provider = FX_PROVIDERS['au-kabucom-fx'];

export const metadata = {
  alternates: { canonical: '/fx/au-kabucom-fx' },
  title: `${provider.name}の取引コスト・最低取引単位`,
  description: provider.summary,
};

export default function Page() {
  if (!provider) notFound();
  return <FxProviderFactSheet provider={provider} relatedArticles={[
    { href: '/articles/esmart-fx-swap-calendar', title: 'スワップカレンダーの確認方法', description: 'スマホ・PCで過去実績を見る手順と、水曜3日分・祝日の変則を整理します。' },
    { href: '/articles/esmart-fx-trading-unit', title: 'ミニ・通常・大口の取引単位', description: '1,000通貨ミニと数量区分、注文上限を整理します。' },
    { href: '/articles/esmart-fx-deposit-transfer', title: '入金・証券口座からの振替', description: '証券口座とFX口座の資金移動、反映確認を説明します。' },
    { href: '/articles/esmart-fx-losscut', title: '維持率75％のロスカット', description: '自動決済、注文取消し、急変時の注意点を確認します。' },
    { href: '/articles/fx-company-selection-cost-checklist', title: 'FX会社の比較7項目', description: 'スプレッド以外の約定、スワップ、最低単位、入出金を比較します。' },
  ]} />;
}
