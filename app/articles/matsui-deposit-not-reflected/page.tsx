import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/matsui-deposit-not-reflected' },
  title: '松井証券の入金が反映されないときは？方法別の確認順と履歴の見方',
  description: '松井証券に入金したのに残高へ反映されないとき、入金方法・銀行の引落履歴・松井証券の入金状況と精算表を順に確認。ネットリンクの振込中、らくらく振替、定期入金を架空例と確認メモで切り分けます。',
};

const FAQS = [
  { question: 'ネットリンク入金が振込中のままなら、もう一度入金してよいですか？', answer: '表示だけで再入金を決めず、まず銀行側で引き落としがあるか確認します。引き落とし済みでも松井証券側の反映が遅れる場合があります。引落しの有無や処理結果が不明なら、公式FAQと顧客サポートで確認してください。' },
  { question: '入金が完了したかはどこで確認できますか？', answer: '松井証券の公式案内では、総合口座への入金はお客様サイトの「ホーム→資産状況→精算表」で確認できます。方法別の入金確認画面の状態と併せて確認します。' },
  { question: '定期入金で銀行から引き落とされたのに表示されないのはなぜですか？', answer: '銀行引落しと総合口座への入金は同日ではありません。公式案内では入金状況が引落しの4営業日後、総合口座への入金が5営業日後です。土日・祝日を除いて予定日を確認し、予定を過ぎても確認できなければ公式サポートへ相談します。' },
];
const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQS.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

