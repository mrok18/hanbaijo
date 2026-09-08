import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
import NikkeiMarginBufferCalculator from './NikkeiMarginBufferCalculator';

export const metadata = {
  title: '日経225先物 証拠金余力計算機｜何円・何ティックの逆行に耐える？',
  description: '口座資金、1枚の必要証拠金、枚数、残しておく資金から、日経225先物・mini・マイクロの値動き余力を円とティックで概算します。',
};

export default function Page() {
  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">NIKKEI 225 / MARGIN BUFFER</p><h1>証拠金の余力を、<br /><em>値幅に換算。</em></h1><p className="lede">口座資金から必要証拠金と残しておく資金を引き、余った金額が何円・何ティックの逆行に相当するか概算します。</p><div className="calculator-proof"><span>ラージ・mini・マイクロ対応</span><span>証拠金は手入力</span><span>入力内容は保存しません</span></div></header>
    <NikkeiMarginBufferCalculator />
    <div className="callout"><strong>ロスカット価格の計算ではありません</strong><p>表示するのは、入力した資金の余力を商品倍率で割った単純な値幅換算です。実際の追加証拠金や強制決済は、証券会社の維持率、値洗い、他の建玉、注文中証拠金などで変わります。必要証拠金は変動するため、取引画面の最新額を入力してください。相場急変や価格の飛びでは、ここで示す余力や口座資金を超える損失が生じる場合があります。</p></div>
    <nav className="calculator-proof" aria-label="計算根拠と関連記事"><Link href="/tools/nikkei225-position-size-calculator">許容損失から枚数を逆算</Link><Link href="/articles/futures-margin">証拠金の仕組み</Link><Link href="/articles/nikkei225-micro-profit-loss">マイクロの損益早見表</Link><Link href="/articles/futures-tick-value">1ティックの計算方法</Link><Link href="/tools/matsui-futures-cost-calculator">手数料込み損益計算</Link><Link href="/futures/nikkei225-fee-comparison">証券会社別手数料</Link></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算結果とは分けて表示しています。</p></section>
  </div>;
}
