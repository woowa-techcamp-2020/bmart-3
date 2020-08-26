import React, { useContext, useEffect } from 'react';
import Product from 'component/share/Product';
import LoadingIcon from 'component/share/LoadingIcon';
import { FetchingContext } from 'context/FetchingContext';
import { ProductContext } from 'context/ProductContext';

const MapProductList = () => {
  const [fetching, setFetching] = useContext(FetchingContext);
  const [productList, getProducts, categoryId, loadingProducts, errorProducts] = useContext(ProductContext);

  // 스크롤 이벤트 핸들
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      setFetching(true);
    }
  };

  useEffect(() => {
    if (fetching) {
      getProducts({ variables: { categoryId, limit: 10 } });
      setFetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      // scroll event listener 해제
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);
  if (productList.length === 0) return <div>ㅠㅠ...데이터가 없습니다</div>;
  if (errorProducts) return <div>ㅠㅠ...데이터가 요청에 실패했습니다</div>;

  return (
    <>
      {!loadingProducts ? (
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
