import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/futures-margin' },
  title: '日経225 証拠金はいくら？必要証拠金の目安と変動理由',
  description: '日経225先物の証拠金はいくらかを確認する方法を解説。公式の掲載例、VaR方式、証券会社ごとの上乗せ、取引金額との違いを整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FUTURES MARGIN</p>
      <h1>日経225 証拠金はいくら？<br />必要額の目安と確認方法</h1>
      <p className="lede">
        日経225先物の証拠金はいくらかという問いに、全社共通の固定額はありません。VaR方式で求める取引所の所要額を基に証券会社が設定するため、
        商品、建玉の組合せ、相場環境、確認日によって変わります。
      </p>

      <div className="callout">
        <strong>結論：最新の必要証拠金は、取引直前に証券会社の画面で確認</strong>
        <p>日経225先物・mini・マイクロの区分、買建・売建、枚数を入力したシミュレーターまたは注文画面の表示を確認してください。固定額だけを転記すると、VaR更新後に不足するおそれがあります。</p>
      </div>

      <h2>日経225 証拠金はいくら？公式の例と現在額の見方</h2>
      <p>
        日本取引所グループ（JPX）が示す<strong>公式の掲載例</strong>では、日経225先物の価格30,000円・取引単位1,000倍のとき、
        取引金額は3,000万円、証拠金は売り160万円・買い170万円です。これは制度を理解するための例であり、現在の必要額ではありません。
        実際の1枚あたりVaR証拠金額はJSCCの銘柄別データで確認し、注文時は証券会社の上乗せ後の金額を優先します。
      </p>
      <div className="data-panel">
        <div className="table-scroll">
          <table className="rates comparison-table">
            <thead><tr><th>確認項目</th><th>数字・見方</th><th>注意点</th></tr></thead>
            <tbody>
              <tr><td>日経225先物（公式例）</td><td>証拠金160万円／170万円</td><td>価格30,000円時の売り／買いの掲載例。現在額ではない</td></tr>
              <tr><td>日経225先物の取引単位</td><td>日経225 × 1,000倍</td><td>価格40,000円なら想定取引金額は4,000万円</td></tr>
              <tr><td>日経225mini</td><td>日経225 × 100倍</td><td>先物本体の10分の1の取引単位。証拠金は別途変動</td></tr>
              <tr><td>日経225マイクロ</td><td>日経225 × 10倍</td><td>先物本体の100分の1の取引単位。証拠金は別途変動</td></tr>
            </tbody>
          </table>
        </div>
        <p className="panel-note">JPXの商品概要にある例を転記。JSCCの銘柄別VaR証拠金額は営業日ごとに更新されるため、申込・発注画面の表示を優先します。</p>
      </div>

      <h2>必要証拠金が決まる3つの要素</h2>
      <ol>
        <li><strong>VaR方式の所要額：</strong>複数の市場変動シナリオから想定損失を計算します。</li>
        <li><strong>証券会社の設定：</strong>取引所基準以上の額や掛目を会社ごとに設定できます。</li>
        <li><strong>建玉の組合せ：</strong>買いと売り、商品や限月の組合せによりポートフォリオ単位で計算されます。</li>
      </ol>

      <h2>取引金額は価格 × 取引単位</h2>
      <div className="formula-box">
        <code>想定取引金額 ＝ 先物価格 × 取引単位 × 枚数</code>
        <small>必要証拠金とは別の、価格変動の影響を受ける名目上の金額です。</small>
      </div>
      <p>
        日経225が40,000円の仮定なら、マイクロ1枚の想定取引金額は40万円、mini1枚は400万円、
        日経225先物1枚は4,000万円です。
      </p>

      <h2>日経225先物の証拠金は日々変わり得る</h2>
      <p>
        日本証券クリアリング機構は、先物・オプションの証拠金をVaR方式で計算しています。
        過去の市場データなどから複数のシナリオを作り、ポートフォリオ単位の損失額をもとに必要額を算出する仕組みです。
        相場環境や建玉の組合せが変われば、必要額も変わり得ます。
      </p>

      <h2>証券会社の必要額は同じとは限らない</h2>
      <p>
        取引所のルールでは、証拠金所要額はVaR方式で計算した額以上です。証券会社はそれ以上の金額を顧客に求めることができ、
        上乗せ額や不足時の対応は会社によって異なります。
      </p>

      <h2>取引前に確認する項目</h2>
      <ul>
        <li>1枚の取引単位と1ティックの損益</li>
        <li>当日の必要証拠金と証券会社の上乗せ</li>
        <li>不足が生じた場合の追加差入れ・強制決済ルール</li>
        <li>取引最終日、SQ日、限月の乗り換え</li>
      </ul>

      <div className="callout">
        <strong>損失が証拠金を上回る可能性があります</strong>
        <p>急変時には想定した価格で決済できず、預けた証拠金以上の損失が生じる場合があります。最新の契約締結前交付書面を確認してください。</p>
      </div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.jpx.co.jp/derivatives/rules/margin/01.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「顧客が差し入れる証拠金」</a></li>
          <li><a href="https://www.jpx.co.jp/jscc/datafeed/margin/archive" target="_blank" rel="noopener noreferrer">JSCC「銘柄別VaR証拠金額」</a></li>
          <li><a href="https://www.jpx.co.jp/jscc/seisan/sakimono/shokokin_seido/VaR.html" target="_blank" rel="noopener noreferrer">日本証券クリアリング機構「VaR方式とは」</a></li>
        </ul>
        <p>制度と掲載例は2026年9月15日に再確認。必要証拠金は固定値ではありません。</p>
      </section>

      <p><Link href="/articles/futures-tick-value">1ティックの計算も読む →</Link></p>
      <p><Link href="/tools/nikkei225-margin-buffer-calculator">証拠金余力を値幅・ティックへ換算する →</Link></p>
      <p><Link href="/futures/nikkei225-fee-comparison">日経225先物の手数料を2社比較する →</Link></p>
      <p><Link href="/articles/nikkei225-futures-night-session">日中・ナイトセッションの取引時間を見る →</Link></p>
      <p><Link href="/futures">先物コスト比較へ戻る →</Link></p>
    </article>
  );
}
