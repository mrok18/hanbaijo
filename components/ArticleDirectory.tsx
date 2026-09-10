'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Post = { slug: string; category: string; title: string; desc: string };

export default function ArticleDirectory({ posts }: { posts: readonly Post[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('すべて');
  const categories = useMemo(() => ['すべて', ...Array.from(new Set(posts.map((post) => post.category)))], [posts]);
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase('ja-JP');
    return posts.filter((post) => {
      const matchesCategory = category === 'すべて' || post.category === category;
      const matchesQuery = !needle || `${post.title} ${post.category} ${post.desc}`.toLocaleLowerCase('ja-JP').includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return <section aria-labelledby="all-articles-title">
    <div className="article-directory-head"><div><p className="section-index">ALL ARTICLES</p><h2 id="all-articles-title">すべての記事</h2></div><span aria-live="polite">{filtered.length} / {posts.length}件</span></div>
    <label className="article-search"><span>記事を検索</span><input aria-label="記事をキーワードで検索" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例：スプレッド、入金、ロスカット" /></label>
    <div className="article-categories" aria-label="カテゴリで絞り込む">{categories.map((item) => <button type="button" key={item} className={category === item ? 'active' : ''} aria-pressed={category === item} aria-controls="article-results" onClick={() => setCategory(item)}>{item}</button>)}</div>
    <ul id="article-results" className="post-list article-index">
      {filtered.map((post) => <li key={post.slug}><span>{post.category}</span><div><Link href={`/articles/${post.slug}`}>{post.title}</Link><p>{post.desc}</p></div><b aria-hidden="true">→</b></li>)}
    </ul>
    {!filtered.length && <div className="empty-search" role="status"><p>一致する記事がありません。別のキーワードをお試しください。</p><button type="button" onClick={() => { setQuery(''); setCategory('すべて'); }}>検索条件をリセット</button></div>}
  </section>;
}
