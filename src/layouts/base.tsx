import { Footer } from '@components/footer';
import { Navigation } from '@components/nav';
import DefaultLayout from '@layouts/default';
import { EventsSection } from '@modules/events/component/events-section';
import { EventProps } from '@modules/events/types';
import { ReactNode, useEffect, useState } from 'react';

type BaseLayoutProps = {
  children: ReactNode;
  event: EventProps;
};

// return to top scroll
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const BaseLayout = ({ children, event }: BaseLayoutProps) => {
  const [show, setShow] = useState(false);

  const onScroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <DefaultLayout>
      {/* scroll to top button */}
      {show && (
        <button
          type="button"
          title="Return To Top"
          onClick={scrollToTop}
          className="fixed z-50 text-white bottom-12 right-3 bg-white/5 hover:bg-white/20 p-2 animate-bounce hover:animate-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

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
