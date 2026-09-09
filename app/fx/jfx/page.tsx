import { notFound } from 'next/navigation';
import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
import { FX_PROVIDERS } from '@/lib/fx-providers';

const provider = FX_PROVIDERS.jfx;

export const metadata = {
  title: `${provider.name}の取引コスト・口座開設ガイド`,
  description: 'JFX MATRIX TRADERの取引コスト、必要証拠金、入出金、注文方法、口座開設前の確認項目を公式情報に基づいて整理します。',
};

export default function Page() {
  if (!provider) notFound();
  const articles = [
    { href: '/articles/jfx-before-account-opening-checklist', title: '口座開設前の7項目をまとめて確認', description: 'スキャルピング、Lot、コスト、ツール、必要資金、入出金、本人確認を判断順に整理します。' },
    { href: '/articles/jfx-required-margin-leverage', title: '必要証拠金と実効レバレッジを計算', description: '米ドル円1,000通貨の公式例から、最大倍率と口座全体の実効倍率を分けます。' },
    { href: '/articles/jfx-deposit-methods-comparison', title: 'クイック入金と銀行振込を比較', description: '最低金額、約380行、手数料、反映時間、振込名義の違いを整理します。' },
    { href: '/articles/jfx-demo-account-guide', title: 'JFXデモ口座でできること', description: '利用期間、仮想資金、デモレート、土日利用と本番口座との差を整理します。' },
    { href: '/articles/jfx-mt5-tradingview-matrix-trader', title: 'MT5・TradingView・MATRIX TRADERを比較', description: '分析専用チャートと実際の発注・口座管理画面の役割を分けます。' },
    { href: '/articles/jfx-deposit-not-reflected', title: 'JFXの入金が反映されない場合', description: 'クイック入金と銀行振込を、引落し・終了操作・名義・口座番号から切り分けます。' },
    { href: '/articles/jfx-trade-history-csv-tax-report', title: '取引履歴をCSV保存し損益計算書と照合', description: '約定・注文・入出金履歴の検索、CSV保存、確定申告用資料の照合手順を整理します。' },
    { href: '/articles/jfx-trading-hours-maintenance', title: 'JFXの取引時間とメンテナンス', description: '夏時間・冬時間、毎営業日の日締め、土日の注文受付を整理します。' },
    { href: '/articles/jfx-beginner-vs-matrix-trader', title: 'ビギナーFXとMATRIX TRADERを比較', description: '100通貨のミニ口座と1,000通貨の本口座を、取扱商品・分析環境まで比較します。' },
    { href: '/articles/jfx-account-opening-flow', title: 'JFXの口座開設に必要なもの', description: '本人確認・マイナンバー・審査・初回入金1万円から取引開始までを整理します。' },
    { href: '/articles/jfx-allowed-spread-setting', title: '許容スプレッドの設定方法', description: 'スプレッド急拡大時に発注を止める条件と、許容スリップとの違いを整理します。' },
    { href: '/articles/jfx-quick-order-settings', title: 'JFXクイック注文の設定と注意点', description: '全決済、両建て、許容設定、決済pip差を発注前の確認順に整理します。' },
    { href: '/articles/jfx-order-slippage-rules', title: 'JFXの注文方法とスリッページ', description: '成行・ストリーミング・指値・逆指値を、価格のずれと注文不成立の違いから整理します。' },
    { href: '/articles/jfx-vs-dmm-fx', title: 'JFXとDMM FXを比較', description: '1,000通貨対応、米ドル円の時間帯別スプレッド、ロスカット基準を比較します。' },
    { href: '/articles/jfx-vs-matsui-fx', title: 'JFXと松井証券FXを比較', description: '1通貨の少額取引とスキャルピング環境を、スプレッド条件まで含めて比較します。' },
    { href: '/articles/jfx-vs-fxtf', title: 'JFXとFXTFを比較', description: '裁量スキャルピングとMT4・EAを、Lot表記と建玉連動手数料まで含めて比較します。' },
    { href: '/articles/jfx-withdrawal-time-rules', title: 'JFXの出金時間と取消条件', description: 'リアルタイム出金と通常出金の金額、着金時間、取消可否を比較します。' },
    { href: '/articles/jfx-hedging-margin-cost', title: 'JFXの両建て証拠金とコスト', description: '片側分で計算される必要証拠金と、スプレッド・スワップ差・ロスカットの注意点を整理します。' },
    { href: '/articles/jfx-swap-transfer-tax', title: 'JFXのスワップ振替と税金', description: 'ポジションを決済せずスワップだけを確定・出金する流れと、年末の取引日を整理します。' },
    { href: '/articles/jfx-fees-total-cost', title: 'JFXの無料手数料と実質コスト', description: '取引・入出金・ロスカット手数料と、スプレッドやスワップなど残る負担を分けます。' },
    { href: '/articles/jfx-lot-trade-unit', title: 'JFXの1Lotと通貨数の例外', description: '基本1,000通貨と6通貨ペアの1万通貨を分け、損益とスプレッド相当額を計算します。' },
    { href: '/articles/jfx-losscut-margin-shortage', title: 'JFXのロスカットと不足金', description: '有効証拠金と必要証拠金の基準、判定間隔、急変時に不足金が残る場合を整理します。' },
    { href: '/articles/jfx-scalping-spread-cost', title: 'JFXの時間帯別スプレッドを計算', description: '米ドル/円0.2銭と早朝5.9銭を、取引数量と回数から円コストへ換算します。' },
    { href: '/tools/jfx-fxtf-cost-comparison', title: 'JFX・FXTFの総コストを比較計算', description: 'スプレッド、建玉連動手数料、想定約定差を同じ数量・回数で円換算します。' },
    { href: '/articles/fx-spread-cost', title: 'スプレッドを円に直す方法', description: '銭・pips表示を実際の取引数量に応じた円の負担へ直します。' },
    { href: '/articles/fx-spread-time', title: 'スプレッドが広がりやすい時間帯', description: '早朝、経済指標、急変時に広告表示から外れる理由を整理します。' },
  ];
  const pick = (hrefs: string[]) => hrefs.map((href) => articles.find((article) => article.href === href)!);

  return <FxProviderFactSheet provider={provider} affiliateOffer={AFFILIATE_OFFERS.jfx} relatedSections={[
    {
      id: 'before-opening',
      label: 'START',
      title: '申込み前に比べる',
      description: '口座の特徴、開設手続き、デモ環境、他社との違いを先に確認するための入口です。',
      articles: pick([
        '/articles/jfx-before-account-opening-checklist',
        '/articles/jfx-account-opening-flow',
        '/articles/jfx-demo-account-guide',
        '/articles/jfx-beginner-vs-matrix-trader',
        '/articles/jfx-vs-dmm-fx',
        '/articles/jfx-vs-matsui-fx',
        '/articles/jfx-vs-fxtf',
      ]),
    },
    {
      id: 'funding-risk',
      label: 'MONEY & RISK',
      title: '資金とリスクを確認する',
      description: '取引を始める前に、必要資金、取引単位、ロスカット、入出金の条件を数字で確認します。',
      articles: pick([
        '/articles/jfx-required-margin-leverage',
        '/articles/jfx-lot-trade-unit',
        '/articles/jfx-losscut-margin-shortage',
        '/articles/jfx-hedging-margin-cost',
        '/articles/jfx-deposit-methods-comparison',
        '/articles/jfx-withdrawal-time-rules',
      ]),
    },
    {
      id: 'cost',
      label: 'TOTAL COST',
      title: '取引コストを計算する',
      description: '手数料0円だけで判断せず、スプレッド、スワップ、時間帯と取引回数を合計して比べます。',
      articles: pick([
        '/articles/jfx-fees-total-cost',
        '/articles/jfx-scalping-spread-cost',
        '/tools/jfx-fxtf-cost-comparison',
        '/articles/jfx-swap-transfer-tax',
        '/articles/fx-spread-cost',
        '/articles/fx-spread-time',
      ]),
    },
    {
      id: 'tools',
      label: 'OPERATION',
      title: '操作とツールを調べる',
      description: 'チャート、注文設定、取引時間、入金トラブルなど、利用開始後につまずきやすい点を解決します。',
      articles: pick([
        '/articles/jfx-mt5-tradingview-matrix-trader',
        '/articles/jfx-quick-order-settings',
        '/articles/jfx-order-slippage-rules',
        '/articles/jfx-trading-hours-maintenance',
        '/articles/jfx-deposit-not-reflected',
      ]),
    },
  ]} />;
}
