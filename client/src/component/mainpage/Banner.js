import React from 'react';
import tempImg from 'banner/1.gif';
import styled from 'styled-components';

const MainBanner = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 9em;
`;

const BannerImg = styled.img`
  width: 100%;
`;

const Banner = () => {
  return (
    <div>
      <MainBanner>
        <BannerImg src={tempImg}></BannerImg>
      </MainBanner>
    </div>
  );
};

export default Banner;
