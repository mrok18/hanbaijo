'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

const LEVERAGES = [25, 10, 5, 1] as const;
const LOSSCUT_RATES = [50, 60, 70, 80, 90] as const;

export default function Page() {
  const [rate, setRate] = useState(150);
  const [units, setUnits] = useState(1000);
  const [leverage, setLeverage] = useState(25);
  const [accountAssets, setAccountAssets] = useState(10000);
  const [unrealizedPl, setUnrealizedPl] = useState(0);
  const [losscutRate, setLosscutRate] = useState(50);
  const result = useMemo(() => {
    const notional = Math.max(0, rate) * Math.max(0, units);
    const requiredMargin = leverage > 0 ? notional / leverage : 0;
    const netAssets = accountAssets + unrealizedPl;
    const maintenanceRate = requiredMargin > 0 ? netAssets / requiredMargin * 100 : 0;
    const marginCallBuffer = netAssets - requiredMargin;
    const losscutBuffer = netAssets - requiredMargin * losscutRate / 100;
    return { notional, requiredMargin, netAssets, maintenanceRate, marginCallBuffer, losscutBuffer };
  }, [rate, units, leverage, accountAssets, unrealizedPl, losscutRate]);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 });
  const pct = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 1 });
  const status = result.maintenanceRate < losscutRate ? 'ロスカット水準を下回る試算' : result.maintenanceRate < 100 ? '追証判定水準を下回る試算' : result.maintenanceRate < 120 ? 'プレアラート水準を下回る試算' : '120％以上の試算';

  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">MATSUI FX MARGIN CALCULATOR</p><h1>FX証拠金シミュレーションを、<br /><em>必要証拠金と維持率で確認。</em></h1><p className="lede">松井証券 MATSUI FXの証拠金シミュレーションを、レート・取引数量・レバレッジコース・口座資産・評価損益から試算します。必要証拠金、維持率、追証100％とロスカット率までの余力を同じ画面で確認できます。</p><div className="calculator-proof"><span>1通貨から入力可能</span><span>4つのレバレッジコース</span><span>ロスカット率50～90％</span><span>公式式：レート×数量×証拠金率</span><span>2026年9月14日確認</span><span>入力は端末内で計算</span></div></header>
    <div className="calculator-shell"><div className="calculator-grid"><section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>口座・建玉条件</h2></div></div><div className="field-grid">
      <label><span>現在レート（円）</span><input type="number" min="0" step="0.001" value={rate} onChange={e => setRate(Number(e.target.value))} /><small>円換算できる通貨ペアを想定</small></label>
      <label><span>取引数量（通貨）</span><input type="number" min="0" step="1" value={units} onChange={e => setUnits(Number(e.target.value))} /></label>
      <label><span>レバレッジコース</span><select value={leverage} onChange={e => setLeverage(Number(e.target.value))}>{LEVERAGES.map(value => <option key={value} value={value}>{value}倍（証拠金率{100 / value}％）</option>)}</select></label>
      <label><span>口座資産（円）</span><input type="number" step="100" value={accountAssets} onChange={e => setAccountAssets(Number(e.target.value))} /><small>評価損益を加える前の試算元本</small></label>
      <label><span>評価損益（円）</span><input type="number" step="100" value={unrealizedPl} onChange={e => setUnrealizedPl(Number(e.target.value))} /><small>評価損はマイナスで入力</small></label>
      <label><span>ロスカット率</span><select value={losscutRate} onChange={e => setLosscutRate(Number(e.target.value))}>{LOSSCUT_RATES.map(value => <option key={value} value={value}>{value}％</option>)}</select></label>
    </div></section><section className="calculator-result"><div className="result-head"><span>ESTIMATE</span><h2>リアルタイム維持率</h2></div><div className="total-cost"><strong>{pct.format(result.maintenanceRate)}</strong><span>％</span></div><p>{status}</p><p>取引金額：約{yen.format(result.notional)}円</p><p>必要証拠金：約{yen.format(result.requiredMargin)}円</p><p>評価損益反映後の資産：約{yen.format(result.netAssets)}円</p><p>維持率100％までの余力：約{yen.format(result.marginCallBuffer)}円</p><p>ロスカット率{losscutRate}％までの余力：約{yen.format(result.losscutBuffer)}円</p></section></div></div>
    <div className="callout"><strong>証拠金シミュレーションの基本式</strong><p>必要証拠金＝レート×取引数量×証拠金率、維持率＝純資産÷必要証拠金×100で計算します。このページは単一の円換算建玉・未約定注文なしの概算です。実際の松井証券公式画面では通貨ペア、全建玉、注文証拠金、端数処理などを反映するため、最終判定は公式画面を優先してください。</p></div>
    <nav className="calculator-proof" aria-label="計算根拠と関連記事"><Link href="/articles/matsui-fx-margin-call-losscut">追証とロスカットの違い</Link><Link href="/articles/matsui-fx-one-currency">1通貨の必要証拠金</Link><Link href="/fx/matsui">MATSUI FXコストシート</Link><a href="https://www.matsui.co.jp/fx/margin-sim/" target="_blank" rel="noopener noreferrer">松井証券公式シミュレーション</a></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算結果や掲載内容とは分けて表示しています。</p></section>
  </div>;
}
