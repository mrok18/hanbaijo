import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-ekyc-required-documents' },
  title: '松井証券の口座開設に必要な書類｜eKYC・マイナンバー・郵送の違い',
  description: '松井証券の個人口座開設で必要な本人確認書類とマイナンバー確認書類、eKYC、オンラインアップロード、郵送の違いと不備防止を整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">MATSUI / IDENTITY CHECK</p>
    <h1>松井証券の口座開設に必要な書類<br />eKYC・郵送の違いを整理</h1>
    <p className="lede">松井証券の個人口座開設には、本人確認書類とマイナンバー確認書類が必要です。最短即日の対象となるスマートフォンのeKYC、通常のオンライン申込み、郵送では、完了通知の受取方法と所要時間が異なります。</p>

    <h2>申込方法を比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>方法</th><th>本人確認</th><th>完了通知</th><th>公式の時間目安</th></tr></thead><tbody>
      <tr><td className="ex-name">スマホeKYC</td><td>本人確認書類・顔写真を撮影し、マイナンバー書類をアップロード</td><td>設定方法をメールで受取</td><td>不備等がなければ最短即日</td></tr>
      <tr><td className="ex-name">オンライン・eKYCなし</td><td>確認書類をWEBアップロード</td><td>ID・パスワードを郵送</td><td>郵送の到着まで数日</td></tr>
      <tr><td className="ex-name">郵送申込み</td><td>署名した申込書と書類コピーを返送</td><td>簡易書留で受取</td><td>最短1週間</td></tr>
    </tbody></table></div></div>
    <p>「最短」は完了を保証する時間ではありません。休業日、審査状況、入力や画像の不備、同時申込みする追加口座によって時間がかかる場合があります。</p>

    <h2>マイナンバーカードがある場合</h2>
    <p>オンライン申込みでは、マイナンバーカードの両面画像を用意します。eKYCでは別途、案内に従って本人確認書類と本人の顔を撮影します。光の反射やピンぼけで文字・顔写真が読めないと再提出の原因になります。</p>

    <h2>マイナンバーカードがない場合</h2>
    <p>松井証券は、マイナンバー確認書類としてマイナンバー記載の住民票または通知カードを案内しています。これとは別に、公式画面で指定された本人確認書類を準備します。</p>
    <div className="callout"><strong>通知カードは記載内容が一致している場合のみ</strong><p>通知カードは、記載事項に変更がなく、本人確認書類の氏名・住所と一致している場合に利用できます。住所や氏名が古いままなら、別のマイナンバー確認書類を用意します。</p></div>

    <h2>差し戻しを防ぐ5項目</h2>
    <ol>
      <li>申込フォームと書類の氏名・住所を完全に一致させる</li>
      <li>住所・氏名変更が裏面にある書類は裏面も提出する</li>
      <li>有効期限と書類全体の写りを確認する</li>
      <li>反射、影、ピンぼけ、四隅の欠けを避ける</li>
      <li>メールの認証コードと完了通知を受信できるようにする</li>
    </ol>
    <p>部屋番号の省略、旧字体・新字体、スペースの違いなども確認します。書類と現住所が一致しない場合は、先に発行元で変更手続きを行う方が確実です。</p>

    <h2>eKYCなら郵送通知を待たずに進められる</h2>
    <p>eKYCが完了した場合、松井証券から「パスワード・取引暗証番号の設定方法」がメールで届き、口座開設完了通知は郵送されません。eKYCを使わないオンライン申込みでは、ログインID・パスワードが郵送されます。</p>
    <p>公式FAQでは、営業日11時30分までにeKYC申込みをした場合、最短で当日18時頃にメールが届くと案内されています。条件外でも審査完了を急かすのではなく、受信メールと申込状況を確認します。</p>

    <h2>MATSUI Bank同時開設はeKYCが必要</h2>
    <p>松井証券口座とMATSUI Bank口座を同時に開設する場合は、スマートフォンのeKYCを利用した本人確認が必要です。証券口座だけを申し込む場合と手続き条件が異なるため、同時開設の選択前に対応書類・端末を確認します。</p>

    <h2>書類提出前に申込み口座を確認</h2>
    <p>総合口座の申込途中では、NISA、FX、信用、米国株信用、先物・オプションなどの同時申込みを選べます。各商品口座には別の受付基準や審査があるため、今すぐ利用するものだけ選択しても問題ありません。</p>

    <div className="callout"><strong>広告提携と比較評価は分離します</strong><p>金融コストウォッチは松井証券の広告プログラムと提携しています。広告報酬を公称値・試算・掲載順位へ反映しません。</p></div>
    <section className="article-affiliate" aria-label="松井証券の広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
      <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。提出可能書類と口座開設基準は申込時の公式画面で確認してください。</p>
    </section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/apply/" target="_blank" rel="noopener noreferrer">松井証券「口座開設」</a></li>
      <li><a href="https://www.matsui.co.jp/apply/personal-account/" target="_blank" rel="noopener noreferrer">松井証券「個人口座開設完了までの流れ」</a></li>
      <li><a href="https://www.matsui.co.jp/apply/personal-account/mail.html" target="_blank" rel="noopener noreferrer">松井証券「郵送での口座開設」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/48169?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「eKYCとは」</a></li>
      <li><a href="https://www.matsui.co.jp/apply/account/netstock/" target="_blank" rel="noopener noreferrer">松井証券「総合口座申込受付基準」</a></li>
    </ul><p>必要書類・申込条件は2026年9月8日に公式ページで確認しました。利用可能書類、対応環境、処理時間は変更される場合があります。</p></section>

    <p><Link href="/articles/matsui-simultaneous-account-opening">同時に申込める商品口座を見る →</Link></p>
    <p><Link href="/articles/matsui-deposit-methods-comparison">口座開設後の入金方法を比較する →</Link></p>
    <p><Link href="/articles/matsui-account-types">FX専用口座と総合口座を比較する →</Link></p>
    <p><Link href="/stocks/matsui">松井証券の国内株コストを見る →</Link></p>
    <p><Link href="/fx/matsui">MATSUI FXの取引条件を見る →</Link></p>
  </article>;
}
