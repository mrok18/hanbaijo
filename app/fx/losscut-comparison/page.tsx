import Link from 'next/link';

export const metadata = {
  title: 'FX9社のロスカット基準比較｜追証・アラートとの違い',
  description: '国内FX9社の個人口座について、ロスカットの判定指標・発動基準・追証やアラートを公式取引ルールから比較します。',
};

const PROVIDERS = [
  {
    name: 'MATSUI FX', href: '/fx/matsui', metric: 'リアルタイム維持率', trigger: '選択した50〜90%を下回る',
    before: 'プレアラート120%・アラート100%。取引日最終時点で100%未満は追加証拠金',
    note: '個人は50・60・70・80・90%から選択。初期設定は50%', source: 'https://www.matsui.co.jp/fx/rule/',
  },
  {
    name: 'GMOクリック証券 FXネオ', href: '/fx/gmo-click', metric: '証拠金維持率', trigger: '50%を下回る',
    before: 'アラート100%。NYクローズ時点で100%未満は追加証拠金',
    note: '強制決済時は原則1万通貨あたり税込500円', source: 'https://www.click-sec.com/corp/guide/fxneo/rule/',
  },
  {
    name: 'DMM FX', href: '/fx/dmm-fx', metric: '証拠金維持率', trigger: '50%以下',
    before: '営業日終了時点で100%未満は追加証拠金',
    note: '未約定注文を取消し、全未決済ポジションを強制決済', source: 'https://fx.dmm.com/support/faqs/article/00128/',
  },
  {
    name: 'LIGHT FX', href: '/fx/lightfx', metric: '証拠金維持率', trigger: '100%以下',
    before: 'ロスカット通知・証拠金不足通知あり',
    note: 'FX口座の全建玉を自動決済', source: 'https://lightfx.jp/service/outline/',
  },
  {
    name: 'ヒロセ通商 LION FX', href: '/fx/lion-fx', metric: '有効比率', trigger: '100%未満',
    before: '追証制度なし',
    note: '不足金が出た場合は支払いが必要', source: 'https://hirose-fx.co.jp/category/hirose/lionfx/lfx/',
  },
  {
    name: 'JFX MATRIX TRADER', href: '/fx/jfx', metric: '有効比率', trigger: '100%未満',
    before: '200%未満でアラートメール',
    note: '判定には1〜10秒程度かかる場合あり。ロスカット手数料0円', source: 'https://www.jfx.co.jp/trading_rule/',
  },
  {
    name: 'みんなのFX', href: '/fx/minna-fx', metric: '証拠金維持率', trigger: '100%以下',
    before: 'ロスカット通知・証拠金不足通知あり',
    note: 'FX口座の全建玉を自動決済', source: 'https://min-fx.jp/lineup/fx/service/outline/',
  },
  {
    name: '三菱UFJ eスマート証券 FX', href: '/fx/au-kabucom-fx', metric: '時価評価額 ÷ 必要証拠金', trigger: '75%を下回る',
    before: '取引終了後の判定で100%未満は追証',
    note: '未約定注文の取消し後、全建玉を強制決済', source: 'https://kabu.com/item/fx/sys/rule.html',
  },
  {
    name: 'サクソバンク証券 FX', href: '/fx/saxo', metric: '証拠金使用率', trigger: '100%に達する',
    before: '使用率75%・90%でアラート',
    note: '他社の「維持率」と数値の向きが逆。取引ツールで銘柄条件を確認', source: 'https://www.home.saxo/ja-jp/rates-and-conditions/forex/trading-conditions',
  },
] as const;

