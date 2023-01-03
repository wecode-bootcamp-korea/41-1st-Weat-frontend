import React from 'react';
import './Category.scss';

const Category = () => {
  return (
    <div className="category">
      <div className="categoryImg">
        <img src="/images/meat.jpg"></img>
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
      <div className="categoryItemBox">
        <ul className="categoryItem">
          <li>
            <img src="/images/meat.jpg"></img>
            <button>a</button>
          </li>
          <li>
            <img></img>
            <button>a</button>
          </li>
          <li>
            <img></img>
            <button>a</button>
          </li>
          <li>
            <img></img>
            <button>a</button>
          </li>
          <li>
            <img></img>
            <button>a</button>
          </li>
          <li>
            <img></img>
            <button>a</button>
          </li>
          <li>
            <img></img>
            <button>a</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
