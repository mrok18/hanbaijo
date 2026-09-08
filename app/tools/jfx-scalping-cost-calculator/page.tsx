'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

const presets = [
  { label: '米ドル/円 9時〜翌3時（0.2銭）', spread: 0.2 },
  { label: '米ドル/円 3時〜9時（5.9銭）', spread: 5.9 },
  { label: '手入力', spread: 0.2 },
] as const;

export default function Page() {
  const [presetIndex, setPresetIndex] = useState(0);
  const [units, setUnits] = useState(10000);
  const [roundTrips, setRoundTrips] = useState(10);
  const [customSpread, setCustomSpread] = useState(0.2);
  const [slippageSen, setSlippageSen] = useState(0);
  const spread = presetIndex === 2 ? customSpread : presets[presetIndex].spread;
  const result = useMemo(() => {
    const quantity = Math.max(0, units);
    const trades = Math.max(0, roundTrips);
    const spreadPerTrade = Math.max(0, spread) / 100 * quantity;
    const slippagePerTrade = Math.max(0, slippageSen) / 100 * quantity;
    const perTrade = spreadPerTrade + slippagePerTrade;
    return { spreadPerTrade, slippagePerTrade, perTrade, total: perTrade * trades, breakEvenPips: (Math.max(0, spread) + Math.max(0, slippageSen)) / 10 };
  }, [units, roundTrips, spread, slippageSen]);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });

  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">JFX SCALPING COST CALCULATOR</p><h1>取引回数まで含めて、<br /><em>短期売買コストを円換算。</em></h1><p className="lede">JFX MATRIX TRADERの米ドル/円について、時間帯別の公称スプレッド、取引数量、往復回数、想定スリッページから累積コストを概算します。</p><div className="calculator-proof"><span>時間帯別プリセット</span><span>1,000通貨・1万通貨対応</span><span>スリッページを別表示</span><span>入力内容は保存しません</span></div></header>
    <div className="calculator-shell"><div className="calculator-grid"><section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>短期売買の条件</h2></div></div><div className="field-grid">
      <label className="wide"><span>スプレッド条件</span><select value={presetIndex} onChange={e => { const index = Number(e.target.value); setPresetIndex(index); if (index < 2) setCustomSpread(presets[index].spread); }}>{presets.map((item, index) => <option value={index} key={item.label}>{item.label}</option>)}</select></label>
      <label><span>取引通貨数</span><input type="number" min="0" step="1000" value={units} onChange={e => setUnits(Number(e.target.value))} /></label>
      <label><span>往復回数</span><input type="number" min="0" step="1" value={roundTrips} onChange={e => setRoundTrips(Number(e.target.value))} /></label>
      <label><span>スプレッド（銭）</span><input type="number" min="0" step="0.1" value={spread} disabled={presetIndex !== 2} onChange={e => setCustomSpread(Number(e.target.value))} /><small>手入力を選ぶと変更できます</small></label>
      <label><span>片道の想定スリッページ（銭）</span><input type="number" min="0" step="0.1" value={slippageSen} onChange={e => setSlippageSen(Number(e.target.value))} /><small>1往復につき1回分として概算</small></label>
    </div></section><section className="calculator-result"><div className="result-head"><span>TOTAL COST</span><h2>累積コストの目安</h2></div><div className="total-cost"><strong>{yen.format(result.total)}</strong><span>円</span></div><p>1往復のスプレッド相当額：約{yen.format(result.spreadPerTrade)}円</p><p>1往復の想定約定差：約{yen.format(result.slippagePerTrade)}円</p><p>1往復の合計：約{yen.format(result.perTrade)}円</p><p>回収に必要な値幅：約{yen.format(result.breakEvenPips)}pips</p><p>計算式：（スプレッド＋想定約定差）÷100 × 通貨数 × 往復回数</p></section></div></div>
    <div className="callout"><strong>公称値と実際の約定コストは異なります</strong><p>米ドル/円0.2銭は9時〜翌3時、5.9銭は3時〜9時の公式掲載値で、原則固定・例外ありです。相場急変、指標発表、流動性低下、大口注文では提示幅や約定価格が変わる可能性があります。計算結果は利益や約定価格を保証しません。</p></div>
    <nav className="calculator-proof" aria-label="計算根拠と関連記事"><Link href="/articles/jfx-scalping-spread-cost">JFX短期売買コスト解説</Link><Link href="/articles/jfx-losscut-margin-shortage">JFXのロスカットと不足金</Link><Link href="/fx/jfx">JFX取引条件一覧</Link><Link href="/tools/fx-pip-value-calculator">pips損益計算</Link><a href="https://www.jfx.co.jp/trading_rule/spread/" target="_blank" rel="noopener noreferrer">JFX公式スプレッド</a></nav>
  </div>;
}
