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
import { EventLayout } from '@layouts/eventLayout';
import Image from 'next/image';
import Link from 'next/link';
import { CalculateEventTime } from '@lib/events/event-time';
import { useState, useEffect } from 'react';
import { useHasMounted } from '@lib/useHasMounted';
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
  const pupmode = usePupsColor();

  const [timeLeft, setTimeLeft] = useState(CalculateEventTime(props.event.date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(CalculateEventTime(props.event.date));
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (!mounted) return null;

  return (
    <EventLayout event={props.event} onGoingEvent={props.onGoingEvent}>
      <NextSeo title={props.event.event_title} description={props.event.content} />

      {props.event.event_type === 'Big Drop' ? (
        <div className="relative h-screen w-full">
          {/* timer */}
          <p className="font-light text-3xl xs:text-4xl md:text-5xl xl:text-6xl tracking-wider absolute z-20 top-24 inset-x-0 text-neonBlue text-center">
            {timeLeft
              ? Object.keys(timeLeft).map(
                  (val, index) =>
                    `${('0' + timeLeft[val]).slice(-2)}${
                      index < Object.keys(timeLeft).length - 1 ? ' : ' : ''
                    }`
                )
              : 'EVENT IS OVER!'}
          </p>
          {/* end timer */}
          <Link href="/">
            <a
              className="tracking-wide absolute top-8 left-8 z-10 text-white hover:underline"
              title="Return To Home"
            >
              Return Home
            </a>
          </Link>
          <Image src={props.event.image} layout="fill" objectFit="cover" />
        </div>
      ) : (
        <div className="p-10">
          <Link href="/">
            <a className="tracking-wide text-white hover:underline" title="Return To Home">
              Return Home
            </a>
          </Link>
          <div className="dark:bg-coolGray-700 bg-gray-100 p-4 rounded-lg my-12 w-5/6 sm:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto">
            <div className="text-center">
              <MarkdownRenderContent content={props.content} />
              <Image src={props.event.image} height={250} width={250} />
            </div>
          </div>
        </div>
      )}
    </EventLayout>
  );
};

export default EventsManager;
