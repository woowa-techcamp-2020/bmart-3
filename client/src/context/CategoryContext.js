import React, { useState, useEffect, createContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CATEGORIES_PARENT } from 'graphql/category';
import { IMG_URL } from 'component/share/constant';

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const { data: categories } = useQuery(CATEGORIES_PARENT);

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    if (categories) {
      const categoryList = categories.CategoriesParent.map((category, idx) => ({
        id: category.id,
        name: category.name,
        src: `${IMG_URL}/category/${category.id}.png`,
      }));
      categoryList.push({ id: 0, name: '더보기', src: `${IMG_URL}/more.png` });
      setCategoryList(categoryList);
    }
  }, [categories]);
  return <CategoryContext.Provider value={[categoryList, setCategoryList]}>{props.children}</CategoryContext.Provider>;
};

// useEffect(() => {
//   if (items) {
//     const data = items.GetTimeSaleItems.map((item, idx) => ({
//       id: idx,
//       name: item.name,
//       img_url: item.img_url,
//       liked: item.liked,
//       price: item.price,
//       discount_percent: item.discount_percent,
//     }));
//     setRecommendList(data);
//   }
// }, [items]);
