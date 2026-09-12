import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '日経225先物の取引時間｜日中・ナイト・注文受付を整理',
  description: '日経225先物・mini・マイクロの取引時間を、日中8:45〜15:45、ナイト17:00〜翌6:00の立会、注文受付、取消不可時間、祝日・SQ日の注意点に分けて解説します。',
  alternates: { canonical: '/articles/nikkei225-futures-night-session' },
};

const sessions = [
  ['日中立会', '8:00〜8:45', '8:45〜15:40', '15:40〜15:45', '15:45'],
  ['ナイト・セッション', '16:45〜17:00', '17:00〜翌5:55', '翌5:55〜6:00', '翌6:00'],
] as const;

const faqs = [
  {
    question: '日経225先物は何時から何時まで取引できますか？',
    answer: '大阪取引所の立会時間は、日中が8:45〜15:45、ナイト・セッションが17:00〜翌6:00です。連続売買のザラバは日中15:40、夜間は翌5:55までで、その後にクロージング・オークションがあります。',
  },
  {
    question: '15:45から17:00までは取引できますか？',
    answer: '市場での売買はできません。ナイト・セッションの注文受付は取引所では16:45から始まりますが、証券会社の受付開始時刻やメンテナンス時間は各社で異なります。',
  },
  {
    question: '土日や祝日も取引できますか？',
    answer: '土日は通常休場です。祝日は大阪取引所が指定した日に祝日取引を実施します。すべての祝日に取引できるわけではないため、JPXの祝日取引実施日と利用する証券会社の案内を確認します。',
  },
] as const;

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
      <p className="page-kicker">NIKKEI 225 FUTURES / TRADING HOURS</p>
      <h1>日経225先物の取引時間<br />日中・ナイト・注文受付を整理</h1>
      <p className="lede">
        日経225先物・日経225mini・日経225マイクロ先物の立会時間は、日中が<strong>8:45〜15:45</strong>、
        ナイト・セッションが<strong>17:00〜翌6:00</strong>です。ザラバの終了時刻、注文受付、注文を取り消せない時間は別なので、時計だけでなく取引所の区分まで確認します。
      </p>

      <div className="callout">
        <strong>先に結論</strong>
        <p>実際に連続売買できるザラバは、日中が8:45〜15:40、夜間が17:00〜翌5:55です。15:40〜15:45と翌5:55〜6:00は引けの注文を受け付けるプレ・クロージングで、最後にクロージング・オークションが行われます。</p>
      </div>

      <h2>日経225先物の取引時間一覧</h2>
      <div className="data-panel">
        <div className="table-scroll">
          <table className="rates comparison-table">
            <thead>
              <tr><th>区分</th><th>寄付き前の注文受付</th><th>ザラバ</th><th>引け前の注文受付</th><th>引け</th></tr>
            </thead>
            <tbody>
              {sessions.map(([label, preOpen, regular, preClose, close]) => (
                <tr key={label}>
                  <td className="ex-name">{label}</td><td>{preOpen}</td><td><strong>{regular}</strong></td><td>{preClose}</td><td>{close}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="panel-note">上表は大阪取引所の取引所スケジュールです。証券会社のシステム上の注文受付時間やメンテナンス時間は、これより短い場合があります。</p>
      </div>

      <h2>取引時間と注文受付時間は同じではない</h2>
      <p>
        8:00〜8:45と16:45〜17:00は、寄付き前の注文を受け付けるプレ・オープニングです。注文は板に登録されますが、オープニング・オークションまでは約定しません。
        一方、ザラバ終了後の5分間はプレ・クロージングで、引けの板寄せに向けた注文受付時間です。
      </p>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>市場で売買できる時間</h3><p>日中8:45〜15:45、夜間17:00〜翌6:00。ザラバと板寄せを含む立会時間です。</p></article>
        <article><b>02</b><h3>注文を出せる時間</h3><p>取引所のプレ・オープニングに加え、証券会社が独自に予約注文を受け付ける場合があります。</p></article>
        <article><b>03</b><h3>約定する時間</h3><p>寄付き・引けの板寄せ、またはザラバ中です。注文受付中でも約定しない時間があります。</p></article>
        <article><b>04</b><h3>メンテナンス</h3><p>取引所が閉まっていても常に注文できるとは限りません。利用会社の停止時間を確認します。</p></article>
      </div>

      <h2>寄付き・引け前には注文を取り消せない時間がある</h2>
      <p>
        日経225先物・mini・マイクロにはノンキャンセル・ピリオドがあり、日中の寄付き前1分間（8:44〜8:45）、夜間の寄付き前1分間（16:59〜17:00）、夜間の引け前1分間（翌5:59〜6:00）は注文の訂正・取消しができません。
        成行・指値の入力を終える時刻ではなく、訂正や取消しまで完了できる時刻として余裕を持たせます。
      </p>

      <h2>ナイト・セッションは翌営業日の取引</h2>
      <p>
        先物の「1取引日」は、17:00のナイト・セッションから始まり、翌営業日の日中立会が15:45に終わるまでです。たとえば月曜日17:00以降の約定は、火曜日の日中取引と同じ取引日に含まれます。
        損益表示、追加証拠金の判定、注文の日付を見るときは、カレンダー日と取引日を混同しないことが重要です。
      </p>

      <h2>土日・祝日・SQ日の注意点</h2>
      <ul>
        <li><strong>土日：</strong>通常は休場です。金曜日のナイト・セッションは土曜日の午前6:00まで続きます。</li>
        <li><strong>祝日：</strong>大阪取引所が指定した日は祝日取引を実施します。全祝日が対象ではなく、証券会社によって参加商品や注文受付が異なる場合があります。</li>
        <li><strong>SQ週：</strong>通常のSQが第2金曜日なら、期近限月の取引最終日はその前営業日に終了します。取引最終日の日中立会後は、同じ限月をナイト・セッションで取引できません。</li>
        <li><strong>臨時変更：</strong>障害、市況、年末年始などで予定が変わる場合は、JPXと証券会社の最新案内を優先します。</li>
      </ul>

      <h2>現物の日経平均・CFDとは時間が異なる</h2>
      <p>
        このページの時間は大阪取引所に上場する日経225先物のものです。日経平均株価を構成する現物株や、証券会社・FX会社が提供する日経225 CFDには別の取引時間があります。
        「日経225」という名称だけで判断せず、先物・現物・CFDのどの商品を取引するのかを先に確認してください。
      </p>

      <h2>日経225先物の取引時間に関するFAQ</h2>
      {faqs.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.jpx.co.jp/derivatives/products/domestic/225futures/01.html" target="_blank" rel="noopener noreferrer">JPX「日経225先物 制度概要」</a></li>
          <li><a href="https://www.jpx.co.jp/derivatives/rules/trading-hours/" target="_blank" rel="noopener noreferrer">JPX「立会時間」</a></li>
          <li><a href="https://www.jpx.co.jp/derivatives/rules/holidaytrading.html" target="_blank" rel="noopener noreferrer">JPX「祝日取引」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/fop/futures/rule/session/" target="_blank" rel="noopener noreferrer">楽天証券「株価指数先物 取引時間／注文受付時間」</a></li>
        </ul>
        <p>取引時間・注文受付区分は2026年9月13日に確認しました。実際の注文受付とメンテナンス時間は利用する証券会社の最新案内を優先してください。</p>
      </section>

      <p><Link href="/articles/nikkei225-futures-sq-settlement">SQと取引最終日を確認する →</Link></p>
      <p><Link href="/futures/nikkei225-fee-comparison">日経225先物の手数料を比較する →</Link></p>
      <p><Link href="/futures">先物比較へ戻る →</Link></p>
    </article>
  );
}
