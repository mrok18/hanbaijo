import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/fx-margin-ratio-vs-usage' },
  title: 'FXGT 証拠金維持率｜FXの計算式とロスカット基準の確認',
  description: 'FXGTなどFXの証拠金維持率を、時価評価総額÷必要証拠金の式、ロスカット・アラート・追加証拠金との違いで整理します。会社ごとの公式基準を確認する方法も解説。',
};

const FAQS = [
  {
    question: 'FXGTの証拠金維持率はどのように確認しますか？',
    answer: 'FXGTの証拠金維持率やロスカット基準は、口座タイプ・商品・規約の更新で変わる場合があります。取引画面の表示とFXGT公式の最新仕様を照合し、数値を固定値として判断しないでください。',
  },
  {
    question: '証拠金維持率の計算式は？',
    answer: '基本式は、時価評価総額（有効証拠金）÷必要証拠金×100です。必要証拠金が8万円、有効証拠金が10万円なら125％ですが、会社ごとに分母・評価損益の扱いが異なるため公式定義を優先します。',
  },
  {
    question: '証拠金維持率と証拠金使用率の違いは？',
    answer: '維持率は余力を示し、一般に高いほど安全余裕があります。使用率は必要証拠金が口座価値に占める割合で、一般に低いほど余裕があります。名称が似ていても分母とロスカット条件を確認してください。',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
      <p className="page-kicker">FX RISK RATIO</p>
      <h1>FXGT 証拠金維持率｜FXの計算式と基準<br/>くりっく365の具体例で確認</h1>
      <p className="lede">FXGTなどFXの証拠金維持率は、時価評価総額が必要証拠金に対してどれだけ残っているかを示します。基本式と会社別のロスカット基準を分けて確認し、FXGTの最新数値は公式規約・取引画面を優先してください。</p>
      <div className="callout"><strong>結論：維持率は「時価評価総額÷必要証拠金×100」</strong><p>数字が高いほど余裕があります。GMOクリック証券のくりっく365は、証拠金維持率が100％を下回るとアラート、50％を下回るとロスカットです。相場急変時は基準値どおりの約定を保証できません。</p></div>
      <div className="callout"><strong>FXGTの基準は公式の最新仕様を確認</strong><p>海外FXを含め、維持率の分母・アラート・ロスカット水準は会社や口座タイプで異なります。FXGTの取引画面と公式規約を確認し、他社の数値をそのまま当てはめないでください。</p></div>
      <p className="panel-note">公式条件の確認日：2026年9月14日。ロスカット水準・追加証拠金の時刻・必要証拠金基準額は取扱会社や取引所の更新で変わる場合があります。</p>

      <h2>くりっく365の証拠金維持率を計算する</h2>
      <div className="formula-box"><code>証拠金維持率 ＝ 時価評価総額 ÷ 必要証拠金 × 100</code><small>会社ごとの定義と計算対象を優先</small></div>
      <p>有効証拠金が10万円、必要証拠金が8万円なら維持率は125%です。相場が逆行して有効証拠金が減ると維持率は下がり、会社が定める基準へ近づきます。</p>
      <p>GMOクリック証券の公式例では、口座残高50万円、1万通貨あたり必要証拠金4万円の建玉を10単位保有すると、必要証拠金は40万円、証拠金維持率は125％です。</p>
      <p>取引終了時の値洗いで時価評価総額が必要証拠金を下回ると、追加証拠金が発生します。GMOクリック証券では翌営業日の午前3時までに入金または全建玉の決済が必要で、期限を過ぎると任意決済の対象です。</p>

      <h2>使用率は高いほど余裕が少ない</h2>
      <div className="formula-box"><code>証拠金使用率 ＝ 必要証拠金 ÷ 口座価値等 × 100</code><small>名称や分母はサービスの定義を確認</small></div>
      <p>同じ10万円と8万円を単純化して当てはめると使用率は80%です。必要証拠金が口座価値に近づくほど100%へ上がります。サクソバンク証券は証拠金使用率が100%に達するとロスカットと案内しています。</p>

      <h2>100%だけを横並びにしない</h2>
      <p>くりっく365では、GMOクリック証券のように100％未満をアラート、50％未満をロスカットとする例があります。一方、LIGHT FXやみんなのFXは証拠金維持率100%以下をロスカット基準、サクソバンク証券は証拠金使用率100%への到達を基準として案内しています。表面上は同じ100%でも、指標と取扱会社が異なります。</p>
      <ul>
        <li>指標名は「維持率」「有効比率」「使用率」のどれか</li>
        <li>基準は「以下」「未満」「達したとき」のどれか</li>
        <li>リアルタイム判定か、特定時刻の追証判定か</li>
        <li>一部決済か、全建玉の強制決済か</li>
      </ul>

      <div className="callout"><strong>ロスカットは損失上限ではありません</strong><p>相場急変や流動性低下で基準を大きく超えて約定し、預けた証拠金を上回る損失が発生する場合があります。アラート通知の受信も保証されません。</p></div>

      <h2>FXGTの証拠金維持率に関するFAQ</h2>
      {FAQS.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.click-sec.com/corp/guide/c365/study/02.html" target="_blank" rel="noopener noreferrer">GMOクリック証券「証拠金・レバレッジ・証拠金維持率」</a></li>
          <li><a href="https://www.click-sec.com/corp/guide/c365/rule/" target="_blank" rel="noopener noreferrer">GMOクリック証券「くりっく365取引ルール（個人）」</a></li>
          <li><a href="https://lightfx.jp/service/outline/" target="_blank" rel="noopener noreferrer">LIGHT FX「サービス概要」</a></li>
          <li><a href="https://min-fx.jp/lineup/fx/service/outline/" target="_blank" rel="noopener noreferrer">みんなのFX「サービス概要」</a></li>
          <li><a href="https://www.home.saxo/ja-jp/rates-and-conditions/forex/trading-conditions" target="_blank" rel="noopener noreferrer">サクソバンク証券「FX取引概要」</a></li>
        </ul>
        <p>内容は2026年9月16日に確認しました。FXGTを含む各社の最新基準は、発注前に公式資料と取引画面で確認してください。</p>
      </section>

      <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を逆算する →</Link></p>
      <p><Link href="/fx/losscut-comparison">FX9社のロスカット基準比較を見る →</Link></p>
      <p><Link href="/articles/dmm-fx-margin-call-losscut">DMM FXの追証とロスカットを具体例で見る →</Link></p>
      <p><Link href="/articles/fx-required-margin">必要証拠金の計算方法を見る →</Link></p>
    </article>
  );
}
