import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LION FXの入金・出金｜クイック入金1万円・反映時間・名義の注意',
  description: 'ヒロセ通商LION FXのクイック入金、銀行振込、出金時間、手数料、名義相違で反映されない場合を公式情報で整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">LION FX / FUNDING</p>
    <h1>LION FXの入金・出金<br />反映時間と名義ルール</h1>
    <p className="lede">入金方法はクイック入金と銀行振込に分けて考えます。最低額、反映時間、手数料、名義の一致を整理しておくと、入金したのに取引画面へ反映されないトラブルを減らせます。</p>

    <h2>クイック入金と銀行振込</h2>
    <div className="table-scroll"><table className="rates"><thead><tr><th>方法</th><th>反映・受付</th><th>手数料と注意</th></tr></thead><tbody>
      <tr><td>クイック入金</td><td>原則リアルタイム</td><td>1万円以上。金融機関のメンテナンスで遅れる場合あり</td></tr>
      <tr><td>銀行振込</td><td>金融機関の営業時間に依存</td><td>振込名義にLION FX口座番号を入力</td></tr>
    </tbody></table></div>
    <p>クイック入金は対応金融機関の画面から最後まで操作を完了します。ブラウザを途中で閉じると即時反映されないことがあるため、完了画面まで確認してください。</p>

    <h2>名義相違は反映遅延の原因</h2>
    <p>LION FXは口座名義人以外からの入金を受け付けていません。銀行振込で口座番号を入力できなかった場合や、クイック入金が反映されない場合は、公式の入金確認依頼フォームから連絡します。組戻しや返金が必要になる場合があるため、家族名義の口座から送金しないことが基本です。</p>
    <div className="callout"><strong>取引口座への反映を確認</strong><p>銀行振込は入出金口座に着金しただけでなく、FX取引画面の証拠金へ反映されたかを確認します。反映前に発注すると、証拠金不足で注文できない場合があります。</p></div>

    <h2>出金の時間と手数料</h2>
    <p>出金は登録金融機関へ行います。平日9:30〜14:30以外に依頼した場合、LION FX側で振込予約が行われ、金融機関への反映は営業日の9:30以降になることがあります。出金手数料や最低額は金融機関・方法で異なるため、依頼画面の表示を確認します。</p>
    <div className="fx-metric-grid"><article><b>MINIMUM</b><h3>クイック入金1万円〜</h3><p>1万円未満は銀行振込</p></article><article><b>NAME</b><h3>本人名義のみ</h3><p>名義相違は反映遅延の原因</p></article><article><b>WITHDRAWAL</b><h3>営業日処理</h3><p>銀行側の時間も考慮</p></article><article><b>CHECK</b><h3>残高を再確認</h3><p>出金後の証拠金余力を残す</p></article></div>

    <h2>入出金前のチェックリスト</h2>
    <ul><li>本人名義の金融機関を使っているか</li><li>クイック入金は完了画面まで進んだか</li><li>取引口座の証拠金へ反映されたか</li><li>出金後もロスカット余力が残るか</li></ul>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://hirose-fx.co.jp/category/payment/index.html" target="_blank" rel="noopener noreferrer">ヒロセ通商「入出金 LION FX」</a></li>
      <li><a href="https://form.hirose-fx.co.jp/form/payment/form.cgi" target="_blank" rel="noopener noreferrer">ヒロセ通商「入金確認依頼フォーム」</a></li>
    </ul><p>確認日：2026年9月10日。金融機関ごとの利用可能時間・手数料は最新一覧で確認してください。</p></section>
    <p><Link href="/articles/lion-fx-trading-hours-lot">LION FXの取引時間と1,000通貨を確認する →</Link></p>
    <p><Link href="/fx/lion-fx">LION FXの取引条件一覧へ →</Link></p>
  </article>;
}
