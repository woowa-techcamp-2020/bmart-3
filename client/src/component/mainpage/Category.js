import React, { useState } from 'react';
import styled from 'styled-components';
import pizza from 'image/pizza.png';
import salad from 'image/salad.png';
import tempImg2 from 'banner/2.gif';
import more from 'image/more.png';
import border1 from 'image/border1.png';
import paper2 from 'image/paper2.png';
import paper1 from 'image/paper1.png';

const Nav = styled.nav`
  margin: 0 0 8px 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
`;

const NavTitle = styled.h1`
  padding: 10px 0 5px 10px;
`;

const DeliveryTime = styled.span`
  font-weight: bold;
`;

const DeliveryExpirationTime = styled.span`
  color: burlywood;
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 75px;
  width: 100%;
  min-height: 100px;
  font-size: 0.8em;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CategoryImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 40%;
  border: 2vw solid rgba(0, 0, 0, 0.5);
  border-image: url(${paper2}) 400 round;
  border-image-width: 4.5;
  padding: 2%;
`;

const CategoryTitle = styled.p`
  margin: 0.5em 0 1em 0;
`;

const Category = () => {
  const [title, setTitle] = useState([
    '과일﹒샐러드',
    '정육﹒수산﹒계란',
    '밀키트',
    '우유﹒유제품',
    '빵﹒시리얼﹒잼',
    '분식﹒야식',
    '과자﹒초콜릿',
    '아이스크림',
    '헤어﹒바디﹒세안',
    '더보기',
  ]);
  const [source, setSource] = useState([
    'salad',
    'egg',
    'mealKit',
    'milk',
    'bread',
    'chicken',
    'snack',
    'icecream',
    'wash',
    'more',
  ]);

  return (
    <Nav className="main-category">
      <NavTitle>
        배달 시간 <DeliveryTime>28~38분</DeliveryTime> 예상{' '}
        <DeliveryExpirationTime>| 24시까지 주문 예상</DeliveryExpirationTime>
      </NavTitle>
      <CategoryContainer>
        <CategoryItem>
          <CategoryImg src={salad}></CategoryImg>
          <CategoryTitle>과일 샐러드</CategoryTitle>
        </CategoryItem>
        <CategoryItem>
          <CategoryImg src={salad}></CategoryImg>
          <CategoryTitle>과일 샐러드</CategoryTitle>
        </CategoryItem>
        <CategoryItem>
          <CategoryImg src={salad}></CategoryImg>
          <CategoryTitle>과일 샐러드</CategoryTitle>
        </CategoryItem>
        <CategoryItem>
          <CategoryImg src={salad}></CategoryImg>
          <CategoryTitle>과일 샐러드</CategoryTitle>
        </CategoryItem>
        <CategoryItem>
          <CategoryImg src={salad}></CategoryImg>
          <CategoryTitle>과일 샐러드</CategoryTitle>
        </CategoryItem>
        <CategoryItem>
          <CategoryImg src={salad}></CategoryImg>
          <CategoryTitle>과일 샐러드</CategoryTitle>
        </CategoryItem>
        <CategoryItem>
          <CategoryImg src={salad}></CategoryImg>
          <CategoryTitle>과일 샐러드</CategoryTitle>
        </CategoryItem>
        <CategoryItem>
          <CategoryImg src={salad}></CategoryImg>
          <CategoryTitle>과일 샐러드</CategoryTitle>
        </CategoryItem>
        <CategoryItem>
          <CategoryImg src={salad}></CategoryImg>
          <CategoryTitle>과일 샐러드</CategoryTitle>
        </CategoryItem>
        <CategoryItem>
          <CategoryImg src={salad}></CategoryImg>
          <CategoryTitle>과일 샐러드</CategoryTitle>
        </CategoryItem>
      </CategoryContainer>
    </Nav>
  );
};

export default Category;
