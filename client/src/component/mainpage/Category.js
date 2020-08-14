import React from 'react';
import pizza from 'banner/pizza.png';
import bread from 'banner/bread.png';
import tempImg2 from 'banner/2.gif';

const Category = () => {
  return (
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
          <img src={pizza}></img>
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
  );
};

export default Category;
