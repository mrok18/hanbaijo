import Link from 'next/link';

export const metadata = {
  title: 'JFXの出金はいつ反映？リアルタイム・通常出金の時間と取消条件',
  description: 'JFX MATRIX TRADERの出金時間を整理。リアルタイム出金の金額・受付時間、時間外の着金、通常出金との違い、手数料と取消条件を解説します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / WITHDRAWAL</p>
    <h1>JFXの出金はいつ反映？<br />2つの方法を比較</h1>
    <p className="lede">MATRIX TRADERにはリアルタイム出金と通常出金があります。どちらも手数料は0円ですが、すぐ着金する条件、利用できる金額、依頼後に取消できるかが異なります。</p>

    <h2>リアルタイム出金と通常出金の違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較</th><th>リアルタイム出金</th><th>通常出金</th></tr></thead><tbody>
      <tr><td className="ex-name">主な金額</td><td>1,000円以上100万円以下</td><td>100万円以上、1,000円未満の清算時など</td></tr>
      <tr><td className="ex-name">即時着金</td><td>平日9:30〜14:30</td><td>即時出金ではない</td></tr>
      <tr><td className="ex-name">手数料</td><td><strong>0円</strong></td><td><strong>0円</strong></td></tr>
      <tr><td className="ex-name">取消</td><td><strong>不可</strong></td><td>状態が「受付中」なら可能</td></tr>
      <tr><td className="ex-name">出金先</td><td>登録金融機関・日本円のみ</td><td>登録金融機関・日本円のみ</td></tr>
    </tbody></table></div></div>

    <h2>リアルタイム出金が即時になる時間</h2>
    <p>平日9時30分〜14時30分の依頼は、登録金融機関へ即時に出金されます。時間外でもMATRIX TRADER口座からの出金処理は即時ですが、銀行側への振込は翌金融機関営業日の9時30分以降に順次行われます。</p>
    <div className="fx-metric-grid">
      <article><b>WEEKDAY</b><h3>9:30〜14:30</h3><p>条件内なら即時に銀行振込</p></article>
      <article><b>OUTSIDE HOURS</b><h3>翌営業日9:30〜</h3><p>銀行側の処理が順次開始</p></article>
      <article><b>AMOUNT</b><h3>1,000円〜100万円</h3><p>100万円超は通常出金へ切替</p></article>
      <article><b>FEE</b><h3>0円</h3><p>出金手数料はJFX負担</p></article>
    </div>

    <h2>リアルタイム出金は取消できない</h2>
    <p>リアルタイム出金は銀行振込まで自動処理するため、依頼後の取消ができません。金額と登録金融機関を確定前に確認します。通常出金は、依頼状態が「受付中」でJFXの処理が完了する前なら取引画面から取消できます。</p>
    <div className="callout"><strong>出金区分の選択を確認</strong><p>JFXはiPadなどで、出金区分を変更せず確定すると通常出金になる場合があると案内しています。「リアルタイム出金」または「出金」の表示を確認してから送信してください。</p></div>

    <h2>出金依頼は原則1日1回</h2>
    <p>リアルタイム出金と通常出金を合わせ、出金依頼は原則1日1回です。土曜日・日曜日・月曜日は3日間をまとめて1日と数えます。小分けに複数回出金する前提ではなく、必要額をまとめて依頼します。</p>

    <h2>出金完了メールと着金には差が出る</h2>
    <p>通常出金では、JFX側の処理完了後に出金完了メールが送信されます。その後に金融機関間の送金時間があるため、メール到着と銀行口座への着金が同時とは限りません。土日祝日は出金処理が行われず、金融機関の営業日を待つ場合があります。</p>

    <h2>ポジション保有中は余力を残す</h2>
    <p>出金可能額が表示されても、ポジションを保有している場合は、出金によって有効証拠金とロスカットまでの余裕が減ります。出金後の有効比率を試算し、急なスプレッド拡大や必要証拠金の変更にも耐えられる資金を残します。</p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/payment/" target="_blank" rel="noopener noreferrer">JFX「入出金」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/chuui_mt/" target="_blank" rel="noopener noreferrer">JFX「お取引における注意点」</a></li>
    </ul><p>出金条件は2026年9月8日に公式ページで確認しました。受付時間や銀行側の処理は変更・臨時停止される場合があるため、依頼前に最新案内を確認してください。</p></section>

    <p><Link href="/articles/jfx-swap-transfer-tax">スワップだけを確定・出金する方法を確認する →</Link></p>
    <p><Link href="/articles/jfx-fees-total-cost">JFXの手数料と実質コストを確認する →</Link></p>
    <p><Link href="/articles/jfx-losscut-margin-shortage">出金前にJFXのロスカット基準を確認する →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
