import { ArchiveTabHandler } from '@components/archive/tabs';
import { Container } from '@components/container';
import { PupShow } from '@components/pupshow';
import { ThemeButton } from '@components/theme/buttons';
import { BaseLayout } from '@layouts/base';
import { socialIcons } from 'utils/socialMedia';

export default function Home() {
  return (
    <BaseLayout title="cryptopups! | Welcome">
      {/* showcase header */}
      <Container className="py-16 px-4 md:px-8">
        <section className="grid grid-cols-1 sm:grid-cols-5 items-center">
          <div className="col-span-1 sm:col-span-3">
            <h1 className="text-center sm:text-left text-5xl sm:text-6xl lg:text-7xl font-black text-white">
              Welcome to{' '}
              <span className="text-5xl sm:text-7xl lg:text-8xl underline">cryptopups</span>!
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-light tracking-wide mt-8 text-gray-100">
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
              <ThemeButton className="m-2 py-4 rounded-lg px-8 text-gray-100 text-xl font-bold tracking-wide">
                @cryptopups
              </ThemeButton>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <PupShow />
          </div>
        </section>
      </Container>

      {/* TODO: add social icons in this section */}
      <section className="bg-gray-800 py-8 text-center">
        <h3 className="text-2xl text-gray-100 mb-3">visit us at our social media pages</h3>
        <ul className="inline-flex items-center justify-center">
          {socialIcons.map((social, index) => (
            <li key={index} className="mx-1">
              <a className="group text-sm" href={social.link}>
                <img
                  className="h-12 w-12 transform group-hover:scale-110 ease-in-out duration-300"
                  src={social.src}
                  alt={`social ${social.name}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-12">
        <Container className="text-center">
          <h2 className="text-center font-black text-white text-5xl">Pups! Archive</h2>
          <ArchiveTabHandler />
        </Container>
        {/* PS: I do not to refactor this ;-) */}
        <div
          className="text-white text-center"
          dangerouslySetInnerHTML={{
            __html: `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://www.cryptopups.cf/">Cryptopups</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.instagram.com/apppllleee_pie/">Adrich Laceste</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution-NonCommercial 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"></a></p>`
          }}
        ></div>
      </section>
    </BaseLayout>
  );
}
