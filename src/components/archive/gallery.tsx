import Image from 'next/image';

import { ArchiveImages, ArchiveStateProps } from '@lib/archive';

type ArchiveGalleryProps = {
  set: ArchiveStateProps;
};

export const ArchiveGallery = ({ set }: ArchiveGalleryProps) => {
  setTimeout(() => {
    return null;
  }, 2000);

  return (
    <>
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 py-8">
        {ArchiveImages[set].map((image, index) => (
          <div key={index}>
            <Image
              className="rounded-xl"
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
