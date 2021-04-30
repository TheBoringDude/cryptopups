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
import { TELEGRAM_LINK } from 'utils/socialMedia';

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
              <button
                className="m-2 py-4 rounded-lg px-8 bg-coolGray-600 hover:bg-coolGray-700 text-gray-100 text-xl font-bold tracking-wide"
                title="View Archive"
              >
                Archive
              </button>
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
            <PupShow />
          </div>
        </section>
      </Container>

      {/* TODO: add social icons in this section */}
      <SocialSection />

      <section className="py-12">
        <Container className="text-center">
          <h2 className="text-center font-black text-coolGray-700 dark:text-white text-5xl">
            Pups! Archive
          </h2>
          <ArchiveTabHandler />
        </Container>
        {/* PS: I do not to refactor this ;-)
        
        TODO: NEEDS Confirmation and checking...*/}
        {/* <div
          className="text-white text-center"
          dangerouslySetInnerHTML={{
            __html: `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://www.cryptopups.cf/">Cryptopups</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.instagram.com/apppllleee_pie/">Adrich Laceste</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution-NonCommercial 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"></a></p>`
          }}
        ></div> */}
      </section>
    </BaseLayout>
  );
}
