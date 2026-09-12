import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-us-dividend-tax' },
  title: 'DMM 株の米国株配当金と税金｜入金日・NISA・外国税額控除',
  description: 'DMM 株の米国株配当金について、米国10％と国内20.315％の課税、NISAの国内非課税、外国税額控除、ドル入金、入金反映日を整理します。',
};

const faq = [
  { q: 'DMM 株の米国株配当金はどこに入りますか？', a: '源泉徴収後の金額が、DMM 株アカウントへ外貨（米ドル）で入金されます。受取方法を円貨や銀行へ変更することはできません。' },
  { q: 'NISAなら米国株配当金は全額非課税ですか？', a: '国内課税分は非課税ですが、米国現地の源泉徴収税は残ります。NISAの配当について外国税額控除は利用できません。' },
  { q: '配当支払日から何日で入金されますか？', a: '現地での受領確認後、通常2営業日程度です。銘柄によっては1週間程度かかる場合があります。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-us-dividend-tax', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / US DIVIDEND TAX</p>
    <h1>DMM 株の米国株配当金<br />税金と入金日を計算</h1>
    <p className="lede">米国株の配当は、米国での源泉徴収後に日本の税金も計算されます。NISAでも米国税は残るため、受取額・確定申告・外国税額控除を口座区分ごとに分けて確認します。</p>

    <div className="callout"><strong>配当金はドルで入金</strong><p>DMM 株では、米国株・米国ETFの配当金等の受取方法を選べません。源泉徴収後の金額がDMM 株アカウントへ米ドルで入金されます。</p></div>

    <h2>課税の順番</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>段階</th><th>課税</th><th>目安</th></tr></thead><tbody>
      <tr><td className="ex-name">1</td><td>米国現地の源泉徴収</td><td>原則10％（ADR等は異なる場合あり）</td></tr>
      <tr><td className="ex-name">2</td><td>日本の所得税・住民税</td><td>米国税引後の金額に20.315％</td></tr>
      <tr><td className="ex-name">3</td><td>受取</td><td>計算後の米ドルをDMM 株へ入金</td></tr>
    </tbody></table></div></div>
    <p>税率は個人の源泉徴収時の目安です。ADRや米国市場に上場する非米国籍株は、発行会社の国籍や租税条約により現地税率が変わる場合があります。</p>

    <h2>$100の配当を円換算する例</h2>
    <div className="fx-formula"><span>配当$100・為替100円の単純例</span><strong>米国税 $100 × 10％ = $10</strong><b>米国税引後 $90 → 国内税を引き、受取約$71.72</b><small>税額計算時の為替レートや端数処理により実際の金額は変わります。公式例を簡略化した試算です。</small></div>
    <p>国内税は米国税引後の金額を円換算して所得税15.315％・住民税5％を計算し、税額をドルに戻して差し引きます。単純に「配当×30.315％」とする計算とは一致しません。</p>

    <h2>NISA・特定口座・一般口座の違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>口座区分</th><th>国内課税</th><th>米国課税</th><th>外国税額控除</th></tr></thead><tbody>
      <tr><td className="ex-name">NISA</td><td>非課税（国内分）</td><td>原則10％</td><td>利用不可</td></tr>
      <tr><td className="ex-name">特定口座</td><td>源泉徴収ありなら自動計算</td><td>原則10％</td><td>確定申告で検討可</td></tr>
      <tr><td className="ex-name">一般口座</td><td>申告・納税を自分で整理</td><td>原則10％</td><td>確定申告で検討可</td></tr>
    </tbody></table></div></div>
    <p>NISAは国内の配当課税が非課税になりますが、米国現地税は免除されません。二重課税にならないため、外国税額控除の対象にもなりません。</p>

    <h2>入金時期と確認場所</h2>
    <p>現地で配当金の受領を確認してから、通常2営業日程度でDMM 株アカウントへ反映します。銘柄により1週間程度かかることもあります。取引ツールの「取引状況」→「取引履歴」、または電子交付の「外国証券に関するお知らせ」で入金額を確認できます。</p>
    <p>権利落ち日から支払開始日までの期間は銘柄ごとに違います。配当カレンダーの支払日と、DMM 株への反映日を同じ日と考えないことが重要です。</p>

    <h2>円に戻すときの追加コスト</h2>
    <p>配当はドルで入金されるため、出金や生活資金への利用にはドルから円への為替取引が必要です。為替取引を行うタイミングのレート差と、片道25銭の為替コストを確認します。米国株の売買手数料・円貨決済のコストとは別の負担です。</p>
    <p><Link href="/articles/dmm-kabu-us-stock-fee">米国株の手数料・為替コストを確認 →</Link></p>

    <h2>確定申告で確認する資料</h2>
    <ol><li>「外国証券に関するお知らせ（外国株式配当金兼支払通知書）」を取得</li><li>配当金等金額、外国源泉税額、円換算額を確認</li><li>特定口座年間取引報告書と他社口座の損益を集計</li><li>外国税額控除を使う場合は限度額と申告要否を確認</li></ol>
    <p>外国税額控除は所得税から一定額を差し引く制度で、全額が必ず戻るわけではありません。NISA配当には適用できないため、口座区分を分けて整理します。</p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/us/stock/us_tax/" target="_blank" rel="noopener noreferrer">DMM 株「米国株取引にかかる税金」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00361/" target="_blank" rel="noopener noreferrer">DMM 株「米国株配当金の課税」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00358/" target="_blank" rel="noopener noreferrer">DMM 株「米国株配当金の受取方法」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00364/" target="_blank" rel="noopener noreferrer">DMM 株「配当支払日から入金反映」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00741/" target="_blank" rel="noopener noreferrer">DMM 株「NISA米国株の配当・売却益」</a></li>
    </ul><p>税率・入金条件は2026年9月9日に確認しました。税制、租税条約、銘柄ごとの支払日、為替レートは変更される可能性があるため、最新の公式資料と税務署の案内を優先してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。配当利回りや受取額は保証されません。</p></section>
    <p><Link href="/articles/dmm-kabu-dividend-receiving-tax">国内株の配当金と税金を確認 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
