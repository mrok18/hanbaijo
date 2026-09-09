import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株のTOB申込方法｜移管・手数料・NISA株の注意点',
  description: 'DMM 株のTOB（公開買付け）について、対象銘柄、PCでの申込、他社からの移管、無料範囲、申込取消、NISAから課税口座への振替を整理します。',
};

const faq = [
  { q: 'DMM 株ならどのTOBにも申し込めますか？', a: '申し込めるのは、DMM.com証券が公開買付復代理人として取り扱う対象銘柄です。取扱一覧で確認が必要です。' },
  { q: 'DMM 株のスマホアプリからTOBへ申し込めますか？', a: '申し込めません。TOBの申込・取消はPC WEB版のDMM株 STANDARDのみで行います。' },
  { q: 'NISAで保有する株をそのままTOBへ応募できますか？', a: 'できません。先に書面で特定口座または一般口座へ払い出す必要があり、以後はNISAの非課税対象ではなくなります。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-tob-application', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / TOB</p>
    <h1>DMM 株のTOB申込方法<br />移管・手数料・NISAの注意</h1>
    <p className="lede">TOBは市場外で、あらかじめ示された価格・期間・数量に基づいて株式を売却する手続きです。DMM 株で申し込めるのは取扱対象銘柄に限られ、PCと期限管理が必要です。</p>

    <div className="callout"><strong>まず「DMM 株が取り扱うTOBか」を確認</strong><p>DMM.com証券が公開買付復代理人となる銘柄だけが申込対象です。会社がTOBを発表しただけではDMM 株から応募できるとは限りません。</p></div>

    <h2>市場売却とTOB応募を比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>市場で売却</th><th>DMM 株からTOBへ応募</th></tr></thead><tbody>
      <tr><td className="ex-name">価格</td><td>市場価格で変動</td><td>公開買付価格</td></tr>
      <tr><td className="ex-name">成立時期</td><td>約定すれば確定</td><td>買付期間終了後に結果確定</td></tr>
      <tr><td className="ex-name">手数料</td><td>通常の売却手数料</td><td>DMM取扱対象は無料</td></tr>
      <tr><td className="ex-name">数量超過</td><td>市場の流動性次第</td><td>一部または全部が成立しない場合あり</td></tr>
      <tr><td className="ex-name">利用端末</td><td>対応する取引ツール</td><td>PC WEB版STANDARDのみ</td></tr>
    </tbody></table></div></div>

    <h2>DMM 株で保有中の株を申し込む</h2>
    <ol><li>公式TOBページで対象銘柄と申込期限を確認する</li><li>PC WEB版「DMM株 STANDARD」を開く</li><li>TOB申込画面で預り区分ごとの保有数量を確認する</li><li>申込数量と取引暗証番号を入力する</li><li>公開買付説明書を確認してチェックする</li><li>内容を確定し、申込状況を確認する</li></ol>
    <p>申込済みの株式には通常の売却注文を出せません。市場売却へ切り替える場合は、所定の時間内にTOB申込を取り消し、株式の拘束解除を確認します。</p>

    <h2>他社保有株は先にDMM 株へ移管</h2>
    <p>他社で保有する対象株をDMM 株から応募する場合、申込日の時点でDMM 株の残高へ反映済みである必要があります。移管手続中の株は申し込めません。</p>
    <p>移管には通常1～2週間程度かかり、移管元で出庫手数料が発生する場合があります。DMM.com証券側の入庫手数料と、DMM取扱TOBの売却手数料は無料です。</p>
    <div className="callout"><strong>TOB締切から逆算する</strong><p>口座開設、移管書類の提出、残高反映、TOB申込をすべて期限前に完了する必要があります。締切間近の移管は間に合わない可能性があります。</p></div>
    <p><Link href="/articles/dmm-kabu-stock-transfer">DMM 株への入庫手続きを確認 →</Link></p>

    <h2>NISA保有株は課税口座へ移す</h2>
    <p>NISA預りの株式は、そのままTOBへ申し込めません。マイページの各種書面から、NISA口座から特定口座または一般口座への移管依頼書を印刷し、本人確認書類を添えて郵送します。</p>
    <p>振替にはDMM.com証券への書面到着後、1～2週間程度かかります。NISAから払い出すと再びNISAへ戻せず、移管日の時価が特定口座の取得価額となり、その後の売却は課税口座で扱われます。</p>

    <h2>公開買付価格だけで決めない</h2>
    <p>公開買付価格が市場価格を上回る場合でも、移管費用、完了までの期間、応募数量がすべて成立しない可能性を含めて比較します。反対に市場価格が公開買付価格へ近づいた場合は、すぐ約定できる市場売却との手取り差が小さくなることがあります。</p>
    <div className="fx-formula"><span>100株の単純比較</span><strong>（公開買付価格2,000円 − 市場価格1,950円）×100株</strong><b>= 価格差5,000円</b><small>税金、移管元手数料、市場売却手数料、成立数量、価格変動を除く仮定例。</small></div>

    <h2>申込数量の全部が成立するとは限らない</h2>
    <p>応募総数が公開買付予定数を上回った場合、あん分比例などの条件により、一部または全部が買い付けられない可能性があります。公開買付説明書で買付予定数、下限・上限、決済開始日を確認します。</p>

    <h2>申込前チェックリスト</h2>
    <ul><li>DMM 株の取扱対象TOBである</li><li>公開買付価格・期間・買付予定数を確認した</li><li>PC WEB版STANDARDを利用できる</li><li>他社保有なら残高反映までの期間を確保した</li><li>NISA保有なら課税口座への払出しを理解した</li><li>市場売却との差額、手数料、成立しないリスクを比較した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/jp/stock/tob/" target="_blank" rel="noopener noreferrer">DMM 株「TOB（公開買付け）」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00772/" target="_blank" rel="noopener noreferrer">DMM 株「TOB銘柄を他社から移管する場合」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00762/" target="_blank" rel="noopener noreferrer">DMM 株「TOB目的の移管手数料」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00767/" target="_blank" rel="noopener noreferrer">DMM 株「NISA口座の株式をTOBへ申し込む場合」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00118/" target="_blank" rel="noopener noreferrer">DMM 株「預り区分の変更」</a></li>
    </ul><p>申込方法と取引条件は2026年9月9日に確認しました。取扱銘柄、期間、価格、買付条件は案件ごとに異なるため、最新の公開買付説明書を優先してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。TOBへの応募成立、価格差、利益は保証されません。</p></section>
    <p><Link href="/articles/dmm-kabu-ipo-application">DMM 株のIPO申込方法 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
