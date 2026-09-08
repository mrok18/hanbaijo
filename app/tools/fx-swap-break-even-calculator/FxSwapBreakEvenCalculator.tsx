'use client';

import { useMemo, useState } from 'react';

export default function FxSwapBreakEvenCalculator() {
  const [units, setUnits] = useState(10000);
  const [spreadSen, setSpreadSen] = useState(0.2);
  const [otherCost, setOtherCost] = useState(0);
  const [swapPerTenThousand, setSwapPerTenThousand] = useState(150);
  const [creditedDays, setCreditedDays] = useState(30);

  const result = useMemo(() => {
    const quantity = Math.max(0, units);
    const spreadCost = Math.max(0, spreadSen) / 100 * quantity;
    const initialCost = spreadCost + Math.max(0, otherCost);
    const dailySwap = swapPerTenThousand * quantity / 10000;
    const totalSwap = dailySwap * Math.max(0, creditedDays);
    const net = totalSwap - initialCost;
    const breakEvenDays = dailySwap > 0 ? Math.ceil(initialCost / dailySwap) : null;
    return { spreadCost, initialCost, dailySwap, totalSwap, net, breakEvenDays };
  }, [units, spreadSen, otherCost, swapPerTenThousand, creditedDays]);

  const number = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });
  const money = (value: number) => `${value < 0 ? '-' : ''}¥${number.format(Math.abs(value))}`;

  return <div className="calculator-shell"><div className="calculator-grid">
    <section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>数量・コスト・付与条件</h2></div></div><div className="field-grid">
      <label><span>取引通貨数</span><input type="number" min="0" step="1" value={units} onChange={event => setUnits(Number(event.target.value))} /></label>
      <label><span>スプレッド（銭）</span><input type="number" min="0" step="0.1" value={spreadSen} onChange={event => setSpreadSen(Number(event.target.value))} /><small>円絡み通貨ペア向け</small></label>
      <label><span>その他の往復コスト（円）</span><input type="number" min="0" step="1" value={otherCost} onChange={event => setOtherCost(Number(event.target.value))} /></label>
      <label><span>1万通貨・1日分のスワップ（円）</span><input type="number" step="1" value={swapPerTenThousand} onChange={event => setSwapPerTenThousand(Number(event.target.value))} /><small>受取はプラス、支払はマイナス</small></label>
      <label><span>合計付与日数</span><input type="number" min="0" step="1" value={creditedDays} onChange={event => setCreditedDays(Number(event.target.value))} /><small>保有日数ではなくカレンダーの付与日数</small></label>
    </div></section>
    <section className="calculator-result"><div className="result-head"><span>BREAK-EVEN</span><h2>初期コスト回収日数</h2></div><div className="total-cost"><strong>{result.breakEvenDays === null ? '回収不可' : number.format(result.breakEvenDays)}</strong>{result.breakEvenDays !== null && <span>日分</span>}</div><p>スプレッド相当額：{money(result.spreadCost)}</p><p>初期コスト合計：{money(result.initialCost)}</p><p>換算した1日分スワップ：{money(result.dailySwap)}</p><p>{number.format(creditedDays)}日分のスワップ：{money(result.totalSwap)}</p><p>初期コスト差引後：{money(result.net)}</p><small>受取額が0円以下の場合、初期コストはスワップでは回収できません。</small></section>
  </div></div>;
}
