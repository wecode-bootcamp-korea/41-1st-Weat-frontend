import React from 'react';
import Cartcount from './Cartcount';
import Cartaside from './Cartaside';
import './Cart.scss';

export default function Cart() {
  return (
    <div className="cartMain">
      <div className="cartContainer">
        <div className="cartTitle">장바구니</div>
        <Cartcount />
      </div>
      <aside className="cartSideContents">
        <Cartaside />
      </aside>
    </div>
  );
}
