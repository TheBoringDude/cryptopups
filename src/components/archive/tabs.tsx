import { useState } from 'react';

import type { ArchiveStateProps } from '@lib/archive';
import { ArchiveButtons } from '@lib/archive';
import { ArchiveGallery } from './gallery';

export const ArchiveTabHandler = () => {
  const [archives, setArchives] = useState<ArchiveStateProps>('first-edition');

  return (
    <>
      <ul className="inline-flex flex-col sm:flex-row mt-8 text-base lg:text-lg">
        {ArchiveButtons.map((button, index) => (
          <li key={index} className="my-1 sm:my-0">
            <button
              onClick={() => {
                setArchives(button.key);
              }}
              className={`${
                button.key == archives ? 'bg-rose-600' : 'bg-coolGray-600'
              } py-1 md:py-2 px-6 md:px-8 text-gray-100 mx-2 rounded-lg font-bold tracking-wide hover:bg-rose-600`}
            >
              {button.title}
            </button>
          </li>
        ))}
      </ul>

      <ArchiveGallery set={archives} />
    </>
  );
};
