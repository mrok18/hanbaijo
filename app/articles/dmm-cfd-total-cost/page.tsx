import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM CFDは手数料0円？スプレッド・調整額の総コスト',
  description: 'DMM CFDの取引手数料0円と総コストの違いを、スプレッド、金利調整額、価格調整額、約定差に分けて整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DMM CFD / TOTAL COST</p>
      <h1>DMM CFDは手数料0円？<br />スプレッド・調整額の総コスト</h1>
      <p className="lede">DMM CFDの売買手数料とアカウント維持手数料は無料です。ただし、売値と買値の差、保有中の調整額、注文価格と約定価格の差まで含めると、取引の負担は0円とは限りません。</p>

      <div className="callout"><strong>無料なのは「売買手数料」</strong><p>短期売買ではスプレッド、日をまたぐ保有では調整額の影響が増えます。取引前に銘柄・数量・保有期間をそろえて総額を見ます。</p></div>

      <h2>DMM CFDで見る4つの負担</h2>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>売買手数料</h3><p>公式案内では無料です。アカウント維持手数料や出金手数料も無料と案内されています。</p></article>
        <article><b>02</b><h3>スプレッド</h3><p>BidとAskの差です。新規取引をした直後に同値で決済できないため、実質的な売買コストになります。</p></article>
        <article><b>03</b><h3>各種調整額</h3><p>銘柄により金利調整額または価格調整額が発生し、保有方向に応じて受取りまたは支払いとなります。</p></article>
        <article><b>04</b><h3>約定差</h3><p>相場急変時や逆指値注文では、指定・表示した価格と実際の約定価格に差が生じる場合があります。</p></article>
      </div>

      <h2>スプレッドを円に直す</h2>
      <div className="formula-box">
        <code>スプレッド相当額 ＝（Ask − Bid）× 取引単位 × Lot数 × 円換算レート</code>
        <small>円建ての日本225では円換算レートは不要です。</small>
      </div>
      <p>DMM CFD公式ページの日本225の説明例では、Bid 28,669円、Ask 28,676円で差は7円、1Lotは10単位です。新規買い直後に価格が動かず売却した場合の差は、1Lotあたり70円となります。</p>
      <div className="formula-box"><code>（28,676円 − 28,669円）× 10単位 × 1Lot ＝ 70円</code><small>公式ページに掲載された説明例であり、現在の配信レートや固定スプレッドを示すものではありません。</small></div>

      <h2>保有中の負担は銘柄で分かれる</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>参照原資産</th><th>対象例</th><th>発生する調整</th><th>主な確認タイミング</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">スポット</td><td>金スポット・銀スポット</td><td><strong>金利調整額</strong></td><td>原則、営業日をまたいだ保有ごと</td></tr>
            <tr><td className="ex-name">先物</td><td>全指数、原油など</td><td><strong>価格調整額</strong></td><td>参照限月の切替時（概ね1〜3か月ごと）</td></tr>
          </tbody>
        </table>
      </div></div>
      <p>金利調整額は各営業日のクローズ時点で保有するポジションに対して、価格調整額は指定された調整日のマーケットクローズ時点で保有するポジションに対して受払いが行われます。</p>

      <h2>価格調整額は単独の利益・損失ではない</h2>
      <p>価格調整額は、参照する先物の限月切替で生じる価格変動を相殺するための調整です。受取りなら得、支払いなら損と単独で判断せず、切替後の参照価格の変化と合わせて確認します。</p>
      <p>また、価格調整を行う銘柄では、調整実施日の終了後から翌営業日の開始までに未約定の指値・逆指値注文が取り消されます。保有コストだけでなく、注文管理にも影響します。</p>

      <h2>スプレッドは固定ではない</h2>
      <p>DMM CFDはリアルタイムレートを案内していますが、スプレッドは固定されていません。主要国の祝日、取引時間の終了前後、経済指標の発表時など、市場環境や流動性によって大きく広がる可能性があります。</p>
      <ul>
        <li>発注前に取引画面のBid・Askを同時に確認する</li>
        <li>重要指標の直前直後と休場明けを平常時と分ける</li>
        <li>逆指値は指定価格での約定を保証するものではないと理解する</li>
        <li>長期保有では調整額カレンダーを先に確認する</li>
      </ul>

      <h2>取引期間別の確認順</h2>
      <div className="fx-metric-grid">
        <article><b>DAY TRADE</b><h3>当日中に決済</h3><p>まずスプレッドと約定差を確認します。通常は日をまたぐ調整額の対象外です。</p></article>
        <article><b>OVERNIGHT</b><h3>数日保有</h3><p>金・銀は毎営業日の金利調整額を確認し、指数・その他商品は価格調整日を確認します。</p></article>
        <article><b>EVENT</b><h3>重要指標をまたぐ</h3><p>スプレッド拡大と価格飛びを想定し、通常時より大きい許容コストを置きます。</p></article>
        <article><b>LONG HOLD</b><h3>数週間以上</h3><p>価格調整額の発生日、受払い方向、円換算レートまで記録して総額を集計します。</p></article>
      </div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://fx.dmm.com/cfd/" target="_blank" rel="noopener noreferrer">DMM CFD公式サイト</a></li>
          <li><a href="https://fx.dmm.com/cfd/service/spread/" target="_blank" rel="noopener noreferrer">DMM CFD「スプレッドの基礎知識」</a></li>
          <li><a href="https://fx.dmm.com/cfd/service/swapcalendar/" target="_blank" rel="noopener noreferrer">DMM CFD「金利調整額・価格調整額」</a></li>
          <li><a href="https://fx.dmm.com/support/faqs/article/00161/" target="_blank" rel="noopener noreferrer">DMM FX/CFD「取引手数料（売買手数料）はいくらですか？」</a></li>
        </ul>
        <p>制度・費用の説明は2026年9月7日に確認しました。実際のスプレッドと調整額は取引前に公式画面で確認してください。</p>
      </section>

      <p><Link href="/cfd/dmm-cfd">DMM CFDのコストシートを見る →</Link></p>
      <p><Link href="/articles/dmm-cfd-margin-leverage">DMM CFDの必要証拠金を計算する →</Link></p>
      <p><Link href="/articles/cfd-price-adjustment">CFDの価格調整額を詳しく見る →</Link></p>

      <section className="article-affiliate" aria-label="関連する広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。費用の説明・評価とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
