import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'シストレセレクト365の始め方｜口座開設から稼働まで',
  description: 'くりっく365口座の有無で異なる申込経路、本人確認書類、カード登録、入金、ストラテジー稼働までを公式情報から整理します。',
};

const NEW_ACCOUNT_STEPS = [
  { no: '01', title: 'FX口座とサービスを申し込む', body: 'シストレセレクト365は、フジトミ証券のくりっく365（FX）口座に付随するサービスです。新規申込では、マイナンバー確認書類と本人確認書類を準備します。' },
  { no: '02', title: 'カード情報を登録する', body: '申込完了時に届くメールのリンクから、システム利用料の決済に使うクレジットカードを登録します。公式案内では、登録が完了しないとサービスを利用できません。' },
  { no: '03', title: 'IDでログインして入金する', body: '郵送されたID・パスワードでくりっく365の取引画面へログインし、専用振込先または即時入金機能を使って運用資金を入金します。' },
  { no: '04', title: 'ストラテジーを選んで稼働する', body: 'シストレセレクト365へログインし、ランキングからストラテジーと取引数量を確認して稼働します。過去成績は将来の成果を保証しません。' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">SYSTRE SELECT 365 / ACCOUNT OPENING</p>
      <h1>シストレセレクト365の始め方<br />口座開設から稼働まで</h1>
      <p className="lede">申込画面へ進む前に、自分がフジトミ証券のくりっく365口座を持っているかを確認します。口座の有無で最初の入口は異なりますが、カード登録、ログイン、入金、ストラテジー稼働という順序は共通です。</p>

      <div className="callout"><strong>最初に確認</strong><p>シストレセレクト365だけを単独で契約するのではなく、フジトミ証券のくりっく365（FX）口座を使います。すでに同社のFX口座がある場合は、新規口座開設ではなく取引画面からサービス利用を申し込みます。</p></div>

      <h2>FX口座を持っていない場合の4段階</h2>
      <div className="fx-metric-grid">
        {NEW_ACCOUNT_STEPS.map((step) => (
          <article key={step.no}><b>{step.no}</b><h3>{step.title}</h3><p>{step.body}</p></article>
        ))}
      </div>

      <h2>すでにフジトミ証券のFX口座がある場合</h2>
      <p>公式の開始手順では、くりっく365のブラウザ版取引画面にあるリンクからシストレサービスを申し込みます。その後、案内メールからカード情報を登録し、利用可能の連絡が届いたら、くりっく365と同じログインID・パスワードでシストレセレクト365へログインします。</p>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>確認項目</th><th>FX口座なし</th><th>FX口座あり</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">申込入口</td><td>FX口座とサービスを同時に申込</td><td>くりっく365取引画面から追加申込</td></tr>
            <tr><td className="ex-name">本人確認</td><td>マイナンバー・本人確認書類を提出</td><td>登録情報に変更がないか確認</td></tr>
            <tr><td className="ex-name">カード登録</td><td>必要</td><td>必要</td></tr>
            <tr><td className="ex-name">ログイン</td><td>郵送されたFX口座のIDを使用</td><td>既存のFX口座IDを使用</td></tr>
          </tbody>
        </table>
      </div></div>

      <h2>初回990円と60日間の扱い</h2>
      <p>2026年6月以降の公式案内では、システム利用料は税込990円で、毎年ではなく初回のみです。料金変更のお知らせでは、カード登録から60日後に決済され、60日以内に解約した場合は決済されないと案内されています。登録日・利用開始日・決済予定日はメールや会員画面でも確認してください。</p>
      <p>利用開始が翌営業日になる場合もあります。カード登録の完了直後に取引できると決めつけず、利用可能の案内を待ってログインします。</p>

      <h2>入金額は必要証拠金だけで決めない</h2>
      <p>稼働にはくりっく365口座への入金が必要です。ただし、画面に表示される必要証拠金だけを入れると、わずかな含み損や証拠金額の変動で余力が小さくなります。ストラテジー画面の推奨証拠金、過去1年間の最大ドローダウン、稼働する数量を確認し、生活資金とは分けて判断します。</p>
      <div className="formula-box">
        <code>準備資金の検討 ＝ 稼働数量に応じた推奨証拠金 ＋ 自分で決める追加余力</code>
        <small>推奨証拠金は損失上限ではなく、過去を基にした目安です。</small>
      </div>

      <h2>申込前チェックリスト</h2>
      <ul>
        <li>フジトミ証券のくりっく365口座をすでに持っているか</li>
        <li>マイナンバー確認書類と本人確認書類を準備したか</li>
        <li>カード登録用メールを受信できるか</li>
        <li>初回990円の決済時期と解約条件を確認したか</li>
        <li>推奨証拠金と最大ドローダウンを見て稼働数量を決めたか</li>
      </ul>

      <section className="article-affiliate" aria-label="シストレセレクト365の広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} />
        <p className="affiliate-disclosure">上記はA8.netの提携広告です。リンク経由で申込みが成立すると当サイトが報酬を受け取る場合がありますが、手順・費用・リスクの記載とは分けて評価しています。</p>
      </section>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.fujitomi.co.jp/systra/entry/flow/" target="_blank" rel="noopener noreferrer">フジトミ証券「口座開設からお取引開始までの流れ」</a></li>
          <li><a href="https://www.fujitomi.co.jp/systra/fee-change/" target="_blank" rel="noopener noreferrer">フジトミ証券「シストレセレクト365、料金体系変更のお知らせ」</a></li>
          <li><a href="https://www.fujitomi.co.jp/app/" target="_blank" rel="noopener noreferrer">フジトミ証券「口座開設」</a></li>
        </ul>
        <p>申込・料金条件は2026年9月8日に確認しました。提出可能な書類や審査基準は、申込時の最新画面と交付書面を優先してください。</p>
      </section>

      <p><Link href="/articles/systre-select-365-start-operation-flow">ランキングから稼働する基本操作を見る →</Link></p>
      <p><Link href="/articles/systre-select-365-recommended-margin">推奨証拠金と最大DDを理解する →</Link></p>
      <p><Link href="/fx/systre-select-365">シストレセレクト365のコストシートへ →</Link></p>
    </article>
  );
}
