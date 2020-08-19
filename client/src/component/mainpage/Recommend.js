import React, { useState, useEffect } from 'react';
import { addCommaToNumber } from 'component/share/util';

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
  const [recommendList, setRecommendList] = useState([
    {
      id: 1,
      name: '왕교자',
      img_url:
        'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      liked: false,
      price: 5900,
      discount_percent: 32,
    },
    {
      id: 2,
      name: '아름다운 자연',
      img_url:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      liked: false,
      price: 5900,
      discount_percent: 30,
    },
    {
      id: 3,
      name: '노을 아름다워라라라',
      img_url:
        'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2578&q=80',
      liked: true,
      price: 5900,
      discount_percent: 20,
    },
    {
      id: 4,
      name: '하얀 눈의 집',
      img_url:
        'https://images.unsplash.com/photo-1597673863457-55b714750858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      liked: false,
      price: 5900,
      discount_percent: 50,
    },
  ]);

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prevState) => (prevState + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
