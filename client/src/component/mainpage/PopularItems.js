import React, { useContext } from 'react';
import styled from 'styled-components';
import LoadingIcon from 'component/share/LoadingIcon';
import { GET_POPULAR_ITEMS } from 'graphql/product';
import { useQuery } from '@apollo/react-hooks';
import ProductItem from 'component/share/ProductItem';

const Container = styled.div`
  display: flex;
  overflow: auto;
`;

const PopularItems = () => {
  const limit = 15;
  const { loading, error, data: products } = useQuery(GET_POPULAR_ITEMS, {
    variables: { limit },
  });

  return (
    <>
      <Container>
        {loading ? (
          <LoadingIcon />
        ) : (
          products.GetPopularItems.map((item, idx) => (
            <ProductItem content={item} key={`popular-items-${idx}`} row="one" />
          ))
        )}
      </Container>
    </>
  );
};

export default PopularItems;
