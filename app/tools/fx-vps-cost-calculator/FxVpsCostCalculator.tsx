'use client';

import { useMemo, useState } from 'react';

export default function FxVpsCostCalculator() {
  const [vpsMonthly, setVpsMonthly] = useState(1587);
  const [renewalMonthly, setRenewalMonthly] = useState(2208);
  const [rdsMonthly, setRdsMonthly] = useState(1320);
  const [rdsUsers, setRdsUsers] = useState(1);
  const [monthlyTrades, setMonthlyTrades] = useState(100);
  const [pcWatts, setPcWatts] = useState(50);
  const [electricityRate, setElectricityRate] = useState(31);
  const result = useMemo(() => {
    const rds = Math.max(0, rdsMonthly) * Math.max(0, rdsUsers);
    const firstMonth = Math.max(0, vpsMonthly) + rds;
    const renewalMonth = Math.max(0, renewalMonthly) + rds;
    const trades = Math.max(0, monthlyTrades);
    const pcElectricity = Math.max(0, pcWatts) / 1000 * 24 * 30 * Math.max(0, electricityRate);
    return { firstMonth, renewalMonth, firstYear: firstMonth * 12, renewalYear: renewalMonth * 12, perTrade: trades ? firstMonth / trades : 0, pcElectricity, difference: firstMonth - pcElectricity };
  }, [vpsMonthly, renewalMonthly, rdsMonthly, rdsUsers, monthlyTrades, pcWatts, electricityRate]);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 1 });

  return <div className="calculator-shell"><div className="calculator-grid"><section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>インフラ条件</h2></div></div><div className="field-grid">
    <label><span>契約時VPS月額換算（円）</span><input type="number" min="0" step="1" value={vpsMonthly} onChange={e => setVpsMonthly(Number(e.target.value))} /></label>
    <label><span>更新後VPS月額換算（円）</span><input type="number" min="0" step="1" value={renewalMonthly} onChange={e => setRenewalMonthly(Number(e.target.value))} /></label>
    <label><span>RDS月額/人（円）</span><input type="number" min="0" step="1" value={rdsMonthly} onChange={e => setRdsMonthly(Number(e.target.value))} /></label>
    <label><span>RDS利用人数</span><input type="number" min="0" step="1" value={rdsUsers} onChange={e => setRdsUsers(Number(e.target.value))} /></label>
    <label><span>月間の往復回数</span><input type="number" min="0" step="1" value={monthlyTrades} onChange={e => setMonthlyTrades(Number(e.target.value))} /></label>
    <label><span>自宅PC消費電力（W）</span><input type="number" min="0" step="1" value={pcWatts} onChange={e => setPcWatts(Number(e.target.value))} /></label>
    <label className="wide"><span>電力量単価（円/kWh）</span><input type="number" min="0" step="0.1" value={electricityRate} onChange={e => setElectricityRate(Number(e.target.value))} /><small>自宅PCは24時間×30日稼働として電気代だけを概算</small></label>
  </div></section><section className="calculator-result"><div className="result-head"><span>MONTHLY INFRASTRUCTURE COST</span><h2>契約時の月額目安</h2></div><div className="total-cost"><strong>{yen.format(result.firstMonth)}</strong><span>円</span></div><p>契約時の年額換算：約{yen.format(result.firstYear)}円</p><p>更新後の月額：約{yen.format(result.renewalMonth)}円</p><p>更新後の年額換算：約{yen.format(result.renewalYear)}円</p><p>1往復あたり配賦：約{yen.format(result.perTrade)}円</p><p>自宅PCの月間電気代：約{yen.format(result.pcElectricity)}円</p><p>VPSとの差額：約{yen.format(result.difference)}円/月</p></section></div></div>;
}
