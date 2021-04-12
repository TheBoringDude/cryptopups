/*
TODO: Implement function

For now, this is just a static image.
*/

import Image from 'next/image';

export const SlideShow = () => {
  return (
    <Image
      src="/images/featured/Rainbowpups-07.png"
      className="rounded-lg"
      height={700}
      width={700}
    />
  );
};
