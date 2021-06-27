/*
  Main footer section.
*/

import { ToggleThemeButton } from '@modules/theme/toggle-theme';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './container';

export const Footer = () => {
  return (
    <Container className="text-center 2md:text-left font-alt">
      <div className="flex flex-col 2md:flex-row items-center justify-between mb-4">
        <Link href="/">
          <a>
            <Image alt="World of CryptoPups Logo" src="/logo.png" height={25} width={115} />
          </a>
        </Link>
        <div className="inline-flex items-center">
          <p className="text-gray-100 my-4 2md:my-0 mr-2">
            &copy; {new Date().getFullYear()} | All Rights Reserved -{' '}
            <a href="https://www.instagram.com/apppllleee_pie/" rel="noreferrer">
              @apppllleee_pie
            </a>
          </p>
          <ToggleThemeButton />
        </div>

        {/* just some external links */}
        <ul className="text-gray-200 text-center 2md:text-left">
          <li>
            <a className="hover:underline my-1" href="https://notiriscreations.cf">
              Iris Designs
            </a>
          </li>
          <li>
            <a className="hover:underline my-1" href="https://fleur-delights.vercel.app/">
              Fleur Delights
            </a>
          </li>
        </ul>
      </div>
      <small className="text-white mt-10 2md:mt-0 tracking-wide">
        Website designed by{' '}
        <a href="https://github.com/TheBoringDude/" rel="noreferrer">
          TheBoringDude
        </a>
      </small>
    </Container>
  );
};
