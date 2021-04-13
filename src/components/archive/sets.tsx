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
