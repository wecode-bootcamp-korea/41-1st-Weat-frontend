import React, { useState } from 'react';
import './Detail.scss';
const Detail = () => {
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };
  const DecCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="deatilPage">
      <div className="detailTop">
        <div className="detailImg" />
        <div className="detailOption">
          <p className="detailOptionText1">초신선 돼지 삼겹살 구이용</p>
          <p className="detailOptionText2">100g당 3000원</p>
          <p className="detailOptionText3">기준가 19,800원(600g)</p>
          <div className="detailOptionType">
            <span>옵션</span>
            <div className="detailOptionTypeCheckBox">보통</div>
          </div>
          <div className="detailOptionPeaceCheckBox">
            <span>수량</span>
            <div className="detailOptionPeaceCheckBoxBtnArea">
              <button onClick={DecCount}>-</button>
              <span className="detailOptionPeaceCheckBoxPeace">{count}</span>
              <button onClick={addCount}>+</button>
            </div>
          </div>
          <div />
          <div className="deatilOptionBtn">
            <button className="navBtn1">바로구매</button>
            <button className="navBtn2">장바구니</button>
          </div>
        </div>
      </div>
      <div className="detailExplanation">
        <button>상품설명</button>
        <button>상품리뷰</button>
        <button>상품정보안내</button>
      </div>
      <div />
    </div>
  );
};

export default Detail;
