import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/fx-spread-difference-annual-cost' },
  title: 'FXのスプレッド差0.1銭は年間いくら？数量・回数別に比較',
  description: 'FX会社の米ドル円スプレッド差0.1銭を、1,000通貨・1万通貨・10万通貨と1日1回・5回の年間コスト差へ換算します。',
};

const annualRows = [
  { size: '1,000通貨', once: '1円', daily1: '240円', daily5: '1,200円' },
  { size: '1万通貨', once: '10円', daily1: '2,400円', daily5: '12,000円' },
  { size: '10万通貨', once: '100円', daily1: '24,000円', daily5: '120,000円' },
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    datePublished: '2026-09-09',
    dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-spread-difference-annual-cost',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="page-kicker">FX ANNUAL COST GAP</p>
      <h1>FXのスプレッド差0.1銭は<br />年間いくら？</h1>
      <p className="lede">
        0.1銭の差は、1万通貨なら1往復10円です。小さく見えても、数量と回数を年間分掛けると
        口座選びで検討すべき金額かどうかを判断できます。ここでは年間240取引日として試算します。
      </p>

      <div className="callout">
        <strong>結論：1万通貨を1日5回なら年間1万2,000円差</strong>
        <p>ただし、公称スプレッドの適用時間、数量上限、約定差が同じという仮定での単純計算です。</p>
        <Link href="/tools/fx-spread-annual-cost-calculator">2社の年間コスト差を計算する →</Link>
      </div>

      <h2>0.1銭の差を円へ直す</h2>
      <p>0.1銭は0.001円です。取引数量を掛けると、1往復あたりのコスト差を求められます。</p>
      <div className="formula-box">
        <code>0.001円 × 取引数量 × 年間往復回数</code>
        <small>1万通貨を1日5回、年間240日なら 0.001円 × 10,000 × 1,200回</small>
      </div>

      <h2>数量・取引回数別の年間差</h2>
      <div className="table-scroll">
        <table className="rates">
          <thead><tr><th>取引数量</th><th>1往復の差</th><th>1日1回×240日</th><th>1日5回×240日</th></tr></thead>
          <tbody>
            {annualRows.map((row) => (
              <tr key={row.size}><td>{row.size}</td><td>{row.once}</td><td>{row.daily1}</td><td>{row.daily5}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>スプレッド差を優先すべき人</h2>
      <p>
        数量が大きい人、取引回数が多い人、短い値幅を狙う人ほど、0.1銭の差が損益に占める割合は大きくなります。
        反対に1,000通貨を低頻度で取引する場合、年間差は限定的です。少額取引への対応、注文方法、入出金、
        サポートなどを含めて比較する方が実際の使いやすさに近づきます。
      </p>

      <h2>数字どおりの差にならない理由</h2>
      <ol>
        <li><strong>原則固定の対象時間：</strong>同じ通貨ペアでも時間帯によって提示条件が変わる場合があります。</li>
        <li><strong>数量条件：</strong>広告の最狭値には、1回の発注数量や期間などの条件が付く場合があります。</li>
        <li><strong>スプレッド拡大：</strong>早朝、重要指標、急変時には平常時より広がる可能性があります。</li>
        <li><strong>約定差：</strong>注文価格と実際の約定価格の差は、この早見表に含めていません。</li>
      </ol>
      <p>
        金融庁も、相場急変や流動性低下時にはスプレッドが広がり、意図した取引が難しくなるおそれを案内しています。
        比較表の最狭値だけで年間差を確定せず、自分が取引する時間帯の条件を確認してください。
      </p>

      <h2>月間コストと損益分岐を続けて確認する</h2>
      <ul>
        <li><Link href="/articles/fx-company-selection-cost-checklist">FX会社を比較する7項目</Link></li>
        <li><Link href="/tools/fx-spread-annual-cost-calculator">FXスプレッド年間コスト比較計算機</Link></li>
        <li><Link href="/articles/fx-spread-monthly-cost">0.2銭の月間スプレッドコスト早見表</Link></li>
        <li><Link href="/fx/usdjpy-spread-comparison">米ドル円スプレッド10社比較</Link></li>
        <li><Link href="/articles/fx-spread-time">スプレッドが広がりやすい時間帯</Link></li>
        <li><Link href="/tools/trading-break-even-calculator">取引コストを回収する損益分岐値幅</Link></li>
      </ul>

      <section className="article-affiliate" aria-label="提携中のFXサービス">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} />
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">
          広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。報酬額は計算結果や掲載順位に反映しません。
        </p>
      </section>

      <h2>出典と計算条件</h2>
      <ul>
        <li><a href="https://faq.jfx.co.jp/faq/detail?category=36&amp;id=481&amp;site=FX557CTV" rel="noreferrer">JFX「スプレッドの計算方法を教えてください」</a></li>
        <li><a href="https://www.fsa.go.jp/ordinary/iwagai/" rel="noreferrer">金融庁「いわゆる外国為替証拠金取引について」</a></li>
      </ul>
      <p><small>確認日：2026年9月9日。年間240日は比較用の仮定であり、実際の営業日数や取引回数を保証するものではありません。</small></p>
      <p><Link href="/fx">FXコスト比較へ戻る →</Link></p>
    </article>
  );
}
