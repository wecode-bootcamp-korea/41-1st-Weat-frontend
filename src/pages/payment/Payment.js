import React, { useState } from 'react';
import Order from './Order';
import './Payment.scss';

const Payment = () => {
  const [addressData, setAddressData] = useState({
    userName: '',
    mobile: '',
    address: '',
  });

  const handelChange = e => {
    const { name, value } = e.target;
    setAddressData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = e => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        userName: addressData.userName,
        mobile: addressData.mobile,
        address: addressData.address,
      }),
    })
      .then(response => response.json())
      .then(data => {});
  };

  return (
    <div className="payment">
      <h1 className="title">주문하기</h1>
      <div className="info">
        <img src="/images/contract.png" alt="write" />
        <span className="orderInfo">01.배송지 정보</span>
        <img src="/images/next.png" alt="write" />
        <div className="blur">
          <img src="/images/payment.png" alt="write" />
          <span className="orderInfo">02.결제 정보</span>
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
                    <div className="indexInfoName">이름</div>
                  </td>
                </tr>
                <tr>
                  <td className="index">
                    <div className="indexName">전화번호</div>
                  </td>
                  <td className="indexInfo">
                    <div className="indexInfoName">010</div>
                  </td>
                </tr>
                <tr>
                  <td className="index">
                    <div className="indexName">이메일</div>
                  </td>
                  <td className="indexInfo">
                    <div className="indexInfoName">이메일</div>
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
                        value={addressData.userName}
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
                        value={addressData.mobile}
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
                        value={addressData.address}
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
        <Order />
        <button className="goToBack" type="button">
          이전으로
        </button>
        <button onClick={handleClick} className="goToNext" type="button">
          다음으로
        </button>
      </div>
    </div>
  );
};

export default Payment;
