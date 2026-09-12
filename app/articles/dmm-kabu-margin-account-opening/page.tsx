import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-margin-account-opening' },
  title: 'DMM 株の信用取引口座開設｜申込方法・審査・必要資金を確認',
  description: 'DMM 株の国内信用取引口座について、総合口座と同時・追加で申し込む方法、審査期間、必要な知識・経験、最低保証金30万円、NISAとの違いを整理します。',
};

const faq = [
  { q: 'DMM 株の総合口座だけで信用取引できますか？', a: 'できません。DMM 株アカウントに加えて、信用取引口座の開設申込と審査が必要です。' },
  { q: 'すでにDMM 株を使っていても申し込めますか？', a: '申し込めます。マイページから信用取引口座を追加開設します。既存のログインIDとパスワードをそのまま利用します。' },
  { q: '信用取引口座の審査に落ちた理由は確認できますか？', a: 'DMM.com証券は審査内容や見送り理由を開示していません。投資経験や自己資産などの登録情報に変更があれば、更新後に再申込を相談できます。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-margin-account-opening', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / MARGIN ACCOUNT</p>
    <h1>DMM 株の信用取引口座開設<br />申込・審査・必要資金</h1>
    <p className="lede">信用取引はDMM 株の総合口座を作っただけでは利用できません。信用取引口座を追加し、審査通過後に保証金を用意して取引を始めます。</p>

    <div className="callout"><strong>総合口座と信用取引口座は別</strong><p>初めてDMM 株へ申し込む場合は同時申込、既存利用者はマイページから追加申込ができます。信用取引口座には別途審査があります。</p></div>

    <h2>2つの申込ルート</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>現在の状態</th><th>申込方法</th><th>ログイン情報</th></tr></thead><tbody>
      <tr><td className="ex-name">DMM 株を未開設</td><td>アカウント登録時に信用取引口座も同時申込</td><td>審査完了後に案内</td></tr>
      <tr><td className="ex-name">DMM 株を開設済み</td><td>マイページから信用口座の追加開設を申込</td><td>既存ID・パスワードを継続利用</td></tr>
    </tbody></table></div></div>

    <h2>既存利用者のスマホ申込手順</h2>
    <ol><li>スマホアプリ「DMM株」を起動する</li><li>マイページを選び、ログインする</li><li>「信用取引口座 口座開設申し込みはこちら」を選ぶ</li><li>申込フォームの必要事項を入力する</li><li>重要書面を確認して申し込む</li><li>登録メールアドレスに届く審査結果を確認する</li></ol>
    <p>DMM.com証券の案内では、追加口座の審査には数日かかります。申込完了直後に信用注文ができるわけではありません。</p>

    <h2>審査では経験・知識・資力等を総合判断</h2>
    <p>信用取引は預けた保証金以上の取引ができ、損失が保証金を上回る可能性があります。契約締結前交付書面では、口座開設に一定の投資経験、知識、資力等が必要と案内されています。</p>
    <p>詳細な審査基準や、個別の見送り理由は公表されていません。申込フォームでは資産、収入、投資経験、投資目的等について、現在の状況を正確に入力します。</p>
    <div className="callout"><strong>審査通過を保証する入力方法はない</strong><p>数字を大きく見せるのではなく、登録済み情報との整合性と正確性を優先します。不明点は申込前に公式サポートへ確認します。</p></div>

    <h2>審査後も最低30万円が必要</h2>
    <p>国内信用取引の新規建てには、建玉総額の30％以上かつ30万円以上の委託保証金が必要です。口座開設審査の通過と、実際に注文できる保証金余力は別の条件です。</p>
    <div className="fx-formula"><span>建玉150万円の基準例</span><strong>1,500,000円 × 30％</strong><b>= 450,000円</b><small>銘柄規制等により30％を上回る保証金が必要な場合があります。</small></div>
    <p><Link href="/articles/dmm-kabu-margin-call-maintenance-rate">保証金率と追証を詳しく確認 →</Link></p>

    <h2>信用口座を開く前に理解する費用</h2>
    <p>国内信用取引の通常の売買手数料は0円ですが、買建には買方金利、売建には貸株料がかかります。制度信用売りでは逆日歩、長期保有では事務管理費、権利確定日をまたぐ買建では名義書換料が発生する場合があります。</p>
    <p><Link href="/articles/dmm-kabu-margin-trading-cost">信用取引の総コストを計算 →</Link></p>

    <h2>NISA口座では信用取引できない</h2>
    <p>信用取引、品受け、品渡しはNISA制度の対象外です。NISAで保有する現物株の非課税取引と、課税口座で行う信用取引は分けて管理します。</p>
    <p><Link href="/articles/dmm-kabu-nisa-fees-products">DMM 株のNISA対象商品を確認 →</Link></p>

    <h2>申込前チェックリスト</h2>
    <ul><li>DMM 株の総合口座を同時または先に申し込む</li><li>投資経験・資産・目的を正確に登録する</li><li>信用取引の仕組みと損失リスクを理解する</li><li>最低30万円を含む保証金基準を確認する</li><li>金利・貸株料・逆日歩等を理解する</li><li>20％の追証基準と翌々営業日12時の期限を確認する</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/start/account_flow/margin/" target="_blank" rel="noopener noreferrer">DMM 株「信用取引口座申込み方法」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00283/" target="_blank" rel="noopener noreferrer">DMM 株「信用取引口座を申し込むには」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00042/" target="_blank" rel="noopener noreferrer">DMM 株「スマホアプリからの口座開設手順」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00558/" target="_blank" rel="noopener noreferrer">DMM 株「信用取引口座開設が見送りになった場合」</a></li>
      <li><a href="https://kabu.dmm.com/_pdf/history/margin_brokerage_account_260301.pdf" target="_blank" rel="noopener noreferrer">DMM 株「信用取引の契約締結前交付書面」</a></li>
    </ul><p>申込方法と取引条件は2026年9月9日に確認しました。審査基準は非公開であり、口座開設を保証するものではありません。最新書面を確認して申し込んでください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。信用取引口座には審査があり、開設や取引成果は保証されません。</p></section>
    <p><Link href="/articles/dmm-kabu-account-opening-documents">DMM 株の本人確認・必要書類 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
