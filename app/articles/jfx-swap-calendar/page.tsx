import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/jfx-swap-calendar' },
  title: 'JFXのスワップポイント付与日と時間｜3倍デー・祝日の確認方法',
  description: 'JFX MATRIX TRADERのスワップ付与時刻、木曜朝の3日分、USD/CAD・USD/TRYの例外、祝日カレンダーと確認画面を公式情報で整理します。',
};

const faq = [
  { q: 'JFXのスワップ3日分は何曜日ですか？', a: '原則として水曜日分（木曜日の朝に付与される分）に土日を含む3日分が付与されます。年末年始・ゴールデンウィーク・各国の祝日などは変則になることがあるため、付与日数は当日のスワップカレンダーを確認してください。' },
  { q: '月曜日の朝にスワップが付かないのはなぜですか？', a: '金曜日から月曜日へ持ち越したポジションの土日分は、土曜日のロールオーバー時点で前倒し付与されます。そのため月曜朝に同じポジションへ改めて付与されるわけではありません。' },
  { q: 'スワップポイントはどの画面で確認できますか？', a: '通貨ペアごとの予定・履歴はJFX公式のスワップポイント一覧で確認できます。MATRIX TRADERでは運用カレンダー、スマートフォン版では「情報」からスワップ一覧を開きます。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/jfx-swap-calendar', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">JFX / SWAP CALENDAR</p>
    <h1>JFXのスワップポイント付与日と時間<br />3倍デー・祝日の確認方法</h1>
    <p className="lede">JFXのスワップポイントは、ニューヨーク市場のクローズにあたるロールオーバー時点でポジションを保有していると付与されます。木曜朝に3日分となる仕組みや、祝日で日数が変わるケースを、取引前に確認できる形でまとめます。</p>

    <div className="callout"><strong>先に押さえる4点</strong><ul>
      <li>日本時間の付与判定は、米国標準時間で午前6時59分、米国夏時間で午前5時59分頃です。</li>
      <li>原則、水曜日分（木曜朝付与）が土日を含む3日分になります。</li>
      <li>USD/CADとUSD/TRYは、木曜日分に3日分を付与する例外があります。</li>
      <li>祝日・年末年始は変則になるため、予定表の「付与日数」を優先します。</li>
    </ul></div>

    <h2>通常の付与日数と例外</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>ケース</th><th>付与のタイミング</th><th>付与日数</th><th>見る場所</th></tr></thead><tbody>
      <tr><td className="ex-name">通常の日本円ペア</td><td>各営業日のロールオーバー後</td><td>原則1日分</td><td>スワップ一覧・運用カレンダー</td></tr>
      <tr><td className="ex-name">週末分の前倒し</td><td>木曜朝（通常の水曜分）</td><td>土日を含む3日分</td><td>付与日数欄</td></tr>
      <tr><td className="ex-name">USD/CAD・USD/TRY</td><td>木曜分のロールオーバー後</td><td>原則3日分</td><td>通貨ペア別一覧</td></tr>
      <tr><td className="ex-name">祝日・年末年始</td><td>営業日カレンダーに応じて変動</td><td>0・2・3・4日など変則</td><td>JFXニュース・予定表</td></tr>
    </tbody></table></div></div>
    <p>「水曜に保有すれば必ず3日分」という意味ではありません。付与日数は受渡日と各国の休日で変わるため、ポジションを建てる前に該当日を指定して確認します。</p>

    <h2>付与時刻とロールオーバー</h2>
    <div className="fx-formula"><span>JFXの判定時刻</span><strong>ポジションを保有</strong><b>→ 6:59頃（標準時間）／5:59頃（夏時間）</b><small>ロールオーバー処理は15分程度、最大30分程度かかる場合があります。時刻直前の新規・決済は余裕を持って行います。</small></div>
    <p>JFXの説明では、ポジションを保有したままロールオーバーを迎えるとスワップポイントが付与されます。処理中はレート配信や注文受付が一時停止するため、付与直前・直後の約定を狙う場合は取引画面のメンテナンス表示も確認してください。</p>

    <h2>JFX公式サイトでスワップ日数を調べる</h2>
    <ol>
      <li>JFX公式の「スワップポイント」または「スワップカレンダー」を開く</li>
      <li>確認したい日付を選び、通貨ペアを絞り込む</li>
      <li>「付与日数」「スワップ買」「スワップ売」を確認する</li>
      <li>外貨表示の通貨ペアは、円換算レートも確認して損益を試算する</li>
    </ol>
    <p>一覧のスワップポイントは原則1Lotあたりです。JFXの基本Lot数や例外は、<Link href="/articles/jfx-lot-trade-unit">JFXの1Lotと通貨数の解説</Link>で確認できます。</p>

    <h2>MATRIX TRADER・スマホで履歴を確認する</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>画面</th><th>操作</th><th>確認できる内容</th></tr></thead><tbody>
      <tr><td className="ex-name">MATRIX TRADER</td><td>情報 → 運用カレンダー</td><td>日付ごとの付与日数・買売スワップ・NYCL</td></tr>
      <tr><td className="ex-name">iPhone・Android</td><td>下部メニュー → 情報 → スワップ一覧</td><td>通貨ペア別のスワップ一覧</td></tr>
      <tr><td className="ex-name">証拠金状況照会</td><td>未実現スワップ欄を確認</td><td>保有ポジションに付与された合計</td></tr>
    </tbody></table></div></div>
    <p>運用カレンダーの日付は、付与された日ではなく前営業日を指定して検索する仕様があります。画面の説明に従い、検索日と実際の付与時刻を取り違えないようにします。</p>

    <h2>3日分でも利益が保証されるわけではない</h2>
    <p>スワップは金利差や市場環境で変動し、買いと売りで受取・支払が逆になることがあります。3日分の付与日でも、同じポジションの為替差損がスワップを上回る可能性があります。出金や長期保有を決める前に、スプレッド、必要証拠金、ロスカット余力を合算して判断します。</p>
    <div className="callout"><strong>スワップ狙いの最低チェック</strong><ul><li>付与日数ではなく、買い・売りの符号と1Lotあたり金額を確認</li><li>必要証拠金と想定逆行幅を同時に試算</li><li>祝日週は予定表の更新日とJFXニュースを再確認</li><li>受取スワップの税務・振替方法は別途確認</li></ul></div>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/swap/" target="_blank" rel="noopener noreferrer">JFX「スワップポイント」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=36&amp;id=561&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「祝日のスワップポイントはいつ付与されますか？」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=36&amp;id=219&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「木曜日の朝に付与されるスワップポイントだけ多い理由」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=36&amp;id=215&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「スワップポイントはどこで確認できますか？」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
    </ul><p>スワップの時刻・付与日数は2026年9月10日に確認しました。祝日や市場環境で変更されるため、取引時点のJFX公式表示を優先してください。</p></section>

    <section className="article-affiliate" aria-label="JFXの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬はスワップやリスクの説明に影響しません。FXは元本および利益が保証されず、預けた証拠金を上回る損失が生じる場合があります。</p></section>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
    <p><Link href="/articles/jfx-swap-transfer-tax">JFXのスワップ振替と税金を見る →</Link></p>
    <p><Link href="/tools/jfx-fxtf-cost-comparison">JFX・FXTFの総コストを比較する →</Link></p>
  </article>;
}
