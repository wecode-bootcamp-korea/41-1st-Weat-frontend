import React, { useEffect, useState } from 'react';
import './Detail.scss';

const Detail = () => {
  const menuList = ['두껍게(24mm)', '얇게(11mm)', '보통(16mm)'];
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const [dataList, setDataList] = useState({});
  const [option, setOption] = useState('보통(16mm)');

  const handleDrop = () => {
    setOpen(true);
  };

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

  useEffect(() => {
    fetch('/data/mockdata.json')
      .then(res => res.json())
      .then(data => setDataList(data[0]));
  }, []);

  return (
    <div className="deatilPage">
      <div className="detailTop">
        <div className="detailImg" />
        <div className="meatInfo">
          <p className="meatName">{dataList.name}</p>
          <p className="meatPrice">{dataList.weight}</p>
          <p className="meatPriceTotal">{dataList.price}</p>
          <div className="detailOptionType">
            <span>옵션</span>
            <div className="selectOption">
              <button
                disabled={open}
                onClick={handleDrop}
                className="TypeCheckBox"
              >
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
          <div className="meatCountBox">
            <span>수량</span>
            <div className="meatCount">
              <button onClick={decCount}>-</button>
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
