import React, { useState } from 'react';
import './Popup.scss';

const menuList = ['두껍게(24mm)', '얇게(11mm)', '보통(16mm)'];

const Popup = props => {
  const [count, setCount] = useState(1);
  const [option, setOption] = useState('보통(16mm)');
  const [open, setOpen] = useState(false);

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
    setOption(e.target.name);
    setOpen(false);
  };

  const handleDrop = () => {
    setOpen(true);
  };

  return (
    <div className="popup">
      <button onClick={props.onPopup} className="close">
        x
      </button>
      <div className="name">{props.name}</div>
      <div className="peace">
        <button onClick={decCount}>-</button>
        <div>{count}</div>
        <button onClick={addCount}>+</button>
      </div>
      <div className="detailOptionType">
        <span>옵션</span>
        <div className="selectOption">
          <button disabled={open} onClick={handleDrop} className="TypeCheckBox">
            {option}
          </button>
          <ul className="menu">
            {open &&
              menuList.map((i, key) => {
                return (
                  <li key={key}>
                    <button
                      className="menuItem"
                      name={i}
                      onClick={handleOption}
                    >
                      {i}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <div className="price">{props.price}</div>
      <div className="btnList">
        <button className="buyBtn">바로구매</button>
        <button className="toCartBtn">장바구니</button>
      </div>
    </div>
  );
};

export default Popup;
