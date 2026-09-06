# hanbaijo.com — 販売所ウォッチ

国内暗号資産取引所の「販売所」「取引所」のスプレッドを公開APIから自動計測して掲載するサイト。

- サイト本体: Next.js（App Router）/ Vercel
- 定期収集: GitHub Actions（30分ごと）→ `data/` にコミット
- データベース不要・月額費用なし

## 仕組み

| | どこで動くか | 何をするか |
|---|---|---|
| トップページの一覧表 | Vercel の関数（60秒キャッシュ） | アクセス時に各社APIを直接呼ぶ。常に最新 |
| 推移グラフ | GitHub Actions → `data/history/YYYY-MM.json` | 30分ごとに追記。サイトは GitHub から実行時に読む |

収集コミットは `[skip ci]` を付けているため、データ更新でサイトの再デプロイは発生しない。

## 初回セットアップ（Kaz の作業）

1. GitHub に private リポジトリを作り、このディレクトリを push する。
2. Vercel でそのリポジトリを Import する（設定は既定のままでよい）。
3. Vercel の Environment Variables に以下を登録する。
   - `NEXT_PUBLIC_REPO_SLUG` = `<GitHubのユーザー名>/<リポジトリ名>`
   - `NEXT_PUBLIC_REPO_BRANCH` = `main`
   （※private リポジトリの場合、履歴JSONの実行時取得が失敗する。グラフを出すにはリポジトリを public にするか、
   `lib/history.ts` を GitHub API + トークン方式に変更する必要がある。まずは public 推奨）
4. Vercel の Settings → Domains に `hanbaijo.com` を追加し、表示される DNS レコードを
   ドメイン管理画面（お名前.com 等）に設定する。
5. GitHub の Settings → Actions → General → Workflow permissions を
   「Read and write permissions」に変更する（収集結果をコミットするため）。
6. Actions タブから `collect rates` を一度手動実行し、`data/` が更新されることを確認する。

## ローカルでの確認

```bash
npm install
npm run dev            # 実APIを叩く（要ネットワーク）
MOCK_RATES=1 npm run dev   # 固定データで画面だけ確認する
npm run collect        # 収集を1回だけ手で実行
```

## 取引所を追加するとき

`lib/exchanges.mjs` の `SOURCES` 配列に1件足すだけでよい。サイトの表・収集・計測方法ページの全てに自動で反映される。

```js
{
  id: 'xxx',
  name: '表示名',
  venue: 'exchange',   // または 'dealer'（販売所）
  url: 'https://...',  // 公式サイト。アフィリエイトリンクに差し替える箇所
  async fetch() {
    const d = await fetchJson('https://...');
    return { bid: n(d.bid), ask: n(d.ask) };
  },
}
```

## アフィリエイトリンクの差し替え

`lib/exchanges.mjs` の各社 `url` を ASP から発行されたリンクに置き換える。
トップページのリンクには `rel="nofollow sponsored"` が付与済み。

## 運用上の注意

- 販売所のレートは bitFlyer 以外は公開APIがない。追加する場合はスクレイピングとなり、画面変更で壊れる。
- ある社の取得が失敗しても、その行だけ「取得できませんでした」と表示され、他社の掲載は継続する。
- 全社の取得に失敗した場合、収集スクリプトは書き込みをせず異常終了する（誤ったデータを残さないため）。
