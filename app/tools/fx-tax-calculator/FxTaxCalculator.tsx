'use client';

import { useMemo, useRef, useState } from 'react';

export default function FxTaxCalculator() {
  const [annualProfit, setAnnualProfit] = useState(1000000);
  const [expenses, setExpenses] = useState(100000);
  const [currentLosses, setCurrentLosses] = useState(0);
  const [carriedLosses, setCarriedLosses] = useState(0);
  const tracked = useRef(false);

  const trackUse = () => {
    if (tracked.current) return;
    tracked.current = true;
    window.gtag?.('event', 'calculator_interaction', {
      calculator_id: 'fx_tax_calculator', page_path: window.location.pathname, transport_type: 'beacon',
    });
  };

  const result = useMemo(() => {
    const profit = Number.isFinite(annualProfit) ? annualProfit : 0;
    const safeExpenses = Math.max(0, expenses || 0);
    const safeCurrentLosses = Math.max(0, currentLosses || 0);
    const safeCarriedLosses = Math.max(0, carriedLosses || 0);
    const beforeCarry = profit - safeExpenses - safeCurrentLosses;
    const taxableIncome = Math.max(0, beforeCarry - safeCarriedLosses);
    const incomeTax = taxableIncome * 0.15;
    const reconstructionTax = incomeTax * 0.021;
    const localTax = taxableIncome * 0.05;
    return { beforeCarry, taxableIncome, incomeTax, reconstructionTax, localTax, total: incomeTax + reconstructionTax + localTax, unusedCarry: Math.max(0, safeCarriedLosses - Math.max(0, beforeCarry)) };
  }, [annualProfit, expenses, currentLosses, carriedLosses]);

  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 });
  const field = (label: string, value: number, setter: (value: number) => void, allowNegative = false) => (
    <label><span>{label}</span><input type="number" min={allowNegative ? undefined : 0} step="10000" value={value} onFocus={trackUse} onChange={event => { trackUse(); setter(Number(event.target.value)); }} /></label>
  );

  return <div className="calculator-shell"><div className="calculator-grid">
    <section className="calculator-inputs">
      <div className="calculator-panel-head"><div><span>INPUT</span><h2>年間損益と控除する金額</h2></div></div>
      <div className="field-grid">
        {field('FXの年間確定損益（円）', annualProfit, setAnnualProfit, true)}
        {field('別途計上する必要経費（円）', expenses, setExpenses)}
        {field('同年に通算する対象損失（円）', currentLosses, setCurrentLosses)}
        {field('前年以前の繰越損失（円）', carriedLosses, setCarriedLosses)}
      </div>
      <small>年間報告書に反映済みの手数料を必要経費へ重ねて入力しないでください。</small>
    </section>
    <section className="calculator-result">
      <div className="result-head"><span>ESTIMATED TAX</span><h2>税額の概算</h2></div>
      <div className="total-cost"><strong>{yen.format(result.total)}</strong><span>円</span></div>
      <p>繰越控除前の所得：{yen.format(result.beforeCarry)}円</p><p>課税所得の概算：{yen.format(result.taxableIncome)}円</p>
      <p>所得税15％：{yen.format(result.incomeTax)}円</p><p>復興特別所得税：{yen.format(result.reconstructionTax)}円</p><p>地方税5％：{yen.format(result.localTax)}円</p>
      {result.unusedCarry > 0 && <p>今回使い切らない繰越損失：{yen.format(result.unusedCarry)}円</p>}
      <small>2026年分の一般的な税率を単純計算した目安です。申告書上の端数処理や個別条件は反映していません。</small>
    </section>
  </div></div>;
}
