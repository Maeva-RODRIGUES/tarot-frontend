// TarotCard.jsx

import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";


function TarotCard({ backImage, height, width, animateProps, isFlipped, onClick }) {
  return (
    <Box
      as={motion.div}
      height={height}
      width={width}
      animate={animateProps}
      onClick={onClick}
      style={{
        perspective: "1000px",
      }}
    >
      <Box
        position="relative"
        width="100%"
        height="100%"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
        }}
      >
        {/* RECTO */}
        <Box
          position="absolute"
          width="100%"
          height="100%"
          backgroundColor="red"
          style={{
            backfaceVisibility: "hidden",
          }}
        />
        {/* VERSO */}
        <Box
          position="absolute"
          width="100%"
          height="100%"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={backImage}
            alt="Back of Tarot Card"
            position="absolute"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default TarotCard;
