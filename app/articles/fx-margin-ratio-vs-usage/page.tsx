import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/fx-margin-ratio-vs-usage' },
  title: 'くりっく365 証拠金維持率｜50％ロスカット・100％アラートの計算',
  description: 'くりっく365の証拠金維持率を、時価評価総額÷必要証拠金の式、GMOクリック証券の50％ロスカット・100％アラート、追加証拠金との違いで整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FX RISK RATIO</p>
      <h1>くりっく365の証拠金維持率<br/>50％ロスカットと100％アラート</h1>
      <p className="lede">くりっく365 証拠金維持率は、時価評価総額が必要証拠金に対してどれだけ残っているかを示します。GMOクリック証券では100％未満でロスカットアラート、50％未満でロスカットですが、取扱会社ごとの基準も確認してください。</p>
      <div className="callout"><strong>結論：維持率は「時価評価総額÷必要証拠金×100」</strong><p>数字が高いほど余裕があります。GMOクリック証券のくりっく365は、証拠金維持率が100％を下回るとアラート、50％を下回るとロスカットです。相場急変時は基準値どおりの約定を保証できません。</p></div>
      <p className="panel-note">公式条件の確認日：2026年9月14日。ロスカット水準・追加証拠金の時刻・必要証拠金基準額は取扱会社や取引所の更新で変わる場合があります。</p>

      <h2>くりっく365の証拠金維持率を計算する</h2>
      <div className="formula-box"><code>証拠金維持率 ＝ 時価評価総額 ÷ 必要証拠金 × 100</code><small>会社ごとの定義と計算対象を優先</small></div>
      <p>有効証拠金が10万円、必要証拠金が8万円なら維持率は125%です。相場が逆行して有効証拠金が減ると維持率は下がり、会社が定める基準へ近づきます。</p>
      <p>GMOクリック証券の公式例では、口座残高50万円、1万通貨あたり必要証拠金4万円の建玉を10単位保有すると、必要証拠金は40万円、証拠金維持率は125％です。</p>
      <p>取引終了時の値洗いで時価評価総額が必要証拠金を下回ると、追加証拠金が発生します。GMOクリック証券では翌営業日の午前3時までに入金または全建玉の決済が必要で、期限を過ぎると任意決済の対象です。</p>

      <h2>使用率は高いほど余裕が少ない</h2>
      <div className="formula-box"><code>証拠金使用率 ＝ 必要証拠金 ÷ 口座価値等 × 100</code><small>名称や分母はサービスの定義を確認</small></div>
      <p>同じ10万円と8万円を単純化して当てはめると使用率は80%です。必要証拠金が口座価値に近づくほど100%へ上がります。サクソバンク証券は証拠金使用率が100%に達するとロスカットと案内しています。</p>

      <h2>100%だけを横並びにしない</h2>
      <p>くりっく365では、GMOクリック証券のように100％未満をアラート、50％未満をロスカットとする例があります。一方、LIGHT FXやみんなのFXは証拠金維持率100%以下をロスカット基準、サクソバンク証券は証拠金使用率100%への到達を基準として案内しています。表面上は同じ100%でも、指標と取扱会社が異なります。</p>
      <ul>
        <li>指標名は「維持率」「有効比率」「使用率」のどれか</li>
        <li>基準は「以下」「未満」「達したとき」のどれか</li>
        <li>リアルタイム判定か、特定時刻の追証判定か</li>
        <li>一部決済か、全建玉の強制決済か</li>
      </ul>

      <div className="callout"><strong>ロスカットは損失上限ではありません</strong><p>相場急変や流動性低下で基準を大きく超えて約定し、預けた証拠金を上回る損失が発生する場合があります。アラート通知の受信も保証されません。</p></div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.click-sec.com/corp/guide/c365/study/02.html" target="_blank" rel="noopener noreferrer">GMOクリック証券「証拠金・レバレッジ・証拠金維持率」</a></li>
          <li><a href="https://www.click-sec.com/corp/guide/c365/rule/" target="_blank" rel="noopener noreferrer">GMOクリック証券「くりっく365取引ルール（個人）」</a></li>
          <li><a href="https://lightfx.jp/service/outline/" target="_blank" rel="noopener noreferrer">LIGHT FX「サービス概要」</a></li>
          <li><a href="https://min-fx.jp/lineup/fx/service/outline/" target="_blank" rel="noopener noreferrer">みんなのFX「サービス概要」</a></li>
          <li><a href="https://www.home.saxo/ja-jp/rates-and-conditions/forex/trading-conditions" target="_blank" rel="noopener noreferrer">サクソバンク証券「FX取引概要」</a></li>
        </ul>
        <p>内容は2026年9月14日に確認しました。</p>
      </section>

      <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を逆算する →</Link></p>
      <p><Link href="/fx/losscut-comparison">FX9社のロスカット基準比較を見る →</Link></p>
      <p><Link href="/articles/dmm-fx-margin-call-losscut">DMM FXの追証とロスカットを具体例で見る →</Link></p>
      <p><Link href="/articles/fx-required-margin">必要証拠金の計算方法を見る →</Link></p>
    </article>
  );
}
