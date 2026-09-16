'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

const FAQS = [
  {
    question: 'FXシミュレーションでは何を計算できますか？',
    answer: '口座資金と1回の許容リスク率から許容損失額を求め、損切り幅・スプレッド・1pipsの損益を使って最大取引数量を試算できます。検索で「FXシュミレーション」と入力する場合も、同じ計算を確認できます。',
  },
  {
    question: 'FXの適正ロットはどのように決めますか？',
    answer: '許容損失額を、損切り幅とスプレッドを合計したpips数、および1通貨あたりのpips損益で割って求めます。結果は取引会社の最小取引単位に合わせて切り下げてください。',
  },
  {
    question: '必要証拠金と損失許容額は同じですか？',
    answer: '同じではありません。必要証拠金は注文を維持するための担保額、損失許容額は損切り時に受け入れる損失の上限です。レバレッジが高くても、損失許容額を先に決めて数量を管理します。',
  },
] as const;

export default function Page() {
  const [balance, setBalance] = useState(300000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [stopPips, setStopPips] = useState(50);
  const [pipValue, setPipValue] = useState(0.01);
  const [unitStep, setUnitStep] = useState(1);
  const [spreadPips, setSpreadPips] = useState(0.2);
  const result = useMemo(() => {
    const riskBudget = Math.max(0, balance) * Math.max(0, riskPercent) / 100;
    const totalPips = Math.max(0, stopPips) + Math.max(0, spreadPips);
    const lossPerUnit = totalPips * Math.max(0, pipValue);
    const rawUnits = lossPerUnit > 0 ? riskBudget / lossPerUnit : 0;
    const step = Math.max(1, unitStep);
    const units = Math.floor(rawUnits / step) * step;
    const estimatedLoss = units * lossPerUnit;
    return { riskBudget, totalPips, units, estimatedLoss, remaining: riskBudget - estimatedLoss };
  }, [balance, riskPercent, stopPips, pipValue, unitStep, spreadPips]);
  const number = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return <div className="calculator-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
    <header className="calculator-intro"><p className="page-kicker">FX SIMULATION / POSITION SIZE</p><h1>FXシミュレーションで、<br /><em>損失許容額から数量を逆算。</em></h1><p className="lede">FXシミュレーションは、目的に合わせて式を分けることが大切です。このページでは口座資金の何％まで損失を許容するかを先に決め、損切り幅とスプレッドを含めて最大取引数量を試算します。必要証拠金ではなく、損失許容額を起点にした数量管理です。</p><div className="calculator-proof"><span>FXシミュレーション：損失許容額→数量</span><span>1通貨・1,000通貨・1万通貨刻み</span><span>スプレッドを加算</span><span>入力は端末内で計算</span></div></header>
    <section className="callout"><strong>FX計算の基本式を目的ごとに分ける</strong><p>取引数量は、許容損失額÷（損切り幅＋スプレッド）÷1通貨あたりのpips損益で逆算します。値動きの損益や1pipsの円換算は<Link href="/tools/fx-pip-value-calculator">pips計算機</Link>、注文に必要な担保額は<Link href="/articles/fx-required-margin">必要証拠金の解説</Link>で確認し、同じ金額として混ぜないようにします。</p></section>
    <div className="calculator-shell"><div className="calculator-grid"><section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>資金・損切り条件</h2></div></div><div className="field-grid">
      <label><span>口座資金（円）</span><input type="number" min="0" step="10000" value={balance} onChange={e => setBalance(Number(e.target.value))} /></label>
      <label><span>1回の許容リスク（％）</span><input type="number" min="0" step="0.1" value={riskPercent} onChange={e => setRiskPercent(Number(e.target.value))} /></label>
      <label><span>損切り幅（pips）</span><input type="number" min="0" step="0.1" value={stopPips} onChange={e => setStopPips(Number(e.target.value))} /></label>
      <label><span>想定スプレッド（pips）</span><input type="number" min="0" step="0.1" value={spreadPips} onChange={e => setSpreadPips(Number(e.target.value))} /></label>
      <label><span>1通貨・1pipsの損益（円）</span><input type="number" min="0" step="0.0001" value={pipValue} onChange={e => setPipValue(Number(e.target.value))} /><small>米ドル/円など円絡みは通常0.01円</small></label>
      <label><span>取引数量の刻み</span><select value={unitStep} onChange={e => setUnitStep(Number(e.target.value))}><option value="1">1通貨</option><option value="1000">1,000通貨</option><option value="10000">1万通貨</option></select></label>
    </div></section><section className="calculator-result"><div className="result-head"><span>POSITION SIZE</span><h2>最大取引数量の目安</h2></div><div className="total-cost"><strong>{number.format(result.units)}</strong><span>通貨</span></div><p>許容損失額：約{number.format(result.riskBudget)}円</p><p>コスト込み損切り幅：{number.format(result.totalPips)}pips</p><p>数量調整後の想定損失：約{number.format(result.estimatedLoss)}円</p><p>許容額との差：約{number.format(result.remaining)}円</p><p>計算式：許容損失額 ÷（損切り幅＋スプレッド）÷ 1通貨あたりpips損益</p></section></div></div>
    <div className="callout"><strong>約定価格と損失額は保証されません</strong><p>逆指値は指定価格での約定を保証するものではなく、相場急変・窓開け・スプレッド拡大時は想定損失を超える場合があります。クロス円以外は、決済通貨と円の換算レートに応じた1pips損益を取引画面等で確認して入力してください。</p></div>
    <nav className="calculator-proof" aria-label="関連記事"><Link href="/articles/fx-position-size-calculation">適正ロットの決め方</Link><Link href="/articles/fx-required-margin">必要証拠金の計算</Link><Link href="/articles/fx-margin-ratio-vs-usage">維持率と使用率の違い</Link><Link href="/fx/losscut-comparison">ロスカット基準比較</Link><Link href="/tools/matsui-fx-margin-calculator">MATSUI FX維持率計算</Link></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['monex-fxplus']} /><p className="affiliate-disclosure">マネックス証券 FXPLUSへの広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算結果とは分けて表示しています。</p></section>
    <section className="calculator-explain" aria-labelledby="fx-simulation-faq"><p className="section-index">FAQ / FX SIMULATION</p><h2 id="fx-simulation-faq">FXシミュレーションのよくある質問</h2><div className="provider-faq-list">{FAQS.map((faq) => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div></section>
  </div>;
}
