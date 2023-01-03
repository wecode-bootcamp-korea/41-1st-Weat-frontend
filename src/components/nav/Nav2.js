import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import './Nav2.scss';

const Nav2 = () => {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate('/');
  };
  const moveToCategory = () => {
    navigate('/Category');
  };
  const moveToCart = () => {
    navigate('/Cart');
  };
  const moveToLogin = () => {
    navigate('/Login');
  };
  const moveToSignup = () => {
    navigate('/Signup');
  };

  return (
    <div className="nav">
      <div className="navLeft">
        <button onClick={moveToMain} className="navLogo">
          <img src="/images/logo.png" alt="logo"></img>
          <p>WEAT</p>
        </button>
        <ul className="navigate">
          <li>
            <button onClick={moveToCategory}>쇼핑하기</button>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <ul className="navigate">
          <li>
            <button onClick={moveToLogin}>로그인</button>
          </li>
          <li>
            <button onClick={moveToSignup}>회원가입</button>
          </li>
        </ul>
        <button onClick={moveToCart} className="navLogo">
          <BsCart3 />
        </button>
      </div>
    </div>
  );
};

export default Nav2;
