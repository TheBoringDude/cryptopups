import { getAllBlogs, getBlogBySlug } from '@lib/blog/blogs';
import { BlogDataProps } from '@lib/blog/types';
import { markdownToHtml } from '@lib/markdown';
import { MarkdownRenderContent } from '@components/content/markdown-content';
import { usePupsColor } from '@lib/theme';
import { BaseLayout } from '@layouts/base';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { json } from '@utils/json';
import { array_string } from '@utils/etc';
import { RenderContent } from '@components/content/render-content';
import { getLatestEvent } from '@lib/events/events';
import { EventProps } from '@lib/events/types';

export const getStaticProps: GetStaticProps = async (context) => {
  const post = getBlogBySlug(array_string(context.params.slug));

  const content = await markdownToHtml(post.content || '');
  const event = getLatestEvent();

  return {
    props: {
      blog: json<BlogDataProps>(post),
      content,
      event
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
  event: EventProps;
};

const BlogManager = ({ blog, content, event }: BlogManagerProps) => {
  const pupmode = usePupsColor();
  return (
    <BaseLayout event={event} title={`${blog.title} | cryptopups!`}>
      <RenderContent>
        <h2 className={`text-5xl font-black tracking-wide ${pupmode?.text}`}>{blog.title}</h2>
        <div className="my-2 p-2 bg-gray-800 tracking-wide rounded-md flex flex-col sm:flex-row items-center justify-between">
          <h4 className="text-gray-200">@Adrich Laceste</h4>
          <p className="text-sm text-gray-300 font-light">{new Date(blog.date).toUTCString()}</p>
        </div>
        <MarkdownRenderContent content={content} />
      </RenderContent>
    </BaseLayout>
  );
};

export default BlogManager;
