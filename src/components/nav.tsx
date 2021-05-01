/*
  Main navbar / menu section.
*/

import Image from 'next/image';
import Link from 'next/link';
import { BuyNowBtn } from './buy-now';
import { Container } from './container';
import { ToggleThemeButton } from './toggle-theme';

export const Navigation = () => {
  return (
    <Container>
      <nav className="py-4 flex flex-col xs:flex-row items-center justify-between">
        <Link href="/">
          <a>
            <Image src="/logo-min.png" height={32} width={205} />
          </a>
        </Link>

        <ul className="inline-flex items-center text-coolGray-700 dark:text-white text-lg">
          <li className="ml-8">
            <a href="/archive">Gallery</a>
          </li>
          <li className="ml-8">
            <a href="/blog">Blog</a>
          </li>
          <li className="ml-8">
            <BuyNowBtn />
          </li>
          <li className="ml-8">
            <ToggleThemeButton />
          </li>
        </ul>
      </nav>
    </Container>
  );
};
