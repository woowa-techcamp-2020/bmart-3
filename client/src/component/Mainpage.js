import React, { useContext } from 'react';
import styled from 'styled-components';
import ScrollTab from 'component/share/ScrollTab';
import Product from 'component/share/Product';
import Header from 'component/share/Header';
import Banner from 'component/mainpage/Banner';
import Category from 'component/mainpage/Category';
import Recommend from 'component/mainpage/Recommend';
import { CategoryProvider, CategoryContext } from 'context/CategoryContext';

const Article = styled.article``;

const Section = styled.section`
  padding: 15px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
`;

const RecommendSection = styled(Section)``;

const AdvertiseSection = styled(Section)``;

const ProductSection = styled(Section)``;

function Mainpage() {
  return (
    <CategoryProvider>
      <Header hasSearchBar />
      <Banner />
      <Category />
      <Article>
        <ScrollTab />
        <RecommendSection>
          <Recommend />
        </RecommendSection>
        <ProductSection>
          <MapProductList />
        </ProductSection>
        <AdvertiseSection>광고</AdvertiseSection>
      </Article>
    </CategoryProvider>
  );
}

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

export default Mainpage;
