import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTFの取引時間とメンテナンス｜スワップ判定は何時？',
  description: 'FXTF GXとMT4の夏時間・冬時間の取引停止、NY17時のスワップ付与、NZD関連通貨とEA利用時の注意点を整理します。',
};

export default function Page() {
  return <article><p className="page-kicker">FXTF / TRADING HOURS</p><h1>FXTFの取引時間<br />メンテナンスとスワップ判定を分ける</h1><p className="lede">夏時間と冬時間で日次の取引停止時間が1時間ずれます。スワップはNY時間17時をまたいだポジションへ付与されるため、停止直前の決済を前提にせず余裕を持って管理します。</p>

    <h2>GX・MT4の日次メンテナンス</h2><div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>期間</th><th>GX-FX</th><th>MT4</th><th>スワップ判定</th></tr></thead><tbody><tr><td className="ex-name">冬時間</td><td>火〜金 6:55〜7:05</td><td>火〜金 6:55〜7:05</td><td>日本時間7:00</td></tr><tr><td className="ex-name">夏時間</td><td>火〜金 5:55〜6:05</td><td>火〜金 5:55〜6:05</td><td>日本時間6:00</td></tr></tbody></table></div><p className="panel-note">スワップはNY時間17時をまたいで保有したポジションが対象。メンテナンス延長・臨時停止・祝日変更があります。</p></div>

    <h2>スワップは付与時点で出金可能残高にならない</h2><p>GX・MT4とも、付与されたスワップポイントは保有中の有効証拠金へ反映され、新規注文に利用できます。一方、付与時点では残高へ反映されず、振替・出金はできません。ポジション決済後に残高へ反映されます。</p><div className="callout"><strong>「水曜日に3日分」と固定しない</strong><p>受渡日、各国の休日、年末年始などで付与日数が変わります。保有予定日の公式スワップ一覧・受け渡し日数を確認します。</p></div>

    <h2>メンテナンス中にできない操作</h2><p>取引停止中は成行、指値・逆指値の発注や約定、既存注文の変更・取消を受け付けません。終了後も最初のレート更新までは取引できない場合があります。経済指標や週末前の決済をメンテナンス直前へ寄せない運用が必要です。</p>

    <h2>NZD関連7通貨ペアには追加停止時間がある</h2><p>NZD/JPY、NZD/USD、AUD/NZD、EUR/NZD、GBP/NZD、NZD/CHF、NZD/CADは、ウェリントン市場のクローズ前後にも約10分のメンテナンスがあります。ニュージーランドの夏冬時間で日本時間が変わるため、利用通貨ペアの最新時刻を公式概要で確認します。</p>

    <h2>MT4のEAは土曜の再接続を確認</h2><p>FXTFはMT4について、毎週土曜日8:00〜10:00のいずれかの時間帯に利用者サーバーと同社サーバーが一時切断されると案内しています。通常は自動再接続しますが、ログアウトとなる可能性もあるため、VPS上のEAは週末メンテナンス後に接続状態と自動売買を確認します。</p><ul><li>口座への接続表示</li><li>EAの自動売買有効状態</li><li>注文・通信エラーのログ</li><li>翌週の取引開始時刻と保有注文</li></ul>

    <section className="article-affiliate" aria-label="FXTFの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。取引時間とスワップ条件は祝日・制度変更で変わるため、注文前に公式情報を確認してください。</p></section>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.fxtrade.co.jp/gx-intro/" target="_blank" rel="noopener noreferrer">FXTF「GX-FX取引概要」</a></li><li><a href="https://www.fxtrade.co.jp/mt4-intro/" target="_blank" rel="noopener noreferrer">FXTF「MT4取引概要」</a></li><li><a href="https://www.fxtrade.co.jp/q-fx_cfd-inquiry4/" target="_blank" rel="noopener noreferrer">FXTF「口座履歴のタイムゾーン」</a></li></ul><p>取引・メンテナンス・スワップ判定時刻は2026年9月8日に確認しました。臨時変更はFXTFのお知らせを優先してください。</p></section>
    <p><Link href="/articles/fxtf-losscut-50-100">日次ロスカット判定の時刻と条件を見る →</Link></p><p><Link href="/articles/fxtf-gx-mt4-mt5-difference">GX・MT4・MT5の違いを比較する →</Link></p><p><Link href="/articles/fx-vps-auto-start-update">VPS再起動後のEA確認手順を見る →</Link></p><p><Link href="/fx/fxtf">FXTFの公式条件一覧へ →</Link></p>
  </article>;
}
