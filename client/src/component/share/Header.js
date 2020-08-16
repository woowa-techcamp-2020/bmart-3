import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
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
  background: ${(props) => props.theme.color.pink};
`;
const HeaderRowOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderRowOneRightBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled(ArrowBack)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.color.icon};

  &:hover {
    color: ${(props) => props.theme.color.lightYello};
    transform: translateX(-10px);
    transition: 0.2s linear;
  }
`;

// 로고 이미지 쓸지 커스텀 로고 쓸지 고민 중
// const Logo = styled.div`
//   font-family: 'BMDOHYEON';
//   color: ${(props) => props.theme.color.icon};
// `;

const BmartLogo = styled.img`
  height: 30px;
`;

const StyledMagnifyingGlass = styled(MagnifyingGlass)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: ${(props) => props.theme.color.icon};
`;

const StyledHamburger = styled(Hamburger)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.color.icon};
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
