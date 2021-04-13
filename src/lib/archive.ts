import { CelestialPups } from './gallery/celestial';
import { FantasyPups } from './gallery/fantasy';
import { FirstEditionPups } from './gallery/first-edition';
import { SpecialPups } from './gallery/special';

export type ArchiveStateProps = 'first-edition' | 'specials' | 'fantasy' | 'celestial';

export const ArchiveButtons = [
  {
    title: 'First Edition',
    key: <ArchiveStateProps>'first-edition'
  },
  {
    title: 'Specials',
    key: <ArchiveStateProps>'specials'
  },
  {
    title: 'Fantasy',
    key: <ArchiveStateProps>'fantasy'
  },
  {
    title: 'Celestial',
    key: <ArchiveStateProps>'celestial'
  }
];

export const ArchiveImages = {
  'first-edition': FirstEditionPups,
  specials: SpecialPups,
  fantasy: FantasyPups,
  celestial: CelestialPups
};
