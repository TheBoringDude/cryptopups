import { getAllBlogs, getBlogBySlug } from '@lib/blog/blogs';
import { markdownToHtml } from '@lib/blog/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';

const BlogManager = (props) => {
  return <>{JSON.stringify(props)}</>;
};

const array_string = (arr: string[] | string) => {
  return Array.isArray(arr) ? arr.join() : arr;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = getBlogBySlug(array_string(context.params.slug));

  const content = await markdownToHtml(post.data.content || '');

  return {
    props: {
      ...post,
      content
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = getAllBlogs();

  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog.data.slug
        }
      };
    }),
    fallback: false
  };
};

export default BlogManager;
