import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import Link from 'next/link';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = { title: '松井証券FXの手数料は無料？スプレッド・スワップ・受渡決済', description: '松井証券MATSUI FXの取引・口座・ロスカット・自動売買手数料の無料範囲と、スプレッド、スワップ、受渡決済手数料を円換算します。', alternates: { canonical: '/fx/matsui' } };

const faq = [
  { q: '松井証券FXの取引手数料はいくらですか？', a: '通常のFX取引手数料は無料です。口座開設・口座維持・ロスカット・出金の各手数料も無料と案内されています。ただし、スプレッドやスワップ、受渡決済を選ぶ場合の手数料は別です。' },
  { q: '松井証券FXの0.1銭は1万通貨でも適用されますか？', a: '米ドル／円の縮小スプレッド0.1銭は、数量上限1,000通貨以内の対象となる成行注文・成行決済が条件です。1万通貨や条件外の注文では通常スプレッドを確認してください。' },
  { q: '松井証券FXの受渡決済は無料ですか？', a: '無料ではありません。受渡決済には、通貨別に約定通貨数量×1～20円の手数料がかかります。通常の反対売買による決済とは別の手続きです。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: metadata.title, description: metadata.description, dateModified: '2026-09-12', url: 'https://hanbaijo.com/fx/matsui' },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  const details = <section className="provider-section" aria-labelledby="matsui-fee-breakdown">
    <p className="section-index">03 / FEE BREAKDOWN</p>
    <h2 id="matsui-fee-breakdown">松井証券FXの無料範囲と残るコスト</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>公称条件</th><th>確認ポイント</th></tr></thead><tbody>
      <tr><td className="ex-name">FX取引手数料</td><td><strong>0円</strong></td><td>全32通貨ペア</td></tr>
      <tr><td className="ex-name">口座開設・維持</td><td><strong>0円</strong></td><td>通常の口座費用</td></tr>
      <tr><td className="ex-name">ロスカット手数料</td><td><strong>0円</strong></td><td>約定価格の差や損失は別</td></tr>
      <tr><td className="ex-name">自動売買手数料・利用料</td><td><strong>0円</strong></td><td>自動売買にもスプレッドがある</td></tr>
      <tr><td className="ex-name">スプレッド</td><td>変動</td><td>通貨ペア・数量・注文・時間帯で確認</td></tr>
      <tr><td className="ex-name">スワップポイント</td><td>受取または支払</td><td>建玉を翌取引日へ持ち越すと発生</td></tr>
      <tr><td className="ex-name">受渡決済手数料</td><td><strong>数量×1～20円</strong></td><td>通貨別。受渡決済を選ぶ場合のみ</td></tr>
    </tbody></table></div><p className="panel-note">2026年9月12日確認。通常の反対売買を前提とする取引手数料と、例外的な受渡決済手数料を混同しないでください。条件は変更される場合があります。</p></div>

    <h2>米ドル／円スプレッドを円換算</h2>
    <div className="formula-box"><code>スプレッド相当額 ＝ スプレッド（銭）÷100 × 取引通貨数</code><small>0.1銭＝0.001円、0.2銭＝0.002円として計算。</small></div>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th className="num">取引数量</th><th className="num">0.1銭</th><th className="num">0.2銭</th></tr></thead><tbody>
      <tr><td className="num ex-name">1通貨</td><td className="num">0.001円</td><td className="num">0.002円</td></tr>
      <tr><td className="num ex-name">1,000通貨</td><td className="num"><strong>1円</strong></td><td className="num">2円</td></tr>
      <tr><td className="num ex-name">1万通貨</td><td className="num">10円</td><td className="num"><strong>20円</strong></td></tr>
    </tbody></table></div><p className="panel-note">公称スプレッドどおりに約定した単純例。0.1銭は米ドル／円で数量上限1,000通貨以内の対象成行注文・成行決済などに限られます。相場急変時等は原則固定の例外があります。</p></div>

    <h2>「手数料0円」と「総コスト0円」は違う</h2>
    <p>通常の売買では別建ての取引手数料はありませんが、買値と売値の差であるスプレッドは実質的な負担です。建玉を翌取引日へ持ち越すとスワップポイントが発生し、受取額より支払額が大きい通貨ペアや、途中で受取から支払へ変わる場合もあります。</p>
    <p>受渡決済は、FXサポートへ連絡し、外貨預金口座などを用意して進める通常の反対売買とは別の手続きです。手数料は通貨別に約定通貨数量×1～20円なので、希望する場合は対象通貨と単価を事前に確認します。</p>

    <h2>取引方法別の確認項目</h2>
    <ul>
      <li><strong>裁量取引：</strong>発注数量、注文方法、時間帯ごとのスプレッド</li>
      <li><strong>自動売買：</strong>手数料・利用料0円の外にあるスプレッドと複数建玉の必要資金</li>
      <li><strong>持ち越し：</strong>営業日ごとのスワップ受払額と付与日数</li>
      <li><strong>受渡決済：</strong>通貨別の単価、約定数量、外貨預金口座、受付手続き</li>
    </ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <p><Link href="/articles/matsui-fx-spread-rules">MATSUI FXの時間・数量別スプレッドを確認する →</Link></p>
    <p><Link href="/articles/matsui-fx-swap-calendar">スワップの付与時間と日数を確認する →</Link></p>
    <p><Link href="/tools/matsui-fx-spread-calculator">取引数量と回数からスプレッドを計算する →</Link></p>
  </section>;

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} /><FxProviderFactSheet provider={FX_PROVIDERS.matsui} affiliateOffer={AFFILIATE_OFFERS['matsui-fx']} pageTitle={<>松井証券FXの手数料は無料？<br />スプレッド・スワップまで確認</>} reviewedAt="2026-09-12" details={details} relatedArticles={[
    { href: '/articles/matsui-fx-auto-trading-setting', title: '自動売買の設定方法', description: 'レンジ、値幅、益出し幅、数量、停止ライン、100件上限を整理します。' },
    { href: '/articles/systre-select-365-vs-matsui-auto-trading', title: 'シストレセレクト365と比較', description: 'リピート型と選択型、1通貨と1万通貨、費用・必要資金の違いを比較します。' },
    { href: '/articles/matsui-simultaneous-account-opening', title: '総合口座と同時に申込める口座', description: 'FX・NISA・信用・先物を同時申込みする場合と、後から追加する場合を整理します。' },
    { href: '/articles/jfx-vs-matsui-fx', title: '松井証券FXとJFXを比較', description: '1通貨の少額取引とスキャルピング環境を、スプレッド条件まで含めて比較します。' },
    { href: '/tools/matsui-fx-margin-calculator', title: 'FX証拠金維持率計算機', description: '必要証拠金、維持率、追証・ロスカット水準までの余力を試算します。' },
    { href: '/tools/matsui-fx-spread-calculator', title: 'FXスプレッド計算機', description: '通貨数・スプレッド・取引回数から価格差コストを円換算します。' },
    { href: '/articles/matsui-fx-spread-rules', title: 'スプレッド0.1銭の条件', description: 'コアタイム、数量上限、注文種類から縮小・通常スプレッドを分けます。' },
    { href: '/articles/matsui-fx-margin-call-losscut', title: '追証とロスカットの違い', description: '100％の追証判定と、選べる50～90％のロスカット率を整理します。' },
    { href: '/articles/matsui-fx-insufficient-funds', title: '不足金の解消方法', description: '決済損による不足金を、15時期限、入金、スワップ振替、追証との違いから確認します。' },
    { href: '/articles/matsui-fx-leverage-margin', title: '必要証拠金とレバレッジを計算', description: '25倍・10倍・5倍・1倍の証拠金率、1万通貨の概算、実効レバレッジを整理します。' },
    { href: '/articles/matsui-fx-auto-trading-cost', title: '自動売買は100円から？', description: '複数注文の必要証拠金と評価損を分け、設定全体に必要な資金を計算します。' },
    { href: '/articles/matsui-fx-auto-trading-stop-restart', title: '自動売買の停止・再開', description: '停止時に建玉と決済注文を残すか、全決済するかを3つの選択肢で整理します。' },
    { href: '/articles/matsui-fx-swap-calendar', title: 'スワップ付与時間と計算', description: '1万通貨表示を実際の取引数量へ換算し、付与日数と受払額を確認します。' },
    { href: '/articles/matsui-fx-swap-transfer-tax', title: 'スワップ振替と税金', description: '受渡日、総合口座への振替、出金可能額、不足金と申告資料を整理します。' },
    { href: '/articles/matsui-fx-annual-profit-report', title: '年間損益と確定申告', description: '期間損益照会の確認方法、年間取引報告書がない場合の保存、損失繰越を整理します。' },
    { href: '/articles/matsui-fx-one-currency', title: 'MATSUI FXは100円から？', description: '1通貨の必要証拠金と、為替が1円動いたときの損益を計算します。' },
    { href: '/articles/matsui-fx-one-currency-order', title: '1通貨の注文方法と0.0001入力', description: '1万通貨単位で表示される数量欄の換算、PC・スマホの入力手順を確認します。' },
    { href: '/articles/matsui-account-types', title: 'FX専用口座と総合口座の違い', description: 'FXだけ使う場合と、株・NISA・先物へ広げる場合の入口を整理します。' },
  ]} /></>;
}
