import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '松井証券の入金方法を比較｜手数料・反映時間・MATSUI Bankの違い',
  description: '松井証券のスイープ入金、MATSUI Bank入金、ネットリンク入金、らくらく振替、定期入金、銀行振込を比較します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">MATSUI / DEPOSIT METHODS</p>
    <h1>松井証券の入金方法を比較<br />手数料・反映時間の違い</h1>
    <p className="lede">松井証券の総合口座には6種類の入金方法があります。今すぐ取引したい場合、積立資金を自動で用意したい場合、普段の銀行から振り込みたい場合で使い分けます。</p>

    <h2>6種類の入金方法</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>方法</th><th>反映</th><th>手数料</th><th>事前準備</th></tr></thead><tbody>
      <tr><td className="ex-name">スイープ入金</td><td>発注時に自動・リアルタイム</td><td>無料</td><td>MATSUI Bank口座・設定</td></tr>
      <tr><td className="ex-name">MATSUI Bank入金</td><td>リアルタイム</td><td>無料</td><td>MATSUI Bank口座</td></tr>
      <tr><td className="ex-name">ネットリンク入金</td><td>リアルタイム</td><td>無料</td><td>対象銀行のネットバンキング</td></tr>
      <tr><td className="ex-name">らくらく振替入金</td><td>リアルタイム</td><td>無料</td><td>初回に銀行口座登録</td></tr>
      <tr><td className="ex-name">定期入金</td><td>引落しから原則5営業日後</td><td>無料</td><td>銀行口座・金額の設定</td></tr>
      <tr><td className="ex-name">銀行振込入金</td><td>確認後。営業日日中は通常30〜60分</td><td>利用者負担</td><td>専用振込先の確認</td></tr>
    </tbody></table></div></div>

    <h2>今すぐ入金するなら3つのリアルタイム方式</h2>
    <p>MATSUI Bank入金、ネットリンク入金、らくらく振替入金は、銀行口座から松井証券の総合口座へリアルタイムで入金する方式です。いずれも松井証券側の振替手数料は無料ですが、利用できる金融機関と事前設定が異なります。</p>
    <ul>
      <li><strong>MATSUI Bank入金：</strong>MATSUI Bank口座から金額を指定して振替</li>
      <li><strong>ネットリンク入金：</strong>提携金融機関のネットバンキング画面で手続き</li>
      <li><strong>らくらく振替入金：</strong>初回登録後は松井証券サイト内で金額入力だけで完了</li>
    </ul>

    <h2>ネットリンク入金は終了ボタンまで進む</h2>
    <p>金融機関側で振込操作が終わった後、松井証券のお客様サイトへ戻る指定ボタンを押します。ブラウザを閉じるなどして正常終了しなかった場合、入金をリアルタイムで余力へ反映できないことがあります。</p>
    <div className="callout"><strong>銀行から引き落とされたら重ねて入金しない</strong><p>反映が見えなくても、まず銀行口座の履歴と松井証券の入出金履歴を確認します。二重入金を避け、未反映の場合は公式サポートの案内に従います。</p></div>

    <h2>スイープ入金は発注時の不足額を自動入金</h2>
    <p>スイープ入金は、発注によって余力不足が生じる場合に、不足する概算金額をMATSUI Bank口座から自動で入金する仕組みです。毎回の手動入金を減らせますが、MATSUI Bank残高が投資可能額として使われやすくなるため、生活資金と投資資金はあらかじめ分けます。</p>
    <p>スイープ入金は出金には対応しません。松井証券から銀行側へ資金を戻す操作は、別途出金方法を確認します。</p>

    <h2>定期入金は積立向けで即時ではない</h2>
    <p>定期入金は、原則として毎月27日に銀行口座から引き落とし、その5営業日後に総合口座へ入金されます。積立用資金を自動で移す用途に向きますが、相場を見て当日買付けたい場合の入金方法ではありません。</p>

    <h2>銀行振込は専用口座へ送る</h2>
    <p>銀行振込入金では、利用者ごとに用意された専用の入金先銀行口座を確認して送金します。営業日の日中は通常30〜60分で反映されますが、銀行や松井証券側の確認状況、時間外、休日では遅れる可能性があります。</p>
    <div className="formula-box"><code>実質入金コスト ＝ 銀行の振込手数料 ＋ 入金待ちによる機会コスト</code><small>無料の即時入金が使える場合でも、焦って予定外の取引を増やさないことが大切です。</small></div>

    <h2>目的別の選び方</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>目的</th><th>候補</th></tr></thead><tbody>
      <tr><td className="ex-name">取引直前に手動入金</td><td>MATSUI Bank・ネットリンク・らくらく振替</td></tr>
      <tr><td className="ex-name">発注時の不足を自動補完</td><td>スイープ入金</td></tr>
      <tr><td className="ex-name">毎月の積立資金を自動化</td><td>定期入金</td></tr>
      <tr><td className="ex-name">対象サービスを使わず振込</td><td>銀行振込入金</td></tr>
    </tbody></table></div></div>

    <div className="callout"><strong>広告提携と比較評価は分離します</strong><p>金融コストウォッチは松井証券の広告プログラムと提携しています。広告報酬を比較結果や掲載順位へ反映しません。</p></div>
    <section className="article-affiliate" aria-label="松井証券の広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
      <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。対応金融機関・利用時間は公式サイトで確認してください。</p>
    </section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/service/money/rule/" target="_blank" rel="noopener noreferrer">松井証券「入出金 取引ルール」</a></li>
      <li><a href="https://www.matsui.co.jp/service/money/deposit/" target="_blank" rel="noopener noreferrer">松井証券「入金」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1863?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「入金の方法」</a></li>
      <li><a href="https://www.matsui.co.jp/info/money-01/index2.html" target="_blank" rel="noopener noreferrer">松井証券「入金方法のご案内」</a></li>
    </ul><p>入金条件は2026年9月8日に公式ページで確認しました。対応銀行、利用時間、反映時間は変更される場合があります。</p></section>

    <p><Link href="/articles/matsui-ekyc-required-documents">口座開設のeKYCと必要書類を見る →</Link></p>
    <p><Link href="/articles/matsui-simultaneous-account-opening">同時開設できる商品口座を見る →</Link></p>
    <p><Link href="/stocks/matsui">松井証券の国内株コストを見る →</Link></p>
    <p><Link href="/fx/matsui">MATSUI FXの取引条件を見る →</Link></p>
  </article>;
}
