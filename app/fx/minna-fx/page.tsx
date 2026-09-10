import { notFound } from 'next/navigation';
import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

const provider = FX_PROVIDERS['minna-fx'];

export const metadata = {
  title: `${provider.name}の取引コスト・最低取引単位`,
  description: provider.summary,
};

export default function Page() {
  if (!provider) notFound();
  return <FxProviderFactSheet provider={provider} relatedArticles={[
    { href: '/articles/minna-fx-account-opening-flow', title: '口座開設・必要書類・審査の流れ', description: '申込入力、本人確認、審査、入金、取引開始までを順番に確認します。' },
    { href: '/articles/minna-fx-spread-light-pair', title: 'スプレッド・LIGHTペアの条件', description: '時間帯、通常ペアとの違い、取引上限、原則固定の例外を確認します。' },
    { href: '/articles/minna-fx-trading-unit', title: '1Lot・0.1Lotと必要証拠金', description: '1Lot＝10,000通貨、0.1Lot＝1,000通貨の数量を整理します。' },
    { href: '/articles/minna-fx-deposit-transfer', title: '入金・振替と反映遅延', description: '銀行振込・ダイレクト入金からFX口座へ振替する流れを確認します。' },
    { href: '/articles/minna-fx-losscut', title: 'ロスカットと不足金', description: '証拠金維持率100％以下の判定と急変時のリスクを確認します。' },
    { href: '/articles/fx-company-selection-cost-checklist', title: 'FX会社の比較7項目', description: 'スプレッド以外の約定、スワップ、最低単位、入出金を比較します。' },
  ]} />;
}
