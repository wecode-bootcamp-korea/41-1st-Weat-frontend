import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData(prevData => {
      return { ...prevData, [name]: value };
    });
  };

  /*const checkEmail = e => {
    fetch('http://10.58.52.137:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: userData.email,
      }),
    })
      .then(res => {
        if (res.status === 409) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }
      })
      .then(data => console.log(data));
  };*/

  const matchPassword = userData.password === userData.confirmPassword;
  const validEmail = !userData.email.includes('@') && userData.email.length > 0;
  const validPassword = /^[A-Za-z0-9]{8,20}$/;
  const validName = userData.userName.length > 0;
  const validNumber =
    (userData.secondNumber.length && userData.lastNumber.length) === 4;

  const handleClick = () => {
    /* if (!emailError) {
      return;
    }*/
    if (!matchPassword) {
      return;
    } else if (!validName) {
      setNameError(true);
    } else if (!validNumber) {
      setNumberError(true);
    } else {
      fetch('http://10.58.52.137:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          mobile: `${userData.firstNumber}${userData.secondNumber}${userData.lastNumber}`,
          userName: userData.userName,
        }),
      })
        .then(res => {
          if (res.ok) {
            alert('회원가입을 축하합니다.');
            navigate('/Login');
          }
        })
        .then(data => {});
    }
  };

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/Login');
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
            <div className="inputWrap">
              <input
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="inputContent"
                type="text"
              />
              {!validEmail ? (
                <p />
              ) : (
                <p className="errorMessage">올바른 이메일양식을 사용하세요.</p>
              )}
              {userData.email.length > 0 &&
                (emailError ? (
                  <p className="errorMessage">중복된 아이디입니다. </p>
                ) : (
                  <p className="errorMessage">사용가능한 아이디입니다.</p>
                ))}
            </div>
            <button
              // onClick={checkEmail}
              className="checkBtn"
              type="button"
            >
              아이디 중복확인
            </button>
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
              {userData.password.length > 0 &&
                (validPassword ? (
                  <p />
                ) : (
                  <p className="errorMessage">
                    숫자,알파벳,특수문자를 입력하시오.
                  </p>
                ))}
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
              <div className="errorMessage">
                {userData.confirmPassword.length > 0 &&
                  (matchPassword ? (
                    <p className="errorMessageTrue">비밀번호가 일치 합니다.</p>
                  ) : (
                    <p>비밀번호가 일치하지 않습니다.</p>
                  ))}
              </div>
            </div>
          </div>

          <div className="inputLine">
            <div className="inputData">이름</div>
            <div className="inputWrap">
              <input
                name="userName"
                value={userData.userName}
                onChange={handleChange}
                className="inputContent"
                type="text"
              />
              <div className="errorMessage">
                {nameError && <p>이름을 입력하세요.</p>}
              </div>
            </div>
          </div>
          <div className="inputLine">
            <div className="inputData">휴대폰번호</div>
            <div className="inputWrap">
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
              <div className="errorMessage">
                {numberError && <p>번호를 입력하세요.</p>}
              </div>
            </div>
          </div>
        </div>
        <button onClick={goToLogin} className="goToLogin" type="button">
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
