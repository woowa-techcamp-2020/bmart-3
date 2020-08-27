import React, { useState, createContext } from 'react';

export const ProductScrollContext = createContext();

export const ProductScrollProvider = ({ children }) => {
  const [curVal, setCurVal] = useState(0);
  return <ProductScrollContext.Provider value={[curVal, setCurVal]}>{children}</ProductScrollContext.Provider>;
};
