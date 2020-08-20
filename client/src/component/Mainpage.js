import React, { useContext } from 'react';
import styled from 'styled-components';
import ScrollTab from 'component/share/EventScrollTab';
import Product from 'component/share/Product';
import Header from 'component/share/Header';
import Banner from 'component/mainpage/Banner';
import Category from 'component/mainpage/Category';
import Recommend from 'component/mainpage/Recommend';
import { CategoryProvider, CategoryContext } from 'context/CategoryContext';
import { EventScrollProvider } from 'context/EventScrollContext';
import { RecommendContextProvider } from 'context/RecommendContext';

const Article = styled.article``;

const Section = styled.section`
  padding: 15px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
`;

const RecommendSection = styled(Section)``;

const AdvertiseSection = styled(Section)``;

const ProductSection = styled(Section)``;

function MapProductList() {
  const [title] = useContext(CategoryContext);
  return (
    <>
      {title.map((item, idx) => (
        <Product category={item.title} key={`productlist-${idx}`} />
      ))}
    </>
  );
}

function Mainpage() {
  return (
    <>
      {/* 헤더 */}
      <Header hasSearchBar />
      {/* 배너 */}
      <Banner />
      {/* 카테고리 */}
      <CategoryProvider>
        <Category />
      </CategoryProvider>
      <Article>
        {/* 이벤트 스크롤 탭 */}
        <EventScrollProvider>
          <ScrollTab />
        </EventScrollProvider>
        {/* 반짝할인 */}
        <RecommendContextProvider>
          <RecommendSection>
            <Recommend />
          </RecommendSection>
        </RecommendContextProvider>
        {/* 제품 영역 */}
        <CategoryProvider>
          <ProductSection>
            <MapProductList />
          </ProductSection>
        </CategoryProvider>
        {/* 광고영역 */}
        <AdvertiseSection>광고</AdvertiseSection>
      </Article>
    </>
  );
}

export default Mainpage;
