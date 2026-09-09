import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = { title: 'DMM 株の国内株手数料・コスト', description: 'DMM 株の国内株現物における1注文ごとの手数料と、信用・米国株で異なる条件を公式情報から整理します。' };
export default function Page() {
  return <StockProviderFactSheet provider={STOCK_PROVIDERS['dmm-kabu']} affiliateOffer={AFFILIATE_OFFERS['dmm-kabu']} relatedArticles={[
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
