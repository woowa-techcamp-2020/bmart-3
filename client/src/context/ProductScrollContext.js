import React, { useState, createContext } from 'react';

export const ProductScrollContext = createContext();

export const ProductScrollProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  return <ProductScrollContext.Provider value={[value, setValue]}>{children}</ProductScrollContext.Provider>;
};
