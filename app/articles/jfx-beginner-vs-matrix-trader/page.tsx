import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/jfx-beginner-vs-matrix-trader' },
  title: 'JFXビギナーFXとMATRIX TRADERの違い｜100通貨・1,000通貨を比較',
  description: 'JFXのビギナーFX（ミニ口座）とMATRIX TRADER（本口座）を、最低取引単位、通貨ペア、分析ツール、キャンペーンから比較します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / ACCOUNT COMPARISON</p>
    <h1>ビギナーFXとMATRIX TRADERの違い<br />100通貨・1,000通貨を比較</h1>
    <p className="lede">JFXには、少額練習向けのビギナーFX（ミニ口座）と、通貨ペア・分析環境が充実したMATRIX TRADER（本口座）があります。名前だけでなく、取引数量と利用目的から選びます。</p>

    <h2>主な違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較項目</th><th>ビギナーFX</th><th>MATRIX TRADER</th></tr></thead><tbody>
      <tr><td className="ex-name">位置づけ</td><td>ミニ口座・少額練習向け</td><td>本口座・通常取引向け</td></tr>
      <tr><td className="ex-name">最低取引単位</td><td>原則0.1Lot＝100通貨</td><td>原則1Lot＝1,000通貨</td></tr>
      <tr><td className="ex-name">数量の例外</td><td>MXN/JPYは0.1Lot＝1,000通貨</td><td>指定6通貨ペアは1Lot＝1万通貨</td></tr>
      <tr><td className="ex-name">通貨ペア</td><td>11通貨ペア</td><td>公式ツール案内では41通貨ペア</td></tr>
      <tr><td className="ex-name">取引システム</td><td>本口座と同じシステム</td><td>MATRIX TRADER</td></tr>
      <tr><td className="ex-name">高度な分析</td><td>機能を絞った練習向け</td><td>MT5・TradingView等を案内</td></tr>
      <tr><td className="ex-name">本口座向けキャンペーン</td><td>対象外の場合がある</td><td>条件を満たせば対象</td></tr>
    </tbody></table></div></div>
    <p>取扱通貨ペアやキャンペーン条件は変更されるため、申込時の公式画面で最新情報を確認してください。</p>

    <h2>100通貨なら値動きを小さく体験できる</h2>
    <p>USD/JPYなどで100通貨を取引した場合、1円の値動きによる損益は約100円です。1,000通貨なら約1,000円なので、同じ値動きでも損益の振れは10分の1になります。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>取引数量</th><th>1銭の値動き</th><th>1円の値動き</th></tr></thead><tbody>
      <tr><td className="ex-name">100通貨</td><td>約1円</td><td>約100円</td></tr>
      <tr><td className="ex-name">1,000通貨</td><td>約10円</td><td>約1,000円</td></tr>
      <tr><td className="ex-name">1万通貨</td><td>約100円</td><td>約1万円</td></tr>
    </tbody></table></div></div>
    <p>少額でもレバレッジ取引である点は変わりません。ロスカットがあっても預けた資金を超える損失が発生する可能性があります。</p>

    <h2>ビギナーFXが合いやすい人</h2>
    <ul>
      <li>100通貨で注文・決済を実際に練習したい</li>
      <li>損益の振れを抑えて取引記録を作りたい</li>
      <li>まず主要な11通貨ペアで十分</li>
    </ul>
    <p>デモ取引と異なり、実資金では小さな損益でも心理的な影響があります。注文方法、損切り、記録の習慣を作る用途に向きます。</p>

    <h2>MATRIX TRADERが合いやすい人</h2>
    <ul>
      <li>1,000通貨以上で短期売買を行いたい</li>
      <li>より多くの通貨ペアを取引したい</li>
      <li>MT5やTradingViewなどの分析環境を使いたい</li>
      <li>本口座向けキャンペーンの条件を比較したい</li>
    </ul>
    <div className="callout"><strong>キャッシュバックだけで数量を増やさない</strong><p>キャンペーンは対象期間・申込み・新規約定数量などの条件があります。達成のために不要な売買を増やすと、スプレッドやスリッページ、相場損失が特典額を上回る可能性があります。</p></div>

    <h2>必要資金は最低数量だけで決まらない</h2>
    <div className="formula-box"><code>準備資金 ＝ 必要証拠金 ＋ 損切りまでの想定損失 ＋ コスト ＋ 余裕</code><small>100通貨で始める場合も、ロスカット直前まで資金を使わず余力を残します。</small></div>
    <p>少額取引を卒業する基準は、利益額ではなく、損切りルールを守れること、注文ミスがないこと、実際のコストを記録できることです。数量を増やすときも一度に10倍へ上げず、許容損失から逆算します。</p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/beginner-fx/beginner_lp/" target="_blank" rel="noopener noreferrer">JFX「ビギナーFX」</a></li>
      <li><a href="https://www.jfx.co.jp/beginner-fx/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「ビギナーFX サービス概要」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「MATRIX TRADER 取引ルール」</a></li>
      <li><a href="https://www.jfx.co.jp/landing/mt_java_lp/" target="_blank" rel="noopener noreferrer">JFX「MATRIX TRADER 新Java版」</a></li>
    </ul><p>商品仕様は2026年9月8日に公式ページで確認しました。取引単位、通貨ペア、キャンペーンは変更される場合があります。</p></section>

    <p><Link href="/articles/jfx-account-opening-flow">JFXの口座開設と初回入金を見る →</Link></p>
    <p><Link href="/articles/jfx-lot-trade-unit">MATRIX TRADERの1Lot例外を見る →</Link></p>
    <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を計算する →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
