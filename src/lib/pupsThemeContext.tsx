/*
    Default PupsTheme: `rose`
*/

import { createContext, ReactNode, useEffect, useState } from 'react';

type PupsThemeContextProps = { children: ReactNode };
type PupsThemeModeContext = {
  pupmode: string;
  togglePupMode: (mode: string) => void;
};

export const PupsThemeContext = createContext<PupsThemeModeContext>({
  pupmode: 'rose',
  togglePupMode: null
});

const PupsProvider = ({ children }: PupsThemeContextProps) => {
  const [pupmode, setPupmode] = useState(null);

  useEffect(() => {
    const mode = window.localStorage.getItem('pupmode');
    if (!mode) {
      setPupmode('rose');
    }
    setPupmode(mode);
  }, []);

  const toggle = (mode: string) => {
    setPupmode(mode);
    window.localStorage.setItem('pupmode', mode);
  };

  return (
    <PupsThemeContext.Provider
      value={{
        pupmode: pupmode,
        togglePupMode: toggle
      }}
    >
      {children}
    </PupsThemeContext.Provider>
  );
};

export default PupsProvider;
