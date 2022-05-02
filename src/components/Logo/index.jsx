import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';
import simpleLogo from '../../assets/images/simple-logo.svg';
import './logo.css';

function Logo({ simple }) {
  const srcImage = simple ? simpleLogo : logo;

  return <img className="c-logo" src={srcImage} alt="Logo da ChocolateLab" />;
}

Logo.propTypes = {
  simple: PropTypes.bool.isRequired,
};

export default Logo;
