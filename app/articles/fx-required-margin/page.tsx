import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fx-required-margin' },
  title: 'FXの必要証拠金はいくら？1万通貨で計算',
  description: '国内個人向けFXの必要証拠金を、取引金額と4％の証拠金率から計算します。1,000通貨・1万通貨の例付き。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FX MARGIN</p>
      <h1>FXの必要証拠金はいくら？1万通貨で計算</h1>
      <p className="lede">
        国内の個人向け店頭FXでは、取引金額の4％以上の証拠金が必要です。
        これはレバレッジ25倍以下に相当します。まず取引金額を出し、その4％を計算します。
      </p>

      <h2>必要証拠金の計算式</h2>
      <div className="formula-box">
        <code>取引金額 ＝ 為替レート × 取引数量</code>
        <code>必要証拠金の目安 ＝ 取引金額 × 4％</code>
        <small>法令上の最低水準を使った単純試算です。会社・通貨ペア・相場状況により、実際の必要額が多くなる場合があります。</small>
      </div>

      <h2>米ドル/円が150円の場合</h2>
      <ul>
        <li>1,000通貨：150円 × 1,000 ＝ 15万円。4％は6,000円</li>
        <li>1万通貨：150円 × 10,000 ＝ 150万円。4％は6万円</li>
        <li>10万通貨：150円 × 100,000 ＝ 1,500万円。4％は60万円</li>
      </ul>
      <p>
        為替レートが上がれば、同じ数量でも取引金額と必要証拠金は増えます。
        口座画面ではFX会社が定める最新の証拠金額を確認してください。
      </p>

      <h2>必要証拠金ぴったりの入金は避ける</h2>
      <p>
        必要証拠金は取引を始める最低ラインであり、損失に耐えられる余裕資金ではありません。
        金融庁は、FX会社が損失を限定するためのロスカットルールを設けることを求めていますが、
        相場が急変するとロスカットが間に合わず、証拠金を上回る損失が発生する可能性があります。
      </p>
      <div className="callout">
        <strong>維持率と余裕額も確認</strong>
        <p>
          口座開設前には、必要証拠金だけでなく証拠金維持率の計算方法、ロスカット水準、追加入金のルールを公式資料で確認します。
        </p>
      </div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.fsa.go.jp/ordinary/iwagai/" target="_blank" rel="noopener noreferrer">金融庁「外国為替証拠金取引について」</a></li>
        </ul>
        <p>制度内容は2026年9月7日に確認しました。</p>
      </section>

      <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を逆算する →</Link></p>
      <p><Link href="/tools/cost-calculator">取引コスト計算機を開く →</Link></p>
      <p><Link href="/fx">FXコスト比較へ戻る →</Link></p>

      <section className="article-affiliate" aria-label="関連する広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。記事の評価・計算方法とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
