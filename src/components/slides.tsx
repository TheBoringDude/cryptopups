import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = ['blue.png', 'white.png', 'yellow.png'];

export const Slides = () => {
  const [image, setImage] = useState('blue.png');

  const imageSwitcher = (img: string) => {
    if (image === img) {
      let index = images.indexOf(img) + 1;

      if (index == images.length) {
        setImage(images[0]);
      } else {
        setImage(images[index]);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      imageSwitcher(image);
    }, 5000);
  }, [image]);

  return (
    <div>
      <Image src={`/images/featured/${image}`} height={500} width={500} />
    </div>
  );
};
