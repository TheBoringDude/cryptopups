/*
  Main navbar / menu section.
*/

import Image from 'next/image';
import Link from 'next/link';
import { BuyNowBtn } from './buy-now';
import { Container } from './container';

export const Navigation = () => {
  return (
    <Container>
      <nav className="py-4 flex flex-col sm:flex-row items-center justify-between">
        <Link href="/">
          <a>
            <Image src="/logo.png" height={30} width={140} />
          </a>
        </Link>

        <ul className="inline-flex items-center text-coolGray-700 dark:text-white">
          <li className="mx-3 sm:ml-8">
            <a href="/archive">Gallery</a>
          </li>
          <li className="mx-3 sm:ml-8">
            <a href="/blog">Blog</a>
          </li>
          <li className="mx-3 sm:ml-8">
            <BuyNowBtn />
          </li>
        </ul>
      </nav>
    </Container>
  );
};
