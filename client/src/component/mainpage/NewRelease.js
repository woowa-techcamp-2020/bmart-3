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

  if (products !== undefined && products.GetNewRelease.length === 0) return <div>ㅠㅠ...데이터가 없습니다</div>;
  if (error) return <div>ㅠㅠ...데이터 요청에 실패했습니다</div>;
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
