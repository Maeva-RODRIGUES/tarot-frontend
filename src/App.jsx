// App.jsx

import React from 'react'; // Importation de React pour créer des composants
import ChakraProviderWrapper from './ChakraProviderWrapper'; // Importation de ChakraProviderWrapper
import Homepage from './pages/HomePage';
import './styles/index.css';

function App() {
  return (
    <ChakraProviderWrapper>
      <Homepage />
    </ChakraProviderWrapper>
  );
}

export default App;
