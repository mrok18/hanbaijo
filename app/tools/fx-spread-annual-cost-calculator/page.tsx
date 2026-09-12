import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
import FxSpreadAnnualCostCalculator from './FxSpreadAnnualCostCalculator';

export const metadata: Metadata = {
  alternates: { canonical: '/tools/fx-spread-annual-cost-calculator' },
  title: 'FXスプレッド年間コスト比較計算機｜0.1銭差を円換算',
  description: '2つのFXスプレッド、取引数量、1日の往復回数、取引日数から、1回・月間・年間のコストと差額を無料計算します。',
};

export default function Page() {
  return (
    <div className="calculator-page">
      <header className="calculator-intro">
        <p className="page-kicker">FX ANNUAL SPREAD CALCULATOR</p>
        <h1>0.1銭の差を、<br /><em>年間の円コストへ。</em></h1>
        <p className="lede">
          2つのスプレッドを同じ数量・回数で比較します。1往復、月間、指定期間の合計額を同時に表示し、
          口座選びでコスト差を優先すべきか判断できます。
        </p>
        <div className="calculator-proof"><span>2条件を比較</span><span>月間・年間を同時計算</span><span>登録不要</span><span>入力は端末内で計算</span></div>
      </header>

      <FxSpreadAnnualCostCalculator />

      <div className="callout">
        <strong>表示値が続くと仮定した概算です</strong>
        <p>原則固定の適用時間外、スプレッド拡大、スリッページ、スワップ、取引手数料は含みません。各社の最新条件を公式サイトで確認してください。</p>
      </div>

      <nav className="calculator-proof" aria-label="関連する比較と解説">
        <Link href="/articles/fx-spread-difference-annual-cost">年間差の計算方法</Link>
        <Link href="/articles/fx-spread-monthly-cost">月間コスト早見表</Link>
        <Link href="/fx/usdjpy-spread-comparison">米ドル円10社比較</Link>
        <Link href="/articles/fx-spread-time">広がりやすい時間帯</Link>
        <Link href="/tools/trading-break-even-calculator">損益分岐を計算</Link>
      </nav>

      <section className="article-affiliate" aria-label="提携中のFXサービス">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} />
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。広告報酬は計算結果に影響しません。</p>
      </section>
    </div>
  );
}
