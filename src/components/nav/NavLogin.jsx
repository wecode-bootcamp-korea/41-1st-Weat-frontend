import React from 'react';
import { Link } from 'react-router-dom';

function NavLogin({ isLoggedIn, onClick }) {
  return isLoggedIn === true ? (
    <button onClick={onClick}>
      <Link to="/" className="moveToMain">
        로그아웃
      </Link>
    </button>
  ) : (
    <button onClick={onClick}>
      <Link to="/Login" className="moveToLogin">
        로그인
      </Link>
    </button>
  );
}

export default NavLogin;
