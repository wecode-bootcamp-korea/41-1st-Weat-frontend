import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API_BASE } from '../../apiData';
import CategoryItem from './CategoryItem';
import './Category.scss';

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
  const [itemLength, setItemLength] = useState(0);
  const [names, setNames] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  const categorySet = id => {
    setNames(id);
    searchParams.set('category', id);
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    // 백 통신으로 전체 아이템 혹은 카테고리나 페이지 별로 불러오기
    fetch(`${API_BASE}/products?${searchParams.toString()}`)
      .then(res => res.json())
      .then(({ productList, listLength }) => {
        setItemLength(listLength);
        setItems(productList);
      });
  }, [searchParams]);

  const movePage = pageNumber => {
    searchParams.set('page', pageNumber);
    setSearchParams(searchParams);
  };

  const num = Math.ceil(itemLength / 6);

  return (
    <div className="category">
      <img src="/images/grill.jpg" alt="메인이미지" />
      <ul className="categoryBtn">
        {CATEGORY.map(({ category_name, id }) => {
          return (
            <li
              key={id}
              id={id}
              className={'btn' + (names === id ? 'active' : '')}
              onClick={() => categorySet(id)}
            >
              {category_name}
            </li>
          );
        })}
      </ul>
      <div className="itemList">
        <ul className="categoryItem">
          {items.map(({ id, name, price, category, thumbnail_img }) => {
            if (names === category) {
              return (
                <CategoryItem
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  thumbnail_img={thumbnail_img}
                />
              );
            }
          })}
        </ul>
      </div>
      <div>
        {Array(num)
          .fill()
          .map((_, item) => {
            return (
              <button
                className="pageNum"
                onClick={() => movePage(item + 1)}
                key={item + 1}
                disabled={page === num}
              >
                {item + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};
export default Category;
