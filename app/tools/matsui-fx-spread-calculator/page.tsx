'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export default function Page() {
  const [units, setUnits] = useState(1000);
  const [spreadSen, setSpreadSen] = useState(0.1);
  const [roundTrips, setRoundTrips] = useState(1);
  const [movePips, setMovePips] = useState(10);
  const result = useMemo(() => {
    const quantity = Math.max(0, units);
    const trades = Math.max(0, roundTrips);
    const spreadCost = Math.max(0, spreadSen) / 100 * quantity * trades;
    const gross = Math.max(0, movePips) * 0.01 * quantity * trades;
    return { spreadCost, gross, net: gross - spreadCost, perTrade: trades ? spreadCost / trades : 0 };
  }, [units, spreadSen, roundTrips, movePips]);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });

  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">MATSUI FX SPREAD CALCULATOR</p><h1>0.1銭を、<br /><em>実際の円負担へ。</em></h1><p className="lede">取引通貨数と往復回数を掛け、スプレッド相当額を円換算します。有利に動いたpipsを入力すると、価格差コストを引いた概算損益も確認できます。</p><div className="calculator-proof"><span>1通貨から入力可能</span><span>0.1銭・0.2銭を比較</span><span>複数回取引を合算</span><span>入力は端末内で計算</span></div></header>
    <div className="calculator-shell"><div className="calculator-grid"><section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>取引条件</h2></div></div><div className="field-grid">
      <label><span>取引通貨数</span><input type="number" min="0" step="1" value={units} onChange={e => setUnits(Number(e.target.value))} /></label>
      <label><span>往復回数</span><input type="number" min="0" step="1" value={roundTrips} onChange={e => setRoundTrips(Number(e.target.value))} /></label>
      <label><span>スプレッド（銭）</span><input type="number" min="0" step="0.1" value={spreadSen} onChange={e => setSpreadSen(Number(e.target.value))} /><small>取引画面で提示された値を入力</small></label>
      <label><span>有利に動いた値幅（pips）</span><input type="number" min="0" step="0.1" value={movePips} onChange={e => setMovePips(Number(e.target.value))} /><small>円絡み通貨ペアは1pips＝0.01円で計算</small></label>
    </div></section><section className="calculator-result"><div className="result-head"><span>ESTIMATE</span><h2>スプレッド相当額</h2></div><div className="total-cost"><strong>{yen.format(result.spreadCost)}</strong><span>円</span></div><p>1往復あたり：約{yen.format(result.perTrade)}円</p><p>値幅による損益：約{yen.format(result.gross)}円</p><p>コスト差引後：約{yen.format(result.net)}円</p><p>計算式：スプレッド（銭）÷100 × 通貨数 × 往復回数</p></section></div></div>
    <div className="callout"><strong>提示値は変動します</strong><p>スプレッドは手数料として別途徴収される金額ではなく、買値と売値の差を円換算した概算です。縮小スプレッドには時間、数量、注文方法の条件があり、相場急変や流動性低下時には原則固定の対象外となる場合があります。</p></div>
    <nav className="calculator-proof" aria-label="計算根拠と関連記事"><Link href="/articles/matsui-fx-spread-rules">0.1銭の適用条件</Link><Link href="/articles/matsui-fx-one-currency">1通貨の必要証拠金</Link><Link href="/fx/matsui">MATSUI FXコストシート</Link><a href="https://www.matsui.co.jp/fx/spread/" target="_blank" rel="noopener noreferrer">公式スプレッド一覧</a></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section>
  </div>;
}
