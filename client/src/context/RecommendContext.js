import React, { useState, createContext, useEffect } from 'react';
import { RECOMMEND_INTERVAL_TIME } from 'component/share/constant';
import { useQuery } from '@apollo/react-hooks';
import { GET_TIMESALE_ITEMS } from 'graphql/product';

export const RecommendContext = createContext();

export const RecommendContextProvider = ({ children }) => {
  const { data: items } = useQuery(GET_TIMESALE_ITEMS);

  const [recommendList, setRecommendList] = useState([
    {
      id: 1,
      name: '왕교자',
      img_url:
        'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      liked: false,
      price: 5900,
      discount_percent: 32,
    },
    {
      id: 2,
      name: '아름다운 자연',
      img_url:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      liked: false,
      price: 5900,
      discount_percent: 30,
    },
    {
      id: 3,
      name: '노을 아름다워라라라',
      img_url:
        'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2578&q=80',
      liked: true,
      price: 5900,
      discount_percent: 20,
    },
    {
      id: 4,
      name: '하얀 눈의 집',
      img_url:
        'https://images.unsplash.com/photo-1597673863457-55b714750858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      liked: false,
      price: 5900,
      discount_percent: 50,
    },
  ]);

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
    <RecommendContext.Provider value={[recommendList, setRecommendList, selected, setSelected]}>
      {children}
    </RecommendContext.Provider>
  );
};
