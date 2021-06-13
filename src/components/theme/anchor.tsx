import { THEME_ANCHOR, THEME_BUTTON } from '@lib/style';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const ThemeAnchorButton = (props: AnchorButtonProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      {...props}
      className={`${props.className} ${THEME_BUTTON()}`}
    >
      {props.children}
    </a>
  );
};

const ThemeAnchorText = (props: AnchorButtonProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      {...props}
      className={`${props.className} ${THEME_ANCHOR()}`}
    >
      {props.children}
    </a>
  );
};

export { ThemeAnchorButton, ThemeAnchorText };
