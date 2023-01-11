import React, { useEffect, useState } from 'react';
import './Category.scss';
import CategoryList from './CategoryItem';
import { API_BASE } from '../../apiData';


const CATEGORY = [
  { id: 1, category_name: '돼지' },
  { id: 2, category_name: '소' },
  { id: 3, category_name: '닭' },
  { id: 4, category_name: '우유' },
  { id: 5, category_name: '달걀' },
  { id: 6, category_name: '밀키트' },
];

const Category = () => {
  const [items, setItems] = useState([]);
  const [names, setNames] = useState('돼지');

  useEffect(() => {
    fetch(`${API_BASE}`)
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const categorySet = e => {
    setNames(e.target.id);
  };

  return (
    <div className="category">
      <img src="/images/grill.jpg" alt="메인이미지" />
      <ul className="categoryBtn">
        {CATEGORY.map(({ id, category_name }) => {
          return (
            <li
              key={id}
              id={category_name}
              className={'btn' + (names === category_name ? 'active' : '')}
              onClick={categorySet}
            >
              {category_name}
            </li>
          );
        })}
      </ul>
      <div className="itemList">
        <ul className="categoryItem">
          {items.map(({ id, name, price, category }) => {
            if (names === category) {
              return (
                <CategoryList key={id} id={id} name={name} price={price} />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
export default Category;
