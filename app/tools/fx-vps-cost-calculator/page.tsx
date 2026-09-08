import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
import FxVpsCostCalculator from './FxVpsCostCalculator';

export const metadata = {
  title: 'FX自動売買VPSコスト計算機｜RDS・年額・1取引あたり',
  description: 'VPS本体、RDSライセンス、更新後価格、取引回数、自宅PC電気代を入力し、FX自動売買の月額・年額インフラ費を計算します。',
};

export default function Page() {
  return <div className="calculator-page"><header className="calculator-intro"><p className="page-kicker">FX VPS COST CALCULATOR</p><h1>自動売買の固定費を、<br /><em>1往復まで配賦。</em></h1><p className="lede">VPS本体とRDSライセンスを合計し、契約時・更新後の月額と年額、取引1往復あたりのインフラ負担を概算します。</p><div className="calculator-proof"><span>RDS人数対応</span><span>更新後料金を別表示</span><span>自宅PC電気代と比較</span><span>入力内容は保存しません</span></div></header>
    <FxVpsCostCalculator />
    <div className="callout"><strong>自宅PC側は電気代だけの概算です</strong><p>PC購入費、回線費、停電、再起動、監視時間は含みません。VPS側にも障害、保守、EA停止、証券会社側の停止リスクがあります。安い方が必ず適切とは限りません。</p></div>
    <nav className="calculator-proof" aria-label="計算根拠と関連記事"><Link href="/articles/fx-vps-total-cost">VPS総コストの解説</Link><Link href="/fx/ablenet-vps">ABLENET VPS条件一覧</Link><Link href="/articles/fx-position-size-calculation">FX取引数量の決め方</Link><a href="https://www.ablenet.jp/vps/service/plan_fee.html" target="_blank" rel="noopener noreferrer">公式料金表</a></nav>
    <section className="article-affiliate" aria-label="ABLENET VPSの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['ablenet-vps']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると当サイトが報酬を受け取る場合があります。入力値と計算結果は送信・保存されず、広告の成果判定にも使用しません。</p></section>
  </div>;
}
