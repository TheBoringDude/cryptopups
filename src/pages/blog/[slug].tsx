import { BlogLayout } from '@layouts/blog';
import { getAllBlogs, getBlogBySlug } from '@lib/blog/blogs';
import { markdownToHtml } from '@lib/blog/markdown';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

const array_string = (arr: string[] | string) => {
  return Array.isArray(arr) ? arr.join() : arr;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = getBlogBySlug(array_string(context.params.slug));

  const content = await markdownToHtml(post.content || '');

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
          slug: blog.slug
        }
      };
    }),
    fallback: false
  };
};

const BlogManager = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <BlogLayout title={props.title} date={props.date} content={props.content}></BlogLayout>;
};

export default BlogManager;
