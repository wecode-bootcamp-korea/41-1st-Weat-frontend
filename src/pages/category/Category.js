import React, { useEffect, useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Category.scss';

const CATEGORY = [
  { id: 1, name: '돼지' },
  { id: 2, name: '소' },
  { id: 3, name: '닭' },
  { id: 4, name: '우유' },
  { id: 5, name: '달걀' },
  { id: 6, name: '밀키트' },
];

const Category = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('돼지');

  useEffect(() => {
    fetch('/data/dataCartegory.json')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const categorySet = e => {
    setName(e.target.id);
  };

  return (
    <div className="category">
      <img src="/images/grill.jpg" alt="메인이미지" />
      <ul className="categoryBtn">
        {CATEGORY.map((i, key) => {
          return (
            <li
              key={key}
              id={i.name}
              className={'btn' + (name === i.name ? 'active' : '')}
              onClick={categorySet}
            >
              {i.name}
            </li>
          );
        })}
      </ul>
      <div className="itemList">
        <ul className="categoryItem">
          {items.map(meat => {
            return (
              <li key={meat.id}>
                <div className="items">
                  <Link to="/Category/Detail">
                    <img src="/images/meat.jpg" alt="고기사진" />
                  </Link>
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <div>
                  <p className="itemName">{meat.name}</p>
                  <p className="itemPrice">{meat.price}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Category;
