import Link from 'next/link';

export const metadata = {
  title: 'DMM FXスワップポイントの税金｜付与・振替・確定申告',
  description: 'DMM FXのスワップポイントがいつ付与され、振替で何が変わるか、決済・受取と確定申告の関係を公式情報から整理します。',
};

const faq = [
  { q: 'スワップポイントはいつ付与されますか？', a: 'ポジションを持ち越した翌営業日に付与されます。営業日の切り替わりは、公式FAQでは夏時間6時、冬時間7時と案内されています。土日や祝日がある週は付与日数が変わるため、スワップカレンダーを確認します。' },
  { q: 'スワップ振替をするとポジションも決済されますか？', a: 'いいえ。スワップ振替はポジションを決済せず、付与されたスワップポイントだけを預託証拠金残高へ移す機能です。' },
  { q: '未決済ポジションのスワップは申告が必要ですか？', a: 'DMM FXの公式案内では、未決済ポジションの含み損益は原則として課税対象外ですが、スワップ受取を行った場合は受取額が課税対象になります。法人や個別事情は税理士・税務署へ確認してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-fx-swap-tax', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM FX / SWAP & TAX</p>
    <h1>DMM FXスワップポイントの税金<br />付与・振替・確定申告</h1>
    <p className="lede">DMM FXのスワップポイントは、付与された時点、振り替えて受け取った時点、ポジションを決済した時点で確認場所が変わります。スワップカレンダーの記事とは分け、税務上の集計と取引画面での記録方法を整理します。</p>

    <div className="callout"><strong>結論を先に確認</strong><ul><li>スワップは持ち越しの翌営業日に付与され、土日・祝日は付与日数が変わります。</li><li>スワップ振替はポジションを決済せず、スワップだけを預託証拠金残高へ移します。</li><li>公式案内では、決済損益と受け取ったスワップを年間損益へ合算し、未決済の含み損益は原則として含めません。</li></ul></div>

    <h2>付与・振替・決済を3段階で分ける</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>段階</th><th>取引画面で起きること</th><th>記録する金額</th></tr></thead><tbody>
      <tr><td className="ex-name">付与</td><td>保有ポジションにスワップが表示される</td><td>付与額、付与日、通貨ペア、買い・売り</td></tr>
      <tr><td className="ex-name">振替</td><td>ポジションを残したまま残高へ移す</td><td>振替額、振替日、預託証拠金残高</td></tr>
      <tr><td className="ex-name">決済</td><td>ポジションの為替差損益とスワップを確定する</td><td>年間損益報告書の合計、決済日</td></tr>
    </tbody></table></div></div>
    <p>「付与されたからすぐ申告」「振替しないから課税されない」と単純には判断しません。個人・法人、決済方法、税制改正の影響で扱いが変わる場合があるため、年間損益報告書と税務専門家の案内を優先します。</p>

    <h2>スワップが付与される時刻と日数</h2>
    <p>DMM FXの公式FAQでは、ポジションを持ち越した翌営業日にスワップが付与され、営業日の切り替わりは夏時間6時、冬時間7時と案内されています。土日・各国祝日の前後は、1日分ではなく複数日分がまとめて付与されることがあります。</p>
    <div className="fx-formula"><span>確認する順番</span><strong>スワップカレンダー</strong><b>→ 付与日数 → ポジション照会</b><small>曜日だけで決めず、対象通貨ペアと当月のカレンダーを確認します。</small></div>
    <p><Link href="/articles/dmm-fx-swap-calendar">DMM FXの0日・3日・4日付与をカレンダーで確認する →</Link></p>

    <h2>スワップ振替は「受け取る」操作</h2>
    <p>ポジション照会からスワップ振替を実行すると、ポジションを決済せずにスワップポイントだけを受け取れます。振替後の金額は預託証拠金残高に反映され、プラススワップなら出金可能額も増える案内です。一方、純資産額・建玉可能額・証拠金維持率は、スワップ付与時点ですでに反映されているため、振替操作だけでは変わりません。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>振替前</th><th>振替後</th></tr></thead><tbody>
      <tr><td className="ex-name">ポジション</td><td>保有中</td><td>保有継続（決済しない）</td></tr>
      <tr><td className="ex-name">預託証拠金残高</td><td>振替前の残高</td><td>振替額を反映</td></tr>
      <tr><td className="ex-name">出金可能額</td><td>プラススワップ分を含まない場合がある</td><td>プラススワップ振替で増加</td></tr>
      <tr><td className="ex-name">証拠金維持率</td><td>付与時点で計算</td><td>振替だけでは変動しない</td></tr>
    </tbody></table></div></div>

    <h2>確定申告では何を合計するか</h2>
    <p>DMM FXの税務案内では、その年の1月1日から12月31日（マーケットクローズ）までに決済した為替差損益とスワップポイントを合計して所得を計算します。年間損益報告書を主資料にし、約定履歴やスワップ振替履歴を補助資料として保存します。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>ケース</th><th>公式案内の整理</th><th>保存するもの</th></tr></thead><tbody>
      <tr><td className="ex-name">決済済み＋スワップ</td><td>決済損益とスワップを年間で合算</td><td>年間損益報告書・約定履歴</td></tr>
      <tr><td className="ex-name">未決済ポジション</td><td>含み損益は原則として課税対象外</td><td>年末のポジション照会</td></tr>
      <tr><td className="ex-name">スワップ振替</td><td>受け取ったスワップは課税対象となる案内</td><td>振替履歴・年間損益報告書</td></tr>
    </tbody></table></div></div>
    <p>税率、必要経費、損失繰越、他社FX・CFD・先物との損益通算は個人の状況で変わります。DMM FXの案内でも、最終的な判断は税理士または所轄税務署へ相談するよう示されています。</p>

    <h2>取引画面で保存する順番</h2>
    <ol><li>年末に年間損益報告書を出力する</li><li>約定履歴を期間指定し、決済取引とスワップの記録を保存する</li><li>スワップ振替を行った場合は、振替履歴と残高の変化を保存する</li><li>他社FX・CFD・先物の報告書と合算し、同じ取引を二重計上していないか確認する</li><li>必要経費の領収書と、税務上の判断メモを同じ年度フォルダに保管する</li></ol>
    <p><Link href="/articles/dmm-fx-trade-history-csv">DMM FXの約定履歴をCSV保存する手順を見る →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://fx.dmm.com/support/faqs/article/00167/" target="_blank" rel="noopener noreferrer">DMM FX「スワップポイントはいつ付与されますか？」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00070/" target="_blank" rel="noopener noreferrer">DMM FX「スワップ振替とはなんですか？」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00103/" target="_blank" rel="noopener noreferrer">DMM FX「スワップ振替を行うと、どこに反映されますか？」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00042/" target="_blank" rel="noopener noreferrer">DMM FX「未決済ポジションは確定申告する必要がありますか？」</a></li>
      <li><a href="https://fx.dmm.com/support/tax/calculation/" target="_blank" rel="noopener noreferrer">DMM FX「税金と確定申告～どうやって計算？～」</a></li>
    </ul><p>スワップ・税務情報は2026年9月9日に確認しました。制度や商品条件が変更される場合があるため、申告時は最新の公式情報と税務署・税理士の案内を優先してください。</p></section>

    <section className="provider-no-ad"><div><span>ADVERTISEMENT</span><h2>DMM FXの広告コードは確認後に掲載します。</h2></div><p>広告の有無と税務情報は分けて管理しています。スワップの受取・決済や確定申告の最終判断は、公式資料と専門家の案内を確認してください。</p></section>
    <p><Link href="/fx/dmm-fx">DMM FXの取引条件一覧へ →</Link></p>
    <p><Link href="/articles/dmm-fx-trade-history-csv">約定履歴をCSV保存する方法 →</Link></p>
    <p><Link href="/articles/fx-swap-transfer-tax">JFXのスワップ振替と税金も比較する →</Link></p>
  </article>;
}
