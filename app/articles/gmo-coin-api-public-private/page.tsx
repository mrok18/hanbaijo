import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/gmo-coin-api-public-private' }, title: 'GMOコインAPIの使い方｜Public APIとPrivate APIの違い', description: 'GMOコインの公開APIと認証APIを、取得できる情報、申込手順、キー管理の注意点で整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">GMOコイン / API</p><h1>GMOコインAPIの使い方<br />PublicとPrivateの違い</h1>
  <p className="lede">GMOコインは、認証不要でレートや板情報を取得するPublic APIと、APIキーで認証するPrivate APIを提供しています。サイトの計測や自動取引では、必要な権限だけを分けて設計します。</p>
  <h2>Public APIとPrivate API</h2><div className="table-scroll"><table className="rates"><thead><tr><th>種類</th><th>主な用途</th><th>認証</th><th>取り扱い</th></tr></thead><tbody><tr><td>Public API</td><td>最新レート・板・取引履歴・稼働状況</td><td>不要</td><td>公開情報の取得に限定</td></tr><tr><td>Private API</td><td>残高照会・注文・注文取消</td><td>APIキーが必要</td><td>注文権限を最小限にする</td></tr></tbody></table></div>
  <h2>計測サイトで使う場合</h2><p>公開レートの比較だけなら、認証不要のPublic APIで足ります。取得時刻、レスポンスの成否、買値・売値を保存し、欠測を推測で埋めないことが重要です。Private APIのキーを公開サーバーやブラウザへ置く設計は避けます。</p>
  <div className="callout"><strong>APIキーは秘密情報</strong><p>Private APIを使う場合は、キーとシークレットを暗号化した環境変数などで管理し、出金や注文など不要な権限を付けません。漏えい時は意図しない注文につながる可能性があるため、定期的に権限と利用履歴を点検します。</p><Link href="/method">当サイトの計測方法を読む →</Link></div>
  <h2>利用開始の手順</h2><ol><li>会員サイトへログイン</li><li>APIメニューから必要なキーを申請</li><li>権限・IP制限・保存場所を確認</li><li>テスト環境でレート取得や注文処理を確認</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://coin.z.com/jp/corp/product/info/api/" target="_blank" rel="noopener noreferrer">GMOコイン「暗号資産 API」</a></li><li><a href="https://api.coin.z.com/" target="_blank" rel="noopener noreferrer">GMOコイン APIドキュメント</a></li></ul><p>確認日：2026年9月10日。エンドポイント、利用制限、規約は変更される場合があります。</p></section>
  <p><Link href="/crypto">BTC/JPYの実測データを見る →</Link></p>
</article>; }
