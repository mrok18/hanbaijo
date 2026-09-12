import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-fx-insufficient-funds' },
  title: '松井証券FXの不足金とは？15時期限・追証・ロスカットとの違い',
  description: '松井証券FXで決済損により不足金が発生した場合の原因、受渡日15時の解消期限、入金・スワップ振替の手順、追証・ロスカットとの違いを公式ルールで整理します。',
};

const faq = [
  { q: '不足金と追証は同じですか？', a: '同じではありません。不足金は、決済損などによって受渡しに必要な現金が不足した状態です。追証は、取引終了時点のリアルタイム維持率が100％未満になったときに発生する追加証拠金です。重なる場合もありますが、表示される金額と期限をそれぞれ確認してください。' },
  { q: '総合口座に入金するだけで不足金は解消しますか？', a: '入金だけでは足りません。総合口座へ入金した後、FX口座へ証拠金を振り替え、期限までに反映されたことを確認します。松井証券のルールでは、FX口座から総合口座への一方向の振替が基本です。' },
  { q: 'スワップポイントだけで不足金を解消できますか？', a: '振替できるスワップが不足金以上で、かつ操作できる状態なら選択肢になります。不足金を全額埋められない場合は、入金や建玉の一部・全部決済など、画面に表示された方法で期限内に解消します。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/matsui-fx-insufficient-funds', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">MATSUI FX / INSUFFICIENT FUNDS</p>
    <h1>松井証券FXの不足金とは？<br />15時期限・追証・ロスカットとの違い</h1>
    <p className="lede">松井証券FXの「不足金」は、決済損などによって受渡しに必要な現金が足りない状態です。取引中の維持率低下で起きる追証やロスカットとは、発生する場面と解消期限が異なります。公式ルールをもとに、確認する画面と対応の順番を整理します。</p>

    <div className="callout"><strong>先に押さえる3点</strong><ul>
      <li>不足金は、発生した取引の受渡日15:00までに入金またはスワップポイントの振替が必要です。</li>
      <li>総合口座へ入金した後、FX口座へ証拠金を振り替えるところまで完了させます。</li>
      <li>期限までに解消できない場合、松井証券の判断で口座間振替、建玉の強制決済、預り資産の処分などが行われる場合があります。</li>
    </ul></div>

    <h2>不足金・追証・ロスカットを比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>発生のきっかけ</th><th>解消の目安</th><th>解消できない場合</th></tr></thead><tbody>
      <tr><td className="ex-name">不足金</td><td>決済損などで受渡しに必要な現金が不足</td><td>発生取引の受渡日15:00まで</td><td>口座間振替・建玉決済等が行われる場合</td></tr>
      <tr><td className="ex-name">追証</td><td>取引終了時点のリアルタイム維持率が100％未満</td><td>翌取引日15:00まで</td><td>全建玉の強制決済となる場合</td></tr>
      <tr><td className="ex-name">ロスカット</td><td>選択したロスカット率（個人口座は50～90％）を下回る</td><td>定期監視中に即時処理</td><td>注文取消後、建玉を強制決済</td></tr>
    </tbody></table></div></div>
    <p>不足金と追証は同じ画面に表示されるとは限りません。FXお客様サイトの「お知らせ」や入出金・証拠金の明細で、金額、発生日、期限を確認してください。</p>

    <h2>不足金が発生する仕組み</h2>
    <p>保有建玉を決済すると、決済損益やスワップ損益が受渡し日に確定します。その決済損がFX口座の利用可能な現金を上回ると、受渡しに必要な金額が不足します。概念的には、次のように考えると確認しやすくなります。</p>
    <div className="fx-formula"><span>不足金の考え方（概念式）</span><strong>不足金</strong><b>＝ 決済損 − FX口座で利用できる現金</b><small>実際の不足金額・期限は、取引画面に表示される松井証券の案内を優先してください。</small></div>
    <p>急な相場変動でロスカットが不利な価格で約定した場合や、複数建玉を短時間に決済した場合にも、決済後の現金残高が不足する可能性があります。含み損があるだけで直ちに不足金になるのではなく、受渡しが必要な確定損益との関係で判断します。</p>

    <h2>15時までに解消する手順</h2>
    <ol>
      <li>FXお客様サイトのホーム・お知らせで、不足金額と「発生した取引の受渡日」を確認する</li>
      <li>総合口座の残高を確認し、不足額と振込反映時間を見込んで入金する</li>
      <li>総合口座からFX口座へ証拠金を振り替える</li>
      <li>必要なら、振替可能なスワップポイントをFX口座内で振り替える</li>
      <li>入出金履歴・証拠金状況で、15:00までに解消が反映されたことを確認する</li>
    </ol>
    <div className="callout"><strong>「入金した時刻」ではなく「FX口座へ反映した時刻」を見る</strong><p>銀行振込や口座間振替は、手続きをした時刻と取引画面へ反映する時刻が異なる場合があります。期限直前を避け、反映後の残高と不足金表示が消えたことまで確認します。</p></div>

    <h2>スワップ振替を使うときの注意</h2>
    <p>松井証券では、建玉を決済せずにスワップポイントだけを現金化する「スワップ振替」が案内されています。不足金の解消に使う場合は、振替できるスワップの全額が不足金以上か、対象建玉の条件を満たすかを確認します。振替後も受渡日までは出金可能額に反映されないことがあるため、出金目的の操作と不足金解消を混同しないでください。</p>
    <p><Link href="/articles/matsui-fx-swap-transfer-tax">スワップ振替の受渡日・出金・税金を詳しく見る →</Link></p>

    <h2>追証・ロスカットとの関係</h2>
    <p>追証は取引終了時点の維持率判定、ロスカットは取引中の維持率監視に基づく強制決済です。追証が発生している状態で不足金も生じるなど、複数の通知が重なることがあります。追証の期限は翌取引日15:00、不足金の期限は発生取引の受渡日15:00と、基準日が異なる点に注意してください。</p>
    <p><Link href="/articles/matsui-fx-margin-call-losscut">追証100％・ロスカット50～90％の基準を見る →</Link></p>

    <h2>期限を過ぎた場合に起こり得ること</h2>
    <p>松井証券の取引ルールでは、受渡日15:00までに不足金が解消されない場合、総合口座とFX口座の間で証拠金を振り替える、スワップポイントを振り替える、FX建玉を決済するなどの対応を会社の判断で行う場合があるとされています。さらに不足が残ると、預り資産の処分が行われる可能性もあります。自動的に必ず同じ順番で処理されるという意味ではないため、期限前の解消を優先してください。</p>

    <h2>不足金が出たときのチェックリスト</h2>
    <ul>
      <li>不足金の金額・発生日・受渡日15:00の期限を保存した</li>
      <li>総合口座への入金だけで終わらず、FX口座への振替まで行った</li>
      <li>スワップ振替を使う場合、振替可能額が不足金以上か確認した</li>
      <li>追証の期限（翌取引日15:00）と混同していない</li>
      <li>不足金表示が消え、入出金履歴・証拠金状況へ反映されたことを確認した</li>
      <li>期限直前の追加注文や出金を避け、余裕資金を残した</li>
    </ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX 取引ルール」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/9041?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「強制決済になる条件を教えてください」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1896?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「追証の解消方法を教えてください」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/25735?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「スワップ振替の方法を教えてください」</a></li>
      <li><a href="https://www.matsui.co.jp/support/tax/fx/" target="_blank" rel="noopener noreferrer">松井証券「FXの税制・確定申告」</a></li>
    </ul><p>不足金・追証・強制決済の情報は2026年9月10日に確認しました。金額や期限は取引画面の最新表示と公式ルールを優先してください。</p></section>

    <section className="article-affiliate" aria-label="松井証券の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は不足金・追証・ロスカットの説明に影響しません。FXは元本および利益が保証されず、預けた証拠金を上回る損失が生じる場合があります。</p></section>
    <p><Link href="/fx/matsui">松井証券FXの取引条件一覧へ →</Link></p>
    <p><Link href="/tools/matsui-fx-margin-calculator">必要証拠金・維持率を計算する →</Link></p>
    <p><Link href="/articles/matsui-withdrawal-unavailable">松井証券で出金できないときの確認項目 →</Link></p>
  </article>;
}
