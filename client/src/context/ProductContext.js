import React, { useState, useEffect, createContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PRODUCTS_BY_CATEGORY_ID } from 'graphql/product';

export const ProductContext = createContext();

export const ProductProvider = ({ categoryId, children }) => {
  const {
    loading: loadingProducts,
    error: errorProducts,
    data: products,
    refetch: refetchProducts,
  } = useQuery(PRODUCTS_BY_CATEGORY_ID, { variables: { categoryId } });

  const [productList, setProductList] = useState([]);
  // const [productList, setProductList] = useState({});

  // {1:[{},{},{}]}

  useEffect(() => {
    // const arr = { categoryId: [] };

    if (products) {
      const data = products.ProductsByCategoryId.map((product, idx) => ({
        name: product.name,
        price: product.price,
        category_id: product.category_id,
        img_url: product.img_url,
      }));
      // arr[categoryId] = data;
      // setProductList(...productList, arr);
    }
  }, [productList]);

  return (
    <ProductContext.Provider value={[loadingProducts, productList, setProductList]}>{children}</ProductContext.Provider>
  );
};
