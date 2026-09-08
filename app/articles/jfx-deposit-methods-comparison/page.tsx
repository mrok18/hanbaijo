import Link from 'next/link';

export const metadata = {
  title: 'JFXの入金方法を比較｜クイック入金と銀行振込の違い',
  description: 'JFX MATRIX TRADERのクイック入金と銀行振込を、最低金額、手数料、反映時間、対応銀行、振込名義の注意点で比較します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / DEPOSIT METHODS</p>
    <h1>JFXの入金方法を比較<br />クイック入金と銀行振込</h1>
    <p className="lede">JFX MATRIX TRADERへの入金は、クイック入金と銀行振込を使い分けます。すぐ取引したいならクイック入金が基本ですが、1万円未満の追加や対象外の銀行から送る場合は銀行振込を選びます。</p>

    <h2>2つの入金方法</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>方法</th><th>最低金額</th><th>反映</th><th>手数料</th><th>利用条件</th></tr></thead><tbody>
      <tr><td className="ex-name">クイック入金</td><td>1万円</td><td>原則即時</td><td>原則無料</td><td>対応銀行のネットバンキング</td></tr>
      <tr><td className="ex-name">銀行振込</td><td>1万円未満にも対応</td><td>JFXの着金確認後</td><td>利用者負担</td><td>本人名義・口座番号を併記</td></tr>
    </tbody></table></div></div>

    <h2>クイック入金は約380行に対応</h2>
    <p>クイック入金は、対応金融機関のインターネットバンキングを使い、MATRIX TRADERから手続きします。JFXの現行案内では約380行に対応し、1回1万円以上、原則24時間利用可能、入金額は原則即時に反映されます。</p>
    <p>掲載されている主な金融機関には、楽天銀行、住信SBIネット銀行、セブン銀行、イオン銀行、三井住友銀行、三菱UFJ銀行、PayPay銀行、ローソン銀行、ゆうちょ銀行、みずほ銀行、GMOあおぞらネット銀行、りそな銀行があります。実際の利用可否はJFXの選択画面と銀行側の案内を優先します。</p>
    <div className="callout"><strong>銀行口座側の契約が必要です</strong><p>対応銀行の口座を持っているだけではなく、インターネットバンキングを利用できる状態にします。三井住友銀行では契約内容によって手数料がかかる場合があるとJFXが案内しています。</p></div>

    <h2>「原則24時間」でも使えない時間がある</h2>
    <p>JFXの日締めメンテナンスは、冬時間が平日6時45分〜7時10分、米国夏時間が平日5時45分〜6時10分です。土曜日のメンテナンス、毎月第2火曜日2時〜6時、各銀行のメンテナンス中も利用できない場合があります。</p>
    <p>毎月第2火曜日の停止時間でも一部銀行は利用可能と案内されていますが、対象や銀行側の稼働状況は変わる可能性があります。入金をロスカット回避の前提にせず、余力は早めに確保します。</p>

    <h2>手続きは取引画面へ戻るまで終える</h2>
    <ol>
      <li>MATRIX TRADERの入出金メニューからクイック入金を選ぶ</li>
      <li>1万円以上の金額と金融機関を指定する</li>
      <li>銀行の画面で認証・振込処理を行う</li>
      <li>銀行側の指定された終了ボタンを押す</li>
      <li>MATRIX TRADERへ戻り、入金反映を確認する</li>
    </ol>
    <p>銀行画面を「×」で閉じたり、通信が途中で切れたりすると、銀行から引き落とされてもJFXへ即時反映されない場合があります。</p>
    <p><Link href="/articles/jfx-deposit-not-reflected">クイック入金が反映されない場合の確認手順を見る →</Link></p>

    <h2>1万円未満なら銀行振込</h2>
    <p>1万円未満を追加したい場合やクイック入金を利用できない場合は、銀行振込を使います。振込手数料は利用者負担で、JFXが着金を確認してから取引口座へ反映されます。</p>
    <p>振込名義人欄には、本人氏名に続けて「3から始まる7桁」のJFX口座番号を入力します。口座番号がないと本人を特定できず、反映が保留になる場合があります。</p>
    <div className="formula-box"><code>振込名義 ＝ 本人氏名 ＋ 3から始まる7桁のJFX口座番号</code><small>自分の口座番号と最新の振込先は、必ずMATRIX TRADERまたはJFX公式ページで確認してください。</small></div>

    <h2>銀行振込は当日反映にならない場合がある</h2>
    <p>JFX公式ページでは、銀行振込の入金確認は原則平日9時〜15時と案内されています。14時以降の振込は、金融機関同士の処理によって翌営業日扱いになる場合があります。同じ銀行間では確認時間が異なる案内もあるため、急ぎなら着金確認前提で送らないようにします。</p>

    <h2>本人以外の名義から入金しない</h2>
    <p>クイック入金・銀行振込とも、MATRIX TRADER口座と同一名義の銀行口座を使います。家族名義や異なる法人名義から入金すると組戻しとなり、振込手数料などを差し引いて返金される場合があります。</p>

    <h2>目的別の選び方</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>目的</th><th>選ぶ方法</th><th>確認点</th></tr></thead><tbody>
      <tr><td className="ex-name">初回の1万円以上をすぐ反映</td><td>クイック入金</td><td>対応銀行・ネットバンキング</td></tr>
      <tr><td className="ex-name">1万円未満を追加</td><td>銀行振込</td><td>振込手数料・口座番号</td></tr>
      <tr><td className="ex-name">対象外銀行から入金</td><td>銀行振込</td><td>反映時間・本人名義</td></tr>
      <tr><td className="ex-name">メンテナンス直前</td><td>取引を急がない</td><td>反映遅延を前提に余力確保</td></tr>
    </tbody></table></div></div>

    <div className="callout"><strong>最低入金額と必要資金は別です</strong><p>初回入金とクイック入金は1万円以上ですが、1万円で安全に取引できることを意味しません。必要証拠金、損切りまでの評価損、スプレッド、相場急変時の余裕を分けて計算します。</p></div>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/payment/" target="_blank" rel="noopener noreferrer">JFX「入出金」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/nyukin/" target="_blank" rel="noopener noreferrer">JFX「入出金に関する注意点」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=16&amp;id=49&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「クイック入金の対応金融機関」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=15&amp;id=43&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「1回の入金額」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=15&amp;id=40&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「入金手数料」</a></li>
    </ul><p>入金条件は2026年9月8日に公式ページで確認しました。対応金融機関、利用時間、手数料は変更される場合があります。</p></section>

    <p><Link href="/articles/jfx-account-opening-flow">口座開設から初回入金までを見る →</Link></p>
    <p><Link href="/articles/jfx-required-margin-leverage">必要証拠金と実効レバレッジを計算する →</Link></p>
    <p><Link href="/articles/jfx-fees-total-cost">JFXの無料手数料と実質コストを見る →</Link></p>
    <p><Link href="/articles/jfx-lot-trade-unit">JFXの1Lotと必要資金を見る →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
