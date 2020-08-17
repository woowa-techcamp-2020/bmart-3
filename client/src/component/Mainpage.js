import React, { useState } from 'react';
import styled from 'styled-components';
import ScrollTab from 'component/share/ScrollTab';
import Product from 'component/share/Product';
import Header from 'component/share/Header';
import Banner from 'component/mainpage/Banner';
import Category from 'component/mainpage/Category';
import Example from 'component/mainpage/Example';

const Article = styled.article``;

const RecommendSection = styled.section``;

const AdvertiseSection = styled.section``;

const ProductSection = styled.section`
  padding: 0 15px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
`;

function Mainpage() {
  const [menu, setMenu] = useState(['분식야식', '과일샐러드', '밀키트']);

  return (
    <>
      <Header hasSearchBar />
      <Example />
      <Category />
      <Article>
        <ScrollTab />
        <RecommendSection>번쩍할인 등등 </RecommendSection>
        <AdvertiseSection>광고</AdvertiseSection>
        <ProductSection>
          {menu.map((item, idx) => (
            <Product category={item} key={idx} />
          ))}
        </ProductSection>
      </Article>
    </>
  );
}

export default Mainpage;
