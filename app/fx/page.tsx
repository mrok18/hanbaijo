import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
import { FX_PROVIDER_LIST } from '@/lib/fx-providers';

export const metadata = {
  title: 'FXの取引コスト比較｜スプレッド・スワップ・約定を読む',
  description: 'FX会社をスプレッドだけで選ばないために、公称値・実測値・スワップ・約定条件を分けて比較します。',
};

const REVIEW_TARGETS = [
  { name: 'DMM FX', scope: 'FX', status: '公式条件を整理済み・広告提携済み（コード待ち）', href: '/fx/dmm-fx' },
  { name: 'TOSSY', scope: 'FX・株式・指数・商品・暗号資産CFD', status: '公式条件を整理済み・広告掲載中', href: '/cfd/tossy' },
  { name: 'FXTF', scope: 'FX・ノックアウトオプション', status: '公式条件のみ掲載・自動計測対象外', href: '/fx/fxtf' },
  { name: 'シストレセレクト365', scope: 'FX自動売買', status: '公式条件を整理済み・データ許諾を照会中', href: '/fx/systre-select-365' },
  { name: 'MATSUI FX', scope: 'FX', status: '公式条件を整理済み・広告掲載中', href: '/fx/matsui' },
  { name: 'GMOクリック証券 FXネオ', scope: 'FX', status: '公式条件を整理済み・広告提携審査中', href: '/fx/gmo-click' },
  { name: 'LIGHT FX', scope: 'FX', status: '公式条件を整理済み・広告提携審査中', href: '/fx/lightfx' },
  { name: 'ヒロセ通商 LION FX', scope: 'FX', status: '公式条件を整理済み・広告提携審査中', href: '/fx/lion-fx' },
  { name: 'JFX MATRIX TRADER', scope: 'FX', status: '公式条件を整理済み・広告掲載中', href: '/fx/jfx' },
  { name: 'みんなのFX', scope: 'FX', status: '公式条件を整理済み・広告提携審査中', href: '/fx/minna-fx' },
  { name: '三菱UFJ eスマート証券 FX', scope: 'FX', status: '公式条件を整理済み・広告提携審査中', href: '/fx/au-kabucom-fx' },
  { name: 'サクソバンク証券', scope: 'FX・CFD・株式・先物', status: '公式条件を整理済み・広告提携審査中', href: '/fx/saxo' },
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
            <Link className="button primary" href="/tools/fx-spread-annual-cost-calculator">年間コスト差を試算</Link>
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
                    <td className="ex-name"><Link href={target.href}>{target.name}</Link></td>
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

      <section className="fx-section" aria-labelledby="fx-guide-comparison">
        <div className="section-heading">
          <div>
            <p className="section-index">04 / COMPARISON GUIDES</p>
            <h2 id="fx-guide-comparison">条件差を、共通の軸で比べる</h2>
            <p>スプレッド、スワップ、最低取引単位、ロスカットを、それぞれ独立した比較表で確認できます。</p>
          </div>
        </div>
        <div className="provider-directory comparison-guide-directory">
          <Link href="/articles/fx-spread-difference-annual-cost"><span>ANNUAL COST GAP</span><h3>0.1銭差を年間コストに換算</h3><p>数量・1日回数・年間240日で比較</p><b>年間早見表を見る →</b></Link>
          <Link href="/articles/fx-spread-monthly-cost"><span>MONTHLY SPREAD COST</span><h3>月間コストを取引回数で計算</h3><p>0.2銭を数量・1日回数・20日で円換算</p><b>月間早見表を見る →</b></Link>
          <Link href="/articles/fpo-fx-master-guide-before-download"><span>FREE FX E-BOOK</span><h3>無料教材の登録条件を確認</h3><p>全128ページの範囲・受取方法・追加案内</p><b>登録前の7項目を見る →</b></Link>
          <Link href="/articles/fx-master-guide-study-order"><span>FX STUDY ORDER</span><h3>初心者の学習順を整理</h3><p>仕組み・注文・資金管理から5段階で進む</p><b>学習ロードマップを見る →</b></Link>
          <Link href="/fx/ablenet-vps"><span>AUTO TRADING VPS</span><h3>VPSの月額総コストを確認</h3><p>本体料金・RDS・必要メモリを分けて比較</p><b>ABLENET VPSを見る →</b></Link>
          <Link href="/fx/usdjpy-spread-comparison"><span>USD/JPY SPREAD</span><h3>米ドル円スプレッドを比較</h3><p>時間帯・数量条件・1万通貨コスト</p><b>10社比較を見る →</b></Link>
          <Link href="/fx/swap-calendar-comparison"><span>SWAP CALENDAR</span><h3>スワップの表示ルールを比較</h3><p>表示単位・付与日数・実現タイミング</p><b>10社比較を見る →</b></Link>
          <Link href="/fx/minimum-trade-unit-comparison"><span>TRADE SIZE</span><h3>最低取引単位を比較</h3><p>1通貨・1,000通貨を必要資金へ換算</p><b>9社比較を見る →</b></Link>
          <Link href="/fx/losscut-comparison"><span>RISK RULE</span><h3>ロスカット基準を比較</h3><p>維持率・使用率・追証を分けて確認</p><b>9社比較を見る →</b></Link>
        </div>
      </section>

      <section className="fx-section" aria-labelledby="fx-provider-directory">
        <div className="section-heading">
          <div>
            <p className="section-index">05 / COST FACT SHEETS</p>
            <h2 id="fx-provider-directory">FX会社別に、適用条件まで確認する</h2>
            <p>広告のスプレッドだけでなく、最小数量・ロスカット・適用時間外を確認します。広告リンクの有無も各ページで明示します。</p>
          </div>
        </div>
        <div className="provider-directory">
          {FX_PROVIDER_LIST.map((provider) => (
            <Link href={`/fx/${provider.slug}`} key={provider.slug}>
              <span>2026-09-07 確認</span><h3>{provider.name}</h3><p>{provider.minTrade}</p><b>コストシートを見る →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="fx-section" aria-labelledby="fx-partner-title">
        <div className="section-heading">
          <div>
            <p className="section-index">06 / PARTNERED SERVICES</p>
            <h2 id="fx-partner-title">取引条件を公式サイトで確認する</h2>
            <p>以下はA8.netで提携済みの広告です。報酬額は、比較結果や掲載順位に反映しません。</p>
          </div>
        </div>
        <div className="affiliate-grid">
          <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
          <AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} />
          <AffiliateOfferCard offer={AFFILIATE_OFFERS.tossy} />
          <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
          <AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} />
          <AffiliateOfferCard offer={AFFILIATE_OFFERS['ablenet-vps']} />
          <AffiliateOfferCard offer={AFFILIATE_OFFERS['fpo-fx-guide']} />
        </div>
        <p className="affiliate-disclosure">
          広告リンク経由で申込み等が行われた場合、当サイトが報酬を受け取ることがあります。
          取引条件やリスクはリンク先の公式情報を必ず確認してください。
        </p>
      </section>

      <section className="fx-next">
        <div><span>NEXT</span><h2>まず、自分の数量で試算する。</h2></div>
        <p>公称スプレッドを率に直して入力すれば、取引金額に対する負担を円で確認できます。</p>
        <Link className="button primary" href="/tools/cost-calculator">無料計算機を開く</Link>
      </section>
    </div>
  );
}
