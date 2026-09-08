'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

const PRODUCTS = [
  { name: '原油', contractUnit: 10, unitLabel: '10単位（10バレル）' },
  { name: '金スポット', contractUnit: 1, unitLabel: '1単位（1トロイオンス）' },
  { name: '銀スポット', contractUnit: 10, unitLabel: '10単位（10トロイオンス）' },
  { name: '天然ガス', contractUnit: 100, unitLabel: '100単位（100MMBtu）' },
  { name: 'コーン', contractUnit: 1, unitLabel: '1単位（100ブッシェル）' },
  { name: '大豆', contractUnit: 1, unitLabel: '1単位（100ブッシェル）' },
  { name: '小麦', contractUnit: 1, unitLabel: '1単位（100ブッシェル）' },
  { name: '生牛', contractUnit: 1, unitLabel: '1単位（100ポンド）' },
  { name: '赤身豚肉', contractUnit: 1, unitLabel: '1単位（100ポンド）' },
  { name: '綿花', contractUnit: 1, unitLabel: '1単位（100ポンド）' },
  { name: '砂糖', contractUnit: 10, unitLabel: '10単位（1,000ポンド）' },
  { name: 'コーヒー', contractUnit: 1, unitLabel: '1単位（100ポンド）' },
  { name: 'ココア', contractUnit: 0.1, unitLabel: '0.1単位（0.1メトリックトン）' },
  { name: 'オレンジジュース', contractUnit: 0.1, unitLabel: '0.1単位（10ポンド）' },
] as const;

export default function Page() {
  const [productIndex, setProductIndex] = useState(0);
  const [price, setPrice] = useState(100);
  const [lots, setLots] = useState(1);
  const [usdJpy, setUsdJpy] = useState(150);
  const product = PRODUCTS[productIndex];
  const result = useMemo(() => {
    const notional = Math.max(0, price) * product.contractUnit * Math.max(0, lots) * Math.max(0, usdJpy);
    return {
      notional,
      margin: notional * 0.05,
      oneDollarMove: product.contractUnit * Math.max(0, lots) * Math.max(0, usdJpy),
    };
  }, [price, lots, usdJpy, product]);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });

  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">CFD MARGIN CALCULATOR</p><h1>商品CFDの必要証拠金を<br /><em>銘柄単位で計算。</em></h1><p className="lede">DMM CFDの商品14銘柄の公式取引単位を使い、価格・Lot数・米ドル円から概算します。</p></header>
    <div className="calculator-shell"><section className="calculator-inputs"><div className="field-grid">
      <label className="wide"><span>銘柄</span><select value={productIndex} onChange={e => setProductIndex(Number(e.target.value))}>{PRODUCTS.map((item, index) => <option value={index} key={item.name}>{item.name}（1Lot＝{item.unitLabel}）</option>)}</select></label>
      <label><span>商品価格（米ドル・画面表示値）</span><input type="number" min="0" value={price} onChange={e => setPrice(Number(e.target.value))} /></label>
      <label><span>Lot数</span><input type="number" min="1" step="1" value={lots} onChange={e => setLots(Number(e.target.value))} /></label>
      <label><span>米ドル円</span><input type="number" min="0" value={usdJpy} onChange={e => setUsdJpy(Number(e.target.value))} /></label>
    </div></section><section className="calculator-result"><div className="result-head"><span>ESTIMATE</span><h2>必要証拠金概算</h2></div><div className="total-cost"><strong>{yen.format(result.margin)}</strong><span>円</span></div><p>取引総額：約{yen.format(result.notional)}円</p><p>表示価格が1.0ドル動く場合：約{yen.format(result.oneDollarMove)}円／保有Lot</p><p>計算式：価格 × 公式取引単位 × Lot数 × 米ドル円 × 5％</p></section></div>
    <div className="callout"><strong>物理量を二重に掛けない</strong><p>コーンの1Lot＝1単位（100ブッシェル）のような銘柄は、公式計算式へ掛ける取引単位が1です。100をさらに掛けません。実際の必要証拠金は取引画面を優先してください。</p></div>
    <p><Link href="/articles/dmm-cfd-tick-value-profit-loss">14銘柄の1ティック損益を見る →</Link></p>
    <p><Link href="/tools/dmm-cfd-tick-value-calculator">14銘柄の値動き損益を計算する →</Link></p>
    <p><Link href="/articles/dmm-cfd-commodity-lot-list">14銘柄の取引単位と公式資料を見る →</Link></p>
    <section aria-label="DMM CFDの公式情報"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /></section>
  </div>;
}
