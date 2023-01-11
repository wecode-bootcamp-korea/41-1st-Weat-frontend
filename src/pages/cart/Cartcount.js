import React, { useState } from 'react';
import './Cartcount.scss';
const Cartcount = ({ value, onRemove }) => {
  const [count, setCount] = useState(0);
  const countBtn = e => {
    if (e.target.id === 1) {
      setCount(value.quantity - 1);
    } else {
      setCount(value.quantity + 1);
    }
  };
  return (
    <tbody>
      <tr className="cartItemList">
        <th className="cartItemImg">
          <img className="imgSize" src={value.thumbnail} alt="meat" />
        </th>
        <th className="cartItemName">
          <p className="cartItemNameTitle">{value.productName}</p>
          <span className="cartItemOption"> {value.productOptionName}</span>
        </th>
        <th className="cartItemWeight">{value.baseUnit} 기준</th>
        <th className="cartItemCount">
          <button className="clickMinusButton" id="1" onClick={countBtn}>
            -
          </button>
          {count}
          <button className="clickPlusButton" id="2" onClick={countBtn}>
            +
          </button>
        </th>
        <th className="cartItemPrice">
          {(value.price * count).toLocaleString()}원
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
