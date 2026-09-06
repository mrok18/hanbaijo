export const metadata = { title: 'お問い合わせ' };

export default function Contact() {
  return (
    <article>
      <p className="page-kicker">CONTACT</p>
      <h1>お問い合わせ</h1>
      <p className="lede">計測値の誤り、取得元の仕様変更、掲載内容へのご指摘などをお寄せください。</p>
      <div className="callout">
        <p style={{ margin: 0 }}><strong>連絡先：</strong> contact（アットマーク）hanbaijo.com</p>
        <p style={{ margin: '8px 0 0' }}>迷惑メール対策のため、記号を日本語で表記しています。</p>
      </div>

      <h2>ご連絡いただきたい内容</h2>
      <ul>
        <li>計測値と公式画面の大きな相違</li>
        <li>APIや手数料体系の変更</li>
        <li>記事の事実関係や計算式の誤り</li>
        <li>表示上の不具合</li>
      </ul>

      <h2>掲載・広告に関するご依頼</h2>
      <p>
        広告掲載のご相談は受け付けますが、実測値、計算結果または実測値による掲載順の変更を条件とするご依頼はお受けしません。
        広告を掲載する場合は、読者が判別できる形で表示します。
      </p>
    </article>
  );
}
