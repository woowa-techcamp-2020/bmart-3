import React from 'react';
import styled from 'styled-components';
import ProductItem from 'component/share/ProductItem';
import { useQuery } from '@apollo/react-hooks';
import { PRODUCTS_BY_CATEGORY_ID } from 'graphql/product';

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

const Product = ({ category }) => {
  const categoryId = category.id;
  const { loading, error, data: products, refetch: refetchProducts } = useQuery(PRODUCTS_BY_CATEGORY_ID, {
    variables: { categoryId },
  });

  if (loading || !products) return <div style={{ height: 100 }}>loading...</div>;
  if (error) return <div>error</div>;
  if (products) console.log(products);

  return (
    <>
      <ProductContainerHeader>
        <h1>{category.name}</h1>
        <HeaderBtn>더보기</HeaderBtn>
      </ProductContainerHeader>
      <ProductContainer>
        {products.ProductsByCategoryId.map((item, idx) => {
          return <ProductItem key={`productsByCategoryId-${idx}`} content={item}></ProductItem>;
        })}
      </ProductContainer>
    </>
  );
};

export default Product;
