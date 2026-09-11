import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '楽天証券FXの手数料は無料？スプレッド・スワップを円換算',
  description: '楽天FXの取引手数料と実質コストを整理。米ドル/円の時間帯・注文数量別スプレッドを1,000通貨から円換算し、スワップやスリッページも確認します。',
};

const SPREAD_COSTS = [
  ['1,000通貨', '2円', '38円'],
  ['1万通貨', '20円', '380円'],
  ['10万通貨', '200円', '3,800円'],
  ['100万通貨', '2,000円', '3万8,000円'],
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">RAKUTEN FX / TOTAL COST</p>
      <h1>楽天証券FXの手数料は無料？<br />スプレッド・スワップを円換算</h1>
      <p className="lede">楽天FXの取引手数料は無料です。ただし、売値と買値の差であるスプレッドや、保有中のスワップポイント、注文価格と約定価格のずれは損益に影響します。「手数料0円」と「取引コスト0円」を分けて確認します。</p>

      <div className="callout"><strong>先に結論</strong><p>米ドル/円は、200万通貨までの注文ならコアタイムの公称スプレッドが0.2銭、非コアタイムは3.8銭です。1,000通貨ではそれぞれ約2円と約38円に相当し、同じ会社でも時間帯と注文数量で負担が変わります。</p></div>

      <h2>取引手数料0円でも残るコスト</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>扱い</th><th>確認ポイント</th></tr></thead><tbody>
        <tr><td className="ex-name">取引手数料</td><td><strong>無料</strong></td><td>楽天FXの新規・決済注文</td></tr>
        <tr><td className="ex-name">スプレッド</td><td>売値と買値の差</td><td>通貨ペア、時間帯、注文数量、市場状況で変動</td></tr>
        <tr><td className="ex-name">スワップポイント</td><td>受取または支払</td><td>通貨ペア、売買方向、付与日数で変動</td></tr>
        <tr><td className="ex-name">スリッページ</td><td>注文価格とのずれ</td><td>相場急変時や注文集中時は約定結果を確認</td></tr>
        <tr><td className="ex-name">為替差損</td><td>価格変動による損失</td><td>手数料ではなく、取引損益の主な変動要因</td></tr>
      </tbody></table></div></div>

      <h2>米ドル/円スプレッドは時間帯と数量で変わる</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>時間帯</th><th className="num">200万通貨まで</th><th className="num">200万超～300万通貨</th><th className="num">300万超～500万通貨</th></tr></thead><tbody>
        <tr><td className="ex-name">コアタイム<br />9:00～翌3:00</td><td className="num"><strong>0.2銭</strong></td><td className="num">0.6銭</td><td className="num">1.0銭</td></tr>
        <tr><td className="ex-name">非コアタイム<br />3:00～9:00</td><td className="num"><strong>3.8銭</strong></td><td className="num">4.2銭</td><td className="num">4.6銭</td></tr>
      </tbody></table></div><p className="panel-note">楽天FXのストリーミング、ASストリーミング、全決済注文における公称値。スプレッドは市場状況により変動し、表示値どおりの約定は保証されません。</p></div>

      <h2>0.2銭・3.8銭を円換算する</h2>
      <div className="formula-box">
        <code>スプレッド相当額 ＝ スプレッド（円）× 取引数量</code>
        <small>0.2銭＝0.002円、3.8銭＝0.038円として計算します。</small>
      </div>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th className="num">取引数量</th><th className="num">0.2銭の相当額</th><th className="num">3.8銭の相当額</th></tr></thead><tbody>{SPREAD_COSTS.map(([amount, core, offCore]) => (
        <tr key={amount}><td className="num ex-name">{amount}</td><td className="num"><strong>{core}</strong></td><td className="num">{offCore}</td></tr>
      ))}</tbody></table></div><p className="panel-note">表示スプレッドで約定し、その後レートが動かないと仮定した単純な往復コスト相当額です。実際は約定価格やスワップで変わります。</p></div>

      <h2>楽天FXは1,000通貨から取引できる</h2>
      <p>楽天FXの米ドル/円を含む主要通貨ペアは、1,000通貨単位で注文できます。例えば米ドル/円が150円なら、1,000通貨の取引金額は15万円です。必要証拠金と許容損失は別に計算し、最小単位だから安全と決めつけないことが重要です。</p>
      <div className="formula-box"><code>取引金額 ＝ 為替レート × 取引数量</code><small>150円 × 1,000通貨 ＝ 15万円。個人口座では選択するレバレッジコースに応じ、取引金額の4％～100％の証拠金が必要です。</small></div>

      <h2>スプレッドが広がりやすい場面</h2>
      <div className="fx-metric-grid">
        <article><b>EARLY</b><h3>平日早朝</h3><p>流動性が低下しやすく、コアタイム外の公称値や実際の提示幅を確認します。</p></article>
        <article><b>EVENT</b><h3>経済指標</h3><p>主要指標の発表前後は注文が偏り、スプレッドが広がる場合があります。</p></article>
        <article><b>HOLIDAY</b><h3>海外休場</h3><p>クリスマスや年末年始など、取引参加者が減る日は注意が必要です。</p></article>
        <article><b>SHOCK</b><h3>突発事象</h3><p>災害、政変、金融・経済の重大な出来事では提示幅や約定条件が変わり得ます。</p></article>
      </div>

      <h2>スワップは受取額だけで比較しない</h2>
      <p>スワップポイントは、2通貨間の金利差などを反映して日々変わり、売買方向によって受取にも支払にもなります。土日や祝日をまたぐ日には複数日分がまとめて付くことがあるため、当日の金額と付与日数をセットで確認します。</p>
      <p>短期売買ではスプレッドと取引回数、翌日以降へ持ち越す取引ではスワップの受払を加え、総コストを見積もります。</p>

      <h2>楽天MT4は条件を分けて確認する</h2>
      <p>楽天MT4も公式ルール上の取引手数料は無料ですが、注文画面の数量表示やスプレッド、注文上限は楽天FXと同じとは限りません。MT4では数量「1」が10万通貨、1,000通貨は「0.01」となるため、楽天FXの数量入力と混同しないようにします。</p>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.rakuten-sec.co.jp/web/fx/rule/" target="_blank" rel="noopener noreferrer">楽天証券「楽天FXの取引ルール」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/fx/rule/spread/" target="_blank" rel="noopener noreferrer">楽天証券「取扱通貨ペアとスプレッド」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/fx/rule/losscut/" target="_blank" rel="noopener noreferrer">楽天証券「ロスカット」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/fx/mt4/rule.html" target="_blank" rel="noopener noreferrer">楽天証券「楽天MT4 取引ルール」</a></li>
        </ul>
        <p>手数料・取引条件は2026年9月12日に確認しました。スプレッド、スワップ、証拠金などは変動・変更されるため、注文時は取引画面と最新の公式情報を優先してください。</p>
      </section>

      <p><Link href="/articles/fx-spread-cost">FXスプレッドを円換算する方法を見る →</Link></p>
      <p><Link href="/tools/fx-pip-value-calculator">1pipsの損益とスプレッド相当額を計算する →</Link></p>
      <p><Link href="/articles/fx-swap-calculation">FXスワップポイントの計算方法を見る →</Link></p>
      <p><Link href="/articles/fx-swap-three-days">スワップが3日分・4日分付く理由を見る →</Link></p>
      <p><Link href="/fx/usdjpy-spread-comparison">米ドル/円スプレッドを比較する →</Link></p>
    </article>
  );
}
