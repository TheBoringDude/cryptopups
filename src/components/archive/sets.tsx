/*
  Just a Wrapper to each pups groups.
*/

import { ArchiveGallery } from './gallery';

export const SetFirstEditionPups = () => {
  return <ArchiveGallery set="first-edition" />;
};

export const SetSpecialsPups = () => {
  return <ArchiveGallery set="specials" />;
};

export const SetFantasyPups = () => {
  return <ArchiveGallery set="fantasy" />;
};

export const SetCelestialPups = () => {
  return <ArchiveGallery set="celestial" />;
};

export const SetVoidPups = () => {
  return (
    <>
      <ArchiveGallery set="void" />
      <hr />
      <h4 className="mt-8 font-extrabold text-lg text-gray-700 uppercase dark:text-gray-200">
        Ethereal
      </h4>
      <ArchiveGallery set="void-ethereal" />
    </>
  );
};

export const SetRoyalPups = () => {
  return (
    <>
      <ArchiveGallery set="royal" />

      <hr />
      <h4 className="mt-8 font-extrabold text-lg text-gray-700 uppercase dark:text-gray-200">
        Spades
      </h4>
      <ArchiveGallery set="royal-spades" />

      <hr />
      <h4 className="mt-8 font-extrabold text-lg text-gray-700 uppercase dark:text-gray-200">
        Diamonds
      </h4>
      <ArchiveGallery set="royal-diamonds" />

      <hr />
      <h4 className="mt-8 font-extrabold text-lg text-gray-700 uppercase dark:text-gray-200">
        Clubs
      </h4>
      <ArchiveGallery set="royal-clubs" />

      <hr />
      <h4 className="mt-8 font-extrabold text-lg text-gray-700 uppercase dark:text-gray-200">
        Hearts
      </h4>
      <ArchiveGallery set="royal-hearts" />
    </>
  );
};
