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
  color: ${(props) => props.theme.color.brown};
  border: 1px solid ${(props) => props.theme.color.lightBrown};
  border-radius: 50%;
  padding: 1%;
  background: ${(props) => props.theme.color.lightBrown};
  border: 1px solid ${(props) => props.theme.color.brown};
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

export {
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
};
