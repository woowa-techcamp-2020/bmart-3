import React, { useState, useEffect, createContext } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { PRODUCTS_BY_CATEGORY_ID } from 'graphql/product';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [categoryId, setCategoryId] = useState(1);
  const [getProducts, { loading: loadingProducts, data: products, error: errorProducts }] = useLazyQuery(
    PRODUCTS_BY_CATEGORY_ID
  );

  const [productList, setProductList] = useState([{ 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] }]);

  useEffect(() => {
    if (products) {
      const data = products.ProductsByCategoryId;
      productList[categoryId] = data;
      setProductList(productList);
      if (categoryId < 9) {
        setCategoryId(categoryId + 1);
      }
    }
  }, [products]);

  return (
    <ProductContext.Provider value={[productList, getProducts, categoryId, loadingProducts, errorProducts]}>
      {children}
    </ProductContext.Provider>
  );
};
