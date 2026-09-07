import Link from 'next/link';

export const metadata = {
  title: 'FXの取引コスト比較｜スプレッド・スワップ・約定を読む',
  description: 'FX会社をスプレッドだけで選ばないために、公称値・実測値・スワップ・約定条件を分けて比較します。',
};

const REVIEW_TARGETS = [
  { name: 'FXTF', scope: 'FX・ノックアウトオプション', status: 'データ利用条件を確認中' },
  { name: 'シストレセレクト365', scope: 'FX自動売買', status: '比較項目を設計中' },
  { name: 'サクソバンク証券', scope: 'FX・CFD・株式・先物', status: 'OpenAPIの商用条件を確認予定' },
  { name: '松井証券 / LIGHT FXほか', scope: '主要FX口座', status: '公式条件を調査中' },
] as const;

export default function FxPage() {
  return (
    <div className="fx-page">
      <section className="fx-hero">
        <div>
          <p className="page-kicker">FX COST GUIDE</p>
          <h1>FXの「狭い」を、<br /><em>円で確かめる。</em></h1>
          <p className="lede">
            広告のスプレッドだけでは、実際の負担は決まりません。取引数量、時間帯、約定、スワップまで分け、
            同じ条件で比べられる形に整理します。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/tools/cost-calculator">FXコストを試算</Link>
            <Link className="button secondary" href="/articles/fx-spread-cost">計算方法を読む</Link>
          </div>
        </div>
        <aside className="fx-status-panel">
          <span>DATA STATUS</span>
          <strong>自動計測は許諾確認中</strong>
          <p>
            現在は比較方法と調査対象を先行公開しています。各社レートの継続保存・加工・再掲載は、
            書面で利用条件を確認できた提供元だけ開始します。
          </p>
          <dl>
            <div><dt>公称値</dt><dd>公式情報を確認中</dd></div>
            <div><dt>実測値</dt><dd>許諾後に公開</dd></div>
            <div><dt>試算値</dt><dd>計算機を公開中</dd></div>
          </dl>
        </aside>
      </section>

      <section className="fx-section">
        <div className="section-heading">
          <div>
            <p className="section-index">01 / WHAT TO COMPARE</p>
            <h2>FX会社は、4つのコストで比べる</h2>
            <p>数字の出どころが異なるため、公称・実測・試算を混ぜずに表示します。</p>
          </div>
        </div>
        <div className="fx-metric-grid">
          <article><b>01</b><h3>スプレッド</h3><p>AskとBidの差。銭・pips表記を取引数量ごとの円額へ換算します。</p></article>
          <article><b>02</b><h3>約定コスト</h3><p>スリッページ、約定率、注文方式など、表示値と実際の取引結果の差を見ます。</p></article>
          <article><b>03</b><h3>保有コスト</h3><p>スワップポイントは受取だけでなく支払も確認し、保有日数と数量をそろえます。</p></article>
          <article><b>04</b><h3>取引条件</h3><p>最小取引単位、取引時間、ロスカット、取引手数料を別項目として整理します。</p></article>
        </div>
      </section>

      <section className="fx-example">
        <div>
          <p className="section-index inverse">02 / QUICK MATH</p>
          <h2>0.2銭なら、1万通貨で20円。</h2>
          <p>
            USD/JPYのスプレッドが0.2銭なら、1通貨あたり0.002円。1万通貨では20円、
            10万通貨では200円です。取引回数が増えるほど、この差は積み上がります。
          </p>
        </div>
        <div className="fx-formula">
          <span>SPREAD COST</span>
          <strong>0.002円 × 10,000通貨</strong>
          <b>= 20円</b>
          <small>表示どおりに約定した場合の単純計算例</small>
        </div>
      </section>

      <section className="fx-section">
        <div className="section-heading">
          <div>
            <p className="section-index">03 / COVERAGE</p>
            <h2>現在の調査対象</h2>
            <p>広告契約の有無と、データの評価・掲載順位は分離します。</p>
          </div>
        </div>
        <div className="data-panel">
          <div className="table-scroll">
            <table className="rates fx-target-table">
              <thead><tr><th>対象</th><th>主な商品</th><th>データ整備状況</th></tr></thead>
              <tbody>
                {REVIEW_TARGETS.map((target) => (
                  <tr key={target.name}>
                    <td className="ex-name">{target.name}</td>
                    <td>{target.scope}</td>
                    <td><span className="research-badge">{target.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="panel-note">許諾前のレートを推測・転載して空欄を埋めることはしません。確認できた公称値と実測値から順次追加します。</p>
        </div>
      </section>

      <section className="fx-next">
        <div><span>NEXT</span><h2>まず、自分の数量で試算する。</h2></div>
        <p>公称スプレッドを率に直して入力すれば、取引金額に対する負担を円で確認できます。</p>
        <Link className="button primary" href="/tools/cost-calculator">無料計算機を開く</Link>
      </section>
    </div>
  );
}
