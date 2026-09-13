import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'FXの0.2銭は何円？スプレッドを数量別に計算',
  description: 'FXの0.2銭は1通貨あたり0.002円です。1,000通貨なら2円、1万通貨なら20円、10万通貨なら200円になる計算式と注意点を解説します。',
  alternates: { canonical: '/articles/fx-spread-cost' },
};

const costRows = [
  { quantity: '1通貨', cost: '0.002円' },
  { quantity: '1,000通貨', cost: '2円' },
  { quantity: '1万通貨', cost: '20円' },
  { quantity: '10万通貨', cost: '200円' },
  { quantity: '100万通貨', cost: '2,000円' },
] as const;

const spreadRows = [
  { spread: '0.1銭', perUnit: '0.001円', cost: '10円' },
  { spread: '0.2銭', perUnit: '0.002円', cost: '20円' },
  { spread: '0.5銭', perUnit: '0.005円', cost: '50円' },
  { spread: '1.0銭', perUnit: '0.01円', cost: '100円' },
] as const;

const faqs = [
  {
    question: 'FXの0.2銭は何円ですか？',
    answer: '0.2銭は1通貨あたり0.002円です。スプレッド相当額は取引数量で変わり、1,000通貨なら2円、1万通貨なら20円、10万通貨なら200円です。',
  },
  {
    question: '0.2銭は0.2円ですか？',
    answer: 'いいえ。1銭は0.01円なので、0.2銭は0.002円です。0.2円と読み違えると100倍の差が生じます。',
  },
  {
    question: 'スプレッド0.2銭なら実際のコストも必ず20円ですか？',
    answer: '1万通貨なら20円は表示値を使った単純計算です。実際のスプレッドは時間帯や相場状況、注文数量で変わる場合があり、スリッページやスワップなどは別に確認します。',
  },
] as const;

