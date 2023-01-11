import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentList from './PaymentList';
import { API_BASE } from '../../apiData';
import './Payment.scss';

const Payment = () => {
  const [fromData, setFromData] = useState([]);

  const [toData, setToData] = useState({
    userName: '',
    mobile: '',
    address: '',
  });

  useEffect(() => {
    fetch(`${API_BASE}/signup`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(result => result.json())
      .then(data => {
        // setFromData.email(data.email);
        // setFromData.name(data.username);
        // setFromData.mobile(data.mobile);
        //적립금 받기
        setFromData(data);
      });
  }, []);
  console.log(fromData);
  const handelChange = e => {
    const { name, value } = e.target;
    setToData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const goToOrder = e => {
    fetch(`${API_BASE}/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        toName: toData.userName,
        toMobile: toData.mobile,
        toAddress: toData.address,
      }),
    })
      .then(response => response.json())
      .then(data => {});
    Order();
  };

  const navigate = useNavigate();
  const Order = () => {
    navigate('/Payment');
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
                {content.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td className="index">
                        <div className="indexName">{data}</div>
                      </td>
                      <td className="indexInfo">
                        <div className="indexInfoName">hi</div>
                      </td>
                    </tr>
                  );
                })}
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
        <PaymentList />
        <button className="goToBack" type="button">
          이전으로
        </button>
        <button onClick={goToOrder} className="goToNext" type="button">
          다음으로
        </button>
      </div>
    </div>
  );
};

export default Payment;

const content = ['이메일', '이름', '전화번호'];
