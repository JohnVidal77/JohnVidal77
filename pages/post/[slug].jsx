import React from 'react';

import PostController from '../../controllers/post.controller';
import MarkdownToHtml from '../../services/markdownToHtml';

function Post({post}) {
  return (
    <div>
      <h1>Hello World, {post.title}</h1>
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