export default function Page() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    datePublished: '2026-09-07',
    dateModified: '2026-09-13',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-spread-cost',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <p className="page-kicker">FX SPREAD CALCULATION</p>
      <h1>FXの0.2銭は何円？<br />スプレッドを数量別に計算</h1>
      <p className="lede">
        FXの0.2銭は何円かというと、1通貨あたり0.002円です。実際の負担額は取引数量を掛けて求めるため、
        1,000通貨なら2円、1万通貨なら20円、10万通貨なら200円になります。
      </p>

      <div className="callout">
        <strong>結論：0.2銭は1万通貨で20円</strong>
        <p>「0.2銭＝0.2円」ではありません。1銭＝0.01円なので、0.2銭を円へ直すと0.002円です。</p>
      </div>

      <h2>0.2銭を円へ直す計算式</h2>
      <p>円絡みの通貨ペアでは、最初に銭を100で割って円へ直し、その値に取引通貨数を掛けます。</p>
      <div className="formula-box">
        <code>0.2銭 ÷ 100 × 取引通貨数 ＝ スプレッド相当額</code>
        <small>1万通貨なら、0.002円 × 10,000通貨 ＝ 20円。</small>
      </div>

      <h2>1,000通貨・1万通貨・10万通貨の早見表</h2>
      <div className="data-panel">
        <div className="table-scroll">
          <table className="rates comparison-table">
            <thead><tr><th>取引数量</th><th className="num">0.2銭の相当額</th></tr></thead>
            <tbody>{costRows.map((row) => (
              <tr key={row.quantity}><td className="ex-name">{row.quantity}</td><td className="num"><strong>{row.cost}</strong></td></tr>
            ))}</tbody>
          </table>
        </div>
      </div>
      <p>
        松井証券の公式解説でも、米ドル/円を1万通貨、スプレッド0.2銭で取引する例は20円と計算されています。
        JFXの公式FAQでは、1,000通貨なら2円という同じ計算方法が示されています。
      </p>

      <h2>1万通貨なら、0.1銭・0.5銭はいくら？</h2>
      <div className="data-panel">
        <div className="table-scroll">
          <table className="rates comparison-table">
            <thead><tr><th>スプレッド</th><th className="num">1通貨あたり</th><th className="num">1万通貨の相当額</th></tr></thead>
            <tbody>{spreadRows.map((row) => (
              <tr key={row.spread}><td className="ex-name">{row.spread}</td><td className="num">{row.perUnit}</td><td className="num"><strong>{row.cost}</strong></td></tr>
            ))}</tbody>
          </table>
        </div>
      </div>
      <p>
        スプレッド差が0.1銭なら、1万通貨あたりの差は10円です。1回では小さく見えても、
        取引数量や回数が増えるほど累積額は大きくなります。
      </p>

      <h2>「0.2銭＝20円」がそのまま実負担にならない場合</h2>
      <ol>
        <li><strong>数量が違う：</strong>20円になるのは1万通貨の場合です。1,000通貨なら2円です。</li>
        <li><strong>提示幅が変わる：</strong>早朝、重要指標の前後、相場急変時などはスプレッドが広がる場合があります。</li>
        <li><strong>注文数量や種類に条件がある：</strong>最狭値の対象数量、対象時間、注文方法を公式ページで確認します。</li>
        <li><strong>別のコストがある：</strong>スリッページ、取引手数料、日をまたぐ場合のスワップは計算に含みません。</li>
      </ol>
      <p>
        金融庁も、相場急変で流動性が低下するとスプレッドが広がり、意図した取引が難しくなるおそれを案内しています。
        20円は、公称0.2銭が維持され、その価格差で約定できた場合の試算値です。
      </p>

      <h2>pips表記は会社ごとの単位を確認</h2>
      <p>
        一般的な米ドル/円の説明では1pips＝1銭（0.01円）ですが、取引画面や注文設定で異なる呼び方を使う会社もあります。
        pipsを円換算するときは、会社の公式定義、通貨ペア、決済通貨を先に確認してください。
        円を含まない通貨ペアは、求めた外貨額をさらに円へ換算します。
      </p>

      <div className="callout">
        <strong>自分の数量・回数で計算する</strong>
        <p>取引数量、スプレッド、売買回数を入力すると、1回・月間・年間の負担を比較できます。</p>
        <Link href="/tools/fx-spread-annual-cost-calculator">年間スプレッドコスト計算機を開く →</Link>
      </div>

      <h2>よくある質問</h2>
      {faqs.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <section className="article-affiliate" aria-label="FXTFの広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。計算方法や比較順位とは分けて掲載しています。</p>
      </section>

      <h2>出典と確認日</h2>
      <ul>
        <li><a href="https://www.matsui.co.jp/fx/study/article/glossary/spread/index.html" rel="noreferrer">松井証券「FXのスプレッドとは？取引手数料の決まり方やコストの計算方法」</a></li>
        <li><a href="https://faq.jfx.co.jp/faq/detail?category=36&amp;id=481&amp;site=FX557CTV" rel="noreferrer">JFX「スプレッドの計算方法を教えてください」</a></li>
        <li><a href="https://www.fsa.go.jp/ordinary/iwagai/" rel="noreferrer">金融庁「いわゆる外国為替証拠金取引について」</a></li>
      </ul>
      <p><small>確認日：2026年9月13日。計算結果は説明用の試算であり、実際の提示幅や約定価格を保証するものではありません。</small></p>

      <p><Link href="/tools/fx-pip-value-calculator">1pipsの損益とスプレッド相当額を計算する →</Link></p>
      <p><Link href="/articles/fx-spread-monthly-cost">0.2銭の月間コストを取引回数別に見る →</Link></p>
      <p><Link href="/fx/usdjpy-spread-comparison">米ドル円スプレッド10社比較を見る →</Link></p>
      <p><Link href="/fx">FXコスト比較へ戻る →</Link></p>
    </article>
  );
}
