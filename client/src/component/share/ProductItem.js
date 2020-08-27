import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { IMG_URL } from 'component/share/constant';
import { addCommaToNumber } from 'component/share/util';
import { Unlike, Liked } from 'component/mainpage/RecommendStyle';
import { useMutation } from '@apollo/client';
import { TOGGLE_LIKED } from 'graphql/product';
import BuyProduct from 'component/share/BuyProduct';
import { ToggleProductBuyContext } from 'context/ToggleProductBuyContext';

import {
  PriceSection,
  FilledBasket,
  DiscountInfoSection,
  DiscountPercent,
  DiscountedPrice,
  BeforeDiscountPrice,
} from 'component/mainpage/RecommendStyle';

const FilledProductCart = styled(FilledBasket)`
  position: absolute;
  top: 105px;
  right: 40px;
  width: 25px;
  height: 25px;
  color: ${(props) => (props.isFilled ? props.theme.color.orange : props.theme.color.lightYello)};
  background: ${(props) => props.theme.color.backgroundGray};
  border: none;
`;

const EachItem = styled.div`
  position: relative;
  font-size: 0.8em;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  margin: 5px 0;
`;

const OneRowEachItem = styled.div`
  position: relative;
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  min-width: 150px;
  min-height: 90px;
  margin: 0 10px;
`;

const StyledLiked = styled(Liked)`
  position: absolute;
  top: 105px;
  right: 12px;
  width: 25px;
  height: 25px;
`;

const StyledUnliked = styled(Unlike)`
  position: absolute;
  top: 105px;
  right: 12px;
  width: 25px;
  height: 25px;
`;

const ProductImg = styled.img.attrs((props) => ({ src: props.img }))`
  min-width: 150px;
  height: 140px;
  border: 2vw solid rgba(0, 0, 0, 0.5);
  border-image: url(${IMG_URL}/border1.png) 170 round;
  border-image-width: 4.5;
  padding: 2%;
  box-shadow: inset 0 0 7px ${(props) => props.theme.color.darkGray};
`;

const ProductContent = styled.div`
  width: 110%;
  padding: 5px;
`;

const ProductContentRow = styled.div`
  padding: 2px 0 2px 5px;
`;

const ProductItem = ({ content, row }) => {
  const [liked, setLiked] = useState(content.liked);
  const [toggleLikedMutation, { error }] = useMutation(TOGGLE_LIKED);
  const [selected, setSelected, cartItem, setCartItem] = useContext(ToggleProductBuyContext);

  if (selected[content.id] === 'undefined') {
    selected[content.id] = false;
    setSelected(selected);
  }

  const discountedPrice = parseInt((content.price * (1 - content.discount_percent / 100)) / 10) * 10;

  const toggleCart = () => {
    const data = [...selected];
    data[content.id] = !data[content.id];
    setSelected(data);
  };

  const toggleLike = (id) => {
    setLiked((prev) => (prev === 'true' ? 'false' : 'true'));
    toggleLikedMutation({ variables: { id, liked } });
  };

  if (error) return <div>error...</div>;

  return (
    <>
      {row !== 'one' ? (
        <>
          <EachItem>
            <ProductImg img={content.img_url} />
            <ProductContent>
              <ProductContentRow>{content.name}</ProductContentRow>
              <ProductContentRow>
                <PriceSection>
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
                </PriceSection>
              </ProductContentRow>
            </ProductContent>
            <FilledProductCart onClick={() => toggleCart()} isFilled={cartItem[content.id]} />

            {liked === 'true' ? (
              <StyledLiked onClick={() => toggleLike(content.id)} />
            ) : (
              <StyledUnliked onClick={() => toggleLike(content.id)} />
            )}
          </EachItem>
          {selected[content.id] ? <BuyProduct content={content} /> : ''}
        </>
      ) : (
        <>
          <OneRowEachItem>
            <ProductImg img={content.img_url} />
            <ProductContent>
              <ProductContentRow>{content.name}</ProductContentRow>
              <ProductContentRow>
                <PriceSection>
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
                  <FilledProductCart onClick={() => toggleCart()} isFilled={cartItem[content.id]} />
                </PriceSection>
              </ProductContentRow>
            </ProductContent>
            {liked === 'true' ? (
              <StyledLiked onClick={() => toggleLike(content.id)} />
            ) : (
              <StyledUnliked onClick={() => toggleLike(content.id)} />
            )}
          </OneRowEachItem>
          {selected[content.id] ? <BuyProduct content={content} /> : ''}
        </>
      )}
    </>
  );
};
export default ProductItem;
