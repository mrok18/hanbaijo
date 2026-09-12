import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/dmm-fx-trading-hours-maintenance' },
  title: 'DMM FXの取引時間｜夏時間・冬時間・メンテナンスと注文の扱い',
  description: 'DMM FXの夏時間・冬時間の取引時間、土曜メンテナンス、営業日切替、指値注文と即時注文の扱いを公式情報で整理します。',
};

const faq = [
  { q: 'DMM FXは土日も取引できますか？', a: '土日は取引できません。夏時間は月曜7時から土曜5時50分まで、冬時間は月曜7時から土曜6時50分までが取引時間です。祝日は原則取引できますが、元日や年末年始などは変則となる場合があります。' },
  { q: '取引時間外でも指値・逆指値は出せますか？', a: '取引時間外は指値・逆指値の注文や取消・変更はできますが、即時注文は約定しません。土曜12時から18時のシステムメンテナンス中はログインできず、注文やクイック入金も利用できません。' },
  { q: '営業日の切替時刻とメンテナンスは同じですか？', a: '同じではありません。営業日の切替は夏時間6時、冬時間7時で、追加証拠金の判定時点にもなります。日次の短いメンテナンスとは別に、土曜12時から18時のシステムメンテナンスがあります。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-fx-trading-hours-maintenance', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM FX / TRADING HOURS</p>
    <h1>DMM FXの取引時間<br />夏時間・冬時間・メンテナンスを整理</h1>
    <p className="lede">DMM FXは平日と祝日にほぼ24時間取引できますが、米国のサマータイムで終了時刻が変わります。取引時間外でも予約注文だけは扱える時間帯があるため、約定できるか・ログインできるかを分けて確認します。</p>

    <div className="callout"><strong>まず確認する4つの時刻</strong><ul>
      <li>夏時間の取引時間：月曜7:00～土曜5:50</li>
      <li>冬時間の取引時間：月曜7:00～土曜6:50</li>
      <li>日次の営業日切替：夏時間6:00／冬時間7:00</li>
      <li>週末システムメンテナンス：土曜12:00～18:00</li>
    </ul></div>

    <h2>夏時間と冬時間の取引時間</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>期間</th><th>月曜の開始</th><th>火～木</th><th>金曜の終了</th><th>土曜・日曜</th></tr></thead><tbody>
      <tr><td className="ex-name">米国夏時間<br />3月第2日曜～11月第1日曜</td><td>7:00</td><td>6:00～翌5:59</td><td>土曜5:50</td><td>取引時間外</td></tr>
      <tr><td className="ex-name">米国冬時間<br />11月第1日曜～3月第2日曜</td><td>7:00</td><td>7:00～翌6:59</td><td>土曜6:50</td><td>取引時間外</td></tr>
    </tbody></table></div></div>
    <p>週の開始はどちらも月曜7時です。日曜夜に取引を始められると考えず、月曜朝の開始時刻と、米国夏時間への切替日をカレンダーで確認します。</p>

    <h2>取引時間外・メンテナンス中の違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>状態</th><th>ログイン</th><th>指値・逆指値</th><th>即時注文・約定</th><th>クイック入金</th></tr></thead><tbody>
      <tr><td className="ex-name">通常の取引時間</td><td>可</td><td>発注・変更・取消可</td><td>約定可</td><td>可</td></tr>
      <tr><td className="ex-name">取引時間外</td><td>可</td><td>発注・変更・取消可</td><td>約定不可</td><td>可</td></tr>
      <tr><td className="ex-name">土曜メンテナンス</td><td>不可</td><td>利用不可</td><td>利用不可</td><td>利用不可</td></tr>
    </tbody></table></div></div>
    <p>取引時間外に置いた指値・逆指値は、次の取引時間まで約定しません。メンテナンスへ入る前に注文を確認し、取消や変更が必要なら余裕を持って操作します。</p>

    <h2>営業日の切替と追加証拠金</h2>
    <div className="fx-formula"><span>営業日切替</span><strong>夏時間 6:00／冬時間 7:00</strong><b>→ 前営業日の最終レートで追加証拠金を判定</b><small>追加証拠金額は切替直後ではなく、クローズ後30分程度で取引画面へ反映される案内です。</small></div>
    <p>営業日が切り替わる時刻は、単なる休止時間ではありません。DMM FXでは毎営業日の終値をもとに追加証拠金を判定するため、切替前に維持率を確認し、切替直後の表示だけで判断しないようにします。</p>
    <p><Link href="/articles/dmm-fx-margin-call-losscut">DMM FXの追証・ロスカット基準を見る →</Link></p>

    <h2>取引時間から逆算する実務チェック</h2>
    <ol>
      <li>夏時間・冬時間のどちらかを確認する</li>
      <li>当日の取引終了時刻（金曜は早く終了）を予定表へ記入する</li>
      <li>営業日切替前に維持率、証拠金、予約注文を確認する</li>
      <li>土曜メンテナンス前に必要な取消・入金・出金予約を終える</li>
      <li>祝日・元日・年末年始は公式のお知らせで変更を確認する</li>
    </ol>
    <div className="callout"><strong>経済指標の前後は時刻だけで判断しない</strong><p>取引時間内でも、急変やスプレッド拡大により希望価格で約定できないことがあります。指値・逆指値の注文条件、許容損失、ロスカット余力を一緒に確認してください。</p></div>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://fx.dmm.com/fx/session/" target="_blank" rel="noopener noreferrer">DMM FX「取引時間」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00171/" target="_blank" rel="noopener noreferrer">DMM FX FAQ「取引できる時間帯はいつですか？」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00153/" target="_blank" rel="noopener noreferrer">DMM FX FAQ「追加証拠金の判定はいつ行っていますか？」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00184/" target="_blank" rel="noopener noreferrer">DMM FX FAQ「チャートやレートが更新されず、取引ができません」</a></li>
    </ul><p>取引時間・メンテナンス情報は2026年9月10日に確認しました。祝日や臨時メンテナンスで変更される場合があるため、注文前は公式のお知らせを優先してください。</p></section>

    <p><Link href="/fx/dmm-fx">DMM FXの取引条件一覧へ →</Link></p>
    <p><Link href="/articles/dmm-fx-swap-calendar">スワップ付与日と0日・3日・4日分の見方 →</Link></p>
    <p><Link href="/articles/dmm-fx-funding-transfer">入金・出金・証拠金振替を確認する →</Link></p>
  </article>;
}
