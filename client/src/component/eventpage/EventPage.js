import React, { useState, useEffect } from 'react';
import Header from 'component/share/Header';
import ProductList from 'component/share/ProductList';
import { GET_NEW_RELEASE, GET_POPULAR_ITEMS, GET_RAND_ITEMS, GET_TIMESALE_ITEMS } from 'graphql/product';
import Advertise from 'component/share/Advertise';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import LoadingIcon from 'component/share/LoadingIcon';

const queryList = {
  what_to_eat: GET_RAND_ITEMS,
  foryou: GET_RAND_ITEMS,
  new_release: GET_NEW_RELEASE,
  popular: GET_POPULAR_ITEMS,
  recommend: GET_TIMESALE_ITEMS,
};

function EventPage(props) {
  const splitUrl = window.location.href.split('/');
  const eventType = splitUrl[splitUrl.length - 1];
  const [arrayKey, setArrayKey] = useState('null');
  const limit = 40;

  //--------------------스타일드 컴포넌트 구현 영역
  const Article = styled.article``;

  const ProductSection = styled.section`
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  `;

  // -------------------- hook 선언 영역

  // -------------------- 백엔드 데이터 요청 영역
  const { loading, error, data: products } = useQuery(queryList[eventType], {
    variables: { limit },
  });

  // -------------------- 생명주기 함수(useEffect) 영역

  useEffect(() => {
    for (let key in products) {
      //   arrayKey = key;
      setArrayKey(key);
    }
  }, [products]);

  // 렌더링 영역
  return (
    <>
      <Header />
      <Article>
        <Advertise />
        <ProductSection>
          {arrayKey !== 'null' && !loading ? <ProductList productItems={products[arrayKey]} /> : <LoadingIcon />}
        </ProductSection>
      </Article>
    </>
  );
}

export default EventPage;
