import React from 'react';
import { BsCart3 } from 'react-icons/bs';
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
          <div>
            <li>
              <img src="/images/meat.jpg"></img>
              <button>
                <BsCart3 />
              </button>
            </li>
            <p>초신선 돼지 삼겹살 구이용</p>
            <p>기준가 19,800원/600g</p>
          </div>
          <div>
            <li>
              <img src="/images/meat.jpg"></img>
              <button>
                <BsCart3 />
              </button>
            </li>
            <p>초신선 돼지 삼겹살 구이용</p>
            <p>기준가 19,800원/600g</p>
          </div>
          <div>
            <li>
              <img src="/images/meat.jpg"></img>
              <button>
                <BsCart3 />
              </button>
            </li>
            <p>초신선 돼지 삼겹살 구이용</p>
            <p>기준가 19,800원/600g</p>
          </div>
          <div>
            <li>
              <img src="/images/meat.jpg"></img>
              <button>
                <BsCart3 />
              </button>
            </li>
            <p>초신선 돼지 삼겹살 구이용</p>
            <p>기준가 19,800원/600g</p>
          </div>
          <div>
            <li>
              <img src="/images/meat.jpg"></img>
              <button>
                <BsCart3 />
              </button>
            </li>
            <p>초신선 돼지 삼겹살 구이용</p>
            <p>기준가 19,800원/600g</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Category;
