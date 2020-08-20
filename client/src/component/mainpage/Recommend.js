import React, { useContext } from 'react';
import { addCommaToNumber } from 'component/share/util';
import { RecommendContext } from 'context/RecommendContext';

import {
  RecommendWrapper,
  RecommendHeader,
  RecommendTitle,
  StyledLight,
  Emphasize,
  RecommendBtn,
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
  const [recommendList, setRecommendList, selected, setSelected] = useContext(RecommendContext);

  console.log(recommendList, selected);

  const updateImg = (id) => {
    setSelected(id - 1);
  };

  const toggleLike = (id) => {
    setRecommendList((prev) => prev.map((item) => (item.id === id ? { ...item, liked: !item.liked } : item)));
  };

  const selectedItem = recommendList[selected];
  const discountedPrice = parseInt((selectedItem.price * (1 - selectedItem.discount_percent / 100)) / 10) * 10;

  return (
    <RecommendWrapper>
      <RecommendHeader>
        <RecommendTitle>
          지금 사면 <StyledLight />
          <Emphasize>번쩍할인</Emphasize>
        </RecommendTitle>
        <RecommendBtn>더보기</RecommendBtn>
      </RecommendHeader>
      <RecommenedContent>
        {recommendList.map((item, idx) => (
          <FirstRowItem
            key={`${item.name}+${idx}`}
            src={item.img_url}
            isSelected={selected === item.id - 1 ? true : false}
            onClick={() => updateImg(item.id)}
          ></FirstRowItem>
        ))}
        <ImgWrapper>
          <CurrentItem src={selectedItem.img_url}></CurrentItem>
          {selectedItem.liked ? (
            <Liked onClick={() => toggleLike(selected + 1)} />
          ) : (
            <Unlike onClick={() => toggleLike(selected + 1)} />
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
