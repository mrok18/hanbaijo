import Link from 'next/link';
import { POSTS } from './posts';
export const metadata = { title: '解説' };

export default function Articles() {
  return (
    <>
      <h1>解説</h1>
      <p className="lede">数字の背景にある仕組みを、できるだけ短く説明します。</p>
      <ul className="post-list">
        {POSTS.map((p) => (
          <li key={p.slug}>
            <Link href={`/articles/${p.slug}`}>{p.title}</Link>
            <p>{p.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
