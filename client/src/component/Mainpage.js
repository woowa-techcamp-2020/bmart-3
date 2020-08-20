import React, { useContext } from 'react';
import styled from 'styled-components';
import ScrollTab from 'component/share/EventScrollTab';
import Product from 'component/share/Product';
import Header from 'component/share/Header';
import Banner from 'component/mainpage/Banner';
import Category from 'component/mainpage/Category';
import Recommend from 'component/mainpage/Recommend';
import { CategoryProvider, CategoryContext } from 'context/CategoryContext';
import { EventScrollContext, EventScrollProvider } from 'context/EventScrollContext';
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
        <Product category={item.title} key={idx} />
      ))}
    </>
  );
}

function Mainpage() {
  return (
    <>
      <Header hasSearchBar />
      <Banner />
      <CategoryProvider>
        <Category />
      </CategoryProvider>
      <Article>
        <EventScrollProvider>
          <ScrollTab />
        </EventScrollProvider>
        <RecommendSection>
          <Recommend />
        </RecommendSection>
        <CategoryProvider>
          <ProductSection>{/* <MapProductList /> */}</ProductSection>
        </CategoryProvider>
        <AdvertiseSection>광고</AdvertiseSection>
      </Article>
    </>
  );
}

export default Mainpage;
