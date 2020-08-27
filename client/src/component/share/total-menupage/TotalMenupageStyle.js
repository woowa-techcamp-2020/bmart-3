import styled, { keyframes } from 'styled-components';
import { Detail } from '@styled-icons/boxicons-regular/Detail';
import { SuitHeartFill } from '@styled-icons/bootstrap/SuitHeartFill';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledDetail = styled(Detail)`
  width: 10px;
  height: 12px;
`;

const StyledHeart = styled(SuitHeartFill)`
  width: 10px;
  height: 12px;
  color: ${(props) => props.theme.color.lightRed};
`;

const SectionTop = styled.section`
  width: 100%;
  display: flex;
`;

const ArticleMyInfo = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border: 1px solid ${(props) => props.theme.color.darkGray};
  height: 40px;
  margin: 10px;
  border-radius: 5px;
`;

const ButtonGoMainpage = styled.button``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonMyInfo = styled.button`
  border: none;
  background: none;
`;

const SectionBottom = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`;

const Title = styled.h1`
  text-shadow: 2px 2px 2px #abf0e9;
  margin: 10px 0;
`;

const Article = styled.article`
  width: 100%;
`;

const ItemList = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ItemRow = styled.div`
  position: relative;
  display: flex;
`;

const Item = styled.div`
  position: relative;
  width: 50%;
  height: 50px;
  color: ${(props) => (props.isChild ? '#fff' : 'black')};
  background: ${(props) => (props.isChild ? '#fde2e2' : '#fff')};
  display: flex;
  font-size: ${(props) => (props.isChild ? '14px' : '16px')};
  padding: 0 10px;
  align-items: center;
  display: ${({ display }) => display};
  border: 1px solid ${(props) => (props.isChild ? 'none' : '#ffa5b0')};

  &:hover {
    background: #ffa5b0;
    color: #fff;
  }
`;

const ArticleRecommend = styled.article``;

export {
  SectionTop,
  ArticleMyInfo,
  ButtonGoMainpage,
  ButtonMyInfo,
  SectionBottom,
  Title,
  Article,
  ItemList,
  ItemRow,
  Item,
  ButtonContainer,
  StyledDetail,
  StyledHeart,
  StyledLink,
};
