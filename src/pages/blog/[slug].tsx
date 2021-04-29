import { BlogLayout } from '@layouts/blog';
import { getAllBlogs, getBlogBySlug } from '@lib/blog/blogs';
import { BlogDataProps } from '@lib/blog/types';
import { markdownToHtml } from '@lib/markdown';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { json } from 'utils/json';

const array_string = (arr: string[] | string) => {
  return Array.isArray(arr) ? arr.join() : arr;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = getBlogBySlug(array_string(context.params.slug));

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      blog: json<BlogDataProps>(post),
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

type BlogManagerProps = {
  blog: BlogDataProps;
  content: string;
};

const BlogManager = (props: BlogManagerProps) => {
  return (
    <BlogLayout
      title={props.blog.title}
      date={props.blog.date}
      content={props.content}
    ></BlogLayout>
  );
};

export default BlogManager;
