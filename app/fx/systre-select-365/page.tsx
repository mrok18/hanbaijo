import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'シストレセレクト365の費用は？利用料・手数料・推奨証拠金を確認',
  description: 'シストレセレクト365の初回利用料、売買手数料、推奨証拠金、自動売買を選ぶ前の確認点を公式情報から整理します。',
};

export default function SystrePage() {
  return (
    <div className="provider-page">
      <section className="provider-hero provider-hero-purple">
        <div>
          <p className="page-kicker">PROVIDER FACT SHEET / AUTO FX</p>
          <h1>自動売買の費用と、<br />過去成績を分けて見る。</h1>
          <p className="lede">シストレセレクト365は、くりっく365を対象とする投資助言・自動売買サービスです。利用料、取引コスト、推奨証拠金を別々に確認します。</p>
          <div className="hero-actions">
            <Link className="button secondary" href="/articles/fx-required-margin">必要証拠金を理解する</Link>
            <Link className="button secondary" href="/fx">FX比較へ戻る</Link>
          </div>
        </div>
        <aside className="provider-stamp">
          <span>OFFICIAL FACTS</span>
          <strong>2026.09.07 確認</strong>
          <dl>
            <div><dt>種類</dt><dd>取引所FX自動売買</dd></div>
            <div><dt>売買手数料</dt><dd>0円</dd></div>
            <div><dt>利用料</dt><dd>初回990円（税込）</dd></div>
            <div><dt>データ</dt><dd>再掲載許諾を照会中</dd></div>
          </dl>
        </aside>
      </section>

      <section className="provider-section">
        <p className="section-index">01 / COST MAP</p>
        <h2>「売買手数料0円」以外も確認する</h2>
        <div className="provider-fact-grid">
          <article><b>SERVICE FEE</b><h3>サービス利用料</h3><p>公式案内では初回のみ税込990円です。2026年6月から、毎年ではなく初回のみへ料金体系が変更されました。</p></article>
          <article><b>TRADE FEE</b><h3>売買手数料</h3><p>シストレセレクト365を利用した取引の売買手数料は0円と公表されています。</p></article>
          <article><b>MARKET COST</b><h3>スプレッド・スワップ</h3><p>くりっく365の実際の取引では、提示される売値・買値の差とスワップポイントを確認します。</p></article>
          <article><b>RISK</b><h3>損失と稼働数</h3><p>複数のストラテジーを動かすと必要資金も増えます。分散しても、相場次第で同時に損失が出る可能性があります。</p></article>
        </div>
      </section>

      <section className="provider-section provider-split">
        <div>
          <p className="section-index">02 / MARGIN</p>
          <h2>推奨証拠金は、最低証拠金とは違う</h2>
          <p>公式説明では、ストラテジーごとの推奨証拠金を次の合計で算出しています。</p>
          <div className="formula-box">
            <code>推奨証拠金 ＝ 現在の証拠金基準額 ＋ 過去1年間の最大ドローダウン</code>
            <small>過去の最大損失を超える損失が出ないことを保証する数字ではありません。</small>
          </div>
        </div>
        <div className="provider-checklist">
          <h3>ストラテジー選択時の確認事項</h3>
          <ul>
            <li>成績の集計期間と取引回数</li>
            <li>最大ドローダウンと推奨証拠金</li>
            <li>対象通貨ペアと売買頻度</li>
            <li>複数稼働時の合計必要資金</li>
          </ul>
          <p>ランキングやバックテストは過去の試算結果であり、将来の成績を約束するものではありません。</p>
        </div>
      </section>

      <section className="provider-source">
        <div><span>SOURCES</span><strong>フジトミ証券公式情報</strong></div>
        <div className="provider-source-links">
          <a href="https://www.fujitomi.co.jp/systra/service/fee/" target="_blank" rel="noopener noreferrer">手数料・利用料金 ↗</a>
          <a href="https://www.fujitomi.co.jp/systra/feature/howto-a/" target="_blank" rel="noopener noreferrer">推奨証拠金 ↗</a>
        </div>
      </section>

      <section className="provider-section" aria-labelledby="systre-related-guides">
        <p className="section-index">03 / RELATED GUIDES</p>
        <h2 id="systre-related-guides">稼働前に資金と総コストを確認</h2>
        <div className="provider-directory">
          <Link href="/articles/systre-select-365-vs-matsui-auto-trading"><span>COMPARE</span><h3>MATSUI FX自動売買と比較</h3><p>選択型とリピート型、1万通貨と1通貨、利用料と必要資金を同じ軸で比べます。</p><b>記事を読む →</b></Link>
          <Link href="/articles/systre-select-365-account-opening-flow"><span>START</span><h3>口座開設から稼働まで</h3><p>口座の有無で異なる申込経路、カード登録、入金、初回稼働を順番に確認します。</p><b>記事を読む →</b></Link>
          <Link href="/articles/systre-select-365-start-operation-flow"><span>HOW TO</span><h3>ランキングから稼働する手順</h3><p>成績期間、最大DD、数量、リスクメーターを確認して稼働する流れを整理します。</p><b>記事を読む →</b></Link>
          <Link href="/articles/systre-select-365-vs-otc-fx"><span>GUIDE</span><h3>取引所FXと店頭FXの違い</h3><p>価格提示、スワップ、手数料、証拠金の違いを同じ表で確認します。</p><b>記事を読む →</b></Link>
          <Link href="/articles/systre-select-365-losscut-margin-shortage"><span>GUIDE</span><h3>ロスカットと証拠金不足</h3><p>有効比率100％、150％のアラート、取引終了後の不足を区別します。</p><b>記事を読む →</b></Link>
          <Link href="/articles/systre-select-365-strategy-selection"><span>GUIDE</span><h3>ストラテジーの選び方</h3><p>利益率だけでなく、最大DD、リスクリターン率、必要資金を並べます。</p><b>記事を読む →</b></Link>
          <Link href="/articles/systre-select-365-stop-switch"><span>GUIDE</span><h3>停止・入替えの確認</h3><p>稼働停止後の建玉と、複数ストラテジー運用時の両建てを確認します。</p><b>記事を読む →</b></Link>
          <Link href="/articles/systre-select-365-recommended-margin"><span>GUIDE</span><h3>推奨証拠金と最大DD</h3><p>現在の証拠金基準額と過去1年の最大ドローダウンを分けて計算します。</p><b>記事を読む →</b></Link>
          <Link href="/articles/systre-select-365-total-cost"><span>GUIDE</span><h3>手数料0円の外側にあるコスト</h3><p>初回利用料、スプレッド、スワップ、取引回数による総負担を整理します。</p><b>記事を読む →</b></Link>
          <Link href="/articles/fx-swap-three-days"><span>GUIDE</span><h3>スワップが複数日分付く理由</h3><p>建玉を持ち越す自動売買で確認したい、付与日数の変則を解説します。</p><b>記事を読む →</b></Link>
        </div>
      </section>

      <section className="provider-offer" aria-label="シストレセレクト365の広告">
        <div>
          <p className="section-index">04 / OFFICIAL SITE</p>
          <h2>ストラテジーと最新条件を確認</h2>
          <p>以下はA8.netの提携広告です。掲載報酬は、事実確認や将来の実測順位に影響しません。</p>
        </div>
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} />
      </section>
      <p className="affiliate-disclosure">自動売買でも元本および利益は保証されません。過去成績だけで判断せず、契約締結前交付書面と取引所為替証拠金取引説明書を確認してください。</p>
    </div>
  );
}
