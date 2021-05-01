import { GetStaticPaths, GetStaticProps } from 'next';
import { MarkdownRenderContent } from '@components/content/markdown-content';
import { RenderContent } from '@components/content/render-content';
import { BaseLayout } from '@layouts/base';
import { getAllEvents, getEventBySlug, getLatestEvent } from '@lib/events/events';
import { EventProps } from '@lib/events/types';
import { markdownToHtml } from '@lib/markdown';
import { usePupsColor } from '@lib/theme';
import { array_string } from '@utils/etc';
import { json } from '@utils/json';

export const getStaticProps: GetStaticProps = async (context) => {
  const event = getEventBySlug(array_string(context.params.slug));
  const onGoingEvent = getLatestEvent();

  const content = await markdownToHtml(event.content || '');

  return {
    props: {
      event: json<EventProps>(event),
      content,
      onGoingEvent
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
  onGoingEvent: EventProps;
};

const EventsManager = (props: EventsManagerProps) => {
  const pupmode = usePupsColor();

  return (
    <BaseLayout event={props.onGoingEvent} title={`${props.event.event_title}`}>
      <RenderContent>
        <h2 className={`text-4xl font-black tracking-wide ${pupmode?.text}`}>
          {props.event.event_title}
        </h2>
        <hr />
        <MarkdownRenderContent content={props.content} />
      </RenderContent>
    </BaseLayout>
  );
};

export default EventsManager;
