import React, { useState, useEffect } from 'react';
import './PaymentList.scss';

const PaymentList = () => {
  const [cartData, setCartData] = useState('');
  useEffect(() => {
    fetch('http://10.58.52.225:3000/carts/', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJpYXQiOjE2NzI5ODIzMzJ9.pvIOMpksPoho8JSwWFmXh9UzKBgVPnzYq9a_8ZM31ZA',
      },
    })
      .then(result => result.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

  const totalAmount = () => {
    cartData.reduce((acc, cur) => {
      acc += cur.price * cur.count;
      return acc;
    }, 0);
  };

  return (
    <div>
      <div className="paymentContents">
        <h4 className="paymentContentsTitle">결제방법</h4>
        <h5 className="paymentPoint">포인트: 1,234 p</h5>
        <h4 className="paymentFinalTitle">주문 상품</h4>
        <div className="paymentFinal">
          <div className="paymentFinalItems">
            <div className="paymentFinalItemMap">
              <div className="paymentFinalItemLeft">
                {cartData.productId}삼겹살
              </div>
              <div className="paymentFinalItemRight">
                <div className="paymentFinalItemWeight">
                  {cartData.baseUnit} 중량
                </div>
                <div className="paymentFinalItemCount">1팩 갯수</div>
                <div className="paymentFinalItemPrice">
                  {cartData.price} 가격
                </div>
              </div>
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
                <span className="totalShippingPriceNum">3,500 </span>
                <span className="totalShippingPriceWon">원</span>
              </div>
              <div className="equalIcon">=</div>
              <div className="estimatedAmount">
                <h5 className="estimatedAmountName">예상 결제 금액</h5>
                <span className="estimatedAmountNum">
                  {{ totalAmount } + 3500}
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
