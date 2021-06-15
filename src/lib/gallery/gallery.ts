export type ImagePupsProps = {
  name: string;
  src: string;
  rating?: ImageRatings;
};

export type ImagePupsNestedProps = {
  [key: string]: ImagePupsProps[];
};

type ImageRatings = 'epic' | 'legendary' | 'classic';
