import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'みんなのFXの口座開設｜必要書類・審査・取引開始までの流れ', description: 'みんなのFXの口座開設を、申込入力、本人確認、審査、入金、取引開始までの順番で整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">みんなのFX / START</p><h1>みんなのFXの口座開設<br />必要書類と取引開始まで</h1>
  <p className="lede">申込み前に、必要書類と口座の種類を確認しておくと手戻りを減らせます。口座開設後は、入金・取引単位・証拠金維持率を順番に確認します。</p>
  <h2>口座開設の基本ステップ</h2><ol><li>メールアドレスを登録し、申込情報を入力する</li><li>本人確認書類とマイナンバー確認書類を提出する</li><li>審査完了の案内を受け、会員ページへログインする</li><li>入金して取引画面のレート・注文数量を確認する</li></ol>
  <h2>提出前に確認すること</h2><div className="table-scroll"><table className="rates"><thead><tr><th>確認項目</th><th>よくある不備</th><th>対策</th></tr></thead><tbody><tr><td>氏名・住所</td><td>申込情報と書類の表記が違う</td><td>最新の住所・有効期限をそろえる</td></tr><tr><td>本人確認</td><td>画像の欠け・反射・不鮮明</td><td>明るい場所で四隅を写す</td></tr><tr><td>追加サービス</td><td>FX・シストレ・オプションを混同</td><td>必要な口座区分を申込画面で確認</td></tr></tbody></table></div>
  <h2>入金後のチェック</h2><p>会員ページへログインしたら、入金先と反映状況、通貨ペアごとの最小取引数量、スプレッド、必要証拠金、ロスカット条件を確認します。最初は小さい数量で注文・決済の流れを試し、余裕資金を残して運用します。</p>
  <div className="callout"><strong>LIGHT FXを持っていても別口座が必要な場合があります</strong><p>姉妹サービスとの同時申込可否や、既存口座からの利用条件は変更される可能性があります。申込画面と公式FAQで最新条件を確認してください。</p><Link href="/fx/minna-fx">みんなのFXの取引条件を見る →</Link></div>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://min-fx.jp/support/flow/" target="_blank" rel="noopener noreferrer">みんなのFX「口座開設方法」</a></li><li><a href="https://min-fx.jp/support/flow/document/" target="_blank" rel="noopener noreferrer">みんなのFX「必要書類について」</a></li></ul><p>確認日：2026年9月10日。必要書類・審査・申込画面は変更される場合があります。</p></section>
  <p><Link href="/articles/minna-fx-trading-unit">取引単位と必要証拠金を確認する →</Link></p>
</article>; }
