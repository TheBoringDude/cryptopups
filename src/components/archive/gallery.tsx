/*
  Pups Archive Gallery WRAPPER
*/

import Image from 'next/image';

import { ArchiveImages, ArchiveStateProps } from '@lib/archive';

type ArchiveGalleryProps = {
  set: ArchiveStateProps;
};

export const ArchiveGallery = ({ set }: ArchiveGalleryProps) => {
  return (
    <>
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 py-8">
        {ArchiveImages[set].map((image, index) => (
          <div key={index} className="relative">
            <span className="absolute -top-2 -right-2 z-50 bg-purple-500 text-white p-4">
              {image.rating}
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
