import { usePupsColor } from '@lib/theme';
import { BaseLayout } from './base';

type BlogLayoutProps = {
  title: string;
  date: string;
  content: string;
};

const BlogLayout = ({ title, date, content }: BlogLayoutProps) => {
  const pupmode = usePupsColor();

  return (
    <BaseLayout title={`${title} | cryptopups!`}>
      <div className="my-12 w-5/6 sm:w-4/5 md:w-2/3 mx-auto">
        <h2 className={`text-4xl font-bold tracking-wide ${pupmode.text}`}>{title}</h2>
        <div className="my-2 p-2 bg-gray-800 tracking-wide rounded-md flex flex-col sm:flex-row items-center justify-between">
          <h4 className="text-gray-200">@Adrich Laceste</h4>
          <p className="text-sm text-gray-300 font-light">{new Date(date).toUTCString()}</p>
        </div>
        <div className="prose lg:prose-lg text-gray-200 max-w-full">
          <article dangerouslySetInnerHTML={{ __html: content }}></article>
        </div>
      </div>
    </BaseLayout>
  );
};

export { BlogLayout };
