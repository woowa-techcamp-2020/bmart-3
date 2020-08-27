import React, { useContext, useEffect, useRef } from 'react';
import { addCommaToNumber } from 'component/share/util';
import { RecommendContext } from 'context/RecommendContext';
import { useMutation } from '@apollo/client';
import { TOGGLE_LIKED } from 'graphql/product';
import { EventScrollContext } from 'context/EventScrollContext';

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
  StyledBasket,
  DiscountPercent,
  BeforeDiscountPrice,
  DiscountedPrice,
} from 'component/mainpage/RecommendStyle';

const Recommend = () => {
  const [recommendList, setRecommendList, selected, setSelected, getTimesaleItems] = useContext(RecommendContext);
  const [toggleLikedMutation] = useMutation(TOGGLE_LIKED);

  const updateImg = (idx) => {
    setSelected(idx - 1);
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

  if (recommendList.length === 0) return <div>loading...</div>;
  const selectedItem = recommendList[selected];
  const discountedPrice = parseInt((selectedItem.price * (1 - selectedItem.discount_percent / 100)) / 10) * 10;

  return (
    <RecommendWrapper>
      <RecommendHeader>
        <RecommendTitle>
          지금 사면 <StyledLight />
          <Emphasize>번쩍할인</Emphasize>
        </RecommendTitle>
        <MoreBtn>더보기 ></MoreBtn>
      </RecommendHeader>
      <RecommenedContent>
        {recommendList.slice(0, 4).map((item, idx) => (
          <FirstRowItem
            key={`${item.name}+${idx}`}
            src={item.img_url}
            isSelected={selected === item.idx - 1 ? true : false}
            onClick={() => updateImg(item.idx)}
          ></FirstRowItem>
        ))}
        <ImgWrapper>
          <CurrentItem src={selectedItem.img_url}></CurrentItem>
          {selectedItem.liked === 'true' ? (
            <Liked onClick={() => toggleLike(selected + 1, selectedItem.id, selectedItem.liked)} />
          ) : (
            <Unlike onClick={() => toggleLike(selected + 1, selectedItem.id, selectedItem.liked)} />
          )}
        </ImgWrapper>
        <ProductTitle>{selectedItem.name}</ProductTitle>
        <PriceSection>
          <DiscountInfoSection>
            <DiscountPercent>{`${selectedItem.discount_percent}%`}</DiscountPercent>
            <DiscountedPrice>{`${addCommaToNumber(selectedItem.price)}원`}</DiscountedPrice>
            <BeforeDiscountPrice>{`${addCommaToNumber(discountedPrice)}원`}</BeforeDiscountPrice>
          </DiscountInfoSection>
          <StyledBasket />
        </PriceSection>
      </RecommenedContent>
    </RecommendWrapper>
  );
};

export default Recommend;
