import React, { useState, useEffect, createContext } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { CATEGORIES_PARENT } from 'graphql/category';
import { IMG_URL } from 'component/share/constant';

export const CategoryContext = createContext();
export const showMoreId = 9999;
export const CategoryProvider = (props) => {
  const [getCategoryList, { data: categories }] = useLazyQuery(CATEGORIES_PARENT);
  // const [getCategoryParentChild, {data: categoryParentChild}] = useLazyQuery(CATEGORIES_PARENT_CHILD);
  /// 투두 카테고리 패런트, 차일드 계층구조인 녀석 갖고오기 GQL 만들기

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    if (categories) {
      const categoryList = categories.CategoriesParent.map(({ id, name, categoriesChild }, idx) => ({
        id,
        name,
        src: `${IMG_URL}/category/${id}.png`,
        categoriesChild,
      }));
      categoryList.push({ id: showMoreId, name: '더보기', src: `${IMG_URL}/more.png`, categoriesChild: null });
      setCategoryList(categoryList);
    }
  }, [categories]);
  return <CategoryContext.Provider value={[categoryList, getCategoryList]}>{props.children}</CategoryContext.Provider>;
};
