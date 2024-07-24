// App.jsx

import React from 'react'; // Importation de React pour créer des composants
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage.jsx';
import LoveTarotPage from './pages/LoveTarotPage.jsx';
import ChakraProviderWrapper from './ChakraProviderWrapper'; // Importation de ChakraProviderWrapper
import './styles/index.css';

function App() {
  return (
    <ChakraProviderWrapper>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/love" element={<LoveTarotPage />} />
          {/* <Route path="/tirages" component={Tirages} />
          <Route path="/a-propos" component={APropos} />
          <Route path="/contact" component={Contact} />
          <Route path="/mentions-legales" component={MentionsLegales} />
          <Route path="/politique-de-confidentialite" component={PolitiqueDeConfidentialite} /> */} 
        </Routes>
    </ChakraProviderWrapper>
  );
}

export default App;
