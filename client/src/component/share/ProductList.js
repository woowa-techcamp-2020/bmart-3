import React from 'react';
import styled from 'styled-components';
import ProductItem from 'component/share/ProductItem';

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductList = ({ productItems }) => {
  // console.log('productItems : ', productItems);
  return (
    <ProductContainer>
      {productItems.map((item, idx) => (
        <ProductItem productItems={item} key={idx} />
      ))}
    </ProductContainer>
  );
};

export default ProductList;
