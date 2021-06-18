import { ArchiveTabHandler } from '@components/archive/tabs';
import { Container } from '@components/container';
import { BaseLayout } from '@layouts/base';
import { getLatestEvent } from '@lib/events/events';
import { EventProps } from '@lib/events/types';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

export const getStaticProps: GetStaticProps = async () => {
  const event = getLatestEvent();

  return {
    props: { event }
  };
};

type ArchiveProps = {
  event: EventProps;
};

const ArchivePage = ({ event }: ArchiveProps) => {
  return (
    <BaseLayout event={event}>
      <NextSeo
        title="Our Pups Archive!"
        description="View the cute puppies that we have made and published."
        openGraph={{
          title: 'Our Pups Archive!',
          description: 'View the cute puppies that we have made and published.'
        }}
      />

      <section className="py-12">
        <Container className="text-center">
          <h2 className="text-center font-black text-coolGray-700 dark:text-white text-5xl leading-relaxed">
            Pups! Archive
          </h2>
          <p className="text-xl tracking-wide text-gray-600 dark:text-gray-300">
            Look at these cute pups...
          </p>
          <ArchiveTabHandler />
        </Container>

        <div className="text-gray-700 dark:text-white text-center mt-8">
          <div>
            <a
              className="hover:underline"
              property="dct:title"
              rel="cc:attributionURL"
              href="https://www.cryptopups.cf/"
            >
              Cryptopups
            </a>{' '}
            by{' '}
            <a
              className="hover:underline font-bold"
              rel="cc:attributionURL dct:creator"
              property="cc:attributionName"
              href="https://www.instagram.com/apppllleee_pie/"
            >
              apppllleee_pie
            </a>{' '}
            is licensed under{' '}
            <a
              href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
              target="_blank"
              rel="license noopener noreferrer"
            >
              Attribution-NonCommercial 4.0 International
              <div className="flex items-center justify-center mt-2">
                <img
                  className="h-6 w-6 mx-1"
                  src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                />
                <img
                  className="h-6 w-6 mx-1"
                  src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                />
                <img
                  className="h-6 w-6 mx-1"
                  src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default ArchivePage;
