// HeaderDashboard.jsx 

import React from 'react';
import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

function HeaderDashboard() {
  return (
    <Box bg="white" borderBottom="1px" borderColor="customBlue" p="4"  height="100px">
      <Flex justifyContent="space-between" alignItems="left">
        <Image 
          src="/src/assets/img/logo-transparent noir.png" // Chemin vers le logo
          alt="Logo"
          height="300px"
          width="300px"
          objectFit="contain" // Assure que le logo garde ses proportions
          marginTop="-120px" // Déplace le logo vers le haut
          marginLeft="-40px" // Déplace le logo vers la gauche
        />

<Flex alignItems="left" mt="3">
          <IconButton
            icon={<span role="img" aria-label="Wave">🖐</span>}
            variant="ghost"
            color="customBlue"
            aria-label="Notifications"
            mr="2"
          />

          <IconButton
            icon={<FaUserCircle />}
            variant="ghost"
            color="customBlue"
            aria-label="User Profile"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default HeaderDashboard;
