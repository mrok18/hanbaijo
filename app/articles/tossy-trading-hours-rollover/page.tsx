import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'TOSSYの取引時間とロールオーバー｜休場・持越しを確認',
  description: 'TOSSYのアセット別取引時間、日次・週次メンテナンス、ロールオーバー、価格調整額、注文取消しの条件を公式ルールから整理します。',
};

const faq = [
  { q: 'TOSSYは24時間365日取引できますか？', a: '暗号資産CFDなど一部を除き、取引時間はアセット・銘柄ごとに異なります。日次メンテナンス中はレート配信と約定が止まるため、銘柄別の時間を確認してください。' },
  { q: 'ロールオーバーすると何が起きますか？', a: '営業日終了時点で保有しているポジションは、日次メンテナンス中に建て直されるのが原則です。商品によってスワップ、金利・価格調整、評価損益の実現が発生します。' },
  { q: '価格調整の日に注文は残りますか？', a: '価格調整を実施する銘柄では、営業日終了後から翌営業日開始までに未約定の指値・逆指値注文が取り消される場合があります。新規・決済、複合注文も対象になり得ます。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/tossy-trading-hours-rollover', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">TOSSY / HOURS & ROLLOVER</p>
    <h1>TOSSYの取引時間とロールオーバー<br />休場・持越し・価格調整を確認</h1>
    <p className="lede">TOSSYは6つのアセット区分を一つのアプリで扱えますが、取引時間と日次処理は一律ではありません。取引できる時間、持ち越したときの処理、注文が消える条件を先に確認します。</p>

    <h2>まず日次・週次メンテナンスを押さえる</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>メンテナンス</th><th>夏時間</th><th>冬時間</th><th>影響</th></tr></thead><tbody>
      <tr><td className="ex-name">日次</td><td>05:59〜06:30</td><td>06:59〜07:30</td><td>レート配信・約定停止、ロールオーバー</td></tr>
      <tr><td className="ex-name">週次</td><td colSpan={2}>土曜 12:00〜14:00</td><td>アプリへログインできない</td></tr>
    </tbody></table></div></div>
    <p>日次メンテナンス中でもログインできる時間帯はありますが、取引時間外の銘柄は約定しません。土曜の週次メンテナンス中はアプリへログインできないため、週末の注文変更は時間をずらします。</p>

    <h2>アセット別の取引時間は同じではない</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>取引時間の考え方</th><th>確認ポイント</th></tr></thead><tbody>
      <tr><td className="ex-name">日本株CFD</td><td>月〜金 09:00〜11:30／12:30〜15:25</td><td>昼休み・日本市場休場</td></tr>
      <tr><td className="ex-name">米国株CFD</td><td>夏22:30〜翌05:00／冬23:30〜翌06:00</td><td>米国市場の休場・サマータイム</td></tr>
      <tr><td className="ex-name">FX</td><td>月曜開始〜金曜終了（夏冬で切替）</td><td>日次メンテナンスと週末</td></tr>
      <tr><td className="ex-name">暗号資産CFD</td><td>原則24時間365日（定期停止を除く）</td><td>土曜・日曜のメンテナンス枠</td></tr>
      <tr><td className="ex-name">指数・商品・バラエティ</td><td>銘柄ごとに異なる</td><td>参照市場の取引時間・休場日</td></tr>
    </tbody></table></div></div>
    <p>同じ「CFD」でも参照市場が休場なら取引できません。経済指標や祝日に合わせた時間変更は、TOSSYの銘柄ページとお知らせを確認します。</p>

    <h2>ロールオーバーで発生する3つの処理</h2>
    <ol><li>営業日終了時点のポジションをいったん決済し、原則として同値で建て直す</li><li>FXのスワップ、スポット銘柄の金利調整額などを受け払いする</li><li>先物を参照する銘柄では、限月交代に伴う価格調整を反映する</li></ol>
    <p>証券CFDなどでは、ロールオーバー時に営業日終了時点の評価損益が実現損益として反映される説明があります。含み益・含み損のまま長期保有できるとは限らないため、取引記録と税務上の損益を分けて確認します。</p>
    <div className="callout"><strong>価格調整で必要証拠金が上がることがある</strong><p>限月交代後の提示価格が大きく上昇すると、必要証拠金も増え、ロスカットの基準に近づく場合があります。価格調整額の受取・支払だけでなく、価格水準と余力の変化を同時に確認します。</p></div>

    <h2>価格調整の日は注文を見直す</h2>
    <p>商品や指数など限月を参照する銘柄では、価格調整日の営業日終了後に未約定注文が取り消される場合があります。IFD・IFO・OCOを含む新規・決済注文が対象になることもあるため、翌営業日に同じ注文が残っている前提で運用しません。</p>
    <div className="fx-formula"><span>持ち越し前の確認</span><strong>ポジション × 調整額 × 余力</strong><b>＋ 未約定注文の再設定</b><small>銘柄の取引時間、価格調整日、取消対象は公式のお知らせを優先します。</small></div>

    <h2>追加証拠金とマージンカットの時間</h2>
    <p>日次メンテナンス時の証拠金維持率判定で不足が発生すると、追加証拠金の解消期限が設定されます。期限までに解消できなければ、取引時間外や有効レートの有無によって、強制決済が後ろ倒しになる場合もあります。</p>
    <p><Link href="/articles/tossy-margin-call-losscut">TOSSYの追証・ロスカットとマージンカットを詳しく見る →</Link></p>

    <h2>持ち越し前チェックリスト</h2>
    <ul><li>保有銘柄の次回メンテナンス時刻を確認した</li><li>参照市場の休場日と時間変更を確認した</li><li>スワップ・金利・価格調整の受払方向を確認した</li><li>評価損益が日々実現される区分か確認した</li><li>価格調整日に未約定注文が取り消されないか確認した</li><li>調整後の必要証拠金と余力を試算した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://tossy.com/trade-rule/" target="_blank" rel="noopener noreferrer">TOSSY「取引ルール」</a></li>
      <li><a href="https://tossy.com/support/faqs/article/70094/" target="_blank" rel="noopener noreferrer">TOSSY「取引時間外でレートが更新されない場合」</a></li>
      <li><a href="https://tossy.com/policy/risk/" target="_blank" rel="noopener noreferrer">TOSSY「重要事項の説明」</a></li>
      <li><a href="https://tossy.com/_pdf/regulation/overview-commodity.pdf" target="_blank" rel="noopener noreferrer">TOSSY「商品CFD取引説明書」</a></li>
    </ul><p>取引時間・ロールオーバー・注文取消し条件は2026年9月9日に確認しました。銘柄別の休場日や調整日程は変更される場合があるため、発注前に公式画面を確認してください。</p></section>

    <section className="article-affiliate" aria-label="TOSSYの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.tossy} /><p className="affiliate-disclosure">上記は提携広告です。広告報酬は取引時間やリスクの評価に影響しません。調整額の受取や利益、強制決済の回避を保証するものではありません。</p></section>
    <p><Link href="/articles/tossy-fees-total-cost">TOSSYの総コスト（スプレッド・調整額）を見る →</Link></p>
    <p><Link href="/articles/tossy-margin-by-asset">6資産の証拠金率を比較する →</Link></p>
    <p><Link href="/cfd/tossy">TOSSYの公式条件一覧へ →</Link></p>
  </article>;
}
