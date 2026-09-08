'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

type QuoteCurrency = 'JPY' | 'USD' | 'EUR' | 'GBP';

export default function Page() {
  const [units, setUnits] = useState(10000);
  const [quoteCurrency, setQuoteCurrency] = useState<QuoteCurrency>('JPY');
  const [conversionRate, setConversionRate] = useState(150);
  const [movePips, setMovePips] = useState(10);
  const [spreadPips, setSpreadPips] = useState(0.2);
  const result = useMemo(() => {
    const quantity = Math.max(0, units);
    const pipSize = quoteCurrency === 'JPY' ? 0.01 : 0.0001;
    const quoteToYen = quoteCurrency === 'JPY' ? 1 : Math.max(0, conversionRate);
    const pipValueQuote = quantity * pipSize;
    const pipValueYen = pipValueQuote * quoteToYen;
    const moveValue = pipValueYen * Math.max(0, movePips);
    const spreadCost = pipValueYen * Math.max(0, spreadPips);
    return { pipSize, pipValueQuote, pipValueYen, moveValue, spreadCost, net: moveValue - spreadCost };
  }, [units, quoteCurrency, conversionRate, movePips, spreadPips]);
  const number = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 4 });

  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">FX PIP VALUE CALCULATOR</p><h1>1pipsを、<br /><em>自分の数量の円損益へ。</em></h1><p className="lede">取引数量と通貨ペア右側の決済通貨から、1pipsあたりの損益を計算します。円絡み以外は決済通貨の円換算レートを使い、指定した値幅とスプレッドも円で確認できます。</p><div className="calculator-proof"><span>円絡み・ドルストレート対応</span><span>1通貨から入力可能</span><span>スプレッドを円換算</span><span>入力は端末内で計算</span></div></header>
    <div className="calculator-shell"><div className="calculator-grid"><section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>通貨ペア・数量</h2></div></div><div className="field-grid">
      <label><span>取引数量（通貨）</span><input type="number" min="0" step="1" value={units} onChange={e => setUnits(Number(e.target.value))} /></label>
      <label><span>通貨ペア右側の通貨</span><select value={quoteCurrency} onChange={e => setQuoteCurrency(e.target.value as QuoteCurrency)}><option value="JPY">JPY（例：USD/JPY）</option><option value="USD">USD（例：EUR/USD）</option><option value="EUR">EUR（例：GBP/EUR）</option><option value="GBP">GBP（例：EUR/GBP）</option></select></label>
      {quoteCurrency !== 'JPY' && <label><span>1{quoteCurrency}の円換算レート</span><input type="number" min="0" step="0.001" value={conversionRate} onChange={e => setConversionRate(Number(e.target.value))} /><small>{quoteCurrency}/JPYの現在値を入力</small></label>}
      <label><span>値幅（pips）</span><input type="number" min="0" step="0.1" value={movePips} onChange={e => setMovePips(Number(e.target.value))} /></label>
      <label><span>スプレッド（pips）</span><input type="number" min="0" step="0.1" value={spreadPips} onChange={e => setSpreadPips(Number(e.target.value))} /></label>
    </div></section><section className="calculator-result"><div className="result-head"><span>PIP VALUE</span><h2>1pipsあたりの損益</h2></div><div className="total-cost"><strong>{number.format(result.pipValueYen)}</strong><span>円</span></div><p>1pips＝{result.pipSize}{quoteCurrency}</p><p>決済通貨では約{number.format(result.pipValueQuote)}{quoteCurrency}</p><p>{number.format(movePips)}pipsの値幅損益：約{number.format(result.moveValue)}円</p><p>スプレッド相当額：約{number.format(result.spreadCost)}円</p><p>有利に動いた場合の差引額：約{number.format(result.net)}円</p></section></div></div>
    <div className="callout"><strong>pipsの桁と円換算レートを確認</strong><p>一般的な表示桁を使った概算です。円絡みは1pips＝0.01円、円以外を決済通貨とするペアは1pips＝0.0001決済通貨として計算します。銘柄ごとの呼値、表示桁、取引単位はFX会社の取引画面を優先してください。</p></div>
    <nav className="calculator-proof" aria-label="関連記事"><Link href="/articles/fx-position-size-calculation">取引数量の決め方</Link><Link href="/tools/fx-position-size-calculator">許容損失から数量を逆算</Link><Link href="/articles/fx-spread-cost">スプレッドを円に直す</Link><Link href="/fx/minimum-trade-unit-comparison">最低取引単位を比較</Link></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算結果とは分けて表示しています。</p></section>
  </div>;
}
