import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/tossy-tax-reporting' },
  title: 'TOSSYの確定申告｜期間損益報告書の出力方法とアセット別の税区分',
  description: 'TOSSYの期間損益報告書をアプリ・PCで出力する手順、FX・各種CFDと暗号資産CFDの税区分、日次建て直しと年末の注意点を公式情報で整理します。',
};

const faq = [
  { q: 'TOSSYの暗号資産CFDとFXの利益は損益通算できますか？', a: '公式FAQでは、暗号資産CFDの損益はTOSSYの他アセットや店頭FX・CFDの損益と通算できないと案内されています。暗号資産CFDとそれ以外を分けて報告書を確認してください。' },
  { q: 'ポジションを決済していなくても利益が課税対象になりますか？', a: 'TOSSYの一部アセットでは、日次の建て直しによって評価損益やスワップ・調整額が実現損益として計上されます。保有中でも期間損益報告書に反映された金額を確認します。' },
  { q: '期間損益報告書はどこから出せますか？', a: 'アプリは「≡→履歴／照会→取引報告書」から、PCは「報告書」メニューから出力できます。報告書種類で「期間損益報告書」を選び、アセット区分と期間を指定してPDFを表示します。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/tossy-tax-reporting', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">TOSSY / TAX REPORT</p>
    <h1>TOSSYの確定申告<br />期間損益報告書の出力方法と税区分</h1>
    <p className="lede">TOSSYはFX、株式CFD、株価指数CFD、商品CFD、バラエティCFD、暗号資産CFDを扱います。アセット区分で税務上の扱いが異なるため、最初に報告書を区分ごとに出力し、暗号資産CFDとそれ以外を混ぜずに集計することが重要です。</p>

    <div className="callout"><strong>先に押さえる4点</strong><ul><li>アプリ・PCの「取引報告書」から期間損益報告書をPDFで出力できる</li><li>FX・株式CFD・指数CFD・商品CFDなどは、公式税務案内で申告分離課税の雑所得として整理されている</li><li>暗号資産CFDは税区分と損益通算の範囲が異なる</li><li>日次の建て直しで損益・スワップ・調整額が実現し、年末は計上年がずれる場合がある</li></ul></div>

    <h2>アセット区分ごとの税務上の整理</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>公式情報の整理</th><th>集計時の注意</th></tr></thead><tbody>
      <tr><td className="ex-name">TOSSY FX</td><td>雑所得・申告分離課税</td><td>他社の一定のFX・CFD・先物と通算可否を確認</td></tr>
      <tr><td className="ex-name">株式・指数・商品・バラエティCFD</td><td>先物取引に係る雑所得等（申告分離課税）</td><td>アセット区分ごとの報告書を分けて保存</td></tr>
      <tr><td className="ex-name">暗号資産CFD</td><td>他のTOSSY FX・CFDとは異なる税区分</td><td>FX・CFDと損益通算できない案内</td></tr>
    </tbody></table></div></div>
    <p>非暗号資産のTOSSY取引でも、DMM 株など現物株式の損益と同じ扱いになるわけではありません。TOSSY公式の税務案内と、利用する年分の国税庁資料を照合してください。最終的な申告方法は税理士・税務署へ確認します。</p>

    <h2>アプリで期間損益報告書を出力する手順</h2>
    <ol><li>TOSSYアプリへログインし、左上の「≡」を開く</li><li>「履歴／照会」から「取引報告書」を選ぶ</li><li>検索アイコンを押し、報告書種類で「期間損益報告書」を選ぶ</li><li>アセット区分、起点日、終点日を指定する</li><li>表示されたPDFを保存し、他社分と区分して保管する</li></ol>
    <p>年間の確認では、対象年の1月1日から12月31日を指定します。アプリのメニュー構成や表示名が変更された場合は、ログイン後の最新画面を優先してください。</p>

    <h2>PCで出力する手順</h2>
    <ol><li>TOSSYへログインし、メニューの「報告書」を開く</li><li>対象アセットのタブを選択する</li><li>報告書種類で「期間損益報告書」を選ぶ</li><li>起点日と終点日を入力し、PDFを表示・保存する</li></ol>
    <div className="fx-formula"><span>年間集計の基本</span><strong>1月1日〜12月31日</strong><b>× アセット区分別の期間損益報告書</b><small>暗号資産CFDは非暗号資産の報告書と別に保管し、通算可否を混同しません。</small></div>

    <h2>日次の建て直しで「保有中」でも損益が動く</h2>
    <p>TOSSYの公式FAQでは、日次の建て直しにより営業日終了時点の評価損益が翌営業日に実現損益となり、スワップや調整額も計上される場合があると説明されています。未決済ポジションを持っているだけのつもりでも、期間損益報告書に損益が現れることがあります。</p>
    <p>年末最終営業日の建て直しが翌営業日に処理されると、表示上の取引日と申告対象年を取り違える可能性があります。12月末に建玉を持っていた場合は、翌年1月の報告書も確認してください。</p>

    <h2>損益通算の境界を先に分ける</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>組み合わせ</th><th>確認ポイント</th></tr></thead><tbody>
      <tr><td className="ex-name">TOSSYのFX・一定のCFD × 他社FX・CFD</td><td>申告分離課税の対象同士か、各年分の制度と商品区分を確認</td></tr>
      <tr><td className="ex-name">TOSSYの非暗号資産 × DMM 株・DMM BANUSY</td><td>公式案内では通算対象外</td></tr>
      <tr><td className="ex-name">TOSSYの暗号資産CFD × TOSSY FX・CFD</td><td>公式FAQでは通算不可</td></tr>
    </tbody></table></div></div>
    <p>「TOSSYでまとめて取引しているから、税金も一つにまとめられる」とは限りません。報告書のアセット区分、所得区分、決済・建て直しの時期を分けて集計します。</p>

    <h2>確定申告前のチェックリスト</h2>
    <ul><li>対象年の1月1日〜12月31日で期間損益報告書を出力した</li><li>FX・各種CFDと暗号資産CFDのPDFを分けて保存した</li><li>日次建て直し・スワップ・価格調整額の計上日を確認した</li><li>他社FX・CFD・先物の年間報告書を集めた</li><li>現物株・NISAの損益を別区分で管理した</li><li>国税庁の当年案内または税理士・税務署に最終確認した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照したTOSSY公式資料</h2><ul>
      <li><a href="https://tossy.com/support/faqs/article/87274/" target="_blank" rel="noopener noreferrer">確定申告に利用する書類はどのように表示できますか？</a></li>
      <li><a href="https://tossy.com/support/tax/assets/" target="_blank" rel="noopener noreferrer">TOSSYのアセット別税金</a></li>
      <li><a href="https://tossy.com/support/tax/" target="_blank" rel="noopener noreferrer">TOSSYの税金について</a></li>
      <li><a href="https://tossy.com/support/faqs/article/86670/" target="_blank" rel="noopener noreferrer">暗号資産の損益通算について</a></li>
      <li><a href="https://tossy.com/support/faqs/article/39905/" target="_blank" rel="noopener noreferrer">日次建て直しと税金について</a></li>
      <li><a href="https://tossy.com/_pdf/manual/tool-sp-nm.pdf" target="_blank" rel="noopener noreferrer">TOSSY取引ツール操作マニュアル</a></li>
    </ul><p>税務情報は2026年9月10日に確認しました。制度や報告書の表示は変更されることがあるため、申告時点の国税庁資料とTOSSY公式画面を優先してください。</p></section>

    <section className="article-affiliate" aria-label="TOSSYの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.tossy} /><p className="affiliate-disclosure">上記は提携広告です。広告報酬は税区分やリスクの評価に影響しません。TOSSYのFX・CFDは元本および利益が保証されず、預けた証拠金を上回る損失が生じる場合があります。</p></section>
    <p><Link href="/cfd/tossy">TOSSYの6資産・証拠金率を見る →</Link></p>
    <p><Link href="/articles/tossy-trading-hours-rollover">取引時間とロールオーバーを確認する →</Link></p>
    <p><Link href="/articles/fx-annual-transaction-report-tax-return">FXの年間取引報告書と確定申告準備を見る →</Link></p>
  </article>;
}
