import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/fx-fee-spread-total-cost-comparison' },
  title: 'FX手数料＋スプレッドの実質コスト比較｜1,000通貨・1万通貨で計算',
  description: 'JFX・MATSUI FX・LION FXの取引手数料と米ドル円スプレッドを同じ条件で比較。1,000通貨・1万通貨・10万通貨の円換算、時間外、例外を確認します。',
};

const providers = [
  {
    name: 'JFX MATRIX TRADER',
    href: '/fx/jfx',
    fee: '0円',
    core: '0.2銭',
    offHours: '7.9銭',
    condition: '9:00〜翌3:00。3:00〜9:00は時間外。原則固定・例外あり',
    source: 'https://www.jfx.co.jp/trading_rule/spread/',
  },
  {
    name: 'MATSUI FX',
    href: '/fx/matsui',
    fee: '0円',
    core: '0.2銭',
    offHours: '0.2〜6.0銭',
    condition: '1万通貨の通常スプレッド。1,000通貨以内の対象成行注文は0.1銭',
    source: 'https://www.matsui.co.jp/fx/spread/?mnu=sd',
  },
  {
    name: 'ヒロセ通商 LION FX',
    href: '/fx/lion-fx',
    fee: '0円',
    core: '0.2銭',
    offHours: '7.9銭',
    condition: '9:00〜翌3:00。3:00〜9:00は時間外。大口・急変時は別条件',
    source: 'https://hirose-fx.co.jp/spread/index.html',
  },
] as const;

const costRows = [
  { size: '1,000通貨', normal: '2円', early: '79円' },
  { size: '1万通貨', normal: '20円', early: '790円' },
  { size: '10万通貨', normal: '200円', early: '7,900円' },
] as const;

const FAQS = [
  { question: 'FXの取引手数料が0円なら、実質コストも0円ですか？', answer: 'いいえ。買値と売値の差であるスプレッド、スワップ、スリッページ、入出金条件などが残ります。取引数量と保有日数をそろえて総額を確認します。' },
  { question: '同じ0.2銭なら、どの会社でもコストは同じですか？', answer: '同じ通貨ペア・数量・時間帯で公称値どおりに約定した場合の単純計算は同じです。実際には適用時間、数量上限、例外、約定差、スワップが異なります。' },
  { question: 'MATSUI FXの0.1銭は1万通貨にも適用されますか？', answer: '通常の1万通貨には通常スプレッドを確認します。0.1銭は数量上限1,000通貨以内の対象成行注文などに限られるため、注文条件を分けてください。' },
] as const;

