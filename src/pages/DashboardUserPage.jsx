// DashboardUserPage.jsx

import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Link,
  VStack,
  HStack,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons"; // Importation des icônes de Chakra UI
import { FaUser, FaRegFileAlt, FaCog, FaSignOutAlt } from "react-icons/fa"; // Importation des icônes depuis react-icons
import Header from "../components/HeaderDashboard";
import Footer from "../components/Footer";
import { mockUserData } from "../utils/mockData";

function DashboardUserPage() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />

      <Flex
        as="nav"
        p="4"
        bg="customBlue" // couleur personnalisée pour la barre latérale
        color="white"
        direction="column"
        height="calc(100vh - 60px)" // Ajuster la hauteur pour prendre en compte la hauteur du header
        width="250px"
        position="fixed"
        top="100px" // Positionner la barre latérale juste en dessous du header
        left="0"
        boxShadow="md"
      >
        <VStack align="start" spacing="4" w="full">
          <Link href="/profile" _hover={{ textDecoration: 'none', color: 'blue.400' }}>
            <HStack>
              <Icon as={FaUser} />
              <Text>Mon profil</Text>
            </HStack>
          </Link>
          <Link href="/drawings" _hover={{ textDecoration: 'none', color: 'blue.400' }}>
            <HStack>
              <Icon as={FaRegFileAlt} />
              <Text>Mes tirages</Text>
            </HStack>
          </Link>
          <Link href="/settings" _hover={{ textDecoration: 'none', color: 'blue.400' }}>
            <HStack>
              <Icon as={FaCog} />
              <Text>Paramètres</Text>
            </HStack>
          </Link>

          <Spacer />

          <Link href="/logout" _hover={{ textDecoration: 'none', color: 'blue.400' }}>
            <HStack>
              <Icon as={FaSignOutAlt} />
              <Text>Déconnexion</Text>
            </HStack>
          </Link>
        </VStack>
      </Flex>

      <Box ml="250px" p="8" pt="8" flex="1"> {/* Ajuster pt="8" pour le padding-top, ou utiliser pt pour éviter de chevaucher le header */}
        <Heading mb="4">Bonjour {mockUserData.name}, bienvenue sur votre espace utilisateur !</Heading>
        <Box mb="8">
        </Box>

        {/* Nouveau encadré avec les icônes */}
        <Box
          p="4"
          borderWidth="1px"
          borderRadius="md"
          borderColor="gray.200"
          bg="white"
          boxShadow="md"
          mb="8"
          maxWidth="300px" // Réduction de la largeur de l'encadré
        >
          <Heading size="md" mb="4">Activité Récente :</Heading>
          <HStack spacing="4" mb="4">
            <CalendarIcon boxSize="6" color="customBlue" />
            <Text fontSize="lg">
              Date : {mockUserData.recentActivity}
            </Text>
          </HStack>
          <HStack spacing="4">
            <TimeIcon boxSize="6" color="customBlue" />
            <Text fontSize="lg">
              Heure : {mockUserData.recentTime}
            </Text>
          </HStack>
        </Box>

        <Flex direction="column" alignItems="center" mb="8">  {/* Centrer la section */}
          <Heading size="lg" mb="16">VOTRE DERNIER TIRAGE</Heading>
          <Flex mb="7" justifyContent="center">
            {mockUserData.lastDraw.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Tarot Card ${index + 1}`}
                width="120px" // Modifier la largeur des images
                height="180px" // Modifier la hauteur des images
                borderRadius="10px" // Ajouter un border radius pour arrondir les coins
                mx="7" // Ajouter un espacement horizontal entre les images
                transform={index === 0 ? "rotate(-10deg)" : index === mockUserData.lastDraw.length - 1 ? "rotate(10deg)" : "none"} // Rotation pour la première et la dernière image
                mt={index === Math.floor(mockUserData.lastDraw.length / 2) ? "-10px" : "0"} // Soulever légèrement l'image du milieu
              />
            ))}
          </Flex>
          <Button mt="4" bg="customBlue" color="white">
            Voir plus
          </Button>
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
}

export default DashboardUserPage;


