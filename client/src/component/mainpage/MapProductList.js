import React, { useContext, useState, useEffect } from 'react';
import Product from 'component/share/Product';
import LoadingIcon from 'component/share/LoadingIcon';
import { FetchingContext } from 'context/FetchingContext';
import { ProductContext } from 'context/ProductContext';
import { PRODUCTS_BY_CATEGORY_ID } from 'graphql/product';
import { useQuery } from '@apollo/react-hooks';

const MapProductList = () => {
  const [fetching, setFetching] = useContext(FetchingContext);
  const [productList, setProductList] = useContext(ProductContext);
  const [start, setStart] = useState(2);

  const categoryId = start;
  const { loading, error, data: products } = useQuery(PRODUCTS_BY_CATEGORY_ID, {
    variables: { categoryId },
  });

  // 스크롤 이벤트 핸들
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight * 0.5 && fetching === false) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      if (start < 9) {
        setStart(start + 1);
        setFetching(true);
      }
    }
  };

  useEffect(() => {
    if (products) {
      setFetching(false);
      productList[start] = products.ProductsByCategoryId;
      setProductList(productList);
    }
    // scroll event listener 등록
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      // scroll event listener 해제
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [products, fetching]);

  if (productList.length === 0) return <div>ㅠㅠ...데이터가 없습니다</div>;
  if (error) return <div>ㅠㅠ...데이터가 없습니다</div>;

  return (
    <>
      {!loading ? (
        <Product />
      ) : (
        <>
          <Product />
          <LoadingIcon />
        </>
      )}
    </>
  );
};

export default MapProductList;
