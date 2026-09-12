import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/jfx-allowed-spread-setting' },
  title: 'JFX許容スプレッド設定とは？急拡大時の注文を止める方法',
  description: 'JFX MATRIX TRADERの許容スプレッドを、許容スリップとの違い、設定手順、注文が不成立になる条件、米ドル円のコスト例から整理します。',
};

const faq = [
  { q: '許容スプレッドはどの注文で使えますか？', a: 'JFX公式ではストリーミング注文とクイック注文で利用できます。成行・指値・逆指値などすべての注文に適用される機能ではありません。' },
  { q: '設定値を超えたらどうなりますか？', a: '注文受付時のスプレッドが設定値より広い場合、注文は受け付けられません。注文履歴にも発注履歴が残らないため、約定しなかったことを別途確認します。' },
  { q: '許容スプレッドと許容スリップは同じですか？', a: '別の条件です。許容スプレッドは売値と買値の差を、許容スリップはクリックしたレートから不利に動いた幅を判定します。両方を設定すると、より厳しい条件になることがあります。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/jfx-allowed-spread-setting', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">JFX / ORDER SETTINGS</p>
    <h1>JFX許容スプレッド設定とは？<br />急拡大時の注文を止める方法</h1>
    <p className="lede">許容スプレッドは、MATRIX TRADERで注文を出す前に「この幅を超えたら発注しない」と上限を決める機能です。指標発表や早朝など、画面を見ている間にスプレッドが広がる場面の誤発注を減らすために使います。</p>

    <h2>許容スプレッドの仕組み</h2>
    <p>注文受付時点の売値（Bid）と買値（Ask）の差が、設定した許容スプレッド以下なら発注され、超えていれば不成立になります。設定値は「狭いほど安全、広いほど約定しやすい」というトレードオフです。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>場面</th><th>米ドル/円の例</th><th>設定2（0.2銭）の結果</th></tr></thead><tbody>
      <tr><td className="ex-name">通常時</td><td>0.2銭</td><td>発注される</td></tr>
      <tr><td className="ex-name">急拡大時</td><td>0.3銭以上</td><td>発注されない</td></tr>
    </tbody></table></div></div>
    <p>JFX公式の設定例では、米ドル/円で許容スプレッドを2（0.2銭）にすると、0.2銭では発注され、0.3銭以上に広がった場合は発注されません。通貨ペアごとの表示単位を確認してから入力します。</p>

    <h2>PC・アプリでの設定手順</h2>
    <ol><li>MATRIX TRADERの注文画面または設定画面を開く</li><li>「設定」→「注文＆動作設定」を選ぶ</li><li>許容スプレッドをONにし、通貨ペアの表示単位で上限値を入力</li><li>ストリーミング注文・クイック注文の発注前に、現在の幅と設定値を確認</li><li>注文不成立のメッセージが出たら、履歴だけでなくレートの広がりも確認</li></ol>
    <p>複数の端末を使う場合は、設定の保存先や端末ごとの差を確認します。注文ボタンを押しても発注されない状態を、通信エラーや残高不足と取り違えないことが大切です。</p>

    <h2>許容スプレッドと許容スリップの違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>機能</th><th>判定するもの</th><th>主な対象</th></tr></thead><tbody>
      <tr><td className="ex-name">許容スプレッド</td><td>BidとAskの差が上限以内か</td><td>ストリーミング・クイック注文</td></tr>
      <tr><td className="ex-name">許容スリップ</td><td>クリックした価格から不利に動いた幅</td><td>ストリーミング注文</td></tr>
    </tbody></table></div></div>
    <p>許容スリップを狭くすれば不利な価格での約定を抑えられますが、約定率は下がりやすくなります。両方を使う場合は「スプレッドが広いと発注しない」「価格が不利に動きすぎると約定しない」という2段階の条件になります。</p>

    <h2>フィルターを使っても残るコスト</h2>
    <p>許容スプレッドは、設定値以下のときの約定価格や将来のスプレッドを保証しません。米ドル/円を1万通貨で取引する場合、0.2銭ならスプレッド相当額は片道約20円、0.3銭なら約30円です。往復では単純計算で約40円と約60円になり、取引回数が増えるほど差が積み上がります。</p>
    <div className="formula-box"><code>スプレッド相当額 ＝ スプレッド（円）× 取引通貨数</code><small>0.2銭＝0.002円として計算。スリッページ、スワップ、約定不成立は別に記録します。</small></div>
    <div className="callout"><strong>設定してもロスカットを防ぐ機能ではありません</strong><p>相場急変時はスプレッド拡大、レート配信停止、スリッページなどが起こる場合があります。許容スプレッドは新規・決済の発注条件を補助する機能で、損失や約定を保証するものではありません。</p></div>

    <h2>発注前のチェックリスト</h2>
    <ul><li>通貨ペアの通常スプレッドと、早朝・指標時の実績を確認した</li><li>許容スプレッドの入力単位（銭・pips）を確認した</li><li>許容スリップを別条件として設定・記録した</li><li>注文不成立時の再発注ルールを決めた</li><li>約定履歴と注文履歴を分けて確認できる</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/landing/tool_lp/" target="_blank" rel="noopener noreferrer">JFX「MATRIX TRADERの便利機能」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/chuui_mt_c/" target="_blank" rel="noopener noreferrer">JFX「MATRIX TRADER お取引における注意点」</a></li>
      <li><a href="https://www.jfx.co.jp/pdf/mt_net/net_a32.pdf" target="_blank" rel="noopener noreferrer">JFX「許容スプレッド」操作資料</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/spread/" target="_blank" rel="noopener noreferrer">JFX「MATRIX TRADERスプレッド情報」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/executionrate/index.html" target="_blank" rel="noopener noreferrer">JFX「約定率について」</a></li>
    </ul><p>設定仕様とスプレッド例は2026年9月9日に確認しました。条件や画面は変更される場合があるため、発注前に公式画面を確認してください。</p></section>

    <p><Link href="/articles/jfx-quick-order-settings">JFXクイック注文の設定全体を見る →</Link></p>
    <p><Link href="/articles/jfx-order-slippage-rules">成行・ストリーミング・逆指値の違いを見る →</Link></p>
    <p><Link href="/articles/jfx-scalping-spread-cost">時間帯別スプレッドを円コストへ換算する →</Link></p>
    <p><Link href="/tools/jfx-scalping-cost-calculator">JFX短期売買コスト計算機を使う →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
    <section className="article-affiliate" aria-label="JFXの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} /><p className="affiliate-disclosure">JFXへの広告リンクです。申込み後に所定の取引条件を満たすと当サイトが報酬を受け取る場合があります。注文機能の説明と広告評価は分けて掲載しています。</p></section>
  </article>;
}
