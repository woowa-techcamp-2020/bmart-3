import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateOne = keyframes`
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  `;
const rotateTwo = keyframes`
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  `;

const rotateThree = keyframes`
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  `;
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  position: relative;

  & > div {
    margin: 10px 0;
  }
`;

const Loader = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
`;

const Inner = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const InnerOne = styled(Inner)`
  left: 0%;
  top: 0%;
  animation: ${rotateOne} 1s linear infinite;
  border-bottom: 3px solid pink;
`;
const InnerTwo = styled(Inner)`
  right: 0%;
  top: 0%;
  animation: ${rotateTwo} 1s linear infinite;
  border-right: 3px solid pink;
`;
const InnerThree = styled(Inner)`
  right: 0%;
  bottom: 0%;
  animation: ${rotateThree} 1s linear infinite;
  border-top: 3px solid pink;
`;

const LoadingIcon = (props) => {
  return (
    <LoadingContainer>
      <Loader>
        <InnerOne />
        <InnerTwo />
        <InnerThree />
      </Loader>
      {props.loader ? '' : <div>데이터 불러오는 중...</div>}
    </LoadingContainer>
  );
};

export default LoadingIcon;
