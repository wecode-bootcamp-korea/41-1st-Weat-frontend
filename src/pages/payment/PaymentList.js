import React, { useState, useEffect } from 'react';
import { API_BASE } from '../../apiData';
import './PaymentList.scss';

const PaymentList = ({ point }) => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE}/carts`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(result => result.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

  const totalAmount =
    cartData.reduce((prev, cur) => {
      prev += parseInt(cur.price) * cur.quantity;
      return prev;
    }, 0) || 0;

  const shipPrice = 3500;

  return (
    <div>
      <div className="paymentContents">
        <h4 className="paymentContentsTitle">결제방법</h4>
        <h5 className="paymentPoint">포인트: {point}</h5>
        <h4 className="paymentFinalTitle">주문 상품</h4>
        <div className="paymentFinal">
          <div className="paymentFinalItems">
            <div className="paymentFinalItemMap">
              {cartData.map((item, key) => {
                return (
                  <div className="list" key={key}>
                    <div className="paymentFinalItemLeft">
                      {item.productName}삼겹살
                    </div>
                    <div className="paymentFinalItemWeight">
                      {item.optionName}옵션
                    </div>
                    <div className="paymentFinalItemCount">
                      {item.quantity}1팩 갯수
                    </div>
                    <div className="paymentFinalItemPrice">
                      {item.price}가격
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="totalPriceList">
              <div className="totalPrice">
                <h5 className="totalPriceName">총 상품금액</h5>
                <span className="totalPriceNum">{totalAmount}</span>
                <span className="totalPriceWon">원</span>
              </div>
              <div className="plusIcon">+</div>
              <div className="totalShippingPrice">
                <h5 className="totalShippingPriceName">배송비</h5>
                <span className="totalShippingPriceNum">{shipPrice} </span>
                <span className="totalShippingPriceWon">원</span>
              </div>
              <div className="equalIcon">=</div>
              <div className="estimatedAmount">
                <h5 className="estimatedAmountName">예상 결제 금액</h5>
                <span className="estimatedAmountNum">
                  {totalAmount + shipPrice}
                </span>
                <span className="estimatedAmountWon">원</span>
              </div>
            </div>
          </div>
        </div>
        <div className="shippingInformationTitle">
          배송 정보
          <div className="shippingInformation">
            2023-01-01(금)오전7시도착예정
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentList;
