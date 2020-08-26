import React from 'react';
import Header from 'component/share/Header';
import ProductList from 'component/share/ProductList';
import Advertise from 'component/share/Advertise';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { CATEGORIES_CHILD } from 'graphql/category';
import { PAGED_PRODUCTS_BY_PARENT_CATEGORY_ID } from 'graphql/product';
import { Link } from 'react-router-dom';

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

// ------------------graphql 영역
function ParentCategory(props) {
  //   const [, ] = useState();
  const splitUrl = props.location.pathname.split('/');
  const categoryId = parseInt(splitUrl[splitUrl.length - 1]);

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
        categoryId: categoryId,
      },
    }
  );

  if (products !== undefined && products.ProductsByCategoryId.length === 0) return <div>ㅠㅠ...데이터가 없습니다</div>;
  if (productsError) return <div>ㅠㅠ...데이터 요청에 실패했습니다</div>;

  if (childcategories !== undefined && childcategories.CategoriesChild.length === 0)
    return <div>ㅠㅠ...데이터가 없습니다</div>;
  if (childError) return <div>ㅠㅠ...데이터 요청에 실패했습니다</div>;

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
        <ProductSection>
          <ListControlBar />
          {!loadingProducts ? (
            <ProductList productItems={products.ProductsByCategoryId} />
          ) : (
            <div>제품정보를 가져오고 있어요!</div>
          )}
        </ProductSection>
      </Article>
    </>
  );
}

export default ParentCategory;
