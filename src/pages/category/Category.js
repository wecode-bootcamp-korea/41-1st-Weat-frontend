import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './Category.scss';
const Category = () => {
  const navigate = useNavigate();
  const MoveToDetail = () => {
    navigate('/Category/Detail');
  };
  return (
    <div className="category">
      <div className="categoryImg">
        <img src="/images/meat.jpg" alt="#" />
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

      <ul className="categoryItem">
        <div onClick={MoveToDetail}>
          <li>
            <img src="/images/meat.jpg" alt="#" />
            <button>
              <BsCart3 />
            </button>
          </li>
          <p>초신선 돼지 삼겹살 구이용</p>
          <p>기준가 19,800원/600g</p>
        </div>
        <div onClick={MoveToDetail}>
          <li>
            <img src="/images/meat.jpg" alt="#" />
            <button>
              <BsCart3 />
            </button>
          </li>
          <p>초신선 돼지 삼겹살 구이용</p>
          <p>기준가 19,800원/600g</p>
        </div>
        <div onClick={MoveToDetail}>
          <li>
            <img src="/images/meat.jpg" alt="#" />
            <button>
              <BsCart3 />
            </button>
          </li>
          <p>초신선 돼지 삼겹살 구이용</p>
          <p>기준가 19,800원/600g</p>
        </div>
        <div onClick={MoveToDetail}>
          <li>
            <img src="/images/meat.jpg" alt="#" />
            <button>
              <BsCart3 />
            </button>
          </li>
          <p>초신선 돼지 삼겹살 구이용</p>
          <p>기준가 19,800원/600g</p>
        </div>
        <div onClick={MoveToDetail}>
          <li>
            <img src="/images/meat.jpg" alt="#" />
            <button>
              <BsCart3 />
            </button>
          </li>
          <p>초신선 돼지 삼겹살 구이용</p>
          <p>기준가 19,800원/600g</p>
        </div>
      </ul>
    </div>
  );
};
export default Category;
