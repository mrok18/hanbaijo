import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
import NikkeiPositionSizeCalculator from './NikkeiPositionSizeCalculator';

export const metadata = {
  alternates: { canonical: '/tools/nikkei225-position-size-calculator' },
  title: '日経225先物 適正枚数計算機｜許容損失から枚数を逆算',
  description: '口座資金、許容リスク率、損切り幅、スリッページ、必要証拠金から、日経225先物・mini・マイクロの最大枚数を概算します。',
};

export default function Page() {
  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">NIKKEI 225 / POSITION SIZE</p><h1>損失上限から、<br /><em>先物の枚数を逆算。</em></h1><p className="lede">先に1回の許容損失を決め、損切り幅と想定スリッページから最大枚数を整数で計算します。証拠金で「建てられる枚数」と、リスク上「持てる枚数」の小さい方を表示します。</p><div className="calculator-proof"><span>ラージ・mini・マイクロ対応</span><span>スリッページを加算</span><span>リスク・証拠金の両面で制限</span><span>入力内容は保存しません</span></div></header>
    <NikkeiPositionSizeCalculator />
    <div className="callout"><strong>損失額を保証する計算ではありません</strong><p>逆指値は指定価格での約定を保証しません。相場急変、夜間の価格飛び、流動性低下などで想定スリッページを超え、計算上の許容額や口座資金を上回る損失が生じる場合があります。必要証拠金も変動するため、注文前に取引画面と契約締結前交付書面を確認してください。</p></div>
    <nav className="calculator-proof" aria-label="関連する計算機と解説"><Link href="/tools/nikkei225-margin-buffer-calculator">証拠金余力計算</Link><Link href="/tools/matsui-futures-cost-calculator">手数料込み損益計算</Link><Link href="/articles/nikkei225-micro-profit-loss">マイクロ損益早見表</Link><Link href="/articles/futures-tick-value">1ティックの計算方法</Link><Link href="/articles/futures-margin">証拠金の仕組み</Link></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算結果とは分けて表示しています。</p></section>
  </div>;
}
