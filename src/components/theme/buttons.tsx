/*
  ThemeButton Wrapper to apply the theme from the coontext.
*/

import { ButtonHTMLAttributes, ReactNode } from 'react';

import { usePupsColor } from '@lib/theme';
import { LinkButton, LinkButtonProps } from '@components/LinkButton';

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const ThemeButton = (props: ThemeButtonProps) => {
  const pupmode = usePupsColor();

  return (
    <button
      {...props}
      className={`${pupmode.button.base} ${pupmode.button.hover} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export const ThemeLinkButton = ({ href, className, children }: LinkButtonProps) => {
  const pupmode = usePupsColor();

  return (
    <LinkButton
      href={href}
      className={`${pupmode.button.base} ${pupmode.button.hover} ${className}`}
    >
      {children}
    </LinkButton>
  );
};
