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
        <a className="tracking-wide text-white hover:underline" title="Return To Home">
          Return Home
        </a>
      </Link>
      <EventTimer
        date={event?.date}
        className="font-extrabold text-3xl xs:text-4xl md:text-5xl xl:text-6xl tracking-wider text-neonBlue text-center mt-4"
      />
      {/* end timer */}
      <div className="dark:bg-coolGray-700 bg-gray-100 p-4 rounded-lg my-12 w-11/12 sm:w-5/6 md:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto">
        <div className="text-center">
          <MarkdownRenderContent content={content} />
        </div>
      </div>
    </div>
  );
};
