import Head from 'next/head';

import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import { getFeaturedPosts } from '../lib/posts-util';

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta
          name='description'
          content='I am a web developer and a financial analyst'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
