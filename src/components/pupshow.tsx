import Image from 'next/image';

import { SlideColorsContext, usePupsTheme } from '@modules/theme/theme';
import blue from '../../public/images/featured/blue.png';
import green from '../../public/images/featured/green.png';
import yellow from '../../public/images/featured/yellow.png';
import orange from '../../public/images/featured/orange.png';
import purple from '../../public/images/featured/purple.png';
import rose from '../../public/images/featured/rose.png';

export const PupShow = () => {
  const { pupmode, togglePupMode } = usePupsTheme();

  return (
    <div className="flex items-center justify-center">
      <ul className="flex flex-col mr-10">
        {/* map over the object theme in here */}
        {Object.entries(SlideColorsContext).map(([, color], index) => (
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
        <Image
          src={blue}
          alt="Rainbow Pup - Blue"
          placeholder="blur"
          className="rounded-lg"
          height={550}
          width={550}
        />
      ) : pupmode === 'green' ? (
        <Image
          src={green}
          alt="Rainbow Pup - Green"
          placeholder="blur"
          className="rounded-lg"
          height={550}
          width={550}
        />
      ) : pupmode === 'purple' ? (
        <Image
          src={purple}
          alt="Rainbow Pup - Purple"
          placeholder="blur"
          className="rounded-lg"
          height={550}
          width={550}
        />
      ) : pupmode === 'yellow' ? (
        <Image
          src={yellow}
          alt="Rainbow Pup - Yellow"
          placeholder="blur"
          className="rounded-lg"
          height={550}
          width={550}
        />
      ) : pupmode === 'orange' ? (
        <Image
          src={orange}
          alt="Rainbow Pup - Orange"
          placeholder="blur"
          className="rounded-lg"
          height={550}
          width={550}
        />
      ) : pupmode === 'rose' ? (
        <Image
          src={rose}
          alt="Rainbow Pup - Rose"
          placeholder="blur"
          className="rounded-lg"
          height={550}
          width={550}
        />
      ) : null}
    </div>
  );
};
