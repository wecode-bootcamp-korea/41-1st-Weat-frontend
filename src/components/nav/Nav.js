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

  const moveToMyPage = () => {
    navigate('/mypage');
  };

  const handleLogin = () => {
    // const getToken = () => {
    //   localStorage.getItem('token');
    //   console.log(localStorage.getItem('token'));
    // };

    // isLoggedIn = getToken();

    setIsLoggedIn(!isLoggedIn);
    isLoggedIn ? moveToMain() : moveToLogin();
  };

  const handleLoginToMyPage = () => {
    if (!isLoggedIn) {
      alert('로그인 후 이용 가능합니다.');
    } else {
      moveToMyPage();
    }
  };

  const handleLoginToCart = () => {
    if (!isLoggedIn) {
      alert('로그인 후 이용 가능합니다.');
    } else {
      moveToCart();
    }
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
          <li>
            <button className="moveToMyPage" onClick={handleLoginToMyPage}>
              마이페이지
            </button>
          </li>
        </ul>
        <button onClick={handleLoginToCart} className="navLogo">
          <BsCart3 />
        </button>
      </div>
    </div>
  );
};

export default Nav;
