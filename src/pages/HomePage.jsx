//HomePage.jsx

import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Header from '../components/Header';

function Homepage() {
  return (
    <Box>
      <Header />
      <Box p={4}>
        <Text fontSize="xl">Bienvenue sur la page d'accueil !</Text>
      </Box>
    </Box>
  );
}

export default Homepage;
