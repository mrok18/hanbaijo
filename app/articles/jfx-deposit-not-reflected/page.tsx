import Link from 'next/link';

export const metadata = {
  title: 'JFXの入金が反映されない原因｜クイック入金・銀行振込の確認手順',
  description: 'JFXのクイック入金や銀行振込がMATRIX TRADERへ反映されない場合に、銀行引落し、終了操作、口座番号、名義、時間帯を順番に確認します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / DEPOSIT TROUBLE</p>
    <h1>JFXの入金が反映されない原因<br />確認する順番を整理</h1>
    <p className="lede">クイック入金は原則即時、銀行振込は着金確認後の反映です。反映されないときは同じ操作を繰り返す前に、銀行口座から引き落とされたか、金融機関の終了ボタンを押したか、振込名義にJFX口座番号を入れたかを確認します。</p>

    <h2>最初に入金方法を確認</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>入金方法</th><th>通常の反映</th><th>主な確認点</th></tr></thead><tbody>
      <tr><td className="ex-name">クイック入金</td><td>即時</td><td>引落し、完了画面、通信、メンテナンス</td></tr>
      <tr><td className="ex-name">銀行振込</td><td>着金確認後。目安約1時間</td><td>振込時間、名義、3から始まる7桁の口座番号</td></tr>
    </tbody></table></div></div>
    <p>銀行振込は原則として平日9時〜15時の処理で、14時以降は金融機関の処理状況により翌営業日扱いになる場合があります。</p>

    <h2>クイック入金：銀行から引き落とされている場合</h2>
    <p>金融機関ページの最後にある指定の終了ボタンを押さず、画面右上の「×」で閉じると、銀行側で引き落とされてもMATRIX TRADERへ即時反映されない場合があります。通信の瞬断でも同様の事象が起こる可能性があります。</p>
    <ol>
      <li>銀行口座の取引履歴で引落しを確認</li>
      <li>MATRIX TRADERの預託証拠金を再確認</li>
      <li>楽天銀行・PayPay銀行・住信SBIネット銀行・三菱UFJ銀行は10〜30分待つ</li>
      <li>30分以上反映されない場合はJFXへ照会</li>
    </ol>
    <div className="callout"><strong>引き落とされている状態で再入金しない</strong><p>二重入金を避けるため、同じ金額をもう一度送る前に履歴と反映状況を確認します。上記以外の金融機関で引落し済み・未反映の場合は、JFXが状況確認を案内しています。</p></div>

    <h2>クイック入金：引き落とされていない場合</h2>
    <p>銀行口座から引き落とされていなければ、手続きは完了していません。JFXのFAQでは、開いているブラウザをすべて閉じてから再度手続きするよう案内しています。画面自体が開かない場合は、ブラウザのポップアップ制限も確認します。</p>

    <h2>銀行振込：口座番号がないと保留になる</h2>
    <p>銀行振込では、振込名義人欄の氏名前後に「3から始まる7桁」のJFX口座番号を入力します。口座番号がないと振込先口座を特定できず、入金が保留されます。入力できなかった場合は、電話または入金確認フォームから連絡が必要です。</p>
    <div className="formula-box"><code>振込名義の例：本人氏名 ＋ 3から始まる7桁の口座番号</code><small>正確な入力方法と自分の口座番号は取引画面・公式案内で確認してください。</small></div>

    <h2>本人以外の名義では入金しない</h2>
    <p>入金元はJFX口座の本人名義である必要があります。本人名義であれば、口座開設時に登録した出金先銀行以外からも入金できます。一方、家族名義、法人名、屋号付きなど登録名義と異なる入金は受け付けられず、諸経費を差し引いて返金される場合があります。</p>

    <h2>メンテナンス時間も確認</h2>
    <p>JFXは入出金を利用できない日締めメンテナンス時間を案内しています。冬時間は平日6:45〜7:10、夏時間は5:45〜6:10です。金融機関側のメンテナンスや毎月第2火曜日の停止時間にも注意します。</p>

    <h2>問い合わせ前に控える情報</h2>
    <ul>
      <li>入金方法と利用金融機関</li>
      <li>入金日時・金額</li>
      <li>銀行側の引落し状況</li>
      <li>JFX口座番号を振込名義に入力したか</li>
      <li>表示されたエラー文と操作を終了した画面</li>
    </ul>
    <p>JFX公式FAQでは、入金未反映の問い合わせ先としてフリーダイヤル0120-219-472（平日8時〜20時）と専用フォームを案内しています。連絡先・受付時間は変更される場合があるため、公式ページで再確認してください。</p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=18&amp;id=67&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「クイック入金後に即時反映されない」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=15&amp;id=46&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「入金の反映時間」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=18&amp;id=60&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「銀行振込が反映されない」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=16&amp;id=48&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「クイック入金と銀行振込の違い」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/nyukin/" target="_blank" rel="noopener noreferrer">JFX「入出金に関する注意点」</a></li>
    </ul><p>入金条件・問い合わせ情報は2026年9月8日に公式ページで確認しました。対応銀行、時間、操作方法は変更される場合があります。</p></section>

    <p><Link href="/articles/jfx-account-opening-flow">口座開設から初回入金までを見る →</Link></p>
    <p><Link href="/articles/jfx-deposit-methods-comparison">クイック入金と銀行振込の条件を比較する →</Link></p>
    <p><Link href="/articles/jfx-fees-total-cost">JFXの入出金手数料と実質コストを見る →</Link></p>
    <p><Link href="/articles/jfx-trading-hours-maintenance">取引・メンテナンス時間を見る →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
