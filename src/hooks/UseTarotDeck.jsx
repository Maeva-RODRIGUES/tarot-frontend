// UseTarotDeck.jsx (hook)
import { useState } from "react";

const useTarotDeck = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [cards, setCards] = useState(
    Array(22).fill("/src/assets/img/decklove.PNG"),
  );

  const selectCard = (card) => {
    setSelectedCards([...selectedCards, card]);
  };

  const shuffleCards = () => {
    console.log("Shuffling cards...");
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    console.log("After shuffle:", shuffled);
  };

  return { selectedCards, selectCard, cards, shuffleCards };
};

export default useTarotDeck;
