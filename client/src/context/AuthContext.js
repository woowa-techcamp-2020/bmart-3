import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ id: null, name: null, googleId: null });

  return <AuthContext.Provider value={[userInfo, setUserInfo]}>{children}</AuthContext.Provider>;
};
