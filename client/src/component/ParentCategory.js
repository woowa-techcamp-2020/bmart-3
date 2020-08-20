import React, { useState, useEffect } from 'react';
import Header from 'component/share/Header';
import ProductList from 'component/share/ProductList';
import Advertise from 'component/share/Advertise';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { CATEGORIES_CHILD } from 'graphql/category';

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
  const splitUrl = props.location.pathname.split('/');
  const categoryId = parseInt(splitUrl[splitUrl.length - 1]);
  console.log('props.location : ', categoryId);

  const {
    loading: loadingCategories,
    error: errorCategories,
    data: childcategories,
    refetch: refetchCategories,
  } = useQuery(CATEGORIES_CHILD, {
    variables: {
      parentId: categoryId,
    },
  });

  useEffect(() => {
    if (childcategories) {
      console.log('childcategories : ', childcategories);
    }
  }, [childcategories]);

  // {
  //   "data": {
  //     "CategoriesChild": [
  //       {
  //         "id": 16,
  //         "name": "간편식﹒냉동식품"
  //       },
  //       {
  //         "id": 17,
  //         "name": "밥류﹒면식품﹒즉석시품"
  //       }
  //     ]
  //   }
  // }

  const Article = styled.article``;

  const ListControlBar = styled.div``;

  const ProductSection = styled.section`
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  `;

  // 자식 카테고리 정보
  const dummyCategoryDetails = [
    { name: '자식 카테고리1', id: '11' },
    { name: '자식 카테고리2', id: '12' },
    { name: '자식 카테고리3', id: '13' },
  ];

  //큰 카테고리에 해당되는 모든 제품들
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
        {!loadingCategories ? <ChildCategoryList childCategories={childcategories.CategoriesChild} /> : ''}
        <ProductSection>
          <ListControlBar />
          <ProductList productItems={productItems} />
        </ProductSection>
      </Article>
    </>
  );
}

export default ParentCategory;
