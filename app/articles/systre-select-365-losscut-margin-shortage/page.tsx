import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'シストレセレクト365のロスカット｜基準・発動後の停止',
  description: 'シストレセレクト365のロスカット基準は有効比率100％以下です。1分間隔の判定、150％のアラート、全建玉決済、発動後のストラテジー停止、証拠金不足との違いを整理します。',
  alternates: { canonical: '/articles/systre-select-365-losscut-margin-shortage' },
};

const FAQS = [
  {
    question: 'シストレセレクト365のロスカット基準は何％ですか？',
    answer: 'くりっく365口座の有効比率が100％以下になるとロスカットが発動します。取引時間中は1分間隔で判定され、未約定注文が取り消された後、口座内の全建玉へ決済注文が発注されます。',
  },
  {
    question: 'ロスカット後もストラテジーは自動売買を続けますか？',
    answer: 'ロスカット時にストラテジーが建玉を保有していた場合、その建玉は強制決済され、次の決済シグナル発生時にストラテジーが停止します。建玉を保有していなかったストラテジーは、次の新規シグナルから通常どおり稼働します。',
  },
  {
    question: '150％のアラートが届けば、入金する時間はありますか？',
    answer: '時間が確保されるとは限りません。判定は1分間隔で、大幅な価格変動時にはアラートとロスカットが同時に発動する可能性があります。アラートを入金猶予の保証とは考えず、事前に余力を確保します。',
  },
  {
    question: 'ロスカットと証拠金不足は同じですか？',
    answer: '異なります。ロスカットは取引時間中に有効比率100％以下で判定されます。証拠金不足は取引終了後の値洗いで判定され、原則として翌営業日17時までの入金が必要です。',
  },
] as const;

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <article>
      <ArticleStructuredData slug="systre-select-365-losscut-margin-shortage" publishedAt="2026-09-07" modifiedAt="2026-09-12" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
      <p className="page-kicker">SYSTRE SELECT 365 / RISK CONTROL</p>
      <h1>シストレセレクト365のロスカット<br />基準と発動後の停止を確認</h1>
      <p className="lede">シストレでもロスカットは回避されません。フジトミ証券のくりっく365では、1分ごとの確認で有効比率が100％以下になると、未約定注文を取り消し、口座内の全建玉へ決済注文を発注します。</p>

      <div className="callout"><strong>結論：100％以下で全建玉を決済、発動後は稼働状態も確認</strong><p>150％以下はメールアラート、100％以下はロスカットです。ロスカット時に建玉を持っていたストラテジーは、その後の決済シグナルで停止するため、建玉照会だけでなく稼働状況も確認します。</p></div>

      <h2>アラート・ロスカット・証拠金不足</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
        <thead><tr><th>状態</th><th>基準</th><th>判定</th><th>対応・結果</th></tr></thead><tbody>
          <tr><td className="ex-name">アラート</td><td>有効比率150％以下</td><td>1分ごと</td><td>登録メールへ通知</td></tr>
          <tr><td className="ex-name">ロスカット</td><td>有効比率100％以下</td><td>1分ごと</td><td>未約定注文取消、全建玉へ決済注文</td></tr>
          <tr><td className="ex-name">証拠金不足</td><td>取引終了後の値洗いで不足</td><td>取引日終了後</td><td>翌営業日17時までに不足額を入金</td></tr>
          <tr><td className="ex-name">預託額超過損</td><td>決済後も口座がマイナス</td><td>決済後</td><td>翌営業日15時までに入金</td></tr>
        </tbody></table></div></div>

      <h2>有効比率の計算</h2>
      <div className="formula-box"><code>有効比率 ＝ 有効証拠金額 ÷ 必要証拠金額 × 100</code><code>ロスカットライン ＝ 必要証拠金額 × 100％</code></div>
      <p>必要証拠金が6万円、有効証拠金が9万円なら150％でアラート水準です。有効証拠金が6万円まで減ると100％となり、ロスカット基準へ到達します。</p>

      <h2>ロスカットは1分ごとの判定</h2>
      <p>有効比率が100％以下になると、未約定注文が取り消され、すべての建玉へ自動的に決済注文が発注されます。判定と次の判定の間に大きく価格が動けば、100％の水準を下回った価格で約定し、証拠金預託額を超える損失が生じる可能性があります。</p>
      <p>ロスカットによる決済注文にも通常の手数料が発生します。ただし、両建てを建玉整理で決済できる場合、その建玉整理による決済には手数料が発生しないと案内されています。</p>

      <h2>ロスカット後、ストラテジーはどうなる？</h2>
      <p>ロスカットで口座内の建玉が決済されても、画面上のすべてのストラテジーが直ちに同じ状態になるとは限りません。公式FAQでは、ロスカット時にそのストラテジーが建玉を保有していたかどうかで、その後の動作が分かれます。</p>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>ロスカット時の状態</th><th>建玉の扱い</th><th>その後のストラテジー</th></tr></thead><tbody>
        <tr><td className="ex-name">建玉を保有していた</td><td>ロスカットで強制決済</td><td>次の決済シグナル発生時に停止</td></tr>
        <tr><td className="ex-name">建玉を保有していなかった</td><td>決済対象なし</td><td>次の新規シグナルから通常どおり稼働</td></tr>
        <tr><td className="ex-name">自分で全ストラテジーを停止・再稼働</td><td>建玉・注文を別途確認</td><td>次の新規シグナルから稼働</td></tr>
      </tbody></table></div></div>
      <p>再稼働前には、未約定注文、残存建玉、有効比率、翌週の証拠金基準額を確認します。ロスカット直後に同じ数量で再開すると、余力が少ないまま新規建玉が作られる可能性があります。</p>

      <h2>証拠金基準額の変更でも比率は下がる</h2>
      <p>くりっく365の証拠金基準額はレバレッジ25倍上限付きHV方式で計算され、毎週見直されます。相場が動かなくても必要証拠金の引上げによって有効比率が下がり、ロスカット基準へ近づく場合があります。</p>
      <div className="fx-metric-grid">
        <article><b>WEEKLY</b><h3>毎週の基準額</h3><p>翌週に適用する証拠金基準額を事前に確認します。</p></article>
        <article><b>STRATEGY</b><h3>稼働数</h3><p>複数ストラテジーの必要証拠金と評価損を合算します。</p></article>
        <article><b>DRAW DOWN</b><h3>過去最大損失</h3><p>最大DDを超える損失も起こり得る前提で余力を置きます。</p></article>
        <article><b>STOP</b><h3>手動停止</h3><p>ロスカットだけに任せず、損失許容額に応じた停止・決済基準を持ちます。</p></article>
      </div>

      <h2>証拠金不足は翌営業日17時まで</h2>
      <p>取引終了後の値洗いで証拠金不足が発生した場合、翌営業日（日本の銀行休業日に当たるときは次の営業日）の17時までに前日証拠金不足額以上を入金します。対応しなければ17時以降に全建玉が強制決済されます。</p>
      <p>ロスカットと証拠金不足は判定時点が違います。取引時間中の有効比率100％だけでなく、取引終了後の値洗いと翌週の証拠金基準額も確認します。</p>

      <h2>稼働前の安全確認</h2>
      <ul>
        <li>推奨証拠金と最低必要証拠金を区別する</li>
        <li>有効比率150％を割る前に数量を見直す</li>
        <li>証拠金基準額の翌週分を毎週確認する</li>
        <li>複数ストラテジーの同時損失を想定する</li>
        <li>入金期限と強制決済時刻を公式画面で確認する</li>
      </ul>

      <h2>シストレのロスカットに関するFAQ</h2>
      {FAQS.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
        <li><a href="https://www.fujitomi.co.jp/tfx/documents/click365_torihiki_guide.pdf" target="_blank" rel="noopener noreferrer">フジトミ証券「くりっく365取引ガイド」</a></li>
        <li><a href="https://www.fujitomi.co.jp/click365/faq/" target="_blank" rel="noopener noreferrer">フジトミ証券「くりっく365 よくある質問」</a></li>
        <li><a href="https://www.fujitomi.co.jp/click365/feature/fxmargin/" target="_blank" rel="noopener noreferrer">フジトミ証券「証拠金基準額」</a></li>
        <li><a href="https://www.fujitomi.co.jp/systra/feature/howto-a/" target="_blank" rel="noopener noreferrer">フジトミ証券「推奨証拠金について」</a></li>
        <li><a href="https://www.fujitomi.co.jp/systra/faq/" target="_blank" rel="noopener noreferrer">フジトミ証券「シストレセレクト365 よくある質問」</a></li>
      </ul><p>ロスカット基準と発動後の動作は2026年9月12日に確認しました。発生時は取引画面の不足額・期限・稼働状況を優先してください。</p></section>

      <p><Link href="/fx/systre-select-365">シストレセレクト365のコストシートを見る →</Link></p>
      <p><Link href="/articles/systre-select-365-recommended-margin">推奨証拠金と最大DDを見る →</Link></p>
      <p><Link href="/articles/systre-select-365-stop-switch">ストラテジーの停止・再開手順を見る →</Link></p>
      <section className="article-affiliate" aria-label="シストレセレクト365の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。リスク説明とは分けて掲載しています。</p></section>
    </article>
  );
}
