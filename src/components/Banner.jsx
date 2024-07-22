//Banner.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image } from '@chakra-ui/react';

function Banner({ src, alt, height = '300px', logow }) {
    return (
      <Box 
        position="relative" 
        mt="60px" 
        width="100%" 
        height={height} 
        backgroundImage={`url(${src})`} 
        backgroundSize="cover" 
        backgroundPosition="center"
      >
        <Box 
          position="absolute" 
          top="50%" 
          left="50%" 
          transform="translate(-50%, -50%)"
        >
          <Image src={logow} alt="Logo" height="500px" />
        </Box>
      </Box>
    );
  }

Banner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  logow: PropTypes.string.isRequired,
};

export default Banner;
