import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/jfx-required-margin-leverage' },
  title: 'JFXの必要証拠金はいくら？最大・実効レバレッジを計算',
  description: 'JFX MATRIX TRADERの必要証拠金、最大レバレッジ、実効レバレッジの違いを、米ドル円1,000通貨の公式例から計算します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / MARGIN &amp; LEVERAGE</p>
    <h1>JFXの必要証拠金はいくら？<br />最大・実効レバレッジを計算</h1>
    <p className="lede">JFXの個人口座は最大25倍以内ですが、25倍・10倍などのコースを選ぶ方式ではありません。実際の倍率は、保有する全ポジションの想定元本と、その時点の有効証拠金から自動計算されます。</p>

    <h2>3つの金額を分ける</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>意味</th><th>計算の基本</th></tr></thead><tbody>
      <tr><td className="ex-name">想定元本</td><td>実際に動かしている取引金額</td><td>為替レート × 取引数量</td></tr>
      <tr><td className="ex-name">必要証拠金</td><td>ポジションに必要な最低限の資金</td><td>想定元本の4％以上</td></tr>
      <tr><td className="ex-name">有効証拠金</td><td>評価損益を反映した口座の資金</td><td>預託証拠金 ＋ 評価損益</td></tr>
    </tbody></table></div></div>

    <h2>最大レバレッジは必要証拠金から計算</h2>
    <div className="formula-box"><code>最大レバレッジ ＝ 想定元本 ÷ 必要証拠金</code><small>JFXの個人口座では、必要証拠金が想定元本の4％以上となるため最大25倍以下です。</small></div>
    <p>必要証拠金は通貨ペアごとに算出され、前営業日の終値などをもとに更新されます。単純に現在レートの4％と一致するとは限らないため、実際に必要な金額は当日のJFXニュースまたは取引画面で確認します。</p>

    <h2>米ドル円1,000通貨の公式例</h2>
    <p>JFX公式ページは、米ドル円145.541円で1Lot（1,000通貨）を取引する例を掲載しています。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>計算</th><th>結果</th></tr></thead><tbody>
      <tr><td className="ex-name">145.541円 × 1,000通貨</td><td>想定元本145,541円</td></tr>
      <tr><td className="ex-name">前営業日終値ベースの4％を100円未満切上げ</td><td>必要証拠金5,900円</td></tr>
      <tr><td className="ex-name">145,541円 ÷ 5,900円</td><td>最大レバレッジ24.66倍</td></tr>
    </tbody></table></div></div>
    <p>「最大25倍」は常にちょうど25倍という意味ではありません。必要証拠金の切上げや基準レートによって、公式例のように24.66倍になります。</p>

    <h2>実効レバレッジは入金額と評価損益で変わる</h2>
    <div className="formula-box"><code>実効レバレッジ ＝ 全未決済ポジションの想定元本 ÷ 有効証拠金</code><small>有効証拠金は、預託証拠金にその時点の評価損益を加減した金額です。</small></div>
    <p>同じ1,000通貨を保有していても、入金額を増やせば実効レバレッジは下がります。反対に、評価損が拡大して有効証拠金が減ると、追加取引をしなくても実効レバレッジは上がります。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>預託金</th><th>評価損益</th><th>有効証拠金</th><th>実効レバレッジ</th></tr></thead><tbody>
      <tr><td className="ex-name">8,000円</td><td>−11円</td><td>7,989円</td><td>18.21倍</td></tr>
      <tr><td className="ex-name">10,000円</td><td>−11円</td><td>9,989円</td><td>14.57倍</td></tr>
    </tbody></table></div></div>
    <p>表はJFX公式の米ドル円145.541円・1,000通貨の例です。現在のレートや必要証拠金を示すものではありません。</p>

    <h2>レバレッジを設定する画面はない</h2>
    <p>JFXのFAQでは、MATRIX TRADERにレバレッジを設定する項目はないと案内しています。倍率を下げたい場合は、入金額を増やす、保有数量を減らす、評価損を含む口座全体のリスクを抑える、という方法で実効レバレッジを調整します。</p>

    <h2>最低入金1万円を全額使わない</h2>
    <p>JFXの初回入金は1万円以上ですが、必要証拠金だけを残して取引するのは危険です。公式ページも、有効証拠金の全額を必要証拠金として使うと、取引直後の時価評価によって有効証拠金が必要証拠金を下回り、ロスカットになる可能性を案内しています。</p>
    <div className="formula-box"><code>準備資金 ＝ 必要証拠金 ＋ 想定損失 ＋ スプレッド等のコスト ＋ 余裕資金</code><small>必要証拠金は「損失に耐えられる資金」ではなく、ポジションを持つ最低条件です。</small></div>

    <h2>複数ポジションは合計想定元本で見る</h2>
    <p>実効レバレッジの分子は「全未決済ポジション」の想定元本です。通貨ペアごとの必要証拠金だけを見ると、口座全体のポジション量を小さく見積もることがあります。異なる通貨ペアを同時に保有するときも、すべてを円換算して合計します。</p>

    <h2>取引前の確認順</h2>
    <ol>
      <li>通貨ペアの1Lotが1,000通貨か1万通貨か確認</li>
      <li>当日の1Lotあたり必要証拠金を確認</li>
      <li>保有予定数量の想定元本を計算</li>
      <li>損切りまでの想定損失を円換算</li>
      <li>取引後の実効レバレッジと余裕資金を確認</li>
    </ol>
    <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を逆算する →</Link></p>

    <div className="callout"><strong>最大レバレッジより損失額を先に決めます</strong><p>倍率が法令上限内でも、取引数量と損切り幅が大きければ短時間で大きな損失になります。口座資金の何％まで損失を許容するかを決め、取引数量を逆算します。</p></div>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/reva/" target="_blank" rel="noopener noreferrer">JFX「レバレッジと必要証拠金（個人のお客様）」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=34&amp;id=196&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「必要証拠金はいくらですか」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=34&amp;id=190&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「レバレッジはどこで設定できますか」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/loscut/" target="_blank" rel="noopener noreferrer">JFX「ロスカットのルール」</a></li>
    </ul><p>取引条件は2026年9月8日に公式ページで確認しました。必要証拠金は予告なく変更される場合があるため、注文前に取引画面を確認してください。</p></section>

    <p><Link href="/articles/jfx-lot-trade-unit">JFXの1Lotと通貨数の例外を見る →</Link></p>
    <p><Link href="/articles/jfx-losscut-margin-shortage">ロスカットと不足金のルールを見る →</Link></p>
    <p><Link href="/articles/jfx-deposit-methods-comparison">JFXの入金方法を見る →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
    <section className="article-affiliate" aria-label="JFXの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} /><p className="affiliate-disclosure">JFXへの広告リンクです。申込み後に所定の取引条件を満たすと当サイトが報酬を受け取る場合があります。証拠金の計算例やリスク説明とは分けて掲載しています。</p></section>
  </article>;
}
