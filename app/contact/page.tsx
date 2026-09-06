export const metadata = { title: 'お問い合わせ' };

export default function Contact() {
  return (
    <article>
      <h1>お問い合わせ</h1>
      <p className="lede">計測値の誤り、取得元の仕様変更、掲載内容へのご指摘などをお寄せください。</p>
      <div className="callout">
        <p style={{ margin: 0 }}>
          <strong>連絡先: </strong>
          <span>contact（アットマーク）hanbaijo.com</span>
        </p>
        <p style={{ margin: '10px 0 0' }}>
          迷惑メール対策のため記号を日本語で表記しています。数日以内に返信します。
        </p>
      </div>
      <h2>掲載に関するご依頼について</h2>
      <p>
        掲載順位はスプレッドの実測値のみで機械的に決定しています。順位や表示内容の変更をともなうご依頼はお受けしておりません。
        計測方法そのものに誤りがある場合のご指摘は歓迎します。
      </p>
    </article>
  );
}
