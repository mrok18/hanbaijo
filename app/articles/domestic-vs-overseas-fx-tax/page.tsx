import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: '国内FXと海外FXの税金の違い｜20.315％・総合課税・損失繰越',
  description: '国内FXといわゆる海外FXの税務を、申告分離課税、総合課税、損益通算、3年繰越から比較。業者の所在地だけでなく、登録と取引の法的区分を確認する方法も整理します。',
};

const rows = [
  ['基本的な課税方式', '先物取引に係る雑所得等の申告分離課税', '一般に雑所得として総合課税'],
  ['税率', '所得税15％＋復興特別所得税＋地方税5％', '他の総合課税所得と合算し、所得税は超過累進税率'],
  ['国内FX等との損益通算', '同じ区分の一定のCFD・先物等と可能', '申告分離課税の国内FX等とは不可'],
  ['損失の3年繰越', '要件を満たす確定申告で可能', '先物取引に係る雑所得等の繰越制度は使えない'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/domestic-vs-overseas-fx-tax',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <p className="page-kicker">FX TAX / DOMESTIC VS OVERSEAS</p>
    <h1>国内FXと海外FXの税金の違い<br />20.315％・総合課税・損失繰越</h1>
    <p className="lede">「国内」「海外」という呼び方だけで税務を決めず、取引が税法上の申告分離課税の対象かを確認します。金融庁登録の有無は、税金だけでなく資金保全・出金トラブルを避けるうえでも重要です。</p>

    <div className="callout"><strong>所在地ではなく、取引の法的区分を確認</strong><p>国税庁は、金融商品取引法に規定する店頭デリバティブ取引に該当しない取引などは、申告分離課税ではないと案内しています。個別業者を名称だけで判定しないでください。</p></div>

    <h2>一般的な違い</h2>
    <div className="table-scroll"><table className="rates"><thead><tr><th>比較項目</th><th>登録された国内業者との一定のFX</th><th>申告分離課税の対象外となる取引</th></tr></thead><tbody>{rows.map(([item, domestic, overseas]) => <tr key={item}><td>{item}</td><td>{domestic}</td><td>{overseas}</td></tr>)}</tbody></table></div>
    <p><small>「海外FX」は法律上の課税区分名ではありません。表の右列は、海外所在業者との取引などで、先物取引に係る雑所得等の課税特例の対象外となる場合の一般的な整理です。</small></p>

    <h2>国内FXは20.315％の申告分離課税</h2>
    <p>国税庁は、店頭・市場デリバティブのいずれも、対象となるFXの差金等決済損益を「先物取引に係る雑所得等」として他の所得と区分し、所得税15％と地方税5％で課税するとしています。2026年分は所得税額に復興特別所得税が加わり、合計税率の一般的な目安は20.315％です。</p>
    <p><Link href="/articles/fx-tax-rate-calculation">20.315％の内訳と税額早見表を見る →</Link></p>
    <p><Link href="/tools/fx-tax-calculator">国内FX税金計算シミュレーターを使う →</Link></p>

    <h2>対象外の取引は一般に雑所得・総合課税</h2>
    <p>金融商品取引法に規定する店頭デリバティブ取引に該当しない場合などは、国税庁の案内上、申告分離課税の対象外です。一般に雑所得として給与など他の総合課税所得と合わせ、課税総所得金額に応じた所得税率で計算します。</p>
    <p>この場合、国内FXなどの「先物取引に係る雑所得等」と損益通算できず、その区分に用意された3年間の損失繰越も利用できません。雑所得内の通算可否も取引内容と所得区分を確認する必要があります。</p>

    <h2>金融庁登録を先に確認する</h2>
    <p>金融庁は、日本の居住者を相手にFXなどの金融商品取引業を行う者は日本の法令に基づく登録が必要であり、無登録の海外所在業者との取引を行わないよう注意喚起しています。海外でライセンスを持つという表示だけでは、日本での登録を確認したことにはなりません。</p>
    <ol>
      <li>金融庁の金融事業者一括検索で法人名・登録番号を確認</li>
      <li>公式サイトの運営法人名と検索結果が一致するか確認</li>
      <li>金融庁の無登録業者に関する警告一覧も確認</li>
      <li>入出金先や連絡先が別法人になっていないか確認</li>
    </ol>

    <h2>比較で間違えやすい点</h2>
    <ul>
      <li>高いレバレッジだけで必要資金を比較しない</li>
      <li>ボーナスを出金可能な現金とみなさない</li>
      <li>利益時の税率だけでなく、損失通算・繰越の違いも含める</li>
      <li>スプレッド、取引手数料、入出金・通貨換算費用まで円換算する</li>
      <li>国内業者の同名・類似名を装ったサイトに注意する</li>
    </ul>

    <section className="article-affiliate" aria-label="金融庁登録の提携中FXサービス">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} />
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
      <p className="affiliate-disclosure">金融庁登録業者の提携広告です。申込み成立時に当サイトが報酬を受け取る場合があります。税務情報と登録確認の判断は広告報酬と分けて作成しています。</p>
    </section>

    <h2>出典と確認日</h2>
    <ul>
      <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1521.htm" rel="noreferrer">国税庁 No.1521「外国為替証拠金取引（FX）の課税関係」</a></li>
      <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1522.htm" rel="noreferrer">国税庁 No.1522「先物取引に係る雑所得等の課税の特例」</a></li>
      <li><a href="https://www.fsa.go.jp/ordinary/kanyu/20090731.html" rel="noreferrer">金融庁「無登録の海外所在業者による勧誘にご注意ください」</a></li>
      <li><a href="https://www.fsa.go.jp/ordinary/chuui/mutouroku/04.html" rel="noreferrer">金融庁「無登録で金融商品取引業を行う者の名称等」</a></li>
    </ul>
    <p><small>確認日：2026年9月9日。取引の契約関係や所得区分により扱いが異なります。個別判断は所轄税務署または税理士へ確認してください。</small></p>
    <p><Link href="/articles/fx-profit-loss-offset-tax">金融商品別の損益通算を確認 →</Link></p>
  </article>;
}
