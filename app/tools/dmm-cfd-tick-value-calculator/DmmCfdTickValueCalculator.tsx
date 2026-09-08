'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

const PRODUCTS = {
  oil: { name: '原油', contractUnit: 10, unitLabel: '10単位（10バレル）', tick: 0.001 },
  gold: { name: '金スポット', contractUnit: 1, unitLabel: '1単位（1トロイオンス）', tick: 0.1 },
  silver: { name: '銀スポット', contractUnit: 10, unitLabel: '10単位（10トロイオンス）', tick: 0.001 },
  gas: { name: '天然ガス', contractUnit: 100, unitLabel: '100単位（100MMBtu）', tick: 0.001 },
  corn: { name: 'コーン', contractUnit: 1, unitLabel: '1単位（100ブッシェル）', tick: 0.1 },
  soy: { name: '大豆', contractUnit: 1, unitLabel: '1単位（100ブッシェル）', tick: 0.1 },
  wheat: { name: '小麦', contractUnit: 1, unitLabel: '1単位（100ブッシェル）', tick: 0.01 },
  cattle: { name: '生牛', contractUnit: 1, unitLabel: '1単位（100ポンド）', tick: 0.001 },
  hogs: { name: '赤身豚肉', contractUnit: 1, unitLabel: '1単位（100ポンド）', tick: 0.001 },
  cotton: { name: '綿花', contractUnit: 1, unitLabel: '1単位（100ポンド）', tick: 0.01 },
  sugar: { name: '砂糖', contractUnit: 10, unitLabel: '10単位（1,000ポンド）', tick: 0.01 },
  coffee: { name: 'コーヒー', contractUnit: 1, unitLabel: '1単位（100ポンド）', tick: 0.01 },
  cocoa: { name: 'ココア', contractUnit: 0.1, unitLabel: '0.1単位（0.1メトリックトン）', tick: 1 },
  orange: { name: 'オレンジジュース', contractUnit: 0.1, unitLabel: '0.1単位（10ポンド）', tick: 0.01 },
} as const;

type ProductId = keyof typeof PRODUCTS;
type Direction = 'buy' | 'sell';

