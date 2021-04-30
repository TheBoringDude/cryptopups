import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '@lib/theme';
import Image from 'next/image';
/*
  Main navbar / menu section.
*/

import { Container } from './container';
import { ThemeButton } from './theme/buttons';

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

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
            <ThemeButton onClick={toggleTheme} className="px-3 py-2 rounded-full">
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} size="lg" />
            </ThemeButton>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
