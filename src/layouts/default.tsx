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
      </Head>

      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
