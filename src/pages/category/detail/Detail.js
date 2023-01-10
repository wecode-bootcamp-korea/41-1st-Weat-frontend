import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE } from '../../apiData';
import './Detail.scss';

const Detail = () => {
  const menuList = ['두껍게(24mm)', '얇게(11mm)', '보통(16mm)'];
  const [option, setOption] = useState('보통(16mm)');
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);

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

  // 백 통신

  const params = useParams();
  const userId = params.id;
  const [meat, setMeat] = useState({});

  useEffect(() => {
    fetch(`${API_BASE}/products/detail/${userId}`)
      .then(res => res.json())
      .then(data => setMeat(data.data[0]));
  }, [userId]);

  // 백 통신
  const { thumbnail_image, name, price } = meat;

  return (
    <div className="deatilPage">
      <div className="detailTop">
        <div className="detailImg">
          <img src={thumbnail_image} alt="썸네일 이미지" />
        </div>
        <div className="meatInfo">
          <p className="meatName">{name}</p>
          <p className="meatPrice">{Math.floor(price)}원</p>
          <p className="meatPriceTotal">{Math.floor(price)}원</p>
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
      <ul className="detailExplanation">
        <li>상품리뷰</li>
      </ul>
      <div />
    </div>
  );
};

export default Detail;
