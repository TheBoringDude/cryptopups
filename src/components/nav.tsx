/*
  Main navbar / menu section.
*/

import Image from 'next/image';
import Link from 'next/link';
import { Container } from './container';
import { ToggleThemeButton } from './toggle-theme';

export const Navigation = () => {
  return (
    <Container>
      <nav className="py-4 flex items-center justify-between">
        <Link href="/">
          <a>
            <Image src="/logo-min.png" height={35} width={215} />
          </a>
        </Link>

        <ul className="inline-flex items-center text-coolGray-700 dark:text-white text-lg">
          <li className="ml-8">
            <a href="#">Gallery</a>
          </li>
          <li className="ml-8">
            <a href="/blog">Blog</a>
          </li>
          <li className="ml-8">
            <ToggleThemeButton />
          </li>
        </ul>
      </nav>
    </Container>
  );
};
