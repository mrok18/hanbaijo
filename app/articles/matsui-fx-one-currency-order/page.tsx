import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-fx-one-currency-order' },
  title: '松井証券FXの1通貨注文方法｜0.0001入力と数量表示の注意点',
  description: '松井証券FXで1通貨を注文する入力方法、1万通貨単位表示からの換算、注文前に確認する証拠金・スプレッド・損益を整理する。',
};

const quantities = [
  ['1通貨', '0.0001', '米ドル/円なら1米ドル分'],
  ['10通貨', '0.001', '10米ドル分'],
  ['100通貨', '0.01', '100米ドル分'],
  ['1,000通貨', '0.1', '1,000米ドル分'],
  ['10,000通貨', '1.0', '1万通貨単位の表示'],
] as const;

const checks = [
  ['数量', '通貨数を1万通貨単位へ換算し、入力値を再確認'],
  ['注文種類', '成行・指値・逆指値と、適用されるスプレッド条件'],
  ['必要証拠金', 'レバレッジコースと当社生成レートで計算した必要額'],
  ['許容損失', '損切り幅×数量に、スプレッド・スリッページの余裕を追加'],
  ['決済方法', '決済注文の数量・売買方向・注文期限を確認'],
] as const;

const faq = [
  ['1通貨を入力する数値は？', '注文画面の数量が1万通貨単位表示の場合、1通貨は0.0001と入力します。PC・スマホとも同じ換算です。'],
  ['100円あれば1通貨を注文できますか？', '「100円から」は取引金額の目安で、必要証拠金・スプレッド・評価損益を含む運用資金が100円で足りるという意味ではありません。'],
  ['1通貨でも損失は出ますか？', '出ます。米ドル/円なら為替が1円動くと1通貨あたり約1円の損益が生じ、スプレッドやスワップも加わります。'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: metadata.title,
        description: metadata.description,
        datePublished: '2026-09-09',
        dateModified: '2026-09-09',
        mainEntityOfPage: 'https://hanbaijo.com/articles/matsui-fx-one-currency-order',
        author: { '@type': 'Organization', name: '金融コストウォッチ' },
        publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">MATSUI FX / ORDER INPUT</p>
    <h1>松井証券FXの1通貨注文方法<br />0.0001入力と数量表示の注意点</h1>
    <p className="lede">松井証券FXは1通貨から注文できますが、注文画面は「1万通貨単位」で数量を入力します。1通貨＝0.0001と換算する方法、スマホ・PCでの確認順、少額でも残るコストとリスクをまとめます。</p>

    <div className="callout"><strong>1通貨は「0.0001」と入力</strong><p>松井証券の公式FAQでは、注文入力画面の数量が1万通貨単位で表示されるため、1通貨の注文は数量欄へ0.0001と入力すると案内されています。入力後に表示された通貨数と、売買方向を必ず確認します。</p></div>

    <h2>1万通貨単位の入力換算表</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>実際の通貨数</th><th>数量欄への入力</th><th>米ドル/円での意味</th></tr></thead><tbody>
      {quantities.map(([quantity, input, meaning]) => <tr key={quantity}><td className="ex-name">{quantity}</td><td>{input}</td><td>{meaning}</td></tr>)}
    </tbody></table></div><p className="panel-note">通貨ペアが外貨同士の場合は、取引金額や損益の円換算方法が異なります。</p></div>

    <h2>PCで1通貨を注文する手順</h2>
    <ol>
      <li>FXお客様サイトへログインし、注文画面を開く。</li>
      <li>通貨ペアと売買方向を選ぶ。</li>
      <li>数量欄の既存値を削除し、1通貨なら「0.0001」と入力する。</li>
      <li>注文種類、価格、期限、スリッページなどを確認する。</li>
      <li>確認画面で数量が1通貨相当になっていることを確認して発注する。</li>
    </ol>

    <h2>スマホアプリ・スマホサイトでの入力</h2>
    <ol>
      <li>FXアプリまたはFXスマホサイトで注文画面を開く。</li>
      <li>「数量（万）」をタップする。</li>
      <li>入力パネルの数値を消し、「0.0001」と入力する。</li>
      <li>通貨ペア、売買、注文価格、確認画面を順に確認する。</li>
    </ol>
    <p>入力欄に以前の数量が残っていると、0.0001を末尾へ追加して意図しない数量になることがあります。公式FAQの案内どおり、全部削除してから入力するのが安全です。</p>

    <h2>注文前に数量以外で確認する5項目</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>注文前のチェック</th></tr></thead><tbody>
      {checks.map(([name, detail]) => <tr key={name}><td className="ex-name">{name}</td><td>{detail}</td></tr>)}
    </tbody></table></div></div>
    <p>成行・ストリーミング注文には数量上限や時間帯別スプレッドがあり、指値・逆指値などは別の条件が適用されます。1通貨でも注文種類に応じたコスト差が生じるため、表示値だけで判断しません。</p>
    <p><Link href="/articles/matsui-fx-spread-rules">MATSUI FXの時間帯・数量別スプレッドを見る →</Link></p>

    <h2>1通貨の必要証拠金と損益</h2>
    <p>米ドル/円が150円、スタンダード25倍コースなら、1通貨の必要証拠金は単純計算で約6円です。ただし、注文時の生成レート、証拠金率、端数処理で実際の金額は変わります。必要証拠金が小さくても、相場変動に耐える余裕資金を別に残します。</p>
    <div className="formula-box"><strong>必要証拠金 ≒ 為替レート × 通貨数 × 証拠金率</strong><br /><strong>米ドル/円の値動き損益 ≒ 値動き（円）× 通貨数</strong><small>スプレッド、スワップ、スリッページ、端数処理は別途考慮</small></div>
    <p>1通貨なら1円の逆行で約1円ですが、数量を100通貨・1,000通貨へ増やすと損益も同じ比率で大きくなります。許容損失から数量を決める場合は、必要証拠金ではなく損切り幅を先に入力します。</p>
    <p><Link href="/tools/matsui-fx-margin-calculator">松井証券FXの証拠金維持率を計算する →</Link></p>
    <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を逆算する →</Link></p>

    <h2>1通貨注文が向く確認方法</h2>
    <div className="fx-metric-grid">
      <article><b>01</b><h3>入力確認</h3><p>数量（万）の換算、売買方向、確認画面の表示を小さい数量で確かめる。</p></article>
      <article><b>02</b><h3>コスト確認</h3><p>スプレッドやスワップが損益にどう反映されるかを記録する。</p></article>
      <article><b>03</b><h3>ルール確認</h3><p>指値・逆指値、注文期限、決済方法を実際の画面で確認する。</p></article>
      <article><b>04</b><h3>数量調整</h3><p>許容損失に合う数量へ段階的に変更し、必要証拠金ぎりぎりを避ける。</p></article>
    </div>

    <h2>よくある質問</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>質問</th><th>回答</th></tr></thead><tbody>
      {faq.map(([question, answer]) => <tr key={question}><td className="ex-name">{question}</td><td>{answer}</td></tr>)}
    </tbody></table></div></div>

    <section className="article-affiliate" aria-label="MATSUI FXの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券へのA8.net広告リンクです。申込み等の成果条件を満たすと当サイトが報酬を受け取る場合があります。入力方法・計算例・広告評価は分けて掲載しています。</p></section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://support.matsui.co.jp/faq/show/32947?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券「FXで1通貨の注文を発注する方法」</a></li>
      <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX 取引ルール」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1897?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券「FXの取引に必要な証拠金の計算方法」</a></li>
      <li><a href="https://www.matsui.co.jp/fx/relief/" target="_blank" rel="noopener noreferrer">松井証券「松井証券FXの6つのあんしん」</a></li>
    </ul><p>注文方法と取引条件は2026年9月9日に公式ページで確認しました。画面表示、スプレッド、証拠金率は変更される場合があります。</p></section>

    <p><Link href="/articles/matsui-fx-one-currency">1通貨の必要証拠金と損益を計算する →</Link></p>
    <p><Link href="/fx/matsui">MATSUI FXの取引条件と全ガイドを見る →</Link></p>
  </article>;
}
