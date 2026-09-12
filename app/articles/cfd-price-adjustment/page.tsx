import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'CFDの調整額とは？価格・金利・権利調整額の違い',
  description: 'CFDの価格調整額・金利調整額・権利調整額（配当金調整額）の違いを、対象商品、発生時点、受払い、計算例で整理します。',
  alternates: { canonical: '/articles/cfd-price-adjustment' },
};

const FAQS = [
  {
    question: 'CFDの調整額は手数料ですか？',
    answer: '売買手数料とは別の受払いです。参照先物の限月交代、翌日への持ち越し、配当やコーポレートアクションなどをCFD建玉へ反映するために発生し、受取りになる場合と支払いになる場合があります。',
  },
  {
    question: '価格調整額を受け取れば利益になりますか？',
    answer: '価格調整額だけを見て利益とは判断できません。参照する先物を期近から期先へ切り替えた際のCFD価格の変化と、建玉の評価損益を相殺する目的で受け払いされるため、価格変化と合算して確認します。',
  },
  {
    question: 'CFDで毎日発生する可能性がある調整額はどれですか？',
    answer: '会社や銘柄によりますが、金利調整額やファンディングコストは営業日終了をまたいだ建玉に日次で発生する場合があります。価格調整額は先物の限月交代時、権利調整額は配当やコーポレートアクションなどの権利発生時が中心です。',
  },
] as const;

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <article>
      <ArticleStructuredData slug="cfd-price-adjustment" publishedAt="2026-09-07" modifiedAt="2026-09-12" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
      <p className="page-kicker">CFD / THREE ADJUSTMENTS</p>
      <h1>CFDの調整額とは？<br />価格・金利・権利の違い</h1>
      <p className="lede">CFDの「調整額」は1種類ではありません。参照先物の限月交代に伴う価格調整額、建玉の持ち越しに伴う金利調整額、配当や企業行動を反映する権利調整額に分けると、発生日と受払いを読み違えにくくなります。</p>

      <div className="callout"><strong>先に確認するのは、銘柄が何を参照しているか</strong><p>同じCFDでも、先物、スポット、株式・ETFのどれを参照するかで対象の調整額が変わります。名称と計算方法も会社ごとに異なるため、取引画面の銘柄詳細と調整額カレンダーを優先します。</p></div>

      <h2>CFDの3種類の調整額を比較</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
        <thead><tr><th>種類</th><th>主な対象</th><th>発生する理由</th><th>主なタイミング</th></tr></thead>
        <tbody>
          <tr><td className="ex-name">価格調整額</td><td>先物を参照する指数・商品CFD</td><td>期近から期先への限月交代で生じる価格差を調整</td><td>会社が定める価格調整日</td></tr>
          <tr><td className="ex-name">金利調整額</td><td>スポット、株式、ETFなど</td><td>ロールオーバーの金利、資金調達費、貸株料などを反映</td><td>取引終了時点をまたいで保有した営業日</td></tr>
          <tr><td className="ex-name">権利調整額</td><td>株式・ETF・ETNなど</td><td>配当・分配金やコーポレートアクションを反映</td><td>配当落ち・権利発生などの指定日</td></tr>
        </tbody>
      </table></div><p className="panel-note">一般的な分類です。権利調整額を「配当金調整額」、金利調整額を「ファンディングコスト」などと呼ぶ会社もあります。対象銘柄、付与時点、税相当額、端数処理は各社ルールで確認してください。</p></div>

      <h2>価格調整額：先物の限月交代を相殺する</h2>
      <p>先物には期限があるため、先物を参照するCFDは期日を迎える前に参照先を期近から期先へ切り替えます。限月ごとの価格は金利、配当利回り、保管費などの影響で異なるため、切替時にCFD価格も変わります。</p>
      <p>価格調整額は、その価格変化だけで建玉の評価損益が増減しないように受け払いするものです。期先が期近より高いときは買い建玉が支払い・売り建玉が受取りになるのが基本ですが、実際の符号と計算式は会社の表示を確認します。</p>
      <div className="formula-box">
        <code>価格調整額の例 ＝（切替前価格 − 切替後価格）× 取引単位 × 円換算レート × Lot数</code>
        <small>買い建玉の簡略例。売り建玉は受払方向が逆になります。端数処理と換算時点は各社ルールに従います。</small>
      </div>
      <p>切替前76.00ドル、切替後76.30ドル、取引単位10、米ドル/円150円、1Lotなら、買い建玉の簡略計算は（76.00−76.30）×10×150＝−450円です。同時に参照価格が0.30ドル上がるため、調整額だけを損益として切り離しません。</p>

      <h2>金利調整額：翌日へ持ち越した建玉に発生</h2>
      <p>金利調整額は、営業日の取引終了時点をまたいで建玉を保有した場合に発生することがあります。スポット商品のロールオーバー、株式CFDの資金調達コストや貸株料など、算定要素は商品と会社で異なります。</p>
      <ul>
        <li>毎営業日か、特定曜日に複数日分をまとめるか</li>
        <li>買い・売りのどちらが受取りまたは支払いか</li>
        <li>年率表示か、1Lotあたりの金額表示か</li>
        <li>外貨建ての場合、どの換算レートを使うか</li>
      </ul>

      <h2>権利調整額：配当・分配金などを反映</h2>
      <p>株式やETF・ETNを参照するCFDでは、配当・分配金やコーポレートアクションに応じて権利調整額が発生することがあります。一般に買い建玉は受取り、売り建玉は支払いですが、税相当額や会社ごとの計算条件が反映される場合があります。</p>
      <div className="callout"><strong>現物株の配当そのものではありません</strong><p>CFDでは原資産を保有しないため、配当・分配金そのものではなく相当額の調整です。受取額だけで判断せず、同時に発生する金利調整額や価格変化も含めて損益を確認します。</p></div>

      <h2>会社によって種類と名称が違う</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
        <thead><tr><th>公式案内の例</th><th>掲載される調整</th><th>読み分け</th></tr></thead>
        <tbody>
          <tr><td className="ex-name">GMOクリック証券 CFD</td><td>価格・金利・権利調整額</td><td>先物、スポット、株式・ETF等で対象が分かれる</td></tr>
          <tr><td className="ex-name">DMM CFD</td><td>価格・金利調整額</td><td>先物参照銘柄と金・銀スポットを分ける</td></tr>
          <tr><td className="ex-name">IG証券 CFD</td><td>ファンディングコスト・配当金調整額など</td><td>商品詳細で保有コストと配当相当額を確認</td></tr>
        </tbody>
      </table></div><p className="panel-note">サービス間で同じ名称・同じ対象とは限りません。比較時は名称ではなく、原資産、発生時点、算定単位、受払方向をそろえます。</p></div>

      <h2>調整額カレンダーを確認する順番</h2>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>原資産</h3><p>先物、スポット、株式・ETFのどれを参照する銘柄かを確認します。</p></article>
        <article><b>02</b><h3>基準時点</h3><p>取引終了時点、価格調整日、配当落ち日など、建玉判定の時点を確認します。</p></article>
        <article><b>03</b><h3>受払方向</h3><p>買いと売りの欄を分け、受取りをプラス、支払いをマイナスとして記録します。</p></article>
        <article><b>04</b><h3>周辺影響</h3><p>未約定注文の取消し、ロスカットレートの再計算、必要証拠金の変化も確認します。</p></article>
      </div>

      <h2>CFDの調整額に関するFAQ</h2>
      {FAQS.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.click-sec.com/corp/guide/cfd/interestrate/" target="_blank" rel="noopener noreferrer">GMOクリック証券「3種類の調整額」</a></li>
          <li><a href="https://www.click-sec.com/corp/guide/cfd/rule/" target="_blank" rel="noopener noreferrer">GMOクリック証券「CFD取引ルール」</a></li>
          <li><a href="https://fx.dmm.com/cfd/service/swapcalendar/" target="_blank" rel="noopener noreferrer">DMM CFD「金利調整額・価格調整額」</a></li>
          <li><a href="https://fx.dmm.com/policy/regulation/overview_cfd.pdf" target="_blank" rel="noopener noreferrer">DMM CFD「店頭商品デリバティブ取引説明書」</a></li>
          <li><a href="https://www.ig.com/jp/help-and-support/cfds/fees-and-charges/what-are-igs-shares-cfd-product-details" target="_blank" rel="noopener noreferrer">IG証券「株式CFD 銘柄詳細情報」</a></li>
        </ul>
        <p>制度・商品情報は2026年9月12日に確認しました。最新の発生日と金額は各社の取引画面・公式カレンダーを確認してください。</p>
      </section>

      <p><Link href="/articles/dmm-cfd-adjustment-calendar">DMM CFDの調整額カレンダーを確認する →</Link></p>
      <p><Link href="/articles/dmm-cfd-total-cost">DMM CFDの総コストを見る →</Link></p>
      <p><Link href="/cfd">CFDコスト比較へ戻る →</Link></p>

      <section className="article-affiliate" aria-label="関連する広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。調整額の説明・評価とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
