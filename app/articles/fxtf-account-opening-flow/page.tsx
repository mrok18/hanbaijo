import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTFの口座開設手順｜必要書類・提出先・取引開始まで',
  description: 'FXTFのスマホ本人確認と通常開設を分け、必要書類、アップロード・メール・郵送の提出先、審査後の取引開始までを整理します。',
};

export default function Page() {
  return <article><p className="page-kicker">FXTF / ACCOUNT OPENING</p><h1>FXTFの口座開設手順<br />本人確認方法で完了までが変わる</h1><p className="lede">スマートフォンで本人確認まで完結する方法と、アップロード・メール・郵送を使う通常開設があります。提出前に氏名・住所の一致、マイナンバー確認書類、画像の鮮明さを確認します。</p>

    <h2>申込から取引開始までの4段階</h2><ol><li><strong>申込フォームを入力：</strong>交付書面を確認し、氏名・生年月日などを登録します。</li><li><strong>確認書類を提出：</strong>スマホ本人確認、アップロード、メール、郵送から案内された方法を選びます。</li><li><strong>口座開設審査：</strong>登録内容と提出書類の確認を待ちます。審査通過は保証されません。</li><li><strong>ID・初期パスワードを受領：</strong>スマホ開設は完了メールからWebで確認、通常開設は転送不要の簡易書留を登録住所で受け取ります。</li></ol>

    <h2>スマホ開設と通常開設の違い</h2><div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>方法</th><th>本人確認</th><th>口座情報</th><th>公式の所要時間表示</th></tr></thead><tbody><tr><td className="ex-name">スマホでスピード開設</td><td>セルフィー＋確認書類</td><td>完了メールからWeb確認</td><td>最短で申込当日</td></tr><tr><td className="ex-name">通常開設</td><td>アップロード・メール・郵送</td><td>転送不要の簡易書留</td><td>書類受領後、最短1営業日</td></tr></tbody></table></div><p className="panel-note">いずれも申込内容、書類の不備、審査状況、郵便事情などで日数が変わります。</p></div>

    <h2>通常開設の公式提出先</h2><div className="provider-checklist"><h3>メールで送る場合</h3><ul><li>送付先：fxtfmynumber@fxtrade.co.jp</li><li>件名：本人確認書類／マイナンバー確認書類</li><li>本文：氏名、生年月日</li><li>申込時に登録したメールアドレスから送信</li><li>形式：png、gif、jpg、pdf</li></ul></div><div className="provider-checklist"><h3>郵送する場合</h3><p>〒108-0073<br />東京都港区三田2丁目11番15号 三田川崎ビル4F<br />ゴールデンウェイ・ジャパン株式会社<br />口座開設申込係</p><p>コピーの余白へ氏名・生年月日を記入し、有効期限、欠け、ぼやけ、住所変更欄を確認します。</p></div>

    <div className="callout"><strong>提出先は送信直前にも公式ページで確認</strong><p>本人確認書類とマイナンバーを含むため、検索結果や第三者サイトの宛先をそのまま使わず、FXTF公式の口座開設ページとドメインを確認してください。</p></div>

    <h2>口座開設後に商品を追加する</h2><p>FXTFはGX、MT4、MT5で口座と提供商品が分かれます。公式FAQでは、開設後の追加サービスはマイページの「各種サービス申込」から申し込めると案内されています。FX取引目的なら、現時点の提供範囲を確認してGXまたはMT4を選びます。</p>

    <section className="article-affiliate" aria-label="FXTFの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。口座開設費・維持費は無料ですが、取引にはスプレッドや建玉連動手数料などが発生します。</p></section>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.fxtrade.co.jp/accountflow/" target="_blank" rel="noopener noreferrer">FXTF「個人口座開設の流れ」</a></li><li><a href="https://www.fxtrade.co.jp/gx-intro/" target="_blank" rel="noopener noreferrer">FXTF「GX-FX取引概要」</a></li><li><a href="https://www.fxtrade.co.jp/mt4-intro/" target="_blank" rel="noopener noreferrer">FXTF「MT4取引概要」</a></li></ul><p>手順・提出先は2026年9月8日に確認しました。送付前に公式ページの最新表示を再確認してください。</p></section>
    <p><Link href="/articles/fxtf-gx-mt4-mt5-difference">GX・MT4・MT5の提供商品を比較する →</Link></p><p><Link href="/articles/fxtf-position-fee-calculation">取引前に建玉連動手数料を確認する →</Link></p><p><Link href="/fx/fxtf">FXTFの公式条件一覧へ →</Link></p>
  </article>;
}
