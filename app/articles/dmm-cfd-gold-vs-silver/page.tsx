import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/dmm-cfd-gold-vs-silver' },
  title: '銀 CFDとは？｜1Lot・必要証拠金・調整額を確認',
  description: '銀CFDの仕組みを、DMM CFDの銀スポットを例に1Lotの取引単位、必要証拠金、値動き、金利調整額とスプレッドから整理します。',
};

const FAQS = [
  {
    question: '銀CFDとは何ですか？',
    answer: '銀CFDは銀スポット価格を参照して差金決済する取引です。現物の銀を受け取るのではなく、売買価格の差額を決済します。DMM CFDでは銀スポットの1Lotが10トロイオンスとして案内されています。',
  },
  {
    question: '銀CFDの必要証拠金と損益はどう計算しますか？',
    answer: '必要証拠金は現在価格・取引単位・Lot数・証拠金率・米ドル円で変動します。損益は価格差×取引単位10×Lot数×米ドル円で円換算し、買いと売りの方向を分けて計算します。',
  },
  {
    question: '銀CFDで手数料以外に確認する費用は何ですか？',
    answer: '取引手数料の有無だけでなく、売買時のスプレッド、営業日をまたいだ金利調整額、必要証拠金の変動を確認します。金利調整額の発生日と受払方向は銘柄・会社ごとの公式カレンダーを優先してください。',
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

  return <article>
    <ArticleStructuredData slug="dmm-cfd-gold-vs-silver" publishedAt="2026-09-08" modifiedAt="2026-09-16" includeBreadcrumb={false} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM CFD / GOLD VS SILVER</p>
    <h1>銀 CFDとは？<br />1Lot・必要証拠金・調整額</h1>
    <p className="lede">銀CFDは銀スポット価格を参照する差金決済取引です。DMM CFDでは1Lot＝10トロイオンスのため、金スポットと同じ1ドルの値動きでも円換算損益が異なります。</p>
    <div className="callout"><strong>銀CFDは、10トロイオンスの取引単位から確認</strong><p>必要証拠金や損益は現在の銀価格と米ドル円で変わります。1Lotの取引単位、証拠金率、スプレッド、金利調整額を分けて確認すると、見かけの手数料だけで判断せずに比較できます。</p></div>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>金スポット</th><th>銀スポット</th></tr></thead><tbody>
      <tr><td>1Lot</td><td>1トロイオンス</td><td>10トロイオンス</td></tr>
      <tr><td>証拠金率</td><td>5％以上</td><td>5％以上</td></tr>
      <tr><td>保有中の調整</td><td>金利調整額</td><td>金利調整額</td></tr>
      <tr><td>発生</td><td>原則毎営業日</td><td>原則毎営業日</td></tr>
    </tbody></table></div></div>
    <div className="formula-box"><code>値動きの円換算損益＝価格差×取引単位×Lot数×米ドル円</code><small>銀は取引単位10を掛ける点に注意。</small></div>
    <h2>銀CFDのコスト比較で確認する4項目</h2>
    <ul>
      <li>価格の大小ではなく取引単位まで展開する</li>
      <li>必要証拠金は現在価格と円換算で変動する</li>
      <li>金利調整額は買い・売り別に毎日確認する</li>
      <li>取引手数料0円でもスプレッドは残る</li>
    </ul>
    <h2>銀CFDに関するFAQ</h2>
    {FAQS.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
    <section className="article-sources"><h2>公式資料</h2><ul>
      <li><a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD商品概要</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/swapcalendar/" target="_blank" rel="noopener noreferrer">金利・価格調整額</a></li>
    </ul><p>制度・商品情報は2026年9月16日に確認しました。最新の取引単位、調整額、必要証拠金は発注前に公式ページで確認してください。</p></section>
    <p><Link href="/articles/fxtf-vs-dmm-cfd-gold">FXTF MT5とDMM CFDの金1Lotを比較 →</Link></p>
    <p><Link href="/tools/gold-cfd-provider-cost-comparison">金CFD 2社の総コストを計算 →</Link></p>
    <p><Link href="/articles/dmm-cfd-commodity-lot-list">全14銘柄のLot一覧 →</Link></p>
    <section className="article-affiliate"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /></section>
  </article>;
}
