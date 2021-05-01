import { EventProps } from '@lib/events/types';
import { ThemeAnchorText } from './theme/anchor';
import { ThemeLinkButton, ThemeTextButton } from './theme/buttons';

type EventsSectionProps = {
  event: EventProps;
};

const EventsSection = ({ event }: EventsSectionProps) => {
  return (
    <section className="bg-gray-800 text-white p-2 rounded-md text-center mb-8 text-lg flex flex-col sm:flex-row items-center justify-center w-full">
      <p className="tracking-wide">
        We will be having a <br className="block sm:hidden" />
        <b className="underline mr-2">{event.event_title}</b>
      </p>
      <ThemeTextButton href={`/events/${event.slug}`}>Learn More</ThemeTextButton>
    </section>
  );
};

export { EventsSection };
