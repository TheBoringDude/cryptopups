import { ReactNode } from 'react';

import DefaultLayout from '@layouts/Default';

import { Navigation } from '@components/nav';
import { Footer } from '@components/footer';
import { EventsSection } from '@components/events';
import { EventProps } from '@lib/events/types';

type BaseLayoutProps = {
  title: string;
  children: ReactNode;
  event: EventProps;
};

export const BaseLayout = ({ title, children, event }: BaseLayoutProps) => {
  return (
    <DefaultLayout pageTitle={title}>
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
