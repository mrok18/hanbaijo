import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/okasan-kabu365-overview' }, title: '岡三オンラインのくりっく株365とは？取引所CFDの特徴と注意点', description: '岡三オンラインのくりっく株365について、取引所CFDの仕組み、売買方向、配当相当額、証拠金の考え方を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">岡三オンライン / くりっく株365</p><h1>くりっく株365とは？<br />取引所CFDの仕組みを整理</h1>
  <p className="lede">くりっく株365は東京金融取引所に上場する株価指数証拠金取引です。現物株と同じ「株価指数」という名前でも、証拠金取引・売り建て・配当相当額の扱いが異なります。</p>
  <h2>現物株との違い</h2><div className="table-scroll"><table className="rates"><thead><tr><th>項目</th><th>現物株</th><th>くりっく株365</th></tr></thead><tbody><tr><td>取引対象</td><td>個別株式など</td><td>株価指数・ETF等の証拠金取引</td></tr><tr><td>売買方向</td><td>通常は買いから</td><td>買い・売りの両方</td></tr><tr><td>資金</td><td>購入代金</td><td>必要証拠金＋余裕資金</td></tr><tr><td>保有中の調整</td><td>配当金</td><td>金利相当額・配当相当額</td></tr></tbody></table></div>
  <h2>取引時間と祝日</h2><p>公式案内では、くりっく株365はほぼ24時間、祝日も取引できる商品として説明されています。ただし、銘柄や取引所の休場、メンテナンスで取引できない時間があります。注文前に取引カレンダーを確認します。</p>
  <h2>配当相当額は売り買いで方向が変わる</h2><p>買い建玉では指数構成銘柄の配当相当額を受け取る場面がありますが、売り建玉では支払いになる場合があります。金利相当額と合わせ、保有日数に応じて試算します。</p>
  <div className="callout"><strong>「配当があるから必ず得」ではない</strong><p>価格変動、金利相当額、スプレッド、証拠金維持率を含めて判断します。配当相当額の実績値と付与日数は取引画面で確認してください。</p></div>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.okasan-online.co.jp/kabu365/products/kabu365.html" target="_blank" rel="noopener noreferrer">岡三オンライン「くりっく株365とは」</a></li><li><a href="https://www.clickkabu365.jp/faq/" target="_blank" rel="noopener noreferrer">くりっく株365公式FAQ</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/okasan-kabu365-margin">必要証拠金とロスカットを確認する →</Link></p><p><Link href="/articles/okasan-kabu365-dividend">金利・配当相当額を確認する →</Link></p><p><Link href="/cfd">CFDコスト比較へ戻る →</Link></p>
</article>; }
