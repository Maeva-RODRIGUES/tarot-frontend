// CardsMenu.jsx

import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';

function ImageRow() {
  return (
    <Box as="main" p={4}>
      <Flex justify="center" align="center">
        <Image src="/src/assets/icons/cardiconlove.png" alt="Love" boxSize="400px" objectFit="cover" m={2} />
        <Image src="/src/assets/icons/cardiconwork.png" alt="Work" boxSize="400px" objectFit="cover" m={2} />
        <Image src="/src/assets/icons/cardiconspirituel.png" alt="Spirit" boxSize="400px" objectFit="cover" m={2} />
      </Flex>
    </Box>
  );
}

export default ImageRow;
