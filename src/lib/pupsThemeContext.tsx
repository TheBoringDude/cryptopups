/*
  ContextWrapper for the theme for pups
  
    Default PupsTheme: `rose`
*/

import { createContext, ReactNode, useEffect, useState } from 'react';

type PupsThemeContextProps = { children: ReactNode };
type PupsThemeModeContext = {
  pupmode: string;
  theme: string;
  togglePupMode: (mode: string) => void;
  toggleTheme: () => void;
};

export const PupsThemeContext = createContext<PupsThemeModeContext>({
  pupmode: 'rose',
  theme: 'dark',
  togglePupMode: null,
  toggleTheme: null
});

const getInitTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    if (userMedia.matches) {
      return 'light';
    }
  }

  return 'dark';
};

const setClassTHeme = (t: string) => {
  const root = window.document.documentElement;
  root.classList.remove(t === 'dark' ? 'light' : 'dark');
  root.classList.add(t);
  window.localStorage.setItem('theme', t);
};

const PupsProvider = ({ children }: PupsThemeContextProps) => {
  const [pupmode, setPupmode] = useState('rose');
  const [theme, setTheme] = useState(getInitTheme());

  useEffect(() => {
    const mode = window.localStorage.getItem('pupmode');
    setPupmode(mode ? mode : 'rose');
    setClassTHeme(theme);
  }, []);

  const toggle = (mode: string) => {
    setPupmode(mode);
    window.localStorage.setItem('pupmode', mode);
  };
  const toggleTheme = () => {
    const isDark = theme === 'dark';
    const t = isDark ? 'light' : 'dark';

    setClassTHeme(t);
    setTheme(t);
  };

  return (
    <PupsThemeContext.Provider
      value={{
        pupmode: pupmode,
        theme: theme,
        togglePupMode: toggle,
        toggleTheme: toggleTheme
      }}
    >
      {children}
    </PupsThemeContext.Provider>
  );
};

export default PupsProvider;
