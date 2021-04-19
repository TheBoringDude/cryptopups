/*
  ThemeButton Wrapper to apply the theme from the coontext.
*/

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import { SlideColorsContext, usePupsTheme } from '@lib/theme';
import { LinkButton, LinkButtonProps } from '@components/LinkButton';

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

export const ThemeLinkButton = ({ href, className, children }: LinkButtonProps) => {
  const { pupmode } = usePupsTheme();

  return (
    <LinkButton
      href={href}
      className={`${SlideColorsContext[pupmode]?.button.base} ${SlideColorsContext[pupmode]?.button.hover} ${className}`}
    >
      {children}
    </LinkButton>
  );
};
