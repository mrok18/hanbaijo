'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

const products = [
  { name: '日経225先物', multiplier: 1000, tick: 10, normal: 220, day: 165 },
  { name: '日経225mini', multiplier: 100, tick: 5, normal: 38.5, day: 27.5 },
  { name: '日経225マイクロ', multiplier: 10, tick: 5, normal: 11, day: 11 },
] as const;

export default function Page() {
  const [productIndex, setProductIndex] = useState(1);
  const [plan, setPlan] = useState<'normal' | 'day'>('normal');
  const [move, setMove] = useState(100);
  const [lots, setLots] = useState(1);
  const product = products[productIndex];
  const result = useMemo(() => {
    const gross = Math.max(0, move) * product.multiplier * Math.max(0, lots);
    const feePerSide = plan === 'normal' ? product.normal : product.day;
    const roundFee = feePerSide * 2 * Math.max(0, lots);
    const tickValue = product.tick * product.multiplier * Math.max(0, lots);
    return { gross, roundFee, net: gross - roundFee, ticks: product.tick ? Math.max(0, move) / product.tick : 0, tickValue, breakEven: tickValue ? roundFee / tickValue : 0 };
  }, [move, lots, plan, product]);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 1 });

  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">NIKKEI 225 FUTURES CALCULATOR</p><h1>値幅と手数料を、<br /><em>同じ円単位に。</em></h1><p className="lede">松井証券の日経225先物・mini・マイクロを対象に、価格の値幅と枚数から損益、往復手数料、差引後損益を概算します。</p><div className="calculator-proof"><span>ラージ・mini・マイクロ対応</span><span>通常・一日先物を切替</span><span>端末内で即時計算</span><span>2026年9月8日確認</span></div></header>
    <div className="calculator-shell"><div className="calculator-grid"><section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>取引条件</h2></div></div><div className="field-grid">
      <label className="wide"><span>商品</span><select value={productIndex} onChange={e => setProductIndex(Number(e.target.value))}>{products.map((item, index) => <option value={index} key={item.name}>{item.name}（倍率{item.multiplier}倍・呼値{item.tick}円）</option>)}</select></label>
      <label><span>料金区分</span><select value={plan} onChange={e => setPlan(e.target.value as 'normal' | 'day')}><option value="normal">通常先物</option><option value="day">一日先物</option></select></label>
      <label><span>枚数</span><input type="number" min="0" step="1" value={lots} onChange={e => setLots(Number(e.target.value))} /></label>
      <label className="wide"><span>有利に動いた値幅（円）</span><input type="number" min="0" step={product.tick} value={move} onChange={e => setMove(Number(e.target.value))} /><small>買いなら上昇幅、売りなら下落幅を正の数で入力</small></label>
    </div></section><section className="calculator-result"><div className="result-head"><span>ESTIMATE</span><h2>差引後損益</h2></div><div className="total-cost"><strong>{yen.format(result.net)}</strong><span>円</span></div><p>値幅損益：約{yen.format(result.gross)}円</p><p>往復手数料：約{yen.format(result.roundFee)}円</p><p>入力値幅：{yen.format(result.ticks)}ティック</p><p>1ティック損益：約{yen.format(result.tickValue)}円</p><p>手数料分岐：約{yen.format(result.breakEven)}ティック</p></section></div></div>
    <div className="callout"><strong>概算の範囲</strong><p>税込・インターネット取引の新規と返済が同じ料金で約定すると仮定しています。証拠金、板の売買価格差、スリッページ、税金、SQや任意決済の個別条件は含みません。一日先物は返済期限と証拠金ルールを必ず確認してください。</p></div>
    <nav className="calculator-proof" aria-label="計算根拠と関連記事"><Link href="/articles/matsui-futures-normal-vs-day">通常・一日先物の料金比較</Link><Link href="/articles/futures-tick-value">1ティックの計算方法</Link><Link href="/futures/nikkei225-fee-comparison">証券会社別手数料</Link><a href="https://www.matsui.co.jp/fee/" target="_blank" rel="noopener noreferrer">松井証券の公式料金表</a></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section>
  </div>;
}
