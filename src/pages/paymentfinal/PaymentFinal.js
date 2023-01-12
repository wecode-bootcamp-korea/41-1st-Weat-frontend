import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { API_BASE } from '../../apiData';
import './PaymentFinal.scss';

const mockData = {
  deliveryObj: {
    from_name: '박정은',
    from_mobile: '010-1004-1004',
    from_email: 'angel@wecode.com',
    to_name: '배경민',
    to_mobile: '010-1111-1111',
    to_address: '선릉 2호점',
    delivery_charge: '3500.00',
  },
  productOrderList: [
    {
      thumbnail:
        'https://user-images.githubusercontent.com/53294075/210498031-5020d9b8-b847-46b6-8576-be70e06435c9.jpg',
      productName: '돼지 삼겹살 구이용',
      optionName: '보통(16mm)',
      baseUnit: '600g',
      price: '19800.00',
      quantity: 1,
    },
  ],
  point: '708570.00',
};

const shippingPrice = 3500;

const PaymentFinal = () => {
  const location = useLocation();
  const orderId = location?.state?.orderId;

  const [paymentData, setPaymentData] = useState(mockData);
  useEffect(() => {
    if (!orderId) {
      return;
    }
    fetch(`${API_BASE}/orders/${orderId}`)
      .then(result => result.json())
      .then(data => {
        setPaymentData(data);
      });
  }, [orderId]);

  const totalPrice =
    paymentData.productOrderList.reduce((prev, cur) => {
      prev += cur.price * cur.quantity;
      return prev;
    }, 0) || 0;
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
          {paymentData.productOrderList.map((data, index) => (
            <tr className="paymentFinalItems" key={index}>
              <th className="paymentFinalItemsName">{data.productName}</th>
              <th className="paymentFinalItemsOption">{data.optionName}</th>
              <th className="paymentFinalItemsCount">{data.quantity}</th>
              <th className="paymentFinalItemsUnit">
                {data.baseUnit.toLocaleString()}
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
          <div className="itemPaymentPointRight">
            {(paymentData.point - totalPrice).toLocaleString()}P
          </div>
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
