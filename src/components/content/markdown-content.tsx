import { usePupsColor } from '@modules/theme/theme';

type MarkdownContentProps = {
  content: string;
};

export const MarkdownRenderContent = ({ content }: MarkdownContentProps) => {
  const pupmode = usePupsColor();
  return (
    <div
      id="markdown-render"
      className={`prose md:prose-lg lg:prose-xl ${pupmode?.prose} max-w-full font-alt`}
    >
      <article dangerouslySetInnerHTML={{ __html: content }}></article>
    </div>
  );
};
