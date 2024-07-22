// src/components/Header.jsx

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg="blue.500" p={4}>
      <Heading as="h1" size="lg" color="black">
        Mon Application
      </Heading>
    </Box>
  );
}

export default Header;