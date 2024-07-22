//HomePage.jsx

import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Header from '../components/Header.jsx';

function Homepage() {
    return (
      <Box>
        <Header 
        bannerSrc="../../src/assets/img/backgroungtexture.jpg" 
        bannerAlt="Bannière d'accueil" 
        bannerHeight="300px" 
      />
        <Box p={4}>
          <Text fontSize="xl">TOUS NOS TIRAGES</Text>
        </Box>
      </Box>
    );
  }
export default Homepage;
