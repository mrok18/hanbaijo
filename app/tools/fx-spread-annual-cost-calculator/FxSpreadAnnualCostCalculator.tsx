'use client';

import { useMemo, useState } from 'react';

export default function FxSpreadAnnualCostCalculator() {
  const [spreadA, setSpreadA] = useState(0.2);
  const [spreadB, setSpreadB] = useState(0.3);
  const [quantity, setQuantity] = useState(10000);
  const [tradesPerDay, setTradesPerDay] = useState(5);
  const [daysPerMonth, setDaysPerMonth] = useState(20);
  const [months, setMonths] = useState(12);

  const result = useMemo(() => {
    const safeA = Math.max(0, spreadA);
    const safeB = Math.max(0, spreadB);
    const safeQuantity = Math.max(0, quantity);
    const safeTrades = Math.max(0, tradesPerDay);
    const safeDays = Math.max(0, daysPerMonth);
    const safeMonths = Math.max(0, months);
    const rounds = safeTrades * safeDays;
    const costAOnce = safeA / 100 * safeQuantity;
    const costBOnce = safeB / 100 * safeQuantity;
    const monthlyA = costAOnce * rounds;
    const monthlyB = costBOnce * rounds;
    const annualA = monthlyA * safeMonths;
    const annualB = monthlyB * safeMonths;
    return {
      spreadGap: Math.abs(safeA - safeB),
      onceGap: Math.abs(costAOnce - costBOnce),
      monthlyGap: Math.abs(monthlyA - monthlyB),
      annualGap: Math.abs(annualA - annualB),
      monthlyA,
      monthlyB,
      annualA,
      annualB,
      annualRounds: rounds * safeMonths,
    };
  }, [spreadA, spreadB, quantity, tradesPerDay, daysPerMonth, months]);

  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });
  const count = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 1 });

  return (
    <div className="calculator-shell">
      <div className="calculator-grid">
        <section className="calculator-inputs">
          <div className="calculator-panel-head"><div><span>INPUT</span><h2>2つのスプレッドと取引頻度</h2></div></div>
          <div className="field-grid">
            <label><span>比較Aのスプレッド（銭）</span><input type="number" min="0" step="0.1" value={spreadA} onChange={event => setSpreadA(Number(event.target.value))} /></label>
            <label><span>比較Bのスプレッド（銭）</span><input type="number" min="0" step="0.1" value={spreadB} onChange={event => setSpreadB(Number(event.target.value))} /></label>
            <label><span>1回の取引数量（通貨）</span><input type="number" min="0" step="1000" value={quantity} onChange={event => setQuantity(Number(event.target.value))} /></label>
            <label><span>1日の往復回数</span><input type="number" min="0" step="1" value={tradesPerDay} onChange={event => setTradesPerDay(Number(event.target.value))} /></label>
            <label><span>1カ月の取引日数</span><input type="number" min="0" max="31" step="1" value={daysPerMonth} onChange={event => setDaysPerMonth(Number(event.target.value))} /></label>
            <label><span>比較する月数</span><input type="number" min="0" max="120" step="1" value={months} onChange={event => setMonths(Number(event.target.value))} /></label>
          </div>
        </section>
        <section className="calculator-result">
          <div className="result-head"><span>ANNUAL COST GAP</span><h2>年間コスト差</h2></div>
          <div className="total-cost"><strong>{yen.format(result.annualGap)}</strong><span>円</span></div>
          <p>スプレッド差：{count.format(result.spreadGap)}銭</p>
          <p>1往復の差：{yen.format(result.onceGap)}円</p>
          <p>月間の差：{yen.format(result.monthlyGap)}円</p>
          <p>比較A：月{yen.format(result.monthlyA)}円／期間合計{yen.format(result.annualA)}円</p>
          <p>比較B：月{yen.format(result.monthlyB)}円／期間合計{yen.format(result.annualB)}円</p>
          <p>期間中の往復回数：{count.format(result.annualRounds)}回</p>
          <small>入力したスプレッドどおりに全注文が約定する仮定の試算です。</small>
        </section>
      </div>
    </div>
  );
}
