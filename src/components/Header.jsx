// src/components/Header.jsx

import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Banner from "./Banner";
import navbarLogo from "../assets/img/logo-minimaliste.png";
import bannerLogo from "../assets/img/logo-transparent-blanc.png"; // Nouveau logo pour la bannière

function Header({
  bannerSrc,
  bannerAlt,
  bannerHeight = "auto",
  backgroundPosition = "center",
}) {
  return (
    <header>
      <Navbar logo={navbarLogo} />
      {bannerSrc && (
        <Banner
          src={bannerSrc}
          alt={bannerAlt}
          height={bannerHeight}
          logo={bannerLogo} // Correction du nom de la prop à 'logo'
          backgroundPosition={backgroundPosition}
        />
      )}
    </header>
  );
}

Header.propTypes = {
  bannerSrc: PropTypes.string, // Rendre optionnel
  bannerAlt: PropTypes.string, // Rendre optionnel
  bannerHeight: PropTypes.string,
  backgroundPosition: PropTypes.string,
};

export default Header;