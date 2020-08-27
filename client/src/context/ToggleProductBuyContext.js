import React, { useState, createContext } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
export const ToggleProductBuyContext = createContext();

export const ToggleProductBuyProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  return (
    <ToggleProductBuyContext.Provider value={[selected, setSelected, cartItem, setCartItem]}>
      {children}
    </ToggleProductBuyContext.Provider>
  );
};
