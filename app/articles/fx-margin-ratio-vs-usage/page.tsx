import Link from 'next/link';

export const metadata = {
  title: '証拠金維持率と使用率の違い｜100%の意味は逆',
  description: 'FXの証拠金維持率と証拠金使用率について、計算の向きとロスカット基準の読み方を具体例で解説します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FX RISK RATIO</p>
      <h1>証拠金維持率と使用率、100%の意味は逆</h1>
      <p className="lede">「100%でロスカット」と書かれていても、維持率と使用率では危険へ近づく方向が反対です。指標名を飛ばして数字だけ比べると、余力を読み違えます。</p>

      <h2>維持率は高いほど余裕がある</h2>
      <div className="formula-box"><code>証拠金維持率 ＝ 有効証拠金 ÷ 必要証拠金 × 100</code><small>会社ごとの定義と計算対象を優先</small></div>
      <p>有効証拠金が10万円、必要証拠金が8万円なら維持率は125%です。相場が逆行して有効証拠金が減ると維持率は下がり、会社が定める基準へ近づきます。</p>

      <h2>使用率は高いほど余裕が少ない</h2>
      <div className="formula-box"><code>証拠金使用率 ＝ 必要証拠金 ÷ 口座価値等 × 100</code><small>名称や分母はサービスの定義を確認</small></div>
      <p>同じ10万円と8万円を単純化して当てはめると使用率は80%です。必要証拠金が口座価値に近づくほど100%へ上がります。サクソバンク証券は証拠金使用率が100%に達するとロスカットと案内しています。</p>

      <h2>100%だけを横並びにしない</h2>
      <p>LIGHT FXやみんなのFXは証拠金維持率100%以下をロスカット基準として案内しています。一方、サクソバンク証券は証拠金使用率100%への到達が基準です。表面上は同じ100%でも計算方向が異なります。</p>
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
          <li><a href="https://lightfx.jp/service/outline/" target="_blank" rel="noopener noreferrer">LIGHT FX「サービス概要」</a></li>
          <li><a href="https://min-fx.jp/lineup/fx/service/outline/" target="_blank" rel="noopener noreferrer">みんなのFX「サービス概要」</a></li>
          <li><a href="https://www.home.saxo/ja-jp/rates-and-conditions/forex/trading-conditions" target="_blank" rel="noopener noreferrer">サクソバンク証券「FX取引概要」</a></li>
        </ul>
        <p>内容は2026年9月7日に確認しました。</p>
      </section>

      <p><Link href="/fx/losscut-comparison">FX9社のロスカット基準比較を見る →</Link></p>
      <p><Link href="/articles/dmm-fx-margin-call-losscut">DMM FXの追証とロスカットを具体例で見る →</Link></p>
      <p><Link href="/articles/fx-required-margin">必要証拠金の計算方法を見る →</Link></p>
    </article>
  );
}
