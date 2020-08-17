import React, { createRef } from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import banner1 from 'banner/1.gif';
import banner2 from 'banner/2.gif';
import banner3 from 'banner/3.gif';
import banner4 from 'banner/4.gif';

const MainBanner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  height: 9em;
`;

const BannerImg = styled.img`
  width: 100%;
  min-height: 100px;
`;

const StyledCarousel = styled(Carousel)`
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  & .Carousel-buttonWrapper-5 {
    position: absolute;
    height: 340px !important;
    margin: 0;
    padding: 0;
  }
  & button {
    width: 28px;
    height: 28px;
  }
`;

function Example(props) {
  const items = [{ src: banner1 }, { src: banner2 }, { src: banner3 }, { src: banner4 }];

  return (
    <StyledCarousel autoplay={true} animation={'slide'} navButtonsAlwaysVisible={true} timeout={100}>
      {items.map((item, idx) => (
        <>
          <MainBanner key={idx}>
            <BannerImg src={item.src}></BannerImg>
          </MainBanner>
        </>
      ))}
    </StyledCarousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
}

export default Example;
