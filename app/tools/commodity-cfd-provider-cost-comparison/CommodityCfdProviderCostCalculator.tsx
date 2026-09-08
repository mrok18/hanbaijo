'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

const COMMODITIES = {
  gold: { name: '金', symbol: 'XAU/USD・金スポット', contractUnit: 1, unit: 'トロイオンス', dmmAdjustment: '金利調整額' },
  silver: { name: '銀', symbol: 'XAG/USD・銀スポット', contractUnit: 10, unit: 'トロイオンス', dmmAdjustment: '金利調整額' },
  oil: { name: '原油', symbol: 'XTI/USD・原油', contractUnit: 10, unit: 'バレル', dmmAdjustment: '価格調整額' },
  gas: { name: '天然ガス', symbol: 'XNG/USD・天然ガス', contractUnit: 100, unit: 'mmBtu', dmmAdjustment: '価格調整額' },
} as const;

type CommodityId = keyof typeof COMMODITIES;

function positive(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export default function CommodityCfdProviderCostCalculator() {
  const [productId, setProductId] = useState<CommodityId>('gold');
  const [price, setPrice] = useState<number | ''>('');
  const [usdJpy, setUsdJpy] = useState<number | ''>('');
  const [lots, setLots] = useState(1);
  const [fxtfSpread, setFxtfSpread] = useState<number | ''>('');
  const [fxtfOpeningFee, setFxtfOpeningFee] = useState<number | ''>('');
  const [fxtfHoldingTotal, setFxtfHoldingTotal] = useState(0);
  const [dmmSpread, setDmmSpread] = useState<number | ''>('');
  const [dmmHoldingTotal, setDmmHoldingTotal] = useState(0);
  const product = COMMODITIES[productId];
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });
  const ready = price !== '' && usdJpy !== '' && fxtfSpread !== '' && fxtfOpeningFee !== '' && dmmSpread !== '';

  const result = useMemo(() => {
    const unitCount = product.contractUnit * positive(lots);
    const rate = positive(Number(usdJpy));
    const notional = positive(Number(price)) * unitCount * rate;
    const margin = notional * 0.05;
    const fxtfSpreadCost = positive(Number(fxtfSpread)) * unitCount * rate;
    const dmmSpreadCost = positive(Number(dmmSpread)) * unitCount * rate;
    const fxtfFee = positive(Number(fxtfOpeningFee));
    const fxtfHold = positive(fxtfHoldingTotal);
    const dmmHold = positive(dmmHoldingTotal);
    const fxtfTotal = fxtfSpreadCost + fxtfFee + fxtfHold;
    const dmmTotal = dmmSpreadCost + dmmHold;
    const difference = Math.abs(fxtfTotal - dmmTotal);
    const lower = fxtfTotal === dmmTotal ? '同額' : fxtfTotal < dmmTotal ? 'FXTF MT5' : 'DMM CFD';
    return { unitCount, notional, margin, fxtfSpreadCost, dmmSpreadCost, fxtfFee, fxtfHold, dmmHold, fxtfTotal, dmmTotal, difference, lower };
  }, [product, price, usdJpy, lots, fxtfSpread, fxtfOpeningFee, fxtfHoldingTotal, dmmSpread, dmmHoldingTotal]);

  const changeProduct = (next: CommodityId) => {
    setProductId(next);
    setPrice('');
    setFxtfSpread('');
    setFxtfOpeningFee('');
    setFxtfHoldingTotal(0);
    setDmmSpread('');
    setDmmHoldingTotal(0);
  };

  return <div className="calculator-page">
    <header className="calculator-intro">
      <p className="page-kicker">COMMODITY CFD PROVIDER COST COMPARISON</p>
      <h1>共通4商品を、<br /><em>同じ1Lotで2社比較。</em></h1>
      <p className="lede">FXTF MT5とDMM CFDで共通する金・銀・原油・天然ガスについて、取引画面の価格とコストを手入力します。両社で同じ1Lotの単位を反映し、想定元本、証拠金5％目安、総コストを円換算します。</p>
      <div className="calculator-proof"><span>共通4商品</span><span>取引単位を自動反映</span><span>調整額は期間合計で入力</span><span>入力内容は保存しません</span></div>
    </header>

    <div className="calculator-shell"><div className="calculator-grid">
      <section className="calculator-inputs">
        <div className="calculator-panel-head"><div><span>INPUT</span><h2>商品と同時点の条件</h2></div></div>
        <div className="field-grid">
          <label><span>商品</span><select value={productId} onChange={e => changeProduct(e.target.value as CommodityId)}>
            {Object.entries(COMMODITIES).map(([id, item]) => <option key={id} value={id}>{item.name}（1Lot＝{item.contractUnit}{item.unit}）</option>)}
          </select><small>{product.symbol}</small></label>
          <label><span>{product.name}価格（USD／{product.unit}）</span><input type="number" min="0" step="0.001" placeholder="取引画面の価格" value={price} onChange={e => setPrice(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>米ドル円</span><input type="number" min="0" step="0.001" placeholder="円換算レート" value={usdJpy} onChange={e => setUsdJpy(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>Lot数</span><input type="number" min="1" step="1" value={lots} onChange={e => setLots(Number(e.target.value))} /><small>取引数量：{yen.format(result.unitCount)}{product.unit}</small></label>
          <label><span>FXTF スプレッド（USD／{product.unit}）</span><input type="number" min="0" step="0.001" placeholder="Ask−Bid" value={fxtfSpread} onChange={e => setFxtfSpread(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>FXTF 新規時の手数料合計（円）</span><input type="number" min="0" step="1" placeholder="最新ランク表から入力" value={fxtfOpeningFee} onChange={e => setFxtfOpeningFee(e.target.value === '' ? '' : Number(e.target.value))} /><small>既存建玉を含むランクで注文全体を算出</small></label>
          <label><span>FXTF 比較期間中の支払スワップ合計（円）</span><input type="number" min="0" step="1" value={fxtfHoldingTotal} onChange={e => setFxtfHoldingTotal(Number(e.target.value))} /><small>受取または発生なしの場合は0</small></label>
          <label><span>DMM CFD スプレッド（USD／{product.unit}）</span><input type="number" min="0" step="0.001" placeholder="Ask−Bid" value={dmmSpread} onChange={e => setDmmSpread(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>DMM 比較期間中の支払{product.dmmAdjustment}合計（円）</span><input type="number" min="0" step="1" value={dmmHoldingTotal} onChange={e => setDmmHoldingTotal(Number(e.target.value))} /><small>受取または発生なしの場合は0</small></label>
        </div>
      </section>

      <section className="calculator-result">
        <div className="result-head"><span>{product.name.toUpperCase()} / COMPARISON</span><h2>{!ready ? '取引条件を入力' : result.lower === '同額' ? '入力条件では同額' : `${result.lower}が低コスト`}</h2></div>
        <div className="total-cost"><strong>{ready ? yen.format(result.difference) : '—'}</strong><span>円差</span></div>
        <p>想定元本：{price !== '' && usdJpy !== '' ? `約${yen.format(result.notional)}円` : '—'} ／ 証拠金5％目安：{price !== '' && usdJpy !== '' ? `約${yen.format(result.margin)}円` : '—'}</p>
        <p>{ready ? `FXTF MT5：合計 約${yen.format(result.fxtfTotal)}円（スプレッド ${yen.format(result.fxtfSpreadCost)}円・新規手数料 ${yen.format(result.fxtfFee)}円・保有 ${yen.format(result.fxtfHold)}円）` : 'FXTF MT5：価格・為替・スプレッド・新規手数料を入力すると表示します'}</p>
        <p>{ready ? `DMM CFD：合計 約${yen.format(result.dmmTotal)}円（スプレッド ${yen.format(result.dmmSpreadCost)}円・調整額 ${yen.format(result.dmmHold)}円）` : 'DMM CFD：価格・為替・スプレッドを入力すると表示します'}</p>
        <p>スプレッド相当額：価格差 × {product.contractUnit}{product.unit} × Lot数 × 米ドル円</p>
        <p>DMM CFDの取引手数料は0円として計算します。</p>
      </section>
    </div></div>

    <div className="callout"><strong>調整額は同じ比較期間の「支払合計」を入力</strong><p>金・銀のDMM CFDは金利調整額、原油・天然ガスは価格調整額です。発生頻度が異なるため、日額へ無理に直さず、比較期間中に発生する支払総額を入力します。受取調整額、スリッページ、税金は計算に含みません。</p></div>

    <nav className="calculator-proof" aria-label="計算根拠と関連記事">
      <Link href="/tools/commodity-cfd-price-move-calculator">商品CFD値動き損益計算機</Link>
      <Link href="/articles/fxtf-vs-dmm-cfd-commodity">商品CFD 2社比較記事</Link>
      <Link href="/articles/fxtf-vs-dmm-cfd-gold">金CFDの詳細比較</Link>
      <Link href="/articles/dmm-cfd-commodity-lot-list">DMM 14商品のLot一覧</Link>
      <a href="https://www.fxtrade.co.jp/cfd/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF公式取引単位</a>
      <a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD公式取引概要</a>
    </nav>

    <section className="affiliate-grid" aria-label="FXTFとDMM CFDの広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
    </section>
    <p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は入力値・計算式・比較結果には影響しません。商品CFDは元本および利益が保証されず、証拠金を上回る損失が生じる可能性があります。</p>
  </div>;
}
