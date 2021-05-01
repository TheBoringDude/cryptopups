import { usePupsColor } from '@lib/theme';

type MarkdownContentProps = {
  content: string;
};

export const MarkdownRenderContent = ({ content }: MarkdownContentProps) => {
  const pupmode = usePupsColor();
  return (
    <div
      className={`prose md:prose-lg lg:prose-xl text-coolGray-700 dark:text-gray-200 ${pupmode.prose} max-w-full`}
    >
      <article dangerouslySetInnerHTML={{ __html: content }}></article>
    </div>
  );
};
