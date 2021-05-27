/*
  Main Handler for tab swtiching...
*/

import { useState } from 'react';

import type { ArchiveStateProps } from '@lib/archive';
import { ArchiveButtons } from '@lib/archive';
import { SlideColorsContext, usePupsColor, usePupsTheme } from '@lib/theme';

import { SetFirstEditionPups, SetSpecialsPups, SetFantasyPups, SetCelestialPups } from './sets';

export const ArchiveTabHandler = () => {
  const [archives, setArchives] = useState<ArchiveStateProps>('first-edition');
  const pupmode = usePupsColor();

  return (
    <>
      <div className="w-2/3 md:w-4/5 xl:w-1/2 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 items-center mt-8">
        {ArchiveButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => {
              setArchives(button.key);
            }}
            className={`${
              button.key == archives ? `${pupmode?.button.base}` : 'bg-coolGray-600'
            } py-2 px-6 md:px-8 text-gray-100 rounded-lg font-bold tracking-wide ${
              pupmode?.button.hover
            }`}
          >
            {button.title}
          </button>
        ))}
      </div>

      <div>
        {archives === 'first-edition' && <SetFirstEditionPups />}
        {archives === 'specials' && <SetSpecialsPups />}
        {archives === 'fantasy' && <SetFantasyPups />}
        {archives === 'celestial' && <SetCelestialPups />}
      </div>
    </>
  );
};
