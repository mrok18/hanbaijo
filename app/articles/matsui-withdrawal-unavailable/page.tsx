import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-withdrawal-unavailable' },
  title: '松井証券で出金できない原因｜出金可能額・受渡日・受付時間を確認',
  description: '松井証券で出金できない、減額された、着金しない場合に、出金可能額、受渡日、振替、受付時間、登録銀行を順番に確認します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">MATSUI / WITHDRAWAL TROUBLESHOOTING</p>
    <h1>松井証券で出金できない原因<br />7項目を順番に確認</h1>
    <p className="lede">口座に現金や売却代金が見えていても、その全額を直ちに出金できるとは限りません。まず「出金可能額」を確認し、受渡日、商品口座からの振替、出金方法の利用条件へ進むと原因を切り分けやすくなります。</p>

    <h2>最初に確認する7項目</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>順番</th><th>確認すること</th><th>主な対処</th></tr></thead><tbody>
      <tr><td className="ex-name">1</td><td>画面の出金可能額</td><td>残高ではなく表示額以内にする</td></tr>
      <tr><td className="ex-name">2</td><td>売却代金の受渡日</td><td>取引履歴で受渡日を確認する</td></tr>
      <tr><td className="ex-name">3</td><td>商品口座から総合口座への振替</td><td>必要な振替を先に行う</td></tr>
      <tr><td className="ex-name">4</td><td>受付時間・下限・上限</td><td>条件に合う出金方法を選ぶ</td></tr>
      <tr><td className="ex-name">5</td><td>当日に即時入金した資金</td><td>同日出金の制限を確認する</td></tr>
      <tr><td className="ex-name">6</td><td>信用・先物等の口座状況</td><td>必要保証金・証拠金を残す</td></tr>
      <tr><td className="ex-name">7</td><td>登録銀行の名義・口座情報</td><td>本人名義の正確な情報へ直す</td></tr>
    </tbody></table></div></div>

    <h2>1. 「残高」ではなく出金可能額を見る</h2>
    <p>松井証券で出金できるのは、出金画面の「出金可能額」に表示された範囲です。現金残高や評価額に資金が見えても、受渡前の売却代金や取引に必要な資金が含まれていると、出金可能額はそれより少なくなります。</p>
    <div className="callout"><strong>表示額を超えて繰り返し依頼しない</strong><p>先に出金可能額と出金依頼確認画面を見ます。受付済みの依頼がある場合は、それを含めた資金拘束も確認します。</p></div>

    <h2>2. 売却代金は受渡日を確認する</h2>
    <p>株や投資信託を売却した日と、代金の受渡日は同じとは限りません。買付余力として使える時期と、銀行へ出金できる時期も一致しない場合があります。商品ごとの取引履歴に表示される受渡日を確認します。</p>
    <p>投資信託の解約代金は、ファンドごとに受渡日が異なります。通常出金では受渡日の翌営業日以降、即時出金またはMATSUI Bank出金では受渡日当日以降が公式案内の目安です。</p>

    <h2>3. 商品口座からの振替が必要な場合がある</h2>
    <p>各取引口座にある資金は、総合口座へ振り替えてから登録銀行へ出金する場合があります。例えば投資信託の解約代金は、原則として投資信託口座から総合口座へ振替後に出金手続きを行います。MATSUI Bankを開設済みなら、投資信託口座からMATSUI Bankへ直接出金できる案内もあります。</p>

    <h2>4. 出金方法の条件に合っているか</h2>
    <ul>
      <li><strong>翌営業日以降の出金：</strong>最低1,000円、1日1回。15時45分までなら最短翌営業日</li>
      <li><strong>即時出金：</strong>営業日9時〜14時50分、最低1万円、1日200万円・5回まで、手数料330円</li>
      <li><strong>MATSUI Bank出金：</strong>最低1円、1営業日1,000万円まで。MATSUI Bank口座が必要</li>
    </ul>
    <p>ゆうちょ銀行を出金先に登録している場合、即時出金は利用できません。翌営業日以降の出金を使うか、MATSUI Bank出金の利用条件を確認します。</p>
    <p><Link href="/articles/matsui-withdrawal-methods-comparison">3種類の出金方法・受付時間・上限を比較する →</Link></p>

    <h2>5. 当日入金分は即時に戻せないことがある</h2>
    <p>ネットリンク入金またはらくらく振替入金で当日に入れた現金は、同日中に即時出金やMATSUI Bank出金で出金できません。銀行の引落し履歴だけを見て出金可能と判断せず、翌営業日以降に出金可能額を再確認します。</p>

    <h2>6. 取引後に出金依頼が減額・取消になる場合</h2>
    <p>信用取引、先物・オプション取引などの口座状況により、受付後でも出金依頼額が減額または取消になる場合があります。公式Q&amp;Aでは、信用取引の維持率や委託保証金の減少などが例示されています。</p>
    <p>減額・取消の連絡は、出金日の前営業日夕方以降にお客様サイトのメッセージで確認します。銀行の入金履歴だけでなく、松井証券側のホーム画面と出金依頼確認も見ます。</p>

    <h2>7. 登録銀行の情報が正しいか</h2>
    <p>出金先には松井証券口座と同一名義の国内金融機関口座を登録します。名義や支店、口座番号に不備があり送金不能となると、登録情報が削除され、正しい金融機関を登録し直す場合があります。</p>

    <h2>依頼の訂正は取消してからやり直す</h2>
    <p>翌営業日以降の出金額を訂正する場合は、先の依頼を取消してから再度申し込みます。取消は出金日の前営業日15時45分までが原則ですが、データ一括処理中や状況が「受付済」の場合は操作できません。即時出金とMATSUI Bank出金は取消できません。</p>

    <div className="callout"><strong>解決しないときは公式窓口へ</strong><p>受付番号、出金方法、依頼日時、金額、画面に表示された状況を控えて問い合わせます。取引暗証番号やワンタイムパスワードは、メールや電話で他人に伝えません。</p></div>

    <div className="callout"><strong>広告提携と比較評価は分離します</strong><p>金融コストウォッチは松井証券の広告プログラムと提携しています。広告報酬を比較結果や掲載順位へ反映しません。</p></div>
    <section className="article-affiliate" aria-label="松井証券の広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
      <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。最新の利用条件は公式サイトで確認してください。</p>
    </section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/service/money/pay/" target="_blank" rel="noopener noreferrer">松井証券「出金」</a></li>
      <li><a href="https://www.matsui.co.jp/service/money/rule/" target="_blank" rel="noopener noreferrer">松井証券「入出金 取引ルール」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1277?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「出金額が減額・取消となる場合」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/8954?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「出金依頼の取消方法」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/13814?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「投資信託の解約代金はいつ出金できるか」</a></li>
    </ul><p>出金条件は2026年9月8日に公式ページで確認しました。利用時間や取引ルールは変更される場合があります。</p></section>

    <p><Link href="/articles/matsui-deposit-methods-comparison">松井証券の入金方法を見る →</Link></p>
    <p><Link href="/stocks/matsui">松井証券の国内株コストを見る →</Link></p>
    <p><Link href="/fx/matsui">MATSUI FXの取引条件を見る →</Link></p>
  </article>;
}
