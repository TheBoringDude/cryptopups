/*
This DIR is based from: :https://github.com/forestryio/next-blog-forestry/tree/master/lib
*/

import { json } from '@utils/json';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { EventProps } from './types';

const eventDir = join(process.cwd(), '_events');

const getEventsFileSlugs = () => {
  return fs.readdirSync(eventDir);
};

const getEventBySlug = (slug: string): EventProps => {
  const realSlug = slug.replace(/\.md$/, '');
  const eventPath = join(eventDir, `${realSlug}.md`);

  const contents = fs.readFileSync(eventPath, 'utf8');
  const { data, content } = matter(contents);

  return {
    slug: realSlug,
    date: data.date,
    event_title: data.event_title,
    post_date: data.post_date,
    image: data.image,
    content: content
  };
};

// based from https://stackoverflow.com/questions/40248643/typescript-sort-by-date-not-working
const getTime = (date: string | null) => {
  return new Date(date).getTime();
};
const getAllEvents = () => {
  const slugs = getEventsFileSlugs();
  const blogs = slugs
    .map((slug) => getEventBySlug(slug))
    .sort((a, b) => getTime(b.date) - getTime(a.date));

  return blogs;
};

const getLatestEvent = () => {
  const events = getAllEvents();

  return json(events.reduce((a, b) => (new Date(a.post_date) > new Date(b.post_date) ? a : b)));
};

export { getEventBySlug, getAllEvents, getLatestEvent };
