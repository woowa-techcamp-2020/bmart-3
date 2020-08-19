import React from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';

const ProductContainerHeader = styled.div`
  font-family: 'BMDOHYEON';
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HeaderBtn = styled.button`
  background: none;
  color: ${(props) => props.theme.color.buttonGreen};
  border: none;
`;

const Product = () => {
  return (
    <>
      <ProductContainerHeader>
        <h1>분식 야식</h1>
        <HeaderBtn>더보기</HeaderBtn>
      </ProductContainerHeader>
      <ProductContainer>
        {Array(parseInt(10))
          .fill()
          .map((item, idx) => (
            <ProductItem key={idx} />
          ))}
      </ProductContainer>
    </>
  );
};

export default Product;
