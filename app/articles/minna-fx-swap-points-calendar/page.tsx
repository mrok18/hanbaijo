import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/minna-fx-swap-points-calendar' },
  title: 'みんなのFXのスワップポイント｜付与日・途中受取・計算方法',
  description: 'みんなのFXのスワップポイントが付与される条件、途中受取、日々変動する金額の確認方法とリスクを公式情報で整理します。',
};

const faq = [
  { q: 'みんなのFXのスワップはいつ付与されますか？', a: 'ポジションをNYクローズをまたいで保有すると、メンテナンス終了時にスワップが付与されます。当日のNYクローズ前に決済した場合は付与されません。' },
  { q: 'スワップポイントは毎日同じですか？', a: '同じではありません。各国の金利情勢や市場環境で日々変動し、受取りと支払いの方向が逆転する可能性もあります。' },
  { q: 'ポジションを決済せずにスワップだけ受け取れますか？', a: '公式案内ではスワップの途中受取に対応しています。受取操作の条件・対象ポジションは取引画面と最新の取引ルールを確認してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/minna-fx-swap-points-calendar', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">みんなのFX / SWAP</p>
    <h1>みんなのFXのスワップポイント<br />付与日・途中受取・計算方法</h1>
    <p className="lede">スワップポイントは、受取額だけでなく「いつ付与されるか」「売りでは支払いになるか」「為替損益とどう分けるか」を確認して判断します。金額は固定ではないため、公式の最新一覧と取引画面を優先します。</p>

    <div className="callout"><strong>スワップ確認の基本</strong><ul><li>NYクローズをまたいで保有し、メンテナンス終了時に付与</li><li>0.1Lotは1Lot表示額の10分の1が目安</li><li>金利情勢で金額・受払方向が変わる</li><li>高金利通貨は価格変動とスプレッド拡大にも注意</li></ul></div>

    <h2>付与タイミングとポジションの扱い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>状態</th><th>スワップ</th><th>確認ポイント</th></tr></thead><tbody>
      <tr><td className="ex-name">NYクローズをまたいで保有</td><td>メンテナンス終了時に付与</td><td>買い・売りの受払方向を確認</td></tr>
      <tr><td className="ex-name">当日のNYクローズ前に決済</td><td>付与されない</td><td>保有時間だけで判断しない</td></tr>
      <tr><td className="ex-name">0.1Lotで保有</td><td>1Lot表示額の10分の1が目安</td><td>1円未満の端数処理を確認</td></tr>
      <tr><td className="ex-name">途中受取を実行</td><td>ポジションを残して受取可能</td><td>対象条件と操作画面を確認</td></tr>
    </tbody></table></div></div>
    <p>付与日をまたぐ回数だけで収益を約束できるものではありません。スワップの変動に加え、為替レートの変動で元本割れやロスカットが発生する可能性があります。</p>

    <h2>スワップを年額に換算するときの注意</h2>
    <div className="fx-formula"><span>単純換算</span><strong>1日あたりのスワップ × 保有日数</strong><b>− 為替損益・スプレッド・資金コスト</b><small>一定額が続く前提の試算です。実績値は日々変わるため、過去の金額を将来の保証として扱いません。</small></div>
    <p>例えば1Lotあたり100円が365日続く場合は36,500円ですが、公式もこの計算を「スワップが変動しなかった場合」としています。高金利通貨ほど受取額が大きく見えても、相場急変・流動性低下・スプレッド拡大の影響を受けやすい点を併記します。</p>

    <h2>注文前に見る4つの数字</h2>
    <ol><li>取引数量（1Lot・0.1Lot）</li><li>買い・売りそれぞれのスワップ</li><li>スプレッドと適用時間</li><li>必要証拠金、維持率、ロスカットまでの余力</li></ol>
    <p><Link href="/fx/swap-calendar-comparison">FX各社のスワップカレンダーを比較する →</Link></p>
    <p><Link href="/articles/minna-fx-spread-light-pair">みんなのFXのスプレッドとLIGHTペアを確認する →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照したみんなのFX公式資料</h2><ul>
      <li><a href="https://min-fx.jp/lineup/fx/service/swap/" target="_blank" rel="noopener noreferrer">みんなのFX「スワップについて」</a></li>
      <li><a href="https://min-fx.jp/lineup/fx/service/outline/" target="_blank" rel="noopener noreferrer">みんなのFX「サービス概要」</a></li>
    </ul><p>スワップの仕組み・付与条件は2026年9月10日に確認しました。金額は日々変動するため、取引前に公式の最新一覧を確認してください。</p></section>

    <p className="affiliate-disclosure">本記事はみんなのFXの公式情報を整理したものです。提携広告の有無や報酬額は、取引条件・リスクの評価に影響しません。FXは元本および利益が保証されず、損失が生じる場合があります。</p>
    <p><Link href="/fx/minna-fx">みんなのFXの取引条件一覧へ →</Link></p>
    <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
  </article>;
}
