import { BaseLayout } from '@layouts/base';

import { Container } from '@components/container';
import { usePupsColor } from '@lib/theme';
import { ThemeLinkButton } from '@components/theme/buttons';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAllBlogs } from '@lib/blog/blogs';
import { BlogDataProps } from '@lib/blog/types';
import { json } from '@utils/json';
import { getLatestEvent } from '@lib/events/events';
import { EventProps } from '@lib/events/types';

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
    <BaseLayout event={event} title="Our Stories & Blog | cryptopups!">
      <Container layouts="w-5/6">
        <div className="my-8">
          <h2 className="text-4xl font-black text-coolGray-700 dark:text-white tracking-widde">
            Crypto Blogs!
          </h2>

          <section className="my-8 w-full sm:w-4/5 xl:w-2/3 mx-auto">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="my-8 bg-coolGray-700 dark:bg-coolGray-800 rounded-lg shadow-lg border dark:border-gray-800"
              >
                <h3
                  className={`${pupmode?.color} text-2xl md:text-3xl text-gray-100 font-extrabold py-3 pl-4 rounded-t-md`}
                >
                  {blog.title}
                </h3>
                <div className="px-6 my-3">
                  <p className="text-gray-300 text-lg py-2">{blog.excerpt}</p>
                  <div className="mt-2 mb-6">
                    <ThemeLinkButton
                      href={`/blog/${blog.slug}`}
                      className="py-2 px-6 rounded-lg text-white"
                    >
                      Read More
                    </ThemeLinkButton>
                  </div>
                </div>
                <div className="py-2 px-4 bg-coolGray-400 dark:bg-coolGray-700 rounded-b-md text-right text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    {new Date(blog.date).toUTCString()}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </Container>
    </BaseLayout>
  );
};

export default BlogPage;
