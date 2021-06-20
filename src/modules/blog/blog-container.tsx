import { ThemeLinkButton } from '@modules/theme/buttons';
import { usePupsColor } from '@modules/theme/theme';
import Image from 'next/image';

import { BlogDataProps } from './types';

type BlogContainerProps = {
  blog: BlogDataProps;
};

export const BlogContainer = ({ blog }: BlogContainerProps) => {
  const pupmode = usePupsColor();

  return (
    <div className="my-8 bg-gray-100 dark:bg-gray-600 rounded-lg shadow-lg border dark:border-gray-800 flex flex-col md:flex-row items-center justify-between">
      <div className={blog.image ? 'w-full md:w-1/4 flex justify-center' : ''}>
        {blog.image && <Image src={blog.image} height={400} width={400} objectFit="cover" />}
      </div>
      <div
        className={`${
          blog.image ? 'w-full md:w-3/4 rounded-tr-lg rounded-br-lg' : 'w-full rounded-lg'
        } bg-gray-800`}
      >
        <h3
          className={`${pupmode?.color} text-2xl text-white font-bold font-alt tracking-wider py-3 pl-4 rounded-tr-md`}
        >
          {blog.title}
        </h3>
        <div className="px-6 my-3">
          <p className="text-gray-300 text-lg py-2">{blog.excerpt}</p>
          <div className="mt-2 mb-6">
            <ThemeLinkButton
              href={`/blog/${blog.slug}`}
              className="py-2 px-6 rounded-lg text-gray-100 font-semibold"
            >
              Read More
            </ThemeLinkButton>
          </div>
        </div>
        <div
          className={`py-2 px-4 bg-gray-400 dark:bg-gray-700 text-right text-sm ${
            blog.image ? 'rounded-br-lg' : 'rouded-b-lg'
          }`}
        >
          <p className="text-gray-600 dark:text-gray-400">{new Date(blog.date).toUTCString()}</p>
        </div>
      </div>
    </div>
  );
};
