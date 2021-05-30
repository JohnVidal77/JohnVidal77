import Image from 'next/image';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';

import WindowCard from '../../components/WindowCard';

import PostController from '../../controllers/post.controller';
import MarkdownToHtml from '../../services/markdownToHtml';

const container = {
  hidden: {opacity: 1, scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

function Post({post}) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <h1>404 - Not Found</h1>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Development, Web Development"
        />
        <meta name="author" content={post.author.name} />
      </Head>
      <motion.div
        className="flex flex-col md:flex-row gap-4 box-border mb-4 p-4 md:p-8 w-screen h-full min-h-screen"
        variants={container}
        initial="hidden"
        animate="visible">
        <WindowCard>
          {router.isFallback && <h1>Is Loading</h1>}{' '}
          {!router.isFallback && (
            <div className="w-full">
              <main className="prose mx-auto">
                <figure className="relative w-full h-48 md:h-72">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={post.cover}
                    alt={post.slug}
                  />
                </figure>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.content}} />
              </main>
            </div>
          )}
        </WindowCard>
      </motion.div>
    </>
  );
}

export default Post;

export async function getStaticProps({params}) {
  const postController = new PostController();

  const post = postController.getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'cover',
  ]);

  const content = await MarkdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const postController = new PostController();

  const posts = postController.getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
