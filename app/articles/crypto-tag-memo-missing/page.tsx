import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '暗号資産のタグ・メモを忘れた｜入金反映前に確認すること',
  description: 'XRPやATOMなどでタグ・メモを忘れた、間違えたときの確認手順と、サポートへ伝える情報を整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">CRYPTO / TAG & MEMO</p>
    <h1>暗号資産のタグ・メモを忘れたときの確認手順</h1>
    <p className="lede">タグやメモは、同じ入金アドレスを複数ユーザーで共有する通貨の振り分けに使われます。入力漏れや誤入力に気づいたら、再送金せず、まず送金記録を保存して受取側へ相談します。</p>
    <div className="callout"><strong>再送金より先にTxIDを保存する</strong><p>送金元の履歴からTxID、通貨、ネットワーク、送金日時、数量を控えます。ブロックチェーン上で成功していても、タグ・メモがないと自動反映されないことがあります。</p></div>
    <h2>タグ・メモが必要なケース</h2>
    <div className="fx-metric-grid">
      <article><b>01</b><h3>入金画面に項目がある</h3><p>受取側の入金画面に「タグ」「メモ」「メッセージ」などが表示される通貨は、アドレスとセットで入力します。</p></article>
      <article><b>02</b><h3>入力欄が空欄だった</h3><p>送金元でタグ欄を空欄にした場合は、送金の完了後に自分で追加入力できないことがあります。</p></article>
      <article><b>03</b><h3>別の番号を入力した</h3><p>他の取引所のタグや古い入金情報を入力すると、受取側で照合できず保留になる可能性があります。</p></article>
      <article><b>04</b><h3>通貨・チェーンも要確認</h3><p>タグだけでなく、通貨とネットワークが入金画面の指定と一致しているか確認します。</p></article>
    </div>
    <h2>反映前に行う順番</h2>
    <ol><li>送金元の履歴でTxIDとステータスを確認する</li><li>公式エクスプローラーで取引が成功しているか確認する</li><li>受取側の入金画面でタグ・メモの要否を再確認する</li><li>受取側サポートの回復申請や問い合わせ窓口を使う</li><li>案内があるまで同じ宛先へ再送金しない</li></ol>
    <h2>問い合わせに添える情報</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>例</th><th>注意点</th></tr></thead><tbody>
      <tr><td className="ex-name">TxID</td><td>英数字の取引ID</td><td>省略せず全文を送る</td></tr>
      <tr><td className="ex-name">通貨・ネットワーク</td><td>XRP / XRP Ledger</td><td>送金元と受取側を分けて記載</td></tr>
      <tr><td className="ex-name">タグ・メモ</td><td>未入力・誤入力の内容</td><td>正しい値を推測して書き換えない</td></tr>
      <tr><td className="ex-name">日時・数量</td><td>日本時間、送金数量</td><td>スクリーンショットと一致させる</td></tr>
    </tbody></table></div></div>
    <p><Link href="/articles/crypto-transfer-not-reflected">送金が反映されないときの全体確認を見る →</Link></p>
    <p><Link href="/articles/crypto-transfer-fee-network">送金前のネットワーク・手数料確認を見る →</Link></p>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.binance.com/ja/support/faq/detail/40b87335db904481888ef406b105442b" target="_blank" rel="noopener noreferrer">Binance Support「タグ/メモの入力忘れ・入力間違い時の復元方法」</a></li>
      <li><a href="https://www.bitpoint.co.jp/service/transfer/" target="_blank" rel="noopener noreferrer">BITPOINT「暗号資産の入出金」</a></li>
    </ul><p>回復可否、手数料、受付期間はサービスごとに異なります。必ず受取側の最新案内を確認してください。確認日：2026年9月11日。</p></section>
  </article>;
}
