'use client';

export default function ErrorPost({ error }: { error: Error }) {
  return <h1>Oops!! {error.message}</h1>;
}
