import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/fx/minimum-trade-unit-comparison' },
  title: 'FX9社の最低取引単位比較｜1通貨・1,000通貨の必要資金',
  description: '国内FX9社の最低取引単位を比較。米ドル円150円・レバレッジ25倍の共通条件で、1通貨・1,000通貨の取引金額と理論証拠金を試算します。',
};

const PROVIDERS = [
  {
    name: 'MATSUI FX',
    href: '/fx/matsui',
    minimum: '1通貨',
    notional: '150円',
    margin: '6円',
    exception: '1通貨単位から取引可能',
    source: 'https://www.matsui.co.jp/fx/',
  },
  {
    name: 'DMM FX',
    href: '/fx/dmm-fx',
    minimum: 'ミニ1,000通貨',
    notional: '15万円',
    margin: '6,000円',
    exception: '通常・ラージ通貨ペアは1万通貨。ミニは4通貨ペア',
    source: 'https://fx.dmm.com/fx/service/outline/',
  },
  {
    name: 'GMOクリック証券 FXネオ',
    href: '/fx/gmo-click',
    minimum: '1,000通貨',
    notional: '15万円',
    margin: '6,000円',
    exception: 'HUF/JPY・ZAR/JPY・MXN/JPYは1万通貨から',
    source: 'https://www.click-sec.com/corp/guide/fxneo/rule/index.html',
  },
  {
    name: 'LIGHT FX',
    href: '/fx/lightfx',
    minimum: '1,000通貨',
    notional: '15万円',
    margin: '6,000円',
    exception: 'RUB/JPY・HUF/JPY等は1万通貨から',
    source: 'https://lightfx.jp/service/outline/',
  },
  {
    name: 'ヒロセ通商 LION FX',
    href: '/fx/lion-fx',
    minimum: '基本1,000通貨',
    notional: '15万円',
    margin: '6,000円',
    exception: '一部通貨ペアは取引単位が異なる',
    source: 'https://hirose-fx.co.jp/category/hirose/lionfx/lfx/',
  },
  {
    name: 'JFX MATRIX TRADER',
    href: '/fx/jfx',
    minimum: '基本1,000通貨',
    notional: '15万円',
    margin: '6,000円',
    exception: 'MXN/JPY・NOK/JPYなど6通貨ペアは1万通貨から',
    source: 'https://www.jfx.co.jp/trading_rule/',
  },
  {
    name: 'みんなのFX',
    href: '/fx/minna-fx',
    minimum: '基本1,000通貨',
    notional: '15万円',
    margin: '6,000円',
    exception: 'RUB/JPY・HUF/JPY等は1万通貨から',
    source: 'https://min-fx.jp/lineup/fx/service/outline/',
  },
  {
    name: '三菱UFJ eスマート証券 FX',
    href: '/fx/au-kabucom-fx',
    minimum: 'ミニ1,000通貨',
    notional: '15万円',
    margin: '6,000円',
    exception: 'ZAR/JPY・HUF/JPYのミニは1万通貨から',
    source: 'https://kabu.com/item/fx/sys/rule.html',
  },
  {
    name: 'サクソバンク証券 FX',
    href: '/fx/saxo',
    minimum: '基本1,000通貨',
    notional: '15万円',
    margin: '6,000円',
    exception: 'マイナー・エマージング通貨は最小数量が異なる場合あり',
    source: 'https://www.home.saxo/ja-jp/rates-and-conditions/forex/trading-conditions',
  },
] as const;

