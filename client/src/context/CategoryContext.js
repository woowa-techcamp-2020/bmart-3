import React, { useState, useEffect, createContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CATEGORIES_PARENT } from 'graphql/category';
import { IMG_URL } from 'component/share/constant';

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const { loading: loadingCategories, error: errorCategories, data: categories, refetch: refetchCategories } = useQuery(
    CATEGORIES_PARENT
  );

  const [title, setTitle] = useState([]);

  useEffect(() => {
    if (categories) {
      const title = categories.CategoriesParent.map((category, idx) => ({
        title: category.name,
        src: `${IMG_URL}/category/${category.id}.png`,
      }));
      title.push({ title: '더보기', src: `${IMG_URL}/more.png` });
      setTitle(title);
    }
  }, [categories]);
  return <CategoryContext.Provider value={[title, setTitle]}>{props.children}</CategoryContext.Provider>;
};
