import type { Metadata } from 'next';
import Link from 'next/link';
import FxTaxCalculator from './FxTaxCalculator';

export const metadata: Metadata = {
  title: '国内FX税金計算シミュレーター｜必要経費・損失繰越に対応',
  description: '国内FXの年間確定損益、必要経費、同年の通算損失、前年以前の繰越損失から、課税所得と税額20.315％の内訳を無料計算します。',
};

export default function Page() {
  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">DOMESTIC FX TAX CALCULATOR</p><h1>FXの年間損益から、<br /><em>税額の目安を計算。</em></h1><p className="lede">必要経費、同年に通算できる対象損失、前年以前の繰越損失を反映し、所得税・復興特別所得税・地方税を分けて表示します。</p><div className="calculator-proof"><span>2026年分の税率</span><span>損失繰越に対応</span><span>登録不要</span><span>入力値は送信しません</span></div></header>
    <FxTaxCalculator />
    <div className="callout"><strong>国内の一定のFX取引を対象とした概算です</strong><p>海外業者との取引、法人取引、所得区分が異なる取引には使用できません。申告書上の端数処理、控除、個別事情により実際の税額は変わります。</p></div>
    <nav className="calculator-proof" aria-label="関連する税務解説"><Link href="/articles/fx-tax-rate-calculation">20.315％の内訳</Link><Link href="/articles/fx-profit-under-200k-tax-return">20万円以下の申告条件</Link><Link href="/articles/fx-tax-deductible-expenses">必要経費の判断</Link><Link href="/articles/fx-profit-loss-offset-tax">損益通算・損失繰越</Link><Link href="/articles/fx-annual-transaction-report-tax-return">年間報告書の集計</Link></nav>
  </div>;
}
