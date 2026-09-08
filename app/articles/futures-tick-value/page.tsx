import Link from 'next/link';

export const metadata = {
  title: '先物の1ティックはいくら？日経225で計算',
  description: '日経225先物、mini、マイクロの取引単位と呼値から、1ティックあたりの損益額を計算します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FUTURES TICK VALUE</p>
      <h1>先物の1ティックはいくら？<br />日経225で計算</h1>
      <p className="lede">
        先物の価格が同じ幅だけ動いても、商品ごとの取引単位で損益額は変わります。
        最小の値動きである「1ティック」を円に直すことが、リスク確認の第一歩です。
      </p>

      <h2>1ティックの計算式</h2>
      <div className="formula-box">
        <code>1ティックの損益 ＝ 呼値の単位 × 取引単位 × 枚数</code>
        <small>売買手数料や実際の約定差は含みません。</small>
      </div>

      <h2>日経225の3商品を比べる</h2>
      <ul>
        <li>日経225先物：10円 × 1,000倍 ＝ 10,000円 / 枚</li>
        <li>日経225mini：5円 × 100倍 ＝ 500円 / 枚</li>
        <li>日経225マイクロ先物：5円 × 10倍 ＝ 50円 / 枚</li>
      </ul>
      <p>同じ日経225を対象にしていても、1ティックの損益はラージとマイクロで200倍異なります。</p>

      <h2>100円動いたときの損益</h2>
      <p>
        価格が100円動けば、日経225先物1枚は10万円、miniは1万円、マイクロは1,000円の損益変動です。
        枚数を2枚にすれば金額も2倍になります。
      </p>

      <h2>スプレッドもティックで数える</h2>
      <p>
        最良売り気配と最良買い気配が2ティック離れているなら、すぐ反対売買した場合の価格差は
        「1ティックの損益 × 2」で概算できます。取引手数料は別に加えます。
      </p>

      <div className="callout">
        <strong>証拠金の大小だけで商品を選ばない</strong>
        <p>損益は取引単位に応じて動きます。証拠金と、実際に価格変動の影響を受ける取引金額は別です。</p>
      </div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.jpx.co.jp/corporate/learning/resources/tvdivq0000003toh-att/fu_pu.pdf" target="_blank" rel="noopener noreferrer">日本取引所グループ「先物取引のすべて」</a></li>
          <li><a href="https://www.jpx.co.jp/derivatives/products/domestic/225micro-futures/index.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「日経225マイクロ先物」</a></li>
        </ul>
        <p>取引単位と呼値は2026年9月7日に確認。</p>
      </section>

      <p><Link href="/tools/matsui-futures-cost-calculator">先物の値幅損益と往復手数料を計算する →</Link></p>
      <p><Link href="/tools/nikkei225-position-size-calculator">許容損失から先物の適正枚数を計算する →</Link></p>
      <p><Link href="/articles/nikkei225-micro-profit-loss">日経225マイクロの損益早見表を見る →</Link></p>
      <p><Link href="/futures">先物コスト比較へ戻る →</Link></p>
    </article>
  );
}
