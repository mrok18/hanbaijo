import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
import { FX_PROVIDER_LIST } from '@/lib/fx-providers';

export const metadata: Metadata = {
  title: 'FX会社比較｜スプレッド・スワップ・取引コスト【2026年】',
  description: 'FX会社をスプレッドだけで選ばないために、年間コスト、スワップ、最小取引単位、ロスカットを共通条件で比較。無料計算機で自分の数量に換算できます。',
  alternates: { canonical: '/fx' },
};

const REVIEW_TARGETS = [
  { name: 'DMM FX', scope: 'FX', status: '公式条件を整理済み・広告提携状況を確認中', href: '/fx/dmm-fx' },
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
            <Link className="button secondary" href="/articles/fx-spread-cost">0.2銭が何円か計算</Link>
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

      <section className="fx-section" aria-labelledby="fx-calculator-shortcuts">
        <div className="section-heading">
          <div>
            <p className="section-index">START HERE / FREE CALCULATORS</p>
            <h2 id="fx-calculator-shortcuts">目的に合う数字を、すぐ計算する</h2>
            <p>入力した条件は端末内で計算します。口座申込みや個人情報の入力は不要です。</p>
          </div>
        </div>
        <div className="provider-directory comparison-guide-directory">
          <Link href="/tools/fx-spread-annual-cost-calculator"><span>ANNUAL SPREAD COST</span><h3>年間のスプレッド負担</h3><p>数量・1日の取引回数・取引日数から円換算</p><b>年間コストを試算 →</b></Link>
          <Link href="/tools/fx-swap-break-even-calculator"><span>SWAP BREAK-EVEN</span><h3>スワップの回収日数</h3><p>スプレッドと手数料を何日で回収できるか計算</p><b>回収日数を試算 →</b></Link>
          <Link href="/tools/fx-position-size-calculator"><span>POSITION SIZE</span><h3>損失上限から取引数量</h3><p>資金・許容損失率・損切り幅からLotを計算</p><b>適正数量を試算 →</b></Link>
          <Link href="/tools/fx-tax-calculator"><span>FX TAX</span><h3>利益から税額の目安</h3><p>利益と必要経費から課税対象額を整理</p><b>税額を試算 →</b></Link>
        </div>
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
          <Link href="/fx/usdjpy-spread-comparison"><span>USD/JPY SPREAD</span><h3>米ドル円スプレッドを比較</h3><p>時間帯・数量条件・1万通貨コスト</p><b>10社比較を見る →</b></Link>
          <Link href="/fx/swap-calendar-comparison"><span>SWAP CALENDAR</span><h3>スワップの表示ルールを比較</h3><p>表示単位・付与日数・実現タイミング</p><b>10社比較を見る →</b></Link>
          <Link href="/fx/minimum-trade-unit-comparison"><span>TRADE SIZE</span><h3>最低取引単位を比較</h3><p>1通貨・1,000通貨を必要資金へ換算</p><b>9社比較を見る →</b></Link>
          <Link href="/fx/losscut-comparison"><span>RISK RULE</span><h3>ロスカット基準を比較</h3><p>維持率・使用率・追証を分けて確認</p><b>9社比較を見る →</b></Link>
          <Link href="/articles/rakuten-fx-fees-total-cost"><span>RAKUTEN FX FEES</span><h3>楽天証券FXの手数料を確認</h3><p>無料の範囲・0.2銭の円換算・スワップ</p><b>総コストを見る →</b></Link>
          <Link href="/articles/fx-etax-input-guide"><span>E-TAX INPUT</span><h3>FXの確定申告を入力順に確認</h3><p>先物取引・経費・繰越損失・送信</p><b>e-Tax準備を見る →</b></Link>
          <Link href="/articles/fx-loss-carryforward-filing"><span>LOSS CARRYFORWARD</span><h3>FX損失を3年間繰り越す</h3><p>損失年・無取引年・利益年の連続申告</p><b>必要書類と手順を見る →</b></Link>
          <Link href="/articles/domestic-vs-overseas-fx-tax"><span>DOMESTIC VS OVERSEAS</span><h3>国内FXと海外FXの税務を比較</h3><p>申告分離課税・総合課税・登録確認</p><b>税金と注意点を見る →</b></Link>
          <Link href="/articles/fx-tax-rate-calculation"><span>FX TAX RATE</span><h3>20.315％の内訳を計算</h3><p>所得税・復興特別所得税・地方税</p><b>税額の早見表を見る →</b></Link>
          <Link href="/articles/fx-profit-under-200k-tax-return"><span>200,000 YEN RULE</span><h3>20万円以下の申告要否</h3><p>所得税・住民税・還付申告を分ける</p><b>申告条件を見る →</b></Link>
          <Link href="/articles/fx-tax-deductible-expenses"><span>FX EXPENSES</span><h3>必要経費の判断基準を確認</h3><p>PC・通信費・VPS・書籍・家事按分</p><b>経費ガイドを見る →</b></Link>
          <Link href="/articles/fx-annual-transaction-report-tax-return"><span>ANNUAL REPORT</span><h3>年間取引報告書を集計</h3><p>決済損益・スワップ・手数料・複数口座</p><b>確定申告準備を見る →</b></Link>
          <Link href="/articles/fx-profit-loss-offset-tax"><span>FX TAX GUIDE</span><h3>損益通算と3年繰越を確認</h3><p>CFD・先物・株・暗号資産との区分</p><b>税務の整理を見る →</b></Link>
          <Link href="/articles/fx-multiple-accounts-cost-risk"><span>MULTIPLE ACCOUNTS</span><h3>2社利用の資金・損益を管理</h3><p>証拠金分散・ロスカット・年間集計</p><b>メリットと注意点を見る →</b></Link>
          <Link href="/articles/fx-company-selection-cost-checklist"><span>7-POINT CHECKLIST</span><h3>FX会社を選ぶ順番を確認</h3><p>スプレッド・約定・スワップ・リスク条件</p><b>口座比較7項目を見る →</b></Link>
          <Link href="/articles/fx-cfd-futures-margin-comparison"><span>CROSS-ASSET MARGIN</span><h3>FX・CFD・先物の証拠金を比較</h3><p>取引単位・1単位損益・追証と期限</p><b>3商品の違いを見る →</b></Link>
          <Link href="/articles/fx-spread-difference-annual-cost"><span>ANNUAL COST GAP</span><h3>0.1銭差を年間コストに換算</h3><p>数量・1日回数・年間240日で比較</p><b>年間早見表を見る →</b></Link>
          <Link href="/articles/fx-spread-monthly-cost"><span>MONTHLY SPREAD COST</span><h3>月間コストを取引回数で計算</h3><p>0.2銭を数量・1日回数・20日で円換算</p><b>月間早見表を見る →</b></Link>
          <Link href="/articles/jfx-swap-calendar"><span>JFX SWAP CALENDAR</span><h3>JFXの3倍デーと付与時刻</h3><p>6時59分・5時59分、祝日の付与日数</p><b>JFXの予定表を見る →</b></Link>
          <Link href="/articles/dmm-fx-trading-hours-maintenance"><span>DMM FX SESSION</span><h3>DMM FXの取引時間を確認</h3><p>夏時間・冬時間・営業日切替・週末メンテナンス</p><b>取引時間を見る →</b></Link>
          <Link href="/articles/matsui-fx-leverage-margin"><span>MATSUI MARGIN</span><h3>松井証券FXの証拠金を計算</h3><p>25倍・10倍・5倍・1倍の必要証拠金</p><b>レバレッジを比較 →</b></Link>
          <Link href="/articles/matsui-fx-insufficient-funds"><span>MATSUI SHORTAGE</span><h3>松井証券FXの不足金を確認</h3><p>受渡日15時・入金・追証との違い</p><b>解消手順を見る →</b></Link>
          <Link href="/articles/fpo-fx-master-guide-before-download"><span>FREE FX E-BOOK</span><h3>無料教材の登録条件を確認</h3><p>全128ページの範囲・受取方法・追加案内</p><b>登録前の7項目を見る →</b></Link>
          <Link href="/articles/fpo-fx-practice-checklist"><span>PRACTICE CHECKLIST</span><h3>教材の後に実践前チェック</h3><p>数量・コスト・損切り・記録</p><b>チェックリストを見る →</b></Link>
          <Link href="/articles/fx-master-guide-study-order"><span>FX STUDY ORDER</span><h3>初心者の学習順を整理</h3><p>仕組み・注文・資金管理から5段階で進む</p><b>学習ロードマップを見る →</b></Link>
          <Link href="/fx/ablenet-vps"><span>AUTO TRADING VPS</span><h3>VPSの月額総コストを確認</h3><p>本体料金・RDS・必要メモリを分けて比較</p><b>ABLENET VPSを見る →</b></Link>
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
