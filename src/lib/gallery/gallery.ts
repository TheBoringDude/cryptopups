export type ImagePupsProps = {
  name: string;
  src: string;
  rarity?: ImageRatings;
};

export type ImagePupsNestedProps = {
  [key: string]: ImagePupsProps[];
};

export type ImageRatings = 'rare' | 'mythic' | 'cosmic' | 'ethereal' | 'special';
