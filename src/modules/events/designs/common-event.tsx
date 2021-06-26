import { MarkdownRenderContent } from '@components/content/markdown-content';
import EventTimer from '@modules/events/component/event-timer';
import Link from 'next/link';
import { EventProps } from '../types';

type EventCommonProps = {
  event: EventProps;
  content: string;
};

export const EventCommon = ({ event, content }: EventCommonProps) => {
  return (
    <div className="p-10">
      <Link href="/">
        <a
          className="tracking-wide text-gray-700 dark:text-white hover:underline"
          title="Return To Home"
        >
          Return Home
        </a>
      </Link>
      <EventTimer
        date={event?.date}
        className="font-extrabold text-3xl xs:text-4xl md:text-5xl xl:text-6xl tracking-wider text-neonBlue text-center mt-4"
      />
      {/* end timer */}
      <div className="bg-white dark:bg-gray-200 shadow-2xl border px-8 rounded-md my-12 max-w-2xl mx-auto">
        <div className="text-center">
          <MarkdownRenderContent content={content} />
        </div>
      </div>
    </div>
  );
};
