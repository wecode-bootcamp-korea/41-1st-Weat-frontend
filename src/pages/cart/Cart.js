import React, { useState, useEffect } from 'react';
import Cartcount from './Cartcount';
import Cartaside from './Cartaside';
import './Cart.scss';
import { API_BASE } from '../../apiData';

export default function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/carts`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(result => result.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

  const orderPage = () => {
    fetch(`${API_BASE}/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        productId: cartData.productName,
        productOptionId: cartData.optionName,
        quantity: cartData.quantity,
      }),
    })
      .then(result => result.json())
      .then(data => {
        setCartData(data);
      });
  };

  const onRemove = id => {
    setCartData(cartData.filter(value => value.id !== id));
    fetch(`${API_BASE}/carts/id`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    });
  };

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
            return <Cartcount key={data.id} value={data} onRemove={onRemove} />;
          })}
        </table>
        <aside className="cartSideContents">
          <Cartaside orderPage={orderPage} totalPrice={totalPrice} />
        </aside>
      </div>
    </div>
  );
}
