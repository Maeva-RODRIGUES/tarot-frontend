// useTarotDeck.jsx (hook)

import { useState } from "react";
import backImage from '../../src/assets/img/backlove.png'; // Image du verso

const rectoColors = [
  '#FF6347', // Tomate
  '#4682B4', // Bleu acier
  '#32CD32', // Vert lime
  '#FFD700', // Or
  '#FF4500', // Orange rouge
  '#6A5ACD', // Bleu ardoise
  '#8A2BE2', // Bleu violet
  '#FF1493', // Rose profond
  '#00FFFF', // Aqua
  '#FFDAB9', // Pêche
  '#FF69B4', // Rose chaud
  '#8B4513', // Chêne
  '#D2691E', // Chocolat
  '#5F9EA0', // Cadet bleu
  '#FF8C00', // Orange foncé
  '#C71585', // Violet clair
  '#20B2AA', // Turquoise foncé
  '#800080', // Violet
  '#00FF7F', // Vert printemps
  '#B22222', // Rouge brique
  '#4B0082', // Indigo
  '#FF00FF', // Magenta
];

const useTarotDeck = () => {
  const [cards, setCards] = useState(rectoColors);

  const shuffleCards = () => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5);
      setCards(shuffled);
  };

  return { cards, shuffleCards, backImage };
};


export default useTarotDeck;