export default function Page() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    datePublished: '2026-09-20',
    dateModified: '2026-09-20',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-fee-spread-total-cost-comparison',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
      <p className="page-kicker">FX / TOTAL COST COMPARISON</p>
      <h1>FX手数料＋スプレッドの実質コスト比較<br />数量と時間帯で円換算</h1>
      <p className="lede">取引手数料0円でも、スプレッドやスワップがなくなるわけではありません。提携中のJFX・MATSUI FX・LION FXを、米ドル/円・同じ数量・同じ時間帯で比較し、見える負担と例外条件を分けて確認します。</p>

      <div className="callout"><strong>結論：1万通貨・通常時間の0.2銭は約20円</strong><p>対円通貨ペアをスプレッド0.2銭、取引数量1万通貨として単純換算した値です。実際の約定、スワップ、相場急変時の拡大は含みません。</p></div>

      <h2>実質コストの計算式</h2>
      <div className="formula-box"><code>実質売買コスト ≒ スプレッド（銭）÷100 × 取引数量 ＋ 新規・決済手数料</code><small>対円通貨ペアの単純試算。スワップ、スリッページ、入出金費用は別に加算します。</small></div>
      <p>FXでは「手数料0円」という表示と、売買価格に含まれるスプレッドを分けて考えます。取引手数料が無料でも、スプレッド0.2銭なら1万通貨で約20円が価格差として発生します。</p>

      <h2>提携中3サービスの条件比較</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>サービス</th><th>取引手数料</th><th>通常時間の米ドル/円</th><th>時間外の表示</th><th>条件・例外</th></tr></thead><tbody>
        {providers.map((provider) => <tr key={provider.name}><td className="ex-name"><Link href={provider.href}>{provider.name}</Link></td><td><strong>{provider.fee}</strong></td><td>{provider.core}</td><td>{provider.offHours}</td><td><small>{provider.condition}</small></td></tr>)}
      </tbody></table></div><p className="panel-note">各社の公式ページに掲載された公称値です。実測値ではなく、原則固定にも例外があります。広告報酬は比較結果に影響させていません。</p></div>

      <h2>数量別のスプレッド相当額</h2>
      <p>次の表は、0.2銭と7.9銭を同じ数量へ換算したものです。JFXとLION FXでは、公式表示上9:00〜翌3:00が0.2銭、3:00〜9:00が7.9銭です。MATSUI FXは1万通貨では0.2銭、1,000通貨以内の対象成行注文などでは0.1銭の条件があります。</p>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>取引数量</th><th>0.2銭（通常時間）</th><th>7.9銭（時間外例）</th><th>計算</th></tr></thead><tbody>
        {costRows.map((row) => <tr key={row.size}><td className="ex-name">{row.size}</td><td><strong>{row.normal}</strong></td><td>{row.early}</td><td>スプレッド÷100×数量</td></tr>)}
      </tbody></table></div></div>
      <p>同じ会社でも、早朝・重要指標前後・流動性が低い時間帯は表示幅が広がることがあります。取引直前のレート画面を確認し、広告の最狭値を年間コストへそのまま当てはめないでください。</p>

      <h2>料金表だけでは決まらない3つのコスト</h2>
      <ol>
        <li><strong>スワップ：</strong>日をまたいで保有すると、通貨ペアと売買方向に応じて受取または支払いが発生します。</li>
        <li><strong>約定差：</strong>急変時は注文価格と約定価格がずれ、表示スプレッドだけでは説明できない差が出ます。</li>
        <li><strong>例外手数料：</strong>MATSUI FXの受渡決済など、通常の反対売買とは別の手続きを選ぶ場合は個別の料金表を確認します。</li>
      </ol>
      <div className="callout"><strong>比較条件をそろえてから口座を選ぶ</strong><p>米ドル/円・数量・取引時間・往復回数・保有日数を同じにし、スプレッド、手数料、スワップを別々に記録します。最狭スプレッドだけで順位を決めないことが重要です。</p></div>

      <h2>関連する計算と公式条件</h2>
      <ul>
        <li><Link href="/tools/fx-spread-annual-cost-calculator">取引回数を含む年間スプレッドコストを計算する →</Link></li>
        <li><Link href="/articles/fx-spread-cost">FXスプレッドを銭から円へ換算する →</Link></li>
        <li><Link href="/articles/jfx-fees-total-cost">JFXの無料手数料とスワップを確認する →</Link></li>
        <li><Link href="/articles/matsui-fx-spread-rules">MATSUI FXの数量・時間別スプレッドを見る →</Link></li>
        <li><Link href="/fx/usdjpy-spread-comparison">米ドル円の公称スプレッド10社比較へ →</Link></li>
      </ul>

      <h2>よくある質問</h2>
      <div className="faq-list">{FAQS.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>

      <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式料金表</h2><ul>
        {providers.map((provider) => <li key={provider.name}><a href={provider.source} target="_blank" rel="noopener noreferrer">{provider.name}「米ドル/円スプレッド」</a></li>)}
        <li><a href="https://www.fsa.go.jp/ordinary/iwagai/" target="_blank" rel="noopener noreferrer">金融庁「いわゆる外国為替証拠金取引について」</a></li>
      </ul><p>公称条件と計算例の確認日：2026年9月20日。料金、時間帯、キャンペーン、取引上限は変更される場合があるため、申込・発注前に各社公式画面を確認してください。</p></section>

      <section className="article-affiliate" aria-label="提携中のFXサービス"><AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} /><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><AffiliateOfferCard offer={AFFILIATE_OFFERS['hirose-fx-accesstrade']} /><p className="affiliate-disclosure">上記は提携広告です。広告報酬は比較表、計算例、掲載順位に影響しません。FXは元本および利益が保証されず、損失が生じる場合があります。</p></section>
    </article>
  );
}
