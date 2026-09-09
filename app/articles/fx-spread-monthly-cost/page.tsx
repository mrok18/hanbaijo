import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'FXのスプレッドは月いくら？取引回数別にコストを計算',
  description: '米ドル円0.2銭を例に、1,000通貨・1万通貨・10万通貨の1回と月間20日・1日5回のスプレッドコストを円で計算します。',
};

const rows = [
  { size: '1,000通貨', once: '2円', monthly1: '40円', monthly5: '200円' },
  { size: '1万通貨', once: '20円', monthly1: '400円', monthly5: '2,000円' },
  { size: '10万通貨', once: '200円', monthly1: '4,000円', monthly5: '20,000円' },
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    datePublished: '2026-09-09',
    dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-spread-monthly-cost',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="page-kicker">FX MONTHLY COST</p>
      <h1>FXのスプレッドは月いくら？<br />取引回数別にコストを計算</h1>
      <p className="lede">
        1回では小さく見えるスプレッドも、数量と取引回数を掛けると月間負担が見えてきます。
        米ドル/円0.2銭を共通条件にして、1日1回・5回の往復売買を20日続けた場合を試算します。
      </p>

      <div className="callout">
        <strong>先に自分の条件で計算する</strong>
        <p>数量、スプレッド、手数料、保有日数を入力すると、取引ごとの概算コストを円で確認できます。</p>
        <Link href="/tools/cost-calculator">無料の取引コスト計算機を開く →</Link>
      </div>

      <h2>0.2銭は1通貨あたり0.002円</h2>
      <p>
        1銭は0.01円なので、0.2銭は0.002円です。JFXの公式FAQでも、米ドル/円0.2銭を
        1,000通貨取引した場合の実質的なコスト例は2円と説明されています。
      </p>
      <div className="formula-box">
        <code>スプレッド（円）× 取引数量 × 往復取引回数</code>
        <small>0.002円 × 1万通貨 × 1回 ＝ 20円</small>
      </div>

      <h2>取引回数別の月間コスト早見表</h2>
      <div className="table-scroll">
        <table className="rates">
          <thead>
            <tr><th>取引数量</th><th>1往復</th><th>1日1回×20日</th><th>1日5回×20日</th></tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.size}><td>{row.size}</td><td>{row.once}</td><td>{row.monthly1}</td><td>{row.monthly5}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        たとえば1万通貨を1日5回、月20日売買すると、0.2銭が維持された単純計算でも月2,000円です。
        10万通貨なら月2万円になります。比較するときは「最狭値」だけでなく、自分の数量と頻度までそろえます。
      </p>

      <h2>この試算に含まれない3つの差</h2>
      <ol>
        <li><strong>スプレッドの拡大：</strong>早朝、重要指標の前後、相場急変時などは表示幅が広がる場合があります。</li>
        <li><strong>スリッページ：</strong>発注時に見た価格と約定価格がずれると、表示スプレッド以外の差が生じます。</li>
        <li><strong>保有コスト：</strong>日をまたぐ取引では、受取または支払スワップも総コストに影響します。</li>
      </ol>
      <p>
        金融庁も、相場急変や流動性低下時にはスプレッドが広がり、意図した取引が難しくなるおそれを案内しています。
        このため早見表は「0.2銭どおりに約定した場合の試算値」であり、将来の実負担を保証するものではありません。
      </p>

      <h2>比較は月額から逆算する</h2>
      <p>
        会社間のスプレッド差が0.1銭なら、1万通貨1往復の差は10円です。月100往復では1,000円になります。
        一方、少額・低頻度なら差は小さく、最低取引単位、注文機能、入出金条件などを優先した方が合う場合もあります。
      </p>
      <ul>
        <li><Link href="/articles/fx-spread-difference-annual-cost">スプレッド差0.1銭の年間コスト</Link></li>
        <li><Link href="/fx/usdjpy-spread-comparison">米ドル円スプレッド10社比較</Link></li>
        <li><Link href="/articles/fx-spread-time">スプレッドが広がりやすい時間帯</Link></li>
        <li><Link href="/articles/fx-zero-spread-total-cost">0.0銭でも確認したい総コスト</Link></li>
        <li><Link href="/tools/trading-break-even-calculator">コスト回収に必要な値幅を計算</Link></li>
      </ul>

      <section className="article-affiliate" aria-label="提携中のFXサービス">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} />
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">
          広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。広告報酬は計算結果や比較順位に反映しません。
        </p>
      </section>

      <h2>出典と確認日</h2>
      <ul>
        <li><a href="https://faq.jfx.co.jp/faq/detail?category=36&amp;id=481&amp;site=FX557CTV" rel="noreferrer">JFX「スプレッドの計算方法を教えてください」</a></li>
        <li><a href="https://www.fsa.go.jp/ordinary/iwagai/" rel="noreferrer">金融庁「いわゆる外国為替証拠金取引について」</a></li>
      </ul>
      <p><small>確認日：2026年9月9日。掲載値は計算例であり、各社の最新条件は公式サイトで確認してください。</small></p>
      <p><Link href="/fx">FXコスト比較へ戻る →</Link></p>
    </article>
  );
}
