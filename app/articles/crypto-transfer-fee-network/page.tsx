import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '暗号資産の送金手数料とネットワーク｜確認項目を整理',
  description: '暗号資産を取引所やウォレットへ送る前に、事業者の出金手数料とネットワーク手数料、対応ネットワーク、反映条件を分けて確認します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">CRYPTO / TRANSFER COST</p>
    <h1>暗号資産の送金手数料<br />ネットワーク選びと確認項目</h1>
    <p className="lede">暗号資産の送金では、取引所が設定する出金手数料と、ブロックチェーンのネットワーク手数料を分けて確認します。安い表示だけで決めず、送金先が対応するネットワークと最低送金額までそろえて判断します。</p>

    <div className="callout"><strong>送金前に「通貨」と「ネットワーク」を一致させる</strong><p>同じ銘柄名でも複数のネットワークに対応する場合があります。送金元と送金先の対応ネットワークが一致しないと、資産を失うおそれがあるため、少額テストとアドレス確認を先に行います。</p></div>

    <h2>手数料は2層に分けて見る</h2>
    <div className="fx-metric-grid">
      <article><b>01</b><h3>事業者の出金手数料</h3><p>取引所やサービスが、出金1回ごとに設定する固定額・変動額です。通貨や出金方法で条件が変わります。</p></article>
      <article><b>02</b><h3>ネットワーク手数料</h3><p>ブロックチェーン上で取引を承認するための費用です。混雑やネットワークの仕様で変動します。</p></article>
      <article><b>03</b><h3>最低送金額</h3><p>手数料とは別に、送金できる最小数量が定められる場合があります。受取側の入金下限も確認します。</p></article>
      <article><b>04</b><h3>反映・承認条件</h3><p>送金処理の受付、ブロックチェーンの承認、受取側の入金反映はそれぞれ別の時刻です。</p></article>
    </div>

    <h2>送金前の確認順</h2>
    <ol>
      <li>送る通貨と、送金元・送金先が対応するネットワークを確認する</li>
      <li>出金手数料、最低送金額、メモ・タグの入力条件を確認する</li>
      <li>受取アドレスをコピーし、先頭・末尾とネットワーク名を照合する</li>
      <li>少額テストを行い、受取側で反映を確認してから本送金する</li>
      <li>受付時刻、TxID、手数料、反映時刻を取引履歴と一緒に保存する</li>
    </ol>

    <h2>比較するときの式</h2>
    <div className="formula-box"><code>受取数量 ＝ 送金数量 − 事業者の出金手数料 − ネットワーク関連の控除</code><small>実際の控除方法・表示単位はサービスごとに異なるため、確定画面の数量を優先します。</small></div>
    <p>送金額が大きくても、固定額の手数料が比例して下がるとは限りません。複数サービスを比べる場合は、送金数量、ネットワーク、出金方法、受取側の最低額を同じ条件にします。</p>

    <div className="callout"><strong>送金は取り消せないことがある</strong><p>ブロックチェーンへ送信した後は、銀行振込のように送信者だけで取り消せない場合があります。アドレス・ネットワーク・メモの確認を完了してから確定してください。</p></div>

    <p><Link href="/crypto">暗号資産の販売所・取引所スプレッド実測を見る →</Link></p>
    <p><Link href="/tools/cost-calculator">取引コストを円換算する →</Link></p>
    <p><Link href="/articles/bitbank-deposit-withdrawal">bitbankの入出金と送金条件を見る →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://faq.coincheck.com/answer/684fd8d5820caba70762b979/" target="_blank" rel="noopener noreferrer">Coincheck FAQ「送金手数料はいくらですか？」</a></li>
      <li><a href="https://www.sbivc.co.jp/columns/content/glj228ncup" target="_blank" rel="noopener noreferrer">SBI VCトレード「ネットワーク手数料とは？」</a></li>
      <li><a href="https://support.bitbank.cc/hc/ja/articles/360037119093?f=a" target="_blank" rel="noopener noreferrer">bitbank Support「暗号資産を出金したい」</a></li>
    </ul><p>送金条件・手数料は各社とネットワークで変わるため、確定画面と公式案内を確認してください。確認日：2026年9月11日。</p></section>
  </article>;
}
