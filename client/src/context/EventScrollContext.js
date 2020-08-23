import React, { useState, createContext } from 'react';
import Recommend from 'component/mainpage/Recommend';
export const EventScrollContext = createContext();

export const EventScrollProvider = ({ children }) => {
  const [data] = useState([
    { title: '널 위한 상품' },
    {
      title: '번쩍 할인',
      component: <Recommend />,
    },
    {
      title: '지금 뭐 먹지?',
      component: <Recommend />,
    },
    {
      title: '새로 나왔어요',
    },
    {
      title: '요즘 잘 팔려요',
    },
  ]);
  const [value, setValue] = useState(0);
  return <EventScrollContext.Provider value={[data, value, setValue]}>{children}</EventScrollContext.Provider>;
};
