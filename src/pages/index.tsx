/*
  This is the Index / Home page.
*/

import { Container } from '@components/container';
import { PupShow } from '@components/pupshow';
import { SocialSection } from '@components/social';
import { ThemeAnchorButton } from '@components/theme/anchor';
import { BaseLayout } from '@layouts/base';
import { getLatestEvent } from '@lib/events/events';
import { EventProps } from '@lib/events/types';
import { GetStaticProps } from 'next';
import { TELEGRAM_LINK } from '@utils/socialMedia';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { NextSeo } from 'next-seo';
import { usePupsColor } from '@lib/theme';

import featuredImage from '../../public/images/featured-white.png';

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
  const pupmode = usePupsColor();

  return (
    <BaseLayout event={event}>
      <NextSeo
        title="Welcome"
        description="Welcome to the Official Website of The World of CryptoPups. Where cute, cool, beautiful and amazingly crafted puppies reside, `pups` all the way to the moon!"
        openGraph={{
          title: 'Welcome',
          description:
            'Welcome to the Official Website of The World of CryptoPups. Where cute, cool, beautiful and amazingly crafted puppies reside, `pups` all the way to the moon!'
        }}
      />

      {/* showcase header */}
      <Container className="py-20 px-4 lg:px-8">
        <section className="text-center">
          <div className="w-11/12 sm:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto">
            <h1 className="text-3xl xs:text-4xl md:text-5xl xl:text-6xl font-black text-coolGray-700 dark:text-white">
              Welcome to <br className="my-3" />
              <span
                className={`text-5xl md:text-6xl xl:text-7xl underline tracking-tight ${
                  pupmode?.text && pupmode.text
                }`}
              >
                World of CryptoPups
              </span>
            </h1>
            <p className="text-2xl tracking-wide mt-8 text-coolGray-500 dark:text-gray-100">
              Where cute, cool, beautiful and amazingly crafted puppies reside,{' '}
              <span className="font-black">`pups`</span> all the way to the moon!
            </p>

            {/* just some buttons in here */}
            <div className="inline-flex flex-col xs:flex-row mt-6">
              <Link href="/archive">
                <a
                  className="m-2 py-3 2md:py-4 px-6 2md:px-8 rounded-lg bg-coolGray-600 hover:bg-coolGray-700 text-gray-100 text-lg md:text-xl font-bold tracking-wide inline-flex items-center justify-center"
                  title="View Archive"
                >
                  <FontAwesomeIcon
                    icon={faImages}
                    className="mr-2 text-xl md:text-2xl xl:text-3xl"
                  />
                  Archive
                </a>
              </Link>
              <ThemeAnchorButton
                href={TELEGRAM_LINK.link}
                title="Join Telegram Clubhouse"
                className="m-2 py-3 2md:py-4 px-6 2md:px-8 rounded-lg text-gray-100 text-lg md:text-xl font-bold tracking-wide inline-flex items-center justify-center"
              >
                <span className="mr-2 text-xl md:text-2xl xl:text-3xl">{TELEGRAM_LINK.icon}</span>
                clubhouse
              </ThemeAnchorButton>
            </div>
          </div>
          <div className="col-span-1 2md:col-span-2 w-5/6 sm:w-2/3 mx-auto 2md:w-auto">
            <Image src={featuredImage} placeholder="blur" height={500} width={500} />
          </div>
        </section>
      </Container>

      <SocialSection />

      <hr />

      <Container layouts="w-4/5" className="my-20 text-center">
        <h2 className="text-4xl lg:text-5xl font-black tracking-wide text-coolGray-700 dark:text-gray-100">
          Pups Picker!
        </h2>
        <p className="text-xl 2md:text-2xl tracking-wide text-coolGray-500 dark:text-gray-100 mt-2">
          Want to do something fun? <br /> Try to change the theme of the color you want...
        </p>
        <PupShow />
      </Container>
    </BaseLayout>
  );
}
