import React, { useEffect, useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './Category.scss';

const Category = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const MoveToDetail = () => {
    navigate('/Category/Detail');
  };

  useEffect(() => {
    fetch('/data/dataCartegory.json')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="category">
      <div className="categoryImg">
        <img src="/images/grill.jpg" alt="#" />
      </div>
      <ul className="categoryBtn">
        <li>돼지</li>
        <li>소</li>
        <li>닭</li>
        <li>수산</li>
        <li>밀키트</li>
        <li>우유</li>
        <li>달걀</li>
        <li>이유식</li>
      </ul>
      <div className="itemList">
        <ul className="categoryItem">
          {items.map((i, key) => {
            return (
              <li key={key}>
                <div className="items" onClick={MoveToDetail}>
                  <img src="/images/meat.jpg" alt="#" />
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <div>
                  <p className="itemName">{i.name}</p>
                  <p className="itemPrice">{i.price}</p>
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
