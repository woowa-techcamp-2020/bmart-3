import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { BANNER_URL } from 'component/share/constant';

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
  opacity: 0.5;
  color: #000;
  background: ${(props) => props.theme.color.gray};
  padding: 1%;
  border: 0.2px solid ${(props) => props.theme.color.darkGray};
`;

const StyledCarousel = styled(Carousel)``;

function Banner() {
  const items = [{ src: '1' }, { src: '2' }, { src: '3' }, { src: '4' }];

  return (
    <StyledCarousel autoplay={true} animation={'slide'} timeout={100}>
      {items.map((item, idx) => (
        <MainBanner key={`banner-${idx}`}>
          <BannerImg src={`${BANNER_URL}/${item.src}.gif`}></BannerImg>
          <CurrentPage>{idx + 1 + '/' + items.length}</CurrentPage>
        </MainBanner>
      ))}
    </StyledCarousel>
  );
}

export default Banner;
