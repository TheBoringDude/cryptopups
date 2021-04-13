import PupsProvider from '@lib/pupsThemeContext';
import type { AppProps } from 'next/app';

import '../styles/tailwind.css';

export default function CryptoPups({ Component, pageProps }: AppProps) {
  return (
    <PupsProvider>
      <Component {...pageProps} />;
    </PupsProvider>
  );
}
