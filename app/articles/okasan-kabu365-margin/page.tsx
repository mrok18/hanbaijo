import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/okasan-kabu365-margin' }, title: '岡三オンラインくりっく株365の証拠金｜レバレッジと維持率を確認', description: 'くりっく株365の証拠金、レバレッジ、追証・ロスカットを取引所CFDの仕組みとして整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">岡三オンライン / MARGIN</p><h1>くりっく株365の証拠金<br />レバレッジと余力を確認</h1>
  <p className="lede">くりっく株365では、証拠金の数倍から数十倍の金額を取引できます。取引倍率だけで判断せず、必要証拠金・評価損益・余裕資金を分けて管理します。</p>
  <h2>証拠金と取引金額</h2><div className="table-scroll"><table className="rates"><thead><tr><th>数字</th><th>意味</th><th>確認方法</th></tr></thead><tbody><tr><td>取引金額</td><td>指数価格×取引単位</td><td>銘柄の取引仕様を見る</td></tr><tr><td>必要証拠金</td><td>建玉を保有するための担保</td><td>取引画面・取引所基準額</td></tr><tr><td>有効証拠金</td><td>預託金＋評価損益</td><td>口座照会で確認</td></tr><tr><td>余力</td><td>追加発注・急変に耐える資金</td><td>必要証拠金との差額</td></tr></tbody></table></div>
  <h2>証拠金不足とロスカット</h2><p>株価指数が急変すると、評価損益の悪化で有効証拠金が減少します。取引終了時の判定や証拠金基準額の変更で不足が発生する場合があるため、入金期限・決済期限を取引ルールで確認します。</p>
  <div className="callout"><strong>余裕資金を別に残す</strong><p>必要証拠金ちょうどの入金では、値動きに耐えられません。1枚あたりの値動き損益を計算し、想定損失を吸収できる余力を確保します。</p><Link href="/tools/nikkei225-margin-buffer-calculator">日経225証拠金余力を計算する →</Link></div>
  <h2>注文前チェック</h2><ol><li>銘柄の取引単位と価格</li><li>現在の必要証拠金</li><li>証拠金基準額の適用期間</li><li>不足時の入金・決済期限</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.okasan-online.co.jp/kabu365/products/kabu365.html" target="_blank" rel="noopener noreferrer">岡三オンライン「くりっく株365とは」</a></li><li><a href="https://www.okasan-online.co.jp/procedure/account/kabu365/kabu365_rule.pdf" target="_blank" rel="noopener noreferrer">岡三オンライン「株365取引ルール」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/okasan-kabu365-overview">くりっく株365の仕組みを確認する →</Link></p><p><Link href="/articles/okasan-kabu365-dividend">金利・配当相当額を確認する →</Link></p>
</article>; }
