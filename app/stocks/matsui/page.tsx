import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = { title: '松井証券の国内株手数料・ボックスレート', description: '松井証券の国内株ボックスレートを、1日の約定代金合計と年齢条件に分けて公式情報から整理します。' };
export default function Page() { return <StockProviderFactSheet provider={STOCK_PROVIDERS.matsui} affiliateOffer={AFFILIATE_OFFERS['matsui-fx']} relatedArticles={[
  { href: '/articles/matsui-withdrawal-unavailable', title: '出金できない原因を順番に確認', description: '出金可能額、受渡日、振替、当日入金、登録銀行を切り分けます。' },
  { href: '/articles/matsui-withdrawal-methods-comparison', title: '3種類の出金方法を比較', description: '翌営業日、即時出金、MATSUI Bankを手数料・上限・取消可否で比較します。' },
  { href: '/articles/matsui-deposit-methods-comparison', title: '6種類の入金方法を比較', description: '手数料、リアルタイム反映、事前設定、銀行振込の違いを整理します。' },
  { href: '/articles/matsui-ekyc-required-documents', title: '口座開設のeKYCと必要書類', description: 'マイナンバー、本人確認、オンライン・郵送の違いと不備防止を整理します。' },
  { href: '/articles/matsui-simultaneous-account-opening', title: '総合口座と同時に申込める口座', description: 'NISA・FX・信用・先物と、自動開設される米国株・投資信託口座を整理します。' },
  { href: '/tools/matsui-box-rate-calculator', title: 'ボックスレート計算機', description: '現物と信用の1日約定代金を合算し、手数料を試算します。' },
  { href: '/tools/matsui-us-stock-cost-calculator', title: '米国株の往復コスト計算機', description: '売買手数料・為替コスト・値幅損益を同時に円換算します。' },
  { href: '/articles/matsui-us-stock-trading-hours', title: '米国株の取引時間とプレマーケット', description: '夏・冬時間と2026年12月予定の23時間化を整理します。' },
  { href: '/articles/matsui-us-stock-fx-fee', title: '米国株の為替手数料0円と25銭の違い', description: '事前両替と円貨決済で異なる為替コストを整理します。' },
  { href: '/articles/matsui-nisa-fees', title: '松井証券NISAの手数料', description: '日本株・米国株・投資信託で無料になる費用と残る費用を確認します。' },
  { href: '/articles/matsui-one-day-margin-cost', title: '一日信用の総コスト', description: '無料条件と翌日持越し・プレミアム空売りの費用を分けます。' },
]} />; }
