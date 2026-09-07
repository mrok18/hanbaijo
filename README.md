# hanbaijo.com — 金融コストウォッチ

金融商品の見えにくい取引コストを、実測データ・公式情報・再現可能な試算で可視化するデータメディアです。
現在はFXの比較方法・コスト試算と暗号資産のBTC/JPYスプレッドを公開し、CFD、株式、先物へ対象を拡張しています。

## 現在の構成

| 機能 | 実行場所 | 内容 |
|---|---|---|
| Webサイト | Vercel / Next.js 14 App Router | 一覧は最大60秒キャッシュで各社APIを呼び出す |
| 履歴収集 | Vercel Cron `/api/collect` | 30分ごとにBTC/JPYを計測する |
| 履歴保存 | Vercel Blob `hanbaijo-blob` | `history/YYYY-MM.json` に追記する |
| X投稿 | Vercel Cron `/api/post` | 9時・13時・19時（JST）。投稿先ガードあり |
| GA4 | Google Analytics | `G-J7HHCQK42T` |

`.github/workflows/collect.yml` は手動実行専用で、通常の定期収集はVercel Cronが担当します。

## ローカル開発

PowerShell:

```powershell
npm ci
$env:MOCK_RATES='1'
$env:CRON_SECRET='ローカル確認専用の十分に長いランダム文字列'
npm run dev
```

実APIで確認する場合だけ `MOCK_RATES` を外します。固定データでの本番ビルド確認:

```powershell
$env:MOCK_RATES='1'
$env:CRON_SECRET='ローカル確認専用の十分に長いランダム文字列'
npm run build
```

## コードの入口

- `app/page.tsx`: トップページと現在のBTC実測表示
- `app/fx/page.tsx`: FXの比較軸、試算例、調査対象
- `app/cfd/page.tsx`: CFDの比較軸、調査対象、提携広告
- `app/articles/fx-spread-cost/page.tsx`: FXスプレッドの円換算ガイド
- `app/markets/page.tsx`: 対象商品と開発状況
- `app/tools/cost-calculator/`: 金融商品共通の往復コスト計算機
- `lib/exchanges.mjs`: 暗号資産の取得アダプター
- `lib/history.ts`: Vercel Blobから履歴を読む処理
- `lib/market-data/`: 金融商品共通の型、カタログ、コスト計算
- `app/api/collect/route.ts`: 定期収集
- `app/api/post/route.ts`: X投稿
- `docs/PRODUCT_PLAN.md`: 拡張方針と公開ゲート

## データの表示ルール

- `observed`（実測値）: API等から取得時刻とともに保存した値
- `published`（公称値）: 公式サイト・交付書面に記載された値
- `estimated`（試算値）: 条件と計算式を明示して算出した値

取得失敗は直前値や他社データで補完しません。広告契約の有無や報酬額は、実測値・計算結果・機械的な並び順に反映しません。

## データ提供元を追加するとき

暗号資産は `lib/exchanges.mjs` の `SOURCES` に追加します。FX以降は `lib/market-data/types.ts` の共通形式へ正規化し、次を確認してから有効化します。

1. 提供元が正式にAPIまたはデータ配信を案内していること
2. 自動取得、保存、サイト上での再掲載が利用条件に適合すること
3. Bid/Ask、時刻、通貨ペア、価格単位を検証できること
4. 欠測時に推測値を返さないこと

## 公開運用

ASP審査でサイト内容を確認できるよう、FXの比較方法、計算機、解説記事を先行公開します。実測FXレートは、提供元から自動取得・保存・再掲載の許諾を確認できたものだけ追加します。公開環境は `main` をVercelへ自動デプロイし、反映後に主要ページとCron APIの認証状態を確認します。

セキュリティ設定の変更は、内容と影響範囲を提示し、承認後に実施します。

### Cron APIの認証

`/api/collect`、`/api/post`、`/api/x-whoami` はすべて `Authorization: Bearer <CRON_SECRET>` を要求します。
`CRON_SECRET` が未設定の場合も処理は実行されません。本番へ反映する前に、VercelのProduction環境へ十分に長いランダム値を設定してください。
Vercel Cronは設定済みの `CRON_SECRET` をBearerトークンとして自動送信します。