export default function Page() {
  return (
    <div className="comparison-page fx-losscut-comparison-page">
      <header className="comparison-intro fx-losscut-comparison-intro">
        <div>
          <p className="page-kicker">FX LOSSCUT RULES / PUBLISHED DATA</p>
          <h1>ロスカット率を、<br /><em>同じ数字だと思わない。</em></h1>
          <p className="lede">「維持率100%」と「使用率100%」では、数字の向きが逆です。9社の個人口座について、判定指標、強制決済、アラート・追証を分けて整理しました。</p>
        </div>
        <aside>
          <span>CHECKED</span><strong>2026-09-07</strong>
          <p>各社公式取引ルールの公称条件。相場急変時の決済価格や損失額を保証するものではありません。</p>
        </aside>
      </header>

      <section className="comparison-result" aria-labelledby="fx-losscut-title">
        <div className="comparison-result-head">
          <div><p className="section-index">01 / TRIGGER</p><h2 id="fx-losscut-title">個人口座の発動条件</h2></div>
          <span className="comparison-scope">同じ「%」でも指標名を確認</span>
        </div>
        <div className="data-panel"><div className="table-scroll">
          <table className="rates comparison-table fx-losscut-table">
            <thead><tr><th>サービス</th><th>判定指標</th><th>ロスカット基準</th><th>その前の通知・追証</th><th>補足</th></tr></thead>
            <tbody>
              {PROVIDERS.map((provider) => (
                <tr key={provider.name}>
                  <td className="ex-name"><Link href={provider.href}>{provider.name}</Link></td>
                  <td><strong>{provider.metric}</strong></td>
                  <td className="result-value">{provider.trigger}</td>
                  <td>{provider.before}</td>
                  <td><small>{provider.note}</small></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div><p className="panel-note">表現は比較しやすいよう要約しています。判定間隔、未約定注文の扱い、追証期限、両建て時の算定などは各社で異なります。取引前に公式ルールと契約締結前交付書面を確認してください。</p></div>
      </section>

      <section className="comparison-section split-explain">
        <div><p className="section-index">02 / TWO RATIOS</p><h2>維持率は高いほど余裕、使用率は低いほど余裕</h2></div>
        <div>
          <p>証拠金維持率は一般に「有効証拠金 ÷ 必要証拠金」で、数値が下がるほどロスカットへ近づきます。一方、サクソバンク証券の証拠金使用率は、数値が上がって100%へ達すると発動します。</p>
          <div className="formula-box"><code>維持率 ＝ 有効証拠金 ÷ 必要証拠金 × 100</code><small>名称・計算に含む項目は各社の定義を優先</small></div>
          <p>比較表で同じ100%に見えても、「100%以下で発動」と「100%に達すると発動」では計算の分母・分子が異なります。</p>
        </div>
      </section>

      <section className="comparison-section">
        <p className="section-index">03 / THREE SEPARATE EVENTS</p><h2>通知・追証・ロスカットを分ける</h2>
        <div className="fx-metric-grid comparison-points">
          <article><b>01</b><h3>アラート</h3><p>基準へ近づいたことを知らせるもの。通知の遅延や未確認を前提に、自分でも余力を確認します。</p></article>
          <article><b>02</b><h3>追証</h3><p>特定時刻の判定で不足額の差し入れを求める制度。解消期限と解消方法を確認します。</p></article>
          <article><b>03</b><h3>ロスカット</h3><p>基準到達後の強制決済。基準価格での約定を保証せず、預入額を超える損失もあり得ます。</p></article>
          <article><b>04</b><h3>強制決済手数料</h3><p>通常手数料0円でも、GMOクリック証券など強制決済時だけ費用が発生する場合があります。</p></article>
        </div>
      </section>

      <section className="comparison-sources" aria-labelledby="fx-losscut-sources">
        <div><p className="section-index">04 / SOURCES</p><h2 id="fx-losscut-sources">公式取引ルール</h2></div>
        <ul>{PROVIDERS.map((provider) => <li key={provider.name}><a href={provider.source} target="_blank" rel="noopener noreferrer"><span>{provider.name}</span><b>公式情報 ↗</b></a></li>)}</ul>
        <p>制度・基準は変更される場合があります。本ページは個人口座の概要比較であり、法人口座には別条件があります。</p>
      </section>

      <div className="comparison-actions">
        <Link className="button secondary" href="/articles/jfx-losscut-margin-shortage">JFXの判定と不足金を詳しく見る</Link>
        <Link className="button primary" href="/fx/minimum-trade-unit-comparison">最低取引単位も比較</Link>
        <Link className="button secondary" href="/fx">FXコスト比較へ戻る</Link>
      </div>
    </div>
  );
}
