import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = { title: 'MATSUI FXの取引コスト・最小取引単位', description: 'MATSUI FXの1通貨単位、取引手数料、レバレッジコース、スプレッドの確認方法を公式情報から整理します。' };
export default function Page() {
  return <FxProviderFactSheet provider={FX_PROVIDERS.matsui} affiliateOffer={AFFILIATE_OFFERS['matsui-fx']} relatedArticles={[
    { href: '/articles/matsui-fx-spread-rules', title: 'スプレッド0.1銭の条件', description: 'コアタイム、数量上限、注文種類から縮小・通常スプレッドを分けます。' },
    { href: '/articles/matsui-fx-margin-call-losscut', title: '追証とロスカットの違い', description: '100％の追証判定と、選べる50～90％のロスカット率を整理します。' },
    { href: '/articles/matsui-fx-auto-trading-cost', title: '自動売買は100円から？', description: '複数注文の必要証拠金と評価損を分け、設定全体に必要な資金を計算します。' },
    { href: '/articles/matsui-fx-auto-trading-stop-restart', title: '自動売買の停止・再開', description: '停止時に建玉と決済注文を残すか、全決済するかを3つの選択肢で整理します。' },
    { href: '/articles/matsui-fx-swap-calendar', title: 'スワップ付与時間と計算', description: '1万通貨表示を実際の取引数量へ換算し、付与日数と受払額を確認します。' },
    { href: '/articles/matsui-fx-one-currency', title: 'MATSUI FXは100円から？', description: '1通貨の必要証拠金と、為替が1円動いたときの損益を計算します。' },
    { href: '/articles/matsui-account-types', title: 'FX専用口座と総合口座の違い', description: 'FXだけ使う場合と、株・NISA・先物へ広げる場合の入口を整理します。' },
  ]} />;
}
