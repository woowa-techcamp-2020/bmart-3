import React, { createContext, useState } from 'react';

export const FetchingContext = createContext();

export const FetchingProvider = (props) => {
  const [fetching, setFetching] = useState(true);
  return <FetchingContext.Provider value={[fetching, setFetching]}>{props.children}</FetchingContext.Provider>;
};
