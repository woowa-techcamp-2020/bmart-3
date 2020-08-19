import React, { useState } from 'react';
import Header from 'component/share/Header';
import Product from 'component/share/Product';

import styled from 'styled-components';

function ParentCategory() {
  //   const [, ] = useState();

  const dummyCategoryDetails = ['자식 카테고리1', '자식 카테고리2', '자식 카테고리3'];
  const dummyProductList = ['상품1', '상품2', '상품3', '상품4', '상품5', '상품6', '상품7'];

  const Article = styled.article``;

  const ChildCategoryList = styled.div``;

  const AdvertiseSection = styled.section``;

  const ProductSection = styled.section`
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  `;

  // 헤더
  // 광고배너(짧은거)
  // 자식 카테고리 리스트
  // 이 상품 어때요?
  // 아이템 리스트
  return (
    <>
      <Header hasSearchBar />
      <Article>
        <AdvertiseSection>광고</AdvertiseSection>
        <ChildCategoryList childCategories={dummyCategoryDetails} />
        <ProductSection>
          {dummyProductList.map((item, idx) => (
            <Product category={item} key={idx} />
          ))}
        </ProductSection>
      </Article>
    </>
  );
}

export default ParentCategory;
