import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { alternates: { canonical: '/articles/crypto-minimum-deposit' }, title: '暗号資産の最低入金額｜少額送金が反映されない理由と確認方法', description: '暗号資産の最低入金額・最低入庫数量を下回ったときの扱いと、送金前に確認する項目を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">CRYPTO / MINIMUM DEPOSIT</p>
  <h1>暗号資産の最低入金額｜少額送金が反映されない理由</h1>
  <p className="lede">暗号資産の入金は、送金が成功していても受取サービスの最低入金額を下回ると残高へ反映されない場合があります。送金前に通貨・ネットワーク・最低数量を同じ画面で確認しましょう。</p>
  <div className="callout"><strong>最低入金額は通貨・ネットワークごとに違う</strong><p>同じ銘柄でもチェーンごとに条件が異なることがあります。入金画面に表示される最新値を基準にし、古いメモや検索結果だけで判断しないでください。</p></div>
  <h2>少額入金が反映されない主な理由</h2><div className="fx-metric-grid">
    <article><b>01</b><h3>最低数量未満</h3><p>受取側が定める最低デポジット額に届かず、残高へ反映されない状態です。</p></article>
    <article><b>02</b><h3>手数料控除後に不足</h3><p>送金手数料が差し引かれ、受取数量が表示条件を下回ることがあります。</p></article>
    <article><b>03</b><h3>ネットワーク条件違い</h3><p>対応チェーンや必要承認数が異なると、金額以外の理由で保留になります。</p></article>
    <article><b>04</b><h3>タグ・メモの不足</h3><p>XRPなどはタグ・メモの未入力や誤入力も確認が必要です。</p></article>
  </div>
  <h2>送金前の確認順</h2><ol><li>受取側の入金画面で通貨とネットワークを選ぶ</li><li>最低入金額・必要承認数・タグやメモを確認する</li><li>送金手数料を差し引いた受取数量を計算する</li><li>送金元の出金画面と照合してから確定する</li></ol>
  <p><Link href="/articles/crypto-transfer-not-reflected">反映されないときの確認順を見る →</Link></p><p><Link href="/articles/crypto-tag-memo-missing">タグ・メモの入力漏れを確認する →</Link></p>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://assets-coincheck.s3.amazonaws.com/uploads/agreement/document/japanese_file/coincheck_transaction_manual_20210908.pdf" target="_blank" rel="noopener noreferrer">Coincheck 暗号資産取引説明書</a></li><li><a href="https://help2.line.me/BitMax/?contentId=20021527&lang=ja" target="_blank" rel="noopener noreferrer">LINE BITMAX 入庫アドレス変更のお知らせ</a></li></ul><p>条件はサービスごとに更新されます。送金直前に公式の入金画面を確認してください。確認日：2026年9月11日。</p></section>
</article>; }