export default function Page() {
  return (
    <div className="comparison-page fx-unit-comparison-page">
      <header className="comparison-intro fx-unit-comparison-intro">
        <div>
          <p className="page-kicker">FX MINIMUM TRADE SIZE / PUBLISHED DATA</p>
          <h1>FXの最低取引単位を、<br /><em>必要資金に直す。</em></h1>
          <p className="lede">「1通貨」と「1,000通貨」では、最初に持つポジションが1,000倍違います。9社の公式条件をそろえ、米ドル円の同じ価格で資金差を試算しました。</p>
        </div>
        <aside>
          <span>CHECKED</span><strong>2026-09-07</strong>
          <p>最低取引単位は各社の公称値。必要資金は為替レートを固定した試算値です。</p>
        </aside>
      </header>

      <section className="comparison-result" aria-labelledby="fx-unit-comparison-title">
        <div className="comparison-result-head">
          <div><p className="section-index">01 / SAME CONDITIONS</p><h2 id="fx-unit-comparison-title">米ドル円150円・25倍で試算</h2></div>
          <div className="method-labels compact-labels">
            <div><b>公称値</b><p>最低取引単位</p></div>
            <div><b>試算値</b><p>取引金額と理論証拠金</p></div>
          </div>
        </div>
        <div className="data-panel"><div className="table-scroll">
          <table className="rates comparison-table fx-unit-table">
            <thead><tr><th>サービス</th><th className="num">最低取引単位</th><th className="num">取引金額</th><th className="num">25倍の理論証拠金</th><th>例外・条件</th></tr></thead>
            <tbody>
              {PROVIDERS.map((provider) => (
                <tr key={provider.name}>
                  <td className="ex-name"><Link href={provider.href}>{provider.name}</Link></td>
                  <td className="num result-value">{provider.minimum}</td>
                  <td className="num">{provider.notional}</td>
                  <td className="num">{provider.margin}</td>
                  <td><small>{provider.exception}</small></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="panel-note">試算式は「150円 × 通貨数 ÷ 25」。実際の必要証拠金はレート、通貨ペア、レバレッジ設定、各社の算定・端数処理により異なります。余裕資金や損失に耐えられる額を示すものではありません。</p></div>
      </section>

      <section className="comparison-section split-explain">
        <div><p className="section-index">02 / DIFFERENCE</p><h2>最小サイズは、損益の動き方も変える</h2></div>
        <div>
          <p>米ドル円が1円動いた場合、1通貨の損益は1円、1,000通貨では1,000円です。必要証拠金だけでなく、想定と逆方向へ動いたときの金額も同じ通貨数で確認します。</p>
          <div className="formula-box"><code>1円の値動き × 1,000通貨 ＝ 1,000円の損益</code><small>スワップ、スプレッド、手数料を含まない単純な損益例</small></div>
          <p>少額で操作や値動きを確認したい場合は、最低取引単位が小さいほどポジション量を細かく調整できます。一方、最低単位が小さいこと自体が利益や安全性を保証するわけではありません。</p>
        </div>
      </section>

      <section className="comparison-section">
        <p className="section-index">03 / BEFORE YOU TRADE</p><h2>「最低額」だけで決めない</h2>
        <div className="fx-metric-grid comparison-points">
          <article><b>01</b><h3>通貨ペアの例外</h3><p>最低1,000通貨の会社でも、一部の高金利通貨などは1万通貨からの場合があります。</p></article>
          <article><b>02</b><h3>余裕資金</h3><p>理論証拠金ぴったりでは、小さな逆行でもロスカットに近づきます。必要額と運用額は分けて考えます。</p></article>
          <article><b>03</b><h3>スプレッド</h3><p>同じスプレッドでも通貨数が増えるほど円換算の負担が増えます。注文時の提示値を確認します。</p></article>
          <article><b>04</b><h3>ロスカット</h3><p>判定基準、執行方法、強制決済手数料の有無は会社ごとに異なります。</p></article>
        </div>
      </section>

      <section className="comparison-sources" aria-labelledby="fx-unit-sources">
        <div><p className="section-index">04 / SOURCES</p><h2 id="fx-unit-sources">公式取引条件</h2></div>
        <ul>
          {PROVIDERS.map((provider) => <li key={provider.name}><a href={provider.source} target="_blank" rel="noopener noreferrer"><span>{provider.name}</span><b>公式情報 ↗</b></a></li>)}
        </ul>
        <p>条件は変更される場合があります。申込み・取引前に、公式サイトと契約締結前交付書面で最新条件を確認してください。</p>
      </section>

      <div className="comparison-actions">
        <Link className="button secondary" href="/articles/jfx-lot-trade-unit">JFXの1Lot例外を詳しく見る</Link>
        <Link className="button primary" href="/tools/cost-calculator">自分の数量でコストを試算</Link>
        <Link className="button secondary" href="/fx">FXコスト比較へ戻る</Link>
      </div>
    </div>
  );
}
