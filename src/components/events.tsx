import { CalculateEventTime } from '@lib/events/event-time';
import { EventProps } from '@lib/events/types';
import { useEffect, useState } from 'react';
import { ThemeAnchorText } from './theme/anchor';
import { ThemeLinkButton, ThemeTextButton } from './theme/buttons';

type EventsSectionProps = {
  event: EventProps;
};

const EventsSection = ({ event }: EventsSectionProps) => {
  const [timeLeft, setTimeLeft] = useState(CalculateEventTime(event.date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(CalculateEventTime(event.date));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="bg-gray-800 text-white p-2 rounded-md text-center mb-8 text-xl flex flex-col sm:flex-row items-center justify-center w-full">
      <p className="tracking-wide flex items-center mr-2">
        <span className="font-black tracking-wide mr-2 text-2xl">
          {Object.keys(timeLeft).map(
            (val, index) => `${timeLeft[val]}${index < Object.keys(timeLeft).length - 1 ? ':' : ''}`
          )}
        </span>
        | We will be having a <br className="block sm:hidden" />
      </p>
      <b className="underline mx-2">{event.event_title}</b>
      <ThemeTextButton href={`/events/${event.slug}`}>Learn More</ThemeTextButton>
    </section>
  );
};

export { EventsSection };

// timer::
// https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
