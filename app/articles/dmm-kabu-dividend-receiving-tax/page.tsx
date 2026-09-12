import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-dividend-receiving-tax' },
  title: 'DMM 株の配当金はいつ・どこに入る？受取方法と税金を整理',
  description: 'DMM 株の配当金について、3つの受取方法、株式数比例配分方式、入金時期、税率、特定口座の損益通算、NISAの注意点を整理します。',
};

const faq = [
  { q: 'DMM 株の配当金はいつ入金されますか？', a: '株式数比例配分方式では、銘柄が定めた支払開始日に証券アカウントへ入金されます。一般に権利確定日から2～3か月後です。' },
  { q: 'NISAの国内株配当を非課税にする方法は？', a: '権利確定日時点で株式数比例配分方式を選び、証券会社経由で受け取る必要があります。発行会社から直接受け取る方式では課税扱いになります。' },
  { q: '配当金と株式の売却損は自動で損益通算されますか？', a: 'DMM 株で特定口座・源泉徴収ありを選択している場合、対象となる国内外株式の譲渡損益と配当等は口座内で自動通算されます。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-dividend-receiving-tax', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / DIVIDEND</p>
    <h1>DMM 株の配当金<br />受取方法・入金日・税金</h1>
    <p className="lede">国内上場株式の配当金は、証券口座、指定銀行、郵便局のいずれで受け取るかを選べます。便利さだけでなく、NISAの非課税適用や特定口座内の損益通算まで考えて設定します。</p>

    <div className="callout"><strong>NISA利用者は株式数比例配分方式を確認</strong><p>NISA口座で保有する国内上場株式の配当を非課税で受け取るには、証券会社経由で受け取る株式数比例配分方式が必要です。</p></div>

    <h2>DMM 株で選べる3つの受取方法</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>方式</th><th>受取先</th><th>特徴</th><th>NISA国内株配当</th></tr></thead><tbody>
      <tr><td className="ex-name">株式数比例配分方式</td><td>各証券口座</td><td>保有株数に応じて証券会社ごとに入金</td><td>非課税対象</td></tr>
      <tr><td className="ex-name">登録配当金受領口座方式</td><td>指定した銀行口座</td><td>保有する全銘柄の配当を1口座で受取</td><td>課税扱い</td></tr>
      <tr><td className="ex-name">配当金領収証方式</td><td>郵便局・ゆうちょ銀行等</td><td>郵送された領収証を換金</td><td>課税扱い</td></tr>
    </tbody></table></div><p className="panel-note">DMM 株では個別銘柄指定方式を利用できません。特別口座に保有株がある場合は、株式数比例配分方式を選べないことがあります。</p></div>

    <h2>配当金の入金日は銘柄ごとに違う</h2>
    <p>株式数比例配分方式では、株主総会または取締役会が定めた支払開始日にDMM 株の証券アカウントへ入金されます。目安は権利確定日から2～3か月後ですが、正確な日は発行会社の案内で確認します。</p>
    <p>この方式の場合、DMM 株は「配当金等のお知らせ」を電子交付し、メールでも通知します。書面では配当額、所得税額、住民税額、手取り額、確定日、支払日を確認できます。</p>

    <h2>課税口座の国内配当は原則20.315％</h2>
    <p>個人が受け取る上場株式等の配当は、原則として所得税・復興特別所得税15.315％と住民税5％、合計20.315％が源泉徴収されます。配当控除や譲渡損失との通算を目的に申告する場合は、課税方式や他の所得への影響を含めて判断が必要です。</p>
    <div className="fx-formula"><span>配当1万円の単純例</span><strong>10,000円 × 20.315％</strong><b>税額の概算 2,031.5円</b><small>実際の税額は税目ごとの端数処理、銘柄、口座等で異なります。</small></div>

    <h2>源泉徴収ありなら口座内で自動通算</h2>
    <p>DMM 株の特定口座で「源泉徴収あり」を選択している場合、対象となる国内外株式の譲渡損益と、DMM.com証券が取り扱う配当金・分配金が自動的に損益通算されます。還付が生じる場合は翌年初に証券アカウントへ入金されます。</p>
    <p>源泉徴収なしまたは一般口座では自動通算されません。他社の口座と通算する場合も確定申告が必要です。</p>
    <p><Link href="/articles/dmm-kabu-specific-account-tax">特定口座と確定申告の違いを確認 →</Link></p>

    <h2>NISAでは受取方式を権利確定日前に確認</h2>
    <p>国税庁は、NISAで非課税になる配当等を、NISA口座を開設した金融商品取引業者等を経由して交付されるものに限定しています。発行会社から直接交付される配当は課税扱いです。</p>
    <p>受取方式は原則として権利確定日時点の登録内容で決まります。また、他の証券会社で変更すると証券保管振替機構を通じて全社の設定へ反映されるため、DMM 株だけを見ず、利用中の証券会社全体で確認します。</p>

    <h2>確認・変更する手順</h2>
    <ol><li>DMM株 STANDARDへログインする</li><li>画面左下の歯車アイコンを選ぶ</li><li>「基本設定」から「配当金受取方式」を開く</li><li>現在の方式を確認する</li><li>希望する方式を選択し、完了表示を確認する</li></ol>
    <div className="callout"><strong>権利付き最終日直前の変更は避ける</strong><p>権利確定日までに登録が反映されなければ、希望した方式にならない可能性があります。余裕を持って設定し、画面上の現在方式を再確認します。</p></div>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/service/benefit/dividend/" target="_blank" rel="noopener noreferrer">DMM 株「配当金受取サービス」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00333/" target="_blank" rel="noopener noreferrer">DMM 株「配当金の受取方法」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00339/" target="_blank" rel="noopener noreferrer">DMM 株「配当金の入金時期」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00444/" target="_blank" rel="noopener noreferrer">DMM 株「配当金と譲渡損益の損益通算」</a></li>
      <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1535.htm" target="_blank" rel="noopener noreferrer">国税庁「NISA制度」</a></li>
    </ul><p>制度とDMM 株の取扱いは2026年9月9日に確認しました。この記事は一般的な情報であり、税務助言ではありません。最新条件と個別の申告要否は公式案内、税務署または税理士等へ確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。NISAを利用する場合は、口座開設後に配当金受取方式を確認してください。</p></section>
    <p><Link href="/articles/dmm-kabu-nisa-fees-products">DMM 株のNISAで残るコスト →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
