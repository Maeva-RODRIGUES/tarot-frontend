// AppointmentPopup.jsx

import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { usePopup } from "./context/PopupContext"; // Assure-toi que le chemin est correct

function AppointmentPopup() {
  const { isPopupOpen, closePopup } = usePopup();

  return (
    <Modal isOpen={isPopupOpen} onClose={closePopup}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>PRENEZ RDV</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="last-name" isRequired>
            <FormLabel>Nom</FormLabel>
            <Input placeholder="Votre nom" />
          </FormControl>
          <FormControl id="first-name" isRequired mt={4}>
            <FormLabel>Prénom</FormLabel>
            <Input placeholder="Votre prénom" />
          </FormControl>
          <FormControl id="email" isRequired mt={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Votre email" />
          </FormControl>
          <FormControl id="phone" isRequired mt={4}>
            <FormLabel>Téléphone</FormLabel>
            <Input placeholder="Votre téléphone" />
          </FormControl>
          <FormControl id="message" mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Votre message" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={closePopup}>
            Envoyer
          </Button>
          <Button variant="outline" onClick={closePopup}>
            Annuler
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AppointmentPopup;
