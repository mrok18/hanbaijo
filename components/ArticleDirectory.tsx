'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Post = { slug: string; category: string; title: string; desc: string };

export default function ArticleDirectory({ posts }: { posts: readonly Post[] }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase('ja-JP');
    if (!needle) return posts;
    return posts.filter((post) => `${post.title} ${post.category} ${post.desc}`.toLocaleLowerCase('ja-JP').includes(needle));
  }, [posts, query]);

  return <section aria-labelledby="all-articles-title">
    <div className="article-directory-head"><div><p className="section-index">ALL ARTICLES</p><h2 id="all-articles-title">すべての記事</h2></div><span>{filtered.length} / {posts.length}件</span></div>
    <label className="article-search"><span>記事を検索</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例：スプレッド、入金、ロスカット" /></label>
    <ul className="post-list article-index">
      {filtered.map((post) => <li key={post.slug}><span>{post.category}</span><div><Link href={`/articles/${post.slug}`}>{post.title}</Link><p>{post.desc}</p></div><b aria-hidden="true">→</b></li>)}
    </ul>
    {!filtered.length && <p className="empty-search">一致する記事がありません。別のキーワードをお試しください。</p>}
  </section>;
}
