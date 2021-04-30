/*
  Main navbar / menu section.
*/

import Image from 'next/image';
import { Container } from './container';
import { ToggleThemeButton } from './toggle-theme';

export const Navigation = () => {
  return (
    <Container>
      <nav className="py-4 flex items-center justify-between">
        <Image src="/logo-min.png" height={35} width={215} />

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
