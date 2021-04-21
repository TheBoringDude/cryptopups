import remark from 'remark';
import html from 'remark-html';

const markdownToHtml = async (markdown: string) => {
  const r = await remark().use(html).process(markdown);
  return r.toString();
};

export { markdownToHtml };
