import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTFの取引コストは？手数料・最小単位・証拠金を確認',
  description: 'FXTF GX-FXの取引手数料、最低取引単位、必要証拠金、スプレッドとスワップの確認点を公式情報から整理します。',
};

export default function FxtfPage() {
  return (
    <div className="provider-page">
      <section className="provider-hero">
        <div>
          <p className="page-kicker">PROVIDER FACT SHEET / FX</p>
          <h1>FXTFのコストを、<br />4項目に分けて確認。</h1>
          <p className="lede">FXTF GX-FXは、スプレッドだけでなく建玉連動手数料がある点を含めて総額を見ます。公式条件を、取引前に確認する順番で整理しました。</p>
          <div className="hero-actions">
            <Link className="button secondary" href="/tools/cost-calculator">自分の数量で試算</Link>
            <Link className="button secondary" href="/fx">FX比較へ戻る</Link>
          </div>
        </div>
        <aside className="provider-stamp">
          <span>OFFICIAL FACTS</span>
          <strong>2026.09.07 確認</strong>
          <dl>
            <div><dt>商品</dt><dd>FXTF GX-FX</dd></div>
            <div><dt>通貨ペア</dt><dd>29</dd></div>
            <div><dt>最低単位</dt><dd>1,000通貨</dd></div>
            <div><dt>データ</dt><dd>再掲載許諾を照会中</dd></div>
          </dl>
        </aside>
      </section>

      <section className="provider-section">
        <p className="section-index">01 / COST MAP</p>
        <h2>コストは「スプレッド＋手数料＋保有費」で見る</h2>
        <div className="provider-fact-grid">
          <article><b>SPREAD</b><h3>スプレッド</h3><p>BidとAskの差です。広告表示には対象時間や例外条件があるため、提示率と最大値も確認します。</p></article>
          <article><b>FEE</b><h3>建玉連動手数料</h3><p>GX-FXには建玉連動手数料があります。通貨ペア、売買種別、建玉・発注数量の合計で金額が変わります。</p></article>
          <article><b>HOLDING</b><h3>スワップ</h3><p>NY時間17時をまたいで保有したポジションに付与されます。買い・売りと付与日数を確認します。</p></article>
          <article><b>EXECUTION</b><h3>約定・スリッページ</h3><p>表示レートと実際の約定価格に差が出る可能性を含め、短期売買の負担を判断します。</p></article>
        </div>
      </section>

      <section className="provider-section provider-split">
        <div>
          <p className="section-index">02 / TRADE SIZE</p>
          <h2>1Lotは1万通貨、最低0.1Lot</h2>
          <p>最低取引単位は1,000通貨です。個人口座の取引証拠金は原則として取引時価総額の4％で、レバレッジ25倍に相当します。</p>
          <div className="formula-box">
            <code>例：米ドル/円140円 × 1,000通貨 × 4％ ＝ 5,600円</code>
            <small>FXTF公式ページの単純計算例。ZAR/JPY・MXN/JPYは証拠金率8％と案内されています。</small>
          </div>
        </div>
        <div className="provider-checklist">
          <h3>申込み前の確認事項</h3>
          <ul>
            <li>取引予定数量での建玉連動手数料</li>
            <li>取引時間帯別のスプレッド条件</li>
            <li>買い・売り双方のスワップ</li>
            <li>ロスカットと証拠金判定のルール</li>
          </ul>
          <p>口座維持費は無料、初回最低入金額は条件なしと公表されています。</p>
        </div>
      </section>

      <section className="provider-source">
        <div><span>SOURCE</span><strong>FXTF公式情報</strong></div>
        <a href="https://www.fxtrade.co.jp/gx-intro/" target="_blank" rel="noopener noreferrer">GX-FX取引概要を確認 ↗</a>
      </section>

      <section className="provider-offer" aria-label="FXTFの広告">
        <div>
          <p className="section-index">03 / OFFICIAL SITE</p>
          <h2>最新条件は公式サイトで最終確認</h2>
          <p>以下はA8.netの提携広告です。掲載報酬は、事実確認や将来の実測順位に影響しません。</p>
        </div>
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
      </section>
      <p className="affiliate-disclosure">FXは元本および利益が保証されず、預けた証拠金を上回る損失が生じる場合があります。契約締結前交付書面を確認してください。</p>
    </div>
  );
}
