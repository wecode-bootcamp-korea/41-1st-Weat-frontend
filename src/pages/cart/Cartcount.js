import React from 'react';
import './Cartcount.scss';
const Cartcount = ({ index, value, onRemove, onChange }) => {
  const {
    thumbnail,
    productName,
    productOptionName,
    baseUnit,
    quantity,
    price,
    cartId,
  } = value;

  return (
    <tbody>
      <tr className="cartItemList">
        <th className="cartItemImg">
          <img className="imgSize" src={thumbnail} alt="meat" />
        </th>
        <th className="cartItemName">
          <p className="cartItemNameTitle">{productName}</p>
          <span className="cartItemOption"> {productOptionName}</span>
        </th>
        <th className="cartItemWeight">{baseUnit}기준</th>
        <th className="cartItemCount">
          <button
            className="clickMinusButton"
            onClick={() => onChange(index, -1)}
          >
            -
          </button>
          {quantity}
          <button
            className="clickPlusButton"
            onClick={() => onChange(index, +1)}
          >
            +
          </button>
        </th>
        <th className="cartItemPrice">
          {(price * quantity).toLocaleString()}원
        </th>
        <th className="cartItemRemove">
          <button
            onClick={() => {
              onRemove(cartId);
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
