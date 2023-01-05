import React, { useState, useEffect } from 'react';
import './Main.scss';
import Items from './Items.js';

const Main = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('/data/dataCartegory.json')
      .then(result => result.json())
      .then(data => setItemList(data));
  }, []);

  return (
    <div className="main">
      <div className="mainImg">
        <img src="/images/grill.jpg" />
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
