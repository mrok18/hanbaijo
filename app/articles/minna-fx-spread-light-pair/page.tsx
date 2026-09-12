import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/minna-fx-spread-light-pair' },
  title: 'みんなのFXのスプレッド｜LIGHTペア・時間帯・例外を比較',
  description: 'みんなのFXのUSD/JPY LIGHT・通常ペアのスプレッド、適用時間、LIGHTペアの上限と原則固定の例外を公式情報で整理します。',
};

const faq = [
  { q: 'みんなのFXのUSD/JPY LIGHTはいつ0.15銭ですか？', a: '公式のスプレッド一覧では、USD/JPY LIGHTはAM8:00から翌AM5:00まで0.15銭（原則固定・例外あり）、それ以外の時間帯は3.88銭と案内されています。' },
  { q: 'LIGHTペアならいつでも通常ペアより有利ですか？', a: 'LIGHTペアはスプレッドだけでなく取引上限などのサービス条件が異なります。重要指標発表時や流動性が低い時間帯は、表示どおりに固定されない場合もあります。' },
  { q: '表示スプレッドどおりに必ず約定しますか？', a: '公式案内でも、広告表示のスプレッドと実質的な約定結果が一致しない場合があり、表示値が保証されるものではないと説明されています。' },
] as const;

const rows = [
  ['USD/JPY LIGHT', '0.15銭', '3.88銭', 'LIGHTペア・1回20Lotまで'],
  ['USD/JPY', '0.20銭', '3.90銭', '通常ペア'],
  ['EUR/JPY', '0.40銭', '9.90銭', '通常ペア'],
  ['GBP/JPY', '0.90銭', '14.90銭', '通常ペア'],
  ['AUD/JPY', '0.50銭', '5.90銭', '通常ペア'],
  ['MXN/JPY', '0.30銭', '1.80銭', '通常ペア・LIGHTは別条件'],
  ['EUR/USD', '0.3pips', '3.9pips', '外貨同士の通貨ペア'],
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/minna-fx-spread-light-pair', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">みんなのFX / SPREAD</p>
    <h1>みんなのFXのスプレッド<br />LIGHTペア・時間帯・例外を整理</h1>
    <p className="lede">みんなのFXは、通常ペアとLIGHTペアでスプレッドや取引上限が異なります。表示値だけで比較せず、適用時間、数量、相場急変時の例外、実際の約定コストを同じ表で確認します。</p>

    <div className="callout"><strong>先に見る3項目</strong><ul><li>AM8:00〜翌AM5:00と、それ以外の時間帯</li><li>通常ペア・LIGHTペアの取引上限</li><li>重要指標や流動性低下時は原則固定の対象外になり得ること</li></ul></div>

    <h2>主要通貨ペアの提示スプレッド</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>通貨ペア</th><th>AM8:00〜翌AM5:00</th><th>左記以外</th><th>区分・注意</th></tr></thead><tbody>{rows.map((row) => <tr key={row[0]}><td className="ex-name">{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>)}</tbody></table></div></div>
    <p>上表は公式スプレッド一覧の提示値を転記したものです。「原則固定（例外あり）」の表示であり、提示時間内でも市場急変、重要指標、休場日や営業日明けなどは拡大する可能性があります。</p>

    <h2>LIGHTペアと通常ペアを分ける理由</h2>
    <p>USD/JPY LIGHTなどのLIGHTペアは、狭いスプレッドを提示する一方、1回の発注数量に上限があります。みんなのFXのサービス概要ではLIGHTペアの1取引あたりの最大発注数量は20Lot、通常のUSD/JPYは500Lot（建玉上限は別計算）と案内されています。スプレッドだけでなく、必要な数量を発注できるかも確認します。</p>
    <div className="fx-formula"><span>往復コストの目安</span><strong>スプレッド（銭）× 取引数量（通貨）× 0.01円</strong><b>＋ スリッページ・スワップ・急変時の差</b><small>1万通貨で0.15銭なら片道約15円。実際の約定結果は注文時の画面を優先します。</small></div>

    <h2>実質コストを確認する手順</h2>
    <ol><li>取引する通貨ペアが通常かLIGHTかを確認する</li><li>注文時刻が提示時間内か、メンテナンス明けではないかを確認する</li><li>注文数量と1Lotの通貨数をそろえ、スプレッドを円換算する</li><li>約定履歴で提示値との差、スリッページ、スワップを確認する</li></ol>
    <p>広告や比較表の最小値は、取引数量・時間帯・相場状況が揃ったときの目安です。取引前には公式ページの最新値と発注画面のレートを確認し、余裕資金を残します。</p>
    <p><Link href="/fx/usdjpy-spread-comparison">米ドル円スプレッドを他社と比較する →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照したみんなのFX公式資料</h2><ul>
      <li><a href="https://min-fx.jp/lineup/fx/service/spread/" target="_blank" rel="noopener noreferrer">みんなのFX「スプレッドについて」</a></li>
      <li><a href="https://min-fx.jp/lineup/fx/service/outline/" target="_blank" rel="noopener noreferrer">みんなのFX「サービス概要」</a></li>
    </ul><p>スプレッド・取引上限は2026年9月10日に確認しました。最新の公式表示と取引画面を優先してください。</p></section>

    <p className="affiliate-disclosure">本記事はみんなのFXの公式情報を整理したものです。提携広告の有無や報酬額は、取引条件・リスクの評価に影響しません。FXは元本および利益が保証されず、損失が生じる場合があります。</p>
    <p><Link href="/fx/minna-fx">みんなのFXの取引コスト一覧へ →</Link></p>
    <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
  </article>;
}
