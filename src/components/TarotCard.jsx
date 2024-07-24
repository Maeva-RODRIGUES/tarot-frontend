// TarotCard.jsx

import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TarotCard = ({ frontColor, backImage, height, width, isFlipped, animateProps }) => {
  return (
      <Box
          as={motion.div}
          animate={animateProps}
          style={{ height, width, position: 'relative' }}
      >
          {isFlipped ? (
              <Box
                  height={height}
                  width={width}
                  bgColor={frontColor}
                  borderRadius="md"
              />
          ) : (
              <Box
                  height={height}
                  width={width}
                  bgImage={`url(${backImage})`}
                  bgSize="cover"
                  borderRadius="md"
              />
          )}
      </Box>
  );
};

export default TarotCard;
