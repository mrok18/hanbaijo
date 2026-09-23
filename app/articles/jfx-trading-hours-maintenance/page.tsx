import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/jfx-trading-hours-maintenance' },
  title: 'JFX取引時間は何時？夏時間・冬時間とメンテナンス',
  description: 'JFXの取引時間を夏時間・冬時間の開始・終了時刻から確認。日締めメンテナンス、土日の予約注文、注文可否、祝日変更も公式情報で整理します。',
};

const faq = [
  { q: 'JFXの取引時間は何時ですか？', a: '米国夏時間は日本時間の月曜6:30から土曜5:30まで、米国冬時間は月曜7:00から土曜6:30までです。年末年始などの市場休日とメンテナンス時間は除きます。' },
  { q: 'JFXのメンテナンス時間はいつですか？', a: 'ロールオーバー時の日締め作業は、標準時間の午前6:59、夏時間の午前5:59に始まり、通常15分程度、最大30分程度かかります。土曜の週末メンテナンスは公式のお知らせで確認します。' },
  { q: '土日でもJFXの注文はできますか？', a: 'メンテナンス時間を除き注文受付は可能ですが、市場休場中は成行・ストリーミング注文を発注できません。予約注文の受付と約定可能な取引時間を分けて確認してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">JFX / TRADING HOURS</p>
    <h1>JFX取引時間は何時？<br />夏時間・冬時間のメンテナンスと注文可否</h1>
    <p className="lede">JFXは米国夏時間なら月曜6:30〜土曜5:30、冬時間なら月曜7:00〜土曜6:30（日本時間）が取引時間です。日締めメンテナンス中は通信が切断されるため、取引できる時間と注文受付の時間を分けて確認します。</p>

    <div className="callout"><strong>JFX 取引時間の結論</strong><p>成行・ストリーミング注文は市場の取引時間内に限られます。メンテナンス時間を除き、指値などの予約注文は土日も受け付けますが、週末に約定するわけではありません。夏時間・冬時間の切替日や臨時メンテナンスは公式のお知らせを優先してください。</p></div>

    <h2>MATRIX TRADERの取引時間とメンテナンス時間</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>取引開始</th><th>取引終了</th><th>日締め開始</th></tr></thead><tbody>
      <tr><td className="ex-name">米国夏時間</td><td>月曜 6:30</td><td>土曜 5:30</td><td>毎営業日 5:59</td></tr>
      <tr><td className="ex-name">米国冬時間</td><td>月曜 7:00</td><td>土曜 6:30</td><td>毎営業日 6:59</td></tr>
    </tbody></table></div></div>
    <p>すべて日本時間です。年末年始などインターバンク市場が休日の場合や、臨時・週末メンテナンス時は変更されることがあります。</p>

    <h2>日締めでは通信が切断される</h2>
    <p>日締め作業は通常15分程度、最大30分程度と案内されています。この時間はログインできず、接続中の取引画面も通信が切断されるため、作業終了後に再ログインが必要です。</p>
    <div className="callout"><strong>早朝は時間とコストの両方を確認</strong><p>日締め付近は操作できない時間があるだけでなく、通貨ペアによって広告表示のスプレッド適用時間外になる場合があります。早朝取引では最新レートと提示スプレッドを発注直前に確認します。</p></div>

    <h2>ロールオーバーとスワップの反映</h2>
    <p>ロールオーバーは日々の取引日を切り替える処理で、JFXではロールオーバー後に未実現スワップが表示されます。ポジションを決済した時点で口座資産へ反映されるため、スワップを受け取れるかだけでなく、売買方向と付与日数を公式一覧で確認します。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>確認する場面</th><th>起きること</th><th>発注前の確認</th></tr></thead><tbody>
      <tr><td className="ex-name">ロールオーバー時</td><td>日締めメンテナンスで通信が切断される</td><td>停止時刻を避け、必要なら再ログインする</td></tr>
      <tr><td className="ex-name">翌営業日のスワップ</td><td>未実現スワップとして表示される</td><td>通貨ペア・売買方向・付与日数を一覧で確認</td></tr>
      <tr><td className="ex-name">決済・スワップ振替</td><td>確定した損益が口座資産へ反映される</td><td>受渡日と税務上の扱いを確認</td></tr>
    </tbody></table></div></div>
    <p>具体例として、1万通貨を保有し、仮に1日あたり支払いスワップを30円と置くと、3日分では90円です。これは説明用の仮定であり、JFXが提示する金額ではありません。実際の金額は公式スワップ一覧と付与日数を使って再計算します。</p>

    <h2>土日は取引不可、予約注文は受付可能</h2>
    <p>外国為替市場が休場する土日は、成行・ストリーミング注文を発注できません。一方、JFXの取引ルールでは、メンテナンス時間を除き土日も注文を受け付けるとされています。これは指値等の予約注文を登録できるという意味で、土日にその場で約定できるという意味ではありません。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>時間帯</th><th>成行・ストリーミング</th><th>指値等の予約</th></tr></thead><tbody>
      <tr><td className="ex-name">平日の取引時間内</td><td>発注可能</td><td>発注可能</td></tr>
      <tr><td className="ex-name">日締めメンテナンス中</td><td>不可</td><td>不可</td></tr>
      <tr><td className="ex-name">週末の市場休場中</td><td>不可</td><td>メンテナンス時間を除き受付可能</td></tr>
    </tbody></table></div></div>

    <h2>夏時間・冬時間の切替時期</h2>
    <p>JFXのFAQでは、米国夏時間は3月第2日曜日から、米国標準時間は11月第1日曜日からと案内されています。切替前後はJFXニュースや取引画面のお知らせで正式な時間を確認します。</p>
    <p>日本の祝日は原則として通常取引が可能ですが、クリスマスは短縮取引になる場合があり、元日は取引できません。海外市場の休日や流動性低下により、レート配信・スプレッド・約定にも影響が出る可能性があります。</p>

    <h2>祝日・臨時メンテナンスを確認する順番</h2>
    <ol>
      <li>取引前にJFXの取引ルールで通常の夏時間・冬時間を確認する</li>
      <li>祝日や年末年始は公式のお知らせと取引画面の告知を確認する</li>
      <li>注文を置く前に、成行が受付可能か、予約注文だけ可能かを確認する</li>
      <li>保有をまたぐ場合はスワップカレンダーとメンテナンス延長の有無を確認する</li>
    </ol>
    <p>公式の予定と実際のレート配信が異なる場合は、取引画面の表示を優先します。臨時変更を理由に予約注文が自動で有利な価格へ補正されるわけではありません。</p>

    <h2>週明けの注文で注意すること</h2>
    <p>週末に相場材料が発生すると、月曜の開始レートが金曜終値から離れることがあります。逆指値は指定レートでの約定を保証する注文ではないため、開始レート次第では想定より不利な価格で約定する可能性があります。</p>
    <ul>
      <li>金曜終了前に保有数量と注文を確認する</li>
      <li>週末イベントと月曜の開始時刻を確認する</li>
      <li>必要証拠金ぎりぎりまで建てない</li>
      <li>逆指値の指定価格と想定最大損失を同一視しない</li>
    </ul>

    <h2>時間指定注文は期限後の動作を確認</h2>
    <p>JFXの時間指定指値・時間指定逆指値は、指定時間までに指定レートへ達しなかった場合、注文が単に取消されるのではなく成行注文として発注されます。通常の指値・逆指値に有効期限を設定した場合は、期限までに到達しなければ取消しとなるため、同じ「時間指定」と考えないようにします。</p>

    <h2>JFXの取引時間・メンテナンスFAQ</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
      <li><a href="https://www.jfx.co.jp/newslist/maintenancelist/" target="_blank" rel="noopener noreferrer">JFX「メンテナンス情報」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=33&amp;id=182&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「取引可能時間」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=33&amp;id=180&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「注文できない時間帯」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=33&amp;id=437&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「夏時間・冬時間の始まり」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=37&amp;id=237&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「時間指定指値・逆指値注文」</a></li>
    </ul><p>取引時間・メンテナンス条件は2026年9月24日に公式ページとFAQで確認しました。祝日・臨時メンテナンス時は最新のお知らせを優先してください。</p></section>

    <p><Link href="/articles/jfx-scalping-spread-cost">JFXの時間帯別スプレッドを見る →</Link></p>
    <p><Link href="/articles/jfx-swap-calendar">JFXのスワップ付与日と3倍デーを見る →</Link></p>
    <p><Link href="/articles/jfx-swap-transfer-tax">JFXのスワップ振替と税金を見る →</Link></p>
    <p><Link href="/articles/fx-fee-spread-total-cost-comparison">FX手数料とスプレッドの実質コスト比較を見る →</Link></p>
    <p><Link href="/articles/jfx-order-slippage-rules">注文方法とスリッページを確認する →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
