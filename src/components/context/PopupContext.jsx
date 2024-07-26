// PopupContext.jsx

import React, { createContext, useState, useContext } from 'react';

// Crée le contexte pour la popup
const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}
