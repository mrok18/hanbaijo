import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '暗号資産を送金したのに反映されない｜確認順と問い合わせ準備',
  description: '暗号資産の送金・入金が反映されないときに、TxID、承認数、ネットワーク、タグ・メモ、最低入金額を確認する順番を整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">CRYPTO / TRANSFER TROUBLESHOOTING</p>
    <h1>暗号資産を送金したのに<br />反映されないときの確認順</h1>
    <p className="lede">送金手続きが完了していても、ブロックチェーンの承認、受取側の反映処理、送金先情報の確認が終わるまで残高に表示されない場合があります。まず取引の状態を分け、同じ送金を繰り返さないことが重要です。</p>
    <div className="callout"><strong>最初にTxIDと送金先ネットワークを確認する</strong><p>送金元の履歴からTxIDを取得し、通貨・ネットワーク・宛先アドレスが受取側の入金条件と一致しているか照合します。</p></div>
    <h2>反映されない理由を4段階で分ける</h2>
    <div className="fx-metric-grid">
      <article><b>01</b><h3>送金元で未処理</h3><p>出金申請、本人確認、審査、メンテナンスなどで、まだネットワークへ送信されていない状態です。</p></article>
      <article><b>02</b><h3>承認待ち</h3><p>TxIDが存在しても、必要なブロック承認数に達するまで受取側が反映しない場合があります。</p></article>
      <article><b>03</b><h3>受取側の確認待ち</h3><p>ネットワーク上で成功していても、受取側の入金処理・送付元情報の確認が完了するまで保留されることがあります。</p></article>
      <article><b>04</b><h3>情報不一致</h3><p>通貨、ネットワーク、アドレス、タグ・メモ、最低入金額のいずれかが条件と異なるケースです。</p></article>
    </div>
    <h2>確認する順番</h2>
    <ol><li>送金元の履歴でステータスを確認する</li><li>TxIDをブロックチェーンの公式エクスプローラーで検索する</li><li>通貨、ネットワーク、宛先アドレス、数量を受取側と照合する</li><li>必要承認数、最低入金額、メンテナンス案内を確認する</li><li>タグ・メモが必要な通貨で入力漏れや誤入力がないか確認する</li></ol>
    <h2>問い合わせ前にそろえる情報</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>情報</th><th>確認場所</th><th>伝える理由</th></tr></thead><tbody>
      <tr><td className="ex-name">TxID</td><td>送金元の出金履歴</td><td>ネットワーク上の取引を特定する</td></tr>
      <tr><td className="ex-name">通貨・ネットワーク</td><td>送金元と受取側の入金画面</td><td>対応チェーンの不一致を切り分ける</td></tr>
      <tr><td className="ex-name">宛先・数量</td><td>履歴と入金アドレス</td><td>別アドレス・最低額不足を確認する</td></tr>
      <tr><td className="ex-name">日時・画面表示</td><td>履歴、通知、エラー画面</td><td>受付・承認・反映の時点を分ける</td></tr>
    </tbody></table></div></div>
    <div className="callout"><strong>反映前に再送金しない</strong><p>承認待ちや受取側の処理待ちの場合、同じ宛先へ再送すると状況が複雑になります。まずサポートの案内を確認してください。</p></div>
    <p><Link href="/articles/crypto-transfer-fee-network">送金手数料とネットワークの選び方を見る →</Link></p>
    <p><Link href="/articles/bitbank-deposit-withdrawal">bitbankの入出金・送金条件を見る →</Link></p>
    <p><Link href="/crypto">暗号資産のスプレッド実測を見る →</Link></p>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.bitpoint.co.jp/service/transfer/" target="_blank" rel="noopener noreferrer">BITPOINT「暗号資産の入出金」</a></li>
      <li><a href="https://support.bitpoint.co.jp/hc/ja/articles/4930841178910-%E6%9A%97%E5%8F%B7%E8%B3%87%E7%94%A3%E3%82%92%E9%80%81%E9%87%91%E3%81%97%E3%81%9F%E3%81%AE%E3%81%AB%E5%8F%A3%E5%BA%A7%E3%81%AB%E5%8F%8D%E6%98%A0%E3%81%95%E3%82%8C%E3%81%AA%E3%81%84" target="_blank" rel="noopener noreferrer">BITPOINT「送金したのに口座に反映されない」</a></li>
      <li><a href="https://www.binance.com/ja/support/faq/detail/a6f58adc6f5640f8af08aa70a55760f7" target="_blank" rel="noopener noreferrer">Binance Support「取引ステータスを確認する方法」</a></li>
    </ul><p>反映時間・承認数・回復手続きはサービスとネットワークで異なります。公式案内を優先してください。確認日：2026年9月11日。</p></section>
  </article>;
}
