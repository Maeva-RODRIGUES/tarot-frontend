// TarotDeck.jsx

import { Box, SimpleGrid, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import TarotCard from "./TarotCard";
import useTarotDeck from "../hooks/UseTarotDeck";

function TarotDeck() {
  const { cards, shuffleCards, backImage } = useTarotDeck();
  const [animateProps, setAnimateProps] = useState(
    Array(cards.length).fill({ x: 0, y: 0, rotate: 0 }),
  );
  const [buttonText, setButtonText] = useState("Mélangez");
  const [flippedCards, setFlippedCards] = useState(
    Array(cards.length).fill(false),
  );
  const [selectedCards, setSelectedCards] = useState([]);
  const [isCutting, setIsCutting] = useState(false);
  const [canSelectCards, setCanSelectCards] = useState(false);

  const handleShuffle = () => {
    shuffleCards();
    console.log("Shuffled cards:", cards); // Debugging
    const newAnimateProps = cards.map(() => ({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      rotate: Math.random() * 360 - 180,
    }));
    setAnimateProps(newAnimateProps);
    setTimeout(() => {
      setAnimateProps(Array(cards.length).fill({ x: 0, y: 0, rotate: 0 }));
      setButtonText("Coupez");
    }, 1000);
  };

  const handleCut = () => {
    setIsCutting(true);

    // Regrouper toutes les cartes au centre
    const stackProps = cards.map(() => ({
      x: 0,
      y: 0,
      rotate: 0,
    }));
    setAnimateProps(stackProps);

    setTimeout(() => {
      // Diviser les cartes en deux paquets après les avoir regroupées
      const half = Math.ceil(cards.length / 2);
      const splitProps = cards.map((_, index) => ({
        x: index < half ? -150 : 150,
        y: 0,
        rotate: 0,
      }));
      setAnimateProps(splitProps);

      setTimeout(() => {
        // Revenir à la position initiale
        setAnimateProps(Array(cards.length).fill({ x: 0, y: 0, rotate: 0 }));
        setButtonText("Tirez 3 cartes");
        setIsCutting(false);
        setCanSelectCards(true);
      }, 1000);
    }, 1000);
  };

  const handleClick = (index) => {
    if (canSelectCards && selectedCards.length < 3 && !flippedCards[index]) {
      const newFlippedCards = [...flippedCards];
      newFlippedCards[index] = true;
      setFlippedCards(newFlippedCards);
      setSelectedCards([...selectedCards, cards[index]]);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <SimpleGrid columns={[2, null, 11]} spacingX="2px" spacingY="10px">
        {cards.map((color, index) => (
          <Box key={index} onClick={() => handleClick(index)}>
            <TarotCard
              frontColor={color} // Couleur distincte pour le recto
              backImage={backImage} // Verso commun
              height="150px"
              width="100px"
              animateProps={animateProps[index]}
              isFlipped={flippedCards[index]}
            />
          </Box>
        ))}
      </SimpleGrid>
      <Button
        mt={10}
        bg="#191970"
        color="white"
        size="lg"
        onClick={buttonText === "Mélangez" ? handleShuffle : handleCut}
      >
        {buttonText}
      </Button>
      {selectedCards.length === 3 && (
        <Box mt={10} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            VOTRE AVENIR EN DETAIL
          </Text>
          <SimpleGrid columns={3} spacing={10} mt={5}>
            {selectedCards.map((color, index) => (
              <Box key={index}>
                <TarotCard
                  backImage={backImage}
                  frontColor={color}
                  height="150px"
                  width="100px"
                  isFlipped
                />
                <Text mt={2}>Interprétation de la carte {index + 1}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}

export default TarotDeck;
