import React, { useState, useEffect } from 'react';
import Header from 'component/share/Header';
import ProductList from 'component/share/ProductList';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { PRODUCTS_BY_CATEGORY_ID } from 'graphql/product';

//--------------------스타일드 컴포넌트 구현 영역
const Article = styled.article``;

const ListControlBar = styled.div``;

const ProductSection = styled.section`
  padding: 0 15px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
`;

// intersection Observer
// ------------------graphql 영역

  // 자식 카테고리 제품 데이터 요청
  const { loading: loadingProducts, error: errorProducts, data: products, refetch: refetchProducts } = useQuery(
    //아래 쿼리 자식 카테고리도 같은 이름으로 써야 하니까 수정해야 할듯
    PRODUCTS_BY_CATEGORY_ID,
    {
      variables: {
        categoryId: categoryId,
      },
    }
  );

  useEffect(() => {
    if (products) {
      console.log('products :', products);
    }
  }, [products]);

  return (
    <>
      <Header />
      <Article>
        <ProductSection>
          <ListControlBar />
          {!loadingProducts ? (
            <ProductList productItems={products.ProductsByCategoryId} />
          ) : (
            <div>제품정보를 가져오고 있어요!</div>
          )}
        </ProductSection>
      </Article>
    </>
  );
}

export default ChildCategory;
