// NavbarFooter.jsx

import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Utilisation de Link de react-router-dom
import PropTypes from "prop-types";

function Navbar({ logo }) {
  return (
    <Box
      bg="black"
      color="white"
      fontFamily="Urbanist"
      p={2}
      w="100vw"
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
    >
      <Flex align="center" maxW="1200px" mx="auto" w="100%">
        <Flex align="center">
          <RouterLink to="/" style={{ marginRight: "20px" }}>
            {" "}
            {/* Lien vers la page d'accueil */}
            Accueil
          </RouterLink>
          <RouterLink to="/tirages" style={{ marginRight: "20px" }}>
            {" "}
            {/* Lien vers la page des tirages */}
            Tirages
          </RouterLink>
          <RouterLink to="/a-propos" style={{ marginRight: "20px" }}>
            {" "}
            {/* Lien vers la page à propos */}À propos
          </RouterLink>
          <RouterLink to="/contact" style={{ marginRight: "20px" }}>
            {" "}
            {/* Lien vers la page de contact */}
            Contact
          </RouterLink>
        </Flex>
        <Spacer />
        <Flex align="center" fontWeight="bold">
          <RouterLink to="/connexion" style={{ marginRight: "20px" }}>
            {" "}
            {/* Lien vers la page de connexion */}
            Connexion
          </RouterLink>
          <RouterLink to="/inscription" style={{ marginRight: "20px" }}>
            {" "}
            {/* Lien vers la page d'inscription */}
            Inscription
          </RouterLink>
          <Box as="img" src={logo} alt="Logo" height="70px" />
        </Flex>
      </Flex>
    </Box>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Navbar;
