import { useContext } from 'react';
import { PupsThemeContext } from './pupsThemeContext';

export type PupsModeColors = 'blue' | 'green' | 'purple' | 'white' | 'yellow' | 'orange' | 'rose';
type SlideColorsProps = { color: string; button: { base: string; hover: string }; name: string };

export const SlideColorsContext = {
  blue: {
    color: 'bg-blue-500',
    text: 'text-blue-500',
    button: {
      base: 'bg-blue-500',
      hover: 'hover:bg-blue-600'
    },
    name: 'blue'
  },
  green: {
    color: 'bg-green-500',
    text: 'text-green-500',
    button: {
      base: 'bg-green-500',
      hover: 'hover:bg-green-600'
    },
    name: 'green'
  },
  purple: {
    color: 'bg-purple-500',
    text: 'text-purple-500',
    button: {
      base: 'bg-purple-500',
      hover: 'hover:bg-purple-600'
    },
    name: 'purple'
  },
  white: {
    color: 'bg-white',
    text: 'text-white',
    button: {
      base: 'text-black bg-white',
      hover: 'hover:bg-gray-100 hover:text-black'
    },
    name: 'white'
  },
  yellow: {
    color: 'bg-yellow-500',
    text: 'text-yellow-500',
    button: {
      base: 'bg-yellow-500',
      hover: 'hover:bg-yellow-600'
    },
    name: 'yellow'
  },
  orange: {
    color: 'bg-orange-500',
    text: 'text-orange-500',
    button: {
      base: 'bg-orange-500',
      hover: 'hover:bg-orange-600'
    },
    name: 'orange'
  },
  rose: {
    color: 'bg-rose-500',
    text: 'text-rose-500',
    button: {
      base: 'bg-rose-500',
      hover: 'hover:bg-rose-600'
    },
    name: 'rose'
  }
};

export const usePupsTheme = () => {
  const context = useContext(PupsThemeContext);

  if (context === undefined) {
    throw new Error('usePupsTheme must be used within a PupsProvder');
  }

  return context;
};
