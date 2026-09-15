import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/maker-taker' },
  title: 'メイカーとは？テイカーとの違い・手数料の仕組み',
  description: 'メイカーとは板に注文を並べる注文、テイカーとは板の注文をすぐ約定させる注文です。判定条件、手数料の違い、指値・成行の注意点を整理します。',
};

const ORDER_TYPES = [
  { type: 'メイカー（Maker）', order: '板に残る指値注文', timing: '注文が板に並び、後から来た注文と約定', fee: '割引・還元になる取引所がある' },
  { type: 'テイカー（Taker）', order: '成行注文・即時約定する注文', timing: 'すでに板にある注文を消費して約定', fee: '通常料率・割増になる取引所がある' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">MAKER / TAKER BASICS</p>
      <h1>メイカーとは？<br />テイカーとの違いと手数料の見方</h1>
      <p className="lede">メイカーとは、板に注文を並べて流動性を提供する注文です。テイカーは、すでに板にある注文をすぐ約定させる注文を指します。手数料を比べるときは、注文方法だけでなく、約定時に注文が板へ残ったかを確認します。</p>

      <div className="callout"><strong>先に結論：指値でも即時約定ならテイカー</strong><p>メイカーかテイカーかは、指値・成行という名前だけで決まりません。注文を出した時点で板に残り、後から来た注文を待つならメイカー、既存の気配とすぐ約定するならテイカーです。</p></div>

      <h2>メイカーとテイカーの違い</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table"><thead><tr><th>区分</th><th>代表的な注文</th><th>約定の仕方</th><th>手数料の傾向</th></tr></thead><tbody>
          {ORDER_TYPES.map((row) => <tr key={row.type}><td className="ex-name">{row.type}</td><td>{row.order}</td><td>{row.timing}</td><td>{row.fee}</td></tr>)}
        </tbody></table>
      </div><p className="panel-note">メイカー・テイカーの判定方法と料率は取引所ごとに異なります。注文画面と公式の手数料表を優先してください。</p></div>

      <h2>メイカーになる注文、テイカーになる注文</h2>
      <p>板に価格と数量を提示し、すぐには約定しない指値注文はメイカーになりやすい注文です。ただし、最良気配より有利な価格を指定して既存注文とぶつかると、指値でもテイカーとして約定することがあります。</p>
      <p>成行注文は板にある注文を順番に約定させるため、基本的にテイカーです。IOCやFOKなどの執行条件、ポストオンリーの有無によって扱いが変わる場合もあるため、取引所のルールを確認します。</p>

      <h2>なぜ手数料を分けるのか</h2>
      <p>取引所は、板に注文が並ぶほど売買相手を見つけやすくなります。そのため、流動性を提供するメイカーを低い料率にし、板の注文を消費するテイカーを通常料率にする料金体系があります。メイカー手数料がマイナスで、約定金額に応じた還元になる取引所もあります。</p>
      <p>ただし、料率の数字だけで有利不利は決まりません。メイカー注文は約定しない可能性があり、待っている間に価格が動く機会損失もあります。テイカー注文は約定しやすい一方、急いでいると複数価格をまたいで平均約定価格が悪化することがあります。</p>

      <h2>注文前に確認する4項目</h2>
      <ol>
        <li>注文が板に残る条件（ポストオンリー、指値の執行条件）</li>
        <li>一部約定や即時約定がメイカー・テイカーのどちらになるか</li>
        <li>メイカー・テイカーそれぞれの手数料率と適用期間</li>
        <li>手数料以外のスプレッド、約定価格、出金・送金費用</li>
      </ol>

      <h2>販売所にはメイカー・テイカーの区別がない</h2>
      <p>販売所は会社が提示する価格で直接売買する形式のため、板に注文を並べるメイカー・テイカーという区分がありません。主なコストは買値と売値の差であるスプレッドです。取引所と販売所を比較するときは、手数料率だけでなく、同じ数量を買って売った往復コストで比べます。</p>

      <h2>公式手数料表で確認する</h2>
      <p>手数料率、対象銘柄、30日間の取引量によるランク、注文執行条件は取引所ごとに改定されます。実際に注文する前に、利用するサービスの公式手数料表と取引ルールを開き、メイカー・テイカーの定義と適用条件を確認してください。</p>
      <ul>
        <li><a href="https://www.bitflyer.com/ja-jp/commission" target="_blank" rel="noopener noreferrer">bitFlyer「手数料」</a></li>
        <li><a href="https://coin.z.com/jp/fee/" target="_blank" rel="noopener noreferrer">GMOコイン「手数料」</a></li>
      </ul>

      <p><Link href="/articles/ita-yomikata">板の読み方を確認する →</Link></p>
      <p><Link href="/articles/cost-no-uchiwake">取引コストの全体像を見る →</Link></p>
      <p><Link href="/">各社のスプレッドを比較する →</Link></p>
    </article>
  );
}
