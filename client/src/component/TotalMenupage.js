import React, { useState, useEffect, useContext } from 'react';
import Header from 'component/share/Header';
import { CategoryContext, showMoreId } from 'context/CategoryContext';
import {
  SectionTop,
  ArticleMyInfo,
  ButtonMyInfo,
  SectionBottom,
  ButtonContainer,
  StyledDetail,
  StyledHeart,
} from 'component/share/total-menupage/TotalMenupageStyle';
import { CategoryList } from 'component/share/total-menupage';
export default function TotalMenupage() {
  const [categoryList, getCategoryList] = useContext(CategoryContext);
  const [categoryDelicious, setCategoryDelicious] = useState([]);
  const [categoryConvenient, setCategoryConvenient] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    const categoryDelicious = [];
    const categoryConvenient = [];
    categoryList.forEach((category) => {
      if (category.id < 9) {
        categoryDelicious.push(category);
      } else if (category.id < showMoreId) {
        categoryConvenient.push(category);
      }
    });
    setCategoryDelicious(categoryDelicious);
    setCategoryConvenient(categoryConvenient);
  }, [categoryList]);
  return (
    <>
      <Header />
      <SectionTop>
        <ArticleMyInfo>
          <ButtonContainer>
            <StyledDetail />
            <ButtonMyInfo>주문내역</ButtonMyInfo>
          </ButtonContainer>
          <ButtonContainer>
            <StyledHeart />
            <ButtonMyInfo>찜한상품</ButtonMyInfo>
          </ButtonContainer>
        </ArticleMyInfo>
      </SectionTop>
      <SectionBottom>
        {categoryDelicious.length > 0 && <CategoryList title="맛있는것" categories={categoryDelicious} />}
        {categoryConvenient.length > 0 && <CategoryList title="편리한것" categories={categoryConvenient} />}
        {/* <Article>
          <Title>B마트추천</Title>
        </Article> */}
      </SectionBottom>
    </>
  );
}
