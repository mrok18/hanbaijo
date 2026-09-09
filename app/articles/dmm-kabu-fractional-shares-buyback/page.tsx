import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株の単元未満株は売却できる？買取請求・手数料・NISAを整理',
  description: 'DMM 株で生じた単元未満株について、通常売却との違い、買取請求の操作、550円の取次手数料、価格決定、受付停止期間、NISAでの取扱いを整理します。',
};

const faq = [
  { q: 'DMM 株で1株から買えますか？', a: '通常の単元未満株の買付や買増請求は取り扱っていません。株式分割などで生じた単元未満株は、発行会社への買取請求で換金できます。' },
  { q: '単元未満株の一部だけを買取請求できますか？', a: 'できません。保有する単元未満部分の全部を請求します。たとえば150株保有なら、単元未満部分の50株が対象です。' },
  { q: 'DMM 株の単元未満株はNISAで売買できますか？', a: 'NISA口座での単元未満株式の売買は取扱対象外です。発生経緯や預り区分を取引画面で確認してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-fractional-shares-buyback', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / FRACTIONAL SHARES</p>
    <h1>DMM 株の単元未満株<br />売却ではなく買取請求</h1>
    <p className="lede">DMM 株では単元未満株を市場へ通常注文で売却できません。株式分割などで100株未満の端数が生じた場合は、発行会社に対する「買取請求」で換金します。</p>

    <div className="callout"><strong>結論：1株投資サービスではない</strong><p>単元未満株の新規買付・買増請求は非対応です。DMM 株で預かる単元未満株を換金する手続きが、単元未満株式買取請求です。</p></div>

    <h2>通常売却と買取請求の違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>通常の現物売却</th><th>単元未満株の買取請求</th></tr></thead><tbody>
      <tr><td className="ex-name">相手方</td><td>市場の投資家</td><td>発行会社</td></tr>
      <tr><td className="ex-name">注文価格</td><td>成行・指値</td><td>原則、請求到着日の終値</td></tr>
      <tr><td className="ex-name">数量</td><td>売買単位ごと</td><td>単元未満部分の全部</td></tr>
      <tr><td className="ex-name">DMM取次手数料</td><td>通常の料金体系</td><td>550円（税込）</td></tr>
      <tr><td className="ex-name">入金先</td><td>DMM 株アカウント</td><td>登録済みの出金先銀行口座</td></tr>
    </tbody></table></div></div>
    <p>株主名簿管理人によって別途手数料がかかる銘柄もあります。少額の端株では、手数料が受取額に占める割合を先に確認しておきます。</p>

    <h2>買取請求の操作手順</h2>
    <ol><li>DMM 株へログインする</li><li>「メニュー」から「資産状況」を開く</li><li>「単元未満株 買取請求」を選ぶ</li><li>対象銘柄と請求数量を確認する</li><li>取引暗証番号を入力して確定する</li></ol>
    <p>保有する単元未満部分の一部だけは指定できません。たとえば1単元100株の銘柄を150株保有している場合、買取請求の対象は端数50株の全部です。</p>

    <h2>受取額を計算する</h2>
    <div className="fx-formula"><span>50株・買取価格1,200円の仮定</span><strong>1,200円 × 50株 − 550円</strong><b>= 59,450円</b><small>税金と株主名簿管理人の別途手数料を除く単純例。実際の価格は請求時に確定していません。</small></div>
    <p>買取価格は、原則として請求が株主名簿管理人へ到着した日の終値です。操作時点の株価で約定する市場注文とは異なるため、画面表示額を確定代金と考えないようにします。</p>

    <h2>代金は証券口座ではなく銀行へ振り込まれる</h2>
    <p>買取代金は、DMM 株に登録している出金先銀行口座へ振り込まれます。DMM.com証券を経由して発行会社へ請求するため、DMM.com証券が発行する取引報告書などには代金が記載されません。入金履歴は銀行側でも保存します。</p>

    <h2>受付できない期間がある</h2>
    <ul><li>同一銘柄は、前回の買取請求日から14日間は再請求できない</li><li>権利確定日の6営業日前16時15分から、権利確定日17時までは受付停止</li><li>権利確定日は、権利付最終日の受渡日（T＋2）を基準に確認する</li></ul>
    <p>配当や株主優待の権利日付近で急いで換金すると、受付停止に重なることがあります。企業行動の予定と保有残高を早めに確認します。</p>

    <h2>NISAとTOBの注意点</h2>
    <p>DMM 株ではNISA口座での単元未満株式の売買は対象外です。また、TOB画面には単元未満株を含む数量が表示されても、公開買付期間の最終日時点で単元未満の応募分は原則無効になります。単元株と端株を分けて出口を考える必要があります。</p>
    <p><Link href="/articles/dmm-kabu-tob-application">DMM 株のTOB申込方法を確認 →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/jp/stock/unit/" target="_blank" rel="noopener noreferrer">DMM 株「単元未満株式の取扱い」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00170/" target="_blank" rel="noopener noreferrer">DMM 株「単元未満株の買取請求の手数料」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00247/" target="_blank" rel="noopener noreferrer">DMM 株「単元未満株の売却」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00248/" target="_blank" rel="noopener noreferrer">DMM 株「買取請求が受け付けられない場合」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00274/" target="_blank" rel="noopener noreferrer">DMM 株「単元未満株とNISA」</a></li>
    </ul><p>取扱方法と手数料は2026年9月9日に確認しました。銘柄ごとの制限、手数料、企業行動の日程は最新の取引画面と公式情報を優先してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。買取価格や受取額は保証されません。</p></section>
    <p><Link href="/articles/dmm-kabu-stock-transfer">DMM 株の株式移管を確認 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
