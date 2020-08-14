import React from "react";
import "./reset.scss";
import "./App.scss";
import tempImg from "./banner/1.gif";
import tempImg2 from "./banner/2.gif";
import bread from "./banner/bread.png";
import Category from "./component/Category";
import Product from "./component/Product";

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <div className="main-header-row-1">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <div>B mart</div>
          <div className="main-header-row-1-right">
            <i className="fa fa-search" aria-hidden="true"></i>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
        <div className="main-header-row-2">
          <div className="main-search-container">
            🔍
            <input placeholder="B마트 상품을 검색해보세요!" />
          </div>
        </div>
      </header>
      <section className="main-banner">
        <img src={tempImg}></img>
      </section>
      <nav className="main-category">
        <h1>
          배달 시간 <span>28~38분</span> 예상 <span>| 24시까지 주문 예상</span>
        </h1>
        <div className="category-item-container">
          <div className="category-item">
            <img src={bread}></img>
            <p>과일 샐러드</p>
          </div>
          <div className="category-item">
            <img src={tempImg2}></img>
            <p>과일 샐러드</p>
          </div>
          <div className="category-item">
            <img src={tempImg2}></img>
            <p>과일 샐러드</p>
          </div>
          <div className="category-item">
            <img src={tempImg2}></img>
            <p>과일 샐러드</p>
          </div>
          <div className="category-item">
            <img src={tempImg2}></img>
            <p>과일 샐러드</p>
          </div>
          <div className="category-item">
            <img src={tempImg2}></img>
            <p>과일 샐러드</p>
          </div>
          <div className="category-item">
            <img src={tempImg2}></img>
            <p>과일 샐러드</p>
          </div>
          <div className="category-item">
            <img src={tempImg2}></img>
            <p>과일 샐러드</p>
          </div>
          <div className="category-item">
            <img src={tempImg2}></img>
            <p>과일 샐러드</p>
          </div>
          <div className="category-item">
            <img src={tempImg2}></img>
            <p>과일 샐러드</p>
          </div>
        </div>
      </nav>
      <article className="main-article">
        <Category />
        <section className="section-recommend">번쩍할인 등등 </section>
        <section className="section-advertise">광고</section>
        <section className="section-product">
          <Product />
        </section>
      </article>
    </div>
  );
}

export default App;
