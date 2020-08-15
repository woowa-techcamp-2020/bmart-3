import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import { Hamburger } from '@styled-icons/fa-solid/Hamburger';

const MainHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: ${(props) => props.theme.color.primary};
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

const Icon = styled.img``;

const ArrowLeft = styled(ArrowBack)`
  color:${(props) => props.theme.color.secondary}
  width: 20px;
  height: 20px;
`;

const Logo = styled.div`
  font-family: 'BMDOHYEON';
`;

const StyledMagnifyingGlass = styled(MagnifyingGlass)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const StyledHamburger = styled(Hamburger)`
  width: 20px;
  height: 20px;
`;

const Header = ({ hasSearchBar }) => {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader>
        <HeaderRowOne>
          <Icon src="https://img.icons8.com/carbon-copy/40/red/arrow-pointing-left.png" />
          <Logo>B mart</Logo>
          <HeaderRowOneRightBox>
            <StyledMagnifyingGlass />
            <StyledHamburger />
          </HeaderRowOneRightBox>
        </HeaderRowOne>

        {hasSearchBar ? (
          <div className="main-header-row-2">
            <div className="main-search-container">
              🔍
              <input placeholder="B마트 상품을 검색해보세요!" />
            </div>
          </div>
        ) : (
          ''
        )}
      </MainHeader>
    </ThemeProvider>
  );
};

export default Header;
