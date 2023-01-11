import React, { useState } from 'react';
import './Popup.scss';

const menuList = ['두껍게(24mm)', '얇게(11mm)', '보통(16mm)'];

const Popup = ({ onPopup, item }) => {
  const [count, setCount] = useState(1);
  const [detilOption, setDetailOption] = useState('보통(16mm)');
  const [toCart, setToCart] = useState(false);

  const addCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count <= 1) {
      setCount(1);
    }
  };

  const handleOption = e => {
    setDetailOption(e.target.name);
    setToCart(false);
  };

  const handleDrop = () => {
    setToCart(true);
  };

  return (
    <div className="popup">
      <button onClick={onPopup} className="close">
        x
      </button>
      <div className="name">{item.name}</div>
      <div className="peace">
        <button onClick={decCount}> - </button>
        <div>{count}</div>
        <button onClick={addCount}> + </button>
      </div>
      <div className="detailOptionType">
        <span>옵션</span>
        <div className="selectOption">
          <button
            disabled={toCart}
            onClick={handleDrop}
            className="TypeCheckBox"
          >
            {detilOption}
          </button>
          <ul className="menu">
            {toCart &&
              menuList.map((menu, key) => {
                return (
                  <li key={key}>
                    <button
                      className="menuItem"
                      name={menu}
                      onClick={handleOption}
                    >
                      {menu}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <div className="price">{item.price}</div>
      <div className="btnList">
        <button className="buyBtn">바로구매</button>
        <button className="toCartBtn">장바구니</button>
      </div>
    </div>
  );
};

export default Popup;
