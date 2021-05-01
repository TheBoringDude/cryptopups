import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeAnchorButton } from './theme/anchor';

export const BuyNowBtn = () => {
  return (
    <ThemeAnchorButton
      className="py-2 px-3 rounded-md inline-flex items-center"
      href="https://wax.atomichub.io/market?collection_name=cryptopuppie&order=desc&sort=created&symbol=WAX"
    >
      <FontAwesomeIcon className="mr-2 " icon={faCartArrowDown} />
      <span className="hidden xs:block">Buy Now</span>
    </ThemeAnchorButton>
  );
};
