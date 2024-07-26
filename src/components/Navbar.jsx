// Navbar.jsx

import React from "react";
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
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
      {" "}
      {/* Utilisation de w="100vw" et position="fixed" */}
      <Flex align="center" maxW="1200px" mx="auto" w="100%">
        <Flex align="center">
          <Link href="#" mr={8}>
            Accueil
          </Link>
          <Link href="#" mr={8}>
            Tirages
          </Link>
          <Link href="#" mr={8}>
            À propos
          </Link>
          <Link href="#" mr={20}>
            Contact
          </Link>
        </Flex>
        <Spacer />
        <Flex align="center" fontWeight="bold">
          <Link href="#" mr={10}>
            Connexion
          </Link>
          <Link href="#" mr={2}>
            Inscription
          </Link>
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
