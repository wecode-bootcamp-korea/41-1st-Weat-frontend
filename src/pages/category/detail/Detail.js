import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE } from '../../../apiData';
import './Detail.scss';

const Detail = () => {
  const [option, setOption] = useState('옵션을 선택 해 주세요');
  const [optionNum, setOptionNum] = useState(1);
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
    setOptionNum(e.target.id);
    setOpen(false);
  };

  // 백 통신

  const params = useParams();
  const itemId = params.id;
  const [meat, setMeat] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/products/${itemId}`)
      .then(res => res.json())
      .then(data => setMeat(data.data[0]));
  }, [itemId]);

  const { thumbnail_image, name, price } = meat;
  const toCart = () => {
    if (option === '옵션을 선택 해 주세요') {
      alert('옵션을 선택 해 주세요');
    } else {
      fetch(`${API_BASE}/carts/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          productId: itemId,
          productOptionId: optionNum,
          quantity: count,
        }),
      })
        .then(res => res.json())
        .then();
    }
  };
  const optionList = meat.options;

  return (
    <div className="deatilPage">
      <div className="detailTop">
        <div className="detailImg">
          <img src={thumbnail_image} alt="썸네일 이미지" />
        </div>
        <div className="meatInfo">
          <p className="meatName">{name}</p>
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
                  optionList.map(({ option_id, option_name }) => {
                    return (
                      <li key={option_id}>
                        <button
                          className="menuItem"
                          id={option_id}
                          name={option_name}
                          onClick={handleOption}
                        >
                          {option_name}
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
            <button className="cartBtn" onClick={toCart}>
              장바구니
            </button>
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
