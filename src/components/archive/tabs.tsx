import { useState } from 'react';

import type { ArchiveStateProps } from '@lib/archive';
import { ArchiveButtons } from '@lib/archive';
import { ArchiveGallery } from './gallery';

export const ArchiveTabHandler = () => {
  const [archives, setArchives] = useState<ArchiveStateProps>('first-edition');

  return (
    <>
      <ul className="inline-flex mt-8 text-lg">
        {ArchiveButtons.map((button, index) => (
          <li key={index}>
            <button
              onClick={() => {
                setArchives(button.key);
              }}
              className={`${
                button.key == archives ? 'bg-rose-600' : 'bg-coolGray-600'
              } py-2 px-8 text-gray-100 mx-2 rounded-lg font-bold tracking-wide hover:bg-rose-600`}
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
