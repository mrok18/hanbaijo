import Link from 'next/link';

export const metadata = {
  title: '先物の取引コスト比較｜手数料・呼値・証拠金・限月を読む',
  description: '株価指数先物を中心に、手数料、1ティックの損益、証拠金、SQと限月を分けて整理します。',
};

export default function FuturesPage() {
  return (
    <div className="fx-page futures-page">
      <section className="fx-hero">
        <div>
          <p className="page-kicker">FUTURES COST GUIDE</p>
          <h1>証拠金ではなく、<br /><em>動く金額を見る。</em></h1>
          <p className="lede">
            先物は、預ける証拠金より大きな金額が動く商品です。手数料だけでなく、取引単位、
            1ティックの損益、限月まで確認し、実質的な負担とリスクを見ます。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/articles/futures-tick-value">1ティックを計算</Link>
            <Link className="button secondary" href="/articles/futures-margin">証拠金を理解する</Link>
          </div>
        </div>
        <aside className="fx-status-panel futures-status-panel">
          <span>DATA STATUS</span>
          <strong>制度と計算式を公開中</strong>
          <p>
            大阪取引所と日本証券クリアリング機構の公式情報を基準に整理しています。
            証券会社ごとの手数料・必要証拠金は確認日と適用条件を付けて追加します。
          </p>
          <dl>
            <div><dt>取引単位</dt><dd>公式情報を確認</dd></div>
            <div><dt>証拠金</dt><dd>VaR方式を確認</dd></div>
            <div><dt>会社比較</dt><dd>公式条件を調査中</dd></div>
          </dl>
        </aside>
      </section>

      <section className="fx-section">
        <div className="section-heading"><div>
          <p className="section-index">01 / WHAT TO COMPARE</p>
          <h2>先物は、4つの条件で比べる</h2>
          <p>同じ指数でもラージ・mini・マイクロで動く金額が異なります。</p>
        </div></div>
        <div className="fx-metric-grid">
          <article><b>01</b><h3>売買手数料</h3><p>1枚あたりの往復手数料に、清算・決済時の条件を加えて確認します。</p></article>
          <article><b>02</b><h3>呼値と取引単位</h3><p>価格の最小刻みと倍率から、1ティック動いたときの損益を計算します。</p></article>
          <article><b>03</b><h3>証拠金</h3><p>預ける担保であり、取引金額そのものではありません。会社の上乗せも確認します。</p></article>
          <article><b>04</b><h3>限月とSQ</h3><p>取引最終日、最終決済、次の限月への乗り換え条件を把握します。</p></article>
        </div>
      </section>

      <section className="fx-example futures-example">
        <div>
          <p className="section-index inverse">02 / TICK VALUE</p>
          <h2>日経225マイクロは、1ティック50円。</h2>
          <p>
            日経225マイクロ先物の取引単位は指数の10倍、呼値は5円です。
            そのため、価格が最小単位だけ動くと1枚あたり50円の損益変動になります。
          </p>
        </div>
        <div className="fx-formula">
          <span>TICK VALUE</span>
          <strong>5円 × 10倍 × 1枚</strong>
          <b>= 50円</b>
          <small>大阪取引所の制度概要に基づく計算</small>
        </div>
      </section>

      <section className="fx-section">
        <div className="section-heading"><div>
          <p className="section-index">03 / CONTRACT SIZE</p>
          <h2>同じ5円の動きでも、倍率で差がつく</h2>
        </div></div>
        <div className="data-panel"><div className="table-scroll">
          <table className="rates fx-target-table">
            <thead><tr><th>商品</th><th>取引単位</th><th>呼値</th><th>1ティックの損益</th></tr></thead>
            <tbody>
              <tr><td className="ex-name">日経225先物</td><td>指数 × 1,000円</td><td>10円</td><td>10,000円 / 枚</td></tr>
              <tr><td className="ex-name">日経225mini</td><td>指数 × 100円</td><td>5円</td><td>500円 / 枚</td></tr>
              <tr><td className="ex-name">日経225マイクロ先物</td><td>指数 × 10円</td><td>5円</td><td>50円 / 枚</td></tr>
            </tbody>
          </table>
        </div><p className="panel-note">制度は2026年9月7日に確認。必要証拠金や手数料は証券会社、日付、建玉の組合せで異なります。</p></div>
      </section>

      <section className="fx-section">
        <div className="section-heading"><div>
          <p className="section-index">04 / LEARN</p>
          <h2>会社比較と金額構造をつなげる</h2>
        </div></div>
        <div className="affiliate-grid">
          <article className="affiliate-card"><div className="affiliate-card-head"><span>COMPARE</span><b>2026-09-07確認</b></div><p className="affiliate-category">NIKKEI 225 FEES</p><h3>先物2社の手数料</h3><p>松井証券と楽天証券の標準手数料を、片道・往復で比較します。</p><Link href="/futures/nikkei225-fee-comparison">比較表を見る →</Link></article>
          <article className="affiliate-card"><div className="affiliate-card-head"><span>GUIDE</span><b>計算</b></div><p className="affiliate-category">TICK VALUE</p><h3>1ティックの損益</h3><p>取引単位と呼値から、最小の値動きが何円になるかを計算します。</p><Link href="/articles/futures-tick-value">記事を読む →</Link></article>
          <article className="affiliate-card"><div className="affiliate-card-head"><span>GUIDE</span><b>リスク</b></div><p className="affiliate-category">MARGIN</p><h3>証拠金と取引金額</h3><p>証拠金が小さく見える理由と、損益が取引金額に連動する点を整理します。</p><Link href="/articles/futures-margin">記事を読む →</Link></article>
        </div>
      </section>

      <section className="article-sources" aria-labelledby="futures-sources">
        <h2 id="futures-sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.jpx.co.jp/corporate/learning/resources/tvdivq0000003toh-att/fu_pu.pdf" target="_blank" rel="noopener noreferrer">日本取引所グループ「先物取引のすべて」</a></li>
          <li><a href="https://www.jpx.co.jp/jscc/seisan/sakimono/shokokin_seido/VaR.html" target="_blank" rel="noopener noreferrer">日本証券クリアリング機構「VaR方式とは」</a></li>
        </ul>
        <p>制度・数値は2026年9月7日に確認。取引前に最新の契約締結前交付書面等を確認してください。</p>
      </section>

      <section className="fx-next">
        <div><span>NEXT</span><h2>手数料と1ティックを並べる。</h2></div>
        <p>手数料の差が、商品の最小値動き何回分に当たるかを確認できます。</p>
        <Link className="button primary" href="/futures/nikkei225-fee-comparison">先物比較を見る</Link>
      </section>
    </div>
  );
}
