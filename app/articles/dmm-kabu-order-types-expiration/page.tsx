import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-order-types-expiration' },
  title: 'DMM 株の注文方法｜成行・指値・逆指値・OCOと失効条件',
  description: 'DMM 株の国内株注文を、成行、指値、寄付、引け、不成、逆指値、OCO、IOC、注文期限、期限前に失効する条件、NISAの制限で整理します。',
};

const faq = [
  { q: 'DMM 株の注文期限は何日先まで指定できますか？', a: '当日、今週中、日付指定から選択でき、日付指定は最長30日先までです。ただし決算や権利処理などを跨ぐと、期限前に失効する場合があります。' },
  { q: '逆指値のトリガー価格で必ず約定しますか？', a: 'しません。トリガー到達後に指値または成行注文が市場へ発注される仕組みで、相場状況により未約定や価格のずれが生じます。' },
  { q: 'DMM 株のNISAで成行注文はできますか？', a: '国内株のNISA口座での買付けは指値注文のみです。注文前に預り区分も確認してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-order-types-expiration', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / ORDER TYPES</p>
    <h1>DMM 株の注文方法<br />執行条件と失効を整理</h1>
    <p className="lede">成行・指値だけでなく、寄付、引け、不成、逆指値、OCO、IOCは「いつ、どの条件で市場へ出すか」が異なります。約定を保証する機能ではないため、期限と失効条件まで一緒に確認します。</p>

    <h2>まず成行と指値を使い分ける</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>注文</th><th>価格の指定</th><th>主な特徴</th><th>注意点</th></tr></thead><tbody>
      <tr><td className="ex-name">成行</td><td>しない</td><td>価格より成立を優先</td><td>急変時は想定外の価格になる</td></tr>
      <tr><td className="ex-name">指値</td><td>買いは上限、売りは下限</td><td>希望価格を優先</td><td>価格に届かなければ成立しない</td></tr>
      <tr><td className="ex-name">逆指値</td><td>トリガー＋発注価格</td><td>到達後に注文を市場へ送る</td><td>トリガー価格での約定保証なし</td></tr>
      <tr><td className="ex-name">OCO</td><td>指値＋逆指値</td><td>片方成立で他方を自動取消</td><td>急変時の価格ずれは残る</td></tr>
    </tbody></table></div></div>
    <div className="callout"><strong>NISAの買付けは指値のみ</strong><p>DMM 株の国内株をNISA口座で買う場合、成行ではなく指値注文を使います。注文画面の預り区分と非課税投資枠も確認します。</p></div>

    <h2>寄付・引け・不成は有効な場面が限定される</h2>
    <ul>
      <li><strong>寄付：</strong>前場または後場の最初の値段でのみ成立を狙う</li>
      <li><strong>引け：</strong>前場または後場の最後の値段でのみ成立を狙う</li>
      <li><strong>不成：</strong>引けまでは指値、成立しなければ引けで成行へ変更</li>
      <li><strong>IOC：</strong>即時に成立できる数量だけ約定し、残りを失効。PC版PRO+で選択</li>
    </ul>
    <p>寄付・引け・不成・IOCは当日限りです。前場で失効すると後場へ引き継がれない条件もあるため、発注時刻と対象セッションを確認します。PC版PRO+では寄付・引け・不成の前場／後場を指定できます。</p>

    <h2>逆指値は「到達したら発注」</h2>
    <p>逆指値は指定したトリガー価格に到達するまで取引所へ発注されません。到達後に成行を出すと成立を優先できますが、急落・急騰時にはトリガー価格から離れた価格で約定する可能性があります。到達後に指値を出す方式では価格を限定できる一方、相場が飛び越えると未約定になることがあります。</p>
    <div className="fx-formula"><span>売却の逆指値例</span><strong>株価1,050円 → 1,000円以下で成行発注</strong><b>約定価格は1,000円とは限らない</b><small>値段が飛んだ場合や流動性が低い場合は、より低い価格で成立する可能性があります。</small></div>

    <h2>注文期限は3種類</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>期限</th><th>有効期間</th><th>使う前の確認</th></tr></thead><tbody>
      <tr><td className="ex-name">当日</td><td>当日の取引終了まで</td><td>未約定なら翌日に残らない</td></tr>
      <tr><td className="ex-name">今週中</td><td>その週の最終営業日まで</td><td>権利日や規制を跨がないか</td></tr>
      <tr><td className="ex-name">日付指定</td><td>最長30日先の指定日まで</td><td>長期注文でも失効条件あり</td></tr>
    </tbody></table></div></div>

    <h2>期限内でも注文が失効する主な例</h2>
    <ul><li>上場廃止、売買停止、信用取引規制の対象になった</li><li>決算や臨時株主総会などの権利付最終売買日を跨いだ</li><li>株式分割・併合・合併・交換・移転の権利付最終売買日を跨いだ</li><li>指値が値幅制限または呼値単位から外れた</li><li>特定口座を追加開設または廃止した</li><li>現物買付・信用新規建で取引余力不足、追証、立替金などが発生した</li></ul>
    <p>「30日先まで指定したから残り続ける」とは限りません。決算・配当・株式分割が近い銘柄では注文照会を再確認します。</p>

    <h2>発注前チェック</h2>
    <ol><li>銘柄、売買、数量、預り区分を確認</li><li>成立優先なら成行、価格優先なら指値を検討</li><li>逆指値はトリガー後の成行／指値まで指定</li><li>注文期限と権利付最終日を確認</li><li>発注後は注文照会で受付・約定・失効を確認</li></ol>
    <p><Link href="/articles/dmm-kabu-tools-comparison">注文に使うアプリ・PCツールを比較 →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/jp/stock/outline/" target="_blank" rel="noopener noreferrer">DMM 株「国内株式の商品概要・取引ルール」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00230/" target="_blank" rel="noopener noreferrer">DMM 株「注文方法の種類」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00229/" target="_blank" rel="noopener noreferrer">DMM 株「逆指値注文の取扱い」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00235/" target="_blank" rel="noopener noreferrer">DMM 株「注文の有効期限」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00224/" target="_blank" rel="noopener noreferrer">DMM 株「有効期限内に注文が失効する場合」</a></li>
    </ul><p>注文仕様は2026年9月9日に確認しました。対象商品、取引ツール、市場規制により利用できる条件が異なるため、最新の注文画面と公式ルールを優先してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。注文の成立や約定価格は保証されません。</p></section>
    <p><Link href="/articles/dmm-kabu-domestic-round-trip-fee">DMM 株の国内株往復手数料 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
