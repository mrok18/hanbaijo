import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '三菱UFJ eスマート証券のスワップカレンダーはどこ？付与日・確認方法',
  description: '三菱UFJ eスマート証券 FXのスワップポイントについて、スマホ・PCで最新値と過去実績を見る方法、夏時間・冬時間の判定時刻、水曜3日分と祝日の変則を整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">三菱UFJ eスマート証券 FX / SWAP CALENDAR</p>
      <h1>スワップカレンダーはどこ？<br />付与日数と過去実績の見方</h1>
      <p className="lede">三菱UFJ eスマート証券 FX（旧auカブコムFX）のスワップは、金額が固定された将来予測表ではありません。最新値と過去実績はFXアプリで確認し、付与日数はニューヨーククローズと各国の祝日を基準に読みます。</p>

      <div className="callout"><strong>先に結論：過去実績はログイン後のアプリで確認</strong><p>スマホ版は「通貨ペア」から「スワップポイント」→「過去分」、PC版は左上メニューの「スワップポイント」から「過去のスワップ」へ進みます。通貨ペアを選び、買い・売りの金額と付与日数を同じ行で確認します。</p></div>

      <h2>スマホで過去のスワップを確認する手順</h2>
      <ol>
        <li>三菱UFJ eスマート証券 FXアプリへログインする</li>
        <li>画面下部の「通貨ペア」を選ぶ</li>
        <li>「スワップポイント」を開く</li>
        <li>「過去分」を選ぶ</li>
        <li>確認したい通貨ペアを選ぶ</li>
      </ol>
      <p>保有建玉へ実際に積み上がった金額は「建玉」画面で確認します。市場情報の一覧と、自分の建玉へ反映された累計スワップを混同しないようにします。</p>

      <h2>PCアプリで過去実績を見る手順</h2>
      <ol>
        <li>PC版FXアプリへログインする</li>
        <li>画面左上のメニューから「スワップポイント」を選ぶ</li>
        <li>スワップポイントウィジェットの「過去のスワップ」を選ぶ</li>
        <li>通貨ペアを選び、日付ごとの実績を確認する</li>
      </ol>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>確認したい内容</th><th>確認場所</th><th>見る項目</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">最新の提示値</td><td>FXアプリのスワップポイント</td><td>通貨ペア、買い、売り</td></tr>
            <tr><td className="ex-name">過去の実績</td><td>スマホ「過去分」／PC「過去のスワップ」</td><td>日付、受払額、付与日数</td></tr>
            <tr><td className="ex-name">自分の累計額</td><td>建玉照会・建玉サマリ</td><td>未決済スワップ</td></tr>
            <tr><td className="ex-name">振替後の履歴</td><td>スマホの入出金履歴</td><td>「スワップ振替」、受渡日</td></tr>
          </tbody>
        </table>
      </div><p className="panel-note">画面名称は2026年9月12日に公式案内で確認。アプリ更新により配置や表記が変わる場合があります。</p></div>

      <h2>付与の基準は日本時間0時ではない</h2>
      <p>スワップポイントは、ニューヨーククローズをまたいで建玉を翌日へ持ち越したときに発生します。公式案内の基準時刻は、冬時間が日本時間午前6時50分、夏時間が午前5時50分です。</p>
      <div className="fx-metric-grid">
        <article><b>WINTER</b><h3>午前6時50分</h3><p>冬時間のニューヨーククローズをまたいで保有したかを確認します。</p></article>
        <article><b>SUMMER</b><h3>午前5時50分</h3><p>夏時間は冬時間より1時間早くなります。</p></article>
        <article><b>WED → THU</b><h3>原則3日分</h3><p>水曜から木曜への持越しでは、金・土・日に対応する3日分が付与されます。</p></article>
        <article><b>HOLIDAY</b><h3>変則あり</h3><p>海外祝日や年末年始は、通常と異なる日へ複数日分がまとめられる場合があります。</p></article>
      </div>

      <h2>水曜日でも必ず3日分とは限らない</h2>
      <p>通常は水曜から木曜への持越しで3日分が付与されますが、各国の祝日がある週は付与日数が変わります。曜日だけを暗記せず、取引前にアプリの該当日と付与日数を確認してください。</p>
      <p>金額が前日より大きいときも、1日あたりのスワップが急増したとは限りません。複数日分なら、表示額を付与日数で割って比較します。</p>
      <div className="formula-box">
        <code>1日相当額 ＝ カレンダーの表示額 ÷ 付与日数</code>
        <code>自分の概算額 ＝ 表示額 ×（保有数量 ÷ 表示基準数量）</code>
        <small>表示基準数量、端数処理、買い・売りの方向は取引画面で確認</small>
      </div>

      <h2>買いが必ず受取になるわけではない</h2>
      <p>スワップは2通貨の金利差などを基に日々変動し、受取額が減る、0になる、受取と支払いの方向が変わる場合があります。高金利通貨は価格変動も大きくなりやすく、為替差損がスワップ収益を上回る可能性があります。</p>
      <ul>
        <li>買いと売りの両方を確認する</li>
        <li>1日分か複数日分かを確認する</li>
        <li>表示基準数量と自分の保有数量をそろえる</li>
        <li>キャンペーン上乗せの対象期間・通貨・エントリー条件を分ける</li>
      </ul>

      <h2>スワップだけ受け取る場合はスマホで振替</h2>
      <p>建玉を決済せず、未決済スワップの全部または一部を現金残高へ振り替える機能があります。利用できるのはFXスマホアプリで、PCアプリとPC向けWeb取引画面は対象外です。</p>
      <p>振替額は原則として翌々営業日にFX口座の現金残高へ反映され、各国祝日で変わる場合があります。履歴と受渡日はスマホの「入出金履歴」で入出金区分「スワップ振替」を確認します。</p>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://kabu.com/item/fx/sys/swap_1.html" target="_blank" rel="noopener noreferrer">三菱UFJ eスマート証券「FXのスワップポイント」</a></li>
          <li><a href="https://kabu.com/item/fx/sys/swap.html" target="_blank" rel="noopener noreferrer">三菱UFJ eスマート証券「スワップポイント」</a></li>
          <li><a href="https://kabu.com/item/fx/info/202509_01.html" target="_blank" rel="noopener noreferrer">三菱UFJ eスマート証券「スワップポイント振替機能」</a></li>
          <li><a href="https://kabu.com/sp_ssl_content/fxapp_guide/MarketScreenOutline.html" target="_blank" rel="noopener noreferrer">三菱UFJ eスマート証券 FXアプリ「マーケット画面概要」</a></li>
        </ul>
        <p>確認日：2026年9月12日。スワップ金額と付与日数は変動するため、取引時は公式アプリの最新表示を優先してください。</p>
      </section>

      <p><Link href="/fx/swap-calendar-comparison">FX10社のスワップカレンダー確認先を比較する →</Link></p>
      <p><Link href="/articles/fx-swap-three-days">3日分・4日分が付く仕組みを見る →</Link></p>
      <p><Link href="/articles/fx-swap-calculation">保有数量と付与日数から計算する →</Link></p>
      <p><Link href="/fx/au-kabucom-fx">三菱UFJ eスマート証券 FXの条件一覧へ →</Link></p>
    </article>
  );
}
