import type { NextPage } from 'next';
import Head from 'next/head';
import Favicon from '../components/Favicon';
import Post from '../interfaces/post';
import { getAllPosts } from '../lib/api/posts';

type Props = {
  allPosts: Post[];
};

const Home: NextPage<Props> = ({ allPosts }: Props) => {
  return (
    <div>
      <Head>
        <title>وب استک</title>
        <meta
          name="description"
          content="وب استک. اخبار و آموزش تکنولوژی های دنیای وب"
        />
        <Favicon />
      </Head>

      <main>
        {allPosts.map((post) => (
          <div key={post.name}>{post.title}</div>
        ))}
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};

export default Home;
