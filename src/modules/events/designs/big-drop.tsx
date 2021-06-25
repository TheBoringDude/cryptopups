import EventTimer from '../component/event-timer';
import { EventProps } from '../types';
import Link from 'next/link';
import Image from 'next/image';

type EventBigDropProps = {
  event: EventProps;
};

export const EventBigDrop = ({ event }: EventBigDropProps) => {
  return (
    <div className="relative h-screen w-full">
      <EventTimer
        date={event.date}
        className="font-extrabold text-3xl xs:text-4xl md:text-5xl xl:text-6xl tracking-wider absolute z-20 top-24 inset-x-0 text-neonBlue text-center"
      />
      {/* end timer */}
      <Link href="/">
        <a
          className="tracking-wide absolute top-8 left-8 z-10 text-white hover:underline"
          title="Return To Home"
        >
          Return Home
        </a>
      </Link>
      <Image src={event.image} layout="fill" objectFit="cover" />
    </div>
  );
};
