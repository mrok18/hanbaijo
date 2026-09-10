import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '立花証券ストックハウスの信用取引｜手数料・金利・貸株料', description: '立花証券ストックハウスの信用取引について、個別・定額コース、金利・貸株料、追証や強制決済の費用を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">STOCKHOUSE / MARGIN</p><h1>ストックハウスの信用取引<br />手数料以外のコストを確認</h1>
  <p className="lede">信用取引は売買手数料だけでなく、買方金利、貸株料、品貸料、名義書換料などが発生します。コースと保有日数を分けて確認します。</p>
  <h2>信用取引のコスト</h2><div className="table-scroll"><table className="rates"><thead><tr><th>費用</th><th>発生する場面</th><th>確認ポイント</th></tr></thead><tbody><tr><td>信用個別・定額手数料</td><td>インターネット注文</td><td>コースと約定代金</td></tr><tr><td>買方金利</td><td>信用買いの保有</td><td>日数と金利率</td></tr><tr><td>貸株料・品貸料</td><td>信用売りの保有</td><td>銘柄・需給・日数</td></tr><tr><td>名義書換料</td><td>権利確定日をまたぐ買建</td><td>1売買単位ごとの費用</td></tr></tbody></table></div>
  <h2>強制決済の費用も別枠</h2><p>決済期日の到来や追加保証金・不足金の未充当で、会社が任意に反対売買する場合は、通常のインターネット手数料と異なる電話注文手数料が適用されることがあります。</p>
  <div className="callout"><strong>「信用手数料0円」だけで比較しない</strong><p>売買手数料の無料表示があっても、金利・貸株料・品貸料・強制決済費用は残ります。保有期間を入れて総額を試算します。</p><Link href="/articles/iwai-cosmo-margin-rules">他社信用取引のコストも比較する →</Link></div>
  <h2>発注前チェック</h2><ol><li>信用個別・定額コース</li><li>買いか売りか</li><li>保有予定日数</li><li>追証・不足金の期限と手数料</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://t-stockhouse.jp/product/margin/fee.php" target="_blank" rel="noopener noreferrer">立花証券ストックハウス「信用取引手数料」</a></li><li><a href="https://t-stockhouse.jp/service/fee.php" target="_blank" rel="noopener noreferrer">立花証券ストックハウス「手数料/諸経費」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/tachibana-stockhouse-fees">現物株式の手数料を確認する →</Link></p>
</article>; }
