import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { BlogDataProps } from './types';

const blogDir = join(process.cwd(), 'blog');

const getBlogsFileSlugs = () => {
  return fs.readdirSync(blogDir);
};

const getBlogBySlug = (slug: string): BlogDataProps => {
  const blogPath = join(blogDir, `${slug}.md`);

  // check if the blog slug exists
  if (!fs.existsSync(blogPath)) {
    // file doesn't exist
    // TODO::
  }

  const contents = fs.readFileSync(blogPath, 'utf8');
  const { data, content } = matter(contents);

  return {
    isExists: true,
    data: {
      slug: slug,
      date: data.date,
      title: data.title,
      excerpt: data.excerpt,
      content: content
    }
  };
};

export { getBlogBySlug };
