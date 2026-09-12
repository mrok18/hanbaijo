import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/jfx-trading-hours-maintenance' },
  title: 'JFXの取引時間｜夏時間・冬時間・メンテナンスと土日の注文',
  description: 'JFX MATRIX TRADERの月曜開始・土曜終了、米国夏時間と冬時間、日締めメンテナンス、土日の注文受付、祝日の注意点を整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / TRADING HOURS</p>
    <h1>JFXの取引時間<br />夏時間・冬時間・土日の注文を整理</h1>
    <p className="lede">JFXは平日ほぼ24時間取引できますが、米国の夏時間・冬時間で月曜開始と土曜終了が1時間変わります。さらに毎営業日の日締めで通信が切断されるため、「市場が開いている時間」と「実際に操作できる時間」を分けて確認します。</p>

    <h2>MATRIX TRADERの取引時間</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>取引開始</th><th>取引終了</th><th>日締め開始</th></tr></thead><tbody>
      <tr><td className="ex-name">米国夏時間</td><td>月曜 6:30</td><td>土曜 5:30</td><td>毎営業日 5:59</td></tr>
      <tr><td className="ex-name">米国冬時間</td><td>月曜 7:00</td><td>土曜 6:30</td><td>毎営業日 6:59</td></tr>
    </tbody></table></div></div>
    <p>すべて日本時間です。年末年始などインターバンク市場が休日の場合や、臨時・週末メンテナンス時は変更されることがあります。</p>

    <h2>日締めでは通信が切断される</h2>
    <p>日締め作業は通常15分程度、最大30分程度と案内されています。この時間はログインできず、接続中の取引画面も通信が切断されるため、作業終了後に再ログインが必要です。</p>
    <div className="callout"><strong>早朝は時間とコストの両方を確認</strong><p>日締め付近は操作できない時間があるだけでなく、通貨ペアによって広告表示のスプレッド適用時間外になる場合があります。早朝取引では最新レートと提示スプレッドを発注直前に確認します。</p></div>

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

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=33&amp;id=182&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「取引可能時間」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=33&amp;id=180&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「注文できない時間帯」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=33&amp;id=437&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「夏時間・冬時間の始まり」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=37&amp;id=237&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「時間指定指値・逆指値注文」</a></li>
    </ul><p>取引時間は2026年9月8日に公式ページで確認しました。祝日・臨時メンテナンス時は最新のお知らせを優先してください。</p></section>

    <p><Link href="/articles/jfx-scalping-spread-cost">JFXの時間帯別スプレッドを見る →</Link></p>
    <p><Link href="/articles/jfx-order-slippage-rules">注文方法とスリッページを確認する →</Link></p>
    <p><Link href="/articles/jfx-swap-transfer-tax">日締め・スワップ振替と税金を見る →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
