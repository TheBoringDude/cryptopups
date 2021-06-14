import { EventsSection } from '@components/events';
import { EventProps } from '@lib/events/types';
import { ReactNode } from 'react';
import DefaultLayout from './default';

type EventLayoutProps = {
  children: ReactNode;
  event: EventProps;
  onGoingEvent: EventProps;
};

export const EventLayout = ({ children, event, onGoingEvent }: EventLayoutProps) => {
  return (
    <DefaultLayout>
      {event.slug !== onGoingEvent.slug && <EventsSection event={onGoingEvent} />}
      <div className="bg-coolGray-900">{children}</div>
    </DefaultLayout>
  );
};
