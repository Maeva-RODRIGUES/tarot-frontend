// TarotDeck.jsx

import { useState } from "react";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";
import TarotCard from "./TarotCard";
import useTarotDeck from "../hooks/UseTarotDeck";

function TarotDeck() {
  const { cards, selectCard, shuffleCards } = useTarotDeck();
  const [animateProps, setAnimateProps] = useState(
    Array(cards.length).fill({ x: 0, y: 0, rotate: 0 }),
  );
  const [buttonText, setButtonText] = useState("Mélangez");

  const handleShuffle = () => {
    shuffleCards();
    const newAnimateProps = cards.map(() => ({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      rotate: Math.random() * 360 - 180,
    }));
    setAnimateProps(newAnimateProps);
    setTimeout(() => {
      setAnimateProps(Array(cards.length).fill({ x: 0, y: 0, rotate: 0 }));
      setButtonText("Coupez");
    }, 1000); // Durée de l'animation avant de revenir à l'état initial
  };

  const handleCut = () => {
    // Étape 1 : Superposer toutes les cartes en un seul tas
    const stackProps = cards.map(() => ({
      x: 0,
      y: 0,
      rotate: 0,
    }));
    setAnimateProps(stackProps);

    setTimeout(() => {
      // Étape 2 : Diviser le tas en deux
      const half = Math.ceil(cards.length / 2);
      const splitProps = cards.map((_, index) => ({
        x: index < half ? -150 : 150,
        y: 0,
        rotate: 0,
      }));
      setAnimateProps(splitProps);

      setTimeout(() => {
        // Étape 3 : Revenir à l'état initial
        setAnimateProps(Array(cards.length).fill({ x: 0, y: 0, rotate: 0 }));
        setButtonText("Mélangez");
      }, 1000); // Durée de l'animation de division
    }, 1000); // Durée de l'animation de superposition
  };

  const handleClick = () => {
    if (buttonText === "Mélangez") {
      handleShuffle();
    } else {
      handleCut();
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <SimpleGrid columns={[2, null, 11]} spacingX="2px" spacingY="10px">
        {cards.map((image, index) => (
          <Box key={index} onClick={() => selectCard(index)}>
            <TarotCard
              image={image}
              height="150px"
              width="100px"
              animateProps={animateProps[index]}
            />
          </Box>
        ))}
      </SimpleGrid>
      <Button
        mt={10}
        bg="#191970"
        color="white"
        size="lg"
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </Box>
  );
}

export default TarotDeck;
