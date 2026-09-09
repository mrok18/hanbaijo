import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株のつみたてかぶは1,000円から｜NISA・手数料・買付日',
  description: 'DMM 株の「つみたてかぶ」について、1,000円からの積立、NISA対応、設定頻度、買付価格、手数料、資金不足時の扱いを整理します。',
};

const faq = [
  { q: 'つみたてかぶはいくらから設定できますか？', a: '1銘柄につき1,000円以上、1円単位で設定できます。株数ではなく金額を指定し、単元未満の持ち分を含めて定期的に買い付ける仕組みです。' },
  { q: 'つみたてかぶを使うための追加申込は必要ですか？', a: 'DMM 株アカウントを登録した利用者は追加手続きなしで使えます。NISA枠を使う場合は、DMM 株でNISA口座を開設しておく必要があります。' },
  { q: '残高不足だとどうなりますか？', a: '資金を拘束できない回は買付されず、2回連続で資金拘束できない場合はプランが休止になります。買付日前の残高確認が必要です。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-tsumitate-kabu-nisa', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / TSUMITATE KABU</p>
    <h1>DMM 株のつみたてかぶは1,000円から<br />NISA・手数料・買付日を確認</h1>
    <p className="lede">「つみたてかぶ」は、国内株・米国株を金額指定で定期購入する株式累積投資です。1株未満の持ち分も買える一方、約定価格や資金拘束、単元未満部分の名義など、通常の単元株注文とは仕組みが異なります。</p>

    <div className="callout"><strong>1銘柄1,000円以上、1円単位</strong><p>毎営業日、毎週、毎月、2～4か月ごとから積立サイクルを設定できます。NISA口座を開設済みなら、成長投資枠またはつみたて投資枠を選択できます。</p></div>

    <h2>基本条件</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>確認項目</th><th>公式案内</th><th>注意点</th></tr></thead><tbody>
      <tr><td className="ex-name">設定金額</td><td>1銘柄1,000円以上、1円単位</td><td>株価によって取得株数が変わる</td></tr>
      <tr><td className="ex-name">設定頻度</td><td>毎営業日・毎週・毎月・2～4か月毎</td><td>休場日や祝日は買付日が変わる</td></tr>
      <tr><td className="ex-name">NISA</td><td>成長投資枠・つみたて投資枠に対応</td><td>DMM 株のNISA口座が必要</td></tr>
      <tr><td className="ex-name">取引手数料</td><td>NISA口座内の売買は無料</td><td>米国株は為替コストが残る</td></tr>
      <tr><td className="ex-name">買付価格</td><td>原則、買付日の取引所の始値</td><td>希望価格を指定する注文ではない</td></tr>
    </tbody></table></div></div>

    <h2>プラン設定から残高反映まで</h2>
    <div className="fx-metric-grid">
      <article><b>STEP 01</b><h3>プラン設定</h3><p>取引口座、銘柄、金額、積立サイクルを選びます。15時29分までの設定が当日受付です。</p></article>
      <article><b>STEP 02</b><h3>資金を自動振替</h3><p>原則、買付日の前営業日16時30分頃にDMM 株アカウントから必要資金を振り替えます。</p></article>
      <article><b>STEP 03</b><h3>共同買付</h3><p>原則として買付日の取引所の始値で買い付け、投入金額に応じた持ち分を取得します。</p></article>
      <article><b>STEP 04</b><h3>残高反映</h3><p>買付日の翌営業日に「残高照会（つみたてかぶ）」へ取得株数が反映されます。</p></article>
    </div>

    <h2>単元未満部分は共同買付</h2>
    <p>利用者の資金をまとめてDMM.com証券名義で買い付け、金額に応じた持ち分を保有します。単元未満部分は「つみたてかぶ」の残高に表示され、買い増して単元株以上になった部分は通常の証券取引アカウントへ移動し、利用者名義になります。</p>
    <p>単元未満部分の配当金は原則として同じ銘柄へ再投資されます。株主優待は通常の単元株保有と同じように受け取れるとは限りません。</p>

    <h2>米国株は円貨決済と為替コストを確認</h2>
    <p>米国株のつみたてかぶは円貨決済です。米国株配当を再投資する際、日本円から米ドルへ両替する部分には1ドルあたり25銭の為替コストが発生します。NISA口座内で売買手数料が無料でも、為替負担は別です。</p>
    <p><Link href="/articles/dmm-kabu-nisa-fees-products">NISAで無料になる範囲と残る費用 →</Link></p>

    <h2>買付されない主なケース</h2>
    <ul><li>預り金（円）が不足している</li><li>NISA枠が不足している</li><li>対象銘柄またはアカウントに取引規制がある</li><li>信用取引口座の委託保証金が不足している</li><li>祝日・休場日に関する買付ルールに該当する</li></ul>
    <div className="callout"><strong>2回連続の資金不足でプラン休止</strong><p>資金拘束できなかった回は買付されません。2回続くとプランが自動的に休止するため、自動積立でも残高と稼働状況を定期的に確認します。</p></div>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/service/cumulative/" target="_blank" rel="noopener noreferrer">DMM 株「つみたてかぶ（株式累積投資）」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/36092/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「つみたてかぶ利用時の手続き」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/66974/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「国内株式の買付成立まで」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/84804/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「つみたてかぶを買付できない理由」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/96676/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「祝日付近の買付スケジュール」</a></li>
    </ul><p>サービス条件と買付ルールは2026年9月9日に確認しました。対象銘柄や受付条件は変更されることがあるため、設定時は公式画面を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。積立投資でも元本割れがあり、継続的な下落時は損失が拡大する可能性があります。</p></section>
    <p><Link href="/articles/dmm-kabu-nisa-account-opening">DMM 株のNISA申込方法 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
