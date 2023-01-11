import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import './Nav.scss';
import { API_BASE } from '../../apiData';

const Nav = () => {
  const [cartList, setCartList] = useState([]);

  const navigate = useNavigate();

  const isToken = Boolean(localStorage.getItem('token'));

  useEffect(() => {
    fetch(`${API_BASE}/carts`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => setCartList(data));
  }, []);

  const moveToLogin = () => {
    navigate('/Login');
  };
  const moveToMain = () => {
    navigate('/');
  };
  const moveToCart = () => {
    navigate('/Cart');
  };

  const handleLogout = () => {
    localStorage.clear();
    moveToMain();
    alert('로그아웃 되었습니다.');
    window.location.reload();
  };

  const handleMoveToCart = () => {
    if (isToken) {
      moveToCart();
    } else {
      alert('로그인 후 이용 가능합니다.');
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
            {isToken ? (
              <button className="moveToMain" onClick={handleLogout}>
                로그아웃
              </button>
            ) : (
              <button className="moveToLogin" onClick={moveToLogin}>
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
        <button className="navLogo" onClick={handleMoveToCart}>
          <BsCart3 />
        </button>
        <button className="cartCount">{cartList.length}</button>
      </div>
    </div>
  );
};

export default Nav;
