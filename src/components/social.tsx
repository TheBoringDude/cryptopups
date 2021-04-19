import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePupsColor } from '@lib/theme';

const socialLinks = [
  {
    name: 'facebook',
    icon: faFacebook,
    href: ''
  },
  {
    name: 'twitter',
    icon: faTwitter,
    href: ''
  },
  {
    name: 'instagram',
    icon: faInstagram,
    href: ''
  }
];

export const SocialSection = () => {
  const pupmode = usePupsColor();

  return (
    <section className="bg-gray-800 py-8 text-center">
      <h3 className="text-2xl text-gray-100 mb-3">visit us at our social media pages</h3>
      <ul className="inline-flex items-center justify-center">
        {socialLinks.map((social, index) => (
          <li key={index} className="mx-1">
            <a className={`group text-4xl ${pupmode.text} ${pupmode.textHover}`} href={social.href}>
              <FontAwesomeIcon
                icon={social.icon}
                className="transform group-hover:scale-110 duration-500"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
