// src/components/Header.jsx

import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import PropTypes from 'prop-types';
import navbarLogo from '../../src/assets/img/logo-minimaliste.png';
import bannerLogo from '../../src/assets/img/logo-transparent-blanc.png'; // Nouveau logo pour la bannière



function Header({ bannerSrc, bannerAlt, bannerHeight = 'auto' }) { // Ajout de bannerHeight ici
  return (
    <header>
       <Navbar logo={navbarLogo} />
       <Banner src={bannerSrc} alt={bannerAlt} height={bannerHeight} logow={bannerLogo} /> {/* Utilisation de bannerLogo ici */}
    </header>
  );
}

Header.propTypes = {
  bannerSrc: PropTypes.string.isRequired,
  bannerAlt: PropTypes.string.isRequired,
  bannerHeight: PropTypes.string, // Ajout de la prop bannerHeight
};

export default Header;
