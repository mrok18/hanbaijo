import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = {
  title: 'DMM FXの取引単位・手数料・ロスカット',
  description: 'DMM FXの通常・ミニ・ラージ通貨ペアについて、最低取引単位、取引手数料、必要証拠金、追証、ロスカットを公式情報から整理します。',
};

export default function Page() {
  return <FxProviderFactSheet provider={FX_PROVIDERS['dmm-fx']} relatedArticles={[
    { href: '/fx/usdjpy-spread-comparison', title: '米ドル円スプレッドを比較', description: 'コアタイム、時間外、ミニ通貨ペアの適用条件を分けて確認します。' },
    { href: '/articles/fx-required-margin', title: 'FXの必要証拠金を計算', description: '為替レートと取引数量から、ポジションに必要な証拠金を試算します。' },
    { href: '/fx/losscut-comparison', title: 'ロスカット基準を比較', description: '維持率50％のロスカットと、100％未満の追証判定を分けて確認します。' },
  ]} />;
}
