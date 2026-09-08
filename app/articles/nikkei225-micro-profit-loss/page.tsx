import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '日経225マイクロは1円・1ティックでいくら？損益早見表',
  description: '日経225マイクロ先物1枚の1円、1ティック、10円、100円の値動き損益を計算し、mini・ラージとの違いや往復手数料の回収値幅を解説します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">NIKKEI 225 MICRO / P&amp;L</p>
    <h1>日経225マイクロは<br />1円・1ティックでいくら？</h1>
    <p className="lede">日経225マイクロ先物は、指数値の10倍が1枚の取引金額です。指数が1円動いた場合の損益は10円ですが、注文できる最小の値幅は5円なので、1ティックの損益は50円です。</p>

    <h2>結論：1円で10円、1ティックで50円</h2>
    <div className="fx-metric-grid">
      <article><b>MULTIPLIER</b><h3>10倍</h3><p>指数値 × 10円</p></article>
      <article><b>1 POINT</b><h3>10円</h3><p>指数が1円動いた理論損益</p></article>
      <article><b>1 TICK</b><h3>50円</h3><p>5円 × 10倍</p></article>
      <article><b>100 POINTS</b><h3>1,000円</h3><p>100円 × 10倍</p></article>
    </div>
    <div className="formula-box"><code>値動き損益 ＝ 値幅（円）× 10倍 × 枚数</code><small>買い建ては上昇で利益、売り建ては下落で利益。手数料・板の価格差・スリッページは別です。</small></div>

    <h2>マイクロ1枚の損益早見表</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>指数の値幅</th><th>ティック数</th><th>損益額</th></tr></thead><tbody>
      <tr><td className="ex-name">1円</td><td>0.2ティック相当</td><td>10円</td></tr>
      <tr><td className="ex-name">5円</td><td>1ティック</td><td>50円</td></tr>
      <tr><td className="ex-name">10円</td><td>2ティック</td><td>100円</td></tr>
      <tr><td className="ex-name">50円</td><td>10ティック</td><td>500円</td></tr>
      <tr><td className="ex-name">100円</td><td>20ティック</td><td>1,000円</td></tr>
      <tr><td className="ex-name">500円</td><td>100ティック</td><td>5,000円</td></tr>
    </tbody></table></div></div>
    <p>「1円で10円」は損益感応度を示す数字です。実際の注文価格は5円刻みなので、通常は最低50円単位で含み損益が動きます。</p>

    <h2>mini・ラージと比べる</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>商品</th><th>取引単位</th><th>呼値</th><th>1ティック損益</th><th>100円の損益</th></tr></thead><tbody>
      <tr><td className="ex-name">日経225マイクロ</td><td>10倍</td><td>5円</td><td>50円</td><td>1,000円</td></tr>
      <tr><td className="ex-name">日経225mini</td><td>100倍</td><td>5円</td><td>500円</td><td>10,000円</td></tr>
      <tr><td className="ex-name">日経225先物</td><td>1,000倍</td><td>10円</td><td>10,000円</td><td>100,000円</td></tr>
    </tbody></table></div></div>
    <p>マイクロの1ティック損益はminiの10分の1、ラージの200分の1です。ただし、小口でも証拠金を使うレバレッジ取引であることは変わりません。</p>

    <h2>松井証券の往復22円を回収する値幅</h2>
    <p>松井証券のインターネット取引では、日経225マイクロの通常先物・一日先物とも1枚片道11円（税込）です。新規と返済が各1回なら往復22円となります。</p>
    <div className="formula-box"><code>手数料分岐 ＝ 往復22円 ÷ 1ティック50円 ＝ 0.44ティック相当</code><small>実際の注文は5円刻みのため、1ティック有利に動けば粗利益50円、往復手数料差引後は28円です。</small></div>
    <p>板の売買価格差やスリッページが1ティックあれば、その50円も別に考えます。表示手数料だけでなく、約定価格を含む総コストで判断します。</p>
    <p><Link href="/tools/matsui-futures-cost-calculator">商品・枚数・値幅を変えて差引損益を計算する →</Link></p>
    <p><Link href="/tools/nikkei225-margin-buffer-calculator">口座資金から値動きへの余力を計算する →</Link></p>

    <h2>証拠金と最大損失は同じではない</h2>
    <p>証拠金は取引のために差し入れる担保であり、損失上限ではありません。指数が1,000円不利に動けばマイクロ1枚で10,000円の損失です。相場急変時には予定価格で決済できず、証拠金を超える損失が発生する可能性もあります。</p>
    <div className="callout"><strong>枚数を増やすと損益も手数料も比例します</strong><p>マイクロ10枚は値動き損益だけを見ればmini1枚と同じ100倍相当です。細かく分割できる利点と、合計枚数によるリスクを分けて確認してください。</p></div>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jpx.co.jp/derivatives/products/domestic/225micro-futures/01.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「日経225マイクロ先物 制度概要」</a></li>
      <li><a href="https://www.jpx.co.jp/derivatives/products/domestic/225mini/index.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「日経225mini 商品概要」</a></li>
      <li><a href="https://www.jpx.co.jp/derivatives/products/domestic/225futures/" target="_blank" rel="noopener noreferrer">日本取引所グループ「日経225先物 商品概要」</a></li>
      <li><a href="https://www.matsui.co.jp/fee/" target="_blank" rel="noopener noreferrer">松井証券「手数料」</a></li>
    </ul><p>取引単位、呼値、手数料は2026年9月8日に公式ページで再確認しました。最新条件は取引前に各社公式情報を確認してください。</p></section>

    <p><Link href="/articles/futures-tick-value">先物の1ティック計算方法を見る →</Link></p>
    <p><Link href="/articles/matsui-futures-normal-vs-day">松井証券の通常・一日先物を比較する →</Link></p>
    <p><Link href="/futures/nikkei225-fee-comparison">日経225先物の手数料比較を見る →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。記事の計算結果とは分けて表示しています。</p></section>
  </article>;
}
