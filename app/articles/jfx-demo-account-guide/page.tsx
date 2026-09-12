import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/jfx-demo-account-guide' },
  title: 'JFXデモ口座でできること｜利用期間・仮想資金・本番との違い',
  description: 'JFX MATRIX TRADERのデモ口座について、約3カ月の利用期間、1万～1,000万円の仮想資金、デモレート、土日利用、本番口座との違いを整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / DEMO ACCOUNT</p>
    <h1>JFXデモ口座でできること<br />本番との違いを整理</h1>
    <p className="lede">JFXのデモトレードでは、MATRIX TRADERの画面や注文操作を仮想資金で試せます。ただし、デモレートは本番と異なり、約定環境や心理的な負担まで再現するものではありません。練習できる範囲と限界を確認します。</p>

    <h2>デモ口座の主な仕様</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>JFXデモ口座</th></tr></thead><tbody>
      <tr><td className="ex-name">利用期間</td><td>約3カ月</td></tr>
      <tr><td className="ex-name">スタート資金</td><td>1万円〜1,000万円から指定</td></tr>
      <tr><td className="ex-name">取引レート</td><td>本番と異なるデモレート</td></tr>
      <tr><td className="ex-name">土日の利用</td><td>仮想レートのため可能</td></tr>
      <tr><td className="ex-name">必要証拠金</td><td>本番の個人口座と同じ</td></tr>
      <tr><td className="ex-name">レバレッジ</td><td>25倍・変更不可</td></tr>
      <tr><td className="ex-name">ロスカット</td><td>本番と同じく有効比率100％未満</td></tr>
      <tr><td className="ex-name">スワップ</td><td>リアルタイム更新ではなく実際と異なる場合あり</td></tr>
    </tbody></table></div></div>

    <h2>練習に向いていること</h2>
    <ul>
      <li>注文画面、チャート、ポジション一覧の配置を覚える</li>
      <li>成行・ストリーミング・指値・逆指値の操作を試す</li>
      <li>クイック注文、全決済、決済pip差の設定を確認する</li>
      <li>Lot数と損益の動きを確認する</li>
      <li>損切りを先に置く取引手順を繰り返す</li>
    </ul>
    <p>初回から大きな仮想資金にせず、実際に入金予定の金額へ近づけると、取引数量と余力の感覚を練習しやすくなります。</p>

    <h2>本番のコスト・約定は再現しない</h2>
    <p>JFXはデモ版をシステム操作の体験目的とし、デモレートは本番レートと異なると明記しています。そのため、デモの利益率や約定結果を、そのまま本番の成果予測には使えません。</p>
    <div className="callout"><strong>デモで確認できるのは主に操作</strong><p>本番では実際のスプレッド、スリッページ、注文不成立、流動性、資金を失う心理が加わります。デモで勝てたことより、同じ手順を守れたかを評価します。</p></div>

    <h2>土日の取引結果は本番比較に使えない</h2>
    <p>デモは仮想レートにより土日も利用できますが、本番の外国為替市場は週末休場で、成行・ストリーミング注文は発注できません。土日は画面操作の練習時間として使い、値動きやスプレッドの検証対象にはしない方が安全です。</p>

    <h2>MT5のデモ口座ではない</h2>
    <p>提供されるのはMATRIX TRADERのデモ環境です。JFXはMT5チャートのデモ口座を提供していません。MT5は本番のMATRIX TRADER口座を開設した利用者向けの分析専用チャートで、MT5から注文はできません。</p>

    <h2>3段階で本番へ移る</h2>
    <ol>
      <li><strong>デモ：</strong>画面、注文、損切り、記録の手順を固定</li>
      <li><strong>少額：</strong>100通貨のビギナーFXまたは最小数量で実資金の心理を確認</li>
      <li><strong>通常：</strong>許容損失から計算した数量へ段階的に調整</li>
    </ol>
    <div className="formula-box"><code>取引数量 ＝ 1回の許容損失 ÷ 損切り1通貨あたりの値幅</code><small>デモの勝率ではなく、口座資金と損切り幅から本番数量を決めます。</small></div>

    <h2>有効期限が切れたら再登録</h2>
    <p>デモIDの有効期間は約3カ月です。期限後にログインできない場合は、JFX公式FAQの案内どおり再度デモ登録し、新しいIDを取得します。本番版とデモ版でログイン画面・アプリの入口が異なる点にも注意します。</p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/demo/" target="_blank" rel="noopener noreferrer">JFX「デモトレード」</a></li>
      <li><a href="https://demo-matrixtrader.jfx.co.jp/fxotcdemojfx/rest/demo/account" target="_blank" rel="noopener noreferrer">JFX「MATRIX TRADER デモ登録フォーム」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=32&amp;id=172&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「デモ版にログインできない場合」</a></li>
      <li><a href="https://www.jfx.co.jp/mt5/index.html" target="_blank" rel="noopener noreferrer">JFX「MT5が選ばれる理由」</a></li>
    </ul><p>デモ仕様は2026年9月8日に公式ページで確認しました。提供期間・対応環境・仕様は変更される場合があります。</p></section>

    <p><Link href="/articles/jfx-beginner-vs-matrix-trader">100通貨のビギナーFXと本口座を比較する →</Link></p>
    <p><Link href="/articles/jfx-mt5-tradingview-matrix-trader">MT5・TradingView・発注画面の違いを見る →</Link></p>
    <p><Link href="/articles/jfx-quick-order-settings">クイック注文の確認項目を見る →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
