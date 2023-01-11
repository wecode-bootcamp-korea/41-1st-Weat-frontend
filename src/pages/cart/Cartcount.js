import React from 'react';
import './Cartcount.scss';

const Cartcount = ({ value, onRemove, plusCount, minusCount }) => {
  return (
    <tbody>
      <tr className="cartItemList">
        <th className="cartItemImg">
          <img className="imgSize" src={value.thumbnail} alt="meat" />
        </th>
        <th className="cartItemName">
          <p className="cartItemNameTitle">{value.productId}</p>
          <span className="cartItemOption"> {value.productOptionId}</span>
        </th>
        <th className="cartItemWeight">
          {(value.baseUnit * value.quantity).toLocaleString()}g 기준
        </th>
        <th className="cartItemCount">
          <button className="clickMinusButton" onClick={minusCount}>
            -
          </button>
          {value.quantity || 0}
          <button className="clickPlusButton" onClick={plusCount}>
            +
          </button>
        </th>
        <th className="cartItemPrice">
          {(value.price * value.quantity).toLocaleString()}원
        </th>
        <th className="cartItemRemove">
          <button
            onClick={() => {
              onRemove(value.id);
            }}
            className="cartItemRemoveButton"
          >
            x
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default Cartcount;
