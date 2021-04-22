import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialIcons = [
  {
    name: 'facebook',
    icon: faFacebook,
    link: 'https://web.facebook.com/therealcryptopups'
  },
  {
    name: 'twitter',
    icon: faTwitter,
    link: 'https://twitter.com/apppllleee_pie'
  },
  {
    name: 'instagram',
    icon: faInstagram,
    link: 'https://www.instagram.com/apppllleee_pie/'
  }
];

const TELEGRAM_LINK = {
  icon: <FontAwesomeIcon icon={faTelegram} />,
  link: 'https://t.me/joinchat/iAZB3AHKxYs5ODY1'
};

export { socialIcons, TELEGRAM_LINK };
