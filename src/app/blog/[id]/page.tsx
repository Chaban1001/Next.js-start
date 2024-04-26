import { Metadata } from 'next';
import { Fragment } from 'react';

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <Fragment>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Fragment>
  );
}
