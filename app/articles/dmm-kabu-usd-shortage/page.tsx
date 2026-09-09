import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株の米ドル不足・立替金とは？強制為替取引と制限を解説',
  description: 'DMM 株の米国株で米ドル不足や立替金が発生した場合の原因、円貨・外貨決済、強制為替取引、取引・出金制限、解消方法を公式情報で整理します。',
};

const faq = [
  { q: 'DMM 株の米ドル不足はなぜ起きますか？', a: '外貨決済の買付や配当・受渡しで米ドルの支払額が不足すると、立替金が発生する場合があります。米ドル残高と受渡日を確認してください。' },
  { q: '米ドル不足を自分で解消するには？', a: '円から米ドルへの為替取引を発注し、不足額以上の米ドルを用意します。操作しない場合は、システムによる強制為替取引が発注されることがあります。' },
  { q: '米ドル不足があると出金できますか？', a: '対応が必要なケースでは、強制為替取引の発注まで国内株・円貨決済の米国株の新規取引や出金などが制限されます。売却、信用建玉の返済、入金は可能と案内されています。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-usd-shortage', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / USD SHORTAGE</p>
    <h1>DMM 株の米ドル不足・立替金<br />原因と解消方法</h1>
    <p className="lede">米国株を外貨決済で取引すると、約定代金だけでなく手数料や受渡し時点のドル残高も確認が必要です。不足が残ると強制為替取引や新規取引・出金制限につながるため、原因と対応を順番に整理します。</p>

    <div className="callout"><strong>まず米ドル残高と取引履歴を確認</strong><p>「立替金（米ドル）」が表示されたら、米ドルの支払額・受渡日・為替取引の約定状況を確認します。円貨決済の予定額不足とは別の状態です。</p></div>

    <h2>不足が発生する主な場面</h2>
    <ul><li>米国株・ETFを外貨決済で買い付け、米ドル残高が足りない</li><li>配当金や売却代金の受渡し前に、別の米ドル支払いが到来した</li><li>手数料や受渡し差額により、注文時の見込み額を超えた</li><li>為替取引の受渡日が株式の支払日より後になった</li></ul>
    <p>注文時の参考額と最終的な受渡額は一致しないことがあります。円貨決済は参考レートと余裕率で必要額を計算しますが、外貨決済では実際のドル残高が不足していないかを確認します。</p>

    <h2>円貨決済と外貨決済の違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>円貨決済</th><th>外貨決済</th></tr></thead><tbody>
      <tr><td className="ex-name">買付資金</td><td>円の買付可能額</td><td>米ドル残高</td></tr>
      <tr><td className="ex-name">為替コスト</td><td>1ドルあたり25銭</td><td>売買時は発生しない</td></tr>
      <tr><td className="ex-name">不足時の確認</td><td>参考レート・105％余裕率</td><td>米ドル残高・受渡日</td></tr>
      <tr><td className="ex-name">配当金</td><td colSpan={2}>源泉徴収後、米ドルでDMM 株へ入金</td></tr>
    </tbody></table></div></div>
    <p><Link href="/articles/dmm-kabu-us-stock-order-hours">米国株の決済通貨と注文時間を確認 →</Link></p>

    <h2>自分で解消する手順</h2>
    <ol><li>取引履歴と「立替金（米ドル）」の不足額を確認する</li><li>為替取引で円→米ドルを、不足額以上になるよう発注する</li><li>為替取引の約定・受渡日を確認する</li><li>不足金表示と新規取引・出金制限の解除を確認する</li></ol>
    <p>前営業日以前に不足額以上の円→米ドルの為替取引が約定済みなら、原則として強制為替取引や追加対応が不要となる場合があります。複数日にわたり米ドル支払いが続くケースでは、後日対応が必要になることがあります。</p>

    <h2>対応しない場合は強制為替取引</h2>
    <p>必要な為替取引を行わない場合、システムが不足額分の強制為替取引を発注します。公式案内では、原則として8時40分頃の発注とされています。強制為替取引の発注タイミングで、国内株式・米国株円貨決済の新規取引、出金、資金振替などの制限が解除されます。</p>
    <p>米国株の外貨決済に関する別の新規取引制限は、為替取引の受渡日以降まで続く予定とされています。解除時期は画面表示と最新の公式案内を優先します。</p>

    <h2>制限中でもできること</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>操作</th><th>対応が必要なケース</th></tr></thead><tbody>
      <tr><td className="ex-name">国内株・円貨決済の新規取引</td><td>制限</td></tr>
      <tr><td className="ex-name">出金・資金振替</td><td>制限</td></tr>
      <tr><td className="ex-name">保有株の売却</td><td>可能</td></tr>
      <tr><td className="ex-name">信用建玉の返済注文</td><td>可能</td></tr>
      <tr><td className="ex-name">入金</td><td>可能</td></tr>
    </tbody></table></div></div>

    <h2>再発防止チェック</h2>
    <ul><li>外貨決済の買付前に、約定代金・手数料分のドルを確保</li><li>配当・売却代金は支払日と入金反映日を分けて管理</li><li>米ドルの受渡日と円→ドル為替の受渡日を確認</li><li>取引履歴と電子交付の通知を定期的に確認</li><li>不足表示が消えるまで新規取引・出金を急がない</li></ul>
    <p><Link href="/articles/dmm-kabu-us-dividend-tax">米国株配当金の税金とドル入金 →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00775/" target="_blank" rel="noopener noreferrer">DMM 株「米ドル立替金が発生した際の対応」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00367/" target="_blank" rel="noopener noreferrer">DMM 株「米国株式の決済方法」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00398/" target="_blank" rel="noopener noreferrer">DMM 株「円貨決済の参考レート」</a></li>
      <li><a href="https://kabu.dmm.com/us/stock/us_tax/" target="_blank" rel="noopener noreferrer">DMM 株「米国株取引にかかる税金」</a></li>
    </ul><p>対応方法と制限条件は2026年9月9日に確認しました。為替レート、強制取引の時刻、制限解除の条件は変更される場合があるため、最新の取引画面と公式案内を優先してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。為替レートや受取額は保証されません。</p></section>
    <p><Link href="/articles/dmm-kabu-us-stock-fee">米国株の手数料・為替コスト →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
