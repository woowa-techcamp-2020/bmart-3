import React, { useContext, useRef, useEffect } from 'react';
import LoadingIcon from 'component/share/LoadingIcon';
import { GET_NEW_RELEASE } from 'graphql/product';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import ProductItem from 'component/share/ProductItem';
import { OuterContainer, HeaderContainer, Header } from 'component/share/ShareStyle';
import { MoreBtn } from 'component/mainpage/RecommendStyle';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const NewRelease = () => {
  const limit = 15;

  const { loading, error, data: products } = useQuery(GET_NEW_RELEASE, { variables: { limit } });

  if (products !== undefined && products.GetNewRelease.length === 0) return <div>ㅠㅠ...데이터가 없습니다</div>;
  if (error) return <div>ㅠㅠ...데이터 요청에 실패했습니다</div>;

  return (
    <>
      <HeaderContainer>
        <Header>새로 나왔어요</Header>
        <StyledLink to="/event/new_release">
          <MoreBtn>{'더보기 >'} </MoreBtn>
        </StyledLink>
      </HeaderContainer>
      <OuterContainer>
        {loading ? (
          <LoadingIcon />
        ) : (
          products.GetNewRelease.map((item, idx) => <ProductItem content={item} key={`new-release-${idx}`} row="one" />)
        )}
      </OuterContainer>
    </>
  );
};

export default NewRelease;
