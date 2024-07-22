//NavbarFooter.jsx

import React from 'react';
import { Box, Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavbarFooter({ logo }) {
  return (
    <Box bg="black" color="white" fontFamily="Urbanist" p={2} w="100vw" position="relative" bottom="0" left="0" zIndex="1000" m={0}>
      <Flex align="center" maxW="1200px" mx="auto" w="100%">
        <Flex align="center">
        <Link to="/" style={{ marginRight: '8px' }}>Accueil</Link>
        <Link to="/tirages" style={{ marginRight: '8px' }}>Tirages</Link>
          <Link to="/a-propos" style={{ marginRight: '8px' }}>À propos</Link>
          <Link to="/contact" style={{ marginRight: '8px' }}>Contact</Link>
          <Link to="/mentions-legales" style={{ marginRight: '8px' }}>Mentions légales</Link>
          <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
        </Flex>
        <Flex align="center" ml="auto">
          <Text mr={2}>© 2024</Text>
          <Box as="img" src={logo} alt="Logo" height="70px" />
        </Flex>
      </Flex>
    </Box>
  );
}

NavbarFooter.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default NavbarFooter;
