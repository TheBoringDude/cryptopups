import { BaseLayout } from '@layouts/base';

import { Container } from '@components/container';
import { usePupsColor } from '@modules/theme/theme';
import { ThemeLinkButton } from '@modules/theme/buttons';
import { GetStaticProps } from 'next';
import { getAllBlogs } from '@modules/blog/blogs';
import { BlogDataProps } from '@modules/blog/types';
import { json } from '@utils/json';
import { getLatestEvent } from '@modules/events/events';
import { EventProps } from '@modules/events/types';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

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
            Crypto Blogs!
          </h2>

          <section className="my-8 w-full lg:w-4/5 xl:w-2/3 mx-auto">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="my-8 rounded-lg bg-white shadow-lg border dark:border-gray-800 flex flex-col md:flex-row items-center justify-between"
              >
                <div className={blog.image ? 'w-full md:w-1/4 flex justify-center' : ''}>
                  {blog.image && (
                    <Image src={blog.image} height={200} width={200} objectFit="cover" />
                  )}
                </div>
                <div
                  className={`${
                    blog.image ? 'w-full md:w-3/4 rounded-tr-lg rounded-br-lg' : 'w-full rounded-lg'
                  } bg-coolGray-700 dark:bg-coolGray-800`}
                >
                  <h3
                    className={`${pupmode?.color} text-2xl text-gray-100 font-extrabold py-3 pl-4 rounded-tr-md`}
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
                  <div
                    className={`py-2 px-4 bg-coolGray-400 dark:bg-coolGray-700 text-right text-sm ${
                      blog.image ? 'rounded-br-lg' : 'rouded-b-lg'
                    }`}
                  >
                    <p className="text-gray-600 dark:text-gray-400">
                      {new Date(blog.date).toUTCString()}
                    </p>
                  </div>
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
