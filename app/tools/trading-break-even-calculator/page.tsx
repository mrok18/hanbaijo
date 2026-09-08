import Link from 'next/link';
import BreakEvenCalculator from './BreakEvenCalculator';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '取引コスト損益分岐計算機｜手数料負けしない利益率・値幅',
  description: '取引金額、数量、スプレッド、往復手数料、保有コストから、損益分岐率、回収に必要な利益額、1単位あたりの必要値幅を無料計算します。',
};

export default function Page() {
  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">TRADING COST BREAK-EVEN</p><h1>手数料負けしない値幅を、<br /><em>コスト総額から逆算。</em></h1><p className="lede">取引金額と数量に、スプレッド、購入・売却手数料、保有コストなどを入力します。損益がゼロになる利益率と、1単位あたりの必要値幅を即時計算します。</p><div className="calculator-proof"><span>株・FX・CFD・先物対応</span><span>往復コストを合算</span><span>必要値幅を逆算</span><span>入力は端末内で計算</span></div></header>
    <BreakEvenCalculator />
    <div className="callout"><strong>損益分岐点は概算です</strong><p>実際の取引では、売却代金に連動する手数料、スリッページ、スプレッド拡大、税金などで結果が変わります。将来の利益や約定を保証するものではありません。</p></div>
    <nav className="calculator-proof" aria-label="関連する解説と計算機"><Link href="/articles/trading-cost-break-even-return">損益分岐率の計算方法</Link><Link href="/tools/cost-calculator">共通取引コスト計算機</Link><Link href="/tools/risk-reward-calculator">損益比・損益分岐勝率</Link><Link href="/articles/stock-round-trip-cost">国内株の往復コスト</Link><Link href="/articles/fx-spread-cost">FXスプレッドの円換算</Link></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /><p className="affiliate-disclosure">DMM CFDへの広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算結果とは分けて表示しています。</p></section>
  </div>;
}
