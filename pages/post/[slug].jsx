import {useRouter} from 'next/router';

import PostController from '../../controllers/post.controller';
import MarkdownToHtml from '../../services/markdownToHtml';

function Post({post}) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <h1>404 - Not Found</h1>;
  }

  return (
    <div>
      {router.isFallback && <h1>Is Loading</h1>}{' '}
      {!router.isFallback && (
        <main>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.content}} />
        </main>
      )}
    </div>
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
    'coverImage',
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
