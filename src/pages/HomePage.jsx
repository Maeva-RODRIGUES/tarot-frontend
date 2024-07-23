//HomePage.jsx

import React from 'react';
import { Box, Heading, Flex, Image, Text, Button } from '@chakra-ui/react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'; 
import CardsMenu from '../components/CardsMenu.jsx';
import TestimonialsCarousel from '../components/TestimonialsCarousel.jsx';
import Cartomancienne from '../components/TarotReaderCard.jsx';

function Homepage() {
  return (
    <Box>
      <Header 
        bannerSrc="../../src/assets/img/backgroungtexture.jpg" 
        bannerAlt="Bannière d'accueil" 
        bannerHeight="300px" 
      />
      <Box p={4}>
        <Heading as="h1" mb={4}>
          TOUS NOS TIRAGES
        </Heading>
        <CardsMenu />
        <Box position="relative" textAlign="center" mt={8}>
          <Box position="absolute" top="0" left="50%" transform="translateX(-50%)" zIndex="-1">
            <Image 
              src="/src/assets/img/hand.jpg" 
              alt="Main" 
              boxSize="630px" 
              objectFit="cover" 
            />
          </Box>
          <Flex direction="column" align="center" mb={6} position="relative" zIndex="1">
            <Box mb={2} position="relative" zIndex="1">
              <Heading as="h2">VOS TÉMOIGNAGES</Heading>
            </Box>
          </Flex>
        </Box>
        <Flex justify="right" align="center" mt={4}>
          <Box w="58%">
            <TestimonialsCarousel /> {/* Ajout du composant TestimonialsCarousel ici */}
          </Box>
        </Flex>
        <Box mt={8}> {/* Ajout d'un Box pour séparer les sections */}
          <Cartomancienne /> {/* Utilisation du nouveau composant */}
        </Box>
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
