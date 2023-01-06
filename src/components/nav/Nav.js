import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const moveToLogin = () => {
    navigate('/Login');
  };
  const moveToMain = () => {
    navigate('/');
  };
  const moveToCart = () => {
    navigate('/Cart');
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    !isLoggedIn ? moveToLogin() : moveToMain();
    console.log(isLoggedIn);
  };

  return (
    <div className="nav">
      <div className="navLeft">
        <Link to="/" className="navLogo">
          <img src="/images/logo.png" alt="logo" />
          <p>WEAT</p>
        </Link>
        <ul className="navigate">
          <li>
            <Link to="/Category" className="moveToCategory">
              쇼핑하기
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <ul className="navigate">
          <li>
            {isLoggedIn ? (
              <button className="moveToMain" onClick={handleLogin}>
                로그아웃
              </button>
            ) : (
              <button className="moveToLogin" onClick={handleLogin}>
                로그인
              </button>
            )}
          </li>
          <li>
            <Link to="/Signup" className="moveToSignup">
              회원가입
            </Link>
          </li>
        </ul>
        <button onClick={moveToCart} className="navLogo">
          <BsCart3 />
        </button>
      </div>
    </div>
  );
};

export default Nav;
