import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/minna-fx-slippage-execution' },
  title: 'みんなのFXのスリッページ設定｜約定率と許容幅の考え方',
  description: 'みんなのFXのスリッページの意味、許容幅を広く・狭くする違い、約定率と表示スプレッドを分けて確認する方法を整理します。',
};

const faq = [
  { q: 'スリッページとは何ですか？', a: '注文時に指定したレートと実際に約定したレートに生じるかい離です。為替相場の変動などで発生します。' },
  { q: 'スリッページ幅を広くするとどうなりますか？', a: '約定を優先しやすくなる一方、指定レートから離れた価格で約定する可能性があります。価格を優先する場合はゼロまたは狭い幅を検討します。' },
  { q: 'スプレッドが狭ければ実質コストも必ず低いですか？', a: '必ずしもそうではありません。スリッページ、相場急変、約定結果との差も含めて、取引履歴の実績で確認します。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/minna-fx-slippage-execution', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">みんなのFX / EXECUTION</p>
    <h1>みんなのFXのスリッページ設定<br />約定率と許容幅の考え方</h1>
    <p className="lede">スプレッド比較では見落としやすい「スリッページ」を、注文設定と約定履歴の両面から確認します。約定を優先するか、価格を優先するかで許容幅の考え方が変わります。</p>

    <div className="callout"><strong>発注前に決めること</strong><ul><li>注文時レートからの許容幅</li><li>約定を優先するか、価格を優先するか</li><li>重要指標・週明けなど流動性が低い時間帯を避けるか</li></ul></div>

    <h2>許容幅による違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>設定</th><th>約定しやすさ</th><th>価格のずれ</th><th>向いている確認</th></tr></thead><tbody>
      <tr><td className="ex-name">広め</td><td>約定を優先しやすい</td><td>大きくなる可能性</td><td>急変時に約定機会を確保</td></tr>
      <tr><td className="ex-name">狭め</td><td>成立しない場合が増える</td><td>抑えやすい</td><td>指定価格を重視</td></tr>
      <tr><td className="ex-name">ゼロ</td><td>ずれを許容しない</td><td>設定上はなし</td><td>不成立リスクを理解した上で使用</td></tr>
    </tbody></table></div></div>
    <p>スリッページの設定は注文時の許容範囲を指定する機能で、利益や損失を保証するものではありません。成行・ストリーミングなど注文種別ごとの対応は、取引ツールの最新マニュアルを確認します。</p>

    <h2>実質コストを自社データで確認する</h2>
    <ol><li>注文時の表示レート・スプレッドを記録する</li><li>約定履歴から約定レートとの差をpips換算する</li><li>時間帯、通貨ペア、注文数量ごとに集計する</li><li>公式の提示スプレッドと実績値を分けて掲載する</li></ol>
    <div className="fx-formula"><span>実績差分</span><strong>約定レート − 注文時レート</strong><b>＝ スリッページ（pips）</b><small>符号は売買方向で変わります。自社計測値は対象期間・件数・計測条件を併記します。</small></div>
    <p>公式ページでも、広告表示のスプレッドと実質的な約定結果が一致しない場合があると案内されています。比較時は「提示値」と「実績値」を同じものとして扱わないことが重要です。</p>
    <p><Link href="/articles/minna-fx-spread-light-pair">提示スプレッドと時間帯を確認する →</Link></p>
    <p><Link href="/fx/minna-fx">みんなのFXの取引条件一覧を見る →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照したみんなのFX公式資料</h2><ul>
      <li><a href="https://min-fx.jp/lineup/fx/service/slippage/" target="_blank" rel="noopener noreferrer">みんなのFX「スリッページについて」</a></li>
      <li><a href="https://min-fx.jp/lineup/fx/service/execution/" target="_blank" rel="noopener noreferrer">みんなのFX「FX約定率について」</a></li>
      <li><a href="https://min-fx.jp/lineup/fx/service/spread/" target="_blank" rel="noopener noreferrer">みんなのFX「スプレッドについて」</a></li>
    </ul><p>注文設定・約定・スプレッドの説明は2026年9月10日に確認しました。最新の公式案内と取引画面を優先してください。</p></section>

    <p className="affiliate-disclosure">本記事はみんなのFXの公式情報を整理したものです。提携広告の有無や報酬額は、取引条件・リスクの評価に影響しません。FXは元本および利益が保証されず、損失が生じる場合があります。</p>
    <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
  </article>;
}
