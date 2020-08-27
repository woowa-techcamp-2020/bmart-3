import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from 'component/share/ProductList';
import LoadingIcon from 'component/share/LoadingIcon';
import { ProductContext } from 'context/ProductContext';
import { CategoryContext } from 'context/CategoryContext';
import { ProductScrollContext } from 'context/ProductScrollContext';
import { $ } from 'component/share/util';
import { Link } from 'react-router-dom';

const categoryBaseUrl = '/category/';

const ProductContainerHeader = styled.div`
  font-family: 'BMDOHYEON';
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 8px;
`;

const HeaderBtn = styled.button`
  background: none;
  color: ${(props) => props.theme.color.buttonGreen};
  border: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #cdb30c;
`;

//부모한테 category_id를 받아서 본인이 api를 통해 데이터를 가져옴 >

const Product = () => {
  const [productList] = useContext(ProductContext);
  const [categoryList] = useContext(CategoryContext);
  const [curVal, setCurVal] = useContext(ProductScrollContext);

  const onScroll = () => {
    for (let i = 2; i <= 9; i++) {
      if ($(`.product-container-${i}`) !== null) {
        if (curVal === i - 2 && $(`.product-container-${i}`).getBoundingClientRect().top - 200 < 0) {
          setCurVal(i - 1);
          break;
        }
        if (curVal === i && $(`.product-container-${i}`).getBoundingClientRect().top > 0) {
          setCurVal(i - 1);
          break;
        }

        if (curVal === 1 && $('.product-container-1').getBoundingClientRect().top > 0) {
          setCurVal(0);
          break;
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <>
      {productList.length ? (
        productList.map((item, idx) => {
          if (idx === 0) return null;
          else {
            return (
              <div key={`product-container-header-${idx}`} className={`product-container-${idx}`}>
                <ProductContainerHeader>
                  <h1>{categoryList.length ? categoryList[idx - 1].name : ''}</h1>
                  <HeaderBtn>
                    {categoryList.length ? (
                      <StyledLink
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={categoryBaseUrl + categoryList[idx - 1].id}
                      >
                        더보기
                      </StyledLink>
                    ) : (
                      ''
                    )}
                  </HeaderBtn>
                </ProductContainerHeader>
                <ProductContainer>
                  <ProductList productItems={item} />
                </ProductContainer>
              </div>
            );
          }
        })
      ) : (
        <LoadingIcon />
      )}
    </>
  );
};

export default Product;
