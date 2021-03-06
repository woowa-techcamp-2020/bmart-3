import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import banner1 from 'banner/1.gif';
import banner2 from 'banner/2.gif';

const MainBanner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  height: 6em;
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

function Advertise() {
  const items = [{ src: banner1 }, { src: banner2 }];

  return (
    <StyledCarousel autoplay={true} animation={'slide'} timeout={100}>
      {items.map((item, idx) => (
        <MainBanner key={'banner' + idx}>
          <BannerImg src={item.src}></BannerImg>
          <CurrentPage>{idx + 1 + '/' + items.length}</CurrentPage>
        </MainBanner>
      ))}
    </StyledCarousel>
  );
}

export default Advertise;
