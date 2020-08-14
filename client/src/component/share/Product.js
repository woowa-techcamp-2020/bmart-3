import React from 'react';
import './Product.scss';
import pizza from 'banner/pizza.png';

const Product = ({ category }) => {
  return (
    <>
      <div className="product-container-header">
        <h1>{category}</h1>
        <button>더보기</button>
      </div>
      <div className="product-container">
        <div className="product-item">
          <img src={pizza}></img>
          <div>
            <p>한입 쏙 비엔나</p>
            <p>1190원</p>
          </div>
        </div>
        <div className="product-item">
          <img src="https://source.unsplash.com/random"></img>
          <div>
            <p>한입 쏙 비엔나</p>
            <p>1190원</p>
          </div>
        </div>
        <div className="product-item">
          <img src="https://source.unsplash.com/random"></img>
          <div>
            <p>한입 쏙 비엔나</p>
            <p>1190원</p>
          </div>
        </div>
        <div className="product-item">
          <img src="https://source.unsplash.com/random"></img>
          <div>
            <p>한입 쏙 비엔나</p>
            <p>1190원</p>
          </div>
        </div>
        <div className="product-item">
          <img src="https://source.unsplash.com/random"></img>
          <div>
            <p>한입 쏙 비엔나</p>
            <p>1190원</p>
          </div>
        </div>
        <div className="product-item">
          <img src="https://source.unsplash.com/random"></img>
          <div>
            <p>한입 쏙 비엔나</p>
            <p>1190원</p>
          </div>
        </div>
        <div className="product-item">
          <img src="https://source.unsplash.com/random"></img>
          <div>
            <p>한입 쏙 비엔나</p>
            <p>1190원</p>
          </div>
        </div>
        <div className="product-item">
          <img src="https://source.unsplash.com/random"></img>
          <div>
            <p>한입 쏙 비엔나</p>
            <p>1190원</p>
          </div>
        </div>
        <div className="product-item">
          <img src="https://source.unsplash.com/random"></img>
          <div>
            <p>한입 쏙 비엔나</p>
            <p>1190원</p>
          </div>
        </div>
        <div className="product-item">
          <img src="https://source.unsplash.com/random"></img>
          <div>
            <p>한입 쏙 비엔나</p>
            <p>1190원</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
