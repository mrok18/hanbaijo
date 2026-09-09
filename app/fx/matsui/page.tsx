import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = { title: 'MATSUI FXの取引コスト・最小取引単位', description: 'MATSUI FXの1通貨単位、取引手数料、レバレッジコース、スプレッドの確認方法を公式情報から整理します。' };
export default function Page() {
  return <FxProviderFactSheet provider={FX_PROVIDERS.matsui} affiliateOffer={AFFILIATE_OFFERS['matsui-fx']} relatedArticles={[
    { href: '/articles/matsui-fx-auto-trading-setting', title: '自動売買の設定方法', description: 'レンジ、値幅、益出し幅、数量、停止ライン、100件上限を整理します。' },
    { href: '/articles/systre-select-365-vs-matsui-auto-trading', title: 'シストレセレクト365と比較', description: 'リピート型と選択型、1通貨と1万通貨、費用・必要資金の違いを比較します。' },
    { href: '/articles/matsui-simultaneous-account-opening', title: '総合口座と同時に申込める口座', description: 'FX・NISA・信用・先物を同時申込みする場合と、後から追加する場合を整理します。' },
    { href: '/articles/jfx-vs-matsui-fx', title: '松井証券FXとJFXを比較', description: '1通貨の少額取引とスキャルピング環境を、スプレッド条件まで含めて比較します。' },
    { href: '/tools/matsui-fx-margin-calculator', title: 'FX証拠金維持率計算機', description: '必要証拠金、維持率、追証・ロスカット水準までの余力を試算します。' },
    { href: '/tools/matsui-fx-spread-calculator', title: 'FXスプレッド計算機', description: '通貨数・スプレッド・取引回数から価格差コストを円換算します。' },
    { href: '/articles/matsui-fx-spread-rules', title: 'スプレッド0.1銭の条件', description: 'コアタイム、数量上限、注文種類から縮小・通常スプレッドを分けます。' },
    { href: '/articles/matsui-fx-margin-call-losscut', title: '追証とロスカットの違い', description: '100％の追証判定と、選べる50～90％のロスカット率を整理します。' },
    { href: '/articles/matsui-fx-insufficient-funds', title: '不足金の解消方法', description: '決済損による不足金を、15時期限、入金、スワップ振替、追証との違いから確認します。' },
    { href: '/articles/matsui-fx-leverage-margin', title: '必要証拠金とレバレッジを計算', description: '25倍・10倍・5倍・1倍の証拠金率、1万通貨の概算、実効レバレッジを整理します。' },
    { href: '/articles/matsui-fx-auto-trading-cost', title: '自動売買は100円から？', description: '複数注文の必要証拠金と評価損を分け、設定全体に必要な資金を計算します。' },
    { href: '/articles/matsui-fx-auto-trading-stop-restart', title: '自動売買の停止・再開', description: '停止時に建玉と決済注文を残すか、全決済するかを3つの選択肢で整理します。' },
    { href: '/articles/matsui-fx-swap-calendar', title: 'スワップ付与時間と計算', description: '1万通貨表示を実際の取引数量へ換算し、付与日数と受払額を確認します。' },
    { href: '/articles/matsui-fx-swap-transfer-tax', title: 'スワップ振替と税金', description: '受渡日、総合口座への振替、出金可能額、不足金と申告資料を整理します。' },
    { href: '/articles/matsui-fx-one-currency', title: 'MATSUI FXは100円から？', description: '1通貨の必要証拠金と、為替が1円動いたときの損益を計算します。' },
    { href: '/articles/matsui-fx-one-currency-order', title: '1通貨の注文方法と0.0001入力', description: '1万通貨単位で表示される数量欄の換算、PC・スマホの入力手順を確認します。' },
    { href: '/articles/matsui-account-types', title: 'FX専用口座と総合口座の違い', description: 'FXだけ使う場合と、株・NISA・先物へ広げる場合の入口を整理します。' },
  ]} />;
}
