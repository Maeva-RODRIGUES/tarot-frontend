/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-undef */
// App.jsx

import React from "react"; // Importation de React pour créer des composants
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage.jsx";
import LoveTarotPage from "./pages/LoveTarotPage.jsx";
import LegalMentionsPage from "./pages/LegalMentionsPage.jsx"; // Assurez-vous que le chemin est correct
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import ChakraProviderWrapper from "./ChakraProviderWrapper"; // Importation de ChakraProviderWrapper
import "./styles/index.css";

function App() {
  return (
    <ChakraProviderWrapper>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/love" element={<LoveTarotPage />} />
        <Route path="/legal-mentions" element={<LegalMentionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </ChakraProviderWrapper>
  );
}

export default App;
