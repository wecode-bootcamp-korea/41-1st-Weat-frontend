import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="mainImg">
        <img src="/images/grill.jpg"></img>
      </div>
      <div className="mainItemBox">
        <div className="mainBest">
          <p>WEAT 베스트 상품</p>
        </div>
        <ul className="mainItem">
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

export default Main;
