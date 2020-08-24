import React from 'react';
import styled from 'styled-components';
import LoadingIcon from 'component/share/LoadingIcon';
import { GET_NEW_RELEASE } from 'graphql/product';
import { useQuery } from '@apollo/react-hooks';
import ProductItem from 'component/share/ProductItem';

const Container = styled.div`
  display: flex;
  overflow: auto;
`;

const NewRelease = () => {
  const limit = 15;
  const { loading, error, data: products } = useQuery(GET_NEW_RELEASE, { variables: { limit } });
  console.log(products);
  return (
    <>
      <Container>
        {loading ? (
          <LoadingIcon />
        ) : (
          products.GetNewRelease.map((item, idx) => <ProductItem content={item} key={`new-release-${idx}`} row="one" />)
        )}
      </Container>
    </>
  );
};

export default NewRelease;
