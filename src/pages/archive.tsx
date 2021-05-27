import { ArchiveTabHandler } from '@components/archive/tabs';
import { Container } from '@components/container';
import { BaseLayout } from '@layouts/base';
import { getLatestEvent } from '@lib/events/events';
import { EventProps } from '@lib/events/types';
import { GetStaticProps } from 'next';

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
    <BaseLayout event={event} title="Archive Gallery">
      <section className="py-12">
        <Container className="text-center">
          <h2 className="text-center font-black text-coolGray-700 dark:text-white text-5xl leading-relaxed">
            Pups! Archive
          </h2>
          <p className="text-xl tracking-wide text-gray-600">Look at these cute pups...</p>
          <ArchiveTabHandler />
        </Container>

        <div className="text-gray-700 dark:text-white text-center mt-8">
          <div>
            <p>
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
                className="hover:underline"
                rel="cc:attributionURL dct:creator"
                property="cc:attributionName"
                href="https://www.instagram.com/apppllleee_pie/"
              >
                Adrich Laceste
              </a>{' '}
              is licensed under{' '}
              <a
                href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
                target="_blank"
                rel="license noopener noreferrer"
              >
                Attribution-NonCommercial 4.0 International
                <div className="flex items-center justify-center">
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
            </p>
          </div>
          <p className="mt-2">
            NOTE: If you have bought one of the products (artwork) above, you can ignore this
            license for the product.
          </p>
        </div>
      </section>
    </BaseLayout>
  );
};

export default ArchivePage;
