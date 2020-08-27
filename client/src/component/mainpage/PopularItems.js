import React from 'react';
import LoadingIcon from 'component/share/LoadingIcon';
import { GET_POPULAR_ITEMS } from 'graphql/product';
import { useQuery } from '@apollo/react-hooks';
import ProductItem from 'component/share/ProductItem';
import { OuterContainer, HeaderContainer, Header } from 'component/share/ShareStyle';
import { MoreBtn } from 'component/mainpage/RecommendStyle';

const PopularItems = () => {
  const limit = 15;
  const { loading, error, data: products } = useQuery(GET_POPULAR_ITEMS, {
    variables: { limit },
  });
  if (products !== undefined && products.GetPopularItems.length === 0) return <div>ㅠㅠ...데이터가 없습니다</div>;
  if (error) return <div>ㅠㅠ...데이터 요청에 실패했습니다</div>;

  return (
    <>
      <HeaderContainer>
        <Header>요즘 잘 팔려요</Header>
        <MoreBtn>{'더보기 >'} </MoreBtn>
      </HeaderContainer>
      <OuterContainer>
        {loading ? (
          <LoadingIcon />
        ) : (
          products.GetPopularItems.map((item, idx) => (
            <ProductItem content={item} key={`popular-items-${idx}`} row="one" />
          ))
        )}
      </OuterContainer>
    </>
  );
};

export default PopularItems;
