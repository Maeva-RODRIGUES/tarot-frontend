// TarotCard.jsx

import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const TarotCard = ({ image, height, width, animateProps }) => (
  <MotionBox
    borderRadius="md"
    p={2}
    m="0"
    whileHover={{ scale: 1.05 }}
    animate={animateProps}
    transition={{ duration: 0.5 }}
  >
    <Image src={image} alt="Tarot Card" height={height} width={width} />
  </MotionBox>
);

export default TarotCard;
