import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM CFDの取引時間｜夏時間・冬時間と約定しない時間',
  description: 'DMM CFDの銘柄別取引時間、夏時間・冬時間、毎営業日のメンテナンス、取引時間外にできる操作を公式情報から整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DMM CFD / TRADING HOURS</p>
      <h1>DMM CFDの取引時間<br />夏時間・冬時間と約定しない時間</h1>
      <p className="lede">DMM CFDは「平日なら全銘柄が同じ時間に取引できる」サービスではありません。参照市場、銘柄、夏時間・冬時間で取引可能時間が変わります。</p>

      <div className="callout"><strong>レートが止まっている時間は注文が約定しません</strong><p>取引時間外でもログインや指値・逆指値注文が可能な時間はありますが、レート配信がないため約定は取引再開後になります。毎営業日のメンテナンス中はログインや注文操作もできません。</p></div>

      <h2>主要銘柄の取引時間</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
        <thead><tr><th>銘柄</th><th>夏時間</th><th>冬時間</th></tr></thead>
        <tbody>
          <tr><td className="ex-name">日本225</td><td>月〜金 07:10〜翌05:50</td><td>月〜金 08:10〜翌06:50</td></tr>
          <tr><td className="ex-name">米国NYダウ30<br />米国ナスダック100<br />米国S&amp;P500</td><td>月〜金 07:00〜翌05:50</td><td>月〜金 08:00〜翌06:50</td></tr>
          <tr><td className="ex-name">原油・金スポット<br />銀スポット・天然ガス</td><td>月〜金 07:00〜翌05:50</td><td>月〜金 08:00〜翌06:50</td></tr>
          <tr><td className="ex-name">中国A50</td><td>10:00〜17:30<br />17:45〜翌05:50</td><td>同左</td></tr>
        </tbody>
      </table></div></div>
      <p>農産物や欧州指数は、上表とは異なる時間帯や途中休止があります。サマータイム移行期、各国の祝日、年末年始には通常日程から変更される場合があるため、発注当日の公式案内を確認します。</p>

      <h2>毎営業日のメンテナンス</h2>
      <div className="fx-metric-grid">
        <article><b>SUMMER</b><h3>夏時間</h3><p>月〜金の翌05:50〜翌06:10。ログイン、注文、入出金はいずれも利用できません。</p></article>
        <article><b>WINTER</b><h3>冬時間</h3><p>月〜金の翌06:50〜翌07:10。夏時間より1時間後ろへ移動します。</p></article>
        <article><b>WEEKEND</b><h3>週末</h3><p>通年で土曜12:00〜18:00。延長される場合があります。</p></article>
        <article><b>HOLIDAY</b><h3>海外祝日</h3><p>参照市場の休場により短縮・休止となることがあります。日本の祝日だけでは判断できません。</p></article>
      </div>

      <h2>時間外注文で確認すること</h2>
      <ul>
        <li>取引時間外は指値・逆指値を入力できても、その場では約定しない</li>
        <li>取引再開時に価格が飛ぶと、逆指値が指定価格から離れて約定する可能性がある</li>
        <li>銘柄ごとの終了時刻前後は、スプレッド拡大も含めて確認する</li>
        <li>ポジションを持ち越す場合は、調整額の発生時点も合わせて確認する</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
        <li><a href="https://fx.dmm.com/cfd/session/" target="_blank" rel="noopener noreferrer">DMM CFD「取引時間」</a></li>
        <li><a href="https://fx.dmm.com/cfd/service/outline/" target="_blank" rel="noopener noreferrer">DMM CFD-Index「サービス概要」</a></li>
        <li><a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD-Commodity「サービス概要」</a></li>
      </ul><p>取引時間・制度情報は2026年9月7日に確認しました。祝日等の臨時変更は公式のお知らせを優先してください。</p></section>

      <p><Link href="/articles/dmm-cfd-adjustment-calendar">調整額カレンダーの読み方 →</Link></p>
      <p><Link href="/cfd/dmm-cfd">DMM CFDのコストシートへ戻る →</Link></p>
      <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると当サイトが報酬を受け取る場合があります。取引時間の説明・評価とは分けて掲載しています。</p></section>
    </article>
  );
}
