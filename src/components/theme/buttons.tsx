/*
  ThemeButton Wrapper to apply the theme from the coontext.
*/

import { ButtonHTMLAttributes, ReactNode } from 'react';

import { SlideColorsContext, usePupsTheme } from '@lib/theme';

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const ThemeButton = (props: ThemeButtonProps) => {
  const { pupmode } = usePupsTheme();

  return (
    <button
      {...props}
      className={`${SlideColorsContext[pupmode]?.button.base} ${SlideColorsContext[pupmode]?.button.hover} ${props.className}`}
    >
      {props.children}
    </button>
  );
};
