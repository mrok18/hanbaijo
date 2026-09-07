import Link from 'next/link';
import { SOURCES } from '@/lib/exchanges.mjs';

export const metadata = { title: '計測・算出方法' };

export default function Method() {
  return (
    <article>
      <p className="page-kicker">METHODOLOGY</p>
      <h1>計測・算出方法</h1>
      <p className="lede">
        比較結果だけでなく、数字がどこから来て、どの条件で計算されたかを公開します。
        現在、自動計測を公開しているのは暗号資産のBTC/JPYです。
      </p>

      <h2>数字につける3つのラベル</h2>
      <div className="method-labels">
        <div><b>実測値</b><p>公開APIなどから当サイトが取得し、時刻とともに保存した数字。</p></div>
        <div><b>公称値</b><p>事業者の公式サイトや交付書面に掲載された数字。確認日を記録します。</p></div>
        <div><b>試算値</b><p>取引金額・期間などの前提を置き、明示した式で計算した数字。</p></div>
      </div>

      <h2>現在の実測対象</h2>
      <p>各社が一般公開するAPIから、ビットコイン（BTC/JPY）の最良買気配と最良売気配を取得しています。</p>
      <div className="data-panel table-scroll">
        <table className="rates">
          <thead>
            <tr><th>サービス</th><th>形式</th><th>取得区分</th></tr>
          </thead>
          <tbody>
            {SOURCES.map((source) => (
              <tr key={source.id}>
                <td className="ex-name">{source.name}</td>
                <td><span className={`venue-tag ${source.venue}`}>{source.venue === 'dealer' ? '販売所' : '取引所'}</span></td>
                <td className="muted">公開API・実測値</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>スプレッドの計算式</h2>
      <div className="formula-box">
        <code>スプレッド = 買値（ask）− 売値（bid）</code>
        <code>スプレッド率 = スプレッド ÷ 仲値 × 100</code>
        <small>仲値 =（ask + bid）÷ 2</small>
      </div>
      <p>
        「100万円の購入で約○円」は、100万円分を買った直後に同じ価格帯で売った場合の往復スプレッドを求め、
        その半分を片道分として試算しています。売買手数料、入出金手数料、送金手数料や実際の価格変動は含みません。
      </p>

      <h2>取引コスト計算機の計算式</h2>
      <div className="formula-box">
        <code>往復コスト = スプレッド負担 + 取引手数料 + 固定費 + 保有コスト + 為替コスト</code>
        <code>保有コスト = 取引金額 × 年率 ÷ 365 × 保有日数</code>
        <code>実質コスト率 = 往復コスト ÷ 取引金額 × 100</code>
        <small>計算式バージョン: round-trip-total-v1</small>
      </div>
      <p>
        計算機の値はすべて利用者が入力した条件による「試算値」です。初期表示の入力例は特定事業者の料金ではありません。
        金利収入や税金、約定時の価格変動は含めず、負担となる非負のコストだけを合算します。
        <Link href="/tools/cost-calculator"> 取引コスト計算機を開く →</Link>
      </p>

      <h2>取得頻度と保存</h2>
      <p>
        トップページの一覧は、アクセス時に最大60秒のキャッシュを挟んで各社APIを呼び出します。
        推移グラフ用の履歴は別に30分ごとに自動収集しています。表示時刻は日本標準時（JST）です。
      </p>

      <h2>欠測と限界</h2>
      <ul>
        <li>取得に失敗したサービスは推測で埋めず、「取得できませんでした」と表示します。</li>
        <li>板が薄い場合、少量の注文で最良気配が決まり、表示スプレッドが実際の約定コストより狭く見えることがあります。</li>
        <li>販売所の提示レートは注文数量などで変わる場合があります。当サイトが取得するのは公開された基準レートです。</li>
        <li>取得元の仕様変更や通信障害により、欠測または不正確な値が生じる可能性があります。</li>
      </ul>

      <h2>掲載順と広告</h2>
      <p>
        現在の一覧はスプレッド実測値の狭い順に機械的に表示します。広告掲載の有無、報酬額、事業者との関係は、
        実測値・計算結果・この並び順に影響しません。
      </p>
    </article>
  );
}
