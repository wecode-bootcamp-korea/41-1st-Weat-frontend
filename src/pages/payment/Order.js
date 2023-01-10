import React from 'react';
import './Order.scss';

const order = () => {
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
                초신선 초원에서 자연 방목한 삼겹살
              </div>
              <div className="paymentFinalItemRight">
                <div className="paymentFinalItemWeight">300g 기준</div>
                <div className="paymentFinalItemCount">1팩</div>
                <div className="paymentFinalItemPrice">11,900원</div>
              </div>
            </div>
            <div className="totalPriceList">
              <div className="totalPrice">
                <h5 className="totalPriceName">총 상품금액</h5>
                <span className="totalPriceNum">10,000 </span>
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
                <span className="estimatedAmountNum">10,000 </span>
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

export default order;
