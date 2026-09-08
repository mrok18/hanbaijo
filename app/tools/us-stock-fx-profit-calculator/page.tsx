'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export default function Page() {
  const [buyPrice, setBuyPrice] = useState(100); const [sellPrice, setSellPrice] = useState(110); const [shares, setShares] = useState(10);
  const [buyFx, setBuyFx] = useState(150); const [sellFx, setSellFx] = useState(145); const [feePercent, setFeePercent] = useState(0.495); const [fxCostSen, setFxCostSen] = useState(25);
  const result = useMemo(() => {
    const quantity = Math.max(0, shares); const purchaseUsd = Math.max(0, buyPrice) * quantity; const saleUsd = Math.max(0, sellPrice) * quantity;
    const rate = Math.max(0, feePercent) / 100; const buyFeeUsd = purchaseUsd * rate; const sellFeeUsd = saleUsd * rate; const exchangeCost = Math.max(0, fxCostSen) / 100;
    const purchaseYen = (purchaseUsd + buyFeeUsd) * (Math.max(0, buyFx) + exchangeCost); const saleYen = Math.max(0, saleUsd - sellFeeUsd) * Math.max(0, sellFx - exchangeCost);
    const profitYen = saleYen - purchaseYen; const returnRate = purchaseYen > 0 ? profitYen / purchaseYen * 100 : 0;
    return { purchaseUsd, saleUsd, buyFeeUsd, sellFeeUsd, purchaseYen, saleYen, profitYen, returnRate };
  }, [buyPrice, sellPrice, shares, buyFx, sellFx, feePercent, fxCostSen]);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 }); const decimal = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });
  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">US STOCK FX PROFIT CALCULATOR</p><h1>株価は上昇。<br /><em>円換算でも利益？</em></h1><p className="lede">米国株の買値・売値だけでなく、購入時と売却時のドル円レートを別々に入力します。売買手数料と1ドルあたりの為替コストを反映し、円で支払った金額と受け取る金額を比較できます。</p><div className="calculator-proof"><span>購入・売却レートを分離</span><span>売買手数料を反映</span><span>為替コストを往復計算</span><span>入力は端末内で計算</span></div></header>
    <div className="calculator-shell"><div className="calculator-grid"><section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>株価・為替条件</h2></div></div><div className="field-grid">
      <label><span>購入株価（米ドル）</span><input type="number" min="0" step="0.01" value={buyPrice} onChange={e => setBuyPrice(Number(e.target.value))} /></label><label><span>売却株価（米ドル）</span><input type="number" min="0" step="0.01" value={sellPrice} onChange={e => setSellPrice(Number(e.target.value))} /></label>
      <label><span>株数</span><input type="number" min="0" step="1" value={shares} onChange={e => setShares(Number(e.target.value))} /></label><label><span>購入時 USD/JPY</span><input type="number" min="0" step="0.01" value={buyFx} onChange={e => setBuyFx(Number(e.target.value))} /></label>
      <label><span>売却時 USD/JPY</span><input type="number" min="0" step="0.01" value={sellFx} onChange={e => setSellFx(Number(e.target.value))} /></label><label><span>片道売買手数料（％）</span><input type="number" min="0" step="0.001" value={feePercent} onChange={e => setFeePercent(Number(e.target.value))} /><small>最低・上限手数料は別途確認</small></label>
      <label><span>片道為替コスト（銭/米ドル）</span><input type="number" min="0" step="1" value={fxCostSen} onChange={e => setFxCostSen(Number(e.target.value))} /></label>
    </div></section><section className="calculator-result"><div className="result-head"><span>JPY PROFIT</span><h2>円換算の概算損益</h2></div><div className="total-cost"><strong>{yen.format(result.profitYen)}</strong><span>円</span></div><p>円換算リターン：{decimal.format(result.returnRate)}％</p><p>購入総額：約{yen.format(result.purchaseYen)}円</p><p>売却受取額：約{yen.format(result.saleYen)}円</p><p>買付額：{decimal.format(result.purchaseUsd)}米ドル／手数料 約{decimal.format(result.buyFeeUsd)}米ドル</p><p>売却額：{decimal.format(result.saleUsd)}米ドル／手数料 約{decimal.format(result.sellFeeUsd)}米ドル</p></section></div></div>
    <div className="callout"><strong>税金・配当・手数料上限は含みません</strong><p>入力した料率での概算です。最低手数料、上限手数料、SEC Fee等の現地費用、税金、配当、外貨の保有残高、約定価格差は含みません。外貨決済では実際の両替時点が売買時点と異なる場合があります。</p></div>
    <nav className="calculator-proof" aria-label="関連記事"><Link href="/articles/us-stock-profit-yen-appreciation">株高でも円換算で損する条件</Link><Link href="/articles/us-stock-loss-yen-depreciation">株安でも円換算で利益になる条件</Link><Link href="/articles/us-stock-fx-cost">米国株の為替コスト計算</Link><Link href="/articles/matsui-us-stock-fx-fee">松井証券の為替手数料</Link><Link href="/tools/matsui-us-stock-cost-calculator">松井証券専用計算機</Link><Link href="/articles/dmm-kabu-us-stock-fee">DMM 株の米国株手数料</Link></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算結果とは分けて表示しています。</p></section>
  </div>;
}
