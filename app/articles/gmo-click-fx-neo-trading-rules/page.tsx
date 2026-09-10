import Link from 'next/link';

export const metadata = {
  title: 'GMOクリック証券FXネオの取引ルール｜1,000通貨・50％ロスカット・時間',
  description: 'GMOクリック証券FXネオの取引単位、注文受付時間、取引時間、証拠金維持率50％の自動ロスカット、入金・メンテナンスを公式情報で整理します。',
};

const faq = [
  { q: 'GMOクリック証券FXネオは何通貨から取引できますか？', a: '公式案内では1,000通貨単位の取引に対応しています。通貨ペアや注文方法によって条件が異なる場合があるため、発注画面の数量単位を優先してください。' },
  { q: 'FXネオの自動ロスカットは何％ですか？', a: '個人口座は証拠金維持率が50％未満になると自動ロスカットの対象です。法人は100％未満が基準と案内されています。自動ロスカット手数料も発生するため、基準到達前の余力を確認します。' },
  { q: '取引時間外でも注文できますか？', a: '注文受付は原則24時間ですが、取引時間外は指値などの予約注文のみです。FXネオの取引時間は月曜午前7時から土曜午前7時（米国夏時間は土曜午前6時）と案内されています。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/gmo-click-fx-neo-trading-rules', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">GMO CLICK / FX NEO RULES</p>
    <h1>GMOクリック証券FXネオの取引ルール<br />1,000通貨・50％ロスカット・時間</h1>
    <p className="lede">GMOクリック証券のFXネオは、1,000通貨単位から取引でき、取引手数料は無料です。一方で、注文受付時間と取引時間、個人・法人のロスカット基準、メンテナンス時間は分けて確認する必要があります。</p>

    <div className="callout"><strong>発注前に確認する4項目</strong><ul><li>数量欄の1Lotが何通貨を意味するか</li><li>注文受付時間と実際に約定する取引時間</li><li>証拠金維持率50％未満の自動ロスカット（個人口座）</li><li>メンテナンス中の注文・入出金・振替の停止</li></ul></div>

    <h2>FXネオの基本条件</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>公式案内の整理</th><th>実務上の注意</th></tr></thead><tbody>
      <tr><td className="ex-name">取引単位</td><td>1,000通貨単位に対応</td><td>通貨ペア・注文画面の単位を確認</td></tr>
      <tr><td className="ex-name">取引手数料</td><td>全通貨ペア0円</td><td>スプレッド、スリッページ、ロスカット手数料は別</td></tr>
      <tr><td className="ex-name">注文受付</td><td>0:00〜24:00</td><td>取引時間外は予約注文のみ</td></tr>
      <tr><td className="ex-name">取引時間</td><td>月曜7:00〜土曜7:00（夏時間は土曜6:00）</td><td>週末・祝日・メンテナンスを確認</td></tr>
      <tr><td className="ex-name">自動ロスカット</td><td>個人50％未満、法人100％未満</td><td>急変時は基準から乖離して約定する場合がある</td></tr>
    </tbody></table></div></div>
    <p>スプレッドは原則固定の時間帯や数量上限が設定される場合があります。広告の表示値だけでなく、公式の適用条件、重要指標時の拡大、約定結果を確認します。</p>

    <h2>1,000通貨の必要資金を計算する</h2>
    <p>必要証拠金は、為替レート、取引数量、証拠金率で変わります。米ドル円を1,000通貨取引する場合、想定元本は「レート×1,000」です。個人の必要証拠金は法令上の上限レバレッジや取引ルールをもとに計算し、実際の発注画面に表示される金額を優先します。</p>
    <div className="fx-formula"><span>概算式</span><strong>必要証拠金 ≒ 米ドル円レート × 1,000通貨 ÷ レバレッジ</strong><b>＋ スプレッド・余裕資金</b><small>ロスカット基準までの余力を残し、必要証拠金だけで資金を決めないようにします。</small></div>
    <p><Link href="/tools/fx-position-size-calculator">FXポジションサイズ計算機で数量と損失額を試算する →</Link></p>

    <h2>注文受付時間と取引時間を分ける</h2>
    <p>FXネオは注文受付が0時から24時までですが、取引時間外は指値などの予約注文に限られます。成行・スピード注文を出す場合は、通貨ペアの取引時間内かを確認します。月曜開始直後や週末終了前は流動性やレート配信が変わることもあります。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>時間帯</th><th>できること</th><th>注意点</th></tr></thead><tbody>
      <tr><td className="ex-name">取引時間内</td><td>成行・スピード・指値など</td><td>経済指標時はスプレッド拡大に注意</td></tr>
      <tr><td className="ex-name">取引時間外</td><td>指値など予約注文</td><td>即時約定はできない</td></tr>
      <tr><td className="ex-name">週末</td><td>土曜終了後は取引停止</td><td>月曜開始時のレート飛びに備える</td></tr>
    </tbody></table></div></div>

    <h2>自動ロスカット50％の読み方</h2>
    <p>個人口座では、証拠金維持率が50％未満になると自動ロスカットの対象です。これは「50％まで安全」という意味ではなく、相場急変時に基準価格から離れて約定する可能性があります。自動ロスカット手数料も発生するため、注文前に維持率と余力を試算します。</p>
    <p>法人は100％未満が基準と案内されており、個人口座とは判定が異なります。口座区分を確認せずに他社のロスカット率を流用しないでください。</p>
    <p><Link href="/fx/losscut-comparison">FX各社のロスカット基準を比較する →</Link></p>

    <h2>入金・振替とメンテナンス</h2>
    <p>GMOクリック証券のサービス時間一覧では、FXネオの即時入金受付や口座間振替に時間帯が設定されています。毎週土曜の全会員ページ停止中は、ログイン、即時入金、振替が利用できない場合があります。入金直後に発注する予定なら、メンテナンス時間を避けて余裕を持たせます。</p>
    <ul><li>即時入金は提携金融機関の利用時間にも左右される</li><li>振込入金は名義相違や反映待ちが発生し得る</li><li>メンテナンス中は注文・入出金・振替の状態確認ができない場合がある</li></ul>
    <p><Link href="/articles/fx-company-selection-cost-checklist">FX会社を比較するときの7項目を見る →</Link></p>

    <h2>注文前チェックリスト</h2>
    <ul><li>1Lotの通貨数と最小数量を確認した</li><li>取引時間内か、予約注文でよいかを確認した</li><li>スプレッドの適用時間・数量・例外を確認した</li><li>維持率と余裕資金を試算した</li><li>自動ロスカット手数料と急変時の約定リスクを確認した</li><li>入金・振替とメンテナンス時間を確認した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照したGMOクリック証券公式資料</h2><ul>
      <li><a href="https://www.click-sec.com/corp/guide/fxneo/" target="_blank" rel="noopener noreferrer">FXネオ 商品案内</a></li>
      <li><a href="https://faq.click-sec.com/faq/show/91?category_id=24&site_domain=default" target="_blank" rel="noopener noreferrer">FXネオ取引のロスカットについて</a></li>
      <li><a href="https://www.click-sec.com/corp/guide/service_hours_list/" target="_blank" rel="noopener noreferrer">サービス時間一覧</a></li>
      <li><a href="https://www.click-sec.com/corp/support/maintenance.html" target="_blank" rel="noopener noreferrer">メンテナンス情報</a></li>
      <li><a href="https://www.click-sec.com/corp/guide/commission_list/" target="_blank" rel="noopener noreferrer">手数料一覧</a></li>
    </ul><p>取引条件・時間・ロスカット情報は2026年9月10日に確認しました。最新の公式取引ルールと発注画面を優先してください。</p></section>

    <p className="affiliate-disclosure">本記事はGMOクリック証券FXネオの公式情報を整理したものです。提携広告の有無や報酬額は、取引条件・リスクの評価に影響しません。FXは元本および利益が保証されず、損失が生じる場合があります。</p>
    <p><Link href="/fx/gmo-click">GMOクリック証券FXネオの取引コスト一覧へ →</Link></p>
    <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
  </article>;
}
