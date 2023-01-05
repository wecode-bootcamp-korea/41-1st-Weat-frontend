import React from 'react';
import './Cart.scss';
import Cartcount from './Cartcount';

export default function Cart() {
  return (
    <div className="cartMain">
      <div className="cartContainer">
        <div className="cartTitle">장바구니</div>
        <section className="cartList">
          <div className="cartListTitle">
            <span className="cartListTitleItemName">상품정보</span>
            <span className="cartListTitleWeight">무게</span>
            <span className="cartListTitleCount">수량</span>
            <span className="cartListTitlePrice">가격</span>
          </div>
        </section>
        <Cartcount />
      </div>
      <aside className="cartSideContents">
        <div className="cartItemTotal">
          <div className="cartItemTotalPrice">
            <div className="cartItemTotalPriceText">총 상품 금액</div>
            <div className="cartItemTotalPriceNum">15,400원</div>
          </div>
          <div className="cartItemShippingPriceContainer">
            <div className="cartItemTotalShippingPrice">
              <div className="cartItemTotalShippingPriceText">총 배송비</div>
              <div className="cartItemTotalShippingPriceNum">3,500원</div>
            </div>
            <div className="cartItemBasicShippingPrice">
              <div className="cartItemBasicShippingPriceText">기본 배송비</div>
              <div className="cartItemBasicShippingPriceNum">3,500원</div>
            </div>
          </div>
          <div className="cartItemExpectTotalPriceContainer">
            <div className="cartItemExpectTotalPrice">예상 결제 금액</div>
            <div className="cartItemTotalPriceBold">15,400원</div>
          </div>
          <button className="totalPayButton">전체상품 주문하기</button>
          <button className="goToCategory">쇼핑 계속하기</button>
        </div>
      </aside>
    </div>
  );
}
