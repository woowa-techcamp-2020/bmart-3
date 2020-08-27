import React from 'react';
import styled from 'styled-components';
import ProductItem from 'component/share/ProductItem';

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const EmptyProduct = styled.div`
  height: 300px;
  padding: 90px;
  color: #81b214;
`;

const ProductList = ({ productItems }) => {
  return (
    <ProductContainer>
      {productItems.length !== 0 ? (
        productItems.map((item, idx) => <ProductItem content={item} key={idx} />)
      ) : (
        <EmptyProduct>검색 결과가 없어요! ㅠㅠ</EmptyProduct>
      )}
    </ProductContainer>
  );
};

export default ProductList;
