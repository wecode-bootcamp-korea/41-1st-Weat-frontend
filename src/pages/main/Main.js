import React, { useState, useEffect } from 'react';
import './Main.scss';
import Item from './Item.js';
import { API_BASE } from '../../apiData';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Main = () => {
  const [itemList, setItemList] = useState([]);

  const [count, setCount] = useState(1);
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({ marginLeft: `${current}00%` });

  useEffect(() => {
    fetch(`${API_BASE}/products`)
      .then(result => result.json())
      .then(({ productList }) => setItemList(productList));
  }, []);

  useEffect(() => {
    setStyle({ marginLeft: `${current}00%` });
  }, [current]);

  const handleIncrese = () => {
    count < 3 ? setCount(count + 1) : setCount(3);
    if (count === 1) {
      setCurrent(current - 2);
    } else if (count === 2) {
      setCurrent(current - 2);
    }
  };
  const handleDecrese = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
    if (count === 2) {
      setCurrent(current + 2);
    } else if (count === 3) {
      setCurrent(current + 2);
    }
  };

  return (
    <div className="main">
      <div className="mainImg" style={style}>
        <div className="flexBox">
          <img src="/images/slide1.jpg" alt="meat" />
          <img src="/images/grill.jpg" alt="grill" />
          <img src="/images/porkbelly.jpg" alt="porkbelly" />
        </div>
      </div>
      <div className="slideWrap">
        <button onClick={handleDecrese}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span>
          <b>{count}</b> / 3
        </span>
        <button onClick={handleIncrese}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="mainItemBox">
        <div className="mainBest">
          <p>WEAT 베스트 상품</p>
        </div>
        <ul className="mainItem">
          {itemList.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
