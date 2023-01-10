import React, { useState } from 'react';
import './Popup.scss';

const menuList = ['두껍게(24mm)', '얇게(11mm)', '보통(16mm)'];

const Popup = ({ onPopup, id, name, price }) => {
  const [count, setCount] = useState(1);
  const [detilOption, setDetailOption] = useState('보통(16mm)');
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
    setDetailOption(e.target.name);
    setOpen(false);
  };

  const handleDrop = () => {
    setOpen(true);
  };

  return (
    <div className="popup">
      <button onClick={onPopup} className="close">
        x
      </button>
      <div className="name">{name}</div>
      <div className="peace">
        <button onClick={decCount}> - </button>
        <div>{count}</div>
        <button onClick={addCount}> + </button>
      </div>
      <div className="detailOptionType">
        <span>옵션</span>
        <div className="selectOption">
          <button disabled={open} onClick={handleDrop} className="TypeCheckBox">
            {detilOption}
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

      <div className="price">{price}</div>
      <div className="btnList">
        <button className="buyBtn">바로구매</button>
        <button className="toCartBtn">장바구니</button>
      </div>
    </div>
  );
};

export default Popup;
