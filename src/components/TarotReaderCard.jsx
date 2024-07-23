// TarotReaderCard.jsx

import React from 'react';
import { Box, Heading, Flex, Image, Text, Button } from '@chakra-ui/react';

function Cartomancienne() {
  return (
    <Box mt={8} textAlign="center">
      <Heading as="h3" mb={20}>Notre cartomancienne</Heading>
      <Box 
        p={4} 
        borderWidth="1px" 
        borderRadius="lg" 
        overflow="hidden" 
        borderColor="teal.500" // Couleur de la bordure
        maxWidth="700px" // Limite la largeur de la Box
        mx="auto" // Centre la Box horizontalement
      >
        <Flex align="center">
          <Image src="/src/assets/img/cartomancienne.jpg" alt="Cartomancienne" boxSize="100px" borderRadius="full" mr={8} />
          <Box>
            <Heading as="h4" size="md" mb={6}>Eva Capri</Heading>
            <Text mb={8} whiteSpace="normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Flex justify="center">
              <Button bg="#191970" color="white" _hover={{ bg: "#00008B" }}>Prendre RDV</Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Cartomancienne;
