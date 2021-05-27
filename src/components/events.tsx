import { CalculateEventTime } from '@lib/events/event-time';
import { EventProps } from '@lib/events/types';
import { usePupsColor } from '@lib/theme';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeAnchorText } from './theme/anchor';
import { ThemeLinkButton, ThemeTextButton } from './theme/buttons';

type EventsSectionProps = {
  event: EventProps;
};

const EventsSection = ({ event }: EventsSectionProps) => {
  const pupmode = usePupsColor();
  const [timeLeft, setTimeLeft] = useState(CalculateEventTime(event.date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(CalculateEventTime(event.date));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Link href={`/events/${event.slug}`}>
      <a>
        <section
          className={`${pupmode.button.base} ${pupmode.button.hover} flex flex-col md:flex-row items-center justify-between w-full p-2`}
        >
          <div className="flex items-center">
            <Image src={event.image} height={45} width={80} className="object-cover" />
            <p className="text-lg text-white ml-4 font-bold tracking-wider">{event.event_title}</p>
          </div>
          <p className="text-2xl font-black tracking-wider text-white mt-4 md:mt-0">
            {timeLeft
              ? Object.keys(timeLeft).map(
                  (val, index) =>
                    `${('0' + timeLeft[val]).slice(-2)}${
                      index < Object.keys(timeLeft).length - 1 ? ' : ' : ''
                    }`
                )
              : null}
          </p>
        </section>
      </a>
    </Link>
  );
};

export { EventsSection };

// timer::
// https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
