import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import theme from './theme';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import { Hamburger } from '@styled-icons/fa-solid/Hamburger';
import bmartLogo from 'image/bmart-logo.png';

const MainHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
const HeaderRowOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeaderRowOneRightBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const arrowMove = keyframes`
  50%{
    transform:translateX(-10px);
    
  }
`;

const Icon = styled(ArrowBack)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.color.icon};

  &:active {
    color: ${(props) => props.theme.color.orange};
    animation: ${arrowMove} 0.2s ease-in-out;
    padding: 2px;
  }
`;

// 로고 이미지 쓸지 커스텀 로고 쓸지 고민 중
// const Logo = styled.div`
//   font-family: 'BMDOHYEON';
//   color: ${(props) => props.theme.color.icon};
// `;

const BmartLogo = styled.img`
  height: 30px;
  position: absolute;
  left: 40%;
`;

const IconActiveAnimation = keyframes`
  50%{
    transform: scale(1.1);
    color: ${(props) => props.theme.color.orange};
  }
`;

const StyledMagnifyingGlass = styled(MagnifyingGlass)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  color: ${(props) => props.theme.color.icon};

  &:active {
    animation: ${IconActiveAnimation} 0.2s ease-in-out;
    color: ${(props) => props.theme.color.orange};
    border-bottom: 2px solid ${(props) => props.theme.color.orange};
    padding: 1%;
  }
`;

const StyledHamburger = styled(Hamburger)`
  width: 25px;
  height: 25px;
  color: ${(props) => props.theme.color.icon};
  &:active {
    animation: ${IconActiveAnimation} 0.2s ease-in-out;
    color: ${(props) => props.theme.color.orange};
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  margin: 0;
  margin-top: 10px;
  padding: 5px;
  border: none;
  border-bottom: 1.5px solid ${(props) => props.theme.color.pink};

  &:focus {
    border-color: ${(props) => props.theme.color.orange};
  }
`;

const Header = ({ hasSearchBar }) => {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader>
        <HeaderRowOne>
          <Icon src={ArrowBack} />
          <BmartLogo src={bmartLogo} />
          <HeaderRowOneRightBox>
            <StyledMagnifyingGlass />
            <StyledHamburger />
          </HeaderRowOneRightBox>
        </HeaderRowOne>

        {hasSearchBar ? (
          <InputContainer>
            <Input placeholder="🔍 B마트 상품을 검색해보세요!" />
          </InputContainer>
        ) : (
          ''
        )}
      </MainHeader>
    </ThemeProvider>
  );
};

export default Header;
