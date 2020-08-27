import React, { useState, createContext } from 'react';

export const ToggleProductBuyContext = createContext();

export const ToggleProductBuyProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);

  return (
    <ToggleProductBuyContext.Provider value={[selected, setSelected]}>{children}</ToggleProductBuyContext.Provider>
  );
};
