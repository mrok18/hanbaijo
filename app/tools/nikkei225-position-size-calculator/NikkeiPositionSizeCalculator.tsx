'use client';

import { useMemo, useState } from 'react';

const products = [
  { name: '日経225先物', multiplier: 1000, tick: 10 },
  { name: '日経225mini', multiplier: 100, tick: 5 },
  { name: '日経225マイクロ', multiplier: 10, tick: 5 },
] as const;

export default function NikkeiPositionSizeCalculator() {
  const [productIndex, setProductIndex] = useState(2);
  const [funds, setFunds] = useState(300000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [stopPoints, setStopPoints] = useState(200);
  const [slippagePoints, setSlippagePoints] = useState(5);
  const [marginPerLot, setMarginPerLot] = useState(30000);
  const product = products[productIndex];
  const result = useMemo(() => {
    const safeFunds = Math.max(0, funds);
    const riskBudget = safeFunds * Math.max(0, riskPercent) / 100;
    const totalPoints = Math.max(0, stopPoints) + Math.max(0, slippagePoints);
    const lossPerLot = totalPoints * product.multiplier;
    const lotsByRisk = lossPerLot ? Math.floor(riskBudget / lossPerLot) : 0;
    const safeMargin = Math.max(0, marginPerLot);
    const lotsByMargin = safeMargin ? Math.floor(safeFunds / safeMargin) : 0;
    const lots = Math.min(lotsByRisk, lotsByMargin);
    return { riskBudget, totalPoints, lossPerLot, lotsByRisk, lotsByMargin, lots, estimatedLoss: lots * lossPerLot, requiredMargin: lots * safeMargin, stopTicks: product.tick ? totalPoints / product.tick : 0 };
  }, [funds, riskPercent, stopPoints, slippagePoints, marginPerLot, product]);
  const number = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 1 });

  return <div className="calculator-shell"><div className="calculator-grid">
    <section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>損失上限と損切り</h2></div></div><div className="field-grid">
      <label className="wide"><span>商品</span><select value={productIndex} onChange={e => setProductIndex(Number(e.target.value))}>{products.map((item, index) => <option key={item.name} value={index}>{item.name}（倍率{item.multiplier}倍・呼値{item.tick}円）</option>)}</select></label>
      <label><span>口座資金（円）</span><input type="number" min="0" step="10000" value={funds} onChange={e => setFunds(Number(e.target.value))} /></label>
      <label><span>1回の許容リスク（％）</span><input type="number" min="0" step="0.1" value={riskPercent} onChange={e => setRiskPercent(Number(e.target.value))} /></label>
      <label><span>損切り幅（円）</span><input type="number" min="0" step={product.tick} value={stopPoints} onChange={e => setStopPoints(Number(e.target.value))} /><small>建値から逆指値までの指数値幅</small></label>
      <label><span>想定スリッページ（円）</span><input type="number" min="0" step={product.tick} value={slippagePoints} onChange={e => setSlippagePoints(Number(e.target.value))} /></label>
      <label className="wide"><span>1枚の必要証拠金（円）</span><input type="number" min="0" step="1000" value={marginPerLot} onChange={e => setMarginPerLot(Number(e.target.value))} /><small>取引画面に表示された最新額を入力</small></label>
    </div></section>
    <section className="calculator-result"><div className="result-head"><span>POSITION SIZE</span><h2>最大枚数の目安</h2></div><div className="total-cost"><strong>{number.format(result.lots)}</strong><span>枚</span></div>
      <p>許容損失額：約{number.format(result.riskBudget)}円</p><p>コスト込み損切り幅：{number.format(result.totalPoints)}円（約{number.format(result.stopTicks)}ティック）</p><p>1枚の想定損失：約{number.format(result.lossPerLot)}円</p><p>リスク基準の上限：{number.format(result.lotsByRisk)}枚</p><p>証拠金基準の上限：{number.format(result.lotsByMargin)}枚</p><p>表示枚数の想定損失：約{number.format(result.estimatedLoss)}円</p><p>表示枚数の必要証拠金：約{number.format(result.requiredMargin)}円</p>
      {result.lots === 0 && <p><strong>この条件では1枚未満です。より小さい商品か、損切り幅・資金条件を検討してください。</strong></p>}
    </section>
  </div></div>;
}
