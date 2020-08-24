import React, { useState, useEffect, createContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PRODUCTS_BY_CATEGORY_ID } from 'graphql/product';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const categoryId = 1;
  const { loading, data: products } = useQuery(PRODUCTS_BY_CATEGORY_ID, { variables: { categoryId } });

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (products) {
      productList[categoryId] = data;
      setProductList(productList);
    }
  }, [products]);

  return <ProductContext.Provider value={[productList, setProductList]}>{children}</ProductContext.Provider>;
};
