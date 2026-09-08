'use client';

import { useMemo, useState } from 'react';

export default function BreakEvenCalculator() {
  const [tradeAmount, setTradeAmount] = useState(100000);
  const [quantity, setQuantity] = useState(100);
  const [spreadCost, setSpreadCost] = useState(300);
  const [buyFee, setBuyFee] = useState(200);
  const [sellFee, setSellFee] = useState(200);
  const [holdingCost, setHoldingCost] = useState(100);
  const [otherCost, setOtherCost] = useState(0);

  const result = useMemo(() => {
    const amount = Math.max(0, tradeAmount);
    const units = Math.max(0, quantity);
    const totalCost = [spreadCost, buyFee, sellFee, holdingCost, otherCost]
      .reduce((sum, value) => sum + Math.max(0, value), 0);
    const breakEvenRate = amount > 0 ? totalCost / amount * 100 : 0;
    const perUnitMove = units > 0 ? totalCost / units : 0;
    const netAtOnePercent = amount * 0.01 - totalCost;
    return { totalCost, breakEvenRate, perUnitMove, netAtOnePercent };
  }, [tradeAmount, quantity, spreadCost, buyFee, sellFee, holdingCost, otherCost]);

  const number = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });
  const money = (value: number) => `${value < 0 ? '-' : ''}¥${number.format(Math.abs(value))}`;

  return <div className="calculator-shell"><div className="calculator-grid">
    <section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>取引条件と往復コスト</h2></div></div><div className="field-grid">
      <label><span>取引金額（円）</span><input type="number" min="0" step="1000" value={tradeAmount} onChange={event => setTradeAmount(Number(event.target.value))} /></label>
      <label><span>保有数量</span><input type="number" min="0" step="1" value={quantity} onChange={event => setQuantity(Number(event.target.value))} /><small>株数・通貨数・枚数など</small></label>
      <label><span>スプレッド相当額（円）</span><input type="number" min="0" step="1" value={spreadCost} onChange={event => setSpreadCost(Number(event.target.value))} /></label>
      <label><span>購入・新規手数料（円）</span><input type="number" min="0" step="1" value={buyFee} onChange={event => setBuyFee(Number(event.target.value))} /></label>
      <label><span>売却・決済手数料（円）</span><input type="number" min="0" step="1" value={sellFee} onChange={event => setSellFee(Number(event.target.value))} /></label>
      <label><span>保有コスト合計（円）</span><input type="number" min="0" step="1" value={holdingCost} onChange={event => setHoldingCost(Number(event.target.value))} /><small>金利・調整額・資金調達料など</small></label>
      <label><span>その他の固定コスト（円）</span><input type="number" min="0" step="1" value={otherCost} onChange={event => setOtherCost(Number(event.target.value))} /></label>
    </div></section>
    <section className="calculator-result"><div className="result-head"><span>BREAK-EVEN RATE</span><h2>損益分岐率</h2></div><div className="total-cost"><strong>{number.format(result.breakEvenRate)}</strong><span>％</span></div><p>往復総コスト：{money(result.totalCost)}</p><p>回収に必要な利益額：{money(result.totalCost)}</p><p>1単位あたり必要値幅：{money(result.perUnitMove)}</p><p>価格が1％上昇した場合の差引損益：{money(result.netAtOnePercent)}</p><small>入力したコストを固定額として扱う概算です。</small></section>
  </div></div>;
}
