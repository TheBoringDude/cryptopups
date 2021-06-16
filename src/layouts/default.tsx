/*
  This is the main (second-parent) layouts component.
*/

import { ReactNode } from 'react';
import Head from 'next/head';

// ISSUE: https://github.com/FortAwesome/react-fontawesome/issues/412
import { config, dom } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

type LayoutProps = { children: ReactNode };

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style>{dom.css()}</style>

        {/* might be better to put the fonts in here for better font optimization by nextjs */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
