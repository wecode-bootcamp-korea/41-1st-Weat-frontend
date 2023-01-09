import React from 'react';
import './Cartcount.scss';

const Cartcount = ({ value, onRemove, plusCount, minusCount }) => {
  return (
    <tbody>
      <tr className="cartItemList">
        <th className="cartItemImg">
          <img className="imgSize" src={value.img} alt="meat" />
        </th>
        <th className="cartItemName">
          <p>{value.name}</p>
          <span className="cartItemOption"> {value.option}</span>
        </th>
        <th className="cartItemWeight">{value.weight * value.count}g 기준</th>
        <th className="cartItemCount">
          <button className="clickMinusButton" onClick={minusCount}>
            -
          </button>
          {value.count}
          <button className="clickPlusButton" onClick={plusCount}>
            +
          </button>
        </th>
        <th className="cartItemPrice">
          {(value.price * value.count).toLocaleString()}원
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
