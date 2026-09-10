import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = { title: 'GMOクリック証券 FXネオの取引コスト', description: 'GMOクリック証券FXネオの最小取引単位、通常手数料、自動ロスカット手数料、必要証拠金を公式情報から整理します。' };
export default function Page() { return <FxProviderFactSheet provider={FX_PROVIDERS['gmo-click']} relatedArticles={[
  { href: '/articles/gmo-click-fx-neo-trading-rules', title: 'FXネオの取引ルール', description: '1,000通貨、注文・取引時間、50％ロスカット、入金・メンテナンスを整理します。' },
  { href: '/articles/fx-company-selection-cost-checklist', title: 'FX会社の比較7項目', description: 'スプレッドだけでなく、数量、約定、スワップ、入出金、ロスカットを確認します。' },
  { href: '/articles/fx-margin-ratio-vs-usage', title: '証拠金維持率と使用率', description: '維持率の計算方向と、ロスカットまでの余力を読み違えない方法を解説します。' },
]} />; }
