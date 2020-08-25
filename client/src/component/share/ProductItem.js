import React from 'react';
import styled from 'styled-components';
import { IMG_URL } from 'component/share/constant';
import { addCommaToNumber } from 'component/share/util';
import { Unlike, Liked } from 'component/mainpage/RecommendStyle';
import {
  DiscountInfoSection,
  DiscountPercent,
  DiscountedPrice,
  BeforeDiscountPrice,
} from 'component/mainpage/RecommendStyle';

const EachItem = styled.div`
  position: relative;
  font-size: 0.8em;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
`;

const OneRowEachItem = styled.div`
  position: relative;
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  min-width: 130px;
  min-height: 120px;
  margin: 0 10px;
`;

const StyledLiked = styled(Liked)`
  position: absolute;
  top: 95px;
  right: 15px;
  width: 25px;
  height: 25px;
`;

const StyledUnliked = styled(Unlike)`
  position: absolute;
  top: 95px;
  right: 15px;
  width: 25px;
  height: 25px;
`;

const ProductImg = styled.img.attrs((props) => ({ src: props.img }))`
  width: 100%;
  height: 130px;
  border: 2vw solid rgba(0, 0, 0, 0.5);
  border-image: url(${IMG_URL}/border1.png) 170 round;
  border-image-width: 4.5;
  padding: 2%;
  box-shadow: inset 0 0 7px ${(props) => props.theme.color.darkGray};
`;

const ProductContent = styled.div`
  width: 110%;
  padding: 5px 0;
`;

const ProductContentRow = styled.div`
  padding: 2px 0 2px 10px;
`;

const ProductItem = ({ content, row }) => {
  const discountedPrice = parseInt((content.price * (1 - content.discount_percent / 100)) / 10) * 10;
  return (
    <>
      {row !== 'one' ? (
        <EachItem>
          <ProductImg img={content.img_url} />
          <ProductContent>
            <ProductContentRow>{content.name}</ProductContentRow>
            <ProductContentRow>
              <DiscountInfoSection>
                {content.discount_percent ? (
                  <>
                    <DiscountPercent>{`${content.discount_percent}%`}</DiscountPercent>
                    <DiscountedPrice>{`${addCommaToNumber(content.price)}원`}</DiscountedPrice>
                  </>
                ) : (
                  ''
                )}
                <BeforeDiscountPrice>{`${addCommaToNumber(discountedPrice)}원`}</BeforeDiscountPrice>
              </DiscountInfoSection>
            </ProductContentRow>
          </ProductContent>
          {content.liked === 'true' ? <StyledLiked /> : <StyledUnliked />}
        </EachItem>
      ) : (
        <OneRowEachItem>
          <ProductImg img={content.img_url} />
          <ProductContent>
            <ProductContentRow>{content.name}</ProductContentRow>
            <ProductContentRow>{addCommaToNumber(content.price)}원</ProductContentRow>
          </ProductContent>
          <StyledLiked></StyledLiked>
        </OneRowEachItem>
      )}
    </>
  );
};
export default ProductItem;
