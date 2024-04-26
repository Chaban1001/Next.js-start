import { Metadata } from 'next';
import Link from 'next/link';
import '../styles/app.scss';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Unable to fetch posts!');
  }
  return data;
}

export const metadata: Metadata = {
  title: 'Layout | Blog',
  description: 'Blog Page',
};

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>Blog Page</h1>
      <ol>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link className='link' href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
