import React, { useState, useEffect, useRef } from 'react';
import Header from 'component/share/Header';
import ProductList from 'component/share/ProductList';
import Advertise from 'component/share/Advertise';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { CATEGORIES_CHILD } from 'graphql/category';
import { PAGED_PRODUCTS_BY_PARENT_CATEGORY_ID } from 'graphql/product';
import { Link } from 'react-router-dom';
import LoadingIcon from 'component/share/LoadingIcon';
import OrderSelector from 'component/share/OrderSelector';

function ParentCategory(props) {
  // -------------------- 상수 선언 영역
  const MINCURSOR = 0;
  const MAXCURSOR = 999999999;

  //--------------------스타일드 컴포넌트 구현 영역
  const categoryBaseUrl = '/category_detail/';

  function ChildCategoryList(props) {
    return (
      <CategoryContainer>
        {props.childCategories.map((childCategory, idx) => (
          <CategoryBox key={idx}>
            <StyledLink to={categoryBaseUrl + childCategory.id}>{childCategory.name}</StyledLink>
          </CategoryBox>
        ))}
      </CategoryContainer>
    );
  }

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
  `;

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

  const Article = styled.article``;

  const ListControlBar = styled.div``;

  const ProductSection = styled.section`
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  `;

  // ------------------ hook 선언 영역

  const splitUrl = props.location.pathname.split('/');
  const categoryId = parseInt(splitUrl[splitUrl.length - 1]);
  const [cursor, setCursor] = useState(MINCURSOR);
  const [ordertype, setOrdertype] = useState('id');
  const [limit, setLimit] = useState(8);
  const [lastProductId, setLastProductId] = useState(0);
  const [listDireaction, setListDireaction] = useState('ASC');
  const [productList, setProductList] = useState([]);
  const [scrollOver, setScrollOver] = useState(false);
  const reloadRef = useRef();

  // ------------------graphql 영역
  // 자식 카테고리 요청
  const { loading: loadingCategories, data: childcategories, error: childError } = useQuery(CATEGORIES_CHILD, {
    variables: {
      parentId: categoryId,
    },
  });

  // 부모 카테고리 제품 데이터 요청
  const { loading: loadingProducts, data: products, error: productsError } = useQuery(
    PAGED_PRODUCTS_BY_PARENT_CATEGORY_ID,
    {
      variables: {
        categoryId,
        id: lastProductId,
        cursor,
        ordertype,
        limit,
        direction: listDireaction,
      },
    }
  );

  // -------------------- IntersectionObserver 구현 영역
  const setIntersectionObserver = () => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        if (products && !scrollOver) {
          setLastProductId(
            products.PagedProductsByParentCategoryId[products.PagedProductsByParentCategoryId.length - 1].id
          );

          switch (ordertype) {
            case 'id':
              setCursor(
                products.PagedProductsByParentCategoryId[products.PagedProductsByParentCategoryId.length - 1].id
              );
              break;
            case 'price':
              setCursor(
                products.PagedProductsByParentCategoryId[products.PagedProductsByParentCategoryId.length - 1].price
              );
              break;
            case 'saled_count':
              setCursor(
                products.PagedProductsByParentCategoryId[products.PagedProductsByParentCategoryId.length - 1]
                  .saled_count
              );
              break;
          }
        }
      });
    });
    io.observe(document.querySelector('.reload-div'));
  };

  // -------------------- 생명주기 함수(useEffect) 영역
  // products 갱신될 때마다

  useEffect(() => {
    if (products) {
      if (products.PagedProductsByParentCategoryId.length < limit) {
        setScrollOver(true);
      } else {
        setProductList([...productList, products.PagedProductsByParentCategoryId]);
      }
    }
  }, [products]);

  //최초 1회 실행
  useEffect(() => {
    setIntersectionObserver();
  });

  // ------------------ 내부 함수 영역
  function changeOrder(value) {
    const orderValues = value.split('/');
    setProductList([]);
    setListDireaction(orderValues[1]);
    if (orderValues[1] === 'ASC') {
      setCursor(MINCURSOR);
      setLastProductId(MINCURSOR);
    } else {
      setCursor(MAXCURSOR);
      setLastProductId(MAXCURSOR);
    }
    setOrdertype(orderValues[0]);
  }

  // ------------- 렌더 영역
  return (
    <>
      <Header />
      <Article>
        <Advertise />
        {!loadingCategories ? (
          <ChildCategoryList childCategories={childcategories.CategoriesChild} />
        ) : (
          <div>카테고리 정보를 가져오고 있어요!</div>
        )}
        <OrderSelector selected={ordertype + '/' + listDireaction} changeOrder={changeOrder} />
        <ProductSection>
          <ListControlBar />
          {productList.map((productItems, index) => (
            <ProductList productItems={productItems} key={index} />
          ))}
          {loadingProducts ? <LoadingIcon /> : ''}
          <div ref={reloadRef} className="reload-div"></div>
        </ProductSection>
      </Article>
    </>
  );
}

export default ParentCategory;
