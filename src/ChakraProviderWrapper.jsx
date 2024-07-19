/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
// eslint-disable-next-line prettier/prettier
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', 'gray.800')(props),
      },
    }),
  },
});

// eslint-disable-next-line prettier/prettier
function ChakraProviderWrapper({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

ChakraProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChakraProviderWrapper;
