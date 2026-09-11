import type { Metadata } from 'next';
import Link from 'next/link';
import FxSwapBreakEvenCalculator from './FxSwapBreakEvenCalculator';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'FXスワップ損益分岐日数計算機｜スプレッド回収まで何日？',
  description: '取引通貨数、スプレッド、手数料、1万通貨あたりのスワップと付与日数から、初期コスト回収日数と差引損益を無料計算します。',
  alternates: { canonical: '/tools/fx-swap-break-even-calculator' },
};

export default function Page() {
  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">FX SWAP BREAK-EVEN</p><h1>スワップで初期コストを、<br /><em>何日で回収できる？</em></h1><p className="lede">取引数量とスプレッド、その他手数料を円へ換算し、受取スワップで回収するまでの付与日数を計算します。支払スワップの場合は保有後の負担増加を表示します。</p><div className="calculator-proof"><span>受取・支払に対応</span><span>1万通貨表示を換算</span><span>複数日付与に対応</span><span>入力は端末内で計算</span></div></header>
    <FxSwapBreakEvenCalculator />
    <div className="callout"><strong>スワップは毎日同額ではありません</strong><p>入力値が将来も続くと仮定した単純試算です。付与額・付与日数・売買スプレッドは変動し、為替変動による損失がスワップ収益を上回る場合があります。</p></div>
    <nav className="calculator-proof" aria-label="スワップの計算根拠"><Link href="/articles/fx-swap-spread-break-even-days">スプレッド回収日数の具体例</Link><Link href="/articles/fx-swap-calculation">スワップの計算方法</Link><Link href="/articles/fx-swap-three-days">3日分・4日分の理由</Link><Link href="/fx/swap-calendar-comparison">スワップカレンダー比較</Link><Link href="/tools/fx-pip-value-calculator">値動き損益を計算</Link><Link href="/tools/trading-break-even-calculator">取引コストの損益分岐</Link></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} /><p className="affiliate-disclosure">FXTFへの広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算結果とは分けて表示しています。</p></section>
  </div>;
}
