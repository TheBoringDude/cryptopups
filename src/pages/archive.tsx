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
};

export default ArchivePage;
