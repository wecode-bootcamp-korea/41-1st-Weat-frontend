import React, { useState, useEffect } from 'react';
import './PaymentFinal.scss';

const PaymentFinal = () => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    fetch('/data/meatData.json')
      .then(result => result.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

  const totalPrice =
    cartData.reduce((prev, cur) => {
      prev += cur.price * cur.quantity;
      return prev;
    }, 0) || 0;
  const shippingPrice = 3500;

  return (
    <div className="paymentFinal">
      <h1 className="paymentFinalFinish">주문 완료 되었습니다.</h1>
      <h5 className="paymentFinalProductTitle">상품 정보</h5>
      <table className="paymentFinalContents">
        <thead>
          <tr className="paymentFinalHeader">
            <th className="paymentFinalHeaderName">상품명</th>
            <th className="paymentFinalHeaderOption">옵션</th>
            <th className="paymentFinalHeaderCount">수량</th>
            <th className="paymentFinalHeaderUnit">단위</th>
            <th className="paymentFinalHeaderPrice">가격</th>
            <th className="paymentFinalHeaderStatus">상태</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((data, index) => (
            // { setCartData(...cartData, (data.price * 1).toLocaleString())}
            <tr className="paymentFinalItems" key={index}>
              <th className="paymentFinalItemsName">{data.productId}</th>
              <th className="paymentFinalItemsOption">
                {data.productOptionId}
              </th>
              <th className="paymentFinalItemsCount">{data.quantity}</th>
              <th className="paymentFinalItemsUnit">
                {(data.baseUnit * data.quantity).toLocaleString()}g
              </th>
              <th className="paymentFinalItemsPrice">
                {(data.price * data.quantity).toLocaleString()}원
              </th>
              <th className="paymentFinalItemsStatus">무게확정</th>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className="paymentInfo">결제 정보</h5>
      <div className="itemPayment">
        <div className="itemPaymentPrice">
          <div className="itemPaymentPriceLeft">상품합계</div>
          <div className="itemPaymentPriceRight">
            {totalPrice.toLocaleString()}원
          </div>
        </div>
        <div className="itemPaymentPoint">
          <div className="itemPaymentPointLeft">차감 후 적립금</div>
          <div className="itemPaymentPointRight">30,000P</div>
        </div>
        <div className="itemPaymentShippingPrice">
          <div className="itemPaymentShippingPriceLeft">배송비</div>
          <div className="itemPaymentShippingPriceRight">
            {shippingPrice.toLocaleString()}원
          </div>
        </div>
        <div className="itemPaymentFinalPrice">
          <div className="itemPaymentFinalPriceLeft">결제총액</div>
          <div className="itemPaymentFinalPriceRight">
            {(totalPrice + shippingPrice).toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFinal;
