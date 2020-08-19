import React, { useEffect, useCallback, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { CategoryContext } from 'context/CategoryContext';
import { IMG_URL } from 'component/share/constant';

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
  border-image: url(${IMG_URL}categoryBorder.png) 399 round;
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
  const [title] = useContext(CategoryContext);

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
    <Nav className="main-category">
      <NavTitle>
        배달 시간 <DeliveryTime>28~38분</DeliveryTime> 예상{' '}
        <DeliveryExpirationTime>| 24시까지 주문 예상</DeliveryExpirationTime>
      </NavTitle>
      <CategoryContainer onClick={preventRightClick}>
        {title.map((item, idx) => {
          return (
            <CategoryItem key={idx}>
              <CategoryImg src={`${IMG_URL}${item.src}.png`} alt={`${IMG_URL}${item.src}.png`} />
              <CategoryTitle>{item.title}</CategoryTitle>
            </CategoryItem>
          );
        })}
      </CategoryContainer>
    </Nav>
  );
};

export default Category;
