import React, { useState } from 'react';
import './Signup.scss';

const Signup = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    firstNumber: '010',
    secondNumber: '',
    lastNumber: '',
  });

  //FullNumber = `${userData.firstNumber}${userData.secondNumber}${userData.lastNumber}`;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData(prevData => {
      return { ...prevData, [name]: value };
    });
  };

  const handleClick = () => {
    fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
        mobile: `userData.firstNumber userData.secondNumber userData.lastNumber`,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div className="signUp">
      <h1 className="title">회원가입</h1>
      <img src="/images/contract.png" alt="write" />
      <div className="inputContainer">
        <label className="inputInfo">가입정보 입력</label>
        <div className="inputBox">
          <div className="inputLine">
            <div className="inputData">아이디(이메일주소)</div>
            <input
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="inputContent"
              type="text"
            />
          </div>
          <div className="inputLine">
            <div className="inputData">비밀번호</div>
            <input
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="inputContent"
              type="password"
            />
          </div>
          <div className="inputLine">
            <div className="inputData">비밀번호 확인</div>
            <input
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
              className="inputContent"
              type="password"
            />
          </div>
          <div className="inputLine">
            <div className="inputData">이름</div>
            <input
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="inputContent"
              type="text"
            />
          </div>
          <div className="inputLine">
            <div className="inputData">휴대폰번호</div>
            <div className="inputNumber">
              <select
                name="firstNumber"
                value={userData.firstNumber}
                onChange={handleChange}
                className="phoneNumber"
              >
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="019">019</option>
              </select>
              <span className="numberIcon"> - </span>
              <input
                name="secondNumber"
                value={userData.secondNumber}
                onChange={handleChange}
                className="numberContent"
                type="text"
                maxLength={4}
              />
              <span className="numberIcon"> - </span>
              <input
                name="lastNumber"
                value={userData.lastNumber}
                onChange={handleChange}
                className="numberContent"
                type="text"
                maxLength={4}
              />
            </div>
          </div>
        </div>
        <button className="goToLogin" type="button">
          로그인으로
        </button>
        <button onClick={handleClick} className="goToSignUp" type="button">
          가입하기
        </button>
      </div>
    </div>
  );
};

export default Signup;
