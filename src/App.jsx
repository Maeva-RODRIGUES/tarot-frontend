/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-undef */
// App.jsx

import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage.jsx";
import LoveTarotPage from "./pages/LoveTarotPage.jsx";
import LegalMentionsPage from "./pages/LegalMentionsPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import AboutPage from "./pages/AboutPage.jsx"; // Importer AboutPage
import ChakraProviderWrapper from "./ChakraProviderWrapper";
import { PopupProvider } from "./components/context/PopupContext"; // Importation du PopupProvider
import AppointmentPopup from "./components/AppointmentPopup.jsx"; // Importation du composant AppointmentPopup
import LoginPopup from "./components/LoginPopup"; // Importer LoginPopup
import SignupPopup from "./components/SignupPopup"; // Importer SignupPopup
import DashboardUserPage from "./pages/DashboardUserPage";
import "./styles/index.css";

function App() {
  return (
    <ChakraProviderWrapper>
      <PopupProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/love" element={<LoveTarotPage />} />
          <Route path="/legal-mentions" element={<LegalMentionsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/about" element={<AboutPage />} />{" "}
          <Route path="/dashboarduser" element={<DashboardUserPage />} />
          {/* Ajout de la route AboutPage */}
        </Routes>
        <AppointmentPopup /> {/* Popup de contact */}
        <LoginPopup /> {/* Popup de connexion */}
        <SignupPopup /> {/* Ajout du composant SignupPopup ici */}
      </PopupProvider>
    </ChakraProviderWrapper>
  );
}

export default App;
