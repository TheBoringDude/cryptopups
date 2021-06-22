import { BaseLayout } from '@layouts/base';

import { Container } from '@components/container';
import { usePupsColor } from '@modules/theme/theme';
import { GetStaticProps } from 'next';
import { getAllBlogs } from '@modules/blog/blogs';
import { BlogDataProps } from '@modules/blog/types';
import { json } from '@utils/json';
import { getLatestEvent } from '@modules/events/events';
import { EventProps } from '@modules/events/types';
import { NextSeo } from 'next-seo';
import { BlogContainer } from '@modules/blog/blog-container';

type AllBlogStaticProps = {
  blogs: BlogDataProps[];
  event: EventProps;
};

export const getStaticProps: GetStaticProps = async () => {
  const allBlogs = getAllBlogs();
  const event = getLatestEvent();

  return {
    props: { blogs: json<BlogDataProps[]>(allBlogs), event },
    revalidate: 1
  };
};

const BlogPage = ({ blogs, event }: AllBlogStaticProps) => {
  const pupmode = usePupsColor();

  return (
    <BaseLayout event={event}>
      <NextSeo
        title="Our Blog &amp; Stories"
        description="Read our stories and how we become."
        openGraph={{
          title: 'Our Blog &amp; Stories',
          description: 'Read our stories and how we become.'
        }}
      />

      <Container layouts="w-5/6">
        <div className="my-8">
          <h2 className="text-4xl font-black text-coolGray-700 dark:text-white tracking-widde">
            <span className={pupmode?.text}>Crypto</span> Blogs!
          </h2>

          <section className="my-8 w-full lg:w-4/5 xl:w-3/4 mx-auto">
            {blogs.map((blog, index) => (
              <BlogContainer key={index} blog={blog} />
            ))}
          </section>
        </div>
      </Container>
    </BaseLayout>
  );
};

export default BlogPage;
