//HomePage.jsx

import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

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
        
        <Footer 
        bannerSrc="../../src/assets/img/footer-banner.jpg" 
        bannerAlt="Bannière de pied de page" 
        bannerHeight="300px" 
      />
      </Box>
    );
  }


export default Homepage;
