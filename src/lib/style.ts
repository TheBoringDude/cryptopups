import { usePupsColor } from '@modules/theme/theme';

const THEME_BUTTON = () => {
  const pupmode = usePupsColor();

  return `${pupmode?.button.base} ${pupmode?.button.hover} text-gray-100`;
};

const THEME_ANCHOR = () => {
  const pupmode = usePupsColor();

  return `${pupmode?.text} ${pupmode?.textHover}`;
};

export { THEME_BUTTON, THEME_ANCHOR };
