import { CelestialPups } from './gallery/celestial';
import { FantasyPups } from './gallery/fantasy';
import { FirstEditionPups } from './gallery/first-edition';
import { RoyalPups } from './gallery/royal';
import { SpecialPups } from './gallery/special';
import { VoidPups } from './gallery/void';

export type ArchiveStateProps =
  | 'first-edition'
  | 'specials'
  | 'fantasy'
  | 'celestial'
  | 'void'
  | 'void-ethereal'
  | 'royal'
  | 'royal-spades'
  | 'royal-hearts'
  | 'royal-clubs'
  | 'royal-diamonds';

export const ArchiveButtons = [
  {
    title: '1st Edition',
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
  },
  {
    title: 'Void',
    key: <ArchiveStateProps>'void'
  },
  {
    title: 'Royal',
    key: <ArchiveStateProps>'royal'
  }
];

export const ArchiveImages = {
  'first-edition': FirstEditionPups,
  specials: SpecialPups,
  fantasy: FantasyPups,
  celestial: CelestialPups,
  void: VoidPups.normal,
  'void-ethereal': VoidPups.ethereal,
  royal: RoyalPups.normal,
  'royal-spades': RoyalPups.spades,
  'royal-hearts': RoyalPups.hearts,
  'royal-clubs': RoyalPups.clubs,
  'royal-diamonds': RoyalPups.diamonds
};
