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
  // Ajout de backgroundPosition ici
  return (
    <header>
      <Navbar logo={navbarLogo} />
      <Banner
        src={bannerSrc}
        alt={bannerAlt}
        height={bannerHeight}
        logow={bannerLogo}
        backgroundPosition={backgroundPosition}
      />{" "}
      {/* Utilisation de backgroundPosition ici */}
    </header>
  );
}

Header.propTypes = {
  bannerSrc: PropTypes.string.isRequired,
  bannerAlt: PropTypes.string.isRequired,
  bannerHeight: PropTypes.string, // Ajout de la prop bannerHeight
  backgroundPosition: PropTypes.string, // Ajout de la prop backgroundPosition
};

export default Header;
