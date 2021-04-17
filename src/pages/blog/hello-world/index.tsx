import { BaseLayout } from '@layouts/base';
import { SlideColorsContext, usePupsTheme } from '@lib/theme';

export default function SampleBlogContentPage() {
  const { pupmode } = usePupsTheme();

  return (
    <BaseLayout title="Hello World">
      <div className="text-gray-200 w-4/5 md:w-2/3 mx-auto my-12">
        <h2 className={`text-4xl font-bold tracking-wide ${SlideColorsContext[pupmode].text}`}>
          Hello World
        </h2>
        <div className="my-2 p-2 bg-gray-800 tracking-wide rounded-md flex flex-col sm:flex-row items-center justify-between">
          <h4 className="">@Adrich Laceste</h4>
          <p className="text-sm text-gray-300 font-light">{new Date().toUTCString()}</p>
        </div>
        <div>
          <p className="py-2 text-base sm:text-lg tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam iusto
            provident aliquid ad, corporis eum eaque architecto excepturi. Consequuntur commodi
            quidem aspernatur qui incidunt. Laudantium aut autem animi. Pariatur eos excepturi,
            voluptatibus iusto dolore at eum veritatis ad corrupti quo ducimus deserunt voluptates
            qui assumenda esse necessitatibus adipisci ipsa.
          </p>
          <p className="py-2 text-base sm:text-lg tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore ad quidem soluta,
            consectetur, cum amet ex culpa cupiditate reprehenderit, ipsa tempora quibusdam!
            Cupiditate nesciunt accusamus voluptas ut harum facilis!
          </p>
          <p className="py-2 text-base sm:text-lg tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet accusamus, ad inventore
            quae, voluptatibus commodi quos vero quasi doloribus nisi cupiditate, sapiente porro
            labore a atque! Quibusdam doloremque dignissimos iste facere, temporibus rerum mollitia
            voluptates. Quidem eius reiciendis ducimus nostrum.
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}
