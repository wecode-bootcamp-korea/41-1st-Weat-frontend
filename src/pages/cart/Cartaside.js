import React from 'react';
import { Link } from 'react-router-dom';
import './Cartaside.scss';

const Cartaside = ({ totalPrice }) => {
  const shippingPrice = 3500;
  return (
    <div className="cartItemTotal">
      <div className="cartItemTotalPrice">
        <div className="cartItemTotalPriceText">총 상품 금액</div>
        <div className="cartItemTotalPriceNum">
          {totalPrice.toLocaleString()}원
        </div>
      </div>
      <div className="cartItemShippingPriceContainer">
        <div className="cartItemTotalShippingPrice">
          <div className="cartItemTotalShippingPriceText">총 배송비</div>
          <div className="cartItemTotalShippingPriceNum">
            {shippingPrice.toLocaleString()}원
          </div>
        </div>
        <div className="cartItemBasicShippingPrice">
          <div className="cartItemBasicShippingPriceText">기본 배송비</div>
          <div className="cartItemBasicShippingPriceNum">
            {shippingPrice.toLocaleString()}원
          </div>
        </div>
      </div>
      <div className="cartItemExpectTotalPriceContainer">
        <div className="cartItemExpectTotalPrice">예상 결제 금액</div>
        <div className="cartItemTotalPriceBold">
          {(totalPrice + shippingPrice).toLocaleString()}원
        </div>
      </div>
      <Link to="/orders">
        <button className="totalPayButton">전체상품 주문하기</button>
      </Link>
      <Link to="/products?page=2&category=2">
        <button className="goToCategory">쇼핑 계속하기</button>
      </Link>
    </div>
  );
};

export default Cartaside;
