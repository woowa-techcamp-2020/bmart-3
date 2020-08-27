import React from 'react';
import './reset.scss';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './component/share/theme';
import Mainpage from 'component/Mainpage';
import ParentCategory from 'component/ParentCategory';
import ChildCategory from 'component/ChildCategory';
import Loginpage from 'component/Loginpage';
import TotalMenupage from 'component/TotalMenupage';
import LoginCheck from 'component/LoginCheck';
import SearchPage from 'component/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FetchingProvider } from 'context/FetchingContext';
import { CategoryProvider } from 'context/CategoryContext';
import { ProductProvider } from 'context/ProductContext';
import { ToggleProductBuyProvider } from 'context/ToggleProductBuyContext';
import CartPage from 'component/cartpage/CartPage';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BMHANNAAir';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  } 
    
  @font-face {
    font-family: 'BMDOHYEON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
            
  
  *,body{
    box-sizing:border-box;
    outline:none;
    font-family:'BMHANNAAir';
         
  }
  `;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Route path="/" component={LoginCheck} />
        <Switch>
          <Route path="/login" component={Loginpage} />
          <Route path="/mainpage" exact>
            <ToggleProductBuyProvider>
              <ProductProvider>
                <CategoryProvider>
                  <FetchingProvider>
                    <Mainpage />
                  </FetchingProvider>
                </CategoryProvider>
              </ProductProvider>
            </ToggleProductBuyProvider>
          </Route>
          <Route path="/cart" exact>
            <CartPage />
          </Route>
          <Route path="/category/:category_id">
            <ToggleProductBuyProvider>
              <ParentCategory />
            </ToggleProductBuyProvider>
          </Route>

          <Route path="/category_detail/:category_id">
            <ToggleProductBuyProvider>
              <ChildCategory />
            </ToggleProductBuyProvider>
          </Route>
          <Route path="/total_menu" component={TotalMenupage}></Route>
          <Route path="/liked">찜 페이지</Route>
          <Route path="/ordered_list">주문 내역 페이지</Route>
          <Route path="/search" component={SearchPage}></Route>
          <Route path="/">not found</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
