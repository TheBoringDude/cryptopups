import { ReactNode } from 'react';

import DefaultLayout from '@layouts/Default';

import { Navigation } from '@components/nav';
import { Footer } from '@components/footer';

type BaseLayoutProps = {
  title: string;
  children: ReactNode;
};

export const BaseLayout = ({ title, children }: BaseLayoutProps) => {
  return (
    <DefaultLayout pageTitle={title}>
      {/* header section */}
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
