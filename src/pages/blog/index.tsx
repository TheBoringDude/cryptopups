import { BaseLayout } from '@layouts/base';

import { Container } from '@components/container';
import { SlideColorsContext, usePupsTheme } from '@lib/theme';
import { LinkButton } from '@components/LinkButton';
import { ThemeButton } from '@components/theme/buttons';

const SampleBlogContent = {
  title: 'Hello World',
  excerpt:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit similique eveniet dolores itaque fuga architecto aliquam velit est ratione.',
  date: new Date().toUTCString(),
  author: 'Adrich Laceste'
};

const blog = SampleBlogContent;

const BlogPage = () => {
  const { pupmode } = usePupsTheme();

  return (
    <BaseLayout title="Blog | cryptopups!">
      <Container layouts="w-5/6">
        <div className="my-8">
          <h2 className="text-4xl font-black text-white tracking-widde">Crypto Blogs!</h2>

          <section className="my-8 w-2/3 mx-auto">
            <div className="bg-coolGray-800 rounded-md">
              <h3
                className={`${SlideColorsContext[pupmode].color} text-2xl text-white py-2 pl-4 rounded-t-md`}
              >
                {blog.title}
              </h3>
              <div className="px-6 my-3">
                <p className="text-gray-300 text-lg py-2">{blog.excerpt}</p>
                <ThemeButton className="py-2 px-6 rounded-lg text-white">Read More</ThemeButton>
              </div>
              <div className="py-2 px-4 flex items-center justify-between bg-coolGray-700 rounded-b-md">
                <h4 className="text-gray-200 hover:underline">@{blog.author}</h4>
                <p className="text-gray-400">{blog.date}</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </BaseLayout>
  );
};

export default BlogPage;
