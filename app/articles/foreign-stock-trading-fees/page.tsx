import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '外国株式の手数料比較｜米国株・中国株・ASEAN株の売買コスト',
  description: '外国株式の売買手数料を米国株・中国株・ASEAN株で比較。料率、最低・上限手数料、為替コスト、現地費用と10万・50万・100万円の計算例を整理します。',
  alternates: { canonical: '/articles/foreign-stock-trading-fees' },
};

const feeExamples = [
  { amount: '10万円', us: '約495円', china: '550円（最低）', asean: '1,100円' },
  { amount: '50万円', us: '約2,475円', china: '1,375円', asean: '5,500円' },
  { amount: '100万円', us: '約3,300円（上限）', china: '2,750円', asean: '11,000円' },
] as const;

const faq = [
  { q: '外国株式の売買手数料は国内株より高いですか？', a: '一般に外国株式は売買手数料に加え、通貨交換や現地費用が発生するため、国内株の手数料0円コースより総コストが高くなる場合があります。市場、証券会社、決済通貨をそろえて比較してください。' },
  { q: '外国株式の手数料は買うときと売るときの両方にかかりますか？', a: '原則として買付と売却の各約定に取引手数料がかかります。米国株の売却ではSEC Feeなど、売り側だけに発生する現地費用もあります。往復コストは片道手数料を2回分数えて確認します。' },
  { q: 'NISAなら外国株式の売買手数料はすべて無料ですか？', a: '一律ではありません。楽天証券ではNISAの米国株式は取引手数料無料ですが、中国株式とASEAN株式は所定の取引手数料がかかります。証券会社と市場ごとの対象範囲を確認してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-12', dateModified: '2026-09-12', mainEntityOfPage: 'https://hanbaijo.com/articles/foreign-stock-trading-fees', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">FOREIGN STOCK / TRADING FEES</p>
    <h1>外国株式の手数料比較<br />米国・中国・ASEAN株の売買コスト</h1>
    <p className="lede">外国株式の費用は「約定代金×料率」だけでは決まりません。最低・上限手数料、通貨交換、売却時の現地費用まで分ける必要があります。楽天証券のインターネット取引を共通例に、3市場の違いを同じ円換算額で比べます。</p>

    <div className="callout"><strong>結論：市場ごとに料率と上下限が違う</strong><p>米国株は0.495％で上限22ドル、中国株は0.275％で最低550円・上限5,500円、ASEAN株は1.1％で最低550円・上限なしです。同じ10万円でも手数料は約495円・550円・1,100円と変わります。</p></div>

    <h2>外国株式の売買手数料比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>市場</th><th>1取引の手数料</th><th>最低手数料</th><th>上限手数料</th><th>主な追加確認</th></tr></thead><tbody>
      <tr><td className="ex-name">米国株式</td><td>約定代金×0.495％</td><td>0ドル<br />2.22ドル以下</td><td><strong>22ドル</strong></td><td>為替、売却時のSEC Fee、ADR管理費</td></tr>
      <tr><td className="ex-name">中国株式</td><td><strong>約定代金×0.275％</strong></td><td>550円</td><td>5,500円</td><td>香港・上海A株の為替条件</td></tr>
      <tr><td className="ex-name">ASEAN株式</td><td>約定代金×1.1％</td><td>550円</td><td><strong>上限なし</strong></td><td>円換算に使う会社所定レート</td></tr>
    </tbody></table></div><p className="panel-note">2026年9月12日確認。楽天証券の通常口座・インターネット取引を共通例として比較、税込。IFA契約、電話注文、指定銘柄、キャンペーンは除きます。ASEAN株式はシンガポール、タイ、マレーシア、インドネシアの4市場共通です。</p></div>

    <h2>10万・50万・100万円の片道手数料</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th className="num">円換算の約定代金</th><th className="num">米国株式</th><th className="num">中国株式</th><th className="num">ASEAN株式</th></tr></thead><tbody>{feeExamples.map((row) => (
      <tr key={row.amount}><td className="num ex-name">{row.amount}</td><td className="num">{row.us}</td><td className="num">{row.china}</td><td className="num">{row.asean}</td></tr>
    ))}</tbody></table></div><p className="panel-note">片道1約定の単純例。米国株は1ドル＝150円で約定代金とドル建て手数料を換算。為替コスト、現地費用、価格変動、端数処理、税金は含みません。</p></div>
    <p>買ってから同じ金額で売る往復なら、表の金額を原則2回分数えます。10万円では米国株が約990円、中国株が1,100円、ASEAN株が2,200円です。実際には買付後の価格と為替が変動するため、売却側の約定代金は同額とは限りません。</p>

    <h2>最低手数料は少額取引で効く</h2>
    <p>中国株は約定代金20万円まで550円です。0.275％を掛けた金額が550円を下回っても、最低手数料が適用されます。ASEAN株も最低550円なので、たとえば2万円の1.1％は220円ではなく550円です。</p>
    <div className="formula-box"><code>実際の取引手数料 ＝ 料率で計算した金額を、最低額と上限額の範囲へ調整</code><small>上限がない市場では、約定代金が増えるほど手数料も同じ料率で増えます。</small></div>

    <h2>上限手数料は大口取引で差が出る</h2>
    <p>米国株は4,444.45ドル以上で22ドル、中国株は200万円以上で5,500円が上限です。ASEAN株には上限がありません。円換算500万円なら、ASEAN株の片道手数料は単純計算で5万5,000円です。売買金額が大きいほど、料率だけでなく上限の有無が重要になります。</p>

    <h2>為替コストは売買手数料と別に数える</h2>
    <p>外国株式は現地通貨で価格が付くため、日本円から始める場合は為替条件も確認します。米国株は円貨決済と外貨決済でコストが異なる場合があります。楽天証券の中国株では、香港株は片道15銭、上海A株は片道20銭の為替手数料が案内されています。</p>
    <p>ASEAN株の約定代金は、国内約定日午前9時頃の会社所定レートで円換算されます。単純に市場の為替レートを掛けた金額とは一致しない場合があるため、約定後の取引報告書で円換算額を確認します。</p>

    <h2>現地費用と商品固有の費用を確認</h2>
    <ul>
      <li><strong>米国株：</strong>売却時のSEC Fee、ADRで発生する場合がある管理費用</li>
      <li><strong>中国株：</strong>公式料金表では国内手数料に現地手数料・現地諸費用を含む</li>
      <li><strong>ASEAN株：</strong>楽天証券の4市場は現地手数料・現地諸費用なしの案内</li>
      <li><strong>共通：</strong>配当への現地課税、円換算時の為替差損益、注文と約定価格の差</li>
    </ul>
    <p>「現地費用なし」は取引全体が無コストという意味ではありません。取引手数料と為替、配当課税を別々に確認します。</p>

    <h2>NISAでも市場別に無料範囲が違う</h2>
    <p>楽天証券では、NISA口座の米国株式は売買手数料無料です。一方、中国株式は0.275％・最低550円・上限5,500円、ASEAN株式は1.1％・最低550円の手数料がかかります。NISAの非課税と売買手数料の無料は別の条件です。</p>

    <h2>外国株式を注文する前の確認順</h2>
    <ol>
      <li>市場と銘柄が取扱対象か確認する</li>
      <li>約定代金へ料率を掛け、最低・上限手数料を適用する</li>
      <li>円貨決済か外貨決済かを決め、為替コストを加える</li>
      <li>売却時の現地費用とADR等の固有費用を確認する</li>
      <li>買付と売却の両方を含む往復額で比較する</li>
    </ol>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.rakuten-sec.co.jp/web/us/stock/commission.html" target="_blank" rel="noopener noreferrer">楽天証券「米国株式 手数料」</a></li>
      <li><a href="https://www.rakuten-sec.co.jp/web/foreign/china/commission.html" target="_blank" rel="noopener noreferrer">楽天証券「中国株式 手数料」</a></li>
      <li><a href="https://www.rakuten-sec.co.jp/web/foreign/asean/commission.html" target="_blank" rel="noopener noreferrer">楽天証券「アセアン株式 手数料」</a></li>
      <li><a href="https://www.rakuten-sec.co.jp/web/nisa/commission/" target="_blank" rel="noopener noreferrer">楽天証券「日米株式の取引手数料が無料」</a></li>
    </ul><p>料金と条件は2026年9月12日に確認しました。料率、対象市場、為替、現地費用は変更される場合があるため、注文前に各社の最新料金表と契約締結前交付書面を確認してください。</p></section>

    <p><Link href="/articles/us-stock-fee-comparison">米国株の手数料を3社で比較する →</Link></p>
    <p><Link href="/articles/us-stock-margin-fee-comparison">米国株信用取引の手数料を3社で比較する →</Link></p>
    <p><Link href="/articles/us-stock-fx-cost">米国株の為替コストを計算する →</Link></p>
    <p><Link href="/stocks">国内株・米国株の株式手数料ガイドへ →</Link></p>
  </article>;
}
