import Link from 'next/link';

export const metadata = {
  title: 'JFXの口座開設に必要なもの｜本人確認・マイナンバー・初回入金',
  description: 'JFX MATRIX TRADERの個人口座開設について、スマホ本人確認、必要書類、審査、ID受取、初回入金1万円、取引開始までの流れを整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / ACCOUNT OPENING</p>
    <h1>JFXの口座開設に必要なもの<br />本人確認・初回入金まで整理</h1>
    <p className="lede">JFXの口座開設料は無料ですが、申込みには本人確認書類とマイナンバー確認書類が必要です。申込みから取引開始までを、スマホで完結する方法と郵送を伴う方法に分け、入金時の最低金額まで確認します。</p>

    <h2>個人口座開設の流れ</h2>
    <ol>
      <li>本人確認書類とマイナンバー確認書類を準備</li>
      <li>口座開設フォームへ氏名・住所などを入力</li>
      <li>確認書類を指定方法で提出</li>
      <li>JFXによる口座開設審査</li>
      <li>口座番号とパスワードを受け取る</li>
      <li>入金後、取引ツールで取引を開始</li>
    </ol>
    <p>JFXはフォーム入力の目安を約5分、取引開始を最短当日と案内しています。ただし、当日開設を保証するものではなく、申込内容、書類の状態、審査状況によって時間がかかる場合があります。</p>

    <h2>スマホ本人確認で準備するもの</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>種類</th><th>JFXが案内する対象書類</th></tr></thead><tbody>
      <tr><td className="ex-name">顔写真付き本人確認書類</td><td>運転免許証・運転経歴証明書・個人番号カード・在留カード・特別永住者証明書のいずれか1点</td></tr>
      <tr><td className="ex-name">マイナンバー確認書類</td><td>通知カード・個人番号カード・マイナンバー記載の住民票のいずれか1点</td></tr>
      <tr><td className="ex-name">撮影端末</td><td>推奨環境を満たすスマートフォン</td></tr>
    </tbody></table></div></div>
    <p>「スマホでかんたん本人確認」は、本人確認書類と顔写真を撮影してオンラインで手続きを完了する方法です。審査完了後の口座番号・パスワードはメールで通知されるため、従来方式で必要だった郵便物の受取を待たずに進められます。</p>
    <div className="callout"><strong>申込住所と書類の住所を一致させる</strong><p>部屋番号を含め、フォームと本人確認書類の住所が一致しているか確認します。不鮮明、書類の欠け、有効期限切れがあると再提出になり、取引開始が遅れる原因になります。</p></div>

    <h2>郵送でIDを受け取る方法は書類数が異なる</h2>
    <p>スマホ本人確認を利用しない場合、JFXの案内では本人確認書類2点とマイナンバー確認書類1点を準備し、WEBアップロード・メール・FAX・郵送などで提出します。審査後の口座番号・パスワードは登録住所へ郵送されるため、受取までの時間も見込みます。</p>

    <h2>初回入金は1万円から</h2>
    <p>JFXの現行FAQでは、初回入金は1万円からと案内されています。また、クイック入金も1回1万円以上です。1万円未満の追加入金には銀行振込を利用できますが、振込手数料は利用する銀行側の条件によります。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>条件</th><th>手数料</th></tr></thead><tbody>
      <tr><td className="ex-name">初回入金</td><td>1万円以上</td><td>入金方法による</td></tr>
      <tr><td className="ex-name">クイック入金</td><td>1回1万円以上</td><td>JFX側は0円</td></tr>
      <tr><td className="ex-name">銀行振込</td><td>1万円未満の入金にも利用</td><td>利用銀行所定</td></tr>
    </tbody></table></div></div>

    <h2>1万円すべてを証拠金に使わない</h2>
    <p>入金できる最低額と、安全に取引できる金額は同じではありません。取引には通貨ペア・数量に応じた必要証拠金が必要で、相場が不利に動けば評価損も発生します。必要証拠金だけでなく、損切りまでの値動きとスプレッドを含む余裕資金を残します。</p>
    <div className="formula-box"><code>準備資金 ＝ 必要証拠金 ＋ 想定損失 ＋ 取引コスト ＋ 余裕資金</code><small>最低入金額だけを根拠に取引数量を決めず、許容損失から逆算してください。</small></div>

    <h2>申込み前の最終確認</h2>
    <ul>
      <li>氏名・住所・生年月日が確認書類と一致している</li>
      <li>本人確認書類が有効期限内で、四隅まで鮮明に写っている</li>
      <li>マイナンバー確認書類を用意している</li>
      <li>メールの受信設定と迷惑メールフォルダを確認できる</li>
      <li>初回入金1万円と、取引に必要な余裕資金を分けて考えている</li>
    </ul>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/startup/" target="_blank" rel="noopener noreferrer">JFX「個人のお客様・口座開設の流れ」</a></li>
      <li><a href="https://info.jfx.co.jp/jfxapl/MatrixThanks/MatrixThanks.html" target="_blank" rel="noopener noreferrer">JFX「本人確認書類について」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=33&amp;id=176&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「取引を始める最低資金」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=15&amp;id=43&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「1回の入金額」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
    </ul><p>口座開設・入金条件は2026年9月8日に公式ページで確認しました。審査基準や必要書類、キャンペーン、取引条件は変更される場合があります。</p></section>

    <p><Link href="/articles/jfx-lot-trade-unit">JFXの1Lotと最低取引単位を見る →</Link></p>
    <p><Link href="/articles/jfx-beginner-vs-matrix-trader">100通貨のビギナーFXと本口座を比較する →</Link></p>
    <p><Link href="/articles/jfx-deposit-methods-comparison">クイック入金と銀行振込を比較する →</Link></p>
    <p><Link href="/articles/jfx-deposit-not-reflected">入金が反映されない場合の確認手順を見る →</Link></p>
    <p><Link href="/articles/jfx-fees-total-cost">入出金・取引手数料と実質コストを見る →</Link></p>
    <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を計算する →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
