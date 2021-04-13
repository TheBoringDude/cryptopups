import { usePupsColor, usePupsTheme } from '@lib/theme';
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const ThemeButton = (props: ThemeButtonProps) => {
  const { pupmode } = usePupsTheme();
  const pupColor = usePupsColor(pupmode);

  return (
    <button
      {...props}
      className={`${pupColor.button.base} ${pupColor.button.hover} ${props.className}`}
    >
      {props.children}
    </button>
  );
};
