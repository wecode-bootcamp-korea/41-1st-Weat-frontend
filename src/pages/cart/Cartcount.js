import React, { useState } from 'react';

const Cartcount = ({ value, onRemove, array }) => {
  const [count, setCount] = useState(0);

  return (
    <tbody>
      <tr className="itemList">
        <th className="itemImg">
          <img src={value.img} alt="meat" />
        </th>
        <th className="itemName">
          <p>{value.name}</p>
          <span className="itemOption"> {value.option}</span>
        </th>
        <th className="itemWeight">{value.weight * count}g 기준</th>
        <th className="itemCount">
          <button
            className="clickMinusButton"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          {count}
          <button
            className="clickPlusButton"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </th>
        <th className="itemPrice">{value.price * count}원</th>
        <th className="itemRemove">
          <button
            onClick={() => {
              onRemove(value.id);
            }}
            className="itemRemoveButton"
            array={array}
          >
            x
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default Cartcount;
