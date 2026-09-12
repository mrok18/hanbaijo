import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-deposit-methods' },
  title: 'DMM 株の入金方法｜クイック入金5,000円・振込・反映時間',
  description: 'DMM 株のクイック入金と振込入金を、最低金額、手数料、反映時間、対応金融機関、同一名義、反映されない場合の確認手順で比較します。',
};

const faq = [
  { q: 'DMM 株のクイック入金はいくらからですか？', a: '1回5,000円以上、1億円未満です。利用する金融機関でインターネットバンキングの契約が必要ですが、DMM.com証券への事前申込は不要です。' },
  { q: 'クイック入金の手数料はかかりますか？', a: '取引ツール内のクイック入金サービスから手続きすれば、振込手数料はDMM.com証券負担です。通常の振込入金は金融機関所定の振込手数料を利用者が負担します。' },
  { q: 'クイック入金が反映されないときはどうしますか？', a: 'まず銀行口座から引き落とされたか確認します。引落し済みなら時間帯と金融機関を確認し、必要に応じてサポートへ連絡します。未引落しなら手続きが完了していないため再操作します。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-deposit-methods', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / DEPOSIT</p>
    <h1>DMM 株の入金方法<br />クイック入金と振込を比較</h1>
    <p className="lede">入金方法は、取引ツールから操作する「クイック入金」と、利用者専用口座へ送る「振込入金」の2つです。急ぐ場合は反映速度だけでなく、最低金額と正常終了の操作まで確認します。</p>

    <h2>クイック入金と振込入金</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>クイック入金</th><th>振込入金</th></tr></thead><tbody>
      <tr><td className="ex-name">手続き</td><td>取引ツールから金融機関サイトへ進む</td><td>ATM・銀行窓口・ネット振込等</td></tr>
      <tr><td className="ex-name">手数料</td><td>無料（DMM.com証券負担）</td><td>利用者負担</td></tr>
      <tr><td className="ex-name">最低金額</td><td>1回5,000円</td><td>公式比較表に下限記載なし</td></tr>
      <tr><td className="ex-name">反映</td><td>原則リアルタイム</td><td>原則、着金後30分程度</td></tr>
      <tr><td className="ex-name">前提</td><td>対応金融機関のネットバンキング</td><td>利用者専用の振込先口座</td></tr>
    </tbody></table></div></div>
    <p><small>反映時間は保証ではありません。金融機関・接続システム・DMM.com証券のメンテナンスや名義確認により遅れる場合があります。</small></p>

    <h2>クイック入金の手順</h2>
    <ol><li>取引ツールの「入出金」から「クイック入金」を選ぶ</li><li>5,000円以上の入金額を入力する</li><li>対応金融機関を検索して選択する</li><li>取引暗証番号を入力し、金融機関サイトへ進む</li><li>金融機関側の手続きを最後まで完了する</li><li>「加盟店へ戻る」等のボタンで取引画面へ戻る</li></ol>
    <div className="callout"><strong>ブラウザの×で閉じない</strong><p>金融機関画面の最後に表示される「加盟店に戻る」等を押さず、ブラウザを閉じると即時反映されないことがあります。通信の安定した環境で最後まで操作します。</p></div>

    <h2>振込入金の注意点</h2>
    <p>振込先は利用者ごとに用意され、取引ツールの「株振込先口座情報」で確認します。外貨による入金はできず、振込名義はDMM 株アカウントと同一名義に限られます。名義が異なると入金取消しとなり、返金手数料も利用者負担になる場合があります。</p>

    <h2>反映されない場合の切り分け</h2>
    <ol><li>銀行口座から資金が引き落とされているか確認する</li><li>未引落しなら、クイック入金を最初からやり直す</li><li>引落し済みなら、金融機関・曜日・時間帯を確認する</li><li>取引アカウントの入出金履歴と残高を更新して確認する</li><li>案内された待ち時間を過ぎても未反映ならサポートへ連絡する</li></ol>
    <p>一部金融機関で平日時間外や土日祝日に正常終了しなかった場合、原則として翌金融機関営業日中の反映となることがあります。他の対応金融機関では30分程度で自動反映されるとの案内があります。</p>

    <h2>自動積立前は残高を確認</h2>
    <p>つみたてかぶでは、原則として買付日の前営業日16時30分頃に必要資金が自動振替されます。資金拘束できないと買付されず、2回連続するとプランが休止するため、直前入金に頼らず余裕を持たせます。</p>
    <p><Link href="/articles/dmm-kabu-tsumitate-kabu-nisa">つみたてかぶの買付スケジュール →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/service/pay/" target="_blank" rel="noopener noreferrer">DMM 株「入金・出金・振替」</a></li>
      <li><a href="https://kabu.dmm.com/service/pay/quick/" target="_blank" rel="noopener noreferrer">DMM 株「クイック入金」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00078/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「クイック入金の下限・上限」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00072/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「入金の反映時間」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00700/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「クイック入金が即時反映されない場合」</a></li>
    </ul><p>入金条件と反映ルールは2026年9月9日に確認しました。対応金融機関・メンテナンス時間は変わるため、操作時は公式画面を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。入金は取引を義務付けるものではありません。商品とリスクを理解したうえで判断してください。</p></section>
    <p><Link href="/articles/dmm-kabu-account-opening-documents">DMM 株の口座開設に必要なもの →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
