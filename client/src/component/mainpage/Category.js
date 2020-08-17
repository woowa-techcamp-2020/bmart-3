import React, { useState, useEffect, useCallback } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import theme from '../share/theme';
import categoryBorder from 'image/categoryBorder.png';
import salad from 'image/salad.png';
import chicken from 'image/chicken.png';
import egg from 'image/egg.png';
import bread from 'image/bread.png';
import mealKit from 'image/mealKit.png';
import icecream from 'image/icecream.png';
import more from 'image/more.png';
import milk from 'image/milk.png';
import snack from 'image/snack.png';
import wash from 'image/wash.png';

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

const categoryMove = keyframes`
  50%{transform:rotate(-10deg);}
`;

const CategoryImg = styled.img`
  width: 55px;
  height: 57px;
  border-radius: 40%;
  border: 2vw solid rgba(0, 0, 0, 0.5);
  border-image: url(${categoryBorder}) 399 round;
  border-image-width: 4.5;
  padding: 1%;

  &:active {
    animation: ${categoryMove} 0.2s ease-in-out;
  }
`;

const CategoryTitle = styled.p`
  margin: 0.5em 0 1em 0;
  font-size: ${(props) => props.theme.size.sm};
`;

const Category = () => {
  const [title, setTitle] = useState([
    { title: '과일﹒샐러드', src: salad },
    { title: '정육﹒수산﹒계란', src: egg },
    { title: '밀키트', src: mealKit },
    { title: '우유﹒유제품', src: milk },
    { title: '빵﹒시리얼﹒잼', src: bread },
    { title: '분식﹒야식', src: chicken },
    { title: '과자﹒초콜릿', src: snack },
    { title: '아이스크림', src: icecream },
    { title: '헤어﹒바디﹒세안', src: wash },
    { title: '더보기', src: more },
  ]);

  //오른쪽 클릭시 이미지 복사 기타 등등 이벤트 막아놓기
  const preventRightClick = useCallback((e) => {
    e.preventDefault();
  });

  useEffect(() => {
    document.addEventListener('contextmenu', preventRightClick);
    return () => {
      document.removeEventListener('contextmenu', preventRightClick);
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <Nav className="main-category">
        <NavTitle>
          배달 시간 <DeliveryTime>28~38분</DeliveryTime> 예상{' '}
          <DeliveryExpirationTime>| 24시까지 주문 예상</DeliveryExpirationTime>
        </NavTitle>
        <CategoryContainer onClick={preventRightClick}>
          {title.map((item, idx) => {
            return (
              <CategoryItem key={idx}>
                <CategoryImg src={item.src} alt={item.src} />
                <CategoryTitle>{item.title}</CategoryTitle>
              </CategoryItem>
            );
          })}
        </CategoryContainer>
      </Nav>
    </ThemeProvider>
  );
};

export default Category;
