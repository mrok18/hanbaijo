'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

function positive(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export default function GoldCfdProviderCostCalculator() {
  const [goldPrice, setGoldPrice] = useState<number | ''>('');
  const [usdJpy, setUsdJpy] = useState<number | ''>('');
  const [lots, setLots] = useState(1);
  const [holdingDays, setHoldingDays] = useState(1);
  const [fxtfSpread, setFxtfSpread] = useState<number | ''>('');
  const [fxtfOpeningFee, setFxtfOpeningFee] = useState<number | ''>('');
  const [fxtfHoldingCost, setFxtfHoldingCost] = useState(0);
  const [dmmSpread, setDmmSpread] = useState<number | ''>('');
  const [dmmHoldingCost, setDmmHoldingCost] = useState(0);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });
  const ready = goldPrice !== '' && usdJpy !== '' && fxtfSpread !== '' && fxtfOpeningFee !== '' && dmmSpread !== '';

  const result = useMemo(() => {
    const price = positive(Number(goldPrice));
    const rate = positive(Number(usdJpy));
    const quantity = positive(lots);
    const days = positive(holdingDays);
    const notional = price * rate * quantity;
    const margin = notional * 0.05;
    const fxtfSpreadCost = positive(Number(fxtfSpread)) * rate * quantity;
    const dmmSpreadCost = positive(Number(dmmSpread)) * rate * quantity;
    const fxtfHold = positive(fxtfHoldingCost) * quantity * days;
    const dmmHold = positive(dmmHoldingCost) * quantity * days;
    const fxtfTotal = fxtfSpreadCost + positive(Number(fxtfOpeningFee)) + fxtfHold;
    const dmmTotal = dmmSpreadCost + dmmHold;
    const difference = Math.abs(fxtfTotal - dmmTotal);
    const lower = fxtfTotal === dmmTotal ? '同額' : fxtfTotal < dmmTotal ? 'FXTF MT5' : 'DMM CFD';
    return { notional, margin, fxtfSpreadCost, dmmSpreadCost, fxtfHold, dmmHold, fxtfTotal, dmmTotal, difference, lower };
  }, [goldPrice, usdJpy, lots, holdingDays, fxtfSpread, fxtfOpeningFee, fxtfHoldingCost, dmmSpread, dmmHoldingCost]);

  return <div className="calculator-page">
    <header className="calculator-intro">
      <p className="page-kicker">GOLD CFD PROVIDER COST COMPARISON</p>
      <h1>金CFD 1Lotを、<br /><em>同じ条件で2社比較。</em></h1>
      <p className="lede">FXTF MT5とDMM CFDの金CFDは、どちらも1Lot＝1トロイオンスです。取引画面で確認した金価格、米ドル円、スプレッド、保有費を入力し、必要証拠金と総コストを円換算します。</p>
      <div className="calculator-proof"><span>1Lot＝1トロイオンス</span><span>証拠金率5％で概算</span><span>保有日数を反映</span><span>入力内容は保存しません</span></div>
    </header>

    <div className="calculator-shell"><div className="calculator-grid">
      <section className="calculator-inputs">
        <div className="calculator-panel-head"><div><span>INPUT</span><h2>同時点の取引条件</h2></div></div>
        <div className="field-grid">
          <label><span>金価格（USD／トロイオンス）</span><input type="number" min="0" step="0.01" placeholder="取引画面の価格" value={goldPrice} onChange={e => setGoldPrice(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>米ドル円</span><input type="number" min="0" step="0.001" placeholder="円換算レート" value={usdJpy} onChange={e => setUsdJpy(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>Lot数</span><input type="number" min="0" step="0.1" value={lots} onChange={e => setLots(Number(e.target.value))} /></label>
          <label><span>保有日数</span><input type="number" min="0" step="1" value={holdingDays} onChange={e => setHoldingDays(Number(e.target.value))} /><small>調整額が発生する日数を入力</small></label>
          <label><span>FXTF スプレッド（USD／oz）</span><input type="number" min="0" step="0.01" placeholder="Ask−Bid" value={fxtfSpread} onChange={e => setFxtfSpread(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>FXTF 新規時の手数料合計（円）</span><input type="number" min="0" step="1" placeholder="最新ランク表から入力" value={fxtfOpeningFee} onChange={e => setFxtfOpeningFee(e.target.value === '' ? '' : Number(e.target.value))} /><small>既存建玉を含むランクで算出した注文全体の金額</small></label>
          <label><span>FXTF 支払スワップ（円／Lot／日）</span><input type="number" min="0" step="0.01" value={fxtfHoldingCost} onChange={e => setFxtfHoldingCost(Number(e.target.value))} /><small>受取または発生なしの場合は0</small></label>
          <label><span>DMM CFD スプレッド（USD／oz）</span><input type="number" min="0" step="0.01" placeholder="Ask−Bid" value={dmmSpread} onChange={e => setDmmSpread(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>DMM 支払金利調整額（円／Lot／日）</span><input type="number" min="0" step="0.01" value={dmmHoldingCost} onChange={e => setDmmHoldingCost(Number(e.target.value))} /><small>受取または発生なしの場合は0</small></label>
        </div>
      </section>

      <section className="calculator-result">
        <div className="result-head"><span>COMPARISON</span><h2>{!ready ? '取引条件を入力' : result.lower === '同額' ? '入力条件では同額' : `${result.lower}が低コスト`}</h2></div>
        <div className="total-cost"><strong>{ready ? yen.format(result.difference) : '—'}</strong><span>円差</span></div>
        <p>想定元本：{goldPrice !== '' && usdJpy !== '' ? `約${yen.format(result.notional)}円` : '—'} ／ 証拠金5％目安：{goldPrice !== '' && usdJpy !== '' ? `約${yen.format(result.margin)}円` : '—'}</p>
        <p>{ready ? `FXTF MT5：合計 約${yen.format(result.fxtfTotal)}円（スプレッド ${yen.format(result.fxtfSpreadCost)}円・新規手数料 ${yen.format(positive(Number(fxtfOpeningFee)))}円・保有 ${yen.format(result.fxtfHold)}円）` : 'FXTF MT5：価格・為替・スプレッド・新規手数料を入力すると表示します'}</p>
        <p>{ready ? `DMM CFD：合計 約${yen.format(result.dmmTotal)}円（スプレッド ${yen.format(result.dmmSpreadCost)}円・保有 ${yen.format(result.dmmHold)}円）` : 'DMM CFD：価格・為替・スプレッドを入力すると表示します'}</p>
        <p>スプレッド相当額：スプレッド（USD/oz）× 米ドル円 × Lot数</p>
        <p>保有費：支払額（円/Lot/日）× Lot数 × 発生日数</p>
      </section>
    </div></div>

    <div className="callout"><strong>比較する時刻と売買方向をそろえる</strong><p>この計算機はライブレートを取得しません。両社の取引画面を同時点で確認し、同じ売買方向の支払調整額を入力してください。証拠金は5％での下限目安です。スリッページ、受取調整額、税金は計算に含みません。</p></div>

    <nav className="calculator-proof" aria-label="計算根拠と関連記事">
      <Link href="/tools/commodity-cfd-provider-cost-comparison">4商品対応の2社比較計算機</Link>
      <Link href="/articles/fxtf-vs-dmm-cfd-gold">FXTFとDMMの金CFD比較</Link>
      <Link href="/articles/fxtf-mt5-gold-cfd-margin">FXTF金CFDの計算</Link>
      <Link href="/articles/dmm-cfd-gold-vs-silver">DMM金・銀比較</Link>
      <a href="https://www.fxtrade.co.jp/cfd/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF公式取引単位</a>
      <a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD公式取引概要</a>
    </nav>

    <section className="affiliate-grid" aria-label="FXTFとDMM CFDの広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
    </section>
    <p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は入力値・計算式・比較結果には影響しません。CFDは元本および利益が保証されず、証拠金を上回る損失が生じる可能性があります。</p>
  </div>;
}
