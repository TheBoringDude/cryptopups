import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialIcons } from '@utils/socialMedia';
import { ThemeAnchorText } from '@modules/theme/anchor';

export const SocialSection = () => {
  return (
    <section className="bg-gray-800 py-8 text-center">
      <p className="text-xl md:text-2xl text-gray-100 mb-3">visit us at our social media pages</p>
      <ul className="inline-flex items-center justify-center">
        {socialIcons.map((social, index) => (
          <li key={index} className="mx-1">
            <ThemeAnchorText
              aria-label={`CryptoPups - ${social.name}`}
              title={`CryptoPups - ${social.name}`}
              className="group text-3xl"
              href={social.link}
            >
              <FontAwesomeIcon
                icon={social.icon}
                className="transform group-hover:scale-105 duration-300"
              />
            </ThemeAnchorText>
          </li>
        ))}
      </ul>
    </section>
  );
};