function positive(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export default function DmmCfdTickValueCalculator() {
  const [productId, setProductId] = useState<ProductId>('corn');
  const [direction, setDirection] = useState<Direction>('buy');
  const [entryPrice, setEntryPrice] = useState<number | ''>('');
  const [exitPrice, setExitPrice] = useState<number | ''>('');
  const [lots, setLots] = useState(1);
  const [usdJpy, setUsdJpy] = useState<number | ''>('');
  const [totalCost, setTotalCost] = useState(0);
  const [accountFunds, setAccountFunds] = useState(100000);
  const product = PRODUCTS[productId];
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });
  const number = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 4 });
  const ready = entryPrice !== '' && exitPrice !== '' && usdJpy !== '' && positive(lots) >= 1;

  const result = useMemo(() => {
    const entry = positive(Number(entryPrice));
    const exit = positive(Number(exitPrice));
    const quantity = positive(lots);
    const rate = positive(Number(usdJpy));
    const rawMove = exit - entry;
    const signedMove = direction === 'buy' ? rawMove : -rawMove;
    const grossUsd = signedMove * quantity * product.contractUnit;
    const grossJpy = grossUsd * rate;
    const tickUsd = product.tick * quantity * product.contractUnit;
    const tickJpy = tickUsd * rate;
    const tickCount = product.tick > 0 ? signedMove / product.tick : 0;
    const cost = positive(totalCost);
    const netJpy = grossJpy - cost;
    const notional = entry * quantity * product.contractUnit * rate;
    const margin = notional * 0.05;
    const breakEvenTicks = tickJpy > 0 ? cost / tickJpy : 0;
    const capitalImpact = positive(accountFunds) > 0 ? netJpy / positive(accountFunds) * 100 : 0;
    return { signedMove, grossUsd, grossJpy, tickUsd, tickJpy, tickCount, cost, netJpy, notional, margin, breakEvenTicks, capitalImpact };
  }, [product, direction, entryPrice, exitPrice, lots, usdJpy, totalCost, accountFunds]);

  const changeProduct = (next: ProductId) => {
    setProductId(next);
    setEntryPrice('');
    setExitPrice('');
  };

  return <div className="calculator-page">
    <header className="calculator-intro">
      <p className="page-kicker">DMM CFD / 14 COMMODITIES</p>
      <h1>最小値幅を、<br /><em>円の損益へ。</em></h1>
      <p className="lede">DMM CFD商品14銘柄の取引単位と呼値を自動反映し、買い・売りの値動き損益、1ティック価値、コスト差引後、証拠金5％目安を計算します。</p>
      <div className="calculator-proof"><span>商品14銘柄</span><span>公式呼値を反映</span><span>買い・売り対応</span><span>入力内容は保存しません</span></div>
    </header>

    <div className="calculator-shell"><div className="calculator-grid">
      <section className="calculator-inputs">
        <div className="calculator-panel-head"><div><span>INPUT</span><h2>取引条件</h2></div></div>
        <div className="field-grid">
          <label className="wide"><span>銘柄</span><select value={productId} onChange={e => changeProduct(e.target.value as ProductId)}>
            {Object.entries(PRODUCTS).map(([id, item]) => <option key={id} value={id}>{item.name}（1Lot＝{item.unitLabel}）</option>)}
          </select><small>呼値：{product.tick}ドル</small></label>
          <label><span>売買方向</span><select value={direction} onChange={e => setDirection(e.target.value as Direction)}><option value="buy">買い</option><option value="sell">売り</option></select></label>
          <label><span>新規価格（USD・画面表示値）</span><input type="number" min="0" step={product.tick} placeholder="新規約定価格" value={entryPrice} onChange={e => setEntryPrice(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>決済価格（USD・画面表示値）</span><input type="number" min="0" step={product.tick} placeholder="決済約定価格" value={exitPrice} onChange={e => setExitPrice(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>Lot数</span><input type="number" min="1" step="1" value={lots} onChange={e => setLots(Number(e.target.value))} /></label>
          <label><span>決済時の米ドル円</span><input type="number" min="0" step="0.001" placeholder="円換算レート" value={usdJpy} onChange={e => setUsdJpy(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>総コスト（円）</span><input type="number" min="0" step="1" value={totalCost} onChange={e => setTotalCost(Number(e.target.value))} /><small>スプレッド、想定約定差、支払調整額など</small></label>
          <label><span>口座資金（円）</span><input type="number" min="0" step="10000" value={accountFunds} onChange={e => setAccountFunds(Number(e.target.value))} /></label>
        </div>
      </section>

      <section className="calculator-result">
        <div className="result-head"><span>{product.name} / {direction === 'buy' ? 'BUY' : 'SELL'}</span><h2>{!ready ? '価格と為替を入力' : result.netJpy > 0 ? 'コスト差引後は利益' : result.netJpy < 0 ? 'コスト差引後は損失' : '損益分岐'}</h2></div>
        <div className="total-cost"><strong>{ready ? yen.format(result.netJpy) : '—'}</strong><span>円・差引損益</span></div>
        <p>1ティック：{usdJpy !== '' ? `${yen.format(result.tickJpy)}円（${number.format(result.tickUsd)}米ドル）` : '—'}</p>
        <p>値動き：{ready ? `${number.format(result.signedMove)}ドル／${number.format(result.tickCount)}ティック` : '—'}</p>
        <p>値動き損益：{ready ? `${yen.format(result.grossJpy)}円（${number.format(result.grossUsd)}米ドル）` : '—'}</p>
        <p>総コスト：{yen.format(result.cost)}円 ／ 回収に必要：{usdJpy !== '' ? `${number.format(result.breakEvenTicks)}ティック` : '—'}</p>
        <p>想定元本：{entryPrice !== '' && usdJpy !== '' ? `約${yen.format(result.notional)}円` : '—'} ／ 証拠金5％目安：{entryPrice !== '' && usdJpy !== '' ? `約${yen.format(result.margin)}円` : '—'}</p>
        <p>口座資金に対する差引損益率：{ready && positive(accountFunds) > 0 ? `${number.format(result.capitalImpact)}％` : '—'}</p>
      </section>
    </div></div>

    <div className="callout"><strong>取引単位と物理量を二重に掛けない</strong><p>たとえばコーンは1Lot＝1単位（100ブッシェル）です。公式損益式へ掛ける取引単位は1であり、100をさらに掛けません。実際の損益、円換算レート、丸めは取引画面を優先してください。</p></div>

    <nav className="calculator-proof" aria-label="計算根拠と関連記事">
      <Link href="/articles/dmm-cfd-tick-value-profit-loss">14銘柄の1ティック早見表</Link>
      <Link href="/articles/dmm-cfd-commodity-lot-list">14銘柄の1Lot一覧</Link>
      <Link href="/tools/cfd-margin-calculator">商品CFD証拠金計算機</Link>
      <a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD公式取引単位</a>
      <a href="https://fx.dmm.com/support/faqs/article/00208/" target="_blank" rel="noopener noreferrer">DMM CFD公式損益式</a>
    </nav>

    <section aria-label="DMM CFDの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /></section>
    <p className="affiliate-disclosure">上記はアクセストレードの提携広告です。広告報酬は入力値・計算式・計算結果には影響しません。CFDは元本および利益が保証されず、証拠金を上回る損失が生じる可能性があります。</p>
  </div>;
}
