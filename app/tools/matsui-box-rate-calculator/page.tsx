'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export default function Page() {
  const [buy, setBuy] = useState(300000);
  const [sell, setSell] = useState(300000);
  const [margin, setMargin] = useState(0);
  const [ageGroup, setAgeGroup] = useState<'over25' | 'under26'>('over25');
  const result = useMemo(() => {
    const total = Math.max(0, buy) + Math.max(0, sell) + Math.max(0, margin);
    const fee = ageGroup === 'under26' || total <= 500000 ? 0 : Math.min(Math.ceil(total / 1000000) * 1100, 110000);
    const freeRoom = Math.max(0, 500000 - total);
    return { total, fee, freeRoom };
  }, [buy, sell, margin, ageGroup]);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 });

  return <div className="calculator-page">
    <header className="calculator-intro"><p className="page-kicker">MATSUI BOX RATE CALCULATOR</p><h1>1日の約定代金を、<br /><em>合算して判定。</em></h1><p className="lede">松井証券の通常の国内株取引を対象に、現物と信用の1日約定代金を合算し、ボックスレートの概算手数料を表示します。</p><div className="calculator-proof"><span>買付・売却を合算</span><span>現物・信用を合算</span><span>25歳以下の無料条件に対応</span><span>2026年9月8日確認</span></div></header>
    <div className="calculator-shell"><div className="calculator-grid"><section className="calculator-inputs"><div className="calculator-panel-head"><div><span>INPUT</span><h2>当日の約定代金</h2></div></div><div className="field-grid">
      <label className="wide"><span>年齢区分</span><select value={ageGroup} onChange={e => setAgeGroup(e.target.value as 'over25' | 'under26')}><option value="over25">26歳以上</option><option value="under26">25歳以下</option></select></label>
      <label><span>現物買付（円）</span><input type="number" min="0" step="10000" value={buy} onChange={e => setBuy(Number(e.target.value))} /></label>
      <label><span>現物売却（円）</span><input type="number" min="0" step="10000" value={sell} onChange={e => setSell(Number(e.target.value))} /></label>
      <label className="wide"><span>信用取引の約定代金合計（円）</span><input type="number" min="0" step="10000" value={margin} onChange={e => setMargin(Number(e.target.value))} /><small>新規・返済を含む当日の通常信用取引を合算</small></label>
    </div></section><section className="calculator-result"><div className="result-head"><span>ESTIMATE</span><h2>1日の手数料概算</h2></div><div className="total-cost"><strong>{yen.format(result.fee)}</strong><span>円</span></div><p>1日約定代金合計：約{yen.format(result.total)}円</p><p>{ageGroup === 'under26' ? '25歳以下の無料条件を適用' : result.total <= 500000 ? `無料枠の残り：約${yen.format(result.freeRoom)}円` : '50万円の無料枠を超過'}</p><p>1億円超は税込110,000円を上限として計算</p></section></div></div>
    <div className="callout"><strong>対象外取引に注意</strong><p>通常のインターネット経由の現物・信用取引を想定した概算です。一日信用、NISA、単元未満株、立会外分売、電話注文、ベストマッチ改善成功報酬などは別料金・別条件です。PTSナイト取引は約定日の扱いも確認してください。</p></div>
    <nav className="calculator-proof" aria-label="計算根拠と関連記事"><Link href="/stocks/matsui">松井証券コストシート</Link><Link href="/articles/matsui-one-day-margin-cost">一日信用との違い</Link><Link href="/stocks/domestic-fee-comparison">国内株4社比較</Link><a href="https://www.matsui.co.jp/stock/domestic/fee/" target="_blank" rel="noopener noreferrer">公式料金表</a></nav>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section>
  </div>;
}
