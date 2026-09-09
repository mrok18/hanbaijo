import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '松井証券FXのスワップ振替と税金｜受渡日・出金可能額・不足金',
  description: '松井証券FXのスワップ振替の操作、受渡日、総合口座への移動、出金可能額と確定申告の確認ポイントを公式情報から整理します。',
};

const faq = [
  { q: 'スワップ振替をすると、いつ出金できますか？', a: '現金化したスワップは、受渡日である翌々取引日以降（米ドル／カナダのみ翌取引日以降）に振替可能額へ反映されます。その後、FX口座から総合口座へ振り替え、総合口座で出金依頼を行います。' },
  { q: 'スワップ振替でポジションは決済されますか？', a: 'いいえ。松井証券のFAQでは、保有建玉を決済せずにスワップポイントだけを現金化できる機能と案内されています。対象建玉のスワップ全額が振替対象で、一部だけの振替はできません。' },
  { q: '未決済ポジションの含み益は確定申告に含めますか？', a: '松井証券の税制案内では、年間損益の対象は反対売買による決済が完了した取引で、未決済建玉の評価損益は含まれないと説明されています。スワップ振替の個別処理や法人の扱いは、税務署・税理士へ確認してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/matsui-fx-swap-transfer-tax', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">MATSUI FX / SWAP TRANSFER & TAX</p>
    <h1>松井証券FXのスワップ振替と税金<br />受渡日・出金可能額・不足金</h1>
    <p className="lede">松井証券FXのスワップポイントは、建玉に付与された後、決済するか「スワップ振替」で現金化できます。ただし、現金化した日と、総合口座へ移せる日、確定申告で確認する期間は同じではありません。操作と税務上の確認を分けて整理します。</p>

    <div className="callout"><strong>最初に押さえる4点</strong><ul><li>スワップはデータ一括処理後に建玉へ反映されます。</li><li>スワップ振替は建玉を残したまま、スワップだけを現金化する操作です。</li><li>現金化した額は通常、翌々取引日以降に振替可能額へ反映されます。</li><li>FX口座から直接出金はできず、総合口座へ振り替えてから出金します。</li></ul></div>

    <h2>スワップ振替と建玉決済の違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>操作</th><th>建玉</th><th>スワップ</th><th>資金の扱い</th></tr></thead><tbody>
      <tr><td className="ex-name">建玉を決済</td><td>決済する</td><td>決済時点で精算</td><td>決済損益と合わせて受渡</td></tr>
      <tr><td className="ex-name">スワップ振替</td><td>保有を継続</td><td>全額を現金化</td><td>受渡日後に振替可能額へ反映</td></tr>
      <tr><td className="ex-name">何もしない</td><td>保有を継続</td><td>建玉のスワップ損益として表示</td><td>決済または振替まで出金操作につながらない</td></tr>
    </tbody></table></div></div>
    <p>スワップポイントは金利差やロールオーバー日数で変動し、受取りから支払いへ変わることもあります。現在の数値は、<Link href="/articles/matsui-fx-swap-calendar">松井証券FXのスワップカレンダー</Link>で確認してください。</p>

    <h2>PC・スマホでスワップ振替する手順</h2>
    <ol><li>FXお客様サイト、FXアプリ、またはFXスマホサイトへログインする</li><li>「決済・照会」から「建玉一覧」を開く</li><li>対象建玉の「スワップ損益（円）」欄にある「振替」を押す</li><li>内容を確認し、「スワップ振替する」を実行する</li><li>入出金履歴で振替内容を確認する</li></ol>
    <p>複数建玉をまとめて振り替える場合は、建玉を選択して「複数スワップ振替」を使います。公式FAQでは、対象建玉のスワップポイント全額が振替対象で、一部だけを指定する操作ではないと案内されています。</p>

    <h2>受渡日と総合口座への振替</h2>
    <div className="fx-formula"><span>通常の振替可能時期</span><strong>スワップ振替の実行</strong><b>→ 翌々取引日以降に振替可能額へ反映</b><small>米ドル／カナダの通貨ペアは翌取引日以降。受渡日までは入出金予定額に計上されます。</small></div>
    <p>スワップ振替を実行しても、すぐに銀行口座へ出金できるわけではありません。振替可能額へ反映された後、FX口座から総合口座へ振替え、総合口座で出金依頼を行います。出金可能額は必要証拠金、決済損、建玉評価損などでも変動します。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>段階</th><th>確認画面</th><th>見る数字</th></tr></thead><tbody>
      <tr><td className="ex-name">1. 現金化</td><td>建玉一覧・入出金履歴</td><td>スワップ振替額</td></tr>
      <tr><td className="ex-name">2. 受渡待ち</td><td>入出金予定額・振替可能額</td><td>翌取引日／翌々取引日</td></tr>
      <tr><td className="ex-name">3. 口座間振替</td><td>総合口座との振替画面</td><td>FX口座から移せる金額</td></tr>
      <tr><td className="ex-name">4. 出金</td><td>総合口座の出金画面</td><td>登録銀行への出金可能額</td></tr>
    </tbody></table></div></div>

    <h2>不足金・追証があるときの注意</h2>
    <p>決済損による不足金が発生した場合、松井証券の取引ルールでは、受渡日15時までに入金またはスワップポイントの振替が必要とされています。期限までに解消できなければ、会社の判断で総合口座・FX口座間の証拠金振替やスワップ振替、建玉の決済が行われる場合があります。</p>
    <div className="callout"><strong>出金目的の振替と、不足金解消の振替を混同しない</strong><p>余剰資金を出金するためのスワップ振替と、不足金を埋めるための資金移動は目的が異なります。注文前に必要証拠金と振替可能額を確認し、期限のある不足金を先に解消します。</p></div>
    <p><Link href="/articles/matsui-fx-margin-call-losscut">松井証券FXの追証・ロスカットの基準を見る →</Link></p>

    <h2>確定申告で確認する資料</h2>
    <p>松井証券の税制案内では、FXの所得区分は先物取引に係る雑所得、課税方式は申告分離課税とされています。年間損益はFXお客様サイト、FXアプリ、FXスマホサイトの期間損益照会で確認します。対象期間は1月1日から12月31日で、未決済建玉の評価損益は年間損益に含めない説明です。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>資料</th><th>確認する内容</th><th>保存の目的</th></tr></thead><tbody>
      <tr><td className="ex-name">期間損益照会</td><td>年間の決済損益・スワップ損益</td><td>申告額の集計</td></tr>
      <tr><td className="ex-name">入出金履歴</td><td>スワップ振替、総合口座への移動</td><td>現金化日の照合</td></tr>
      <tr><td className="ex-name">建玉一覧</td><td>年末の未決済建玉・評価損益</td><td>含み損益を申告額へ混ぜない確認</td></tr>
      <tr><td className="ex-name">日次報告書等</td><td>取引・残高・証拠金の明細</td><td>税務資料の補助</td></tr>
    </tbody></table></div></div>
    <p>スワップ振替が個別の税務上いつ計上されるかは、商品・口座区分・制度で判断が分かれる場合があります。松井証券の最新資料と所轄税務署・税理士の案内を突き合わせてください。</p>

    <h2>スワップ振替前のチェックリスト</h2>
    <ul><li>対象建玉とスワップの受取・支払方向を確認した</li><li>振替額が全額対象であることを確認した</li><li>受渡日まで出金できない期間を見込んだ</li><li>総合口座への振替可能額と必要証拠金を確認した</li><li>不足金・追証の期限がないか確認した</li><li>期間損益照会と入出金履歴を保存した</li><li>税務上の扱いに疑問があれば専門家へ確認した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://support.matsui.co.jp/faq/show/25735?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券「スワップ振替の方法を教えてください」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1899?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券「スワップポイントとは」</a></li>
      <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX 取引ルール」</a></li>
      <li><a href="https://www.matsui.co.jp/support/tax/fx/" target="_blank" rel="noopener noreferrer">松井証券「FXの税制・確定申告」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1902?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券「FXの税金について」</a></li>
    </ul><p>スワップ振替・税制情報は2026年9月9日に確認しました。受渡日、振替可能額、税務上の扱いは変更される場合があるため、操作時点の公式情報を優先してください。</p></section>

    <section className="article-affiliate" aria-label="松井証券の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬はスワップや税務情報の評価に影響しません。FXは元本および利益が保証されず、預けた証拠金を上回る損失が生じる場合があります。</p></section>
    <p><Link href="/fx/matsui">松井証券FXの取引条件一覧へ →</Link></p>
    <p><Link href="/articles/matsui-fx-swap-calendar">スワップ付与時間とカレンダーを見る →</Link></p>
    <p><Link href="/articles/matsui-withdrawal-methods-comparison">松井証券の出金方法を比較する →</Link></p>
  </article>;
}
