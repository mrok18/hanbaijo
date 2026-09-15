import StockProviderFactSheet from '@/components/StockProviderFactSheet';
import { STOCK_PROVIDERS } from '@/lib/stock-providers';

export const metadata = {
  title: '楽天証券 日本株 売買手数料｜現物・信用の0円条件',
  description: '楽天証券の日本株（国内株式）売買手数料を、現物・信用のゼロコース0円条件、SOR・Rクロスの同意、金利・貸株料など別コストに分けて確認します。',
  alternates: { canonical: '/stocks/rakuten' },
};

export default function Page() {
  return <StockProviderFactSheet
    provider={STOCK_PROVIDERS.rakuten}
    heading="楽天証券 日本株 売買手数料｜現物・信用の0円条件"
    keyNumbersHeading="楽天証券 日本株の売買手数料と別コスト"
    relatedArticles={[
    {
      href: '/articles/rakuten-securities-domestic-stock-fees',
      title: '楽天証券 国内株式の手数料コースと実額を確認',
      description: '注文前の概算、取引履歴、取引報告書を使い分け、ゼロコースの適用と信用取引の別費用まで確認します。',
      tag: 'FEE CHECK',
      linkLabel: '確認方法を見る →',
    },
    {
      href: '/articles/rakuten-fx-fees-total-cost',
      title: '楽天証券 FX 手数料を確認',
      description: '楽天FXの取引手数料0円だけでなく、時間帯・数量別スプレッド、スワップ、スリッページを総コストで確認します。',
      tag: 'FX FEES',
      linkLabel: 'FXの手数料を見る →',
    },
    {
      href: '/stocks/domestic-fee-comparison',
      title: '国内株4社の手数料を同条件で比較',
      description: '楽天証券を含む4社を、50万円の買付・売却で比較します。',
      tag: 'COMPARE',
      linkLabel: '4社比較を見る →',
    },
    {
      href: '/stocks/dmm-kabu',
      title: 'DMM 株の公式条件と広告リンクを確認',
      description: 'DMM 株の国内株・米国株・NISAの手数料と取引条件を、比較結果から分離して確認します。',
      tag: 'PARTNER LINK',
      linkLabel: 'DMM 株の公式情報を見る →',
    },
    {
      href: '/articles/foreign-stock-trading-fees',
      title: '外国株式の市場別手数料を比較',
      description: '楽天証券の米国株、中国株、ASEAN株を、料率、最低・上限、為替・現地費用で比べます。',
      tag: 'FOREIGN STOCKS',
      linkLabel: '市場別比較を見る →',
    },
    {
      href: '/tools/cost-calculator',
      title: '株式の往復コストを金額で試算',
      description: '買付と売却の手数料、価格差を自分の取引条件で計算します。',
      tag: 'CALCULATOR',
      linkLabel: '計算機を使う →',
    },
    {
      href: '/articles/stock-round-trip-cost',
      title: '株式の往復コストの計算方法',
      description: '手数料0円の外にある価格差や信用コストを分けて確認します。',
      tag: 'GUIDE',
      linkLabel: '計算方法を読む →',
    },
  ]} />;
}
