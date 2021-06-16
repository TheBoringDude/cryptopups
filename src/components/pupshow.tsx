import Image from 'next/image';

import { SlideColorsContext, usePupsTheme } from '@lib/theme';

export const PupShow = () => {
  const { pupmode, togglePupMode } = usePupsTheme();

  return (
    <div className="flex items-center justify-center">
      <ul className="flex flex-col mr-10">
        {/* map over the object theme in here */}
        {Object.entries(SlideColorsContext).map(([_, color], index) => (
          <li key={index} className="m-1">
            <button
              onClick={() => {
                togglePupMode(color.name);
              }}
              className={`p-3 lg:p-5 rounded-md ${color.color} ${
                color.name === pupmode ? 'rounded-full' : ''
              }`}
              title={color.name}
            ></button>
          </li>
        ))}
      </ul>
      {/* it preloads the images this way and much faster? */}
      {pupmode === 'blue' ? (
        <Image src="/images/featured/blue.png" className="rounded-lg" height={550} width={550} />
      ) : pupmode === 'green' ? (
        <Image src="/images/featured/green.png" className="rounded-lg" height={550} width={550} />
      ) : pupmode === 'purple' ? (
        <Image src="/images/featured/purple.png" className="rounded-lg" height={550} width={550} />
      ) : pupmode === 'yellow' ? (
        <Image src="/images/featured/yellow.png" className="rounded-lg" height={550} width={550} />
      ) : pupmode === 'orange' ? (
        <Image src="/images/featured/orange.png" className="rounded-lg" height={550} width={550} />
      ) : pupmode === 'rose' ? (
        <Image src="/images/featured/rose.png" className="rounded-lg" height={550} width={550} />
      ) : null}
    </div>
  );
};
