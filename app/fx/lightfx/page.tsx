import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = { title: 'LIGHT FXの取引コスト・スプレッド条件', description: 'LIGHT FXの最小取引単位、取引手数料、LIGHTペアの時間帯別スプレッド、ロスカット条件を公式情報から整理します。' };
export default function Page() { return <FxProviderFactSheet provider={FX_PROVIDERS.lightfx} relatedArticles={[
  { href: '/articles/light-fx-trading-rules', title: '取引時間・0.1Lot・入出金', description: '夏冬の取引時間、メンテナンス、入出金口座と必要資金を整理します。' },
  { href: '/articles/fx-company-selection-cost-checklist', title: 'FX会社の比較7項目', description: 'スプレッド、数量、約定、スワップ、入出金、ロスカットを確認します。' },
  { href: '/articles/fx-margin-ratio-vs-usage', title: '証拠金維持率と使用率', description: '維持率の計算方向と、ロスカットまでの余力を読み違えない方法を解説します。' },
]} />; }
