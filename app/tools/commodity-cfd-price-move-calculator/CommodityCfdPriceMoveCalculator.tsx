'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

const COMMODITIES = {
  gold: { name: '金', contractUnit: 1, unit: 'トロイオンス' },
  silver: { name: '銀', contractUnit: 10, unit: 'トロイオンス' },
  oil: { name: '原油', contractUnit: 10, unit: 'バレル' },
  gas: { name: '天然ガス', contractUnit: 100, unit: 'mmBtu' },
} as const;

type CommodityId = keyof typeof COMMODITIES;
type Direction = 'buy' | 'sell';

function positive(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export default function CommodityCfdPriceMoveCalculator() {
  const [productId, setProductId] = useState<CommodityId>('gold');
  const [direction, setDirection] = useState<Direction>('buy');
  const [entryPrice, setEntryPrice] = useState<number | ''>('');
  const [exitPrice, setExitPrice] = useState<number | ''>('');
  const [usdJpy, setUsdJpy] = useState<number | ''>('');
  const [lots, setLots] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const [accountFunds, setAccountFunds] = useState(100000);
  const product = COMMODITIES[productId];
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });
  const number = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 4 });
  const ready = entryPrice !== '' && exitPrice !== '' && usdJpy !== '' && positive(lots) > 0;

  const result = useMemo(() => {
    const entry = positive(Number(entryPrice));
    const exit = positive(Number(exitPrice));
    const rate = positive(Number(usdJpy));
    const quantity = positive(lots);
    const unitCount = product.contractUnit * quantity;
    const rawMove = exit - entry;
    const signedMove = direction === 'buy' ? rawMove : -rawMove;
    const grossUsd = signedMove * unitCount;
    const grossJpy = grossUsd * rate;
    const cost = positive(totalCost);
    const netJpy = grossJpy - cost;
    const notional = entry * unitCount * rate;
    const margin = notional * 0.05;
    const returnOnMargin = margin > 0 ? netJpy / margin * 100 : 0;
    const capitalImpact = positive(accountFunds) > 0 ? netJpy / positive(accountFunds) * 100 : 0;
    const oneDollarJpy = unitCount * rate;
    const breakEvenMove = oneDollarJpy > 0 ? cost / oneDollarJpy : 0;
    return { unitCount, signedMove, grossUsd, grossJpy, cost, netJpy, notional, margin, returnOnMargin, capitalImpact, oneDollarJpy, breakEvenMove };
  }, [product, direction, entryPrice, exitPrice, usdJpy, lots, totalCost, accountFunds]);

  const changeProduct = (next: CommodityId) => {
    setProductId(next);
    setEntryPrice('');
    setExitPrice('');
  };

  return <div className="calculator-page">
    <header className="calculator-intro">
      <p className="page-kicker">COMMODITY CFD PRICE MOVE CALCULATOR</p>
      <h1>価格差を、<br /><em>円の損益へ換算。</em></h1>
      <p className="lede">金・銀・原油・天然ガスの1Lot単位を自動反映し、買い・売りの値動き損益、総コスト差引後、証拠金5％目安、口座資金への影響を計算します。</p>
      <div className="calculator-proof"><span>共通4商品</span><span>買い・売り対応</span><span>コスト差引後を表示</span><span>入力内容は保存しません</span></div>
    </header>

    <div className="calculator-shell"><div className="calculator-grid">
      <section className="calculator-inputs">
        <div className="calculator-panel-head"><div><span>INPUT</span><h2>取引条件</h2></div></div>
        <div className="field-grid">
          <label><span>商品</span><select value={productId} onChange={e => changeProduct(e.target.value as CommodityId)}>
            {Object.entries(COMMODITIES).map(([id, item]) => <option key={id} value={id}>{item.name}（1Lot＝{item.contractUnit}{item.unit}）</option>)}
          </select></label>
          <label><span>売買方向</span><select value={direction} onChange={e => setDirection(e.target.value as Direction)}><option value="buy">買い</option><option value="sell">売り</option></select></label>
          <label><span>新規価格（USD／{product.unit}）</span><input type="number" min="0" step="0.001" placeholder="新規時の価格" value={entryPrice} onChange={e => setEntryPrice(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>決済価格（USD／{product.unit}）</span><input type="number" min="0" step="0.001" placeholder="想定する決済価格" value={exitPrice} onChange={e => setExitPrice(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>円換算に使う米ドル円</span><input type="number" min="0" step="0.001" placeholder="概算レート" value={usdJpy} onChange={e => setUsdJpy(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>Lot数</span><input type="number" min="1" step="1" value={lots} onChange={e => setLots(Number(e.target.value))} /><small>取引数量：{yen.format(result.unitCount)}{product.unit}</small></label>
          <label><span>総コスト（円）</span><input type="number" min="0" step="1" value={totalCost} onChange={e => setTotalCost(Number(e.target.value))} /><small>スプレッド、手数料、支払調整額などの合計</small></label>
          <label><span>口座資金（円）</span><input type="number" min="0" step="10000" value={accountFunds} onChange={e => setAccountFunds(Number(e.target.value))} /><small>口座資金への影響率の計算に使用</small></label>
        </div>
      </section>

      <section className="calculator-result">
        <div className="result-head"><span>{product.name} / {direction === 'buy' ? 'BUY' : 'SELL'}</span><h2>{!ready ? '価格と為替を入力' : result.netJpy > 0 ? 'コスト差引後は利益' : result.netJpy < 0 ? 'コスト差引後は損失' : '損益分岐'}</h2></div>
        <div className="total-cost"><strong>{ready ? yen.format(result.netJpy) : '—'}</strong><span>円・差引損益</span></div>
        <p>価格差：{ready ? `${number.format(result.signedMove)}ドル` : '—'} ／ 値動き損益：{ready ? `${yen.format(result.grossJpy)}円（${number.format(result.grossUsd)}米ドル）` : '—'}</p>
        <p>総コスト：{yen.format(result.cost)}円 ／ 損益分岐に必要な値幅：{usdJpy !== '' && positive(lots) > 0 ? `${number.format(result.breakEvenMove)}ドル` : '—'}</p>
        <p>想定元本：{entryPrice !== '' && usdJpy !== '' ? `約${yen.format(result.notional)}円` : '—'} ／ 証拠金5％目安：{entryPrice !== '' && usdJpy !== '' ? `約${yen.format(result.margin)}円` : '—'}</p>
        <p>証拠金目安に対する差引損益率：{ready && result.margin > 0 ? `${number.format(result.returnOnMargin)}％` : '—'}</p>
        <p>口座資金に対する差引損益率：{ready && positive(accountFunds) > 0 ? `${number.format(result.capitalImpact)}％` : '—'}</p>
        <p>価格が1ドル動いた時：{usdJpy !== '' ? `${yen.format(result.oneDollarJpy)}円` : '—'}</p>
      </section>
    </div></div>

    <div className="callout"><strong>円換算は比較用の概算</strong><p>実際の損益・証拠金に使われる価格、円換算レート、丸め方法は各社の取引画面で確認してください。価格変動中のスプレッド拡大、スリッページ、受取調整額、税金は自動計算しません。</p></div>

    <nav className="calculator-proof" aria-label="計算根拠と関連記事">
      <Link href="/articles/commodity-cfd-one-dollar-profit-loss">1ドルの値動き損益を解説</Link>
      <Link href="/articles/fxtf-vs-dmm-cfd-commodity">FXTF・DMMの商品比較</Link>
      <Link href="/tools/commodity-cfd-provider-cost-comparison">2社の総コスト比較</Link>
      <a href="https://www.fxtrade.co.jp/cfd/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF公式取引単位</a>
      <a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD公式取引単位</a>
    </nav>

    <section className="affiliate-grid" aria-label="商品CFDを扱うサービスの広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
    </section>
    <p className="affiliate-disclosure">上記はA8.netまたはアクセストレードの提携広告です。広告報酬は入力値・計算式・計算結果には影響しません。商品CFDは元本および利益が保証されず、証拠金を上回る損失が生じる可能性があります。</p>
  </div>;
}
