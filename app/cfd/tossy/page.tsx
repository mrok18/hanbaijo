import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'TOSSYの取引コスト・証拠金率｜6資産はすべて差金決済',
  description: 'ウルトラ投資アプリTOSSYのFX、株式CFD、株価指数CFD、バラエティCFD、商品CFD、暗号資産CFDを、証拠金率・コスト・横断リスクから整理します。',
};

const assets = [
  { name: '為替（FX）', margin: '取引額の4％以上', leverage: '最大約25倍' },
  { name: '株式CFD', margin: '取引額の20％以上', leverage: '最大約5倍' },
  { name: '株価指数CFD', margin: '取引額の10％以上', leverage: '最大約10倍' },
  { name: 'バラエティCFD', margin: '取引額の20％以上', leverage: '最大約5倍' },
  { name: '商品資源CFD', margin: '取引額の5％以上', leverage: '最大約20倍' },
  { name: '暗号資産CFD', margin: '取引額の50％以上', leverage: '最大約2倍' },
] as const;

export default function Page() {
  return <div className="provider-page fx-provider-page">
    <section className="provider-hero provider-compact-hero fx-provider-hero">
      <div>
        <p className="page-kicker">MULTI-ASSET CFD FACT SHEET</p>
        <h1>ウルトラ投資アプリ<br />TOSSY</h1>
        <p className="provider-headline">6資産を1アプリで扱う。すべて差金決済として比べる。</p>
        <p className="lede">株式、為替、暗号資産、株価指数、バラエティ、商品資源を横断できます。ただし株や暗号資産の現物を保有するサービスではなく、価格差を取引するFX・CFDです。</p>
        <div className="hero-actions"><Link className="button primary" href="/articles/tossy-cfd-not-spot">現物との違いを読む</Link><Link className="button secondary" href="/tools/cfd-margin-calculator">証拠金を概算</Link></div>
      </div>
      <aside className="provider-stamp">
        <span>PUBLISHED DATA</span>
        <strong>公式資料を 2026-09-08 確認</strong>
        <dl>
          <div><dt>商品区分</dt><dd>6区分</dd></div>
          <div><dt>取引手数料</dt><dd>無料</dd></div>
          <div><dt>取引形式</dt><dd>FX・CFD</dd></div>
        </dl>
      </aside>
    </section>

    <section className="provider-section">
      <p className="section-index">01 / SIX ASSET CLASSES</p>
      <h2>6区分の証拠金率は同じではない</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>アセット区分</th><th>個人の必要証拠金</th><th>最大倍率の目安</th></tr></thead><tbody>
        {assets.map((asset) => <tr key={asset.name}><td className="ex-name">{asset.name}</td><td>{asset.margin}</td><td>{asset.leverage}</td></tr>)}
      </tbody></table></div></div>
      <p>倍率は法令・公式表示上の上限目安です。実際の必要証拠金や取引可能額は、銘柄、価格、口座状況、法人・個人の別などで変わるため、注文画面を優先します。</p>
    </section>

    <section className="provider-section provider-split">
      <div>
        <p className="section-index">02 / TOTAL COST</p>
        <h2>取引手数料0円でも、コストは残る</h2>
        <p>DMM.com証券はTOSSYのアカウント管理費と取引手数料を無料と案内しています。一方、買値と売値の差であるスプレッドは利用者負担です。</p>
        <div className="callout"><strong>保有コストも商品別に確認</strong><p>FXのスワップポイント、証券CFDの金利調整額、原資産の限月切替に伴う価格調整などが発生する場合があります。短期売買と長期保有では比較すべき負担が変わります。</p></div>
      </div>
      <div className="provider-checklist">
        <h3>注文前に確認する項目</h3>
        <ul><li>売値と買値のスプレッド</li><li>アセット区分ごとの証拠金率</li><li>スワップ・金利・価格調整</li><li>ロスカットとマージンカット</li><li>取引時間と注文単位</li></ul>
        <p>相場急変時にはスプレッドが拡大し、意図した価格で取引できない場合があります。</p>
      </div>
    </section>

    <section className="provider-section">
      <p className="section-index">03 / CROSS-ASSET RISK</p>
      <h2>1区分の証拠金不足が、他区分にも影響する</h2>
      <p>TOSSYには、各アセット区分の証拠金維持率が均一になるよう、入金した証拠金を自動で振り分ける機能があります。ただし、いずれかの区分で追加証拠金が発生すると自動振替機能は無効になり、利用者自身で対象区分へ資金を振り替える必要があります。</p>
      <div className="callout"><strong>未解消時は全区分がマージンカット対象</strong><p>公式説明書では、所定期限までに追加証拠金を解消できない場合、ロスカット処理中の区分を除き、すべてのアセット区分の保有ポジションが決済されると案内されています。資産を分けても、口座内のリスクが完全に独立するとは限りません。</p></div>
    </section>

    <section className="provider-section">
      <p className="section-index">04 / DAILY ROLLOVER</p>
      <h2>ロールオーバー時の値洗いを確認する</h2>
      <p>TOSSYの証券CFD説明書では、ポジションを翌営業日へ繰り越す際に原則として建て直しを行い、営業日終了時点の評価損益が翌営業日開始時に実現損益となる仕組みが説明されています。未決済のつもりでも、税務上の売買損益が日々発生する点に注意が必要です。</p>
      <p>商品区分ごとに取引説明書が分かれているため、利用する商品の値洗い、調整額、税務上の扱いを各書面で確認します。</p>
    </section>

    <section className="provider-source" aria-label="TOSSYの公式資料">
      <div><span>PRIMARY SOURCES</span><strong>DMM.com証券 公式情報</strong></div>
      <div className="provider-source-links">
        <a href="https://securities.dmm.com/notice/" target="_blank" rel="noopener noreferrer">手数料・リスク表示 ↗</a>
        <a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/rules.pdf" target="_blank" rel="noopener noreferrer">TOSSY約款 ↗</a>
        <a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/overview-index.pdf" target="_blank" rel="noopener noreferrer">証券CFD説明書 ↗</a>
      </div>
    </section>

    <section className="provider-no-ad">
      <div><span>DATA PERMISSION</span><h2>自動計測は、利用条件の確認後に開始します。</h2></div>
      <p>公開レートを無断で継続保存・再掲載せず、提供元から商用利用条件を確認できたデータだけを実測値として掲載します。</p>
    </section>

    <section className="provider-offer" aria-label="TOSSYの広告">
      <div className="section-heading"><div><p className="section-index">ADVERTISEMENT</p><h2>最新の取引条件を公式サイトで確認する</h2></div><p>以下はA8.netの提携広告です。掲載報酬は、公称値、計算、掲載順位に影響しません。</p></div>
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.tossy} />
    </section>
    <p className="affiliate-disclosure">TOSSYのFX・CFDは元本および利益が保証されず、預けた証拠金を上回る損失が生じる場合があります。契約締結前交付書面を確認してください。</p>

    <section className="provider-section">
      <p className="section-index">RELATED GUIDE</p>
      <h2>株・暗号資産の「現物」と混同しない</h2>
      <div className="provider-directory comparison-guide-directory"><Link href="/articles/tossy-account-opening-flow"><span>START GUIDE</span><h3>TOSSYの口座開設手順</h3><p>必要書類から取引開始前の確認まで</p><b>記事を読む →</b></Link><Link href="/articles/tossy-deposit-withdrawal-transfer"><span>FUNDING / TRANSFER</span><h3>入金・出金・振替を確認</h3><p>5,000円・2,000円・3営業日</p><b>資金移動を見る →</b></Link><Link href="/articles/tossy-tax-reporting"><span>TAX REPORT</span><h3>確定申告と報告書を確認</h3><p>アプリ・PC出力とアセット別の税区分</p><b>税務ガイドを読む →</b></Link><Link href="/articles/tossy-trading-hours-rollover"><span>HOURS & ROLLOVER</span><h3>取引時間と持越し</h3><p>休場、メンテナンス、価格調整を確認</p><b>記事を読む →</b></Link><Link href="/articles/tossy-margin-by-asset"><span>MARGIN</span><h3>6資産の必要証拠金</h3><p>100万円取引する場合の金額を比較</p><b>記事を読む →</b></Link><Link href="/articles/tossy-fees-total-cost"><span>TOTAL COST</span><h3>手数料無料と総コスト</h3><p>スプレッドと各種調整額を整理</p><b>記事を読む →</b></Link><Link href="/articles/tossy-margin-call-losscut"><span>RISK CONTROL</span><h3>追証・ロスカットの違い</h3><p>6資産へ及ぶマージンカットを確認</p><b>記事を読む →</b></Link><Link href="/articles/tossy-cfd-not-spot"><span>SPOT VS CFD</span><h3>TOSSYは現物取引ではない</h3><p>所有・受渡し・証拠金・コストの違いを整理</p><b>記事を読む →</b></Link><Link href="/tools/cfd-margin-calculator"><span>CALCULATOR</span><h3>CFD必要証拠金を概算</h3><p>価格、数量、証拠金率から計算</p><b>計算する →</b></Link></div>
    </section>

    <p className="provider-back"><Link href="/cfd">CFDコスト比較へ戻る →</Link></p>
  </div>;
}
