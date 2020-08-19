import React, { useState, createContext } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [title, setTitle] = useState([
    { title: '과일﹒샐러드', src: 'salad' },
    { title: '정육﹒수산﹒계란', src: 'egg' },
    { title: '밀키트', src: 'mealKit' },
    { title: '우유﹒유제품', src: 'milk' },
    { title: '빵﹒시리얼﹒잼', src: 'bread' },
    { title: '분식﹒야식', src: 'chicken' },
    { title: '과자﹒초콜릿', src: 'snack' },
    { title: '아이스크림', src: 'icecream' },
    { title: '헤어﹒바디﹒세안', src: 'wash' },
    { title: '더보기', src: 'more' },
  ]);
  return <CategoryContext.Provider value={[title, setTitle]}>{props.children}</CategoryContext.Provider>;
};
