// HeaderDashboard.jsx 

import React from 'react';
import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { FaUserCircle } from 'react-icons/fa';

function HeaderDashboard() {
  return (
    <Box bg="white" borderBottom="1px" borderColor="customBlue" p="4">
      <Flex justifyContent="space-between" alignItems="center">
        {/* Remplace le texte par l'image du logo */}
        <Image 
          src="/src/assets/img/logo-transparent noir.png" // Chemin vers le logo
          alt="Logo"
          boxSize="150px" // Ajuste la taille du logo
          objectFit="contain" // Assure que le logo garde ses proportions
          marginTop="-60px" // Déplace le logo vers le haut
        />

<Flex alignItems="center">
          <IconButton
            icon={<span role="img" aria-label="Wave">🖐</span>}
            variant="ghost"
            color="customBlue"
            aria-label="Notifications"
            mr="4"
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
