import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { LightningFill } from '@styled-icons/bootstrap/LightningFill';
import { HeartOutline } from '@styled-icons/typicons/HeartOutline';
import { Heart } from '@styled-icons/typicons/Heart';
import { Basket } from '@styled-icons/boxicons-regular/Basket';

const RecommendWrapper = styled.div`
  width: 100%;
  min-height: 100px;
`;

const RecommendHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const RecommendTitle = styled.h1``;

const StyledLight = styled(LightningFill)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.color.yello};
`;

const Emphasize = styled.span`
  color: ${(props) => props.theme.color.lightRed};
`;

const RecommendBtn = styled.button`
  border: none;
  background: none;
  color: ${(props) => props.theme.color.buttonGreen};
`;

const RecommenedContent = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FirstRowItem = styled.img`
  width: 22%;
  height: 80px;
  border: ${(props) => (props.isSelected ? '1px solid red' : 'none')};
  margin-bottom: 5px;
  padding: 1%;
  border-radius: 5px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  padding: 1%;
  max-height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
`;

const CurrentItem = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const likedToggleAction = keyframes`
  50%{
    transform:scale(1.2);
  }
`;

const Unlike = styled(HeartOutline)`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${(props) => props.theme.color.lightYello};
  background: ${(props) => props.theme.color.backgroundGray};
  border-radius: 50%;
  padding: 1%;
  opacity: 0.7;
  animation: ${likedToggleAction} 0.1s ease-in-out;
`;

const Liked = styled(Heart)`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${(props) => props.theme.color.lightRed};
  background: ${(props) => props.theme.color.backgroundGray};
  border-radius: 50%;
  padding: 1%;
  opacity: 0.7;

  animation: ${likedToggleAction} 0.1s ease-in-out;
`;

const ProductTitle = styled.h1`
  width: 100%;
  padding: 5px;
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
  align-items: center;
`;

const DiscountInfoSection = styled.div`
  display: flex;
  align-items: center;
  & * {
    margin: 0 2px;
  }
`;

const StyledBasket = styled(Basket)`
  width: 25px;
  height: 25px;
  color: ${(props) => props.theme.color.lightBrown};
  border: 1px solid ${(props) => props.theme.color.lightBrown};
  border-radius: 50%;
  padding: 1%;
`;

const DiscountPercent = styled.div`
  color: ${(props) => props.theme.color.lightRed};
  font-size: ${(props) => props.theme.size.mmd};
`;
const DiscountedPrice = styled.div`
  text-decoration: line-through;
  font-size: ${(props) => props.theme.size.smd};
  color: ${(props) => props.theme.color.darkGray};
`;
const BeforeDiscountPrice = styled.div``;

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
            <DiscountedPrice>{`${selectedItem.price}원`}</DiscountedPrice>
            <BeforeDiscountPrice>{`${discountedPrice}원`}</BeforeDiscountPrice>
          </DiscountInfoSection>
          <StyledBasket />
        </PriceSection>
      </RecommenedContent>
    </RecommendWrapper>
  );
};

export default Recommend;
