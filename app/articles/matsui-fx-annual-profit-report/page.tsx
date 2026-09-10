import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '松井証券FXの年間損益を確認する方法｜期間損益照会と確定申告',
  description: '松井証券FXの年間損益をFXお客様サイト・アプリで確認する方法、期間損益照会の期間指定、未決済建玉の扱い、損失繰越を公式情報で整理します。',
};

const faq = [
  { q: '松井証券FXは年間取引報告書が発行されますか？', a: '松井証券の公式FAQでは、FXでは年間取引報告書は発行されないと案内されています。FXお客様サイトの「資産状況」→「期間損益照会」や取引報告書で、対象年の損益を確認します。' },
  { q: '未決済ポジションの含み損益は年間損益に入りますか？', a: '税金を計算する年間損益の対象は、反対売買で決済が完了した取引です。未決済建玉の評価損益は原則として含めません。' },
  { q: '松井証券FXの損失は翌年に繰り越せますか？', a: '年間損益がマイナスの場合、所定の確定申告を行うことで、損失を翌年以降3年間繰り越せる案内があります。継続して申告する必要があるため、国税庁資料や税理士へ確認してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/matsui-fx-annual-profit-report', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">MATSUI FX / TAX RECORD</p>
    <h1>松井証券FXの年間損益を確認する方法<br />期間損益照会と確定申告</h1>
    <p className="lede">松井証券FXでは、他社のような「年間取引報告書」ではなく、FXお客様サイトやアプリの期間損益照会で1年分の損益を確認します。対象年、決済損益、スワップ、未決済建玉を分けて集計する手順を整理します。</p>

    <div className="callout"><strong>松井証券FXの確認ポイント</strong><ul><li>所得区分は「先物取引に係る雑所得」、課税方式は申告分離課税</li><li>計算期間は1月1日から12月31日まで</li><li>年間損益は「資産状況」→「期間損益照会」で確認する</li><li>年間取引報告書は発行されないため、画面の出力・取引報告書を保存する</li></ul></div>

    <h2>年間損益の税務上の基本</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>松井証券公式の整理</th><th>確認時の注意</th></tr></thead><tbody>
      <tr><td className="ex-name">所得区分</td><td>先物取引に係る雑所得</td><td>給与・株式等の所得とは別区分</td></tr>
      <tr><td className="ex-name">課税方式</td><td>申告分離課税</td><td>税率や制度は申告年の公式資料を確認</td></tr>
      <tr><td className="ex-name">計算期間</td><td>1月1日〜12月31日</td><td>表示日ではなく決済年を確認</td></tr>
      <tr><td className="ex-name">未決済建玉</td><td>評価損益は原則として対象外</td><td>反対売買で決済済みの損益と分ける</td></tr>
      <tr><td className="ex-name">損失繰越</td><td>所定の申告で翌年以降3年間</td><td>損失発生年から連続申告が必要</td></tr>
    </tbody></table></div></div>
    <p>上表は松井証券のFX税務案内をもとにした整理です。必要経費、損益通算、住民税の申告要否などは個人の状況で変わるため、申告年の国税庁資料と所轄税務署・税理士の案内を優先してください。</p>

    <h2>FXお客様サイトで年間損益を確認する</h2>
    <ol><li>松井証券のFXお客様サイトへログインする</li><li>「資産状況」を開き、「期間損益照会」を選ぶ</li><li>決済年、または日付指定で対象期間を設定する</li><li>年間損益の合計と、売買損益・スワップなどの内訳を確認する</li><li>画面をPDF保存または印刷し、対象年と口座名が分かる形で保管する</li></ol>
    <p>松井証券の案内では、決済年は2012年1月1日以降、日付指定は2019年4月13日以降を確認できます。過去分を調べるときは、画面の指定可能期間を先に確認します。</p>

    <h2>FXアプリ・スマホサイトでも確認できる</h2>
    <p>年間損益はFXお客様サイトのほか、FXアプリとFXスマホサイトでも確認できます。表示場所やボタン名はアップデートで変わることがあるため、ログイン後に「資産状況」「期間損益」「取引報告書」の順で探します。</p>
    <div className="fx-formula"><span>保存する数字</span><strong>売買損益</strong><b>＋ スワップ損益 − 取引に要した費用</b><small>画面上の「合計損益」が内訳を含むかを確認し、同じスワップを二重計上しません。</small></div>

    <h2>年間取引報告書がない場合の保存方法</h2>
    <p>松井証券FXでは年間取引報告書は発行されない案内です。期間損益照会の画面だけでなく、必要に応じて「取引報告書」から決済内容を確認し、対象年の集計表と一緒に保存します。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>保存資料</th><th>役割</th><th>照合する項目</th></tr></thead><tbody>
      <tr><td className="ex-name">期間損益照会</td><td>対象年の合計を確認</td><td>期間、合計損益、決済損益</td></tr>
      <tr><td className="ex-name">取引報告書・決済報告書</td><td>個別約定の原本</td><td>決済日、通貨ペア、損益、スワップ</td></tr>
      <tr><td className="ex-name">自作集計表</td><td>複数口座との合算用</td><td>口座名、所得区分、合計、差額</td></tr>
    </tbody></table></div></div>

    <h2>複数のFX・先物と合算するときの順番</h2>
    <ol><li>松井証券FXの対象年の損益を確定する</li><li>JFX・DMM FXなど他社の報告書を同じ年でそろえる</li><li>CFD・先物・オプションは税務上の対象区分を確認する</li><li>会社ごとの合計を1行ずつ集計し、最後に通算する</li><li>株式・NISAの損益は別区分として扱う</li></ol>
    <p><Link href="/articles/fx-profit-loss-offset-tax">FX・CFD・先物の損益通算範囲を確認する →</Link></p>
    <p><Link href="/articles/fx-annual-transaction-report-tax-return">複数口座の年間報告書を集計する手順を見る →</Link></p>

    <h2>損失繰越を使う場合の注意</h2>
    <p>松井証券は、FXの年間損益がマイナスの場合、確定申告により翌年以降3年間の繰越控除が可能と案内しています。利益が出なかった年や取引が少ない年でも、繰越を続けるには必要な申告を途切れさせないことが重要です。</p>
    <div className="callout"><strong>損失繰越の保管セット</strong><p>損失が出た年の期間損益照会、先物取引に係る雑所得等の計算明細書、申告書付表、提出控えをまとめ、翌年の利益と照合できる状態にします。</p></div>

    <h2>確定申告前チェックリスト</h2>
    <ul><li>1月1日〜12月31日の期間を指定した</li><li>未決済建玉の評価損益を合計に入れていない</li><li>スワップや手数料を二重計上していない</li><li>他社FX・CFD・先物の報告書を同じ年でそろえた</li><li>損失繰越を使う場合、前年から申告が連続している</li><li>申告年の国税庁資料・税理士・税務署で最終確認した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した松井証券公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/support/tax/fx/" target="_blank" rel="noopener noreferrer">FXの税制・確定申告</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/117?site_domain=faq" target="_blank" rel="noopener noreferrer">FXの確定申告について教えてください</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/637?site_domain=faq" target="_blank" rel="noopener noreferrer">FXの年間損益を確認できる画面はありますか</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/25943?site_domain=faq" target="_blank" rel="noopener noreferrer">期間損益照会の画面説明</a></li>
    </ul><p>税務・操作情報は2026年9月10日に確認しました。制度、画面仕様、指定可能期間は変更される場合があります。</p></section>

    <section className="article-affiliate" aria-label="松井証券FXの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">上記は提携広告です。広告報酬は税務情報やリスクの評価に影響しません。FXは元本および利益が保証されず、損失が生じる場合があります。</p></section>
    <p><Link href="/fx/matsui">MATSUI FXの取引条件と全ガイドを見る →</Link></p>
    <p><Link href="/articles/matsui-fx-swap-transfer-tax">スワップ振替と税金の注意点を見る →</Link></p>
  </article>;
}
