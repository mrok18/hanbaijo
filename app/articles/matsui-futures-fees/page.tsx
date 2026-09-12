import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/matsui-futures-fees' },
  title: '松井証券の先物手数料｜通常・一日先物の違いと往復コスト',
  description: '松井証券の日経225先物・mini・マイクロの手数料を、通常先物と一日先物に分けて整理します。往復コストと確認項目も解説します。',
};

const FEES = [
  ['日経225先物', '200円（税込220円）', '150円（税込165円）'],
  ['日経225mini', '35円（税込38.5円）', '25円（税込27.5円）'],
  ['日経225マイクロ', '10円（税込11円）', '10円（税込11円）'],
] as const;

export default function Page() {
  return <article>
    <p className="page-kicker">MATSUI / FUTURES COST</p>
    <h1>松井証券の先物手数料<br />通常・一日先物の違い</h1>
    <p className="lede">松井証券の先物は、通常の先物取引と一日先物取引で手数料体系が分かれます。日経225先物、mini、マイクロを同じ「1枚」で比べず、取引区分と往復回数をそろえて確認します。</p>

    <div className="callout"><strong>手数料は1約定ごとに発生する</strong><p>買建てと決済を行うなら、表示された1枚あたり手数料を2回分見るのが基本です。期日まで保有した自動決済や任意決済にも、同じ手数料体系が適用されます。</p></div>

    <h2>日経225の手数料一覧</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>商品</th><th>通常先物・1約定</th><th>一日先物・1約定</th></tr></thead><tbody>{FEES.map(([name, normal, day]) => <tr key={name}><td className="ex-name">{name}</td><td>{normal}</td><td>{day}</td></tr>)}</tbody></table></div><p className="panel-note">松井証券のインターネット経由の手数料。税込額は公式表示に基づきます。商品追加時は公式手数料表を確認してください。</p></div>

    <h2>往復コストの計算方法</h2>
    <p>1枚を建てて1回決済する場合、片道手数料を2回分合計します。たとえば通常の日経225miniなら、税抜表示の片道35円を基準に、建て・決済の2約定を確認します。実際の損益は手数料だけでなく、取引単位と値動きでも変わります。</p>
    <div className="formula-box"><code>往復手数料 ＝ 1枚あたりの手数料 × 2約定 × 枚数</code><small>電話注文や自動最終決済など、取引経路・決済方法の条件は公式案内を確認します。</small></div>

    <h2>通常先物と一日先物を選ぶ前の確認</h2>
    <ul>
      <li>当日中に決済する前提か、翌日以降も保有するか</li>
      <li>対象商品と、ラージ・mini・マイクロの取引単位</li>
      <li>必要証拠金、建玉上限、ロスカットや追加証拠金の条件</li>
      <li>手数料以外の値動き損益と、取引時間・最終決済日</li>
    </ul>
    <p>一日先物は手数料だけで選ぶ商品ではありません。保有時間、建玉上限、決済ルールが取引目的に合うかを先に確認してください。</p>

    <p><Link href="/futures/nikkei225-fee-comparison">先物2社の手数料比較を見る →</Link></p>
    <p><Link href="/tools/matsui-futures-cost-calculator">値幅・枚数から往復コストを計算する →</Link></p>
    <p><Link href="/articles/matsui-futures-normal-vs-day">通常先物と一日先物の違いを詳しく読む →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/fop/futures/fee/" target="_blank" rel="noopener noreferrer">松井証券「先物取引 手数料」</a></li>
      <li><a href="https://www.matsui.co.jp/fop/study/qa/qa_07.html" target="_blank" rel="noopener noreferrer">松井証券「取引にかかる費用を教えてください」</a></li>
      <li><a href="https://www.jpx.co.jp/derivatives/products/domestic/225micro-futures/index.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「日経225マイクロ先物」</a></li>
    </ul><p>手数料・取引条件は変更される場合があります。取引前に最新の公式手数料表と取引ルールを確認してください。確認日：2026年9月11日。</p></section>
  </article>;
}
