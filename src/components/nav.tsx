import Image from 'next/image';
/*
  Main navbar / menu section.
*/

import { Container } from './container';

export const Navigation = () => {
  return (
    <Container>
      <nav className="py-4 flex items-center justify-between">
        <Image src="/logo-min.png" height={42} width={250} />

        <ul className="inline-flex text-white text-lg">
          <li className="ml-8">
            <a href="#">Gallery</a>
          </li>
          <li className="ml-8">
            <a href="#">Facebook</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
