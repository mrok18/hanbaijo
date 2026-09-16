'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export default function Page() {
  const [profitPoints, setProfitPoints] = useState(100);
  const [lossPoints, setLossPoints] = useState(50);
  const [valuePerPoint, setValuePerPoint] = useState(100);
  const [roundTripCost, setRoundTripCost] = useState(100);
  const [winRate, setWinRate] = useState(40);
  const [trades, setTrades] = useState(100);
  const result = useMemo(() => {
    const grossWin = Math.max(0, profitPoints) * Math.max(0, valuePerPoint);
    const grossLoss = Math.max(0, lossPoints) * Math.max(0, valuePerPoint);
    const cost = Math.max(0, roundTripCost);
    const netWin = grossWin - cost;
    const netLoss = grossLoss + cost;
    const riskReward = netLoss > 0 ? netWin / netLoss : 0;
    const recoveryRate = netLoss > 0 ? netWin / netLoss * 100 : 0;
    const breakEvenWinRate = netWin + netLoss > 0 ? netLoss / (netWin + netLoss) * 100 : 0;
    const probability = Math.min(100, Math.max(0, winRate)) / 100;
    const expectancy = probability * netWin - (1 - probability) * netLoss;
    const total = expectancy * Math.max(0, trades);
    return { grossWin, grossLoss, netWin, netLoss, riskReward, recoveryRate, breakEvenWinRate, expectancy, total };
  }, [profitPoints, lossPoints, valuePerPoint, roundTripCost, winRate, trades]);
  const number = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });

  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">RECOVERY RATE CALCULATOR</p><h1>回収率を計算して<br /><em>損益比・コストを見る。</em></h1><p className="lede">回収率（利益÷損失の比率）を計算し、マーチンゲール法の取引額と連敗時の累積額も確認できます。利確幅と損切り幅を円損益へ換算し、往復コストを差し引いたリスクリワード比、損益分岐勝率、1回・複数回の期待値を試算します。</p><div className="calculator-proof"><span>FX・CFD・株・先物に対応</span><span>往復コストを反映</span><span>回収率を自動計算</span><span>入力は端末内で計算</span></div></header>
    <section aria-labelledby="martingale-heading"><h2 id="martingale-heading">マーチンゲール法の計算式</h2><p>初回の取引額をB円、連敗回数をn回とすると、次回の取引額はB×2<sup>n</sup>、連敗分の累積額はB×(2<sup>n</sup>−1)です。初回1,000円なら、3連敗後の次回は8,000円、3回分の累積は7,000円になります。</p><div className="formula-box"><code>次回の取引額 ＝ 初回額 × 2<sup>連敗回数</sup><br />連敗分の累積額 ＝ 初回額 ×（2<sup>連敗回数</sup>−1）</code><small>倍額を続けるほど必要資金は指数的に増えるため、証拠金・注文上限・スリッページを含めて継続可能性を確認します。</small></div><p>この方式を推奨するものではありません。投資は元本割れの可能性があるため、<a href="https://www.jsda.or.jp/about/hatten/inv_alerts/alearts02/alearts02-3.html" target="_blank" rel="noopener noreferrer">日本証券業協会の投資リスクに関する注意</a>も確認し、固定した利確・損切り幅とコストの損益分岐勝率を下の計算機で併せて試算してください。</p></section>
    <div className="calculator-shell"><div className="calculator-grid"><section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>利確・損切り条件</h2></div></div><div className="field-grid">
      <label><span>利確幅（pips・円・ポイント）</span><input type="number" min="0" step="0.1" value={profitPoints} onChange={e => setProfitPoints(Number(e.target.value))} /></label>
      <label><span>損切り幅（同じ単位）</span><input type="number" min="0" step="0.1" value={lossPoints} onChange={e => setLossPoints(Number(e.target.value))} /></label>
      <label><span>1単位動いた損益（円）</span><input type="number" min="0" step="0.01" value={valuePerPoint} onChange={e => setValuePerPoint(Number(e.target.value))} /><small>FXなら1pips、株なら1円、先物なら1ポイント</small></label>
      <label><span>1往復の取引コスト（円）</span><input type="number" min="0" step="1" value={roundTripCost} onChange={e => setRoundTripCost(Number(e.target.value))} /><small>手数料・スプレッド等の合計</small></label>
      <label><span>想定勝率（％）</span><input type="number" min="0" max="100" step="0.1" value={winRate} onChange={e => setWinRate(Number(e.target.value))} /></label>
      <label><span>想定取引回数</span><input type="number" min="0" step="1" value={trades} onChange={e => setTrades(Number(e.target.value))} /></label>
    </div></section><section className="calculator-result"><div className="result-head"><span>BREAK-EVEN</span><h2>損益分岐勝率</h2></div><div className="total-cost"><strong>{number.format(result.breakEvenWinRate)}</strong><span>％</span></div><p>回収率（利益÷損失の目安）：{number.format(result.recoveryRate)}％</p><p>コスト反映後の損益比：1：{number.format(result.riskReward)}</p><p>勝ち1回：約{number.format(result.netWin)}円</p><p>負け1回：約-{number.format(result.netLoss)}円</p><p>1回あたり期待値：約{number.format(result.expectancy)}円</p><p>{number.format(trades)}回の単純期待値：約{number.format(result.total)}円</p></section></div></div>
    <div className="callout"><strong>期待値は将来の利益予測ではありません</strong><p>入力した勝率と同じ結果が続くと仮定した数学的な平均値です。実際には連敗、スリッページ、コスト変動、相場環境による成績変化があります。過去の勝率を使う場合も、取引回数と検証期間を確認してください。</p></div>
    <nav className="calculator-proof" aria-label="関連ツール"><Link href="/articles/risk-reward-break-even-win-rate">損益分岐勝率の計算方法</Link><Link href="/tools/fx-pip-value-calculator">1pipsの円損益を計算</Link><Link href="/tools/fx-position-size-calculator">許容損失から数量を逆算</Link><Link href="/tools/cost-calculator">往復コストを計算</Link><Link href="/articles/fx-position-size-calculation">取引数量の決め方</Link></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算結果とは分けて表示しています。</p></section>
  </div>;
}
