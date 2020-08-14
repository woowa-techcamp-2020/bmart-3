import React from 'react';
import './reset.scss';
import './App.scss';
import Mainpage from 'component/Mainpage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Mainpage />
        </Route>
        <Route path="/cart">장바구니페이지</Route>
        <Route path="/category">카테고리 페이지</Route>
        <Route path="/category_detail">상세 카테고리 페이지</Route>
        <Route path="/liked">찜 페이지</Route>
        <Route path="/ordered_list">주문 내역 페이지</Route>
        <Route path="/">not found</Route>
      </Switch>
    </Router>
  );
}

export default App;
