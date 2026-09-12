import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-fx-margin-call-losscut' },
  title: 'MATSUI FXの追証とロスカット｜選べる50～90％を整理',
  description: 'MATSUI FXの追証、ロスカット、リアルタイム維持率について、100％の追証判定と個人口座で選べる50～90％のロスカット率を整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">MATSUI FX / MARGIN SAFETY</p>
      <h1>MATSUI FXの追証とロスカット<br />選べる50～90％を整理</h1>
      <p className="lede">追証は取引終了時点のリアルタイム維持率が100％未満の場合に発生します。一方、個人口座のロスカット率は50％・60％・70％・80％・90％から選択でき、取引中の強制決済水準として使われます。</p>

      <div className="callout"><strong>追証100％とロスカット率は別</strong><p>ロスカット率を50％に設定していても、取引終了時点で維持率100％未満なら追証が発生します。追証の期限前に選択したロスカット率を下回れば、先にロスカットされる可能性があります。</p></div>

      <h2>判定基準と期限を比較</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>制度</th><th>個人口座の基準</th><th>判定時点</th><th>主な結果</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">プレアラート</td><td>維持率120％未満</td><td>取引中</td><td>お客様サイトに通知</td></tr>
            <tr><td className="ex-name">アラート</td><td>維持率100％未満</td><td>取引中</td><td>お客様サイトに通知</td></tr>
            <tr><td className="ex-name">追加証拠金（追証）</td><td>取引終了時に100％未満</td><td>取引日ごとの終了時点</td><td>翌取引日15:00までに解消</td></tr>
            <tr><td className="ex-name">ロスカット</td><td>選択した50～90％を下回る</td><td>定期監視</td><td>注文取消後、全建玉を強制決済</td></tr>
          </tbody>
        </table>
      </div></div>

      <h2>追証は翌取引日15時まで</h2>
      <p>取引日ごとの取引終了時点でリアルタイム維持率が100％を下回ると追証が発生します。追加証拠金が発生した取引日の翌取引日（祝祭日を含む）15時までに、不足分を入金してFX口座へ振り替えるか、全部または一部の建玉を決済して解消します。</p>
      <p>期限までに解消が確認できない場合、松井証券の任意ですべての建玉が強制決済されます。追証額と期日はFXお客様サイトの「お知らせ」で確認し、入金だけでなくFX口座への振替まで完了させます。</p>

      <h2>一部決済は、必要証拠金の減少額で判定</h2>
      <div className="callout"><strong>確定した損失額ではなく、減らした必要証拠金を見る</strong><p>一部決済で追証を解消するには、追加証拠金額以上のポジション必要証拠金を減らす必要があります。両建てでは少ない側を決済しても解消にならない場合があります。</p></div>

      <h2>ロスカット率は50～90％から選べる</h2>
      <p>個人口座では、ロスカット率を50％、60％、70％、80％、90％から選択できます。率を高くすると損失が小さい段階で強制決済されやすくなり、低くすると値動きへの余裕は増える一方、強制決済時の損失が大きくなり得ます。</p>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th className="num">設定率</th><th>特徴</th><th>注意点</th></tr></thead>
          <tbody>
            <tr><td className="num ex-name">90％</td><td>比較的早く強制決済へ近づく</td><td>小さな変動でも決済されやすい</td></tr>
            <tr><td className="num ex-name">70％</td><td>50％と90％の中間</td><td>余力と許容損失を別途試算する</td></tr>
            <tr><td className="num ex-name">50％</td><td>強制決済までの変動余地が大きい</td><td>決済時の損失が大きくなり得る</td></tr>
          </tbody>
        </table>
      </div><p className="panel-note">優劣ではなく、取引数量・損失許容額・逆指値との組み合わせで選びます。</p></div>

      <h2>「リアルタイム」でも監視間隔がある</h2>
      <p>ロスカット監視は、維持率200％以下では60秒、200％超では300秒を超えない周期で行うと案内されています。ただし、相場急変やスプレッド拡大等により、設定どおりの間隔で監視できない場合があります。</p>
      <p>ロスカット率を下回った時点のレートで決済される保証はありません。急変時には不利な価格で約定し、証拠金を上回る損失が生じる可能性があります。</p>

      <h2>余力管理の確認項目</h2>
      <ul>
        <li>必要証拠金ぎりぎりではなく、想定逆行幅を含む資金を置く</li>
        <li>プレアラート120％を、数量見直しの早期基準として使う</li>
        <li>追証発生時は入金後のFX口座振替まで確認する</li>
        <li>一部決済では減少するポジション必要証拠金を確認する</li>
        <li>逆指値とロスカット率の両方を設定し、価格飛びも想定する</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX 取引ルール」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/margin-sim/" target="_blank" rel="noopener noreferrer">松井証券「FX 証拠金シミュレーション」</a></li>
          <li><a href="https://support.matsui.co.jp/faq/show/1896?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「追証の解消方法」</a></li>
          <li><a href="https://www.matsui.co.jp/disclaimer/fx.html" target="_blank" rel="noopener noreferrer">松井証券「FXのリスクおよび手数料等」</a></li>
        </ul>
        <p>制度は2026年9月7日に確認しました。実際に追証が発生した場合は、お客様サイトに表示される期限・金額を優先してください。</p>
      </section>

      <p><Link href="/tools/matsui-fx-margin-calculator">必要証拠金・維持率・ロスカット余力を計算する →</Link></p>
      <p><Link href="/fx/matsui">MATSUI FXのコストシートを見る →</Link></p>
      <p><Link href="/articles/matsui-fx-one-currency">1通貨の必要証拠金を計算する →</Link></p>
      <p><Link href="/fx/losscut-comparison">FX会社のロスカットルールを比較する →</Link></p>

      <section className="article-affiliate" aria-label="松井証券の広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。リスク・制度の説明とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
