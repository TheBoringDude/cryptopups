/*
  Main navbar / menu section.
*/

import { usePupsColor } from '@modules/theme/theme';
import Image from 'next/image';
import Link from 'next/link';
import { BuyNowBtn } from './buy-now';
import { Container } from './container';

export const Navigation = () => {
  const pupmode = usePupsColor();

  return (
    <Container>
      <nav className="py-4 flex flex-col sm:flex-row items-center justify-between">
        <Link href="/">
          <a>
            <Image alt="World of CryptoPups Logo" src="/logo.png" height={30} width={140} />
          </a>
        </Link>

        <ul className="mt-6 md:mt-0 inline-flex items-center text-coolGray-700 dark:text-white font-alt">
          <li className="mx-3 sm:ml-8">
            <Link href="/archive">
              <a className={`tracking-wider ${pupmode?.linkHover}`}>Gallery</a>
            </Link>
          </li>
          <li className="mx-3 sm:ml-8">
            <Link href="/blog">
              <a className={`tracking-wider ${pupmode?.linkHover}`}>Blog</a>
            </Link>
          </li>
          <li className="mx-3 sm:ml-8">
            <BuyNowBtn />
          </li>
        </ul>
      </nav>
    </Container>
  );
};
