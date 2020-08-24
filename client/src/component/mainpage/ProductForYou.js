import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoadingIcon from 'component/share/LoadingIcon';
import { GET_RAND_ITEMS } from 'graphql/product';
import { useQuery } from '@apollo/react-hooks';
import ProductItem from 'component/share/ProductItem';

const Container = styled.div`
  display: flex;
  overflow: auto;
`;

const ProductForYou = () => {
  const limit = 15;
  const [data, setData] = useState([]);
  const { loading, error, data: products } = useQuery(GET_RAND_ITEMS, {
    variables: { limit },
  });

  useEffect(() => {}, []);

  if (products !== undefined && products.GetRandItems.length === 0) return <div>ㅠㅠ...데이터가 없습니다</div>;
  if (error) return <div>ㅠㅠ...데이터 요청에 실패했습니다</div>;

  return (
    <>
      <Container>
        {loading ? (
          <LoadingIcon />
        ) : (
          products.GetRandItems.map((item, idx) => (
            <ProductItem content={item} key={`product-for-you-${idx}`} row="one" />
          ))
        )}
      </Container>
    </>
  );
};

export default ProductForYou;
