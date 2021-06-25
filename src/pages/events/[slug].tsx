import { EventLayout } from '@layouts/eventLayout';
import { markdownToHtml } from '@lib/markdown';
import { useHasMounted } from '@lib/useHasMounted';
import { EventBigDrop } from '@modules/events/designs/big-drop';
import { EventCommon } from '@modules/events/designs/common-event';
import { getAllEvents, getEventBySlug, getLatestEvent } from '@modules/events/events';
import { EventProps } from '@modules/events/types';
import { array_string } from '@utils/etc';
import { json } from '@utils/json';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

export const getStaticProps: GetStaticProps = async (context) => {
  const event = getEventBySlug(array_string(context.params.slug));
  const onGoingEvent = getLatestEvent();

  const content = await markdownToHtml(event.content || '');

  return {
    props: {
      event: json<EventProps>(event),
      content,
      onGoingEvent
    },
    revalidate: 1
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
  const mounted = useHasMounted();

  if (!mounted) return null;

  return (
    <EventLayout event={props.event} onGoingEvent={props.onGoingEvent}>
      <NextSeo
        title={props.event.title}
        description={props.event.content}
        openGraph={{
          title: props.event.title,
          description: props.event.content
        }}
      />

      {props.event.event_type === 'Big Drop' ? (
        <EventBigDrop event={props.event} />
      ) : (
        <EventCommon event={props.event} content={props.content} />
      )}
    </EventLayout>
  );
};

export default EventsManager;
