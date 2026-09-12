import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fx-annual-report-provider-comparison' },
  title: 'FX年間損益報告書はいつ出る？DMM FX・松井証券・JFX・TOSSYを比較',
  description: 'DMM FX・松井証券FX・JFX・TOSSYの年間損益報告書や期間損益の確認時期・場所・保存方法を比較し、複数口座の確定申告準備を整理します。',
};

const providers = [
  ['DMM FX・DMM CFD', '年間損益報告書', '翌年1月の第1日曜日以降', '取引ツールの「報告書」から年間損益報告書をPDF出力'],
  ['松井証券FX', '期間損益照会', 'ログイン後いつでも（指定可能期間内）', 'FXお客様サイト・アプリの「資産状況」→「期間損益照会」'],
  ['JFX MATRIX TRADER', '損益計算書', '取引画面から期間を指定', '「履歴検索／報告書」→「報告書のダウンロード」'],
  ['TOSSY', '期間損益報告書', '報告書メニューから期間指定', 'アプリの「履歴／照会」→「取引報告書」またはPCの「報告書」'],
] as const;

const faq = [
  { q: '年間損益報告書がない会社では何を使いますか？', a: '松井証券FXのように年間取引報告書を発行しない会社では、期間損益照会や取引報告書で1月1日から12月31日までの決済損益を確認します。会社の公式案内にある帳票名を優先してください。' },
  { q: '4社の報告書をそのまま合算してよいですか？', a: 'まず各社の所得区分と対象アセットを分けます。暗号資産CFD、現物株式、NISAなどはFX・一定のCFD・先物と同じ扱いとは限らないため、区分確認後に合算します。' },
  { q: '報告書を確定申告書へ添付する必要はありますか？', a: '報告書の添付要否は税制や申告内容で変わります。添付が原則不要と案内される場合でも、申告内容を説明できるようPDFや履歴、経費資料を保存してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/fx-annual-report-provider-comparison', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">FX / ANNUAL REPORT COMPARISON</p>
    <h1>FX年間損益報告書はいつ出る？<br />DMM FX・松井証券・JFX・TOSSYを比較</h1>
    <p className="lede">同じ「年間損益」でも、会社によって帳票名、公開時期、確認場所が異なります。複数口座を使っている人が、どの画面から何を保存すればよいかを比較表と手順で整理します。</p>

    <div className="callout"><strong>最初に「帳票名」ではなく3つの数字をそろえる</strong><ul><li>対象期間が1月1日〜12月31日になっているか</li><li>決済損益、スワップ・調整額、手数料の扱い</li><li>未決済建玉の評価損益が含まれていないか</li></ul></div>

    <h2>4社の報告書を比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>サービス</th><th>主な帳票・画面</th><th>確認時期</th><th>場所</th></tr></thead><tbody>
      {providers.map(([name, report, timing, location]) => <tr key={name}><td className="ex-name">{name}</td><td>{report}</td><td>{timing}</td><td>{location}</td></tr>)}
    </tbody></table></div></div>
    <p>確認時期やメニュー名は公式案内をもとにした目安です。年末年始の営業日、システム更新、商品区分によって変わる場合があるため、申告前はログイン後の最新画面を確認します。</p>

    <h2>DMM FX・DMM CFDは翌年1月の第1日曜日以降</h2>
    <p>DMM公式では、確定申告に使う年間損益報告書を翌年1月の第1日曜日以降に取得できると案内しています。PC版は「報告書」、スマホアプリは「照会」から年間損益報告書を選び、対象年のPDFを保存します。</p>
    <p>DMM FXとDMM CFDでは、年末の取引終了時刻が銘柄によって異なる場合があります。対象年の締め時刻を営業スケジュールで確認し、必要なら期間損益報告書でも照合します。</p>
    <p><Link href="/articles/dmm-fx-trade-history-csv">DMM FXの取引履歴・年間報告書の出力手順を見る →</Link></p>
    <p><Link href="/articles/dmm-cfd-annual-profit-report">DMM CFDの年間損益報告書を詳しく見る →</Link></p>

    <h2>松井証券FXは「期間損益照会」で1年分を確認</h2>
    <p>松井証券FXは年間取引報告書を発行しない案内です。FXお客様サイト、FXアプリ、スマホサイトの期間損益照会で、決済年または日付指定を使って1年分の損益を確認します。画面を保存し、必要に応じて取引報告書の内訳と照合します。</p>
    <p><Link href="/articles/matsui-fx-annual-profit-report">松井証券FXの期間損益照会と保存方法を見る →</Link></p>

    <h2>JFXはMATRIX TRADERの損益計算書をダウンロード</h2>
    <p>JFXは、MATRIX TRADERの取引画面から報告書をダウンロードする手順を案内しています。「履歴検索／報告書」から損益計算書の年月を指定し、合計欄を年間損益として確認します。個別履歴のCSVと合計欄を突き合わせると、期間の重複や漏れを見つけやすくなります。</p>
    <p><Link href="/articles/jfx-trade-history-csv-tax-report">JFXのCSVと損益計算書の照合手順を見る →</Link></p>

    <h2>TOSSYはアセット区分ごとに期間損益報告書を出力</h2>
    <p>TOSSYはアプリ・PCの取引報告書メニューで「期間損益報告書」を選び、アセット区分と期間を指定してPDFを出力します。FX・各種CFDと暗号資産CFDは税区分が異なるため、区分ごとに別ファイルで保存します。</p>
    <p><Link href="/articles/tossy-tax-reporting">TOSSYの税区分と報告書出力を詳しく見る →</Link></p>

    <h2>複数口座を1行ずつ集計する</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>列</th><th>記録する内容</th><th>確認理由</th></tr></thead><tbody>
      <tr><td className="ex-name">サービス名</td><td>DMM FX、松井証券FX、JFXなど</td><td>報告書の出所を追跡するため</td></tr>
      <tr><td className="ex-name">アセット・所得区分</td><td>FX、CFD、暗号資産CFD、株式など</td><td>通算できる組み合わせを分けるため</td></tr>
      <tr><td className="ex-name">対象損益</td><td>会社の合計損益、スワップ・調整額</td><td>内訳の二重計上を防ぐため</td></tr>
      <tr><td className="ex-name">保存先・確認日</td><td>PDF名、画面、出力日</td><td>後から原本へ戻れるようにするため</td></tr>
    </tbody></table></div></div>
    <p>同じ報告書の合計に含まれているスワップや手数料を、別途もう一度足し引きしないよう注意します。集計後は、<Link href="/articles/fx-profit-loss-offset-tax">損益通算の範囲</Link>と<Link href="/articles/fx-etax-input-guide">e-Taxの入力順</Link>を確認します。</p>

    <h2>保存ルーティンと年末の注意</h2>
    <ul><li>毎月：取引履歴・入出金・スワップの明細を保存</li><li>翌年1月：年間または期間損益報告書を出力</li><li>集計時：決済損益と評価損益を分離</li><li>年末：営業日・マーケットクローズ時刻を確認</li><li>申告前：所得区分、損益通算、損失繰越を確認</li></ul>
    <div className="callout"><strong>報告書は原本として保管する</strong><p>添付が原則不要と案内される場合でも、PDF、取引履歴、経費の領収書、提出した申告書の控えは安全な場所に保存します。個人情報を含むため、公開URLや共有フォルダには置きません。</p></div>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://fx.dmm.com/support/tax/" target="_blank" rel="noopener noreferrer">DMM FX「税金と確定申告」</a></li>
      <li><a href="https://www.matsui.co.jp/support/tax/fx/" target="_blank" rel="noopener noreferrer">松井証券「FXの税制・確定申告」</a></li>
      <li><a href="https://www.jfx.co.jp/category/tax/tradereport_dl/" target="_blank" rel="noopener noreferrer">JFX「報告書のダウンロード方法（個人）」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/tax/" target="_blank" rel="noopener noreferrer">JFX「確定申告について」</a></li>
      <li><a href="https://tossy.com/support/faqs/article/87274/" target="_blank" rel="noopener noreferrer">TOSSY「確定申告に利用する書類はどのように表示できますか？」</a></li>
    </ul><p>報告書の仕様・確認場所は2026年9月10日に公式ページで確認しました。提供時期や税制は変更される場合があるため、申告時点の公式情報を優先してください。</p></section>

    <section className="article-affiliate" aria-label="提携中のFX広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} /><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">上記は提携広告です。広告報酬は報告書の内容、税務情報、比較結果に影響しません。FX・CFDは元本および利益が保証されず、損失が生じる場合があります。</p></section>
    <p><Link href="/articles/fx-annual-transaction-report-tax-return">複数口座の年間損益を集計する基本手順へ →</Link></p>
    <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
  </article>;
}
