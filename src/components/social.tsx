import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePupsColor } from '@lib/theme';
import { socialIcons } from 'utils/socialMedia';
import { ThemeAnchorText } from './theme/anchor';

export const SocialSection = () => {
  const pupmode = usePupsColor();

  return (
    <section className="bg-gray-800 py-8 text-center">
      <h3 className="text-2xl text-gray-100 mb-3">visit us at our social media pages</h3>
      <ul className="inline-flex items-center justify-center">
        {socialIcons.map((social, index) => (
          <li key={index} className="mx-1">
            <ThemeAnchorText className="group text-4xl" href={social.link}>
              <FontAwesomeIcon
                icon={social.icon}
                className="transform group-hover:scale-110 duration-500"
              />
            </ThemeAnchorText>
          </li>
        ))}
      </ul>
    </section>
  );
};
