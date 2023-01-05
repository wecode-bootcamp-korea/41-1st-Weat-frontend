import React from 'react';

const Cartcount = () => {
  return (
    <section className="cartList">
      <div className="cartListTitle">
        <span className="cartListTitleItemName">상품정보</span>
        <span className="cartListTitleWeight">무게</span>
        <span className="cartListTitleCount">수량</span>
        <span className="cartListTitlePrice">가격</span>
      </div>
      <div className="cartItem">
        <img className="cartItemImg" src="" alt="meat" />
        <div className="cartItemNameContainer">
          <p className="cartItemName">삼겹살</p>
          <div className="cartItemOption">얇게 13g</div>
        </div>
        <div className="cartItemWeight">300g 기준</div>
        <div className="cartItemCountContainer">
          <div className="cartItemCount">
            <button className="countClickMinus">-</button>
            <p className="cartItemCounterNum">1</p>
            <button className="countClickPlus">+</button>
          </div>
        </div>
        <div className="cartItemPrice">1,000원</div>
        <button className="cartItemRemove">x</button>
      </div>
    </section>
  );
};

export default Cartcount;
