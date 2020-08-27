import React, { useState, useEffect, createContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PRODUCTS_BY_CATEGORY_ID } from 'graphql/product';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const categoryId = 1;
  const { data: products } = useQuery(PRODUCTS_BY_CATEGORY_ID, { variables: { categoryId, limit: 10 } });

  const [productList, setProductList] = useState([{ 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] }]);

  useEffect(() => {
    if (products) {
      const data = products.ProductsByCategoryId;
      productList[categoryId] = data;
      setProductList(productList);
    }
  }, [products]);

  return <ProductContext.Provider value={[productList, setProductList]}>{children}</ProductContext.Provider>;
};
