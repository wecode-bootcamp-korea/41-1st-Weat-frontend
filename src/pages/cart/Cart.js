import React, { useState, useEffect } from 'react';
import Cartcount from './Cartcount';
import Cartaside from './Cartaside';
import './Cart.scss';

export default function Cart() {
  const [cartData, setCartData] = useState([]);

  const onRemove = id => {
    setCartData(cartData.filter(value => value.id !== id));
  };

  const changeCount = (index, offset) => {
    setCartData(prev => {
      return prev.map((item, i) => {
        if (i === index) {
          item.quantity += offset;
          if (item.quantity < 0) {
            item.quantity = 0;
          }
        }
        return item;
      });
    });
  };

  useEffect(() => {
    fetch('/data/meatData.json')
      .then(result => result.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

  const totalPrice =
    cartData.reduce((prev, cur) => {
      prev += cur.price * cur.quantity;
      return prev;
    }, 0) || 0;

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
          {cartData.map((data, index) => {
            return (
              <Cartcount
                key={data.id}
                value={data}
                onRemove={onRemove}
                plusCount={() => changeCount(index, 1)}
                minusCount={() => changeCount(index, -1)}
              />
            );
          })}
        </table>
        <aside className="cartSideContents">
          <Cartaside totalPrice={totalPrice} />
        </aside>
      </div>
    </div>
  );
}
