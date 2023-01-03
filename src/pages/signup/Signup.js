import React from 'react';
import './Signup.scss';

const Signup = () => {
  return (
    <div className="signUp">
      <h1 className="title">회원가입</h1>
      <img src="/images/contract.png" alt="write" />
      <div className="inputContainer">
        <label className="inputInfo">가입정보 입력</label>
        <div className="inputBox">
          <div className="inputLine">
            <div className="inputData">아이디(이메일주소)</div>
            <input className="inputContent" type="text" />
          </div>
          <div className="inputLine">
            <div className="inputData">비밀번호</div>
            <input className="inputContent" type="password" />
          </div>
          <div className="inputLine">
            <div className="inputData">비밀번호 확인</div>
            <input className="inputContent" type="password" />
          </div>
          <div className="inputLine">
            <div className="inputData">이름</div>
            <input className="inputContent" type="text" />
          </div>
          <div className="inputLine">
            <div className="inputData">휴대폰번호</div>
            <select>
              <option>010</option>
              <option>011</option>
              <option>016</option>
              <option>017</option>
              <option>019</option>
            </select>
            <input className="numberContent" type="text" />
            <input className="numberContent" type="text" />
          </div>
        </div>
        <button className="goToLogin" type="button">
          로그인으로
        </button>
        <button className="goToSignUp" type="button">
          가입하기
        </button>
      </div>
    </div>
  );
};

export default Signup;
