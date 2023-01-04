import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <h1 className="title">로그인</h1>
      <label className="inputLabel">이메일 로그인</label>
      <div className="input">
        <input
          className="email"
          type="text"
          placeholder="아이디(이메일 주소)를 입력하세요"
        />
        <input
          className="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button className="button" type="button">
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
