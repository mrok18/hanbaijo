import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '株の手数料はいくら？仕組み・買付と売却の計算方法',
  description: '株の売買手数料は0円からですが、証券会社・料金プラン・約定代金で変わります。1注文制と1日定額、買付・売却の往復手数料、板の価格差を計算します。',
  alternates: { canonical: '/articles/stock-round-trip-cost' },
};

const FEE_SYSTEMS = [
  ['1注文ごと', '1回の約定代金', '買付と売却を別々に計算する'],
  ['1日定額', '同じ日の約定代金合計', '現物・信用の合算範囲と日をまたぐ場合を確認する'],
  ['条件付き0円', 'コース・注文経路・年齢等', '無料対象外の注文や付随費用を確認する'],
] as const;

const FAQS = [
  {
    question: '株の売買手数料はいくらですか？',
    answer: '0円からですが、一律ではありません。証券会社、料金プラン、1回または1日の約定代金、注文経路などで変わります。買付と売却を両方行う場合は、往復の条件で確認します。',
  },
  {
    question: '株は買うときと売るときの両方に手数料がかかりますか？',
    answer: '1注文ごとの料金では、通常は買付と売却を別々の注文として計算します。1日定額では同日の約定代金合計で決まり、条件付き0円のコースでは対象取引なら売買手数料が0円になる場合があります。',
  },
  {
    question: '株の手数料が0円なら取引コストも0円ですか？',
    answer: '必ずしも0円ではありません。板の売値と買値の差、単元未満株のスプレッド、信用取引の金利・貸株料、電話注文や強制決済の費用などが発生する場合があります。',
  },
] as const;

export default function Page() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    datePublished: '2026-09-07',
    dateModified: '2026-09-12',
    mainEntityOfPage: 'https://hanbaijo.com/articles/stock-round-trip-cost',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <p className="page-kicker">DOMESTIC STOCK COST</p>
      <h1>株の手数料はいくら？<br />仕組みと売買コストの計算方法</h1>
      <p className="lede">
        株の売買手数料は0円からですが、証券会社、料金プラン、約定代金、注文方法によって変わります。
        買付と売却の手数料を足し、板の価格差や信用取引の保有費用を分けると、実際の負担を確認できます。
      </p>

      <div className="callout"><strong>先に結論：株の手数料は「0円〜」で一律ではない</strong><p>1注文ごとに決まるプラン、1日の約定代金合計で決まるプラン、条件を満たすと0円になるプランがあります。買って売るまでの負担は、片道表示ではなく往復で比較します。</p></div>

      <h2>株の売買手数料が決まる3つの仕組み</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>料金体系</th><th>判定する金額・条件</th><th>計算時の注意</th></tr></thead><tbody>{FEE_SYSTEMS.map(([system, basis, note]) => (
        <tr key={system}><td className="ex-name">{system}</td><td>{basis}</td><td>{note}</td></tr>
      ))}</tbody></table></div><p className="panel-note">名称や無料条件は証券会社ごとに異なります。注文前に現在選択中の手数料コースを確認してください。</p></div>

      <h2>株は買付と売却の両方を計算する</h2>
      <p>1注文ごとの料金表を使う場合、買付と売却は別々の注文です。たとえば買付手数料55円、売却手数料55円なら、売買手数料の往復合計は110円です。</p>
      <div className="formula-box">
        <code>往復の売買手数料 ＝ 買付手数料 ＋ 売却手数料</code>
        <small>同じ金額で約定するとは限らないため、実際は買付時と売却時の約定代金をそれぞれ料金表に当てはめます。</small>
      </div>
      <p>1日定額の料金では、同じ日に買って売ればその日の約定代金合計で判定します。日をまたいで売却した場合は、買付日と売却日の料金を別々に確認します。</p>

      <h2>手数料と板の価格差を合計する</h2>
      <div className="formula-box">
        <code>往復コスト ＝ 買付手数料 ＋ 売却手数料 ＋（最良売り気配 − 最良買い気配）× 株数</code>
        <small>同時点の気配ですぐ反対売買できたと仮定する単純計算。実際の値動きや約定差は別です。</small>
      </div>

      <h2>100株を売買する例</h2>
      <p>
        最良買い気配が1,000円、最良売り気配が1,001円なら、価格差は1株あたり1円です。
        売買単位が100株なら、価格差による負担は100円。買付・売却手数料が各55円なら、往復の概算は210円です。
      </p>
      <ul>
        <li>板の価格差：1円 × 100株 ＝ 100円</li>
        <li>売買手数料：55円 × 2回 ＝ 110円</li>
        <li>往復コスト：100円 ＋ 110円 ＝ 210円</li>
      </ul>
      <p>東証の内国株は原則100株単位です。株価1,001円を100株買うと、買付代金は100,100円になります。</p>

      <h2>呼値の単位とスプレッドは同じではない</h2>
      <p>
        呼値は注文できる価格の刻みです。実際の最良売り気配と最良買い気配が、常に1呼値だけ離れているとは限りません。
        流動性が低い銘柄や相場が急変している場面では、複数の呼値にまたがることがあります。
      </p>

      <h2>売買金額に対する割合へ直す</h2>
      <div className="formula-box">
        <code>往復コスト率（%）＝ 往復コスト ÷ 約定代金 × 100</code>
        <small>約定代金は、比較時のルールを決めて買付代金などに統一します。</small>
      </div>
      <p>買付代金が100,100円、往復コストが210円なら、単純な往復コスト率は約0.21%です。</p>

      <h2>手数料0円でも残る可能性がある費用</h2>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>板の価格差</h3><p>最良売り気配と最良買い気配の差です。成行注文では板の厚さによって複数価格で約定する場合もあります。</p></article>
        <article><b>02</b><h3>信用取引の保有費</h3><p>買方金利、貸株料、逆日歩、事務管理費などを建玉と保有日数に応じて確認します。</p></article>
        <article><b>03</b><h3>単元未満株の条件</h3><p>通常の売買手数料が0円でも、取引価格にスプレッドが含まれる、売却方法が異なる場合があります。</p></article>
        <article><b>04</b><h3>注文経路・特殊注文</h3><p>電話注文、強制決済、立会外取引などには通常のインターネット手数料と異なる料金が適用される場合があります。</p></article>
      </div>

      <div className="callout">
        <strong>信用取引は保有日数も必要です</strong>
        <p>信用金利、貸株料、管理費などが加わるため、現物取引と同じ式だけでは比較できません。</p>
      </div>

      <h2>株の手数料に関するFAQ</h2>
      {FAQS.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.jpx.co.jp/equities/trading/domestic/03.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「売買単位」</a></li>
          <li><a href="https://www.jpx.co.jp/equities/trading/domestic/07.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「呼値の単位」</a></li>
          <li><a href="https://www.matsui.co.jp/stock/domestic/fee/" target="_blank" rel="noopener noreferrer">松井証券「現物取引 手数料」</a></li>
        </ul>
        <p>制度・料金体系は2026年9月12日に確認。55円の手数料は計算説明用の仮定で、特定の証券会社の現在料金を示すものではありません。</p>
      </section>

      <p><Link href="/tools/cost-calculator">取引コスト計算機で試す →</Link></p>
      <p><Link href="/stocks/domestic-fee-comparison">国内株4社の手数料を比較する →</Link></p>
      <p><Link href="/articles/dmm-kabu-domestic-round-trip-fee">DMM 株の往復手数料を具体例で見る →</Link></p>
      <p><Link href="/stocks">株式コスト比較へ戻る →</Link></p>
    </article>
  );
}
