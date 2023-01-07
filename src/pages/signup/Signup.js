import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
    firstNumber: '010',
    secondNumber: '',
    lastNumber: '',
  });

  const matchPassword = userData.password === userData.confirmPassword;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData(prevData => {
      return { ...prevData, [name]: value };
    });
  };

  /*const handleClick = () => {
    fetch('http://10.58.52.250:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
        mobile: `${userData.firstNumber}${userData.secondNumber}${userData.lastNumber}`,
        userName: userData.userName,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };*/

  return (
    <div className="signUp">
      <h1 className="title">회원가입</h1>
      <img src="/images/contract.png" alt="write" />
      <div className="inputContainer">
        <label className="inputInfo">가입정보 입력</label>
        <div className="inputBox">
          <div className="inputLine">
            <div className="inputData">아이디(이메일주소)</div>
            <div className="inputWrap">
              <input
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="inputContent"
                type="text"
              />
              <button className="checkBtn" type="button">
                아이디 중복확인
              </button>
            </div>
          </div>
          <div className="inputLine">
            <div className="inputData">비밀번호</div>
            <div className="inputWrap">
              <input
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="inputContent"
                type="password"
              />
            </div>
          </div>
          <div className="inputLine">
            <div className="inputData">비밀번호 확인</div>
            <div className="inputWrap">
              <input
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                className="inputContent"
                type="password"
              />
              <div className="passwordMessage">
                {userData.confirmPassword.length > 0 &&
                  (matchPassword ? (
                    <p className="passwordMessageTrue">
                      비밀번호가 일치 합니다.
                    </p>
                  ) : (
                    <p>비밀번호 일치하지 않습니다.</p>
                  ))}
              </div>
            </div>
          </div>

          <div className="inputLine">
            <div className="inputData">이름</div>
            <input
              name="userName"
              value={userData.userName}
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
        <button Link to="/Login" className="goToLogin" type="button">
          로그인으로
        </button>
        <button
          //   onClick={handleClick}
          className="goToSignUp"
          type="button"
        >
          가입하기
        </button>
      </div>
    </div>
  );
};
export default Signup;
