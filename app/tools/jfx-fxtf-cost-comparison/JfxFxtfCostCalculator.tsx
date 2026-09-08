'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

function positive(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export default function JfxFxtfCostCalculator() {
  const [units, setUnits] = useState(10000);
  const [roundTrips, setRoundTrips] = useState(10);
  const [jfxSpread, setJfxSpread] = useState(0.2);
  const [jfxSlippage, setJfxSlippage] = useState(0);
  const [fxtfSpread, setFxtfSpread] = useState<number | ''>('');
  const [fxtfOpeningFee, setFxtfOpeningFee] = useState<number | ''>('');
  const [fxtfSlippage, setFxtfSlippage] = useState(0);
  const yen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 2 });
  const fxtfReady = fxtfSpread !== '' && fxtfOpeningFee !== '';

  const result = useMemo(() => {
    const quantity = positive(units);
    const trades = positive(roundTrips);
    const jfxPerTrade = (positive(jfxSpread) + positive(jfxSlippage)) / 100 * quantity;
    const fxtfPerTrade = (positive(Number(fxtfSpread)) + positive(fxtfSlippage)) / 100 * quantity + positive(Number(fxtfOpeningFee));
    const jfxTotal = jfxPerTrade * trades;
    const fxtfTotal = fxtfPerTrade * trades;
    const difference = Math.abs(jfxTotal - fxtfTotal);
    const lower = jfxTotal === fxtfTotal ? '同額' : jfxTotal < fxtfTotal ? 'JFX' : 'FXTF';
    return { jfxPerTrade, fxtfPerTrade, jfxTotal, fxtfTotal, difference, lower };
  }, [units, roundTrips, jfxSpread, jfxSlippage, fxtfSpread, fxtfOpeningFee, fxtfSlippage]);

  return <div className="calculator-page">
    <header className="calculator-intro">
      <p className="page-kicker">JFX VS FXTF COST CALCULATOR</p>
      <h1>同じ通貨数・回数で、<br /><em>2社の総コストを比較。</em></h1>
      <p className="lede">JFXのスプレッドと、FXTFのスプレッド＋建玉連動手数料を円換算します。実際の取引画面で確認した数値を入力できるため、キャンペーン条件や時間帯が変わっても同じ式で比較できます。</p>
      <div className="calculator-proof"><span>1,000通貨から対応</span><span>建玉連動手数料を分離</span><span>想定約定差を加算</span><span>入力内容は保存しません</span></div>
    </header>

    <div className="calculator-shell"><div className="calculator-grid">
      <section className="calculator-inputs">
        <div className="calculator-panel-head"><div><span>INPUT</span><h2>共通の取引条件</h2></div></div>
        <div className="field-grid">
          <label><span>取引通貨数</span><input type="number" min="0" step="1000" value={units} onChange={e => setUnits(Number(e.target.value))} /></label>
          <label><span>往復回数</span><input type="number" min="0" step="1" value={roundTrips} onChange={e => setRoundTrips(Number(e.target.value))} /></label>
          <label><span>JFX スプレッド（銭）</span><input type="number" min="0" step="0.1" value={jfxSpread} onChange={e => setJfxSpread(Number(e.target.value))} /></label>
          <label><span>JFX 1往復分の想定約定差（銭）</span><input type="number" min="0" step="0.1" value={jfxSlippage} onChange={e => setJfxSlippage(Number(e.target.value))} /></label>
          <label><span>FXTF スプレッド（銭）</span><input type="number" min="0" step="0.1" placeholder="取引画面の値を入力" value={fxtfSpread} onChange={e => setFxtfSpread(e.target.value === '' ? '' : Number(e.target.value))} /></label>
          <label><span>FXTF 新規1回の建玉連動手数料（円）</span><input type="number" min="0" step="1" placeholder="公式ランクの金額を入力" value={fxtfOpeningFee} onChange={e => setFxtfOpeningFee(e.target.value === '' ? '' : Number(e.target.value))} /><small>同じ銘柄・方向の保有数量を含む公式ランクを確認</small></label>
          <label><span>FXTF 1往復分の想定約定差（銭）</span><input type="number" min="0" step="0.1" value={fxtfSlippage} onChange={e => setFxtfSlippage(Number(e.target.value))} /></label>
        </div>
      </section>

      <section className="calculator-result">
        <div className="result-head"><span>COMPARISON</span><h2>{!fxtfReady ? 'FXTFの条件を入力' : result.lower === '同額' ? '入力条件では同額' : `${result.lower}が低コスト`}</h2></div>
        <div className="total-cost"><strong>{fxtfReady ? yen.format(result.difference) : '—'}</strong><span>円差</span></div>
        <p>JFX：1往復 約{yen.format(result.jfxPerTrade)}円 ／ 合計 約{yen.format(result.jfxTotal)}円</p>
        <p>{fxtfReady ? `FXTF：1往復 約${yen.format(result.fxtfPerTrade)}円 ／ 合計 約${yen.format(result.fxtfTotal)}円` : 'FXTF：スプレッドと建玉連動手数料を入力すると表示します'}</p>
        <p>スプレッド相当額：（銭÷100）×通貨数×往復回数</p>
        <p>FXTF合計：スプレッド相当額＋建玉連動手数料×新規回数＋想定約定差</p>
      </section>
    </div></div>

    <div className="callout"><strong>FXTFの数値は取引時点の条件を入力</strong><p>特定の銘柄・数量・キャンペーンを断定しないため、FXTFのスプレッドと建玉連動手数料は空欄にしています。公式手数料表で、同一銘柄・同一売買方向の既存建玉と新規注文の合計数量に対応する金額を確認してください。JFXの初期値0.2銭も時間帯・例外条件のある公称値です。</p></div>

    <nav className="calculator-proof" aria-label="計算根拠と関連記事">
      <Link href="/articles/jfx-vs-fxtf">JFXとFXTFの比較記事</Link>
      <Link href="/articles/jfx-fees-total-cost">JFXの総コスト</Link>
      <Link href="/articles/fxtf-position-fee-calculation">FXTF建玉連動手数料</Link>
      <a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX公式取引ルール</a>
      <a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF公式手数料表</a>
    </nav>

    <section className="affiliate-grid" aria-label="JFXとFXTFの広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} />
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
    </section>
    <p className="affiliate-disclosure">上記はA8.netの提携広告です。申込み後に所定条件を満たすと当サイトが報酬を受け取る場合があります。広告報酬は入力値・計算式・比較結果には影響しません。FXは元本や利益が保証されず、証拠金を上回る損失が生じる場合があります。</p>
  </div>;
}
