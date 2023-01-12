import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentList from './PaymentList';
import { API_BASE } from '../../apiData';
import './Payment.scss';
const Payment = () => {
  const navigate = useNavigate();
  const [fromData, setFromData] = useState([]);
  const [toData, setToData] = useState({
    userName: '',
    mobile: '',
    address: '',
  });
  useEffect(() => {
    fetch(`${API_BASE}/users/userinfo`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(result => result.json())
      .then(data => {
        setFromData(data[0]);
      });
  }, []);
  const handelChange = e => {
    const { name, value } = e.target;
    setToData(prev => {
      return { ...prev, [name]: value };
    });
  };
  const goToOrder = () => {
    return fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        toName: toData.userName,
        toMobile: toData.mobile,
        toAddress: toData.address,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        alert('주문이 완료되었습니다.');
        return data.orderId;
      });
  };
  return (
    <div className="payment">
      <h1 className="title">주문하기</h1>
      <div className="info">
        <img src="/images/contract.png" alt="write" />
        <span className="orderInfo">배송지 정보</span>
        <img src="/images/next.png" alt="write" />
        <div className="blur">
          <img src="/images/payment.png" alt="write" />
          <span className="orderInfo">결제 정보</span>
        </div>
      </div>
      <div className="box">
        <div className="inputContainer">
          <label className="sendTitle">보내시는분</label>
          <div className="inputBox">
            <table className="table">
              <tbody>
                <tr>
                  <td className="index">
                    <div className="indexName">이름</div>
                  </td>
                  <td className="indexInfo">
                    <div className="indexInfoName">{fromData.username}</div>
                  </td>
                </tr>
                <tr>
                  <td className="index">
                    <div className="indexName">이메일</div>
                  </td>
                  <td className="indexInfo">
                    <div className="indexInfoName">{fromData.email}</div>
                  </td>
                </tr>
                <tr>
                  <td className="index">
                    <div className="indexName">전화번호</div>
                  </td>
                  <td className="indexInfo">
                    <div className="indexInfoName">{fromData.mobile}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="inputContainer">
          <label className="sendTitle">받으시는분</label>
          <div className="inputBox">
            <table className="table">
              <tbody>
                <tr>
                  <td className="index">
                    <div className="indexName">이름</div>
                  </td>
                  <td className="indexInfo">
                    <div className="indexInfoName">
                      <input
                        name="userName"
                        value={toData.userName}
                        onChange={handelChange}
                        className="getInfo"
                        type="text"
                        placeholder="이름을 입력하세요."
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="index">
                    <div className="indexName">전화번호</div>
                  </td>
                  <td className="indexInfo">
                    <div className="indexInfoName">
                      <input
                        name="mobile"
                        value={toData.mobile}
                        onChange={handelChange}
                        className="getInfo"
                        type="text"
                        placeholder="전화번호를 입력하세요."
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="index">
                    <div className="indexName">주소</div>
                  </td>
                  <td className="indexInfo">
                    <div className="indexInfoName">
                      <input
                        name="address"
                        value={toData.address}
                        onChange={handelChange}
                        className="getInfo"
                        type="text"
                        placeholder="주소를 입력하세요."
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <PaymentList point={fromData.point} />
        <button className="goToBack" type="button">
          이전으로
        </button>
        <button
          onClick={() => {
            goToOrder().then(data => navigate(`/PaymentFinal/${data}`));
          }}
          className="goToNext"
          type="button"
        >
          다음으로
        </button>
      </div>
    </div>
  );
};
export default Payment;
