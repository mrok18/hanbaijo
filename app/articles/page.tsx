import Link from 'next/link';
import { POSTS } from './posts';
export const metadata = { title: '解説' };

export default function Articles() {
  return (
    <div className="content-page">
      <p className="page-kicker">LEARN</p>
      <h1>知る・読み解く</h1>
      <p className="lede">実測値を自分で判断するために、数字の背景にある仕組みを短く、具体的に説明します。</p>
      <ul className="post-list article-index">
        {POSTS.map((p) => (
          <li key={p.slug}>
            <span>{p.category}</span>
            <div>
              <Link href={`/articles/${p.slug}`}>{p.title}</Link>
              <p>{p.desc}</p>
            </div>
            <b aria-hidden="true">→</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
