import React, { useState } from 'react';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment">
      <h1 className="title">주문하기</h1>
      <div className="info">
        <img src="/images/contract.png" alt="write" />
        <span className="orderInfo">01.배송지 정보</span>
        <img src="/images/next.png" alt="write" />
        <img src="/images/payment.png" alt="write" />
        <span className="orderInfo">02.결제 정보</span>
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
          <button className="goToBack" type="button">
            이전으로
          </button>
          <button className="goToNext" type="button">
            다음으로
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
