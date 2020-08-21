import React from 'react';
import styled from 'styled-components';
import { IMG_URL } from 'component/share/constant';
const EachItem = styled.div`
  font-size: 0.8em;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
`;

const ProductImg = styled.img.attrs((props) => ({ src: props.img }))`
  width: 100%;
  height: 130px;
  border: 2vw solid rgba(0, 0, 0, 0.5);
  border-image: url(${IMG_URL}/border1.png) 170 round;
  border-image-width: 4.5;
  padding: 2%;
  box-shadow: inset 0 0 7px ${(props) => props.theme.color.darkGray};
`;

// {
//   id: 4,
//   name: '제품1',
//   price: 4500,
//   img_url: 'https://img-cf.kurly.com/shop/data/goods/1562318813669l0.jpg',
//   category_id: 21,
//   discount_percent: 0,
// },

const ProductContent = styled.div`
  width: 100%;
  padding: 5px 0;
`;

const ProductContentRow = styled.p`
  padding: 2px 0;
`;

const ProductItem = ({ productItems }) => {
  return (
    <EachItem>
      <ProductImg img={productItems.img_url} />
      <ProductContent>
        <ProductContentRow>{productItems.name}</ProductContentRow>
        <ProductContentRow>{productItems.price}원</ProductContentRow>
      </ProductContent>
    </EachItem>
  );
};
export default ProductItem;
