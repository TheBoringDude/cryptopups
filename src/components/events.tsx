import { EventProps } from '@lib/events/types';
import { ThemeAnchorText } from './theme/anchor';
import { ThemeLinkButton, ThemeTextButton } from './theme/buttons';

type EventsSectionProps = {
  event: EventProps;
};

const EventsSection = ({ event }: EventsSectionProps) => {
  return (
    <section className="bg-gray-800 text-white p-2 rounded-md text-center mb-8 text-lg">
      <p className="tracking-wide"></p>We will be having a{' '}
      <b className="underline mr-2">{event.event_title}</b>
      <ThemeTextButton href={`/events/${event.slug}`}>Learn More</ThemeTextButton>
    </section>
  );
};

export { EventsSection };
