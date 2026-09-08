'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

const products = [
  { id: 'btc-jpy', name: 'ビットコイン BTC/JPY', short: 'BTC/JPY', quote: 'JPY', unit: 1, unitLabel: '1BTC', marginRate: 0.5, lotStep: 0.01 },
  { id: 'gold', name: '金 XAU/USD', short: '金', quote: 'USD', unit: 1, unitLabel: '1トロイオンス', marginRate: 0.05, lotStep: 1 },
  { id: 'silver', name: '銀 XAG/USD', short: '銀', quote: 'USD', unit: 10, unitLabel: '10トロイオンス', marginRate: 0.05, lotStep: 1 },
  { id: 'oil', name: '原油 XTI/USD', short: '原油', quote: 'USD', unit: 10, unitLabel: '10バレル', marginRate: 0.05, lotStep: 1 },
  { id: 'gas', name: '天然ガス XNG/USD', short: '天然ガス', quote: 'USD', unit: 100, unitLabel: '100mmBtu', marginRate: 0.05, lotStep: 1 },
] as const;

function positive(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export default function FxtfMt5MarginCalculator() {
  const [productId, setProductId] = useState<(typeof products)[number]['id']>('btc-jpy');
  const [marketPrice, setMarketPrice] = useState<number | ''>('');
  const [usdJpy, setUsdJpy] = useState<number | ''>('');
  const [lots, setLots] = useState(0.01);
  const [openingFee, setOpeningFee] = useState<number | ''>('');
  const product = products.find(item => item.id === productId) ?? products[0];
  const needsUsdJpy = product.quote === 'USD';
  const ready = marketPrice !== '' && positive(Number(marketPrice)) > 0 && positive(lots) > 0 && (!needsUsdJpy || (usdJpy !== '' && positive(Number(usdJpy)) > 0));
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 });

  const result = useMemo(() => {
    const price = positive(Number(marketPrice));
    const quantity = positive(lots) * product.unit;
    const conversion = needsUsdJpy ? positive(Number(usdJpy)) : 1;
    const notional = price * conversion * quantity;
    const margin = notional * product.marginRate;
    const fee = positive(Number(openingFee));
    return { quantity, notional, margin, fee, baseline: margin + fee };
  }, [marketPrice, lots, product, needsUsdJpy, usdJpy, openingFee]);

  function selectProduct(id: (typeof products)[number]['id']) {
    const next = products.find(item => item.id === id) ?? products[0];
    setProductId(id);
    setMarketPrice('');
    setUsdJpy('');
    setLots(next.lotStep);
    setOpeningFee('');
  }

  return <div className="calculator-page">
    <header className="calculator-intro">
      <p className="page-kicker">FXTF MT5 MARGIN CALCULATOR</p>
      <h1>取引画面の価格から、<br /><em>必要証拠金を円換算。</em></h1>
      <p className="lede">FXTF MT5の商品CFD4銘柄とBTC/JPYについて、公式の1Lot単位と個人証拠金率を使って概算します。ライブレートは取得しません。発注時にMT5へ表示された価格を手入力してください。</p>
      <div className="calculator-proof"><span>商品CFDは証拠金率5％</span><span>BTC/JPYは証拠金率50％</span><span>1Lotの単位を自動反映</span><span>入力内容は保存しません</span></div>
    </header>

    <div className="calculator-shell">
      <div className="preset-strip" style={{ gridTemplateColumns: `repeat(${products.length}, minmax(0, 1fr))` }}>
        {products.map(item => <button type="button" className={item.id === productId ? 'active' : ''} key={item.id} onClick={() => selectProduct(item.id)}><strong>{item.short}</strong><span>{item.marginRate * 100}% / {item.unitLabel}</span></button>)}
      </div>
      <div className="calculator-grid">
        <section className="calculator-inputs">
          <div className="calculator-panel-head"><div><span>INPUT</span><h2>{product.name}の条件</h2></div><b className="origin-badge estimated">手入力</b></div>
          <div className="field-grid">
            <label className="wide"><span>銘柄</span><select value={productId} onChange={e => selectProduct(e.target.value as (typeof products)[number]['id'])}>{products.map(item => <option key={item.id} value={item.id}>{item.name}（1Lot＝{item.unitLabel}）</option>)}</select></label>
            <label><span>{product.name}の価格（{product.quote === 'USD' ? '米ドル' : '円'}）</span><input type="number" min="0" step="any" placeholder="取引画面の価格" value={marketPrice} onChange={e => setMarketPrice(e.target.value === '' ? '' : Number(e.target.value))} /><small>売りはBid、買いはAskを入力</small></label>
            <label><span>取引Lot数</span><input type="number" min="0" step={product.lotStep} value={lots} onChange={e => setLots(Number(e.target.value))} /><small>1Lot＝{product.unitLabel}</small></label>
            <label><span>米ドル/円の円換算レート</span><input type="number" min="0" step="any" placeholder={needsUsdJpy ? '円換算レートを入力' : 'BTC/JPYでは不要'} value={needsUsdJpy ? usdJpy : ''} disabled={!needsUsdJpy} onChange={e => setUsdJpy(e.target.value === '' ? '' : Number(e.target.value))} /><small>{needsUsdJpy ? 'FXTFの計算に使う仲値を確認' : 'BTC/JPYは円建てのため使用しません'}</small></label>
            <label><span>新規時の建玉連動手数料（円・任意）</span><input type="number" min="0" step="1" placeholder="最新の手数料表から入力" value={openingFee} onChange={e => setOpeningFee(e.target.value === '' ? '' : Number(e.target.value))} /><small>既存建玉と注文数量でランクが変わります</small></label>
          </div>
        </section>

        <section className="calculator-result">
          <div className="result-head"><span>REQUIRED MARGIN</span><h2>{ready ? '個人口座の概算' : '価格を入力してください'}</h2></div>
          <div className="total-cost"><strong>{ready ? yen.format(result.margin) : '—'}</strong><span>円</span></div>
          <p>想定元本：{ready ? `約${yen.format(result.notional)}円` : '—'}</p>
          <p>取引数量：{ready ? `${result.quantity.toLocaleString('ja-JP', { maximumFractionDigits: 8 })} ${product.id === 'btc-jpy' ? 'BTC' : product.unitLabel.replace(/^\d+(?:\.\d+)?/, '').trim()}` : '—'}</p>
          <p>証拠金率：{product.marginRate * 100}％（個人口座）</p>
          <p>証拠金＋入力手数料：{ready ? `約${yen.format(result.baseline)}円` : '—'}{openingFee === '' ? '（手数料未入力）' : ''}</p>
          <p>{needsUsdJpy ? '計算式：価格 × 米ドル/円 × 1Lot単位 × Lot数 × 証拠金率' : '計算式：BTC/JPY価格 × Lot数 × 50％'}</p>
        </section>
      </div>
    </div>

    <div className="callout"><strong>必要証拠金は推奨入金額ではありません</strong><p>計算結果には、スプレッドによる新規時の評価損、スリッページ、相場逆行への余力、持越し時のスワップまたはレバレッジ手数料を含めていません。建玉連動手数料は最新表を確認し、今回の新規注文に掛かる合計額を入力してください。最終値はMT5の発注画面で確認します。</p></div>

    <nav className="calculator-proof" aria-label="計算根拠と関連記事">
      <Link href="/articles/fxtf-mt5-btc-cfd-cost">BTC/JPY 0.01Lotの解説</Link>
      <Link href="/articles/fxtf-mt5-gold-cfd-margin">金1Lotの必要証拠金</Link>
      <Link href="/articles/fxtf-mt5-oil-natural-gas-margin">原油・天然ガスの比較</Link>
      <Link href="/articles/fxtf-mt5-commodity-vs-crypto-cfd">商品・暗号資産CFD比較</Link>
      <Link href="/articles/fxtf-position-fee-calculation">建玉連動手数料の計算</Link>
      <a href="https://www.fxtrade.co.jp/crypto/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF公式 暗号資産証拠金</a>
      <a href="https://www.fxtrade.co.jp/cfd/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF公式 商品CFD証拠金</a>
    </nav>

    <section className="article-affiliate" aria-label="FXTFの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} /><p className="affiliate-disclosure">A8.netの提携広告です。広告報酬は入力値・計算式・結果には影響しません。CFDは元本や利益が保証されず、急変時には証拠金を上回る損失が生じる可能性があります。</p></section>
  </div>;
}
