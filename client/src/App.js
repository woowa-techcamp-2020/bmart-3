import React from 'react';
import './reset.scss';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './component/share/theme';
import Mainpage from 'component/Mainpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route path="/" exact component={Mainpage} />
          <Route path="/cart">장바구니페이지</Route>
          <Route path="/category">카테고리 페이지</Route>
          <Route path="/category_detail">상세 카테고리 페이지</Route>
          <Route path="/liked">찜 페이지</Route>
          <Route path="/ordered_list">주문 내역 페이지</Route>
          <Route path="/">not found</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
