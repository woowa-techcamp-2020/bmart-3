import React, { useState, createContext, useEffect } from 'react';
import { RECOMMEND_INTERVAL_TIME } from 'component/share/constant';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_TIMESALE_ITEMS } from 'graphql/product';

export const RecommendContext = createContext();

export const RecommendContextProvider = ({ children }) => {
  const [getTimesaleItems, { loading, data: items }] = useLazyQuery(GET_TIMESALE_ITEMS);
  const [recommendList, setRecommendList] = useState([]);

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((selected + 1) % 4);
    }, RECOMMEND_INTERVAL_TIME);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (items) {
      const data = items.GetTimeSaleItems.map((item, idx) => ({
        idx: idx + 1,
        id: item.id,
        name: item.name,
        img_url: item.img_url,
        liked: item.liked,
        price: item.price,
        discount_percent: item.discount_percent,
      }));
      setRecommendList(data);
    }
  }, [items]);

  return (
    <RecommendContext.Provider value={[recommendList, setRecommendList, selected, setSelected, getTimesaleItems]}>
      {children}
    </RecommendContext.Provider>
  );
};
