/*
  ThemeButton Wrapper to apply the theme from the coontext.
*/

import { ButtonHTMLAttributes, ReactNode } from 'react';

import { usePupsColor } from '@lib/theme';
import { LinkButton, LinkButtonProps } from '@components/LinkButton';

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const ThemeButton = (props: ThemeButtonProps) => {
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

const ThemeLinkButton = (props: LinkButtonProps) => {
  const pupmode = usePupsColor();

  return (
    <LinkButton
      href={props.href}
      className={`${pupmode.button.base} ${pupmode.button.hover} ${props.className}`}
    >
      {props.children}
    </LinkButton>
  );
};

export { ThemeButton, ThemeLinkButton };
