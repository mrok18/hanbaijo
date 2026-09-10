import { notFound } from 'next/navigation';
import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

const provider = FX_PROVIDERS.saxo;

export const metadata = {
  title: `${provider.name}の取引コスト・最低取引単位`,
  description: provider.summary,
};

export default function Page() {
  if (!provider) notFound();
  return <FxProviderFactSheet provider={provider} relatedArticles={[
    { href: '/articles/saxo-products-overview', title: '取扱商品を整理', description: 'FX、CFD、外国株、先物、オプションの違いを確認します。' },
    { href: '/articles/saxo-cfd-cost-structure', title: 'CFDの総コスト', description: '手数料、スプレッド、調整額、証拠金を分けて比較します。' },
    { href: '/articles/saxo-tradingview-account-transfer', title: 'TradingViewと資金振替', description: '対応口座とSaxoTraderでの事前振替を確認します。' },
    { href: '/articles/fx-company-selection-cost-checklist', title: 'FX会社の比較7項目', description: 'スプレッド以外の約定、スワップ、最低単位、入出金を比較します。' },
  ]} />;
}
