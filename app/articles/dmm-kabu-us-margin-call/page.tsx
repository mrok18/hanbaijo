import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-us-margin-call' },
  title: 'DMM 株の米国株信用の追証｜30％・2,500ドルと解消期限',
  description: 'DMM 株の米国株信用取引について、追証予定と確定の時刻、最低預託率30％、最低保証金2,500ドル、翌々国内営業日15時30分の期限、返済による解消を整理します。',
};

const faq = [
  { q: 'DMM 株の米国株信用は何％で追証になりますか？', a: '預託率が30％未満、または受入保証金が30万円相当額として案内される2,500ドル未満になると追証が発生します。' },
  { q: '追証確定後に米ドルを入金すれば解消できますか？', a: 'DMM 株の公式案内では、確定後は米国株信用建玉の一部または全部を反対売買で返済して解消します。為替取引や代用株の振替、他社からの入庫は解消額へ充当できません。' },
  { q: '株価が戻れば追証は自然に消えますか？', a: '消えません。一度確定した追証は相場変動による自然解消が認められず、期限までの建玉返済が必要です。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-us-margin-call', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / US MARGIN CALL</p>
    <h1>DMM 株の米国株信用の追証<br />30％・2,500ドルと期限</h1>
    <p className="lede">米国株信用は、朝の「追証発生予定」と午後の「追証確定」で対応方法が変わります。確定後は入金ではなく、建玉返済で解消する点が国内信用との大きな違いです。</p>

    <div className="callout"><strong>確定後は建玉返済で解消</strong><p>追証確定後は、既存の米国株信用建玉を反対売買し、返済した建玉代金の30％を追証額へ充当します。</p></div>

    <h2>追証の基準と期限</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>DMM 株の米国株信用</th></tr></thead><tbody>
      <tr><td className="ex-name">新規建ての預託率</td><td>50％以上</td></tr>
      <tr><td className="ex-name">追証基準</td><td>預託率30％未満</td></tr>
      <tr><td className="ex-name">金額基準</td><td>受入保証金2,500ドル未満</td></tr>
      <tr><td className="ex-name">確定後の解消方法</td><td>米国株信用建玉の反対売買</td></tr>
      <tr><td className="ex-name">解消期限</td><td>発生日の翌々国内営業日15時30分</td></tr>
    </tbody></table></div><p className="panel-note">2,500ドルは30万円相当額として案内される最低委託保証金で、変更時は公式サイトで告知されます。</p></div>

    <h2>予定通知から確定までの流れ</h2>
    <ol><li><strong>米国市場終了後7時30分頃：</strong>概算で追証発生予定を判定・通知</li><li><strong>国内営業日15時30分頃：</strong>確定値を判定</li><li><strong>16時30分頃：</strong>取引ツールとメールで確定額を通知</li><li><strong>翌国内営業日の米国市場：</strong>建玉を返済できる実質的な最終取引機会</li><li><strong>翌々国内営業日15時30分：</strong>追証解消期限</li></ol>
    <p>朝の予定通知がなくても、国内株の代用評価などが変動し、15時30分の確定判定で追証になる場合があります。</p>

    <h2>予定段階と確定後で対応が違う</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>段階</th><th>主な対応</th><th>注意点</th></tr></thead><tbody>
      <tr><td className="ex-name">追証発生予定</td><td>代用株の振替等で預託率を改善</td><td>余裕を持った額・時刻で対応</td></tr>
      <tr><td className="ex-name">追証確定後</td><td>建玉の一部または全部を返済</td><td>入金・為替取引・株式振替は充当不可</td></tr>
    </tbody></table></div></div>

    <h2>返済額の30％が追証へ充当</h2>
    <p>確定した追証は、返済した米国株信用建玉代金の30％相当額が減額されます。たとえば追証が1,500ドルなら、単純計算では5,000ドル分の建玉返済が必要です。</p>
    <div className="fx-formula"><span>追証1,500ドルの例</span><strong>1,500ドル ÷ 30％</strong><b>= 建玉5,000ドルを返済</b><small>実際は価格変動、約定額、追加の追証、端数等を取引画面で確認してください。</small></div>

    <h2>期限日は市場が開く前</h2>
    <p>解消期限は日本時間の15時30分ですが、米国市場はその後に始まります。そのため建玉返済による解消は、期限当日ではなく、その前の現地取引日中に注文を約定させる必要があります。</p>
    <div className="callout"><strong>注文を出しただけでは解消にならない</strong><p>返済注文が未約定のままでは充当されません。翌々国内営業日から逆算し、前の米国市場で約定結果まで確認します。</p></div>

    <h2>相場回復では自然解消しない</h2>
    <p>確定後に株価が上昇して預託率が30％以上へ戻っても、追証は解消されません。取引画面の確定追証額を基準に必要な建玉を返済します。また、相場がさらに下落すると追加の追証が発生する可能性があります。</p>

    <h2>未解消なら全建玉を強制返済</h2>
    <p>期限までに解消しない場合、期限直後の米国市場開始後に、保有するすべての米国株信用建玉が強制返済されます。強制返済による損金で不足金・立替金が発生した場合は、為替取引などで米ドルを充当する必要があります。</p>

    <h2>追証を避ける確認項目</h2>
    <ul><li>新規建ての50％ぎりぎりではなく米ドル余力を残す</li><li>建玉と同じ銘柄を代用にする二階建を避ける</li><li>米国株と代用株の価格を同時に監視する</li><li>朝7時30分頃と夕方16時30分頃の通知を確認する</li><li>国内外の休場日を含めて解消期限を計算する</li><li>返済注文の約定まで確認する</li></ul>
    <p><Link href="/articles/dmm-kabu-us-margin-cost">米国株信用の手数料・金利を計算 →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/us/margin/margin_call/" target="_blank" rel="noopener noreferrer">DMM 株「米国株信用取引の追加保証金」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00787/" target="_blank" rel="noopener noreferrer">DMM 株「米国株信用取引の追証とは」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00781/" target="_blank" rel="noopener noreferrer">DMM 株「追加保証金が発生した場合の対応」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00794/" target="_blank" rel="noopener noreferrer">DMM 株「追証は自然解消するか」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00795/" target="_blank" rel="noopener noreferrer">DMM 株「期限までに解消しない場合」</a></li>
    </ul><p>追証ルールは2026年9月9日に確認しました。時刻、最低保証金、対応方法は変更される場合があるため、取引ツールの通知と最新公式案内を優先してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。米国株信用は価格・為替変動により保証金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/dmm-kabu-margin-account-opening">信用取引口座の申込と審査 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
