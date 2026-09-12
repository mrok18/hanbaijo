import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-simultaneous-account-opening' },
  title: '松井証券で同時開設できる口座｜NISA・FX・信用・先物の申込み方',
  description: '松井証券の総合口座と同時に申込めるNISA、FX、信用、先物・オプションと、自動開設される米国株・投資信託口座を整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">MATSUI / ACCOUNT SETUP</p>
    <h1>松井証券で同時開設できる口座<br />NISA・FX・信用・先物を整理</h1>
    <p className="lede">松井証券の総合口座を申し込むと、米国株・投資信託口座は同時に開設されます。一方、NISA、FX、信用、先物・オプションなどは申込み項目を選び、商品ごとの条件・審査を経て開設します。</p>

    <h2>総合口座の申込み時に分ける3区分</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>対象</th><th>手続き</th></tr></thead><tbody>
      <tr><td className="ex-name">同時に開設</td><td>米国株口座・投資信託口座</td><td>現在の総合口座申込みでは同時開設</td></tr>
      <tr><td className="ex-name">同時申込みを選択可能</td><td>特定口座・NISA・信用・米国株信用・先物オプション・FX</td><td>申込画面で選び、必要な確認・審査を受ける</td></tr>
      <tr><td className="ex-name">開設後に追加</td><td>利用開始後に必要になった各商品口座</td><td>お客様サイトの各種口座開設状況から申込む</td></tr>
    </tbody></table></div></div>
    <p>総合口座が開設されたからといって、信用取引や先物取引を直ちに利用できるわけではありません。各商品の受付基準と審査結果を確認します。</p>

    <h2>NISAは新規開設なら同時申込みできる</h2>
    <p>NISA口座をどの金融機関にも開設していない場合、総合口座とNISA口座をオンラインで同時に申し込めます。NISAで日本株、米国株、投資信託を利用する予定なら、後から手続きを増やさずに済みます。</p>
    <div className="callout"><strong>他社NISAからの変更は別手続き</strong><p>他の金融機関でNISA口座を開設済みの場合は、総合口座の開設後に金融機関変更・再開設の手続きを行います。同時申込みと同じ流れではありません。</p></div>

    <h2>FX・信用・先物は審査を分けて考える</h2>
    <p>FX、信用取引、米国株信用取引、先物・オプション取引は、総合口座の申込みと同時に選択できます。ただし、取引経験、年齢、職業、資産状況、商品理解など、各口座の受付基準に基づく審査があります。</p>
    <p>使う予定がない高リスク商品まで一度に申し込む必要はありません。総合口座開設後も、お客様サイトから追加申込みできます。</p>

    <h2>FXだけならFX専用口座もある</h2>
    <p>松井証券は、総合口座とは別にFX専用口座も用意しています。当面MATSUI FXだけを利用する場合は入口が簡潔ですが、後から日本株、NISA、投資信託、先物などを利用するには総合口座への切替が必要です。</p>
    <div className="formula-box"><code>FXだけを使う → FX専用口座も選択肢<br />複数商品へ広げる → 総合口座から必要口座を選択</code><small>広告特典だけでなく、今後利用する商品と追加手続きで判断します。</small></div>

    <h2>口座ごとにコスト構造が違う</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>商品</th><th>主に確認するコスト</th></tr></thead><tbody>
      <tr><td className="ex-name">日本株</td><td>1日の約定代金合計とボックスレート</td></tr>
      <tr><td className="ex-name">米国株</td><td>売買手数料・為替コスト・現地費用</td></tr>
      <tr><td className="ex-name">投資信託</td><td>信託報酬・信託財産留保額等</td></tr>
      <tr><td className="ex-name">FX</td><td>スプレッド・スワップ・約定差</td></tr>
      <tr><td className="ex-name">先物・オプション</td><td>商品別手数料・取引単位・証拠金</td></tr>
    </tbody></table></div></div>
    <p>口座管理をまとめても、費用が一つになるわけではありません。利用する商品ごとに往復コストと保有コストを比較します。</p>

    <h2>申込み前の確認手順</h2>
    <ol>
      <li>総合口座とFX専用口座のどちらから始めるか決める</li>
      <li>NISAが新規か、他社からの金融機関変更か確認する</li>
      <li>本人確認書類とマイナンバー確認書類を用意する</li>
      <li>今すぐ使う商品口座だけ同時申込みする</li>
      <li>各商品の受付基準・リスク・コストを確認する</li>
    </ol>

    <div className="callout"><strong>広告提携と比較評価は分離します</strong><p>金融コストウォッチは松井証券の広告プログラムと提携しています。広告報酬を公称値・試算・掲載順位へ反映しません。</p></div>
    <section className="article-affiliate" aria-label="松井証券の広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
      <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。各口座の申込条件と投資リスクは公式サイトで確認してください。</p>
    </section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/service/account/" target="_blank" rel="noopener noreferrer">松井証券「口座・管理」</a></li>
      <li><a href="https://www.matsui.co.jp/apply/" target="_blank" rel="noopener noreferrer">松井証券「口座開設」</a></li>
      <li><a href="https://www.matsui.co.jp/nisa/apply/" target="_blank" rel="noopener noreferrer">松井証券「NISA口座開設までの流れ」</a></li>
      <li><a href="https://www.matsui.co.jp/fop/apply/" target="_blank" rel="noopener noreferrer">松井証券「先物・オプション取引 口座開設の流れ」</a></li>
      <li><a href="https://www.matsui.co.jp/apply/account/service/" target="_blank" rel="noopener noreferrer">松井証券「総合口座申込受付基準」</a></li>
    </ul><p>口座開設条件は2026年9月8日に公式ページで確認しました。申込方法・受付基準・同時開設対象は変更される場合があります。</p></section>

    <p><Link href="/articles/matsui-account-types">FX専用口座と総合口座の違いを見る →</Link></p>
    <p><Link href="/articles/matsui-ekyc-required-documents">eKYCと必要書類を確認する →</Link></p>
    <p><Link href="/articles/matsui-nisa-fees">松井証券NISAで無料になる費用を見る →</Link></p>
    <p><Link href="/stocks/matsui">松井証券の国内株コストを見る →</Link></p>
    <p><Link href="/fx/matsui">MATSUI FXの取引条件を見る →</Link></p>
  </article>;
}
