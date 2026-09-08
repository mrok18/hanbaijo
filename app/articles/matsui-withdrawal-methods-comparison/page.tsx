import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '松井証券の出金方法を比較｜翌営業日・即時出金・MATSUI Bank',
  description: '松井証券の通常出金、即時出金、MATSUI Bank出金を、着金時期・手数料・上限・取消可否で比較します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">MATSUI / WITHDRAWAL METHODS</p>
    <h1>松井証券の出金方法を比較<br />翌営業日・即時・MATSUI Bank</h1>
    <p className="lede">松井証券から資金を戻す方法は、翌営業日以降の出金、即時出金、MATSUI Bank出金の3種類です。急ぎか、手数料を優先するか、MATSUI Bankを利用しているかで選択肢が変わります。</p>

    <h2>3種類の出金方法</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>方法</th><th>着金の目安</th><th>手数料</th><th>主な上限</th><th>取消</th></tr></thead><tbody>
      <tr><td className="ex-name">翌営業日以降の出金</td><td>翌営業日または翌々営業日</td><td>無料</td><td>翌営業日2,000万円、翌々営業日5,000万円</td><td>期限内なら可</td></tr>
      <tr><td className="ex-name">即時出金</td><td>原則即時</td><td>330円／回</td><td>1日200万円、1日5回</td><td>不可</td></tr>
      <tr><td className="ex-name">MATSUI Bank出金</td><td>原則即時</td><td>無料</td><td>1営業日1,000万円</td><td>不可</td></tr>
    </tbody></table></div></div>

    <h2>急がなければ通常出金が基本</h2>
    <p>翌営業日以降の出金は手数料無料です。営業日の6時30分から15時45分までに依頼すると翌営業日、17時から翌2時15分または3時15分から6時までに依頼すると翌々営業日に振り込まれます。</p>
    <p>最低出金額は1,000円で、出金可能額が1,000円未満の場合は全額出金のみ選べます。利用は1日1回です。取消期限は振込予定日の前営業日15時45分なので、金額を間違えた場合は早めに出金履歴を確認します。</p>

    <h2>即時出金は330円と利用時間を確認</h2>
    <p>即時出金は、営業日の9時から14時50分まで利用でき、1万円以上、1日合計200万円まで、1日5回までです。1回330円（税込）の手数料がかかり、依頼後の取消はできません。</p>
    <div className="callout"><strong>「即時」でも着金を保証するものではありません</strong><p>処理状況や受取銀行によって反映に時間がかかる場合があります。受付終了間際の依頼は当日中に完了しない可能性もあるため、支払期限ぎりぎりの資金移動には余裕を持ちます。</p></div>
    <p>出金先として登録している銀行がゆうちょ銀行の場合、即時出金は利用できません。通常出金を使うか、MATSUI Bankを利用できる状態であればMATSUI Bank出金を検討します。</p>

    <h2>MATSUI Bank出金は無料・原則即時</h2>
    <p>MATSUI Bank出金は、松井証券口座からMATSUI Bank（ドコモSMTBネット銀行 マツイ支店）へ資金を振り替える方法です。手数料は無料で、最低1円、1営業日1,000万円まで利用でき、1日の回数制限はありません。</p>
    <p>利用時間は通常出金と同じく、6時30分から15時45分、17時から翌2時15分、3時15分から6時です。土曜日23時58分から翌0時05分は利用できず、依頼後の取消もできません。</p>

    <h2>当日入金した資金には制限がある</h2>
    <p>ネットリンク入金またはらくらく振替入金で当日に入れた資金は、その日のうちに即時出金やMATSUI Bank出金へ回せません。資金移動だけを目的に入出金を連続させるのではなく、取引口座で必要な額と銀行へ戻す額を事前に分けます。</p>
    <p><Link href="/articles/matsui-deposit-methods-comparison">6種類の入金方法と反映時間を見る →</Link></p>

    <h2>出金可能額は現金残高と同じとは限らない</h2>
    <p>画面に表示される「出金可能額」が、その時点で依頼できる上限です。信用取引や先物・オプション取引の委託保証金・証拠金の状況、未受渡しの売却代金などによって、口座残高より少なくなることがあります。相場変動などにより、受付済みの出金が減額・取消になる場合もあります。</p>

    <h2>目的別の選び方</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>目的</th><th>候補</th><th>確認点</th></tr></thead><tbody>
      <tr><td className="ex-name">手数料をかけず銀行へ戻す</td><td>翌営業日以降の出金</td><td>受付時間と振込予定日</td></tr>
      <tr><td className="ex-name">登録銀行へ当日中に戻したい</td><td>即時出金</td><td>330円、200万円、ゆうちょ不可</td></tr>
      <tr><td className="ex-name">MATSUI Bankへすぐ戻す</td><td>MATSUI Bank出金</td><td>1営業日1,000万円</td></tr>
    </tbody></table></div></div>

    <div className="callout"><strong>本人名義の登録口座だけを使います</strong><p>出金先口座は松井証券口座と同一名義である必要があります。口座情報の変更を伴う場合は、なりすまし防止のため公式のお客様サイトから手続きし、不審なメールのリンクは使いません。</p></div>

    <div className="callout"><strong>広告提携と比較評価は分離します</strong><p>金融コストウォッチは松井証券の広告プログラムと提携しています。広告報酬を比較結果や掲載順位へ反映しません。</p></div>
    <section className="article-affiliate" aria-label="松井証券の広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
      <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。最新の受付時間・上限・手数料は公式サイトで確認してください。</p>
    </section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/service/money/rule/" target="_blank" rel="noopener noreferrer">松井証券「入出金 取引ルール」</a></li>
      <li><a href="https://www.matsui.co.jp/service/money/pay/" target="_blank" rel="noopener noreferrer">松井証券「出金」</a></li>
      <li><a href="https://www.matsui.co.jp/disclaimer/rtd.html" target="_blank" rel="noopener noreferrer">松井証券「リアルタイム出金サービス利用規約」</a></li>
    </ul><p>出金条件は2026年9月8日に公式ページで確認しました。利用時間、上限、手数料は変更される場合があります。</p></section>

    <p><Link href="/articles/matsui-deposit-methods-comparison">松井証券の入金方法を見る →</Link></p>
    <p><Link href="/articles/matsui-withdrawal-unavailable">出金できない・減額された場合の確認手順を見る →</Link></p>
    <p><Link href="/articles/matsui-ekyc-required-documents">口座開設のeKYCと必要書類を見る →</Link></p>
    <p><Link href="/stocks/matsui">松井証券の国内株コストを見る →</Link></p>
    <p><Link href="/fx/matsui">MATSUI FXの取引条件を見る →</Link></p>
  </article>;
}
