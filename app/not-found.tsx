export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" style={{ padding: '72px 0 24px', maxWidth: '760px' }}>
      <p className="section-index">404 / PAGE NOT FOUND</p>
      <h1 id="not-found-title" style={{ marginTop: 0 }}>ページが見つかりません</h1>
      <p className="lede">お探しのページは移動または削除されたか、URLが間違っている可能性があります。次のページからお探しください。</p>
      <nav aria-label="ページを探す" className="hero-actions">
        <a className="button primary" href="/">トップページへ</a>
        <a className="button secondary" href="/tools">計算ツール一覧へ</a>
        <a className="button secondary" href="/articles">解説記事一覧へ</a>
      </nav>
    </section>
  );
}
