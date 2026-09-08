'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

const fee = (amount: number) => amount <= 2.22 ? 0 : Math.min(amount * 0.00495, 22);

export default function Page() {
  const [shares, setShares] = useState(10);
  const [buyPrice, setBuyPrice] = useState(100);
  const [sellPrice, setSellPrice] = useState(110);
  const [usdJpy, setUsdJpy] = useState(150);
  const [account, setAccount] = useState<'taxable' | 'nisa'>('taxable');
  const [settlement, setSettlement] = useState<'yen' | 'usd'>('yen');
  const result = useMemo(() => {
    const buy = Math.max(0, shares * buyPrice);
    const sell = Math.max(0, shares * sellPrice);
    const buyFee = account === 'nisa' ? 0 : fee(buy);
    const sellFee = account === 'nisa' ? 0 : fee(sell);
    const tradeFeeYen = (buyFee + sellFee) * usdJpy;
    const fxCostYen = settlement === 'yen' ? (buy + sell) * 0.25 : 0;
    const grossYen = (sell - buy) * usdJpy;
    return { buy, sell, tradeFeeYen, fxCostYen, grossYen, total: tradeFeeYen + fxCostYen, net: grossYen - tradeFeeYen - fxCostYen };
  }, [shares, buyPrice, sellPrice, usdJpy, account, settlement]);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 });
  const dollar = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });

  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">US STOCK ROUND-TRIP CALCULATOR</p><h1>米国株の往復コストを、<br /><em>円で見える化。</em></h1><p className="lede">松井証券の米国株現物取引を対象に、買付・売却の手数料、円貨決済の為替コスト、値幅損益を同じ条件で概算します。</p><div className="calculator-proof"><span>入力は端末内で計算</span><span>NISA切替対応</span><span>円貨・外貨決済を比較</span><span>2026年9月8日確認</span></div></header>
    <div className="calculator-shell"><div className="calculator-grid"><section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>取引条件</h2></div></div><div className="field-grid">
      <label><span>株数</span><input type="number" min="0" step="1" value={shares} onChange={e => setShares(Number(e.target.value))} /></label>
      <label><span>米ドル円</span><input type="number" min="0" step="0.01" value={usdJpy} onChange={e => setUsdJpy(Number(e.target.value))} /></label>
      <label><span>買値（米ドル）</span><input type="number" min="0" step="0.01" value={buyPrice} onChange={e => setBuyPrice(Number(e.target.value))} /></label>
      <label><span>売値（米ドル）</span><input type="number" min="0" step="0.01" value={sellPrice} onChange={e => setSellPrice(Number(e.target.value))} /></label>
      <label><span>口座区分</span><select value={account} onChange={e => setAccount(e.target.value as 'taxable' | 'nisa')}><option value="taxable">特定・一般口座</option><option value="nisa">NISA口座</option></select><small>NISAのインターネット売買手数料は0円</small></label>
      <label><span>決済通貨</span><select value={settlement} onChange={e => setSettlement(e.target.value as 'yen' | 'usd')}><option value="yen">円貨決済</option><option value="usd">外貨決済（事前両替）</option></select><small>円貨決済は1ドル25銭、事前両替は0円で試算</small></label>
    </div></section><section className="calculator-result"><div className="result-head"><span>ESTIMATE</span><h2>往復コスト概算</h2></div><div className="total-cost"><strong>{yen.format(result.total)}</strong><span>円</span></div><p>売買手数料：約{yen.format(result.tradeFeeYen)}円</p><p>為替コスト：約{yen.format(result.fxCostYen)}円</p><p>値幅による損益：約{yen.format(result.grossYen)}円</p><p>コスト差引後：約{yen.format(result.net)}円</p><p>買付額 ${dollar.format(result.buy)} ／ 売却額 ${dollar.format(result.sell)}</p></section></div></div>
    <div className="callout"><strong>概算の前提</strong><p>特定・一般口座の現物手数料は片道0.495％、上限22米ドル、約定代金2.22米ドル以下は0円で計算します。円貨決済は買付・売却それぞれ25銭／米ドル、外貨決済は事前両替の為替手数料0円として計算します。税金、配当、SEC Fee、為替変動は含みません。</p></div>
    <nav className="calculator-proof" aria-label="計算根拠と関連記事"><Link href="/articles/matsui-us-stock-fx-fee">為替0円と25銭の違い</Link><Link href="/articles/matsui-us-stock-trading-hours">取引時間とプレマーケット</Link><a href="https://www.matsui.co.jp/us-stock/domestic/fee/" target="_blank" rel="noopener noreferrer">公式料金表</a></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section>
  </div>;
}
