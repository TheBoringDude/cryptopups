import React from 'react';
import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import PupsProvider from '@lib/pupsThemeContext';
import '../styles/tailwind.css';

export default function CryptoPups({ Component, pageProps }: AppProps) {
  return (
    <PupsProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </PupsProvider>
  );
}
