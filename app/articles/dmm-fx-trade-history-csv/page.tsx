import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/dmm-fx-trade-history-csv' },
  title: 'DMM FXの取引履歴をCSV保存する方法｜約定履歴・期間損益・年間報告書',
  description: 'DMM FXのPC・スマホで約定履歴を確認し、CSV・期間損益・年間損益報告書を確定申告用に使い分ける方法を公式マニュアルから整理します。',
};

const faq = [
  { q: 'DMM FXの約定履歴はスマホでも確認できますか？', a: '確認できます。スマホアプリの「履歴/照会」から「約定履歴」を開きます。PC版DMMFX PLUSでは、メニューの「取引照会」から約定履歴を選びます。' },
  { q: 'CSVを1回押せば全期間を保存できますか？', a: '検索画面に表示されている件数分が対象です。件数が多い場合はページを切り替え、各ページでCSV出力を行います。PC版マニュアルでは、検索期間を365日以内に区切る案内もあります。' },
  { q: '確定申告にはCSVと年間損益報告書のどちらを使いますか？', a: '年間の申告額を確認する主資料は年間損益報告書です。CSVや約定履歴は、銘柄別・取引別の照合、経費や損益の記録を補助する資料として保存します。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-fx-trade-history-csv', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM FX / RECORDS & TAX</p>
    <h1>DMM FXの取引履歴をCSV保存する方法<br />約定履歴・期間損益・年間報告書</h1>
    <p className="lede">DMM FXの損益を後から確認するなら、取引画面の数字を見ただけで終わらせず、約定履歴を検索して保存します。CSV、期間損益報告書、年間損益報告書は役割が異なるため、確定申告の準備では「集計」と「照合」を分けて管理します。</p>

    <div className="callout"><strong>先に結論</strong><ul><li>PCは「メニュー」→「取引照会」→「約定履歴」から検索します。</li><li>CSVは画面に表示されたページ分だけ出力されるため、複数ページならページごとに保存します。</li><li>申告用の年間集計は年間損益報告書、取引単位の確認はCSVという使い分けが安全です。</li></ul></div>

    <h2>3種類の帳票を役割で分ける</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>資料</th><th>分かること</th><th>使いどころ</th></tr></thead><tbody>
      <tr><td className="ex-name">約定履歴CSV</td><td>約定日時、通貨ペア、売買、数量、約定レートなど</td><td>取引別の照合、月別集計、記録のバックアップ</td></tr>
      <tr><td className="ex-name">期間損益報告書</td><td>指定期間の損益合計</td><td>月別・四半期など任意期間の確認</td></tr>
      <tr><td className="ex-name">年間損益報告書</td><td>1月1日〜12月31日の年間損益</td><td>確定申告の年間集計を確認する主資料</td></tr>
    </tbody></table></div></div>
    <p>約定履歴には未約定の注文は含まれません。注文を出した記録を確認したい場合は注文履歴、入金・出金を確認したい場合は入出金履歴を別に保存します。</p>

    <h2>PC版DMMFX PLUSでCSVを出力する手順</h2>
    <ol><li>DMMFX PLUSを起動し、「メニュー」から「取引照会」→「約定履歴」を開く</li><li>通貨ペア、期間、売買区分、表示件数を設定して「検索」を押す</li><li>検索結果の内容と件数を確認し、「CSV出力」を押す</li><li>複数ページある場合は、ページ番号を切り替えて同じ操作を繰り返す</li><li>ファイル名に対象期間を付け、クラウドや外部媒体にもバックアップする</li></ol>
    <div className="fx-formula"><span>保存ファイル名の例</span><strong>DMMFX_約定履歴_2026-01-01_2026-03-31.csv</strong><small>期間・口座名・取得日を含めると、翌年の照合がしやすくなります。</small></div>
    <p>公式マニュアルでは、起点日から終点日までの検索期間を365日以内にする案内があります。1年分を保存するときも、年初から年末までを一度に指定できない場合は、複数回に分割して保存します。</p>

    <h2>スマホアプリで約定履歴を確認する</h2>
    <ol><li>スマホアプリ「DMM FX」にログインする</li><li>画面左上のメニューから「履歴/照会」→「約定履歴」をタップする</li><li>期間や通貨ペアを指定して、取引内容を確認する</li></ol>
    <p>スマホでは画面上での照合を行い、詳細なCSV保存や大量データの整理はPC版で行うと管理しやすくなります。アプリの表示と年間報告書の合計が合わないときは、期間の境界時刻やスワップの扱いを確認します。</p>

    <h2>期間損益と年間損益の集計を照合する</h2>
    <p>確定申告の対象期間は原則として1月1日から12月31日です。年間損益報告書の合計を基準にし、CSVの約定履歴や期間損益報告書を使って、月別・通貨ペア別の差異を探します。DMM FXの案内では、年間損益報告書は翌年1月の第1日曜日以降に取得できます。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>照合順</th><th>確認する項目</th><th>差異が出る原因</th></tr></thead><tbody>
      <tr><td className="ex-name">1</td><td>年間損益報告書の対象年</td><td>年末年始の営業日・締め時刻</td></tr>
      <tr><td className="ex-name">2</td><td>期間損益報告書の同じ日付</td><td>開始日・終了日の指定ミス</td></tr>
      <tr><td className="ex-name">3</td><td>CSVの決済約定とスワップ</td><td>未決済評価損益や付与日の扱い</td></tr>
      <tr><td className="ex-name">4</td><td>他社FX・CFD・先物の報告書</td><td>口座ごとの集計漏れ・二重計上</td></tr>
    </tbody></table></div></div>
    <p>年間損益報告書の取得時期や取引の締め時刻は年度により変わる可能性があります。最新の公式案内と税務署・税理士の指示を優先してください。</p>

    <h2>CSVを保存するときの実務チェックリスト</h2>
    <ul><li>期間をファイル名に入れた</li><li>表示件数を最大にし、全ページを出力した</li><li>新規・決済、売買区分の検索条件を確認した</li><li>年間損益報告書のPDFも別に保存した</li><li>他社のFX・CFD・先物と口座を分けて管理した</li><li>CSVの合計と期間損益報告書を照合した</li><li>保存先を二重化し、翌年まで開けることを確認した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://fx.dmm.com/support/faqs/article/00162/" target="_blank" rel="noopener noreferrer">DMM FX「約定履歴はどこから確認できますか？」</a></li>
      <li><a href="https://fx.dmm.com/manual/plus_fx.pdf" target="_blank" rel="noopener noreferrer">DMMFX PLUS 操作マニュアル</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00039/" target="_blank" rel="noopener noreferrer">DMM FX「確定申告に利用する書類はどのように表示できますか？」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00164/" target="_blank" rel="noopener noreferrer">DMM FX「いつまでの取引が確認できますか？」</a></li>
      <li><a href="https://fx.dmm.com/support/tax/" target="_blank" rel="noopener noreferrer">DMM FX「税金と確定申告」</a></li>
    </ul><p>取引履歴と報告書の仕様は2026年9月9日に確認しました。画面や出力条件が更新される場合があるため、実際の取引ツールを優先してください。</p></section>

    <section className="provider-no-ad"><div><span>ADVERTISEMENT</span><h2>DMM FXの広告コードは確認後に掲載します。</h2></div><p>広告リンクの有無と税務情報は分けて管理しています。取引や申告の最終判断は、公式資料と専門家の案内を確認してください。</p></section>
    <p><Link href="/fx/dmm-fx">DMM FXの取引条件一覧へ →</Link></p>
    <p><Link href="/articles/fx-annual-transaction-report-tax-return">FX年間取引報告書を使った確定申告準備 →</Link></p>
    <p><Link href="/articles/dmm-fx-funding-transfer">DMM FXの入金・出金・証拠金振替を見る →</Link></p>
  </article>;
}
