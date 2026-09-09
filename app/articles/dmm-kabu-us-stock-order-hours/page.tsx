import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株の米国株取引時間・注文方法｜逆指値は使える？',
  description: 'DMM 株の米国株現物を、夏時間・冬時間、注文受付時間、1株単位、成行・指値・IFDONE、逆指値非対応、最長30日の期限、円貨・外貨決済で整理します。',
};

const faq = [
  { q: 'DMM 株の米国株は何時から取引できますか？', a: '日本時間で冬時間は23時30分～翌6時、夏時間は22時30分～翌5時です。米国夏時間は原則3月第2日曜日から11月第1日曜日までです。' },
  { q: 'DMM 株の米国株で逆指値は使えますか？', a: '米国株式取引では逆指値と、逆指値を含むIFDONE注文は選択できません。利用できる注文条件を注文画面で確認してください。' },
  { q: '米国株は何株から注文できますか？', a: '1株以上、1株単位です。呼値は1セントで、米国市場には日本株のような値幅制限はありません。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-us-stock-order-hours', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / US STOCK ORDERS</p>
    <h1>DMM 株の米国株<br />取引時間と注文方法</h1>
    <p className="lede">米国株は日本の夜間に取引され、サマータイムで開始・終了が1時間変わります。DMM 株では1株から注文できますが、国内株と異なり逆指値を使えない点に注意が必要です。</p>

    <h2>取引時間は夏と冬で1時間違う</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>取引時間（日本時間）</th><th>通常の注文受付</th></tr></thead><tbody>
      <tr><td className="ex-name">夏時間</td><td>22:30～翌5:00</td><td>17:00～翌5:00</td></tr>
      <tr><td className="ex-name">冬時間</td><td>23:30～翌6:00</td><td>17:00～翌6:00</td></tr>
    </tbody></table></div></div>
    <p>米国夏時間は原則として3月第2日曜日から11月第1日曜日までです。切替週は取引開始・終了時刻を公式サイトで再確認します。米国市場には日本株のような昼休みはありません。</p>
    <div className="callout"><strong>注文受付時間と取引時間は別</strong><p>17時から注文入力はできますが、実際に市場で取引されるのは夏22時30分、冬23時30分以降です。メンテナンスによる受付停止時間もあります。</p></div>

    <h2>現物は1株から、呼値は1セント</h2>
    <ul><li>取引単位：1株以上、1株単位</li><li>呼値：1セント</li><li>値幅制限：なし</li><li>対象：NYSE、NYSE Arca、NASDAQのうちDMM.com証券が選定した銘柄</li></ul>
    <p>値幅制限がないため、決算発表や重要ニュースの直後には日本株以上に大きく価格が飛ぶ可能性があります。少額の1株注文でも成行の価格リスクは残ります。</p>

    <h2>利用できる注文を比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>注文</th><th>利用</th><th>仕組み</th><th>注意点</th></tr></thead><tbody>
      <tr><td className="ex-name">指値</td><td>可</td><td>希望価格を指定</td><td>価格に届かなければ未約定</td></tr>
      <tr><td className="ex-name">成行</td><td>可</td><td>成立を優先</td><td>急変時は想定外の価格になる</td></tr>
      <tr><td className="ex-name">IFDONE</td><td>指値／指値で可</td><td>親注文成立後に子注文を発注</td><td>親・子それぞれの成立条件を確認</td></tr>
      <tr><td className="ex-name">逆指値</td><td>不可</td><td>選択できない</td><td>逆指値を含むIFDONEも不可</td></tr>
    </tbody></table></div></div>
    <p>国内株の逆指値と同じ感覚で損切り注文を置くことはできません。保有後の出口価格、確認時刻、急変時に手動対応できるかを買付前に決めておきます。</p>
    <p><Link href="/articles/dmm-kabu-order-types-expiration">国内株の注文方法との違いを確認 →</Link></p>

    <h2>注文期限は当日・今週中・日付指定</h2>
    <p>日付指定は最長30日先まで選べます。ただし、期間内に決算や権利処理などがある場合は権利付き最終日までとなります。長期間の指値注文も、企業行動を跨いでそのまま残るとは限りません。</p>
    <ul><li><strong>当日：</strong>当日の取引終了まで</li><li><strong>今週中：</strong>その週の最終営業日まで</li><li><strong>日付指定：</strong>指定日の取引終了まで、最長30日先</li></ul>

    <h2>円貨決済と外貨決済を注文時に選ぶ</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>決済</th><th>資金</th><th>為替コスト</th><th>向く使い方</th></tr></thead><tbody>
      <tr><td className="ex-name">円貨決済</td><td>円</td><td>1ドルあたり片道25銭</td><td>両替操作を省きたい</td></tr>
      <tr><td className="ex-name">外貨決済</td><td>米ドル</td><td>売買時は発生しない</td><td>ドルを再利用したい</td></tr>
    </tbody></table></div></div>
    <p>円貨決済の買付余力は参考レートによる予定額に105％の余裕率を乗じて計算され、実際の約定金額は翌国内営業日に確定します。預り区分が「日本株信用代用」の米国株は、外貨決済で売却できない制限もあります。</p>
    <p><Link href="/articles/dmm-kabu-us-stock-fee">米国株の手数料・為替コストを計算 →</Link></p>

    <h2>注文前チェックリスト</h2>
    <ol><li>夏時間・冬時間と取引開始時刻を確認</li><li>取扱対象銘柄か確認</li><li>成行・指値・IFDONEから選択</li><li>逆指値を使えない前提で出口を決める</li><li>円貨・外貨決済と預り区分を確認</li><li>注文期限と決算・権利日を確認</li></ol>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/us/stock/outline/" target="_blank" rel="noopener noreferrer">DMM 株「米国株式の商品概要・取引ルール」</a></li>
      <li><a href="https://kabu.dmm.com/us/stock/us_time/" target="_blank" rel="noopener noreferrer">DMM 株「米国株式の取引時間」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00367/" target="_blank" rel="noopener noreferrer">DMM 株「米国株式の決済方法」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00398/" target="_blank" rel="noopener noreferrer">DMM 株「円貨決済の参考レート」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00731/" target="_blank" rel="noopener noreferrer">DMM 株「外貨決済で売却できない場合」</a></li>
    </ul><p>取引時間・注文仕様・決済条件は2026年9月9日に確認しました。祝日、短縮取引、メンテナンス、サマータイム切替により変わるため、発注前に最新情報を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。注文の成立や約定価格は保証されません。</p></section>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
