import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'TOSSYの口座開設手順｜必要書類と取引開始前の確認',
  description: 'TOSSYの申込、本人確認、審査、ログイン情報取得、入金、商品別書面の確認までを順番に整理します。',
};

export default function Page() {
  return <article><p className="page-kicker">TOSSY / ACCOUNT OPENING</p><h1>TOSSYの口座開設手順<br />申込後すぐに取引せず、6資産を選ぶ</h1><p className="lede">TOSSYはFX、証券CFD、商品CFD、暗号資産CFDを1つのアプリで扱います。申込入力だけでなく、本人確認、審査、ログイン情報、入金、利用する商品の書面確認までを取引開始の手順として整理します。</p>

    <h2>口座開設から取引開始までの流れ</h2><ol><li><strong>アプリまたは登録ページから申し込む：</strong>氏名、住所、職業、投資経験などの必要事項を入力します。</li><li><strong>本人確認とマイナンバー確認を行う：</strong>アプリではマイナンバーカードをスマートフォンへかざす本人確認方法が案内されています。</li><li><strong>登録審査を待つ：</strong>入力内容や書類に不備がある場合、追加確認や日数を要します。</li><li><strong>ログイン情報を取得する：</strong>手続完了メールの案内に従い、認証キーを使ってログイン情報を確認します。</li><li><strong>入金して商品区分を選ぶ：</strong>最初から全商品を取引せず、証拠金率と保有コストを理解した区分から始めます。</li></ol>

    <h2>公式表示の「最短」をそのまま予定にしない</h2><p>DMM.com証券の登録ページでは、入力完了まで最短5分、取引開始まで最短即日と案内されています。ただし、最短手続きで本人認証が完結し、申込内容に不備がなく、休業日などに該当しない場合の表示です。</p><div className="callout"><strong>審査完了前に入金・取引はできません</strong><p>本人確認の方法、申込時間、不備、審査状況により所要時間は変わります。取引予定日を最短表示だけで決めず、ログインと入金反映まで確認します。</p></div>

    <h2>申込前に準備するもの</h2><div className="fx-metric-grid"><article><b>IDENTITY</b><h3>本人確認書類</h3><p>現在の氏名・住所・生年月日が登録内容と一致する書類を用意。</p></article><article><b>MY NUMBER</b><h3>マイナンバー確認</h3><p>マイナンバーカード、または公式案内に沿った確認書類を準備。</p></article><article><b>DEVICE</b><h3>対応スマートフォン</h3><p>アプリ、カメラ、カード読取りを使う場合は対応状況を確認。</p></article><article><b>ACCOUNT</b><h3>本人名義の入出金先</h3><p>名義相違を避け、入金・出金に使う金融機関情報を確認。</p></article></div>

    <h2>DMM.com証券の既存利用者は確認項目が異なる</h2><p>DMM.com証券は、同社サービスのアカウントを1つでも持つ利用者について、通常より簡潔な登録手続きが可能と案内しています。ログインID・パスワードはDMM FX、DMM CFD、DMM株、DMMバヌーシー、TOSSYで共通です。</p><p>同じログインでも、商品ごとの契約・取引条件は同一ではありません。TOSSYの契約状況を確認し、FX、証券CFD、商品CFD、暗号資産CFDそれぞれの説明書を読んでから注文します。</p>

    <section className="article-affiliate" aria-label="TOSSYの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.tossy} /><p className="affiliate-disclosure">広告リンクから登録と所定条件の達成が確認された場合、当サイトが報酬を受け取ることがあります。審査通過や最短即日の取引開始を保証するものではありません。</p></section>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://securities.dmm.com/register/" target="_blank" rel="noopener noreferrer">DMM.com証券「アカウント登録」</a></li><li><a href="https://securities.dmm.com/sending_flow/" target="_blank" rel="noopener noreferrer">DMM.com証券「本人確認書類について」</a></li><li><a href="https://securities.dmm.com/login_info/" target="_blank" rel="noopener noreferrer">DMM.com証券「ログイン情報の取得について」</a></li></ul><p>登録方法と表示条件は2026年9月8日に確認しました。必要書類と審査手順は申込画面の最新案内を優先してください。</p></section>
    <p><Link href="/articles/tossy-margin-by-asset">取引前に6資産の必要証拠金を比較する →</Link></p><p><Link href="/articles/tossy-fees-total-cost">取引手数料以外のコストを確認する →</Link></p><p><Link href="/cfd/tossy">TOSSYの公式条件一覧へ →</Link></p>
  </article>;
}
