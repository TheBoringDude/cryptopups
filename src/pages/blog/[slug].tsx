import { getAllBlogs, getBlogBySlug } from '@modules/blog/blogs';
import { BlogDataProps } from '@modules/blog/types';
import { markdownToHtml } from '@lib/markdown';
import { MarkdownRenderContent } from '@components/content/markdown-content';
import { usePupsColor } from '@modules/theme/theme';
import { BaseLayout } from '@layouts/base';
import { GetStaticPaths, GetStaticProps } from 'next';
import { json } from '@utils/json';
import { array_string } from '@utils/etc';
import { RenderContent } from '@components/content/render-content';
import { getLatestEvent } from '@modules/events/events';
import { EventProps } from '@modules/events/types';
import { NextSeo } from 'next-seo';

export const getStaticProps: GetStaticProps = async (context) => {
  const post = getBlogBySlug(array_string(context.params.slug));

  const content = await markdownToHtml(post.content || '');
  const event = getLatestEvent();

  return {
    props: {
      blog: json<BlogDataProps>(post),
      content,
      event
    },
    revalidate: 1
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
  event: EventProps;
};

const BlogManager = ({ blog, content, event }: BlogManagerProps) => {
  const pupmode = usePupsColor();
  return (
    <BaseLayout event={event}>
      <NextSeo
        title={`${blog.title} - Blogs`}
        description={blog.excerpt}
        openGraph={{
          title: `${blog.title} - Blogs`,
          description: blog.excerpt
        }}
      />

      <RenderContent className="dark:bg-gray-800">
        <h2 className={`text-5xl font-black tracking-wide ${pupmode?.text}`}>{blog.title}</h2>
        <div className="my-2 p-2 bg-gray-900 tracking-wide rounded-md flex flex-col sm:flex-row items-center justify-between">
          <h4 className="text-gray-200">@Adrich Laceste</h4>
          <p className="text-sm text-gray-300 font-light">{new Date(blog.date).toUTCString()}</p>
        </div>
        <MarkdownRenderContent content={content} />
      </RenderContent>
    </BaseLayout>
  );
};

export default BlogManager;
