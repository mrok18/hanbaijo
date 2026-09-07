import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'CFDの取引コスト比較｜スプレッド・調整額・金利を読む',
  description: 'CFDを手数料だけで選ばないために、スプレッド、価格調整額、金利調整額、取引条件を分けて整理します。',
};

const CFD_TARGETS = [
  { name: 'DMM CFD', scope: '株価指数・商品', status: '公式条件を整理済み・データ許諾を照会中', href: '/cfd/dmm-cfd' },
  { name: 'サクソバンク証券', scope: '株価指数・商品・個別株', status: 'OpenAPIの商用条件を確認予定' },
  { name: 'Plus500証券', scope: '株価指数・商品・個別株', status: '提携審査中' },
] as const;

export default function CfdPage() {
  return (
    <div className="fx-page cfd-page">
      <section className="fx-hero">
        <div>
          <p className="page-kicker">CFD COST GUIDE</p>
          <h1>「手数料0円」の外側を、<br /><em>合計で見る。</em></h1>
          <p className="lede">
            CFDの負担は、売買手数料だけでは決まりません。スプレッド、保有中の調整額、取引単位まで分け、
            同じ金額・期間にそろえて確認します。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/tools/cost-calculator">CFDコストを試算</Link>
            <Link className="button secondary" href="/method">表示ルールを読む</Link>
          </div>
        </div>
        <aside className="fx-status-panel cfd-status-panel">
          <span>DATA STATUS</span>
          <strong>比較方法を先行公開</strong>
          <p>
            自動取得データは利用条件を確認してから追加します。広告提携の成立だけでは、
            レートや調整額を保存・加工・再掲載できるとは判断しません。
          </p>
          <dl>
            <div><dt>比較軸</dt><dd>公開中</dd></div>
            <div><dt>試算値</dt><dd>計算機を公開中</dd></div>
            <div><dt>実測値</dt><dd>許諾後に公開</dd></div>
          </dl>
        </aside>
      </section>

      <section className="fx-section">
        <div className="section-heading">
          <div>
            <p className="section-index">01 / WHAT TO COMPARE</p>
            <h2>CFDは、4つのコストで比べる</h2>
            <p>短期売買と長期保有で重要になる項目が異なるため、負担を分解して表示します。</p>
          </div>
        </div>
        <div className="fx-metric-grid">
          <article><b>01</b><h3>スプレッド</h3><p>買値と売値の差を、取引数量と円換算額に直して確認します。</p></article>
          <article><b>02</b><h3>価格調整額</h3><p>先物を参照する銘柄などで発生する調整の仕組みと日付を確認します。</p></article>
          <article><b>03</b><h3>金利調整額</h3><p>保有方向と日数によって変わる受取・支払を、期間をそろえて比べます。</p></article>
          <article><b>04</b><h3>取引条件</h3><p>最小取引単位、取引時間、ロスカット、注文方式を別項目にします。</p></article>
        </div>
      </section>

      <section className="fx-example cfd-example">
        <div>
          <p className="section-index inverse">02 / HOLDING COST</p>
          <h2>保有日数が変われば、比較結果も変わる。</h2>
          <p>
            同じスプレッドでも、当日中に決済する取引と数週間保有する取引では合計負担が異なります。
            取引金額と保有日数を固定し、調整額を加えて比較します。
          </p>
        </div>
        <div className="fx-formula">
          <span>TOTAL COST</span>
          <strong>スプレッド ＋ 手数料</strong>
          <b>＋ 調整額</b>
          <small>実際の金額・発生条件は各社の最新情報を確認</small>
        </div>
      </section>

      <section className="fx-section">
        <div className="section-heading">
          <div>
            <p className="section-index">03 / COVERAGE</p>
            <h2>現在の調査対象</h2>
            <p>広告提携、データ利用許諾、比較評価はそれぞれ別に管理します。</p>
          </div>
        </div>
        <div className="data-panel">
          <div className="table-scroll">
            <table className="rates fx-target-table">
              <thead><tr><th>対象</th><th>主な商品</th><th>データ整備状況</th></tr></thead>
              <tbody>
                {CFD_TARGETS.map((target) => (
                  <tr key={target.name}>
                    <td className="ex-name">{'href' in target ? <Link href={target.href}>{target.name}</Link> : target.name}</td>
                    <td>{target.scope}</td>
                    <td><span className="research-badge">{target.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="fx-section" aria-labelledby="cfd-partner-title">
        <div className="section-heading">
          <div>
            <p className="section-index">04 / PARTNERED SERVICE</p>
            <h2 id="cfd-partner-title">最新の取引条件を公式サイトで確認する</h2>
            <p>以下はA8.netで提携済みの広告です。比較評価とは分離して掲載しています。</p>
          </div>
        </div>
        <div className="affiliate-grid single">
          <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
        </div>
        <p className="affiliate-disclosure">
          広告リンク経由で申込み等が行われた場合、当サイトが報酬を受け取ることがあります。
          CFDは元本を超える損失が生じる可能性があります。契約締結前交付書面等を確認してください。
        </p>
      </section>

      <section className="fx-next">
        <div><span>NEXT</span><h2>取引金額と保有期間をそろえる。</h2></div>
        <p>スプレッド、手数料、年間保有コスト率を入力し、往復の概算負担を試算できます。</p>
        <Link className="button primary" href="/tools/cost-calculator">無料計算機を開く</Link>
      </section>
    </div>
  );
}
