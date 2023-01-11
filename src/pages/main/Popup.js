import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE } from '../../apiData';
import './Popup.scss';

const menuList = ['보통(16mm)', '얇게(11mm)', '두껍게(24mm)'];

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

      <div className="price">{parseInt(item.price)}원</div>
      <div className="btnList">
        <button className="buyBtn">바로구매</button>
        <button
          className="toCartBtn"
          onClick={useEffect(() => {
            fetch(`${API_BASE}/carts`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authoriztion: localStorage.getItem('token'),
              },
              body: JSON.stringify({
                productId: item.id,
                productOptionId: detilOption,
                quantity: count,
              }),
            }).then(response => response.json());
          }, [count, detilOption])}
        >
          장바구니
        </button>
      </div>
    </div>
  );
};

export default Popup;
