/*
This DIR is based from: :https://github.com/forestryio/next-blog-forestry/tree/master/lib
*/

import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { BlogDataProps } from './types';

const blogDir = join(process.cwd(), 'blog');

const getBlogsFileSlugs = () => {
  return fs.readdirSync(blogDir);
};

const getBlogBySlug = (slug: string): BlogDataProps => {
  const realSlug = slug.replace(/\.md$/, '');
  const blogPath = join(blogDir, `${realSlug}.md`);

  // check if the blog slug exists
  if (!fs.existsSync(blogPath)) {
    // file doesn't exist
    // TODO::
  }

  const contents = fs.readFileSync(blogPath, 'utf8');
  const { data, content } = matter(contents);

  return {
    slug: realSlug,
    date: data.date,
    title: data.title,
    excerpt: data.excerpt,
    content: content
  };
};

// based from https://stackoverflow.com/questions/40248643/typescript-sort-by-date-not-working
const getTime = (date: string | null) => {
  return new Date(date).getTime();
};
const getAllBlogs = () => {
  const slugs = getBlogsFileSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    .sort((a, b) => getTime(b.date) - getTime(a.date));

  return blogs;
};

export { getBlogBySlug, getAllBlogs };
