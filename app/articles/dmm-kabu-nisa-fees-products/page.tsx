import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株のNISAは手数料無料？国内株・米国株・為替コストを整理',
  description: 'DMM 株のNISAで取引できる国内株・米国株と、無料になる売買手数料、米国株の為替コスト、配当課税など残る費用と注意点を整理します。',
};

const faq = [
  { q: 'DMM 株のNISAは売買手数料が無料ですか？', a: '公式手数料ページでは、NISA口座内の国内株式・米国株式の取引手数料は無料と案内されています。ただし米国株を円貨決済する場合などの為替コストまで無料になるわけではありません。' },
  { q: 'NISAで米国株を円貨決済すると為替コストはいくらですか？', a: 'DMM 株の公式FAQでは、円貨決済および為替取引に1ドルあたり片道25銭の為替コストが発生すると案内されています。1万ドルなら片道2,500円の計算です。' },
  { q: 'NISAなら米国株の配当も完全に非課税ですか？', a: 'NISAでは日本国内の課税分は非課税になりますが、米国株の配当には外国税が残ります。NISA配当は二重課税ではないため、外国税額控除の対象外と案内されています。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-nisa-fees-products', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / NISA COST</p>
    <h1>DMM 株のNISAは手数料無料？<br />国内株・米国株と残るコスト</h1>
    <p className="lede">NISA口座内の国内株・米国株は売買手数料が無料です。ただし米国株の為替コスト、外国配当への現地課税、ADR管理費用などは別に確認する必要があります。</p>

    <div className="callout"><strong>無料になるのは「取引手数料」</strong><p>NISAだからすべての費用がゼロになるわけではありません。国内株と米国株、円貨決済と外貨決済、売買と配当を分けて確認します。</p></div>

    <h2>NISAで取引できる商品と費用</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>NISAでの扱い</th><th>残る可能性がある費用・税</th></tr></thead><tbody>
      <tr><td className="ex-name">国内株式</td><td>現物取引、取引手数料無料</td><td>市場の価格差、税制要件外の配当課税</td></tr>
      <tr><td className="ex-name">米国株式</td><td>現物取引、取引手数料無料</td><td>為替コスト、外国配当税、ADR管理費用</td></tr>
      <tr><td className="ex-name">つみたてかぶ</td><td>NISA口座内は売買手数料無料</td><td>銘柄価格、為替、配当等の条件</td></tr>
      <tr><td className="ex-name">信用取引</td><td>NISA対象外</td><td>課税口座の手数料・金利・貸株料等</td></tr>
    </tbody></table></div></div>

    <h2>米国株は為替コストを計算する</h2>
    <p>円貨決済による米国株の売買と、円と米ドルを交換する為替取引には、1ドルあたり片道25銭の為替コストが発生します。外貨決済による株の売買時には為替コストは発生しませんが、円からドルを用意する時点やドルを円へ戻す時点のコストは残ります。</p>
    <div className="fx-formula"><span>10,000 USD / ONE-WAY</span><strong>10,000ドル × 0.25円</strong><b>= 2,500円</b><small>公式FAQの片道25銭を使用。レート変動・税金を含まない</small></div>
    <p><Link href="/articles/dmm-kabu-us-stock-fee">米国株の取引手数料と為替を詳しく計算 →</Link></p>

    <h2>国内株の配当は受取方法を確認</h2>
    <p>NISA口座の国内株配当を非課税で受け取るには、「株式数比例配分方式」を選択する必要があります。別の受取方式を登録している場合や、権利確定日以降に変更した場合は、NISA保有分でも配当へ課税されることがあります。</p>

    <h2>米国株の配当には外国税が残る</h2>
    <p>NISA口座で保有する米国株の配当は、日本国内の課税分は非課税ですが、原則として外国税が差し引かれます。NISAでは日本の課税がないため二重課税に当たらず、外国税額控除の対象外です。ADRや米国市場に上場する外国企業では課税率が異なる場合があります。</p>

    <h2>外貨決済後の為替差益は別</h2>
    <p>NISAの米国株を外貨決済で売却した後、受け取った米ドルを円へ交換して為替差益が生じた場合、その為替差益は雑所得として課税対象になり得ます。株式のNISA非課税と、預り金の為替差損益は分けて管理します。</p>

    <h2>申込み前の確認項目</h2>
    <ul><li>買いたい国内株・米国株が取扱対象か</li><li>成長投資枠とつみたて投資枠のどちらを使うか</li><li>米国株を円貨決済・外貨決済のどちらで取引するか</li><li>国内株の配当金受取方式が株式数比例配分方式か</li><li>為替コストと外国配当税を含めた実質負担</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/commission/" target="_blank" rel="noopener noreferrer">DMM 株「株式取引の手数料」</a></li>
      <li><a href="https://kabu.dmm.com/nisa/" target="_blank" rel="noopener noreferrer">DMM 株「NISA」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00166/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「米国株式の取引で発生する費用」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00226/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「NISA口座の配当金」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00442/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「外国税額控除」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00741/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「NISA米国株の外貨決済と課税」</a></li>
    </ul><p>取扱商品、手数料、税務上の案内は2026年9月9日に確認しました。取引前に公式の最新条件を確認し、個別の税務判断は税務署または税理士へ確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や比較結果に影響しません。NISAの金融機関は取扱商品、費用、税制、使いやすさを確認してご自身で判断してください。</p></section>
    <p><Link href="/articles/dmm-kabu-nisa-account-opening">DMM 株のNISA申込方法 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
