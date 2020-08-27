import React from 'react';
import styled from 'styled-components';
import EventScrollTab from 'component/share/EventScrollTab';
import ProductScrollTab from 'component/share/ProductScrollTab';
import Header from 'component/share/Header';
import Banner from 'component/mainpage/Banner';
import Category from 'component/mainpage/Category';
import MapProductList from 'component/mainpage/MapProductList';
import { EventScrollProvider } from 'context/EventScrollContext';
import { ProductScrollProvider } from 'context/ProductScrollContext';
import { RecommendContextProvider } from 'context/RecommendContext';

const Article = styled.article``;

const Section = styled.section`
  padding: 15px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
`;

const AdvertiseSection = styled(Section)``;

const ProductSection = styled(Section)``;

function Mainpage() {
  return (
    <>
      {/* 헤더 */}
      <Header hasSearchBar hasHambergerIcon />
      {/* 배너 */}
      <Banner />
      {/* 카테고리 */}
      <Category />

      <Article>
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
