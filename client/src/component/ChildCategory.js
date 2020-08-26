import React, { useState, useEffect, useRef, useContext } from 'react';
import Header from 'component/share/Header';
import ProductList from 'component/share/ProductList';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { PAGED_PRODUCTS_BY_CHILD_CATEGORY_ID } from 'graphql/product';
import LoadingIcon from 'component/share/LoadingIcon';

function ChildCategory(props) {
  //--------------------스타일드 컴포넌트 구현 영역
  const Article = styled.article``;

  const ListControlBar = styled.div``;

  const ProductSection = styled.section`
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  `;

  // -------------------- hook 선언 영역
  const splitUrl = props.location.pathname.split('/');
  const categoryId = parseInt(splitUrl[splitUrl.length - 1]);
  const [cursor, setCursor] = useState(0);
  const [ordertype, setOrdertype] = useState('id');
  const [limit, setLimit] = useState(8);
  const [lastProductId, setLastProductId] = useState(0);
  const [listDireaction, setListDireaction] = useState('ASC');
  const [productList, setProductList] = useState([]);
  const [scrollOver, setScrollOver] = useState(false);
  const reloadRef = useRef();

  // -------------------- 백엔드 데이터 요청 영역
  const { loading: loadingProducts, error: errorProducts, data: products, refetch: refetchProducts } = useQuery(
    //아래 쿼리 자식 카테고리도 같은 이름으로 써야 하니까 수정해야 할듯
    PAGED_PRODUCTS_BY_CHILD_CATEGORY_ID,
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
            products.PagedProductsByChildCategoryId[products.PagedProductsByChildCategoryId.length - 1].id
          );
          setCursor(products.PagedProductsByChildCategoryId[products.PagedProductsByChildCategoryId.length - 1].id);
        }
        console.log('observer detect!');
      });
    });
    io.observe(document.querySelector('.reload-div'));
  };

  // -------------------- 생명주기 함수(useEffect) 영역
  // products 갱신될 때마다 실행
  useEffect(() => {
    if (products) {
      if (products.PagedProductsByChildCategoryId.length < limit) {
        setScrollOver(true);
      } else {
        setProductList([...productList, products.PagedProductsByChildCategoryId]);
        setIntersectionObserver();
      }

      console.log('products: ', products.PagedProductsByChildCategoryId);
    }
  }, [products]);

  //최초 1회 실행
  useEffect(() => {
    setIntersectionObserver();
  });

  // 렌더링 영역
  return (
    <>
      <Header />
      <Article>
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

export default ChildCategory;
