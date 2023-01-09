import React, { useEffect, useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Link, useSearchParams } from 'react-router-dom';
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
  const [itemLength, setItemLength] = useState();
  const [names, setNames] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const page = searchParams.get('page');

  useEffect(() => {
    fetch(`http://10.58.52.137:3000/products?${searchParams.toString()}`)
      .then(res => res.json())
      .then(({ productList, listLength }) => {
        setItemLength(listLength);
        setItems(productList);
      });
  }, [category, page]);

  const categorySet = id => {
    setNames(id);
    searchParams.set('category', id);
    setSearchParams(searchParams);
  };

  const movePage = pageNumber => {
    searchParams.set('page', pageNumber);
    setSearchParams(searchParams);
  };

  let num = Math.ceil(itemLength / 6);

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
          {items.map(({ id, name, price, thumbnail_image }) => {
            return (
              <li key={id}>
                <div className="items">
                  <Link to={`/Category/Detail/${id}`}>
                    <img src={thumbnail_image} alt="고기사진" />
                  </Link>
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <div>
                  <p className="itemName">{name}</p>
                  <p className="itemPrice">{price}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {Array(num)
          .fill()
          .map(i => {
            return (
              <button onClick={() => movePage(i + 1)} key={i + 1}>
                {i}
              </button>
            );
          })}
      </div>
    </div>
  );
};
export default Category;
