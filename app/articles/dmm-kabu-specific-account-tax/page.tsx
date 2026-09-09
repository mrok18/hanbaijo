import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株の特定口座｜源泉徴収あり・なし・一般口座と確定申告',
  description: 'DMM 株の特定口座について、源泉徴収あり・なし・一般口座の違い、年間取引報告書、確定申告、区分変更、NISAとの違いを整理します。',
};

const faq = [
  { q: '源泉徴収ありなら確定申告は不要ですか？', a: '原則として不要です。ただし、他社口座との損益通算や譲渡損失の繰越控除などを利用する場合は、確定申告が必要になります。' },
  { q: '源泉徴収なしでも年間取引報告書は発行されますか？', a: '発行されます。DMM 株では翌年1月中旬に電子交付され、年間の譲渡損益を確認できます。' },
  { q: '源泉徴収あり・なしはいつでも変更できますか？', a: 'その年に特定預りの株式等の譲渡や、対象となる配当金の処理が発生していなければ変更できます。取引後は原則として翌年からの変更です。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-specific-account-tax', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / TAX ACCOUNT</p>
    <h1>DMM 株の特定口座<br />源泉徴収あり・なしを比較</h1>
    <p className="lede">口座区分は、税額そのものより「誰が年間損益を計算し、誰が納税するか」を変えます。迷う場合は、確定申告を原則省略できる源泉徴収ありを基準に、損益通算や申告の予定から選びます。</p>

    <div className="callout"><strong>手間を抑えたいなら「特定口座・源泉徴収あり」</strong><p>DMM.com証券が損益を計算し、利益から所得税等と住民税を源泉徴収します。原則は申告不要ですが、損失を他社口座と通算する場合などは申告します。</p></div>

    <h2>3つの口座区分を比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>口座区分</th><th>年間損益の計算</th><th>納税・申告</th><th>年間取引報告書</th></tr></thead><tbody>
      <tr><td className="ex-name">特定・源泉徴収あり</td><td>DMM.com証券</td><td>源泉徴収。原則申告不要</td><td>翌年1月中旬に電子交付</td></tr>
      <tr><td className="ex-name">特定・源泉徴収なし</td><td>DMM.com証券</td><td>利益があり申告対象なら自分で申告・納税</td><td>翌年1月中旬に電子交付</td></tr>
      <tr><td className="ex-name">一般口座</td><td>自分で計算</td><td>申告対象なら自分で申告・納税</td><td>発行なし</td></tr>
    </tbody></table></div><p className="panel-note">給与所得者などには申告不要となる例外があります。個別の申告要否は、国税庁または税理士へ確認してください。</p></div>

    <h2>源泉徴収ありでも申告する主な場面</h2>
    <ul><li>他の証券会社の利益・損失と損益通算する</li><li>上場株式等の譲渡損失を翌年以後へ繰り越す</li><li>一般口座で申告対象となる譲渡益がある</li><li>特定口座対象外の商品による申告対象の所得がある</li><li>口座外で受け取った対象配当と譲渡損失を通算する</li></ul>
    <p>複数の金融機関にある特定口座は、金融機関をまたいで自動的には損益通算されません。通算する場合は、各社の年間取引報告書を使って確定申告します。</p>

    <h2>年間取引報告書の見方</h2>
    <p>DMM 株では、特定口座の年間取引報告書を翌年1月中旬に電子交付します。年間の譲渡損益や源泉徴収額を確認でき、源泉徴収なしで申告する場合や、他社口座と損益通算する場合の基礎資料になります。</p>
    <p>一般口座には年間取引報告書がありません。国内株は取引残高報告書など、米国株は外国証券取引報告書などを使い、自分で損益を計算します。紙での再発行・郵送には所定の手数料がかかるため、電子書面を保管しておくと効率的です。</p>

    <h2>源泉徴収区分を変更できる条件</h2>
    <p>「あり・なし」の変更は書面手続きです。マイページの各種書面から届出書を印刷し、本人確認書類を添えて送付します。ただし、その年に特定預りの株式等をすでに譲渡した場合や、源泉徴収あり口座へ配当金の処理が行われた場合、その年分は変更できません。</p>
    <div className="callout"><strong>売却する前に区分を確認</strong><p>年内の取引後に気づくと、変更は翌年分になります。新年最初の売却や配当処理より前に、マイページと年間取引報告書で現在の区分を確認します。</p></div>

    <h2>NISAとは別の口座</h2>
    <p>NISA口座の対象取引は利益が非課税ですが、その損失を特定口座や一般口座の利益と通算できません。特定口座は課税口座の損益計算を簡単にする制度であり、NISAの非課税制度とは役割が異なります。</p>
    <p><Link href="/articles/dmm-kabu-nisa-account-opening">DMM 株のNISA口座開設を確認 →</Link></p>

    <h2>選び方の目安</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>重視すること</th><th>候補</th><th>理由</th></tr></thead><tbody>
      <tr><td className="ex-name">申告の手間を抑える</td><td>特定・源泉徴収あり</td><td>原則として申告不要にできる</td></tr>
      <tr><td className="ex-name">自分で納税資金を管理</td><td>特定・源泉徴収なし</td><td>年間計算は証券会社、納税は自分で行う</td></tr>
      <tr><td className="ex-name">特定口座対象外の取引</td><td>一般口座</td><td>自分で取得価額と損益を管理する</td></tr>
    </tbody></table></div></div>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00420/" target="_blank" rel="noopener noreferrer">DMM 株「特定口座はどのような制度ですか？」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00423/" target="_blank" rel="noopener noreferrer">DMM 株「特定口座を開設している場合、確定申告は不要ですか？」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00437/" target="_blank" rel="noopener noreferrer">DMM 株「源泉徴収あり／なしの変更」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00408/" target="_blank" rel="noopener noreferrer">DMM 株「1年間の取引内容をまとめたもの」</a></li>
      <li><a href="https://www.keisan.nta.go.jp/r7yokuaru/cat2/cat21/cat219/yogosetsumei/kanishinkokukoza.html" target="_blank" rel="noopener noreferrer">国税庁「特定口座（源泉徴収なし）とは」</a></li>
    </ul><p>制度とDMM 株の取扱いは2026年9月9日に確認しました。この記事は一般的な情報であり、税務助言ではありません。個別の申告要否は税務署・税理士等へ確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。口座区分は申告方法や他の所得への影響も踏まえて選択してください。</p></section>
    <p><Link href="/articles/dmm-kabu-account-opening-documents">口座開設に必要なものを確認 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
