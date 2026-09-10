import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'みんなのFXの取引時間｜夏時間・冬時間・メンテナンス',
  description: 'みんなのFXの取引時間、日次・週次メンテナンス、予約注文と約定の違いを公式サービス概要で整理します。',
};

const faq = [
  { q: 'みんなのFXは何時から取引できますか？', a: '公式サービス概要では、米国標準時間・夏時間とも月曜日のAM7:00から取引開始です。終了は標準時間が土曜日AM6:50、夏時間が土曜日AM5:50です。' },
  { q: 'メンテナンス中に注文は約定しますか？', a: '日次メンテナンス中はレート配信が停止し、注文は約定しません。指値・逆指値などの予約は可能と案内されています。' },
  { q: '週次メンテナンス中もログインできますか？', a: '週次メンテナンス（土曜日PM0:00〜PM6:00）は取引システムへログインできません。終了時刻は作業状況で延長される場合があります。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/minna-fx-trading-hours-maintenance', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">みんなのFX / HOURS</p>
    <h1>みんなのFXの取引時間<br />夏時間・冬時間・メンテナンス</h1>
    <p className="lede">取引時間内でも、日次メンテナンスや週次メンテナンスではレート配信・ログイン・入出金が止まります。注文受付、予約注文、実際の約定を分けて確認します。</p>

    <div className="callout"><strong>時間を間違えやすいポイント</strong><ul><li>米国標準時間と夏時間で土曜の終了時刻が1時間変わる</li><li>日次メンテナンス中は予約できても約定しない</li><li>週次メンテナンスは取引システムへログインできない</li></ul></div>

    <h2>取引時間とメンテナンス</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>米国標準時間</th><th>米国夏時間</th><th>影響</th></tr></thead><tbody>
      <tr><td className="ex-name">取引時間</td><td>月曜AM7:00〜土曜AM6:50</td><td>月曜AM7:00〜土曜AM5:50</td><td>レート配信・注文約定</td></tr>
      <tr><td className="ex-name">日次メンテナンス</td><td>月曜AM6:00〜6:25<br />火〜日AM6:50〜7:10</td><td>月曜AM6:00〜6:25<br />火〜日AM5:50〜6:10</td><td>レート停止・約定不可</td></tr>
      <tr><td className="ex-name">週次メンテナンス</td><td colSpan={2}>土曜PM0:00〜PM6:00</td><td>ログイン不可</td></tr>
    </tbody></table></div></div>
    <p>夏時間への切替日は国や年度で異なるため、時計だけで判断せず公式のサービス時間表示を確認します。メンテナンス終了直後はレートが動く可能性があり、成行注文は余裕を持って発注します。</p>

    <h2>注文受付と約定を分けて考える</h2>
    <div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>状態</th><th>予約注文</th><th>即時約定</th><th>確認すること</th></tr></thead><tbody>
      <tr><td className="ex-name">取引時間内</td><td>可能</td><td>可能</td><td>スプレッドと指標発表</td></tr>
      <tr><td className="ex-name">日次メンテナンス中</td><td>可能</td><td>不可</td><td>再開後のレート変動</td></tr>
      <tr><td className="ex-name">週次メンテナンス中</td><td>操作不可の場合あり</td><td>不可</td><td>ログイン再開時刻</td></tr>
    </tbody></table></div>
    <p>予約注文を置いていても、再開時のレートが指定価格に達しない、または急変で想定外の価格で約定する可能性があります。注文の有効期限と証拠金維持率も合わせて確認します。</p>

    <h2>取引前のチェックリスト</h2>
    <ul><li>標準時間・夏時間のどちらかを確認した</li><li>日次・週次メンテナンスを避けて入出金を計画した</li><li>予約注文と即時約定の違いを理解した</li><li>メンテナンス明けのスプレッド拡大を想定した</li><li>週末をまたぐ建玉と注文の有効期限を確認した</li></ul>
    <p><Link href="/articles/minna-fx-spread-light-pair">みんなのFXのスプレッドとLIGHTペアを確認する →</Link></p>
    <p><Link href="/fx/minna-fx">みんなのFXの取引条件一覧を見る →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照したみんなのFX公式資料</h2><ul>
      <li><a href="https://min-fx.jp/lineup/fx/service/outline/" target="_blank" rel="noopener noreferrer">みんなのFX「サービス概要」</a></li>
    </ul><p>取引時間・メンテナンス情報は2026年9月10日に確認しました。臨時メンテナンスを含め、最新の公式案内を優先してください。</p></section>

    <p className="affiliate-disclosure">本記事はみんなのFXの公式情報を整理したものです。提携広告の有無や報酬額は、取引条件・リスクの評価に影響しません。FXは元本および利益が保証されず、損失が生じる場合があります。</p>
    <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
  </article>;
}
