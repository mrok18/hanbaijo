import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LION FXの取引時間と1,000通貨｜夏時間・冬時間・メンテナンス',
  description: 'ヒロセ通商LION FXの取引時間、1Lot＝1,000通貨、日次・週次メンテナンスと週末の注文扱いを公式情報で整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">LION FX / HOURS & LOT</p>
    <h1>LION FXの取引時間と1,000通貨<br />夏時間・冬時間を確認</h1>
    <p className="lede">LION FXは平日ほぼ24時間取引できますが、米国の夏時間で開始・終了時刻が変わります。1Lotの通貨数とメンテナンス時間を先に確認しておくと、少額取引や週末の注文で迷いません。</p>

    <h2>夏時間と冬時間の取引時間</h2>
    <div className="table-scroll"><table className="rates"><thead><tr><th>区分</th><th>取引時間（日本時間）</th><th>確認ポイント</th></tr></thead><tbody>
      <tr><td>米国標準時間</td><td>月曜7:00〜土曜6:30</td><td>土曜朝に取引終了</td></tr>
      <tr><td>米国夏時間</td><td>月曜6:30〜土曜5:30</td><td>開始・終了が1時間前倒し</td></tr>
    </tbody></table></div>
    <p>祝日や臨時休場日は別途変更される場合があります。週末をまたぐポジションは、金曜の取引終了時刻だけでなく、週次メンテナンスの告知も確認します。</p>

    <h2>1Lotは1,000通貨</h2>
    <div className="fx-metric-grid"><article><b>UNIT</b><h3>1Lot＝1,000通貨</h3><p>取引数量を円換算する基準</p></article><article><b>MINIMUM</b><h3>1,000通貨</h3><p>通貨ペアごとの例外は公式表で確認</p></article><article><b>TIME</b><h3>平日ほぼ24時間</h3><p>夏冬で時刻が変わる</p></article><article><b>MAINTENANCE</b><h3>日次＋週次</h3><p>切断・注文停止の時間帯あり</p></article></div>
    <p>必要証拠金は通貨ペア、レート、レバレッジで変わります。「1Lotだから必要資金が一定」とは限らないため、取引前に取引画面の必要証拠金を確認してください。</p>

    <h2>日次・週次メンテナンスの扱い</h2>
    <p>毎営業日の取引終了後、標準時間は日本時間6:59、夏時間は5:59を起点に日締めとメンテナンスが行われます。通常は15分程度ですが、最大30分程度かかる場合があります。金曜の取引終了後には週次メンテナンスも行われ、時間は週ごとに案内されます。</p>
    <div className="callout"><strong>注文を残したままにする前の確認</strong><p>指値・逆指値などの予約注文があっても、メンテナンス中はレート配信や発注が止まります。重要指標や週明けの窓開けをまたぐ場合は、注文の有効期限とロスカット余力を確認します。</p></div>

    <h2>取引前チェックリスト</h2>
    <ul><li>米国夏時間か標準時間か</li><li>1Lot＝1,000通貨で数量を入力したか</li><li>日次・週次メンテナンスの時間を確認したか</li><li>必要証拠金と余裕資金を分けたか</li></ul>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://hirose-fx.co.jp/category/hirose/lionfx/lfx/" target="_blank" rel="noopener noreferrer">ヒロセ通商「取引要綱（LION FX）」</a></li>
      <li><a href="https://faq.hirose-fx.co.jp/faq/detail?id=2890&site=CR4AKC1J" target="_blank" rel="noopener noreferrer">ヒロセ通商FAQ「1Lotあたりの通貨数量」</a></li>
    </ul><p>確認日：2026年9月10日。取引時間・休場日は更新されるため、注文前に最新のお知らせを確認してください。</p></section>
    <p><Link href="/articles/lion-fx-deposit-withdrawal">LION FXの入出金条件を確認する →</Link></p>
    <p><Link href="/articles/lion-fx-losscut-margin">LION FXのロスカットと不足金を確認する →</Link></p>
    <p><Link href="/fx/lion-fx">LION FXの取引条件一覧へ →</Link></p>
  </article>;
}
