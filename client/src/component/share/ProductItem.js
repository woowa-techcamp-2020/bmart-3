import React from 'react';
import styled from 'styled-components';
import border1 from 'image/border1.png';

const EachItem = styled.div`
  font-size: 0.8em;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImg = styled.img.attrs((props) => ({ src: props.img }))`
  width: 100%;
  height: 130px;
  border: 2vw solid rgba(0, 0, 0, 0.5);
  border-image: url(${border1}) 200 round;
  border-image-width: 4.5;
  padding: 2%;
`;

const ProductContent = styled.div`
  width: 100%;
  padding: 5px 0;
`;

const ProductContentRow = styled.p`
  padding: 2px 0;
`;

const ProductItem = () => {
  return (
    <>
      <EachItem>
        <ProductImg img="https://source.unsplash.com/random/collections=food" />
        <ProductContent>
          <ProductContentRow>한입 쏙 비엔나</ProductContentRow>
          <ProductContentRow>1190원</ProductContentRow>
        </ProductContent>
      </EachItem>
    </>
  );
};

export default ProductItem;
