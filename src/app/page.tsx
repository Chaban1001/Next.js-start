import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layout | Home',
  description: 'Home Page',
};

export default function Home() {
  return <h1>Welcome to NextJS!</h1>;
}
