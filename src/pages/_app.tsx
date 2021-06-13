import React from 'react';
import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';

import PupsProvider from '@lib/pupsThemeContext';
import '../styles/tailwind.css';

export default function CryptoPups({ Component, pageProps }: AppProps) {
  return (
    <PupsProvider>
      <DefaultSeo
        titleTemplate="%s | The World of CryptoPups"
        openGraph={{
          type: 'website',
          locale: 'en_PH',
          url: 'https://www.cryptopups.cf/',
          site_name: 'World of CryptoPups'
        }}
        twitter={{
          handle: '@apppllleee_pie',
          site: '@apppllleee_pie',
          cardType: 'summary_large_image'
        }}
      />
      <Component {...pageProps} />
    </PupsProvider>
  );
}
