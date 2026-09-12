import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/gmo-click-cfd-svs' },
  title: 'GMOクリック証券CFDのS.V.Sとは？建玉ごとのロスカットと追証',
  description: 'GMOクリック証券CFDのセーフティバルブシステム（S.V.S）、建玉ごとのロスカットレート、任意証拠金、追証と不足金を公式ルールで整理します。',
};

const faq = [
  { q: 'S.V.Sでは口座全体が一度にロスカットされますか？', a: 'S.V.Sでは建玉ごとにロスカットレートが設定され、レートに達した対象建玉の注文がキャンセルされ、対象建玉が反対売買される仕組みです。ただし追証未解消や不足金では、口座全体に影響する処理が別に行われます。' },
  { q: '任意証拠金を追加すると何が変わりますか？', a: '建玉ごとに任意証拠金を追加すると、買建・売建のロスカットレートを余裕のある方向へ変更できます。追加資金を入れれば損失が消えるわけではなく、価格変動リスクは残ります。' },
  { q: 'CFDの追証はいつ判定されますか？', a: '各CFD口座で、祝日を除く毎営業日の取引時間終了時点に口座状況を確認し、条件を満たすと追加証拠金が発生します。解消期限と必要額は通知・取引ルールを確認してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/gmo-click-cfd-svs', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">GMO CLICK / CFD RISK CONTROL</p>
    <h1>GMOクリック証券CFDのS.V.Sとは？<br />建玉ごとのロスカットと追証</h1>
    <p className="lede">GMOクリック証券CFDは、口座全体の維持率だけで一括決済するのではなく、建玉ごとにロスカットレートを設定するセーフティバルブシステム（S.V.S）を採用しています。仕組みと、追証・不足金との違いを分けて確認します。</p>

    <div className="callout"><strong>S.V.Sを理解する3つのポイント</strong><ul><li>ロスカットレートは新規約定時に建玉ごとに設定される</li><li>任意証拠金で建玉ごとのレートを変更できる</li><li>追証・不足金が未解消の場合は、対象建玉だけでは済まない処理がある</li></ul></div>

    <h2>S.V.Sと一般的な口座ロスカットの違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>場面</th><th>S.V.Sの処理</th><th>確認するリスク</th></tr></thead><tbody>
      <tr><td className="ex-name">建玉の価格がロスカットレートに到達</td><td>対象建玉の注文をキャンセルし、対象建玉を反対売買</td><td>急変時は指定レートから乖離して約定する可能性</td></tr>
      <tr><td className="ex-name">任意証拠金を追加</td><td>建玉ごとのロスカットレートを再計算</td><td>追加資金は損失を保証しない</td></tr>
      <tr><td className="ex-name">営業日終了時に維持率不足</td><td>CFD口座ごとに追証を判定</td><td>期限までに解消できなければ強制決済</td></tr>
      <tr><td className="ex-name">急変で証拠金を超える損失</td><td>不足金が発生する場合がある</td><td>他口座の資金・建玉にも影響し得る</td></tr>
    </tbody></table></div></div>

    <h2>ロスカットレートはいつ決まる？</h2>
    <p>ロスカットレートは新規約定時の約定価格と銘柄ごとのロスカット幅をもとに計算されます。ロスカット幅は毎週金曜日に翌週適用分へ更新され、価格調整額・金利調整額・権利調整額の付与時には既存建玉のレートが再計算される場合があります。</p>
    <p>取引時間外の参考レートで評価損益が動いても、取引時間外にロスカット取引が行われるとは限りません。取引時間と有効レートをセットで確認します。</p>

    <h2>任意証拠金で余力を調整する</h2>
    <p>任意証拠金は、必要証拠金とは別に建玉へ割り当てる資金です。買建ではロスカットレートを下げ、売建では上げる方向に働きます。複数建玉を保有している場合、どの建玉へいくら割り当てたかを記録し、口座残高だけで判断しません。</p>
    <div className="fx-formula"><span>管理の考え方</span><strong>建玉ごとの必要証拠金</strong><b>＋ 任意証拠金 ＋ 価格変動による評価損益</b><small>追加資金を入れた後も、ロスカット幅とスプレッド拡大を確認します。</small></div>

    <h2>追証・不足金はS.V.Sと別のルール</h2>
    <p>追証は、祝日を除く毎営業日の取引時間終了時点で各CFD口座の状況を判定し、必要な証拠金が不足したときに発生します。S.V.Sの建玉ごとロスカットとは判定時点も処理も異なります。</p>
    <p>急激な変動で受入証拠金を超える損失が出ると不足金が発生する場合があります。不足金が解消されなければ、GMOクリック証券が他の取引口座の建玉や保有株を任意に決済する場合もあるため、口座間振替を前提に余力を管理しません。</p>
    <p><Link href="/articles/dmm-cfd-margin-call-losscut">DMM CFDの追証・ロスカットとの違いを見る →</Link></p>

    <h2>証拠金率と取引単位を確認する</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>必要証拠金の目安</th><th>最小取引数量</th></tr></thead><tbody>
      <tr><td className="ex-name">株式CFD</td><td>取引金額の20％</td><td>1枚</td></tr>
      <tr><td className="ex-name">株価指数CFD</td><td>取引金額の10％</td><td>1枚</td></tr>
      <tr><td className="ex-name">商品CFD</td><td>取引金額の5％</td><td>1枚</td></tr>
      <tr><td className="ex-name">バラエティCFD</td><td>取引金額の20％</td><td>1枚</td></tr>
    </tbody></table></div></div>
    <p>米国VIなど一部銘柄は最小数量が異なります。必要証拠金率だけでなく、1枚あたりの値動き、調整額、ロスカット幅を確認します。</p>
    <p><Link href="/tools/cfd-margin-calculator">CFD必要証拠金を概算する →</Link></p>

    <h2>注文前チェックリスト</h2>
    <ul><li>新規約定時のロスカットレートを確認した</li><li>建玉ごとの任意証拠金と余力を記録した</li><li>毎週のロスカット幅更新と調整額の再計算を確認した</li><li>追証判定の時刻と解消期限を確認した</li><li>不足金が他口座に及ぶルールを確認した</li><li>スプレッド拡大・急変時の乖離約定を想定した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照したGMOクリック証券公式資料</h2><ul>
      <li><a href="https://www.click-sec.com/corp/guide/cfd/rule/" target="_blank" rel="noopener noreferrer">CFD取引ルール</a></li>
      <li><a href="https://faq.click-sec.com/faq/show/260?category_id=252&site_domain=default" target="_blank" rel="noopener noreferrer">CFD取引のロスカットFAQ</a></li>
      <li><a href="https://www.click-sec.com/corp/guide/cfd/loscut/" target="_blank" rel="noopener noreferrer">CFDのロスカットと追加証拠金</a></li>
    </ul><p>取引ルールは2026年9月10日に確認しました。銘柄ごとの条件や制度変更は、発注前に公式画面を確認してください。</p></section>
    <p className="affiliate-disclosure">本記事はGMOクリック証券CFDの公式情報を整理したものです。広告の有無や報酬額は、取引条件・リスクの評価に影響しません。</p>
    <p><Link href="/cfd/dmm-cfd">CFDコスト比較へ戻る →</Link></p>
  </article>;
}
