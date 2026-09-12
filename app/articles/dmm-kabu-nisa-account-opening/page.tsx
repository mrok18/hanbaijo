import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-nisa-account-opening' },
  title: 'DMM 株のNISA口座開設方法｜同時申込・追加申込・金融機関変更',
  description: 'DMM 株のNISA口座について、新規アカウントとの同時申込、既存利用者の追加申込、他社からの金融機関変更に必要な書類と注意点を整理します。',
};

const faq = [
  { q: 'DMM 株の口座とNISA口座は同時に申し込めますか？', a: 'DMM 株アカウントを持っていない場合、申込フォームの「NISAのお申込み」から同時申込ができます。他社でNISA口座を持つ場合や、2018年以降に廃止した場合は別途書類が必要です。' },
  { q: 'すでにDMM 株を使っている場合もオンラインで完結しますか？', a: '既存利用者のNISA追加申込は、非課税口座開設届出書と本人確認書類を郵送する手続きです。書類はマイページから印刷でき、印刷環境がなければ郵送を依頼できます。' },
  { q: '他社のNISAで保有中の株をDMM 株のNISAへ移せますか？', a: 'NISA口座間で保有商品を移管することはできません。金融機関を変更しても、変更前のNISA口座で保有または売却します。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-nisa-account-opening', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / NISA ACCOUNT</p>
    <h1>DMM 株のNISA口座開設方法<br />同時・追加・金融機関変更を分ける</h1>
    <p className="lede">必要な手続きは「DMM 株を初めて申し込む」「すでにDMM 株を利用中」「他社からNISAを変更する」の3通りで異なります。最初に自分の状況を分けると、書類不足を防げます。</p>

    <div className="callout"><strong>NISAは1人1口座、各年に買付できる金融機関は1社</strong><p>すでに他社でその年のNISA枠を使って買付している場合、同じ年の途中では金融機関を変更できません。保有商品もNISA口座間では移管できません。</p></div>

    <h2>状況別の申込方法</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>現在の状況</th><th>申込方法</th><th>主な必要書類</th></tr></thead><tbody>
      <tr><td className="ex-name">DMM 株を初めて申込む</td><td>アカウント登録フォームでNISAも同時申込</td><td>本人確認・マイナンバー確認書類</td></tr>
      <tr><td className="ex-name">DMM 株を利用中</td><td>マイページから届出書を印刷して郵送</td><td>非課税口座開設届出書・本人確認書類</td></tr>
      <tr><td className="ex-name">他社から変更・再開設</td><td>変更元へ通知書を請求してDMM 株へ郵送</td><td>届出書・本人確認書類・廃止通知書または勘定廃止通知書</td></tr>
    </tbody></table></div></div>

    <h2>初めてDMM 株を申し込む場合</h2>
    <ol><li>アカウント登録フォームで「NISAのお申込み」を選ぶ</li><li>本人確認書類とマイナンバー確認書類を提出する</li><li>DMM.com証券の登録審査を受ける</li><li>審査完了後、ログインして追加のお客様情報を登録する</li></ol>
    <p>スマホ本人確認を利用すると、審査完了後にWebでログイン情報を取得できます。ただし、税務署から他社口座の存在などを理由に開設不可の連絡が届くまで数週間かかる場合があります。</p>
    <p><Link href="/articles/dmm-kabu-account-opening-documents">本人確認書類の組合せを確認 →</Link></p>

    <h2>既存利用者が追加で申し込む場合</h2>
    <ol><li>マイページの「各種書面（NISA書面等）」を開く</li><li>「非課税口座開設届出書」を印刷して記入する</li><li>本人確認書類を同封して郵送する</li><li>開設完了メールを受け取ってから取引ツールへログインする</li></ol>
    <p>印刷環境がなければ、問い合わせフォームから登録住所への書類郵送を依頼できます。住所が変わっている場合は、先に登録住所を変更します。</p>

    <h2>他社から金融機関を変更する場合</h2>
    <p>変更元の金融機関へ「非課税口座廃止通知書」または「勘定廃止通知書」を請求します。DMM 株へは、非課税口座開設届出書、本人確認書類、通知書の3点を送付します。通知書を出さずに進めると、税務署審査で開設不可となり、それまでのNISA取引が一般口座扱いになる場合があります。</p>
    <div className="callout"><strong>金融機関変更と保有株の移管は別</strong><p>変更前のNISA口座で保有する国内株・米国株を、DMM 株のNISA口座へそのまま移すことはできません。変更後の新しい買付先が変わる手続きです。</p></div>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/nisa/account/" target="_blank" rel="noopener noreferrer">DMM 株「NISA口座申込み方法」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00201/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「NISA口座申込書類の取得方法」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00202/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「NISA口座は複数開設できるか」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00117/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「他社NISAから保有株を移管できるか」</a></li>
    </ul><p>申込手順と口座条件は2026年9月9日に確認しました。制度・受付方法は変更されることがあるため、申込時は公式画面を優先してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や比較結果に影響しません。NISAの金融機関は商品、手数料、取扱市場、使いやすさを確認してご自身で判断してください。</p></section>
    <p><Link href="/articles/dmm-kabu-domestic-round-trip-fee">DMM 株の国内株手数料を確認 →</Link></p>
    <p><Link href="/articles/dmm-kabu-us-stock-fee">米国株の手数料と為替コストを確認 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
