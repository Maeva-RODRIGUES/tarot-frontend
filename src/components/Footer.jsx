// Footer.jsx

import React from 'react';
import NavbarFooter from './NavbarFooter';
import BannerFooter from './BannerFooter';
import PropTypes from 'prop-types';
import footerLogo from '../../src/assets/img/logo-minimaliste.png'; // Logo pour la navbarfooter

function Footer({ bannerSrc, bannerAlt, bannerHeight = '100px' }) {
  return (
    <footer style={{ margin: 0, padding: 0, marginTop: '200px'}}>
      <BannerFooter src={bannerSrc} alt={bannerAlt} height={bannerHeight} />
      <NavbarFooter logo={footerLogo} />
    </footer>
  );
}


Footer.propTypes = {
  bannerSrc: PropTypes.string.isRequired,
  bannerAlt: PropTypes.string.isRequired,
  bannerHeight: PropTypes.string,
};

export default Footer;