export default function Page() {
  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">MATSUI / DEPOSIT CHECK</p>
    <h1>松井証券の入金が反映されないときは？<br />方法別の確認順と履歴の見方</h1>
    <p className="lede">銀行のお金は減ったのに、松井証券の残高が増えていない。まずは「どの方法で入金したか」「銀行で引き落とされたか」「松井証券にどの状態で表示されているか」を分けて確認します。表示が遅れているだけの可能性もあるため、追加の入金操作を決める前に、今回の処理結果を確かめましょう。</p>
    <div className="callout"><strong>最初に確認するのは、銀行側の引落履歴</strong><p>残高の増減だけでなく、今回の金額・日時に対応する明細を確認します。引落し済み・未引落し・不明のどれかを整理し、下の表で使った方法の行へ進みます。本記事は確認先を整理するもので、個別の入金完了を判定するものではありません。</p></div>
    <p><a href="#check-order">方法別の確認表へ</a> ／ <a href="#examples">架空例を見る</a> ／ <a href="#memo">問い合わせ前の確認メモへ</a></p>

    <h2 id="check-order">入金方法 → 引落履歴 → 証券側の表示 → 公式確認先</h2>
    <p>表の順序で照合します。銀行の履歴に該当する明細がない・画面が見られない場合も、未実行とは決めつけず、結果を確認できてから次の操作を検討します。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
      <thead><tr><th>使った方法</th><th>銀行側で確認</th><th>松井証券側・終了時の確認</th><th>次の公式確認先</th></tr></thead>
      <tbody>
        <tr><td className="ex-name">ネットリンク入金</td><td>今回の金額が引落し済みか</td><td>銀行の手続き後、指定の戻るボタンで終了したか。ネットリンク入金確認の状態も照合</td><td><a href="https://support.matsui.co.jp/faq/show/1854?site_domain=faq">振込中・入金処理中のFAQ</a></td></tr>
        <tr><td className="ex-name">らくらく振替入金</td><td>登録した銀行口座の引落履歴</td><td>操作開始・完了時刻と「らくらく振替入金確認」の表示</td><td><a href="https://support.matsui.co.jp/faq/show/1860?site_domain=faq">未反映FAQのらくらく振替入金</a></td></tr>
        <tr><td className="ex-name">MATSUI Bank入金</td><td>MATSUI Bank側の明細</td><td>金額指定後に完了したか、途中でタイムアウトしていないか</td><td><a href="https://support.matsui.co.jp/faq/show/1860?site_domain=faq">未反映FAQのMATSUI Bank入金</a></td></tr>
        <tr><td className="ex-name">定期入金</td><td>引落しの実行日と金額</td><td>引落日からの営業日数、「定期入金確認」と総合口座の入金日を区別</td><td><a href="https://support.matsui.co.jp/faq/show/24482?site_domain=faq">定期入金の引落日・入金日</a></td></tr>
        <tr><td className="ex-name">銀行振込入金</td><td>振込の受付・処理結果、日時、本人名義の一致</td><td>専用振込先と精算表を照合。銀行の受付完了と証券側の反映は別</td><td><a href="https://support.matsui.co.jp/faq/show/1860?site_domain=faq">未反映FAQの銀行振込入金</a></td></tr>
      </tbody>
    </table></div></div>
    <p>発注に伴うスイープ入金は、手動で金額を指定するMATSUI Bank入金とは確認条件が異なります。設定や対象取引の範囲を<a href="https://www.matsui.co.jp/service/money/rule/">公式のスイープ入金ルール</a>で確認してください。反映を試すための注文は不要です。</p>

    <h2>「振込中」と「入金完了」を分けて読む</h2>
    <p>ネットリンク入金の「振込中」「入金処理中」は、手続きが正常に完了していない状態を示します。銀行から引き落とされている場合は、松井証券が入金データを確認してから反映することがあります。自分で表示を消したり、キャンセルしたりはできません。</p>
    <p>ネットリンク入金確認が「名義確認中」の場合は、通常の時間待ちとは確認内容が異なります。松井証券からの連絡や<a href="https://support.matsui.co.jp/faq/show/1854?site_domain=faq">状態別の公式案内</a>を確認します。状態名だけを理由に別の銀行から重ねて送金しないでください。</p>
    <p>総合口座への入金完了は、お客様サイトの<strong>「ホーム → 資産状況 → 精算表」</strong>で確認できます。入金方法ごとの確認画面と精算表は、見る目的が異なります。<a href="https://support.matsui.co.jp/faq/show/1861?site_domain=faq">公式の画面別確認方法</a>も参照してください。</p>
    <p>精算表に入金があるのに、別の商品口座の残高・余力だけが増えない場合は、「入金未反映」と「口座間の資金配分」を分けます。利用商品の口座を確かめ、<Link href="/articles/matsui-account-types">総合口座・FX口座などの役割の違い</Link>と公式案内を確認してください。</p>

    <h2 id="examples">3つの架空例で確認順を整理</h2>
    <p>以下は説明用の架空例です。実際の入金結果や反映時刻を保証するものではありません。</p>
    <h3>例1：ネットリンクで3万円が引落し済み、画面は振込中</h3>
    <p>銀行の明細に3万円の引落しがあり、終了時にブラウザを閉じたことに気づいた例です。「もう一度3万円入れる」とは判断せず、引落時刻と松井証券の状態をメモします。銀行側の操作後に指定ボタンで戻らないと即時反映できない場合があるため、公式FAQの引落し済みの分岐を確認します。</p>
    <h3>例2：らくらく振替を15:44に開始し、15:46に完了</h3>
    <p>15:45をまたいだ架空例です。公式FAQは、この場合に反映が遅れ、入金データ確認後の17:00以降に処理されることがあると説明しています。一方、15:45までに完了しても未反映なら、本人から顧客サポートへ連絡する案内です。開始時刻だけで判断しないことがポイントです。</p>
    <h3>例3：定期入金の引落し翌日、総合口座にまだ表示がない</h3>
    <p>引落しの翌日を入金予定日と誤認した例です。定期入金は状況表示が4営業日後、総合口座への入金が5営業日後なので、まず休日を含めた予定を確認します。銀行で引落しがあるという理由だけで、証券側の即時反映は期待できません。</p>

    <h2 id="memo">問い合わせ前に手元で整理する確認メモ</h2>
    <p>下の項目を手元に控えると、どこまで確認できたかを説明しやすくなります。このサイトへ情報を入力・送信する必要はありません。</p>
    <ul>
      <li>利用した入金方法、金額、操作の開始・完了日時</li>
      <li>銀行の引落し：確認済み／該当明細なし／確認できていない</li>
      <li>終了画面に出た表示、指定の戻るボタンで終了したか</li>
      <li>松井証券の状態名と、精算表の該当入金の有無</li>
      <li>確認した公式FAQと、まだ判断できていない点</li>
    </ul>
    <p>不明点が残る場合は、<a href="https://www.matsui.co.jp/support/contact/">松井証券の公式お問い合わせ窓口</a>で状況を確認してください。暗証番号・パスワード・認証コードはこのメモに記録せず、画面画像を公開の場に載せないでください。</p>
    <p><Link href="/articles/matsui-deposit-methods-comparison">これから使う入金方法を、反映時間・手数料で比較する →</Link></p>

    <section className="article-faq" aria-labelledby="faq"><h2 id="faq">入金の未反映についてのFAQ</h2>
      {FAQS.map(item => <div className="faq-item" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
    </section>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">確認した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/service/money/deposit/">松井証券「入金」</a></li>
      <li><a href="https://www.matsui.co.jp/service/money/rule/">松井証券「入出金 取引ルール」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1860?site_domain=faq">松井証券Q&amp;A「入金しましたが、まだ画面反映されていません」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1854?site_domain=faq">松井証券Q&amp;A「ネットリンク入金確認の状況欄が振込中」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1861?site_domain=faq">松井証券Q&amp;A「総合口座への入金の確認方法」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/24482?site_domain=faq">松井証券Q&amp;A「定期入金の引落日と入金日」</a></li>
    </ul><p>2026年10月31日確認。反映条件・画面名は変更される場合があります。個別の処理状況は銀行・松井証券の公式案内で確認してください。</p></section>
  </article>;
}
