import styled, { keyframes } from 'styled-components';

const SectionTop = styled.section``;

const ArticleMyInfo = styled.article``;

const ButtonGoMainpage = styled.button``;

const ButtonMyInfo = styled.button``;

const SectionBottom = styled.section``;

const Title = styled.h1``;

const Article = styled.article``;

const ItemList = styled.div`
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
  line-height: 50px;
  display: flex;
  font-size: 1rem;
  flex-direction: column;
  align-items: center;
  display: ${({ display }) => display};
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
};
