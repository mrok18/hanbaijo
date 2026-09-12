import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-shareholder-benefit' },
  title: 'DMM 株の株主優待はいつ？権利付き最終日と探し方を整理',
  description: 'DMM 株で株主優待を受け取る条件、権利付き最終日・権利落ち日、アプリでの探し方、信用取引や単元未満株の注意点を整理します。',
};

const faq = [
  { q: '株主優待をもらうにはいつまでに買えばよいですか？', a: '権利確定日に株主名簿へ載るよう、権利付き最終日までに現物株を買い付けて保有します。権利落ち日以降に売却しても、確定した優待の権利は失われません。' },
  { q: '信用取引の買建玉でも株主優待はもらえますか？', a: '信用取引の買建玉は株主優待の権利を取得できません。配当についても現物株とは異なり、配当相当額の受け払いになります。' },
  { q: 'DMM 株のアプリで優待銘柄を探せますか？', a: '国内株の銘柄検索で、優待品の種類、投資金額、権利確定月などの条件から探せます。優待内容や基準株数は企業ごとに異なるため、最終的には発行会社のIR資料で確認します。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-shareholder-benefit', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / SHAREHOLDER BENEFIT</p>
    <h1>DMM 株の株主優待はいつ？<br />権利付き最終日・探し方・注意点</h1>
    <p className="lede">株主優待は、銘柄ごとの権利確定日に株主名簿へ載っていることが条件です。DMM 株では、権利付き最終日、現物と信用の違い、アプリの検索条件を分けて確認すると、買付後の行き違いを減らせます。</p>

    <div className="callout"><strong>優待目的なら現物株を権利付き最終日まで保有</strong><p>権利落ち日は権利付き最終日の翌営業日です。権利落ち日以降に売却しても、すでに確定した優待の権利は残ります。</p></div>

    <h2>権利取得までの3つの日付</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>日付</th><th>意味</th><th>投資家の確認</th></tr></thead><tbody>
      <tr><td className="ex-name">権利付き最終日</td><td>権利を得るための最終買付日</td><td>取引時間終了時点で現物株を保有</td></tr>
      <tr><td className="ex-name">権利落ち日</td><td>権利が株価から切り離される日</td><td>この日以降に売却しても優待権利は残る</td></tr>
      <tr><td className="ex-name">権利確定日</td><td>株主として確定する基準日</td><td>企業の優待条件・基準株数を確認</td></tr>
    </tbody></table></div></div>
    <p>国内株は約定日から起算して3営業日目に受渡しとなるため、権利確定日当日に買っても間に合いません。月末以外が基準日の銘柄もあるため、企業のIRカレンダーを優先します。</p>

    <h2>DMM 株アプリで優待銘柄を探す</h2>
    <ol><li>DMM 株アプリまたはDMM株 STANDARDへログイン</li><li>国内株の銘柄検索・銘柄情報を開く</li><li>優待品の種類、投資金額、権利確定月で絞り込む</li><li>優待の基準株数、継続保有条件、長期保有条件を確認</li><li>権利付き最終日と権利落ち日をカレンダーへ記録</li></ol>
    <p>検索結果の利回りや最低投資金額は株価で変動します。優待の廃止・変更、申込期限、発送時期は企業ごとに異なるため、銘柄ページから発行会社のIR情報へ進みます。</p>

    <h2>現物・信用・単元未満株の違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>保有方法</th><th>株主優待</th><th>確認ポイント</th></tr></thead><tbody>
      <tr><td className="ex-name">現物株</td><td>条件を満たせば対象</td><td>基準株数・継続保有期間・権利日</td></tr>
      <tr><td className="ex-name">信用買い建玉</td><td>対象外</td><td>配当相当額の受け払いとは別制度</td></tr>
      <tr><td className="ex-name">単元未満株・積立</td><td>企業条件による</td><td>優待の基準株数を満たすか確認</td></tr>
    </tbody></table></div></div>
    <p>単元未満株は、買い付けた株数が優待の基準に届かない場合があります。単元株と同じ扱いとは限らないため、株数だけでなく名簿への登録条件も確認します。</p>

    <h2>優待利回りはコスト込みで見る</h2>
    <p>優待品の金額を株価だけで割るのではなく、売買手数料、保有期間、権利落ちによる価格変動、税金を含めて判断します。優待を受け取るための権利日に向けて株価が上がり、権利落ち日に下がることもあるため、優待相当額がそのまま利益になるわけではありません。</p>
    <div className="fx-formula"><span>優待利回りの単純な目安</span><strong>優待相当額 ÷ 投資金額 × 100</strong><b>例：3,000円 ÷ 300,000円 ＝ 1.0%</b><small>手数料、税金、株価変動、継続保有条件は含まない概算です。</small></div>
    <p><Link href="/articles/stock-round-trip-cost">国内株の往復手数料を確認する →</Link></p>

    <h2>配当金の受取方式も同時に確認</h2>
    <p>優待と配当は別の制度ですが、権利確定日が同じ銘柄もあります。配当をNISAで非課税にするには株式数比例配分方式が必要です。優待だけを見て受取方式を後回しにしないよう、口座設定を事前に確認します。</p>
    <p><Link href="/articles/dmm-kabu-dividend-receiving-tax">DMM 株の配当金受取方法と税金 →</Link></p>

    <h2>発注前チェックリスト</h2>
    <ul><li>権利付き最終日が営業日か、取引時間を確認した</li><li>現物株で基準株数を満たす数量を買う</li><li>継続保有期間・長期保有条件を確認した</li><li>優待の申込期限、発送時期、利用期限を確認した</li><li>権利落ち後の価格変動と売買コストを見積もった</li><li>優待変更・廃止のIR情報を確認した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/jp/benefit/" target="_blank" rel="noopener noreferrer">DMM 株「国内株式の株主優待・配当金」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00351/" target="_blank" rel="noopener noreferrer">DMM 株「株主優待や配当の権利を取得できる日」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00352/" target="_blank" rel="noopener noreferrer">DMM 株「配当金や優待の受取方法」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00335/" target="_blank" rel="noopener noreferrer">DMM 株「株式数比例配分方式」</a></li>
    </ul><p>権利日とサービス仕様は2026年9月9日に確認しました。優待内容、基準株数、継続保有条件は企業ごとに変更されるため、買付前に最新のIR情報を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。株主優待の内容・利回り・権利取得を保証するものではありません。</p></section>
    <p><Link href="/articles/dmm-kabu-tools-comparison">DMM 株のアプリ・PCツールを比較する →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシートへ →</Link></p>
  </article>;
}
