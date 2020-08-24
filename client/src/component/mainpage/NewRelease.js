import React, { useContext } from 'react';
import styled from 'styled-components';
import LoadingIcon from 'component/share/LoadingIcon';
import { PRODUCTS_BY_CATEGORY_ID } from 'graphql/product';
import { useQuery } from '@apollo/react-hooks';
import ProductItem from 'component/share/ProductItem';

const Container = styled.div`
  display: flex;
  overflow: auto;
`;

const ProductForYou = () => {
  const categoryId = 5;
  const { loading, error, data: products } = useQuery(PRODUCTS_BY_CATEGORY_ID, {
    variables: { categoryId },
  });

  return (
    <>
      <Container>
        {loading ? (
          <LoadingIcon />
        ) : (
          products.ProductsByCategoryId.map((item, idx) => (
            <ProductItem content={item} key={`new-release-${idx}`} row="one" />
          ))
        )}
      </Container>
    </>
  );
};

export default ProductForYou;
