import { useContext } from 'react';
import { PupsThemeContext } from '@lib/pupsThemeContext';
import { useHasMounted } from '@lib/useHasMounted';

type PupsModeColors = 'blue' | 'green' | 'purple' | 'white' | 'yellow' | 'orange' | 'rose';

type SlidePupColorProps = {
  color: string;
  text: string;
  linkHover: string;
  textHover: string;
  button: {
    base: string;
    hover: string;
  };
  name: PupsModeColors;
  prose: string;
  eventTheme: string;
};

type SlideMap = { [key: string]: SlidePupColorProps };

const SlideColorsContext: SlideMap = {
  blue: {
    color: 'bg-blue-500',
    text: 'text-blue-500',
    linkHover: 'hover:text-blue-500',
    textHover: 'hover:text-blue-600',
    button: {
      base: 'bg-blue-500',
      hover: 'hover:bg-blue-600'
    },
    name: 'blue',
    prose: 'prose-blue',
    eventTheme: 'bg-blue-100'
  },
  green: {
    color: 'bg-green-500',
    text: 'text-green-500',
    linkHover: 'hover:text-green-500',
    textHover: 'hover:text-green-600',
    button: {
      base: 'bg-green-500',
      hover: 'hover:bg-green-600'
    },
    name: 'green',
    prose: 'prose-green',
    eventTheme: 'bg-green-100'
  },
  purple: {
    color: 'bg-purple-500',
    text: 'text-purple-500',
    linkHover: 'hover:text-purple-500',
    textHover: 'hover:text-purple-600',
    button: {
      base: 'bg-purple-500',
      hover: 'hover:bg-purple-600'
    },
    name: 'purple',
    prose: 'prose-purple',
    eventTheme: 'bg-purple-100'
  },
  yellow: {
    color: 'bg-yellow-500',
    text: 'text-yellow-500',
    linkHover: 'hover:text-yellow-500',
    textHover: 'hover:text-yellow-600',
    button: {
      base: 'bg-yellow-500',
      hover: 'hover:bg-yellow-600'
    },
    name: 'yellow',
    prose: 'prose-yellow',
    eventTheme: 'bg-yellow-100'
  },
  orange: {
    color: 'bg-orange-500',
    text: 'text-orange-500',
    linkHover: 'hover:text-orange-500',
    textHover: 'hover:text-orange-600',
    button: {
      base: 'bg-orange-500',
      hover: 'hover:bg-orange-600'
    },
    name: 'orange',
    prose: 'prose-orange',
    eventTheme: 'bg-orange-100'
  },
  rose: {
    color: 'bg-rose-500',
    text: 'text-rose-500',
    linkHover: 'hover:text-rose-500',
    textHover: 'hover:text-rose-600',
    button: {
      base: 'bg-rose-500',
      hover: 'hover:bg-rose-600'
    },
    name: 'rose',
    prose: 'prose-rose',
    eventTheme: 'bg-rose-100'
  }
};

const usePupsTheme = () => {
  const context = useContext(PupsThemeContext);

  if (context === undefined) {
    throw new Error('usePupsTheme must be used within a PupsProvder');
  }

  return context;
};

const usePupsColor = (): SlidePupColorProps => {
  const mounted = useHasMounted();
  if (!mounted) return;
  
  const { pupmode } = usePupsTheme();

  return SlideColorsContext[pupmode];
};

const useTheme = () => {
  const { theme, toggleTheme } = usePupsTheme();

  return { theme, toggleTheme };
};

export { usePupsColor, usePupsTheme, SlideColorsContext, useTheme };
export type { SlidePupColorProps };
