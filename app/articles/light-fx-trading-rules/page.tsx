import Link from 'next/link';

export const metadata = {
  title: 'LIGHT FXの取引時間と0.1Lot｜メンテナンス・入出金を整理',
  description: 'LIGHT FXの最小取引単位0.1Lot、夏冬の取引時間、日次・週次メンテナンス、入出金口座と必要資金の確認方法を公式情報で整理します。',
};

const faq = [
  { q: 'LIGHT FXは0.1Lotから取引できますか？', a: '公式FAQでは最小取引単位が0.1Lotと案内されています。通貨ペアごとの取引単位やLIGHTペアの条件は、発注画面と最新の取引ルールを確認してください。' },
  { q: 'メンテナンス中に注文は約定しますか？', a: '日次メンテナンス中はレート配信が停止し、注文は約定しません。指値・逆指値などの予約は可能と案内されています。入出金操作もできないため、時間をずらします。' },
  { q: '振込入金後すぐに取引できますか？', a: '振込入金は入出金口座へ反映されるため、取引を始めるにはFX口座への資金振替が必要です。ダイレクト入金はほぼリアルタイムですが、エラー時は反映が遅れることがあります。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/light-fx-trading-rules', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">LIGHT FX / TRADING RULES</p>
    <h1>LIGHT FXの取引時間と0.1Lot<br />メンテナンス・入出金を整理</h1>
    <p className="lede">LIGHT FXは0.1Lotから取引できますが、取引時間、メンテナンス、入金先口座、振替の流れを分けて確認する必要があります。少額で始める前に、取引できる時間と必要な余裕資金を整理します。</p>

    <div className="callout"><strong>LIGHT FXの確認ポイント</strong><ul><li>最小取引単位は0.1Lot</li><li>米国標準時間と夏時間で終了時刻が変わる</li><li>日次メンテナンス中は約定・入出金が停止する</li><li>振込入金は入出金口座からFX口座への振替が必要</li></ul></div>

    <h2>取引時間とメンテナンス</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>米国標準時間</th><th>米国夏時間</th><th>影響</th></tr></thead><tbody>
      <tr><td className="ex-name">取引時間</td><td>月曜7:00〜土曜6:50</td><td>月曜7:00〜土曜5:50</td><td>この時間内に注文を約定</td></tr>
      <tr><td className="ex-name">日次メンテナンス</td><td>月曜6:00〜6:25／火〜日6:50〜7:10</td><td>月曜6:00〜6:25／火〜日5:50〜6:10</td><td>レート停止、注文は約定しない</td></tr>
      <tr><td className="ex-name">週次メンテナンス</td><td colSpan={2}>土曜12:00〜18:00</td><td>取引システムへログイン不可</td></tr>
    </tbody></table></div></div>
    <p>日次メンテナンス中は指値・逆指値などの予約注文は可能ですが、約定は再開後です。相場が再開したときのレート変動を考慮し、週末前の建玉と注文を確認します。</p>

    <h2>0.1Lotの必要資金を考える</h2>
    <p>LIGHT FXでは0.1Lotが最小単位ですが、必要証拠金は通貨ペアのレート、1Lotの通貨数、レバレッジによって変わります。必要証拠金ぎりぎりではロスカットに近づくため、シミュレーション結果へ余裕資金を加えて考えます。</p>
    <div className="fx-formula"><span>概算</span><strong>0.1Lotの想定元本</strong><b>× 証拠金率 ＋ スプレッド・余裕資金</b><small>公式シミュレーションは概算値で、スワップの受払は考慮されない案内です。</small></div>
    <p><Link href="/tools/fx-position-size-calculator">FXの数量・損失額を試算する →</Link></p>

    <h2>入金方法は「入出金口座」と「FX口座」を分ける</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>方法</th><th>反映先</th><th>確認ポイント</th></tr></thead><tbody>
      <tr><td className="ex-name">ダイレクト入金</td><td>入出金口座へほぼリアルタイム</td><td>金融機関・メンテナンス・エラーを確認</td></tr>
      <tr><td className="ex-name">振込入金</td><td>入出金口座</td><td>FX口座への資金振替が必要</td></tr>
      <tr><td className="ex-name">出金</td><td>登録金融機関口座</td><td>受付時刻、営業日、本人名義を確認</td></tr>
    </tbody></table></div></div>
    <p>ダイレクト入金は操作完了前に画面を閉じると、銀行側で引落し済みでも未反映になる場合があります。入金履歴と銀行明細を照合し、同じ金額を重ねて送らないようにします。</p>

    <h2>スプレッドとロスカットを同時に見る</h2>
    <p>LIGHT FXのスプレッドは市場状況や時間帯で変動する可能性があります。0.1Lotの少額取引でも、スプレッド、スワップ、ロスカットラインを同時に確認し、必要証拠金だけで資金を決めません。</p>
    <ul><li>適用時間と提示スプレッド</li><li>0.1Lotの取引数量と1pipsの損益</li><li>証拠金シミュレーションのロスカットライン</li><li>メンテナンス明けのレート変動</li></ul>
    <p><Link href="/fx/lightfx">LIGHT FXの取引コスト一覧を見る →</Link></p>

    <h2>発注前チェックリスト</h2>
    <ul><li>通貨ペアの0.1Lot換算を確認した</li><li>夏時間・冬時間の終了時刻を確認した</li><li>日次・週次メンテナンスを避けて入出金を計画した</li><li>振込入金後にFX口座へ振替することを確認した</li><li>必要証拠金とロスカットラインに余裕を持たせた</li><li>スプレッド拡大と急変時の約定を想定した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照したLIGHT FX公式資料</h2><ul>
      <li><a href="https://lightfx.jp/service/outline/" target="_blank" rel="noopener noreferrer">LIGHT FX サービス概要</a></li>
      <li><a href="https://lightfx.jp/start/flow/funds/" target="_blank" rel="noopener noreferrer">LIGHT FX 入出金・振替方法</a></li>
      <li><a href="https://help.lightfx.jp/いくら入金したら取引ができますか？-656d566a397b570022e8e2f4" target="_blank" rel="noopener noreferrer">LIGHT FX 必要資金FAQ</a></li>
      <li><a href="https://help.lightfx.jp/【LIGHT%20FX】証拠金シミュレーション-6645d354f5ba69001cc4e3ff" target="_blank" rel="noopener noreferrer">LIGHT FX 証拠金シミュレーション</a></li>
    </ul><p>取引時間・入出金情報は2026年9月10日に確認しました。最新の取引ルールとログイン後の画面を優先してください。</p></section>
    <p className="affiliate-disclosure">本記事はLIGHT FXの公式情報を整理したものです。広告の有無や報酬額は、取引条件・リスクの評価に影響しません。FXは元本および利益が保証されず、損失が生じる場合があります。</p>
    <p><Link href="/articles/fx-company-selection-cost-checklist">FX会社の比較7項目を見る →</Link></p>
  </article>;
}
