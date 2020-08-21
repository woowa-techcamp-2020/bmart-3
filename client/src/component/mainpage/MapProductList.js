import React, { useContext } from 'react';
import { CategoryContext } from 'context/CategoryContext';
import Product from 'component/share/Product';
import { FetchingContext } from 'context/FetchingContext';

const MapProductList = ({ end }) => {
  const [categoryList] = useContext(CategoryContext);
  const [fetching, setFetching] = useContext(FetchingContext);
  setFetching(false);

  return (
    <>
      {categoryList.slice(0, end).map((item, idx) => (
        <Product category={item} key={`mainpage-product-${idx}`} />
      ))}
    </>
  );
};

export default MapProductList;
