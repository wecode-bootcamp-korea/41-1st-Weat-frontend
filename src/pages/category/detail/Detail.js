import React, { useState } from 'react';
import './Detail.scss';

const Detail = () => {
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };
  const DecCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else if (count <= 0) {
      setCount(count);
    }
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
            <div className="TypeCheckBox">보통</div>
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
