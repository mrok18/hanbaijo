'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

const PRODUCTS = {
  jpn225: { name: '日本225', group: 'Index', unit: 10, leverage: 10, tick: 0.1, currency: 'JPY', defaultFx: 1 },
  dow: { name: '米国NYダウ30', group: 'Index', unit: 0.1, leverage: 10, tick: 0.1, currency: 'USD', defaultFx: 150 },
  nasdaq: { name: '米国ナスダック100', group: 'Index', unit: 1, leverage: 10, tick: 0.1, currency: 'USD', defaultFx: 150 },
  sp500: { name: '米国S&P500', group: 'Index', unit: 1, leverage: 10, tick: 0.1, currency: 'USD', defaultFx: 150 },
  china: { name: '中国A50', group: 'Index', unit: 0.1, leverage: 10, tick: 1, currency: 'USD', defaultFx: 150 },
  uk: { name: 'イギリス100', group: 'Index', unit: 0.1, leverage: 10, tick: 0.1, currency: 'GBP', defaultFx: 200 },
  germany: { name: 'ドイツ40', group: 'Index', unit: 0.1, leverage: 10, tick: 0.1, currency: 'EUR', defaultFx: 175 },
  euro: { name: 'ユーロ50', group: 'Index', unit: 0.1, leverage: 10, tick: 0.1, currency: 'EUR', defaultFx: 175 },
  oil: { name: '原油', group: 'Commodity', unit: 10, leverage: 20, tick: 0.001, currency: 'USD', defaultFx: 150 },
  gold: { name: '金スポット', group: 'Commodity', unit: 1, leverage: 20, tick: 0.1, currency: 'USD', defaultFx: 150 },
  silver: { name: '銀スポット', group: 'Commodity', unit: 10, leverage: 20, tick: 0.001, currency: 'USD', defaultFx: 150 },
  gas: { name: '天然ガス', group: 'Commodity', unit: 100, leverage: 20, tick: 0.001, currency: 'USD', defaultFx: 150 },
  corn: { name: 'コーン', group: 'Commodity', unit: 1, leverage: 20, tick: 0.1, currency: 'USD', defaultFx: 150 },
  soy: { name: '大豆', group: 'Commodity', unit: 1, leverage: 20, tick: 0.1, currency: 'USD', defaultFx: 150 },
  wheat: { name: '小麦', group: 'Commodity', unit: 1, leverage: 20, tick: 0.01, currency: 'USD', defaultFx: 150 },
  cattle: { name: '生牛', group: 'Commodity', unit: 1, leverage: 20, tick: 0.001, currency: 'USD', defaultFx: 150 },
  hogs: { name: '赤身豚肉', group: 'Commodity', unit: 1, leverage: 20, tick: 0.001, currency: 'USD', defaultFx: 150 },
  cotton: { name: '綿花', group: 'Commodity', unit: 1, leverage: 20, tick: 0.01, currency: 'USD', defaultFx: 150 },
  sugar: { name: '砂糖', group: 'Commodity', unit: 10, leverage: 20, tick: 0.01, currency: 'USD', defaultFx: 150 },
  coffee: { name: 'コーヒー', group: 'Commodity', unit: 1, leverage: 20, tick: 0.01, currency: 'USD', defaultFx: 150 },
  cocoa: { name: 'ココア', group: 'Commodity', unit: 0.1, leverage: 20, tick: 1, currency: 'USD', defaultFx: 150 },
  orange: { name: 'オレンジジュース', group: 'Commodity', unit: 0.1, leverage: 20, tick: 0.01, currency: 'USD', defaultFx: 150 },
} as const;

type ProductId = keyof typeof PRODUCTS;

function safe(value: number) { return Number.isFinite(value) ? Math.max(0, value) : 0; }

