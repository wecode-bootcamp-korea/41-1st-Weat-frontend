import React, { useState, useEffect } from 'react';
import Cartcount from './Cartcount';
import Cartaside from './Cartaside';
import './Cart.scss';

export default function Cart() {
  const [cartData, setCartData] = useState([]);

  const onRemove = id => {
    setCartData(cartData.filter(value => value.id !== id));
  };

  useEffect(() => {
    fetch('/data/meatData.json')
      .then(result => result.json())
      .then(data => setCartData(data));
  }, []);

  return (
    <div className="cartMain">
      <div className="cartTitle">장바구니</div>
      <div className="cartContainer">
        <table className="cartItems">
          <thead>
            <tr className="cartItemTitle">
              <th className="cartItemTitleImg">이미지</th>
              <th className="cartItemTitleName">상품정보</th>
              <th className="cartItemTitleWeight">무게</th>
              <th className="cartItemTitleCount">수량</th>
              <th className="cartItemTitlePrice">가격</th>
              <th className="cartItemTitleRemove">취소</th>
            </tr>
          </thead>
          {cartData.map(data => {
            return (
              <Cartcount
                value={data}
                key={data.id}
                onRemove={onRemove}
                cartData={cartData}
              />
            );
          })}
        </table>
        <aside className="cartSideContents">
          <Cartaside />
        </aside>
      </div>
    </div>
  );
}
