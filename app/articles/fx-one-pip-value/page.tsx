import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fx-one-pip-value' },
  title: 'FXの1pipsはいくら？1,000通貨・1万通貨の損益早見表',
  description: 'FXの1pipsの金額を、クロス円とドルストレート、1通貨・1,000通貨・1万通貨で計算します。円換算の方法も解説します。',
};

const YEN_PAIRS = [
  { units: '1通貨', one: '0.01円', ten: '0.1円', fifty: '0.5円' },
  { units: '1,000通貨', one: '10円', ten: '100円', fifty: '500円' },
  { units: '1万通貨', one: '100円', ten: '1,000円', fifty: '5,000円' },
] as const;

export default function Page() {
  return <article>
    <p className="page-kicker">FX PIP VALUE</p>
    <h1>FXの1pipsはいくら？<br />数量別の損益早見表</h1>
    <p className="lede">1pipsの金額は固定ではなく、取引数量と通貨ペア右側の通貨で変わります。米ドル/円など円絡みのペアなら計算は簡単ですが、EUR/USDなどは円換算がもう一段必要です。</p>
    <div className="callout"><strong>円絡み通貨ペアの基本</strong><p>一般的に1pips＝0.01円です。米ドル/円を1万通貨取引すると、1pipsの変動による損益は100円、50pipsなら5,000円です。</p></div>
    <h2>クロス円のpips損益早見表</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>取引数量</th><th className="num">1pips</th><th className="num">10pips</th><th className="num">50pips</th></tr></thead><tbody>{YEN_PAIRS.map(row => <tr key={row.units}><td className="ex-name">{row.units}</td><td className="num">{row.one}</td><td className="num">{row.ten}</td><td className="num">{row.fifty}</td></tr>)}</tbody></table></div><p className="panel-note">USD/JPY、EUR/JPY、GBP/JPYなど、右側がJPYの通貨ペアを想定した単純計算です。</p></div>
    <h2>計算式は「pips幅 × 数量」</h2>
    <div className="formula-box"><code>円絡みの損益 ＝ 値幅（pips）× 0.01円 × 取引数量</code><small>例：30pips × 0.01円 × 1,000通貨 ＝ 300円</small></div>
    <p>スプレッドが0.2pipsなら、1万通貨の価格差コストは概算20円です。値幅による利益からスプレッド相当額を引くと、実際の取引に近い損益を比較できます。</p>
    <h2>EUR/USDなどは決済通貨から円へ換算</h2>
    <p>EUR/USDは右側が米ドルなので、1pips＝0.0001米ドルです。1万通貨なら1pipsは1米ドル。米ドル/円が150円なら、円換算で約150円になります。</p>
    <div className="formula-box"><code>1pipsの円価値 ＝ 取引数量 × 0.0001決済通貨 × 決済通貨/円レート</code><small>EUR/USDを1万通貨、USD/JPY＝150円：10,000 × 0.0001 × 150 ＝ 150円</small></div>
    <h2>FX会社ごとの「pip」表記に注意</h2>
    <p>会社や画面によっては、円絡みの最小表示単位0.001円を1pipと呼ぶ場合があります。本記事と計算機では一般的な1pips＝0.01円で統一しています。比較時は「0.2pips」ではなく、実際に何円の値幅を指すかを確認してください。</p>
    <h2>損切り幅へ使うときの順序</h2>
    <ol><li>通貨ペアの1pipsの桁を確認する</li><li>自分の取引数量で1pipsの円価値を計算する</li><li>損切り幅と想定スプレッドを掛ける</li><li>許容損失額を超える場合は数量を切り下げる</li></ol>
    <div className="callout"><strong>計算値は損失上限ではありません</strong><p>逆指値は指定価格での約定を保証しません。急変や流動性低下時はスリッページやスプレッド拡大により、計算した損失額を超える場合があります。</p></div>
    <p><Link href="/tools/fx-pip-value-calculator">pips損益計算機で自分の数量を入力する →</Link></p>
    <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を逆算する →</Link></p>
    <p><Link href="/articles/fx-spread-cost">スプレッドを円に直す方法を見る →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算例とは分けて掲載しています。</p></section>
  </article>;
}
