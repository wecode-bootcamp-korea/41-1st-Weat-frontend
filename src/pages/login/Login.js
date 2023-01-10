import React, { useState } from 'react';
import './Login.scss';
import '../../styles/common.scss';
import { API_BASE } from '../../apiData';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    setLoginData(preValue => {
      const { name, value } = event.target;
      return { ...preValue, [name]: value };
    });
  };

  const handleClick = () => {
    fetch(`${API_BASE}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div className="login">
      <h1 className="title">로그인</h1>
      <label className="inputLabel">이메일 로그인</label>
      <div className="input">
        <input
          name="email"
          value={loginData.email}
          className="inputData"
          type="text"
          placeholder="아이디(이메일 주소)를 입력하세요"
          onChange={handleChange}
        />
        <input
          name="password"
          value={loginData.password}
          className="inputData"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
        />
        <button onClick={handleClick} className="button" type="button">
          로그인
        </button>

        <span className="firstVisit">정육각은 처음이신가요?</span>
        <a href="" className="goToSignUp">
          회원가입하기
        </a>
      </div>
    </div>
  );
};

export default Login;
