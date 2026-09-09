import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = { title: 'DMM 株の国内株手数料・コスト', description: 'DMM 株の国内株現物における1注文ごとの手数料と、信用・米国株で異なる条件を公式情報から整理します。' };
export default function Page() {
  return <StockProviderFactSheet provider={STOCK_PROVIDERS['dmm-kabu']} affiliateOffer={AFFILIATE_OFFERS['dmm-kabu']} relatedArticles={[
    { href: '/articles/dmm-kabu-usd-shortage', title: '米ドル不足・立替金', description: '不足の原因、強制為替取引、取引・出金制限、解消手順を整理します。' },
    { href: '/articles/dmm-kabu-us-dividend-tax', title: '米国株の配当金と税金', description: '米国・国内の課税、NISA、外国税額控除、ドル入金と反映日を整理します。' },
    { href: '/articles/dmm-kabu-us-stock-order-hours', title: '米国株の取引時間と注文', description: '夏冬の時間、1株単位、成行・指値・IFDONE、逆指値非対応を整理します。' },
    { href: '/articles/dmm-kabu-order-types-expiration', title: '注文方法と失効条件', description: '成行・指値・逆指値・OCO、注文期限、期限前に失効する条件を整理します。' },
    { href: '/articles/dmm-kabu-fractional-shares-buyback', title: '単元未満株の買取請求', description: '通常売却との違い、550円の手数料、価格決定、受付停止期間を整理します。' },
    { href: '/articles/dmm-kabu-tob-application', title: 'TOBの申込方法', description: '対象銘柄、PC申込、他社からの移管、NISA株の課税口座振替を整理します。' },
    { href: '/articles/dmm-kabu-us-margin-vip-courses', title: '米国株信用の優遇条件', description: '入庫・残高・平均建玉の条件と、メンバー・プレミアムの節約額を計算します。' },
    { href: '/articles/dmm-kabu-us-margin-call', title: '米国株信用の追証', description: '30％・2,500ドルの基準、確定時刻、解消期限と建玉返済を整理します。' },
    { href: '/articles/dmm-kabu-us-margin-cost', title: '米国株信用の総コスト', description: '取引手数料、買方金利、50％の保証金、30％の追証基準を整理します。' },
    { href: '/articles/dmm-kabu-margin-account-opening', title: '信用取引口座の開設', description: '同時・追加申込、審査、必要資金、NISAとの違いを整理します。' },
    { href: '/articles/dmm-kabu-margin-call-maintenance-rate', title: '保証金と追証を計算', description: '最低30万円、30％の新規建て、20％の追証判定と解消期限を整理します。' },
    { href: '/articles/dmm-kabu-margin-trading-cost', title: '信用取引の総コスト', description: '0円手数料の外にある金利、貸株料、逆日歩、管理費を計算します。' },
    { href: '/articles/dmm-kabu-ipo-application', title: 'IPOの申込方法', description: '前受金不要、完全平等抽選、当選・補欠当選後の購入手続きを整理します。' },
    { href: '/articles/dmm-kabu-dividend-receiving-tax', title: '配当金の受取方法と税金', description: '3つの方式、入金日、特定口座の損益通算、NISA非課税の条件を整理します。' },
    { href: '/articles/dmm-kabu-shareholder-benefit', title: '株主優待の権利日と探し方', description: '権利付き最終日、アプリの検索条件、信用取引・単元未満株の注意点を整理します。' },
    { href: '/articles/dmm-kabu-specific-account-tax', title: '特定口座と確定申告', description: '源泉徴収あり・なし・一般口座、年間取引報告書、区分変更を整理します。' },
    { href: '/articles/dmm-kabu-stock-transfer', title: '株式の入庫・出庫', description: '無料範囲、必要書類、預り区分、国内株・米国株の期間を整理します。' },
    { href: '/articles/dmmfx-stock-collateral-service', title: '保有株をFX証拠金にする仕組み', description: '原則70％の評価、対象外銘柄、振替時間と強制売却リスクを整理します。' },
    { href: '/articles/dmm-kabu-points-cash-exchange', title: 'DMM 株ポイントを計算', description: '手数料1％、税抜計算、1pt＝1円、有効期限と無料取引時の扱いを整理します。' },
    { href: '/articles/dmm-kabu-tools-comparison', title: 'アプリとPCツールを比較', description: 'かんたん・ノーマル・STANDARD・PRO+を注文、NISA、積立で比較します。' },
    { href: '/articles/dmm-kabu-withdrawal-rules', title: '最低出金額と売却後の日程', description: '2,000円、手数料、予約時間、国内株・米国株の売却代金を整理します。' },
    { href: '/articles/dmm-kabu-deposit-methods', title: 'クイック入金と振込', description: '最低5,000円、手数料、反映時間、未反映時の確認方法を整理します。' },
    { href: '/articles/dmm-kabu-tsumitate-kabu-nisa', title: 'つみたてかぶの仕組み', description: '1,000円からの設定、NISA、買付日、単元未満部分と資金不足時の扱いを整理します。' },
    { href: '/articles/dmm-kabu-nisa-fees-products', title: 'NISAの手数料と残るコスト', description: '国内株・米国株の無料範囲と、為替・配当など別に残る負担を整理します。' },
    { href: '/articles/dmm-kabu-nisa-account-opening', title: 'NISA口座の申込方法', description: '同時申込、既存利用者の追加、他社からの金融機関変更を分けて整理します。' },
    { href: '/articles/dmm-kabu-account-opening-documents', title: '口座開設に必要なもの', description: '本人確認とマイナンバー、提出方法、審査から取引開始までを整理します。' },
    { href: '/articles/dmm-kabu-domestic-round-trip-fee', title: '国内株の往復手数料を計算', description: '買付と売却をそれぞれ1注文として、約定代金別の総額を計算します。' },
    { href: '/articles/dmm-kabu-us-stock-fee', title: '米国株の手数料と為替コスト', description: '0ドルになる条件、上限22ドル、片道25銭の為替コストを分けて試算します。' },
    { href: '/stocks/domestic-fee-comparison', title: '国内株4社の手数料比較', description: '50万円の買付・売却を同じ条件にそろえ、料金体系の違いを比較します。' },
  ]} />;
}
