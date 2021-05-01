/*
  This is the Index / Home page.
*/

import { ArchiveTabHandler } from '@components/archive/tabs';
import { Container } from '@components/container';
import { EventsSection } from '@components/events';
import { PupShow } from '@components/pupshow';
import { SocialSection } from '@components/social';
import { ThemeAnchorButton } from '@components/theme/anchor';
import { BaseLayout } from '@layouts/base';
import { getLatestEvent } from '@lib/events/events';
import { EventProps } from '@lib/events/types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { TELEGRAM_LINK } from '@utils/socialMedia';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

export const getStaticProps: GetStaticProps = async () => {
  const event = getLatestEvent();

  return {
    // I am having issues with the date one so, ..
    props: { event: JSON.parse(JSON.stringify(event)) }
  };
};

type HomeProps = {
  event: EventProps;
};

export default function Home({ event }: HomeProps) {
  return (
    <BaseLayout title="cryptopups! | Welcome">
      {/* showcase header */}
      <Container className="py-8 px-4 md:px-8">
        <EventsSection event={event} />
        <section className="grid grid-cols-1 sm:grid-cols-5 items-center">
          <div className="col-span-1 sm:col-span-3">
            <h1 className="text-center sm:text-left text-5xl sm:text-6xl lg:text-7xl font-black text-coolGray-700 dark:text-white">
              Welcome to{' '}
              <span className="text-5xl sm:text-7xl lg:text-8xl underline">cryptopups</span>!
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-light tracking-wide mt-8 text-coolGray-500 dark:text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, minus expedita.
              Ratione, qui.
            </p>

            {/* just some buttons in here */}
            <div className="inline-flex flex-col sm:flex-row mt-6">
              <Link href="/archive">
                <a
                  className="m-2 py-4 rounded-lg px-8 bg-coolGray-600 hover:bg-coolGray-700 text-gray-100 text-xl font-bold tracking-wide inline-flex items-center"
                  title="View Archive"
                >
                  <FontAwesomeIcon icon={faImages} className="mr-2 text-3xl" />
                  Archive
                </a>
              </Link>
              <ThemeAnchorButton
                href={TELEGRAM_LINK.link}
                title="Join Telegram Clubhouse"
                className="m-2 py-4 rounded-lg px-8 text-gray-100 text-xl font-bold tracking-wide inline-flex items-center"
              >
                <span className="text-3xl mr-2">{TELEGRAM_LINK.icon}</span>
                clubhouse
              </ThemeAnchorButton>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <Image src="/images/featured-white.png" height={500} width={500} />
          </div>
        </section>
      </Container>

      <SocialSection />

      <hr />

      <Container layouts="w-4/5" className="my-20 text-center">
        <h2 className="text-5xl font-black tracking-wide text-coolGray-700 dark:text-gray-100">
          Pups Picker!
        </h2>
        <p className="text-2xl tracking-wide text-coolGray-500 dark:text-gray-100 mt-2">
          Want to do something fun? <br /> Try to change the theme of the color you want...
        </p>
        <PupShow />
      </Container>
    </BaseLayout>
  );
}
