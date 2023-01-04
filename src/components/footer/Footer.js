import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeebly } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footerNav">
        <div className="pWrap">
          <p>인재채용</p>
          <p>ㅣ</p>
          <p>이용약관</p>
          <p>ㅣ</p>
          <p>
            <b>개인정보처리방침</b>
          </p>
        </div>
        <div className="navIcon">
          <FontAwesomeIcon icon={faComment} />
          <FontAwesomeIcon icon={faInstagram} className="faInstagram" />
        </div>
      </section>
      <section className="footerMain">
        <div className="footerLeft">
          <div className="leftLogo">
            <FontAwesomeIcon icon={faWeebly} className="leftIcon" />
            <p className="leftName">WEAT</p>
          </div>
          {FOOTER_DATA.map(obj => (
            <ul className="footerList" key={obj.id}>
              <li>
                {obj.company} 대표이사: {obj.ceo} ㅣ 주소: {obj.address}
              </li>
              <br />
              <li>
                사업자등록번호: {obj.crn} ㅣ 통신판매업신고번호: {obj.number}
              </li>
              <br />
              <li>개인정보관리책임자: {obj.name}</li>
            </ul>
          ))}
          <p className="weatRights">© 2021 WEAT Inc. All rights reserved.</p>
        </div>
        <div className="footerRight">
          <div className="serviceCenter">고객센터</div>
          <div className="centerNumber">1234-5678</div>
          <p className="csTime">
            월 - 토 : 08:30 - 17:30 <br />
            점심 : 12:30 - 13:30 <br />
            (토,일 및 공휴일 휴무)
          </p>
          <p className="sendEmail">
            이메일 :
            <span>
              <a href="mailto:aa@aa.aa">help@weat.com</a>
            </span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

const FOOTER_DATA = [
  {
    id: 1,
    company: '(주)WEAT',
    ceo: 'WEAT',
    address: '서울특별시 강남구 테헤란로 427 위워크',
    crn: '123-45-6789',
    number: '2023-WEAT-1234',
    name: 'WEAT(Weat@)',
  },
];
