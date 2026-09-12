import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/minna-fx-order-types-expiration' },
  title: 'みんなのFXの注文方法｜成行・指値・逆指値・OCO・IFO',
  description: 'みんなのFXの注文種別、注文の有効期限、メンテナンス中の予約注文と約定の違いを公式情報で整理します。',
};

const faq = [
  { q: 'みんなのFXで使える注文方法は？', a: '公式サービス概要では、成行・ストリーミング・指値・逆指値・IFD・OCO・IFO・一括決済などが案内されています。取引ツールや通貨ペアで表示が異なる場合は、発注画面を優先します。' },
  { q: '注文の有効期限は選べますか？', a: '本日中・今週中・今月中・無期限・日付指定から選べると案内されています。指値・逆指値では期限切れによる失効を確認します。' },
  { q: 'メンテナンス中に予約注文はできますか？', a: '日次メンテナンス中も指値・逆指値などの予約は可能ですが、レート配信が停止しているためその場で約定はしません。' },
] as const;

const orderRows = [
  ['成行', 'その時点の市場価格で発注', '急変時のスリッページ'],
  ['ストリーミング', '許容スリッページを設定して発注', '幅が広いほど約定優先'],
  ['指値', '指定価格以下／以上で約定を狙う', '届かなければ未約定'],
  ['逆指値', '指定価格に到達後、成行等で発注', '損切りでも約定価格は保証されない'],
  ['IFD・OCO・IFO', '新規と決済などを組み合わせる', '片方の成立・取消条件を確認'],
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-11', dateModified: '2026-09-11', mainEntityOfPage: 'https://hanbaijo.com/articles/minna-fx-order-types-expiration', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">みんなのFX / ORDERS</p>
    <h1>みんなのFXの注文方法<br />成行・指値・逆指値・OCO・IFO</h1>
    <p className="lede">注文方法は、約定しやすさと価格の指定方法が異なります。注文種別、有効期限、スリッページ、メンテナンスの影響を分けて確認します。</p>

    <div className="callout"><strong>注文前の3ステップ</strong><ol><li>今すぐ約定したいか、価格を指定したいかを決める</li><li>有効期限とスリッページ許容幅を確認する</li><li>数量・必要証拠金・ロスカットまでの余力を確認する</li></ol></div>

    <h2>注文種別の違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>注文種別</th><th>仕組み</th><th>注意点</th></tr></thead><tbody>{orderRows.map((row) => <tr key={row[0]}><td className="ex-name">{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody></table></div></div>
    <p>成行・ストリーミングは注文時のレートと約定レートがずれることがあります。指値・逆指値は指定価格に到達しても、相場急変や流動性低下で約定しない、または不利な価格で約定する場合があります。</p>

    <h2>有効期限とメンテナンス</h2>
    <div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>期限</th><th>意味</th><th>失効の確認</th></tr></thead><tbody>
      <tr><td className="ex-name">本日中</td><td>当日の有効時間まで</td><td>営業日切替時刻を確認</td></tr>
      <tr><td className="ex-name">今週中・今月中</td><td>指定期間の最終営業日まで</td><td>週末・月末の扱いを確認</td></tr>
      <tr><td className="ex-name">日付指定</td><td>指定日まで</td><td>休場日・メンテナンスを確認</td></tr>
      <tr><td className="ex-name">無期限</td><td>取消しまで保持</td><td>残った注文を定期的に点検</td></tr>
    </tbody></table></div>
    <p>日次メンテナンス中は予約注文を置けても約定しません。週次メンテナンス中は取引システムへログインできないため、週末前に不要な注文を取り消すか確認します。</p>

    <h2>スリッページを許容する幅</h2>
    <div className="fx-formula"><span>設定の考え方</span><strong>約定優先＝幅を広め</strong><b>価格優先＝幅を狭める／ゼロ</b><small>どちらを選んでも利益や損失は保証されません。重要指標や週明けは特に実績を確認します。</small></div>
    <p><Link href="/articles/minna-fx-slippage-execution">みんなのFXのスリッページ設定を詳しく見る →</Link></p>
    <p><Link href="/articles/minna-fx-trading-hours-maintenance">取引時間・メンテナンスを確認する →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照したみんなのFX公式資料</h2><ul>
      <li><a href="https://min-fx.jp/lineup/fx/service/outline/" target="_blank" rel="noopener noreferrer">みんなのFX「サービス概要」</a></li>
      <li><a href="https://min-fx.jp/lineup/fx/service/slippage/" target="_blank" rel="noopener noreferrer">みんなのFX「スリッページについて」</a></li>
    </ul><p>注文種別・有効期限は2026年9月11日に確認しました。取引ツールの最新表示と公式ルールを優先してください。</p></section>

    <p className="affiliate-disclosure">本記事はみんなのFXの公式情報を整理したものです。提携広告の有無や報酬額は、取引条件・リスクの評価に影響しません。FXは元本および利益が保証されず、損失が生じる場合があります。</p>
    <p><Link href="/fx/minna-fx">みんなのFXの取引条件一覧へ →</Link></p>
    <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
  </article>;
}
