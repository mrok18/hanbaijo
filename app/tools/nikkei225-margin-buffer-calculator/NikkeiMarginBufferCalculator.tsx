'use client';

import { useMemo, useState } from 'react';

const products = [
  { name: '日経225先物', multiplier: 1000, tick: 10 },
  { name: '日経225mini', multiplier: 100, tick: 5 },
  { name: '日経225マイクロ', multiplier: 10, tick: 5 },
] as const;

export default function NikkeiMarginBufferCalculator() {
  const [productIndex, setProductIndex] = useState(2);
  const [funds, setFunds] = useState(300000);
  const [marginPerLot, setMarginPerLot] = useState(30000);
  const [lots, setLots] = useState(1);
  const [reserve, setReserve] = useState(50000);
  const product = products[productIndex];
  const result = useMemo(() => {
    const safeFunds = Math.max(0, funds);
    const safeMargin = Math.max(0, marginPerLot);
    const safeLots = Math.max(0, lots);
    const safeReserve = Math.max(0, reserve);
    const requiredMargin = safeMargin * safeLots;
    const requiredTotal = requiredMargin + safeReserve;
    const buffer = Math.max(0, safeFunds - requiredTotal);
    const shortfall = Math.max(0, requiredTotal - safeFunds);
    const lossPerPoint = product.multiplier * safeLots;
    const lossPerTick = lossPerPoint * product.tick;
    return { requiredMargin, requiredTotal, buffer, shortfall, lossPerPoint, lossPerTick, adversePoints: lossPerPoint ? buffer / lossPerPoint : 0, adverseTicks: lossPerTick ? buffer / lossPerTick : 0 };
  }, [funds, marginPerLot, lots, reserve, product]);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 1 });

  return <div className="calculator-shell"><div className="calculator-grid">
    <section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>資金と建玉</h2></div></div><div className="field-grid">
      <label className="wide"><span>商品</span><select value={productIndex} onChange={e => setProductIndex(Number(e.target.value))}>{products.map((item, index) => <option value={index} key={item.name}>{item.name}（倍率{item.multiplier}倍・呼値{item.tick}円）</option>)}</select></label>
      <label><span>口座資金（円）</span><input type="number" min="0" step="10000" value={funds} onChange={e => setFunds(Number(e.target.value))} /></label>
      <label><span>1枚の必要証拠金（円）</span><input type="number" min="0" step="1000" value={marginPerLot} onChange={e => setMarginPerLot(Number(e.target.value))} /><small>取引画面の最新額を入力</small></label>
      <label><span>枚数</span><input type="number" min="0" step="1" value={lots} onChange={e => setLots(Number(e.target.value))} /></label>
      <label><span>残しておく資金（円）</span><input type="number" min="0" step="10000" value={reserve} onChange={e => setReserve(Number(e.target.value))} /><small>生活資金や追加余力など、計算に使わない額</small></label>
    </div></section>
    <section className="calculator-result"><div className="result-head"><span>ESTIMATE</span><h2>値動きへの余力</h2></div><div className="total-cost"><strong>{yen.format(result.adversePoints)}</strong><span>円の逆行</span></div>
      <p>余力：約{yen.format(result.buffer)}円</p><p>換算：約{yen.format(result.adverseTicks)}ティック</p><p>必要証拠金合計：約{yen.format(result.requiredMargin)}円</p><p>証拠金＋残す資金：約{yen.format(result.requiredTotal)}円</p><p>1円の損益：約{yen.format(result.lossPerPoint)}円</p><p>1ティック損益：約{yen.format(result.lossPerTick)}円</p>
      {result.shortfall > 0 && <p><strong>入力時点で約{yen.format(result.shortfall)}円不足しています。</strong></p>}
    </section>
  </div></div>;
}