export default function DmmCfd22ProductsCalculator() {
  const [productId, setProductId] = useState<ProductId>('jpn225');
  const [price, setPrice] = useState<number | ''>('');
  const [lots, setLots] = useState(1);
  const [fxRate, setFxRate] = useState(1);
  const [accountFunds, setAccountFunds] = useState(100000);
  const product = PRODUCTS[productId];
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });

  const selectProduct = (next: ProductId) => {
    const selected = PRODUCTS[next];
    setProductId(next);
    setPrice('');
    setFxRate(selected.defaultFx);
  };

  const result = useMemo(() => {
    const p = safe(Number(price));
    const quantity = safe(lots);
    const rate = safe(fxRate);
    const notional = p * quantity * product.unit * rate;
    const margin = notional / product.leverage;
    const pointValue = quantity * product.unit * rate;
    const tickValue = pointValue * product.tick;
    const usage = safe(accountFunds) > 0 ? margin / safe(accountFunds) * 100 : 0;
    const remaining = safe(accountFunds) - margin;
    return { notional, margin, pointValue, tickValue, usage, remaining };
  }, [price, lots, fxRate, accountFunds, product]);

  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">DMM CFD / 22 PRODUCTS</p><h1>22銘柄の証拠金と値幅を、<br /><em>円で同時に確認。</em></h1><p className="lede">Index 8銘柄とCommodity 14銘柄の公式取引単位・呼値・レバレッジを反映します。画面の価格と対象通貨の円換算レートを入力してください。</p><div className="calculator-proof"><span>全22銘柄</span><span>Index 10倍</span><span>Commodity 20倍</span><span>入力内容は保存しません</span></div></header>
    <div className="calculator-shell"><div className="calculator-grid">
      <section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>銘柄と資金</h2></div></div><div className="field-grid">
        <label className="wide"><span>銘柄</span><select value={productId} onChange={e => selectProduct(e.target.value as ProductId)}>{Object.entries(PRODUCTS).map(([id, item]) => <option key={id} value={id}>{item.group}｜{item.name}</option>)}</select><small>1Lot＝{product.unit}単位・レバレッジ{product.leverage}倍</small></label>
        <label><span>画面の現在価格（{product.currency}）</span><input type="number" min="0" step={product.tick} placeholder="現在価格" value={price} onChange={e => setPrice(e.target.value === '' ? '' : Number(e.target.value))} /></label>
        <label><span>Lot数</span><input type="number" min="1" step="1" value={lots} onChange={e => setLots(Number(e.target.value))} /></label>
        <label><span>{product.currency}/JPY 円換算レート</span><input type="number" min={product.currency === 'JPY' ? '1' : '0'} step="0.001" value={fxRate} disabled={product.currency === 'JPY'} onChange={e => setFxRate(Number(e.target.value))} /><small>日本225は1で固定</small></label>
        <label><span>口座資金（円）</span><input type="number" min="0" step="10000" value={accountFunds} onChange={e => setAccountFunds(Number(e.target.value))} /></label>
      </div></section>
      <section className="calculator-result"><div className="result-head"><span>{product.group.toUpperCase()} / {product.name}</span><h2>{price === '' ? '現在価格を入力' : result.usage >= 100 ? '必要証拠金が資金以上' : result.usage >= 50 ? '資金使用率が高め' : '証拠金の概算'}</h2></div><div className="total-cost"><strong>{price === '' ? '—' : yen.format(result.margin)}</strong><span>円・必要証拠金</span></div>
        <p>想定元本：{price === '' ? '—' : `${yen.format(result.notional)}円`}</p>
        <p>表示価格1.0の値動き：{yen.format(result.pointValue)}円</p>
        <p>1ティック（{product.tick} {product.currency}）：{yen.format(result.tickValue)}円</p>
        <p>資金使用率：{price === '' ? '—' : `${yen.format(result.usage)}％`} ／ 証拠金差引後：{price === '' ? '—' : `${yen.format(result.remaining)}円`}</p>
      </section>
    </div></div>
    <div className="callout"><strong>必要証拠金は損失上限ではありません</strong><p>表示結果は現在価格を使った概算です。実際の必要額はリアルタイムで変動し、相場急変時には預けた証拠金を上回る損失が生じる可能性があります。</p></div>
    <nav className="calculator-proof" aria-label="計算根拠と関連記事"><Link href="/articles/dmm-cfd-index-vs-commodity">IndexとCommodityの比較</Link><Link href="/articles/dmm-cfd-margin-call-losscut">追証とロスカット</Link><a href="https://fx.dmm.com/cfd/service/outline/" target="_blank" rel="noopener noreferrer">Index公式仕様</a><a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">Commodity公式仕様</a></nav>
    <section aria-label="DMM CFDの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /></section><p className="affiliate-disclosure">上記はアクセストレードの提携広告です。広告報酬は入力値・計算式・結果に影響しません。</p>
  </div>;
}
