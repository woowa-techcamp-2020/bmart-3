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
  position: relative;
`;

const BannerImg = styled.img`
  width: 100%;
  min-height: 100px;
`;

const CurrentPage = styled.div`
  position: absolute;
  width: 50px;
  bottom: 10px;
  right: 10px;
  text-align: center;
  font-size: ${(props) => props.theme.size.smd};
  border-radius: 10px;
  opacity: 0.8;
  color: #000;
  background: ${(props) => props.theme.color.gray};
  padding: 1%;
`;

const StyledCarousel = styled(Carousel)``;

function Example(props) {
  const items = [{ src: banner1 }, { src: banner2 }, { src: banner3 }, { src: banner4 }];

  return (
    <StyledCarousel autoplay={true} animation={'slide'} timeout={100}>
      {items.map((item, idx) => (
        <>
          <MainBanner key={idx}>
            <BannerImg src={item.src}></BannerImg>
            <CurrentPage>{idx + 1 + '/' + items.length}</CurrentPage>
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
