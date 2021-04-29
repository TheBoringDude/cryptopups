import { BaseLayout } from '@layouts/base';
import { BlogLayout } from '@layouts/blog';
import { getAllBlogs, getBlogBySlug } from '@lib/blog/blogs';
import { getAllEvents, getEventBySlug } from '@lib/events/events';
import { EventProps } from '@lib/events/types';
import { markdownToHtml } from '@lib/markdown';
import { usePupsColor } from '@lib/theme';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

const array_string = (arr: string[] | string) => {
  return Array.isArray(arr) ? arr.join() : arr;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const event = getEventBySlug(array_string(context.params.slug));
  console.log(event);

  const content = await markdownToHtml(event.content || '');

  return {
    props: {
      event: JSON.parse(JSON.stringify(event)),
      content
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = getAllEvents();

  return {
    paths: events.map((events) => {
      return {
        params: {
          slug: events.slug
        }
      };
    }),
    fallback: false
  };
};

type EventsManagerProps = {
  event: EventProps;
  content: string;
};

const EventsManager = (props: EventsManagerProps) => {
  const pupmode = usePupsColor();
  return (
    <BaseLayout title={`${props.event.event_title}`}>
      <div className="my-12 w-5/6 sm:w-4/5 md:w-2/3 mx-auto">
        <div>
          <h2 className={`text-4xl font-bold tracking-wide ${pupmode.text}`}>
            {props.event.event_title}
          </h2>
          <hr />
          <div className="prose lg:prose-lg prose-rose text-gray-200 max-w-full">
            <article dangerouslySetInnerHTML={{ __html: props.content }}></article>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default EventsManager;
