import React, { useContext, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Product from 'component/share/Product';
import { FetchingContext } from 'context/FetchingContext';
import { ProductContext } from 'context/ProductContext';
import { PRODUCTS_BY_CATEGORY_ID } from 'graphql/product';
import { useQuery } from '@apollo/react-hooks';

const rotateOne = keyframes`
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  `;
const rotateTwo = keyframes`
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  `;

const rotateThree = keyframes`
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  `;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  position: relative;

  & > div {
    margin: 10px 0;
  }
`;

const Loader = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
`;

const Inner = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const InnerOne = styled(Inner)`
  left: 0%;
  top: 0%;
  animation: ${rotateOne} 1s linear infinite;
  border-bottom: 3px solid black;
`;
const InnerTwo = styled(Inner)`
  right: 0%;
  top: 0%;
  animation: ${rotateTwo} 1s linear infinite;
  border-right: 3px solid black;
`;
const InnerThree = styled(Inner)`
  right: 0%;
  bottom: 0%;
  animation: ${rotateThree} 1s linear infinite;
  border-top: 3px solid black;
`;

const MapProductList = () => {
  const [fetching, setFetching] = useContext(FetchingContext);
  const [productList, setProductList] = useContext(ProductContext);
  const [start, setStart] = useState(1);

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

  if (error) return <div>error</div>;

  return (
    <>
      {!loading ? (
        <Product />
      ) : (
        <>
          <Product />
          <LoadingContainer>
            <Loader>
              <InnerOne />
              <InnerTwo />
              <InnerThree />
            </Loader>
            <div>데이터 불러오는 중...</div>
          </LoadingContainer>
        </>
      )}
    </>
  );
};

export default MapProductList;
