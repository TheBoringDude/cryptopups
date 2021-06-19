import { ReactNode } from 'react';

import DefaultLayout from '@layouts/default';

import { Navigation } from '@components/nav';
import { Footer } from '@components/footer';
import { EventsSection } from '@modules/events/component/events';
import { EventProps } from '@modules/events/types';

type BaseLayoutProps = {
  children: ReactNode;
  event: EventProps;
};

export const BaseLayout = ({ children, event }: BaseLayoutProps) => {
  return (
    <DefaultLayout>
      {/* header section */}
      <EventsSection event={event} />
      <header>
        <Navigation />
      </header>
      <hr className="border-gray-300 dark:border-gray-700" />

      {children}

      <hr className="border-gray-300 dark:border-gray-700" />
      {/* footer section */}
      <footer className="bg-gray-800 py-8">
        <Footer />
      </footer>
    </DefaultLayout>
  );
};
