import React from 'react';
import './reset.scss';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './component/share/theme';
import Mainpage from 'component/share/Mainpage';
import ParentCategory from 'component/detailpage/ParentCategory';
import ChildCategory from 'component/detailpage/ChildCategory';
import Loginpage from 'component/Loginpage';
import TotalMenupage from 'component/TotalMenupage';
import LoginCheck from 'component/loginpage/LoginCheck';
import SearchPage from 'component/searchpage/SearchPage';
import EventPage from 'component/eventpage/EventPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FetchingProvider } from 'context/FetchingContext';
import { CategoryProvider } from 'context/CategoryContext';
import { ProductProvider } from 'context/ProductContext';
import { ToggleProductBuyProvider } from 'context/ToggleProductBuyContext';
import CartPage from 'component/cartpage/CartPage';
import Likedpage from 'component/likedpage/Likedpage';

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
        <CategoryProvider>
          <ToggleProductBuyProvider>
            <Switch>
              <Route path="/login" component={Loginpage} />
              <Route path="/mainpage" exact>
                <ProductProvider>
                  <FetchingProvider>
                    <Mainpage />
                  </FetchingProvider>
                </ProductProvider>
              </Route>
              <Route path="/cart" exact>
                <CartPage />
              </Route>
              <Route path="/category/:category_id" component={ParentCategory} />
              <Route path="/category_detail/:category_id" component={ChildCategory} />
              <Route path="/total_menu" component={TotalMenupage}></Route>
              <Route path="/ordered_list">주문 내역 페이지</Route>
              <Route path="/search" component={SearchPage}></Route>
              <Route path="/event/:event_name" component={EventPage}></Route>
              <Route path="/liked" component={Likedpage}></Route>

              <Route path="/">not found</Route>
            </Switch>
          </ToggleProductBuyProvider>
        </CategoryProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
