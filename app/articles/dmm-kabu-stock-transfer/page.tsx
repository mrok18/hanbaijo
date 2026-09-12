import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-stock-transfer' },
  title: 'DMM 株の株式移管｜入庫・出庫手数料と国内株・米国株の期間',
  description: 'DMM 株への株式入庫と他社への出庫について、手数料、必要書類、特定・一般口座、国内株と米国株の期間、NISA移管不可を整理します。',
};

const faq = [
  { q: '他社からDMM 株への移管手数料は無料ですか？', a: 'DMM.com証券側の入庫手数料は無料です。ただし、移管元の証券会社で出庫手数料がかかる場合があります。' },
  { q: 'DMM 株から他社への出庫手数料は無料ですか？', a: 'DMM.com証券の国内株・米国株の出庫手数料は無料です。移管先で費用が発生する可能性は確認が必要です。' },
  { q: 'NISA口座の株を別の証券会社のNISAへ移せますか？', a: 'NISA口座間で保有株を移管することはできません。金融機関を変更しても、変更前のNISAでそのまま保有または売却します。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-stock-transfer', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / STOCK TRANSFER</p>
    <h1>DMM 株の株式移管<br />入庫・出庫の費用と期間</h1>
    <p className="lede">国内の証券会社との間で、DMM 株が取り扱う国内株・米国株を移管できます。売却せずに証券会社を変えられますが、預り区分、取扱銘柄、単元未満株、権利確定日付近の停止期間を先に確認します。</p>

    <div className="callout"><strong>DMM.com証券の入庫・出庫手数料は無料</strong><p>他社から入れる場合は移管元、他社へ出す場合は移管先で費用が発生する可能性があります。両社の料金を合わせて確認します。</p></div>

    <h2>入庫と出庫を比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>他社 → DMM 株</th><th>DMM 株 → 他社</th></tr></thead><tbody>
      <tr><td className="ex-name">申請先</td><td>現在預けている証券会社</td><td>DMM.com証券</td></tr>
      <tr><td className="ex-name">DMM側手数料</td><td>無料</td><td>無料</td></tr>
      <tr><td className="ex-name">国内株</td><td>移管元の所要期間を確認</td><td>原則約1週間</td></tr>
      <tr><td className="ex-name">米国株</td><td>国内他社・取扱銘柄のみ</td><td>原則3～4週間</td></tr>
      <tr><td className="ex-name">手続き</td><td>移管元の依頼書を提出</td><td>マイページの書面を印刷・郵送</td></tr>
    </tbody></table></div></div>

    <h2>他社からDMM 株へ入庫する</h2>
    <ol><li>移管元の証券会社へ依頼書を請求する</li><li>国内株は口座振替依頼書等、米国株は外国証券移管依頼書を使う</li><li>DMM 株の加入者コード・証券アカウント番号等を記入する</li><li>移管元の証券会社へ書類を提出する</li><li>完了後、DMM 株の残高照会で確認する</li></ol>
    <p>DMM 株で扱っていない銘柄、国外証券会社からの入庫、米国OTC銘柄は受け付けられません。米国株の単元未満株も移管できません。</p>

    <h2>預り区分は同じもの同士</h2>
    <p>特定口座から特定口座、一般口座から一般口座への移管が基本です。特定口座の株をDMM 株へ移すには、先にDMM 株側でも特定口座を開設しておく必要があります。特定口座間では取得単価が引き継がれ、一般口座間では引き継がれません。</p>
    <div className="callout"><strong>特定口座 ↔ 一般口座は移管不可</strong><p>移管を口座区分の変更には使えません。税務管理を継続したい場合は、申請前に両社の預り区分を照合します。</p></div>

    <h2>DMM 株から他社へ出庫する</h2>
    <p>マイページから国内株または米国株の移管依頼書を印刷し、記入してDMM.com証券へ郵送します。国内株は原則約1週間、米国株は原則3～4週間ですが、照合や事務処理によって長引く場合があります。</p>
    <p>特定口座の同一銘柄を出庫する場合、その銘柄は全株数の移管が必要で、一部株数だけを出すことはできません。信用取引の預託率によって出庫できない場合もあります。</p>

    <h2>NISA口座の株は移管できない</h2>
    <p>NISAの金融機関変更は、翌年以降の買付先を変える手続きです。すでにNISA口座で保有している株を新しい金融機関のNISA口座へ移すことはできません。変更前の金融機関で保有または売却します。</p>
    <p><Link href="/articles/dmm-kabu-nisa-account-opening">NISAの金融機関変更手続きを確認 →</Link></p>

    <h2>権利確定日前後は停止期間に注意</h2>
    <p>株式分割等のコーポレートアクションや権利確定日を迎える銘柄は、入出庫受付が一時停止されます。移管中は売却できない期間が生じるため、決算・権利日・TOBなどの予定がある銘柄は余裕を持って申請します。</p>

    <h2>申請前のチェックリスト</h2>
    <ul><li>両社で氏名・住所等の登録情報が一致している</li><li>DMM 株の取扱銘柄である</li><li>特定・一般の預り区分が一致している</li><li>移管元または移管先の手数料を確認した</li><li>権利確定日やコーポレートアクションと重ならない</li><li>移管中に売却できなくても問題ない</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/service/transfer/" target="_blank" rel="noopener noreferrer">DMM 株「入出庫・移管」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00114/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「他社からの入庫手数料」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00135/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「米国株式の入庫」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00144/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「米国株式の出庫」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00155/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「他社への出庫手数料」</a></li>
    </ul><p>移管条件と所要期間は2026年9月9日に確認しました。銘柄・時期・移管先の処理で変わるため、申請前に両社の最新案内を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。移管前に取扱銘柄、預り区分、費用、売却できない期間を確認してください。</p></section>
    <p><Link href="/articles/dmm-kabu-account-opening-documents">DMM 株の口座開設に必要なもの →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
