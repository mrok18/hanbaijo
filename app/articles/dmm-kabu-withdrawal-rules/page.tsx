import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-withdrawal-rules' },
  title: 'DMM 株の出金はいつ？最低2,000円・手数料・売却代金の反映',
  description: 'DMM 株の出金について、最低出金額、手数料、受付時間、着金日、国内株・米国株の売却代金、出金取消しの原因を整理します。',
};

const faq = [
  { q: 'DMM 株の最低出金額はいくらですか？', a: '原則として1回2,000円以上です。アカウント解約などで全額出金する場合は、2,000円未満でも出金できます。' },
  { q: 'DMM 株の出金手数料は無料ですか？', a: '登録済みの出金先口座への出金手数料はDMM.com証券負担です。出金は円貨のみで、本人と同一名義の金融機関口座を登録する必要があります。' },
  { q: '株を売った当日に出金できますか？', a: '売却代金には受渡日があります。国内現物株は約定日を含めた3営業日目が受渡日で、所定時間内に予約すれば受渡日に振り込まれる案内です。口座状況により遅れる場合があります。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-withdrawal-rules', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / WITHDRAWAL</p>
    <h1>DMM 株の出金はいつ？<br />最低額・手数料・売却後の日程</h1>
    <p className="lede">出金予約は24時間いつでもできるわけではなく、受付時刻と銀行営業日で振込日が変わります。さらに、株式の売却代金は約定直後ではなく受渡後に出金可能になります。</p>

    <div className="callout"><strong>原則2,000円以上、出金手数料は無料</strong><p>出金先として登録できるのはDMM 株アカウントと同一名義の金融機関口座です。外貨のまま出金することはできません。</p></div>

    <h2>出金の基本条件</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>公式案内</th><th>注意点</th></tr></thead><tbody>
      <tr><td className="ex-name">最低出金額</td><td>原則2,000円</td><td>全額出金時は2,000円未満も可</td></tr>
      <tr><td className="ex-name">手数料</td><td>無料（DMM.com証券負担）</td><td>登録出金先への円貨出金</td></tr>
      <tr><td className="ex-name">15時までの予約</td><td>原則、翌銀行営業日に出金</td><td>出金可能額の範囲内</td></tr>
      <tr><td className="ex-name">17時以降の予約</td><td>原則、翌々銀行営業日に出金</td><td>土日祝の予約も翌々営業日</td></tr>
      <tr><td className="ex-name">停止時間</td><td>毎営業日15～17時ほか</td><td>早朝・日曜にも停止時間あり</td></tr>
    </tbody></table></div></div>

    <h2>国内株の売却代金を出金する流れ</h2>
    <p>国内現物株の売却代金は、約定日を含めた3営業日目が受渡日です。約定日の17時以降から翌営業日15時までに出金予約すると、原則として受渡日の午前中に登録口座へ振り込まれます。</p>
    <div className="fx-formula"><span>DOMESTIC STOCK / EXAMPLE</span><strong>月曜に売却 → 火曜15時までに予約</strong><b>水曜に振込</b><small>月～水が営業日で、口座状況に問題がない仮定例</small></div>

    <h2>米国株は円に戻す工程を確認</h2>
    <p>米国株を外貨決済で売却した場合は、米ドルを円へ為替取引してから出金します。原則として為替取引の約定日17時以降に出金可能額へ反映し、平日15時までに予約すると翌国内営業日に振り込まれます。現地休場により受渡しが延びる場合があります。</p>
    <p><Link href="/articles/dmm-kabu-us-stock-fee">米国株の為替コストを確認 →</Link></p>

    <h2>出金予約が取り消される主な原因</h2>
    <ul><li>信用取引で追加証拠金や不足金が発生した</li><li>出金予約後の取引で出金可能額が減少した</li><li>売却代金がまだ受渡日を迎えていない</li><li>出金先口座が未登録、または本人名義でない</li><li>同じ出金予定日の予約がすでに入っている</li></ul>
    <p>予約時に「全額を引き出せない場合は可能額まで減額して出金」を選べます。ただし、出金可能額がなくなった場合は予約自体が取り消されます。</p>

    <h2>出金前のチェックリスト</h2>
    <ol><li>出金先口座が本人と同一名義で登録済みか</li><li>取引ツールの出金可能額を確認したか</li><li>売却代金の受渡日を迎えているか</li><li>追証・不足金・未返済建玉がないか</li><li>15～17時などの出金予約停止時間を避けたか</li></ol>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/service/pay/" target="_blank" rel="noopener noreferrer">DMM 株「入金・出金・振替」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00091/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「出金額の上限・下限」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00097/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「出金指示後の振込日」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00100/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「国内株式の売却代金」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00748/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「米ドルから円への為替取引後の出金」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00105/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「可能額まで減額して出金」</a></li>
    </ul><p>出金条件とスケジュールは2026年9月9日に確認しました。祝日、休場、口座状況で変わるため、予約時は取引画面の出金予定日を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。口座の資金管理と取引判断はご自身の責任で行ってください。</p></section>
    <p><Link href="/articles/dmm-kabu-deposit-methods">DMM 株の入金方法 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
