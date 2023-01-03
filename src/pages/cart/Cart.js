import React from 'react';
import './Cart.scss';

export default function Cart() {
  return (
    // <Nav />
    <div className="cartMain">
      <div className="cartContainer">
        <div className="cartTitle">장바구니</div>
        <section className="cartList">
          <div className="cartListTitle">
            <span className="cartListTitleBlankImg"></span>
            <span className="cartListTitleItemName">상품정보</span>
            <span className="cartListTitleWeight">무게</span>
            <span className="cartListTitleCount">수량</span>
            <span className="cartListTitlePrice">가격</span>
            <span className="cartListTitleBlankRemove"></span>
          </div>
        </section>
        <div className="cartItem">
          <img className="cartItemImg" src="./images/meat.jpg" alt="meat" />
          <div className="cartItemNameContainer">
            <p className="cartItemName">초신선 돼지 삼겹살 구이용</p>
            <div className="cartItemOption">보통 16mm</div>
          </div>
          <div className="cartItemWeight">300g기준</div>
          <div className="cartItemCountContainer">
            <div className="cartItemCount">
              <button className="countClickMinus">-</button>
              <p className="cartItemCounterNum">1</p>
              <button className="countClickPlus">+</button>
            </div>
          </div>
          <div className="cartItemPrice">7,700원</div>
          <button className="cartItemRemove">x</button>
        </div>
      </div>
      <aside className="cartSideContents">
        <div className="cartSideContainer">
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
