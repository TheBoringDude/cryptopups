/*
  Pups Archive Gallery WRAPPER
*/

import Image from 'next/image';

import { ArchiveImages, ArchiveStateProps } from '@lib/archive';
import { ImageRatings } from '@lib/gallery/gallery';

type ArchiveGalleryProps = {
  set: ArchiveStateProps;
};

type GalleryRarityColorsProps = {
  [key in ImageRatings]: string;
};

const GalleryRarityColors: GalleryRarityColorsProps = {
  rare: 'bg-blue-500',
  mythic: 'bg-violet-500',
  cosmic: 'bg-red-500',
  ethereal: 'bg-orange-500',
  special: 'bg-blueGray-800'
};

export const ArchiveGallery = ({ set }: ArchiveGalleryProps) => {
  return (
    <>
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8 py-8">
        {ArchiveImages[set].map((image, index) => (
          <div key={index} className="relative">
            <span
              title={image.rarity}
              className={`${
                GalleryRarityColors[image.rarity]
              } absolute -top-2 -right-2 z-50 text-gray-100 px-4 py-2 rounded-lg font-black tracking-wide`}
            >
              {image.rarity}
            </span>
            <Image
              className="rounded-xl z-10"
              objectFit="cover"
              src={image.src}
              alt={image.name}
              height={400}
              width={400}
            />
          </div>
        ))}
      </section>
    </>
  );
};
