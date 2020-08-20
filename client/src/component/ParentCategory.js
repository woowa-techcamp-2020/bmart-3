import React, { useState } from 'react';
import Header from 'component/share/Header';
import ProductList from 'component/share/ProductList';
import Advertise from 'component/share/Advertise';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CategoryBox = styled.div`
  border: solid 2px ${(props) => props.theme.color.brown};
  font-size: 0.8em;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
`;

function ChildCategoryList(props) {
  return (
    <CategoryContainer>
      {props.childCategories.map((childCategory, idx) => (
        <CategoryBox key={idx}>{childCategory.name}</CategoryBox>
      ))}
    </CategoryContainer>
  );
}

function ParentCategory(props) {
  //   const [, ] = useState();

  const dummyCategoryDetails = [
    { name: '자식 카테고리1', id: '11' },
    { name: '자식 카테고리2', id: '12' },
    { name: '자식 카테고리3', id: '13' },
  ];
  const dummyProductList = ['상품1', '상품2', '상품3', '상품4', '상품5', '상품6', '상품7'];

  const Article = styled.article``;

  // const ChildCategoryList = styled.div``;

  const ListControlBar = styled.div``;

  const ProductSection = styled.section`
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  `;

  const categoryId = props.location.search.split('=')[1];
  // 헤더
  // 광고배너(짧은거)
  // 자식 카테고리 리스트
  // 이 상품 어때요?
  // 아이템 리스트

  const productItems = [
    {
      id: 1,
      name: '제품1',
      price: 4500,
      img_url: 'https://img-cf.kurly.com/shop/data/goods/1562318813669l0.jpg',
      category_id: 21,
      discount_percent: 23,
    },
    {
      id: 2,
      name: '제품2',
      price: 14500,
      img_url: 'https://img-cf.kurly.com/shop/data/goods/1562318813669l0.jpg',
      category_id: 21,
      discount_percent: 0,
    },
    {
      id: 3,
      name: '제품3',
      price: 114500,
      img_url: 'https://img-cf.kurly.com/shop/data/goods/1562318813669l0.jpg',
      category_id: 21,
      discount_percent: 11,
    },
    {
      id: 4,
      name: '제품4',
      price: 124500,
      img_url: 'https://img-cf.kurly.com/shop/data/goods/1562318813669l0.jpg',
      category_id: 21,
      discount_percent: 0,
    },
  ];

  return (
    <>
      <Header />
      <Article>
        <Advertise />
        <ChildCategoryList childCategories={dummyCategoryDetails} />
        <ProductSection>
          <ListControlBar />
          <ProductList productItems={productItems} />
        </ProductSection>
      </Article>
    </>
  );
}

export default ParentCategory;
