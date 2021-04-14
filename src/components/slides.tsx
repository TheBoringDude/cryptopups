import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const images = ['blue.png', 'white.png', 'yellow.png'];
type ImageSwitcherProps = 'prev' | 'next';

export const Slides = () => {
  const [image, setImage] = useState('blue.png');

  const imageSwitcher = (action: ImageSwitcherProps) => {
    let index: number = images.indexOf(image);
    const length = images.length;

    if (action == 'prev') {
      index -= 1;
      if (index < 0) {
        setImage(images[length - 1]);
      } else {
        setImage(images[index]);
      }
    }
    if (action == 'next') {
      index += 1;
      if (index == length) {
        setImage(images[0]);
      } else {
        setImage(images[index]);
      }
    }
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       imageSwitcher(image);
  //     }, 5000);
  //   }, [image]);

  return (
    <div className="relative">
      {/* right button */}
      <button
        onClick={() => imageSwitcher('prev')}
        className="absolute text-white text-xl top-1/2 left-0 p-2 hover:bg-gray-500 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {/* left button */}
      <button
        onClick={() => imageSwitcher('next')}
        className="absolute text-white text-xl top-1/2 right-0 p-2 hover:bg-gray-500 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <Image
        src={`/images/featured/${image}`}
        height={500}
        width={500}
        className="z-10 transform ease-in-out duration-500"
      />
    </div>
  );
};
