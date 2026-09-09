import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = {
  title: 'DMM FXの取引単位・手数料・ロスカット',
  description: 'DMM FXの通常・ミニ・ラージ通貨ペアについて、最低取引単位、取引手数料、必要証拠金、追証、ロスカットを公式情報から整理します。',
};

export default function Page() {
  return <FxProviderFactSheet provider={FX_PROVIDERS['dmm-fx']} relatedArticles={[
    { href: '/articles/jfx-vs-dmm-fx', title: 'DMM FXとJFXを比較', description: 'ミニ銘柄とJFXの1,000通貨、時間帯別スプレッド、ロスカット基準を比較します。' },
    { href: '/articles/dmm-fx-mini-normal-large', title: 'ミニ・通常・ラージの違い', description: '1Lotの通貨数、必要証拠金、損益、スプレッド条件を同じ表で比較します。' },
    { href: '/articles/dmm-fx-margin-call-losscut', title: '追証とロスカットの違い', description: '維持率100％未満の追加証拠金判定と、50％以下のロスカットを分けて確認します。' },
    { href: '/articles/dmm-fx-funding-transfer', title: '入金・出金・証拠金振替', description: 'クイック入金5,000円、反映時間、出金、株券担保70％の条件を整理します。' },
    { href: '/articles/dmm-fx-swap-calendar', title: 'スワップ付与日の見方', description: '営業日の切替、0日・3日・4日分、祝日の変則付与をカレンダーから確認します。' },
    { href: '/articles/dmm-fx-slippage-orders', title: '注文とスリッページ', description: '即時・指値・逆指値で、指定価格と約定価格の扱いがどう変わるか整理します。' },
    { href: '/fx/usdjpy-spread-comparison', title: '米ドル円スプレッドを比較', description: 'コアタイム、時間外、ミニ通貨ペアの適用条件を分けて確認します。' },
    { href: '/articles/fx-required-margin', title: 'FXの必要証拠金を計算', description: '為替レートと取引数量から、ポジションに必要な証拠金を試算します。' },
    { href: '/fx/losscut-comparison', title: 'ロスカット基準を比較', description: '維持率50％のロスカットと、100％未満の追証判定を分けて確認します。' },
  ]} />;
}
