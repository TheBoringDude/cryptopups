import Image from 'next/image';

import { SlideColorsContext, usePupsTheme } from '@lib/theme';

export const PupShow = () => {
  const { pupmode, togglePupMode } = usePupsTheme();

  return (
    <div className="relative">
      <Image
        src={`/images/featured/${pupmode}.png`}
        className="rounded-lg"
        height={700}
        width={700}
      />
      <ul className="absolute top-0 flex">
        {/* map over the object theme in here */}
        {Object.entries(SlideColorsContext).map(([key, color], index) => (
          <li key={index} className="mx-1">
            <button
              onClick={() => {
                togglePupMode(color.name);
              }}
              className={`p-4 ${color.color} ${color.name === pupmode ? 'rounded-full' : ''}`}
              title={color.name}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};
