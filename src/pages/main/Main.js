import React, { useState, useEffect, useParams } from 'react';
import './Main.scss';
import Items from './Items.js';

const Main = () => {
  const [itemList, setItemList] = useState([]);
  //추후 반영 예정
  // const [count, setCount] = useState(1);
  // const [current, setCurrent] = useState(0);
  // const [style, setStyle] = useState({ marginLeft: `${current}00%` });

  useEffect(() => {
    fetch('http://10.58.52.76:3000/lists?best')
      .then(result => result.json())
      .then(data => setItemList(data.data));
  }, []);
  console.log(itemList);

  //추후 반영 예정
  // useEffect(() => {
  //   setStyle({ marginLeft: `${current}00%` });
  // }, [style]);

  // const handleIncrese = () => {
  //   count < 3 ? setCount(count + 1) && setCurrent(current + 2) : setCount(3);
  //   console.log(setCurrent, current);
  // };
  // const handleDecrese = () => {
  //   count > 1 ? setCount(count - 1) : setCount(1);
  // };

  return (
    <div className="main">
      <div className="flexbox">
        <img src="/images/meat.jpg" alt="meat" />
        <img src="/images/grill.jpg" alt="grill" />
        <img src="/images/porkbelly.jpg" alt="porkbelly" />
      </div>
      <div className="mainItemBox">
        <div className="mainBest">
          <p>WEAT 베스트 상품</p>
        </div>
        <ul className="mainItem">
          <Items itemList={itemList} />
        </ul>
      </div>
    </div>
  );
};

export default Main;
