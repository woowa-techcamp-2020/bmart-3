import React from 'react';
import styled from 'styled-components';
import ProductItem from 'component/share/ProductItem';

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

//부모한테 category_id를 받아서 본인이 api를 통해 데이터를 가져옴 >

const ProductList = ({ productItems }) => {
  return (
    <ProductContainer>
      {productItems.map((item, idx) => (
        <ProductItem itemData={item} key={idx} />
      ))}
    </ProductContainer>
  );
};

export default ProductList;