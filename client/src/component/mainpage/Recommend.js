import React, { useContext, useEffect } from 'react';
import { addCommaToNumber } from 'component/share/util';
import styled from 'styled-components';
import { RecommendContext } from 'context/RecommendContext';
import { useMutation } from '@apollo/client';
import { TOGGLE_LIKED } from 'graphql/liked';
import BuyProduct from 'component/share/BuyProduct';

import {
  RecommendWrapper,
  RecommendHeader,
  RecommendTitle,
  StyledLight,
  Emphasize,
  MoreBtn,
  RecommenedContent,
  FirstRowItem,
  ImgWrapper,
  CurrentItem,
  Unlike,
  Liked,
  ProductTitle,
  PriceSection,
  DiscountInfoSection,
  DiscountPercent,
  BeforeDiscountPrice,
  DiscountedPrice,
  FilledBasket,
} from 'component/mainpage/RecommendStyle';
import { ToggleProductBuyContext } from 'context/ToggleProductBuyContext';
import { Link } from 'react-router-dom';

const FilledProductCart = styled(FilledBasket)`
  color: ${(props) => (props.isFilled ? props.theme.color.orange : props.theme.color.lightYello)};
  background: ${(props) => props.theme.color.backgroundGray};
  border: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Recommend = () => {
  const [recommendList, setRecommendList, chosen, setChosen, getTimesaleItems] = useContext(RecommendContext);
  const [toggleLikedMutation] = useMutation(TOGGLE_LIKED);
  const [selected, setSelected, cartItem, setCartItem] = useContext(ToggleProductBuyContext);
  const updateImg = (idx) => {
    setChosen(idx - 1);
  };

  useEffect(() => {
    getTimesaleItems({ variables: { limit: 4 } });
  }, []);

  const toggleLike = (idx, id, liked) => {
    setRecommendList((prev) =>
      prev.map((item) => (item.idx === idx ? { ...item, liked: item.liked === 'true' ? 'false' : 'true' } : item))
    );
    toggleLikedMutation({ variables: { id, liked } });
  };

  const toggleCart = () => {
    const data = [...selected];
    data[selectedItem.id] = true;
    setSelected(data);
  };

  if (recommendList.length === 0) return <div>loading...</div>;
  const selectedItem = recommendList[chosen];
  const discountedPrice = parseInt((selectedItem.price * (1 - selectedItem.discount_percent / 100)) / 10) * 10;

  return (
    <RecommendWrapper>
      <RecommendHeader>
        <RecommendTitle>
          지금 사면 <StyledLight />
          <Emphasize>번쩍할인</Emphasize>
        </RecommendTitle>
        <StyledLink to="/event/recommend">
          <MoreBtn>{'더보기 >'} </MoreBtn>
        </StyledLink>
      </RecommendHeader>
      <RecommenedContent>
        {recommendList.slice(0, 4).map((item, idx) => (
          <FirstRowItem
            key={`${item.name}+${idx}`}
            src={item.img_url}
            isSelected={chosen === item.idx - 1 ? true : false}
            onClick={() => updateImg(item.idx)}
          ></FirstRowItem>
        ))}
        <ImgWrapper>
          <CurrentItem src={selectedItem.img_url}></CurrentItem>
          {selectedItem.liked === 'true' ? (
            <Liked onClick={() => toggleLike(chosen + 1, selectedItem.id, selectedItem.liked)} />
          ) : (
            <Unlike onClick={() => toggleLike(chosen + 1, selectedItem.id, selectedItem.liked)} />
          )}
        </ImgWrapper>
        <ProductTitle>{selectedItem.name}</ProductTitle>
        <PriceSection>
          <DiscountInfoSection>
            <DiscountPercent>{`${selectedItem.discount_percent}%`}</DiscountPercent>
            <DiscountedPrice>{`${addCommaToNumber(selectedItem.price)}원`}</DiscountedPrice>
            <BeforeDiscountPrice>{`${addCommaToNumber(discountedPrice)}원`}</BeforeDiscountPrice>
          </DiscountInfoSection>
          <FilledProductCart onClick={() => toggleCart()} isFilled={cartItem[selectedItem.id]} />
        </PriceSection>
      </RecommenedContent>
      {selected[selectedItem.id] ? <BuyProduct content={selectedItem} /> : ''}
    </RecommendWrapper>
  );
};

export default Recommend;
