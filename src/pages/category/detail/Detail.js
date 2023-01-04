import React, { useState } from 'react';
import './Detail.scss';

const Detail = () => {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState('보통(16mm)');
  const handleDrop = () => {
    setOpen(!open);
  };
  const addCount = () => {
    setCount(count + 1);
  };
  const DecCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count <= 1) {
      setCount(count);
    }
  };
  const handleOption = e => {
    setOption(e.target.name);
    setOpen(false);
  };

  return (
    <div className="deatilPage">
      <div className="detailTop">
        <div className="detailImg" />
        <div className="meatInfo">
          <p className="meatName">초신선 돼지 삼겹살 구이용</p>
          <p className="meatPrice">100g당 3000원</p>
          <p className="meatPriceTotal">기준가 19,800원(600g)</p>
          <div className="detailOptionType">
            <span>옵션</span>
            <div className="selectOption">
              <button onClick={handleDrop} className="TypeCheckBox">
                {option}
              </button>
              {open ? (
                <ul className="menu">
                  <li className="menu-item">
                    <button onClick={handleOption} name="두껍게(24mm)">
                      두껍게(24mm)
                    </button>
                  </li>
                  <li className="menu-item">
                    <button onClick={handleOption} name="얇게(11mm)">
                      얇게(11mm)
                    </button>
                  </li>
                  <li className="menu-item">
                    <button onClick={handleOption} name="보통(16mm)">
                      보통(16mm)
                    </button>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          <div className="meatCountBox">
            <span>수량</span>
            <div className="meatCount">
              <button onClick={DecCount}>-</button>
              <span>{count}</span>
              <button onClick={addCount}>+</button>
            </div>
          </div>
          <div />
          <div className="oderBtn">
            <button className="buyBtn">바로구매</button>
            <button className="cartBtn">장바구니</button>
          </div>
        </div>
      </div>
      <div className="detailExplanation">
        <div>상품리뷰</div>
      </div>
      <div />
    </div>
  );
};

export default Detail;
