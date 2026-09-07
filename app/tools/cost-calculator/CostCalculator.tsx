'use client';

import { useMemo, useState } from 'react';
import { calculateRoundTripCost, type RoundTripCostInput } from '@/lib/market-data/cost';

type PresetId = 'crypto' | 'fx' | 'cfd' | 'domestic-stock' | 'us-stock';

interface Preset {
  id: PresetId;
  label: string;
  note: string;
  values: RoundTripCostInput;
}

const PRESETS: readonly Preset[] = [
  {
    id: 'crypto',
    label: '暗号資産',
    note: '現物を買って売る例',
    values: { notionalYen: 1_000_000, spreadPct: 0.2, tradingFeePct: 0, fixedFeesYen: 0, annualHoldingRatePct: 0, holdingDays: 0, fxConversionPct: 0 },
  },
  {
    id: 'fx',
    label: 'FX',
    note: 'USD/JPY 0.2銭相当の例',
    values: { notionalYen: 1_000_000, spreadPct: 0.0013, tradingFeePct: 0, fixedFeesYen: 0, annualHoldingRatePct: 0, holdingDays: 0, fxConversionPct: 0 },
  },
  {
    id: 'cfd',
    label: 'CFD',
    note: '30日間保有する例',
    values: { notionalYen: 1_000_000, spreadPct: 0.08, tradingFeePct: 0, fixedFeesYen: 0, annualHoldingRatePct: 3, holdingDays: 30, fxConversionPct: 0 },
  },
  {
    id: 'domestic-stock',
    label: '国内株',
    note: '現物売買の例',
    values: { notionalYen: 1_000_000, spreadPct: 0.05, tradingFeePct: 0.1, fixedFeesYen: 0, annualHoldingRatePct: 0, holdingDays: 0, fxConversionPct: 0 },
  },
  {
    id: 'us-stock',
    label: '米国株',
    note: '円から購入する例',
    values: { notionalYen: 1_000_000, spreadPct: 0.05, tradingFeePct: 0.45, fixedFeesYen: 0, annualHoldingRatePct: 0, holdingDays: 0, fxConversionPct: 0.5 },
  },
] as const;

const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 });
const pct = new Intl.NumberFormat('ja-JP', { minimumFractionDigits: 2, maximumFractionDigits: 4 });

const FIELDS: readonly {
  key: keyof RoundTripCostInput;
  label: string;
  unit: string;
  step: number;
  help: string;
}[] = [
  { key: 'notionalYen', label: '取引金額', unit: '円', step: 10000, help: 'レバレッジではなく、実際の取引総額を入力' },
  { key: 'spreadPct', label: 'スプレッド', unit: '%', step: 0.0001, help: '例: USD/JPYが150円、0.2銭なら約0.0013%' },
  { key: 'tradingFeePct', label: '往復の取引手数料率', unit: '%', step: 0.01, help: '買付と売却の合計。無料なら0' },
  { key: 'fixedFeesYen', label: 'その他の固定費', unit: '円', step: 1, help: '入出金・送金など、今回含めたい固定額の合計' },
  { key: 'annualHoldingRatePct', label: '年間の保有コスト率', unit: '%', step: 0.1, help: '金利・価格調整額などの年率換算。なければ0' },
  { key: 'holdingDays', label: '保有日数', unit: '日', step: 1, help: '保有コストを計算する期間' },
  { key: 'fxConversionPct', label: '往復の為替コスト率', unit: '%', step: 0.01, help: '外貨商品の購入と円転にかかる合計。円建てなら0' },
] as const;

export default function CostCalculator() {
  const fxPreset = PRESETS.find((preset) => preset.id === 'fx')!;
  const [activePreset, setActivePreset] = useState<PresetId>('fx');
  const [input, setInput] = useState<RoundTripCostInput>({ ...fxPreset.values });

  const result = useMemo(() => calculateRoundTripCost(input), [input]);
  const hasNotional = input.notionalYen > 0;
  const rows = [
    { label: 'スプレッド', value: result.spreadYen, className: 'spread' },
    { label: '取引手数料・固定費', value: result.tradingFeeYen, className: 'fee' },
    { label: '保有コスト', value: result.holdingCostYen, className: 'holding' },
    { label: '為替コスト', value: result.fxConversionYen, className: 'fx' },
  ];

  function selectPreset(preset: Preset) {
    setActivePreset(preset.id);
    setInput({ ...preset.values });
  }

  function update(key: keyof RoundTripCostInput, raw: string) {
    const value = raw === '' ? 0 : Number(raw);
    setInput((current) => ({ ...current, [key]: Number.isFinite(value) ? Math.max(value, 0) : 0 }));
  }

  return (
    <div className="calculator-shell">
      <div className="preset-strip" aria-label="金融商品の入力例">
        {PRESETS.map((preset) => (
          <button
            type="button"
            key={preset.id}
            className={activePreset === preset.id ? 'active' : ''}
            aria-pressed={activePreset === preset.id}
            onClick={() => selectPreset(preset)}
          >
            <strong>{preset.label}</strong>
            <span>{preset.note}</span>
          </button>
        ))}
      </div>

      <div className="calculator-grid">
        <section className="calculator-inputs" aria-labelledby="calculator-input-title">
          <div className="calculator-panel-head">
            <div>
              <span>INPUT / 試算条件</span>
              <h2 id="calculator-input-title">あなたの取引条件</h2>
            </div>
            <b className="origin-badge estimated">試算値</b>
          </div>
          <div className="field-grid">
            {FIELDS.map((field) => (
              <label className={field.key === 'notionalYen' ? 'wide' : ''} key={field.key}>
                <span>{field.label}</span>
                <span className="number-input">
                  <input
                    type="number"
                    min="0"
                    step={field.step}
                    inputMode="decimal"
                    value={input[field.key]}
                    onChange={(event) => update(field.key, event.target.value)}
                  />
                  <b>{field.unit}</b>
                </span>
                <small>{field.help}</small>
              </label>
            ))}
          </div>
        </section>

        <section className="calculator-result" aria-live="polite" aria-labelledby="calculator-result-title">
          <div className="result-head">
            <span>ESTIMATED TOTAL</span>
            <h2 id="calculator-result-title">往復コスト概算</h2>
          </div>
          <div className="total-cost">
            <strong>{yen.format(Math.round(result.totalYen))}</strong><span>円</span>
          </div>
          <div className="effective-rate">
            取引金額に対して <strong>{hasNotional ? `${pct.format(result.totalPct)}%` : '—'}</strong>
          </div>
          <div className="cost-bars">
            {rows.map((row) => {
              const width = result.totalYen > 0 ? row.value / result.totalYen * 100 : 0;
              return (
                <div className="cost-row" key={row.label}>
                  <div><span>{row.label}</span><strong>{yen.format(Math.round(row.value))}円</strong></div>
                  <i><b className={row.className} style={{ width: `${width}%` }} /></i>
                </div>
              );
            })}
          </div>
          <div className="break-even">
            <span>コスト回収に必要な値動き</span>
            <strong>{hasNotional ? `約 ${pct.format(result.totalPct)}%` : '—'}</strong>
          </div>
          <p>計算式: 取引金額 × 各コスト率 ＋ 固定費。保有コストは365日で日割りしています。</p>
        </section>
      </div>
    </div>
  );
}
