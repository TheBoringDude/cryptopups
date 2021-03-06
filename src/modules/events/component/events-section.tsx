import { EventProps } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import EventTimer from './event-timer';

type EventsSectionProps = {
  event: EventProps;
};

const EventsSection = ({ event }: EventsSectionProps) => {
  return (
    <Link href={`/events/${event.slug}`}>
      <a title={event.title}>
        <section className="bg-gray-700 hover:bg-gray-800 flex flex-col md:flex-row items-center justify-between w-full p-2">
          <div className="flex items-center">
            <Image
              src={event.image}
              alt={event.title}
              height={45}
              width={80}
              className="object-cover"
            />
            <p className="text-gray-200 ml-4 font-bold tracking-wider font-alt">{event.title}</p>
          </div>
          <EventTimer
            className="text-gray-200 text-2xl font-extrabold tracking-wider mt-4 md:mt-0"
            date={event?.date}
          />
        </section>
      </a>
    </Link>
  );
};

export { EventsSection };
