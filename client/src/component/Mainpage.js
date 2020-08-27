import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import EventScrollTab from 'component/share/EventScrollTab';
import ProductScrollTab from 'component/share/ProductScrollTab';
import Header from 'component/share/Header';
import Banner from 'component/mainpage/Banner';
import Category from 'component/mainpage/Category';
import MapProductList from 'component/mainpage/MapProductList';
import { EventScrollProvider } from 'context/EventScrollContext';
import { ProductScrollProvider } from 'context/ProductScrollContext';
import { AuthContext } from 'context/AuthContext';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { Cart, CartContainer } from 'component/share/ShareStyle';
import BuyProduct from 'component/share/BuyProduct';

const Article = styled.article`
  padding: 0;
`;

const Section = styled.section`
  padding: 15px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
`;

const AdvertiseSection = styled(Section)``;

const ProductSection = styled(Section)`
  padding: 0;
`;

function Mainpage() {
  const [userInfo, setUserInfo] = useContext(AuthContext);

  const history = useHistory();
  const bearerToken = localStorage.getItem('Bearer');
  useEffect(() => {
    if (bearerToken) {
      const { id, name, googleId } = jwt.decode(bearerToken);
      setUserInfo({ id, name, googleId });
    } else {
      history.push('/login');
    }
  }, []);
  return (
    <>
      {/* 헤더 */}
      <Header hasSearchBar />
      {/* 배너 */}
      <Banner />
      {/* 카테고리 */}
      <Category />

      <Article>
        <CartContainer>
          <Cart />
        </CartContainer>
        {/* 이벤트 스크롤 탭 */}
        <EventScrollProvider>
          <div style={{ position: 'relative' }}></div>
          <EventScrollTab />
        </EventScrollProvider>

        <ProductScrollProvider>
          <div style={{ position: 'relative' }}></div>
          <ProductScrollTab />
          {/* 제품 영역 */}
          <ProductSection>
            <MapProductList />
          </ProductSection>
        </ProductScrollProvider>
        {/* 광고영역 */}
        <AdvertiseSection>광고</AdvertiseSection>
      </Article>
    </>
  );
}

export default Mainpage;
