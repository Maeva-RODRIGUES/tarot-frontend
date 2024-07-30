// AuthContext.jsx

import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // ou votre logique d'authentification initiale
  const navigate = useNavigate();

  const logout = () => {
    // Logique pour déconnecter l'utilisateur, comme la suppression du token d'authentification
    setIsAuthenticated(false); // Met à jour l'état d'authentification
    navigate("/login"); // Redirige l'utilisateur vers la page de connexion
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
