import React, { useState, createContext, useEffect } from 'react';
import Recommend from 'component/mainpage/Recommend';
import ProductForYou from 'component/mainpage/ProductForYou';
import WhatToEat from 'component/mainpage/WhatToEat';
import NewRelease from 'component/mainpage/NewRelease';
import PopularItems from 'component/mainpage/PopularItems';

export const EventScrollContext = createContext();

export const EventScrollProvider = ({ children }) => {
  const data = [
    { title: '널 위한 상품', component: <ProductForYou /> },
    {
      title: '번쩍 할인',
      component: <Recommend />,
    },
    {
      title: '지금 뭐 먹지?',
      component: <WhatToEat />,
    },
    {
      title: '새로 나왔어요',
      component: <NewRelease />,
    },
    {
      title: '요즘 잘 팔려요',
      component: <PopularItems />,
    },
  ];

  const [value, setValue] = useState(0);
  return <EventScrollContext.Provider value={[data, value, setValue]}>{children}</EventScrollContext.Provider>;
};
