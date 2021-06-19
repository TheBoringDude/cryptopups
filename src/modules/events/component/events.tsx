import { EventProps } from '../types';
import { usePupsColor } from '../../theme/theme';
import Image from 'next/image';
import Link from 'next/link';
import EventTimer from './event-timer';

type EventsSectionProps = {
  event: EventProps;
};

const EventsSection = ({ event }: EventsSectionProps) => {
  const pupmode = usePupsColor();

  return (
    <Link href={`/events/${event.slug}`}>
      <a>
        <section
          className={`${pupmode.button.base} ${pupmode.button.hover} flex flex-col md:flex-row items-center justify-between w-full p-2`}
        >
          <div className="flex items-center">
            <Image src={event.image} height={45} width={80} className="object-cover" />
            <p className="text-white ml-4 font-bold tracking-wider">{event.event_title}</p>
          </div>
          <EventTimer
            className="text-2xl font-black tracking-wider text-white mt-4 md:mt-0"
            date={event?.date}
          />
        </section>
      </a>
    </Link>
  );
};

export { EventsSection };

// timer::
// https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
