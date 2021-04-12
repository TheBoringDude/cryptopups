import { Container } from '@components/container';
import { SlideShow } from '@components/slideshow';
import { BaseLayout } from '@layouts/base';

export default function Home() {
  return (
    <BaseLayout title="cryptopups! | Welcome">
      {/* showcase header */}
      <Container className="py-16 px-8">
        <section className="grid grid-cols-5 items-center">
          <div className="col-span-3 mr-8">
            <h1 className="text-7xl font-black text-white">
              Welcome to <span className="text-8xl underline">cryptopups</span>!
            </h1>
            <p className="text-2xl font-light tracking-wide mt-8 text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, minus expedita.
              Ratione, qui.
            </p>

            {/* just some buttons in here */}
            <div className="inline-flex mt-6">
              <button
                className="m-2 py-4 rounded-lg px-8 bg-coolGray-600 hover:bg-coolGray-700 text-gray-100 text-xl font-bold tracking-wide"
                title="View Archive"
              >
                Archive
              </button>
              <button
                className="m-2 py-4 rounded-lg px-8 bg-rose-600 hover:bg-rose-700 text-gray-100 text-xl font-bold tracking-wide"
                title="See us @cryptokittens"
              >
                @cryptokittens
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <SlideShow />
          </div>
        </section>
      </Container>

      {/* TODO: add social icons in this section */}
      <section></section>
    </BaseLayout>
  );
}
